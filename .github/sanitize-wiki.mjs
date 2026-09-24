#!/usr/bin/env node
// Sanitize wiki/ content before the Quartz build.
//
// Why: the wiki tool sometimes writes file names and wikilinks whose
// percent-encoding is truncated mid-escape (e.g. "...%E4%B8--1bdjp2h") or
// contains a literal "%" (e.g. "...90%，"). Quartz's transformInternalLink()
// calls decodeURI() on every link href and THROWS "URI malformed" on those,
// which kills `npx quartz build` in CI.
//
// This script runs on the ephemeral Actions checkout (never touches the
// repo's tracked files):
//   1. Renames any file whose name breaks decodeURI() or merely contains
//      "%"-escapes (Quartz's slugify expands "%" into "-percent", which
//      inflates emitted filenames past OS limits):
//      - valid %XX runs are decoded back to readable UTF-8
//      - truncated/incomplete escape runs are dropped
//      - remaining literal "%" becomes "％" (fullwidth, decodeURI-safe)
//   2. Rewrites every reference to those files (wikilinks, markdown links,
//      raw href/src attributes, frontmatter slug arrays). References are
//      matched by exact slug/basename, or by the unique "--<id>" name suffix
//      when the wiki tool re-truncated a link so it no longer matches the
//      file name exactly.
//   3. Verifies that after sanitizing, every file path and every link target
//      survives decodeURI(), no "%" remains in any file name, and names stay
//      under 200 bytes. Exits 1 with a report otherwise.
//
// Usage: node .github/sanitize-wiki.mjs [wikiDir]   (default: ./wiki)

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const repoRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const WIKI_DIR = path.resolve(repoRoot, process.argv[2] || "wiki")

// ── name sanitization ────────────────────────────────────────────────────

const utf8 = new TextDecoder("utf-8", { fatal: false })

// Decode a run of %XX escapes byte-wise with a non-fatal UTF-8 decoder:
// valid characters are kept, only the truncated tail becomes U+FFFD and
// is dropped. (decodeURIComponent on the whole run would throw and lose
// the valid prefix too.)
function decodeRun(run) {
  const bytes = new Uint8Array(run.length / 3)
  for (let i = 0; i < run.length; i += 3) {
    bytes[i / 3] = parseInt(run.slice(i + 1, i + 3), 16)
  }
  return utf8.decode(bytes).replace(/�/g, "")
}

export function sanitizeSlug(slug) {
  let s = slug.replace(/(?:%[0-9A-Fa-f]{2})+/g, decodeRun)
  // Any remaining literal "%" was never a valid escape start — keep it
  // visually as a fullwidth percent, which decodeURI() accepts.
  s = s.replace(/%/g, "％")
  // Slug/filesystem hygiene: no spaces, no Windows-illegal ASCII, collapse
  // dash runs, trim dashes/spaces/dots at the ends.
  s = s.replace(/[<>:"\\|?*\x00-\x1f]/g, "-")
  s = s.replace(/\s+/g, "-")
  s = s.replace(/-{3,}/g, "--")
  s = s.replace(/^[-.]+|[-. ]+$/g, "")
  return s
}

function pathIsBad(p) {
  try {
    decodeURI(p)
    return false
  } catch {
    return true
  }
}

// ── walk ─────────────────────────────────────────────────────────────────

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p, out)
    else out.push(p)
  }
  return out
}

const toPosix = (p) => p.split(path.sep).join("/")

// ── 1. plan renames ──────────────────────────────────────────────────────

const allFiles = walk(WIKI_DIR)
const mdFiles = allFiles.filter((f) => f.endsWith(".md"))

