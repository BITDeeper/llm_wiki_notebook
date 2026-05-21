---
type: entity
title: MiMo-V2-Pro
tags: [小米, 大模型, 智能体, 代码生成]
related: [小米, hunter-alpha, arl-tangram, mimo-v2-omni, 混合注意力机制, mtp-多token预测, 真实世界智能体工作流]
created: 2026-03-19
updated: 2026-03-19
sources: ["小米神操作！认领榜一神秘模型hunter-alpha，龙虾之父都忍不住打听.md"]
---

# MiMo-V2-Pro

[[小米]] 发布的万亿参数旗舰大语言模型，是 MiMo-V2 系列中的核心产品。该模型此前以代号 [[hunter-alpha]] 在 [[openrouter]] 平台上进行盲测并霸榜。

## 核心规格
- **总参数量**：1T（万亿）
- **激活参数**：42B
- **上下文窗口**：1M Token
- **设计理念**：围绕 [[真实世界智能体工作流]] 构建，强调解决实际任务而非单纯对话。

## 技术架构
- **混合注意力机制**：继承了该机制，并将混合比例从 5:1 大幅提升至 7:1，在保持推理效率的同时支持超大规模参数。
- **MTP 层**：搭配轻量级的 [[mtp-多token预测]] (Multi-Token Prediction) 层，确保在处理 1M Token 长文本时仍能保持极快的生成速度。

## 性能表现
- **排名**：在 Artificial Analysis 全球智能指数中位列全球第八、国产第二。
- **基准测试**：
    - PinchBench: 84.0
    - ClawEval: 61.5
    - SWE-bench Verified: 78
- **对比**：整体表现超越 [[gemini]] 3 Pro，并逼近 Claude Opus 4.6。

## 实战案例
- **代码生成**：能够直接生成复杂的 Three.js 3D 塔防游戏代码，包含动态背景和升级路线。
- **前端开发**：在 [[openclaw]] 框架测试中，能根据提示词生成带有 1990 年代复古杂志风格的网页，处理排版和噪点滤镜细节。
- **盲测数据**：在 OpenRouter 上的总调用量迅速突破 1T Token，其中 OpenClaw 单一工具贡献了 675B Token 的调用量。

## 支撑系统
其训练与运行得到了 [[arl-tangram]] 系统的支持，该系统由小米与 [[北京大学]] 联合研发，大幅降低了算力成本。