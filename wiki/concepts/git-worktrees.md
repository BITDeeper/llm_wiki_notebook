---
type: concept
title: Git Worktrees
tags: [git, workflow, engineering-efficiency]
related: [claude-code, boris-cherny, bing-xing-gong-zuo-liu]
created: 2026-03-01
updated: 2026-03-01
sources: ["claude-code之父首曝：「养蛊式」开发，质量碾压老架构师.md"]
---

# Git Worktrees

Git Worktrees 是 Git 的一个功能特性，允许在同一个仓库下拥有多个工作目录，所有目录共享同一个 `.git` 文件夹历史。

## 在 AI 编程中的应用
[[boris-cherny]] 推荐使用 Git Worktrees 来实现 [[claude-code]] 的并行工作流。

### 优势
-   **并行推进**：可同时拉出 3-5 个 Worktree，每个运行一个独立的 Claude Session。
-   **上下文隔离**：不同任务（测试、修 Bug、重构）在不同目录进行，互不干扰。
-   **易于回收**：改动和分支独立管理，避免了单一目录下的混乱。

### 对比传统方式
相比于复制多个 Repo 副本，Worktrees 共享仓库历史，节省空间且便于代码合并。

## 效率提升
通过消除“等待 AI 响应”或“等待测试结果”的空闲时间，Git Worktrees 帮助开发者从单线程的“代码工人”转变为多线程的“任务调度者”。