const renameMap = new Map() // old rel slug (no .md) -> new rel slug
for (const f of allFiles) {
  const rel = toPosix(path.relative(WIKI_DIR, f))
  const fileName = path.basename(rel)
  // Rename when the name breaks decodeURI() OR merely contains %-escapes:
  // Quartz's slugify expands every "%" into "-percent", so even valid
  // encodings like "%E5%BA%93" blow up emitted filenames past OS limits.
  if (!pathIsBad(rel) && !fileName.includes("%")) continue
  const noExt = rel.replace(/\.md$/, "")
  const dir = path.dirname(noExt)
  const base = path.basename(noExt)
  let newBase = sanitizeSlug(base)
  // keep names unique within the directory
  if (newBase !== base) {
    let candidate = newBase
    for (let i = 2; ; i++) {
      const probe = path.join(WIKI_DIR, dir, candidate + ".md")
      const plannedSlug = dir === "." ? candidate : `${dir}/${candidate}`
      const planned = [...renameMap.values()].some((v) => v === plannedSlug)
      if (!fs.existsSync(probe) && !planned) break
      candidate = `${newBase}-${i}`
    }
    newBase = candidate
  }
  const newSlug = dir === "." ? newBase : `${dir}/${newBase}`
  renameMap.set(noExt, newSlug)
}

// Reverse lookup helpers: match references by basename or full slug
const byOldSlug = new Map(renameMap)
const byOldBase = new Map()
for (const [oldS, newS] of renameMap) byOldBase.set(oldS.split("/").pop(), newS)

// Unique "--<id>" suffix map (the wiki tool appends a unique id to RSS
// slugs; links re-truncated by the tool can still be matched by it).
const idToFile = new Map()
const idCount = new Map()
{
  const collect = (slug) => {
    const m = slug.split("/").pop().match(/--([0-9a-z]{3,12})$/)
    if (!m) return
    idCount.set(m[1], (idCount.get(m[1]) ?? 0) + 1)
    idToFile.set(m[1], slug)
  }
  for (const f of mdFiles) collect(toPosix(path.relative(WIKI_DIR, f)).replace(/\.md$/, ""))
}
const ambiguousIds = new Set([...idCount].filter(([, n]) => n > 1).map(([k]) => k))

function mapRef(core) {
  // exact slug match, then basename match, then unique id suffix
  if (byOldSlug.has(core)) return byOldSlug.get(core)
  const bare = core.replace(/^\.\//, "").replace(/^\//, "").replace(/\/$/, "")
  if (byOldSlug.has(bare)) return byOldSlug.get(bare)
  const base = bare.split("/").pop()
  if (byOldBase.has(base)) return byOldBase.get(base)
  const idm = base.match(/--([0-9a-z]{3,12})$/)
  if (idm && !ambiguousIds.has(idm[1]) && idToFile.has(idm[1])) {
    const oldSlug = idToFile.get(idm[1])
    return byOldSlug.get(oldSlug) ?? oldSlug
  }
  // no file matches; if the ref itself is decodeURI-unsafe, sanitize in place
  try {
    decodeURI(core)
    return null // already fine
  } catch {
    return sanitizeSlug(core)
  }
}

// ── 2. rewrite references ────────────────────────────────────────────────

const WIKILINK = /\[\[([^\]]+)\]\]/g
const MDLINK = /\]\(([^)\s]+)([^)]*)\)/g
const ATTR = /(href|src)="([^"]+)"/g
const FM_ARRAY = /^(\s*(?:related|sources|causes|effects|aliases):\s*)(\[.*\])\s*$/gm

function splitAnchor(t) {
  const i = t.indexOf("#")
  return i === -1 ? [t, ""] : [t.slice(0, i), t.slice(i)]
}

