---
type: entity
title: Ghostscript
tags: [software, target, vulnerability]
related: [恒脑安全智能体, claude-code-security, 0day漏洞]
created: 2026-03-02
updated: 2026-03-02
sources: ["13-vs-3，国产安全ai悄悄完成了对claude的超越.md"]
---

# Ghostscript

**Ghostscript** 是一套开源的软件套件，主要用于处理 PostScript 和 PDF 文件。在 [[恒脑安全智能体]] 与 [[Claude Code Security]] 的对比测试中，Ghostscript 是主要的测试目标之一。

## 相关漏洞
在此次测试中，恒脑在 Ghostscript 项目中发现了 7 个全新的 [[0day漏洞]]，而 Claude Code Security 之前发现了 3 个（包括 `gs_type1_blend` 和 `pLZWData` 相关漏洞）。