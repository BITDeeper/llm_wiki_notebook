---
type: concept
title: Fork Bomb
tags: [security, malware, system-crash]
related: [供应链投毒, litellm, pypi]
created: 2026-03-26
updated: 2026-03-26
sources: ["连karpathy都怕了！9千万级ai包被投毒，竟靠黑客写出bug救命.md"]
---

# Fork Bomb

Fork Bomb（叉子炸弹）是一种恶意程序或指令，通过不断创建新进程（递归调用）来迅速耗尽系统的资源（如 CPU 时间、内存或进程表条目），导致系统崩溃或死机，从而使所有正常服务停止响应。

## 在 LiteLLM 事件中的角色

在 [[LiteLLM]] [[供应链投毒]] 事件中，Fork Bomb 意外地成为了“救命稻草”。

- **触发机制**：攻击者在恶意 `.pth` 文件中编写的代码逻辑存在缺陷。每当 Python 解释器启动并加载该 `.pth` 文件时，它会触发一个子进程；而该子进程在启动时又会再次加载同一个 `.pth` 文件，从而触发新的子进程。
- **结果**：这种无限递归迅速耗尽了受害者机器的内存，导致机器崩溃。
- **讽刺性**：如果攻击者没有写出这个 Bug，恶意代码本应静默运行，窃取数据并建立后门。正是这个导致系统崩溃的 Bug，让受害者（Callum McMahon 团队）察觉到了异常，从而阻止了一场可能持续数周或数月的静默大规模攻击。