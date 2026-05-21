---
type: concept
title: AstroBrain
tags: [ai-architecture, game-ai, orchestration]
related: [astrocade, 端到端游戏生成]
created: 2026-05-06
updated: 2026-05-06
sources: ["李飞飞做ai游戏，拿了4个亿.md"]
---

# AstroBrain

AstroBrain 是 AI 游戏公司 [[Astrocade] 开发的核心协调模型。它的作用类似于“游戏工作室的大脑”，负责串联和管理游戏生成过程中的各个专业化子模型。

## 功能定位
在 [[端到端游戏生成]] 的架构中，AstroBrain 并不直接生成具体的游戏素材（如地形或角色），而是负责：
- **任务调度**：根据用户需求，调用对应的子模型（如地形模型、动画模型）。
- **细节处理**：自动处理不同模块间的逻辑冲突和细节衔接。
- **结果整合**：将各个子模型的输出整合为一个连贯、可玩的游戏体验。

## 技术意义
AstroBrain 的存在解决了单纯依赖大语言模型（LLM）进行代码生成时面临的逻辑复杂性和稳定性问题。通过分工协作，Astrocade 能够在保证生成质量的同时，实现高度自动化的游戏创作流程。