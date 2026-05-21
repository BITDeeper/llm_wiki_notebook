---
type: entity
title: Qwen3.6-Plus
tags: [ai-models, llm, programming, alibaba, qwen]
related: [claude-code, vibe-coding, ath, openclaw, cline, 阿里云]
created: 2026-04-02
updated: 2026-04-02
sources: ["中国最强编程模型来了！-阿里qwen3.6-plus性能直逼claude，国产大模型杀入决赛圈.md"]
---

# Qwen3.6-Plus

Qwen3.6-Plus 是阿里发布的新一代基座大模型，主打编程和智能体能力。它是千问 3.6 系列推出的首个模型，以其强大的代码生成、多模态推理和长程任务规划能力，被视为目前中国最强的编程模型之一。

## 核心特性
- **1M 上下文窗口**：支持长文本输入，能够独立拆解任务、规划执行路径并进行全程自测迭代。
- **以小胜大**：在多项权威评测中，性能超越了参数量是其 2-3 倍的主流模型。
- **多模态推理**：结合视觉感知和逻辑推理，能够处理视频、图片等非文本信息并执行任务（如看图写网页、视频脚本拆解）。
- **Agent 优化**：针对 [[OpenClaw]]、[[Cline]]、Claude Code、Kilo Code 等主流 Agent 框架进行了专门优化。

## 性能表现
在 SWE-bench、Terminal-Bench2、NL2Repo、Claw-Eval、QwenClawBench 等权威评测中，Qwen3.6-Plus 的表现直逼 [[Claude Opus 4.5]]，甚至在部分测试中表现更优。

## 实测案例
- **Vibe Coding**：仅凭一句自然语言指令，生成了可交互的 3D 雪山场景（含动态雪花）、AI 资讯日历、虚拟宠物养成页和消消乐游戏。
- **工程能力**：基于开源项目（如 AIRI）生成 Landing Page，并能对老旧代码进行问题分析与重构。
- **多模态应用**：解析长视频并生成小红书文案；根据截图复刻并优化网页。

## 战略背景
Qwen3.6-Plus 是阿里 [[ATH]]（Alibaba Token Hub）思路的代表性落地，旨在通过创造高效 Token 和降低成本来实现 AI 应用的普惠化。

## 可用性
该模型已上线阿里云百炼平台，API 服务全面开放，并在悟空、千问 APP 等应用同步上线。