function mapTarget(t) {
  if (/^(https?:|mailto:|#|data:)/i.test(t)) return null
  let prefix = ""
  let core = t
  const pm = core.match(/^(\.{0,2}\/)/)
  if (pm) {
    prefix = pm[1]
    core = core.slice(pm[1].length)
  }
  let fragment = ""
  ;[core, fragment] = splitAnchor(core)
  const hadExt = /\.md$/i.test(core)
  core = core.replace(/\.md$/i, "")
  const mapped = mapRef(core)
  if (mapped == null && fragment === "") return null
  let newFragment = fragment
  if (fragment && !safeDecode(fragment)) newFragment = sanitizeSlug(fragment)
  if (mapped == null && newFragment === fragment) return null
  const outCore = (mapped ?? core) + (hadExt ? ".md" : "")
  return prefix + outCore + newFragment
}

function safeDecode(s) {
  try {
    decodeURI(s)
    return true
  } catch {
    return false
  }
}

function rewriteContent(text) {
  text = text.replace(WIKILINK, (m, inner) => {
    const [fp, ...rest] = inner.split("|")
    const alias = rest.length ? "|" + rest.join("|") : ""
    const mapped = mapTarget(fp.trim())
    return mapped == null ? m : `[[${mapped}${alias}]]`
  })
  text = text.replace(MDLINK, (m, target, rest) => {
    const mapped = mapTarget(target)
    return mapped == null ? m : `](${mapped}${rest})`
  })
  text = text.replace(ATTR, (m, attr, target) => {
    const mapped = mapTarget(target)
    return mapped == null ? m : `${attr}="${mapped}"`
  })
  text = text.replace(FM_ARRAY, (m, head, body) => {
    const items = body.split(",").map((it) => {
      const t = it.trim()
      if (!t || t === "[]") return it
      const q = t.match(/^["'](.*)["']$/)
      const core = q ? q[1] : t
      const mapped = mapRef(core.replace(/\.md$/, ""))
      if (mapped == null) return it
      return it.replace(core, mapped)
    })
    return head + items.join(",")
  })
  return text
}

let rewrittenFiles = 0
for (const f of mdFiles) {
  const orig = fs.readFileSync(f, "utf8")
  const text = rewriteContent(orig)
  if (text !== orig) {
    fs.writeFileSync(f, text)
    rewrittenFiles++
  }
}

// ── apply renames (after rewriting, so paths are stable during matching) ──

let renamedFiles = 0
for (const [oldSlug, newSlug] of renameMap) {
  const from = path.join(WIKI_DIR, oldSlug + ".md")
  const to = path.join(WIKI_DIR, newSlug + ".md")
  if (!fs.existsSync(from)) continue
  fs.renameSync(from, to)
  renamedFiles++
}

// ── 3. verify ────────────────────────────────────────────────────────────

const failures = []
for (const f of walk(WIKI_DIR)) {
  const rel = toPosix(path.relative(WIKI_DIR, f))
  if (!safeDecode(rel)) failures.push(`PATH(decodeURI)  ${rel}`)
  const base = path.basename(rel, ".md")
  if (base.includes("%")) failures.push(`PATH(%-escape; Quartz slugify would expand it)  ${rel}`)
  if (Buffer.byteLength(base, "utf8") > 200) failures.push(`PATH(too long)  ${rel}`)
}
for (const f of walk(WIKI_DIR).filter((f) => f.endsWith(".md"))) {
  const rel = toPosix(path.relative(WIKI_DIR, f))
  const text = fs.readFileSync(f, "utf8")
  const check = (t, where) => {
    if (!safeDecode(t)) failures.push(`${rel} ${where}  ${t}`)
  }
  for (const m of text.matchAll(WIKILINK)) check(m[1].split("|")[0], "wikilink")
  for (const m of text.matchAll(MDLINK)) check(m[1], "mdlink")
  for (const m of text.matchAll(ATTR)) check(m[2], "attr")
}

console.log(`sanitize-wiki: ${renamedFiles} files renamed, ${rewrittenFiles} files rewritten`)
if (failures.length > 0) {
  console.error(`sanitize-wiki: FAILED — ${failures.length} decodeURI-unsafe names/links remain:`)
  for (const f of failures.slice(0, 50)) console.error("  " + f)
  process.exit(1)
}
if (renamedFiles === 0 && rewrittenFiles === 0) {
  console.log("sanitize-wiki: nothing to fix")
} else {
  console.log("sanitize-wiki: all names and links decodeURI-safe")
}
