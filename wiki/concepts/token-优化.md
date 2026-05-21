---
type: concept
title: Token-优化
created: 2026-04-07
updated: 2026-04-07
tags: [optimization, cost-reduction, llm]
related: [caveman, ai-subscription-crisis, claude-code]
sources: ["省token神器3天狂揽4.1k星！19岁小哥开发，信息无损最高省87%.md"]
---

# Token-优化

## 定义
[[Token-优化]]（Token Optimization）指在保持信息无损或可接受损失的前提下，减少大语言模型（LLM）输入或输出的 Token 数量，以降低计算成本、减少延迟或提高响应速度。

## 优化维度

### 1. 输出 Token 优化
- **方法**：使用 [[简洁性约束]]、[[caveman-speak]] 或特定的 Prompt 指令（如“请简短回答”）。
- **工具**：[[Caveman]] 插件。
- **效果**：直接降低 API 调用费用（通常按输出 Token 计费）和首字延迟（TTFT）。
- **局限**：不减少输入 Token（上下文），而长上下文往往是主要成本来源。

### 2. 输入 Token 优化
- **方法**：压缩系统提示词、精简历史对话、使用向量检索（RAG）仅带入相关上下文。
- **工具**：上下文压缩器、记忆文件清理工具。
- **效果**：显著降低长对话中的累积成本。

### 3. 推理 Token 优化
- **注意**：目前的优化手段（如 Caveman）通常不压缩模型的内部推理 Token，以避免降低模型智商。

## 动机
随着 [[ai-subscription-crisis]] 的加剧，尤其是 [[Claude Code]] 等高消耗工具的普及，用户对 Token 成本日益敏感。Token 优化成为缓解这一压力的重要手段。

## 权衡
- **信息密度 vs. 可读性**：极简输出可能难以阅读。
- **成本 vs. 性能**：过度压缩可能导致指令遵循能力下降。
- **优化 vs. 通用性**：针对特定模型的优化可能无法迁移。