---
type: source
title: "DeepSeek版Claude Code登顶热榜：8700星，鲸鱼哥火了"
tags: [ai-programming, deepseek, rust, open-source]
related: [deepseek-tui, hunter-bown, deepseek-v4, claude-code, rlm-recursive-language-model]
created: 2026-05-06
updated: 2026-05-06
authors: ["泽南"]
year: 2026
url: "https://mp.weixin.qq.com/s/A7ATOoYGBWwf1dpV9GIevw"
venue: "机器之心"
sources: ["deepseek版claude-code登顶热榜：8700星，鲸鱼哥火了.md"]
---

# DeepSeek版Claude Code登顶热榜：8700星，鲸鱼哥火了

本文报道了由 Hunter Bown 开发的开源终端 AI 编程智能体 [[deepseek-tui]]。该工具基于 [[DeepSeek V4]] 构建，旨在作为 [[claude-code]] 的低成本开源替代方案。

## 核心亮点

- **终端原生体验**：完全运行在本地终端，支持聊天、编辑文件、运行 Shell 命令及管理子智能体。
- **思维链可视化**：将 DeepSeek 的推理过程实时流式输出到终端，让模型的“脑回路”对开发者完全透明。
- **长上下文支持**：默认用满 DeepSeek V4 的 100 万 Token 上下文窗口，并具备上下文压缩机制。
- **RLM 并行模式**：利用 [[rlm-recursive-language-model]] 机制，能同时驱动最多 16 个 V4 Flash 子任务，显著降低 API 成本。

## 操作模式

DeepSeek TUI 提供三种操作模式：
1. **Plan 模式**：只读模式，用于输出任务拆解计划。
2. **Agent 模式**：拥有完整工具链权限，但关键操作需手动确认。
3. **YOLO 模式**：全自动模式，AI 拥有完全自主决策权和执行权。

## 开发者背景

作者 [[hunter-bown]] 是南卫理公会大学（SMU）专利法专业二年级学生，自称“鲸鱼兄弟”。他创立了 [[shannon-labs]] 工作室，并利用 AI 辅助编程完成了该项目，体现了 AI 时代降低编程门槛的趋势。

## 行业意义

该项目的火爆反映了开发者对开放工具链和低成本 AI 解决方案的渴望，直接挑战了封闭且昂贵的主流 AI 编码助手订阅模式。