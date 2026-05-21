---
type: concept
title: Stop Hook (停止钩子)
tags: [technical-mechanism, claude-code, feedback-loop]
related: [ralph-wiggum, claude-code, boris-cherny]
created: 2026-01-14
updated: 2026-01-14
sources: ["5行代码，逼疯整个硅谷！澳洲放羊大叔，捅开ai编程奇点.md"]
---

# Stop Hook (停止钩子)

**Stop Hook** 是 Anthropic 在官方版 [[ralph-wiggum]] 插件中引入的一种技术机制，用于拦截 AI 的退出行为并强制形成反馈闭环。它比原始的 Bash 外部循环脚本更优雅、更可控。

## 工作原理

1. **拦截退出**：当 Claude 认为自己已经完成任务并准备退出终端时，Stop Hook 会拦截这一动作。
2. **验证完成标志**：系统检测 AI 的输出中是否包含了设定的 `<promise>`（完成标志，例如“通过所有测试”）。
3. **注入反馈**：
    - 若未检测到完成标志，插件会将当前的错误、日志或 Git 历史格式化为结构化数据对象。
    - 这些数据被重新注入系统，作为新的上下文送入 AI 模型，强制其进行下一次尝试。

## 优势与局限

### 优势
- **内部集成**：不需要在外部运行 Bash 脚本，直接在 Claude 会话内运行。
- **结构化反馈**：能够将错误信息格式化，提供比单纯文本更精准的反馈。

### 局限（争议）
原 [[ralph-wiggum]] 脚本合作者 Dex 认为，官方的 Stop Hook 实现存在以下问题：
- 逻辑过于复杂，容易崩溃。
- Hook 安装位置奇怪，State 跟踪文件难找。
- 删除错误文件可能导致整个仓库失控。
- 它搞错了 Ralph 的本质：应该“把任务切碎”，而不是“永远跑下去”。

## 参见
- [[ralph-wiggum]]：Stop Hook 所服务的核心概念。
- [[失败即数据]]：Stop Hook 机制背后的哲学基础。