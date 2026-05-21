---
type: source
title: "OpenAI史上最快模型降临，每秒1000Token！代码从此「炸出来」"
tags: [openai, cerebras, 代码生成, 实时编程, 硬件加速]
related: [gpt-5-3-codex-spark, cerebras, wafer-scale-engine-3, 实时编程, websockets]
created: 2026-02-13
updated: 2026-02-13
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/cOkNVO4-AW13Z9A1qZ56TA"
venue: "新智元"
sources: ["openai史上最快模型降临，每秒1000token！代码从此「炸出来」.md"]
---

# OpenAI史上最快模型降临，每秒1000Token！代码从此「炸出来」**

本文报道了 OpenAI 发布的超高速代码生成模型 [[GPT-5.3-Codex-Spark]]。该模型通过与 [[Cerebras]] 合作，利用 [[Wafer Scale Engine 3]] 硬件，实现了超过每秒 1000 token 的生成速度，旨在消除代码生成过程中的等待时间，实现[[实时编程]]体验。

## 核心要点

- **极致速度**：生成速度超过 1000 token/s，体感接近“瞬时响应”，允许用户随时打断和交互。
- **硬件支撑**：基于 Cerebras 的 Wafer Scale Engine 3 芯片，这是一种非 GPU 的专用低延迟硬件架构。
- **工程优化**：重写了底座连接，引入持久化 [[WebSockets]] 连接，将往返开销降低 80%，首字延迟（TTFT）提升 50%。
- **性能表现**：在 [[SWE-Bench Pro]] 和 [[Terminal-Bench 2.0]] 基准测试中保持高性能，但任务完成时间大幅缩短。
- **应用场景**：专注于实时协作编程，试图将 AI 从“异步工具”转变为“同步结对程序员”。

## 技术细节

- **上下文窗口**：128k。
- **支持模态**：目前仅支持文本。
- **可用性**：ChatGPT Pro 用户可通过 Codex App、CLI 或 VS Code 插件使用。

## 行业意义

OpenAI 通过 Spark 展示了“速度即新的智能”的理念。这标志着 AI 编程工具从单纯的模型能力竞争（如 [[scaling-law]]）转向了模型与底层硬件、网络协议协同优化的综合竞争。这种[[暴力美学]]式的优化路径，可能会加剧现有的 [[ai-subscription-crisis]]，因为极高的生成速度意味着单位时间内的 Token 消耗量将大幅增加。