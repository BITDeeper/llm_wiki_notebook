// Chat widget client-side logic — runs in the browser on GitHub Pages.
// Bundled by Quartz as an inline script (afterDOMLoaded).
//
// Default credentials are handled by the Cloudflare Worker (env vars).
// Users can override by setting their own keys in Settings.

;(() => {
  // ── Config ──────────────────────────────────────────────────────────────
  // Injected by the publish flow via window.__LLM_WIKI_CONFIG
  const injected = (window as any).__LLM_WIKI_CONFIG || {}

  const WORKER_URL = "https://twilight-violet-b5af.zhangpybit.workers.dev"

  // ── Settings helpers ────────────────────────────────────────────────────
  const KEYS = {
    apiKey: "llm-wiki-api-key",
    apiBaseUrl: "llm-wiki-api-base-url",
    githubPat: "llm-wiki-github-pat",
    githubRepo: "llm-wiki-github-repo",
    githubBranch: "llm-wiki-github-branch",
  }

  function getSetting(key: string): string {
    return localStorage.getItem(key) || ""
  }
  function setSetting(key: string, val: string) {
    if (val) localStorage.setItem(key, val)
    else localStorage.removeItem(key)
  }

  /** Get the effective API base URL (worker proxy) */
  function getApiBaseUrl(): string {
    return getSetting(KEYS.apiBaseUrl) || WORKER_URL
  }
  /** Get the effective GitHub repo, falling back to injected config */
  function getGithubRepo(): string {
    return getSetting(KEYS.githubRepo) || injected.githubRepo || ""
  }
  /** Get the effective GitHub branch */
  function getGithubBranch(): string {
    return getSetting(KEYS.githubBranch) || injected.githubBranch || "main"
  }

  // ── DOM refs ────────────────────────────────────────────────────────────
  const fab = document.getElementById("chat-widget-fab")!
  const panel = document.getElementById("chat-widget-panel")!
  const closeBtn = document.getElementById("chat-widget-close-btn")!
  const settingsBtn = document.getElementById("chat-widget-settings-btn")!
  const settingsModal = document.getElementById("chat-widget-settings-modal")!
  const messagesEl = document.getElementById("chat-widget-messages")!
  const inputEl = document.getElementById("chat-widget-input") as HTMLTextAreaElement
  const sendBtn = document.getElementById("chat-widget-send")!
  const saveBtn = document.getElementById("chat-settings-save")!
  const cancelBtn = document.getElementById("chat-settings-cancel")!

  // ── Toggle panel ──────────────────────────────────────────────────────
  fab.addEventListener("click", () => {
    panel.classList.toggle("hidden")
    if (!panel.classList.contains("hidden")) {
      inputEl.focus()
      loadContentIndex()
    }
  })
  closeBtn.addEventListener("click", () => panel.classList.add("hidden"))

  // ── Settings modal ─────────────────────────────────────────────────────
  settingsBtn.addEventListener("click", () => {
    ;(
      document.getElementById("chat-settings-api-key") as HTMLInputElement
    ).value = getSetting(KEYS.apiKey)
    ;(
      document.getElementById("chat-settings-api-base-url") as HTMLInputElement
    ).value = getSetting(KEYS.apiBaseUrl)
    ;(
      document.getElementById("chat-settings-github-pat") as HTMLInputElement
    ).value = getSetting(KEYS.githubPat)
    ;(
      document.getElementById("chat-settings-github-repo") as HTMLInputElement
    ).value = getSetting(KEYS.githubRepo)
    ;(
      document.getElementById("chat-settings-github-branch") as HTMLInputElement
    ).value = getSetting(KEYS.githubBranch) || getGithubBranch()
    settingsModal.classList.remove("hidden")
  })
  cancelBtn.addEventListener("click", () => settingsModal.classList.add("hidden"))
  saveBtn.addEventListener("click", () => {
    setSetting(
      KEYS.apiKey,
      (document.getElementById("chat-settings-api-key") as HTMLInputElement).value.trim(),
    )
    setSetting(
      KEYS.apiBaseUrl,
      (document.getElementById("chat-settings-api-base-url") as HTMLInputElement).value.trim(),
    )
    setSetting(
      KEYS.githubPat,
      (document.getElementById("chat-settings-github-pat") as HTMLInputElement).value.trim(),
    )
    setSetting(
      KEYS.githubRepo,
      (document.getElementById("chat-settings-github-repo") as HTMLInputElement).value.trim(),
    )
    setSetting(
      KEYS.githubBranch,
      (document.getElementById("chat-settings-github-branch") as HTMLInputElement).value.trim(),
    )
    settingsModal.classList.add("hidden")
    addMessage("system", "Settings saved.")
  })

  // ── Auto-resize textarea ───────────────────────────────────────────────
  inputEl.addEventListener("input", () => {
    inputEl.style.height = "auto"
    inputEl.style.height = Math.min(inputEl.scrollHeight, 100) + "px"
  })

  // ── Send message ───────────────────────────────────────────────────────
  sendBtn.addEventListener("click", handleSend)
  inputEl.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  })

  let isStreaming = false

  async function handleSend() {
    const query = inputEl.value.trim()
    if (!query || isStreaming) return

    addMessage("user", query)
    inputEl.value = ""
    inputEl.style.height = "auto"

    // Search context
    const context = searchWiki(query)
    const contextText = context
      .map((p) => `## ${p.title}\n${p.content}`)
      .join("\n\n---\n\n")

    const systemPrompt = `You are a helpful assistant with access to the user's personal wiki/knowledge base. When wiki context is provided, use it to give accurate, well-cited answers. When no relevant wiki context is available, answer the user's question directly using your own knowledge, or help execute the requested task. Always cite wiki page titles when referencing specific information from the context. Respond in the same language as the user's question.`

    const messages = [
      {
        role: "user",
        content: contextText
          ? `Based on these wiki pages:\n\n${contextText}\n\n---\n\nQuestion: ${query}`
          : query,
      },
    ]

    // Stream response
    isStreaming = true
    sendBtn.disabled = true
    const assistantEl = addMessage("assistant", "")
    let fullText = ""

    const baseUrl = getApiBaseUrl()
    const apiEndpoint = `${baseUrl.replace(/\/+$/, "")}/v1/messages`

    const userApiKey = getSetting(KEYS.apiKey)
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
    }
    // Only send user's own API key if they configured one;
    // otherwise the worker injects the default from its env.
    if (userApiKey) {
      headers["x-api-key"] = userApiKey
    }

    try {
      const resp = await fetch(apiEndpoint, {
        method: "POST",
        headers,
        body: JSON.stringify({
          model: "glm-4.7",
          max_tokens: 214800,
          system: systemPrompt,
          messages,
          stream: true,
        }),
      })

      if (!resp.ok) {
        const err = await resp.text()
        throw new Error(`API error ${resp.status}: ${err}`)
      }

      const reader = resp.body!.getReader()
      const decoder = new TextDecoder()
      let buffer = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })

        const lines = buffer.split("\n")
        buffer = lines.pop() || ""

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue
          const data = line.slice(6).trim()
          if (data === "[DONE]") continue
          try {
            const event = JSON.parse(data)
            if (
              event.type === "content_block_delta" &&
              event.delta?.type === "text_delta"
            ) {
              fullText += event.delta.text
              assistantEl.textContent = fullText
              messagesEl.scrollTop = messagesEl.scrollHeight
            }
          } catch {
            // skip malformed chunks
          }
        }
      }
    } catch (err: any) {
      if (!fullText) {
        assistantEl.textContent = ""
        addMessage("error", err.message || "Failed to get response")
      }
    } finally {
      isStreaming = false
      sendBtn.disabled = false
    }
  }

  // ── Message rendering ──────────────────────────────────────────────────
  function addMessage(
    role: "user" | "assistant" | "error" | "system",
    text: string,
  ): HTMLElement {
    const div = document.createElement("div")
    div.className = `chat-msg ${role}`
    div.dataset.role = role
    div.textContent = text
    messagesEl.appendChild(div)
    messagesEl.scrollTop = messagesEl.scrollHeight
    return div
  }

  // ── Save chat to wiki ──────────────────────────────────────────────────
  function collectChatMessages(): { role: string; text: string }[] {
    const msgs: { role: string; text: string }[] = []
    for (const el of messagesEl.querySelectorAll(".chat-msg")) {
      const role = (el as HTMLElement).dataset.role || ""
      const text = (el as HTMLElement).textContent || ""
      if (role === "user" || role === "assistant") {
        msgs.push({ role, text })
      }
    }
    return msgs
  }

  function chatToMarkdown(msgs: { role: string; text: string }[]): string {
    const now = new Date()
    const dateStr = now.toISOString().slice(0, 10)
    const firstQ = msgs.find((m) => m.role === "user")?.text || "chat"
    const title = firstQ.length > 40 ? firstQ.slice(0, 40) + "..." : firstQ

    let md = `---\ntitle: "${title.replace(/"/g, '\\"')}"\ndate: ${dateStr}\ntags:\n  - chat\n---\n\n`
    md += `# ${title}\n\n`
    for (const m of msgs) {
      if (m.role === "user") {
        md += `## Question\n\n${m.text}\n\n`
      } else {
        md += `## Answer\n\n${m.text}\n\n`
      }
    }
    return md
  }

  let isExportMode = false

  function toggleExportMode() {
    isExportMode = !isExportMode
    const msgs = messagesEl.querySelectorAll(".chat-msg")
    msgs.forEach((el) => {
      const role = (el as HTMLElement).dataset.role
      if (role === "user" || role === "assistant") {
        ;(el as HTMLElement).style.cursor = isExportMode ? "pointer" : ""
        if (isExportMode) {
          ;(el as HTMLElement).style.opacity = "0.4"
          ;(el as HTMLElement).dataset.selected = "false"
        } else {
          ;(el as HTMLElement).style.opacity = ""
          delete (el as HTMLElement).dataset.selected
        }
      }
    })

    var existingBar = document.getElementById("chat-export-bar")
    if (existingBar) existingBar.remove()

    if (isExportMode) {
      const bar = document.createElement("div")
      bar.id = "chat-export-bar"
      bar.style.cssText =
        "display:flex;gap:8px;padding:8px 16px;border-top:1px solid var(--lightgray,#e5e5e5);background:var(--light,#faf8f8)"
      bar.innerHTML = `
        <button id="chat-export-select-all" style="flex:1;padding:6px;border:1px solid var(--lightgray,#e5e5e5);border-radius:6px;background:transparent;cursor:pointer;font-size:12px">Select All</button>
        <button id="chat-export-confirm" style="flex:1;padding:6px;border:none;border-radius:6px;background:var(--tertiary,#84a98c);color:white;cursor:pointer;font-size:12px">Save to Wiki</button>
        <button id="chat-export-cancel" style="flex:1;padding:6px;border:1px solid var(--lightgray,#e5e5e5);border-radius:6px;background:transparent;cursor:pointer;font-size:12px">Cancel</button>
      `
      ;(document.getElementById("chat-widget-input-area")!).before(bar)

      // Click to toggle selection
      msgs.forEach((el) => {
        const role = (el as HTMLElement).dataset.role
        if (role === "user" || role === "assistant") {
          el.addEventListener("click", function handler() {
            if (!isExportMode) {
              el.removeEventListener("click", handler)
              return
            }
            const sel = (el as HTMLElement).dataset.selected === "true"
            ;(el as HTMLElement).dataset.selected = String(!sel)
            ;(el as HTMLElement).style.opacity = sel ? "0.4" : "1"
          })
        }
      })

      document.getElementById("chat-export-select-all")!.addEventListener("click", () => {
        msgs.forEach((el) => {
          const role = (el as HTMLElement).dataset.role
          if (role === "user" || role === "assistant") {
            ;(el as HTMLElement).dataset.selected = "true"
            ;(el as HTMLElement).style.opacity = "1"
          }
        })
      })

      document.getElementById("chat-export-cancel")!.addEventListener("click", () => {
        toggleExportMode()
      })

      document.getElementById("chat-export-confirm")!.addEventListener("click", async () => {
        const selected: { role: string; text: string }[] = []
        msgs.forEach((el) => {
          if ((el as HTMLElement).dataset.selected === "true") {
            selected.push({
              role: (el as HTMLElement).dataset.role || "",
              text: (el as HTMLElement).textContent || "",
            })
          }
        })

        if (selected.length === 0) {
          addMessage("error", "No messages selected.")
          return
        }

        const md = chatToMarkdown(selected)
        const now = new Date()
        const ts = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}-${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}`
        const fileName = `chat-${ts}.md`

        addMessage("system", `Saving ${fileName}...`)
        toggleExportMode()

        try {
          const repo = getGithubRepo()
          const branch = getGithubBranch()

          if (!repo) {
            throw new Error("GitHub repo not configured. Set it in Settings or configure publish target.")
          }

          const base64 = btoa(unescape(encodeURIComponent(md)))
          const path = `raw/sources/${fileName}`

          // Route through the worker's GitHub proxy
          const baseUrl = getApiBaseUrl().replace(/\/+$/, "")
          const userPat = getSetting(KEYS.githubPat)
          const uploadHeaders: Record<string, string> = {
            "Content-Type": "application/json",
          }
          // Only send user's own PAT if configured;
          // otherwise the worker injects the default from its env.
          if (userPat) {
            uploadHeaders["Authorization"] = `Bearer ${userPat}`
          }

          const resp = await fetch(
            `${baseUrl}/github/repos/${repo}/contents/${path}`,
            {
              method: "PUT",
              headers: uploadHeaders,
              body: JSON.stringify({
                message: `chat: ${fileName}`,
                content: base64,
                branch,
              }),
            },
          )

          if (!resp.ok) {
            let detail = `Save failed: ${resp.status}`
            try {
              const err = await resp.json()
              detail = err.message || detail
            } catch {}
            throw new Error(detail)
          }

          addMessage("system", `Saved as raw/sources/${fileName}`)
        } catch (err: any) {
          addMessage("error", err.message || "Save failed")
        }
      })
    }
  }

  // ── Wiki search (client-side token matching) ───────────────────────────
  interface WikiPage {
    slug: string
    title: string
    content: string
    tags: string[]
    links: string[]
  }

  let contentIndex: Record<string, WikiPage> | null = null

  async function loadContentIndex() {
    if (contentIndex) return
    try {
      const resp = await fetch("/static/contentIndex.json")
      if (resp.ok) {
        contentIndex = await resp.json()
      }
    } catch {
      console.warn("Failed to load content index")
    }
  }

  const STOP_WORDS = new Set([
    "的", "是", "了", "什么", "在", "有", "和", "与", "对", "从",
    "the", "is", "a", "an", "what", "how", "are", "was", "were",
    "do", "does", "did", "be", "been", "being", "have", "has", "had",
    "it", "its", "in", "on", "at", "to", "for", "of", "with", "by",
  ])

  function tokenize(query: string): string[] {
    const raw = query
      .toLowerCase()
      .split(/[\s,，。！？、；：""''（）()\-_/\\·~～…]+/)
      .filter((t) => t.length > 1)
      .filter((t) => !STOP_WORDS.has(t))

    const tokens: string[] = []
    for (const token of raw) {
      const hasCJK = /[\u4e00-\u9fff\u3400-\u4dbf]/.test(token)
      if (hasCJK && token.length > 2) {
        const chars = [...token]
        for (let i = 0; i < chars.length - 1; i++) {
          tokens.push(chars[i] + chars[i + 1])
        }
        for (const ch of chars) {
          if (!STOP_WORDS.has(ch)) tokens.push(ch)
        }
        tokens.push(token)
      } else {
        tokens.push(token)
      }
    }
    return [...new Set(tokens)]
  }

  function searchWiki(query: string, topK = 5): { title: string; content: string }[] {
    if (!contentIndex) return []

    const tokens = tokenize(query)
    if (tokens.length === 0) return []

    const queryLower = query.toLowerCase()
    const scored: { title: string; content: string; score: number }[] = []

    for (const [, page] of Object.entries(contentIndex)) {
      const titleLower = page.title.toLowerCase()
      const contentLower = page.content.toLowerCase()
      let score = 0

      // Exact filename match
      if (titleLower === queryLower) score += 200
      // Phrase in title
      if (titleLower.includes(queryLower)) score += 50
      // Phrase in content
      const phraseCount = contentLower.split(queryLower).length - 1
      score += Math.min(phraseCount, 10) * 20
      // Token matching
      for (const token of tokens) {
        if (titleLower.includes(token)) score += 5
        if (contentLower.includes(token)) score += 1
      }

      if (score > 0) {
        scored.push({
          title: page.title,
          content: page.content.slice(0, 2000),
          score,
        })
      }
    }

    return scored.sort((a, b) => b.score - a.score).slice(0, topK)
  }

  // ── Source upload ──────────────────────────────────────────────────────
  ;(window as any).__llmWikiUpload = async function (file: File): Promise<string> {
    const repo = getGithubRepo()
    const branch = getGithubBranch()

    if (!repo) {
      throw new Error("GitHub repo not configured. Set it in Settings or configure publish target.")
    }

    const content = await fileToBase64(file)
    const path = `raw/sources/${file.name}`

    // Route through the worker's GitHub proxy
    const baseUrl = getApiBaseUrl().replace(/\/+$/, "")
    const userPat = getSetting(KEYS.githubPat)
    const uploadHeaders: Record<string, string> = {
      "Content-Type": "application/json",
    }
    if (userPat) {
      uploadHeaders["Authorization"] = `Bearer ${userPat}`
    }

    const resp = await fetch(
      `${baseUrl}/github/repos/${repo}/contents/${path}`,
      {
        method: "PUT",
        headers: uploadHeaders,
        body: JSON.stringify({
          message: `upload: ${file.name}`,
          content,
          branch,
        }),
      },
    )

    if (!resp.ok) {
      let detail = `Upload failed: ${resp.status}`
      try {
        const err = await resp.json()
        detail = err.message || detail
      } catch {}
      throw new Error(detail)
    }

    return `Uploaded ${file.name} to ${repo}/${branch}`
  }

  function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result as string
        resolve(result.split(",")[1])
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  // ── Upload button in chat ──────────────────────────────────────────────
  const uploadInput = document.createElement("input")
  uploadInput.type = "file"
  uploadInput.accept = ".md,.txt,.pdf,.docx,.pptx,.xlsx,.json,.html"
  uploadInput.style.display = "none"
  document.body.appendChild(uploadInput)

  // Add save-chat button next to settings
  const saveChatBtn = document.createElement("button")
  saveChatBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>`
  saveChatBtn.title = "Save chat to wiki"
  saveChatBtn.style.cssText = "background:none;border:none;color:white;cursor:pointer;padding:4px;border-radius:4px"
  saveChatBtn.addEventListener("click", () => {
    const msgs = collectChatMessages()
    if (msgs.length === 0) {
      addMessage("system", "No messages to save.")
      return
    }
    toggleExportMode()
  })
  ;(document.getElementById("chat-widget-header-actions"))!.prepend(saveChatBtn)

  // Add upload button next to save-chat
  const uploadBtn = document.createElement("button")
  uploadBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`
  uploadBtn.title = "Upload source"
  uploadBtn.style.cssText = "background:none;border:none;color:white;cursor:pointer;padding:4px;border-radius:4px"
  uploadBtn.addEventListener("click", () => uploadInput.click())
  ;(document.getElementById("chat-widget-header-actions"))!.prepend(uploadBtn)

  uploadInput.addEventListener("change", async () => {
    const file = uploadInput.files?.[0]
    if (!file) return
    addMessage("system", `Uploading ${file.name}...`)
    try {
      const result = await (window as any).__llmWikiUpload(file)
      addMessage("system", result)
    } catch (err: any) {
      addMessage("error", err.message || "Upload failed")
    }
    uploadInput.value = ""
  })
})()
