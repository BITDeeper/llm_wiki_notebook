---
type: source
title: "OpenClaw的风刮到了多模态生成，6B小模型超越Nano Banana 2！"
created: 2026-04-11
updated: 2026-04-11
tags: [多模态生成, 智能体, openclaw, gems, 小模型]
related: [gems, openclaw, nano-banana-2, agent-native-multimodal-generation]
authors: [GEMS团队]
year: 2026
url: "https://mp.weixin.qq.com/s/NX7FAtlTGVjYO06OZeONlw"
venue: "量子位"
sources: ["openclaw的风刮到了多模态生成，6b小模型超越nano-banana-2！.md"]
---

# OpenClaw的风刮到了多模态生成，6B小模型超越Nano Banana 2！

## 概述
本文报道了由上海人工智能实验室、南京大学、香港中文大学及上海交通大学联合组成的 GEMS 团队提出的一项新研究。该研究将 [[openclaw]] 和 [[claude-code]] 等 Agent 框架的成功经验应用于多模态生成领域，提出了 [[gems]] 框架。实验表明，该框架能显著提升小模型（如 6B 参数的 Z-Image-Turbo）的生成能力，使其在特定任务上超越更强的闭源模型 [[nano-banana-2]]。

## 核心内容

### GEMS 框架
GEMS（Agent-Native Multimodal Generation with Memory and Skills）旨在解决现有多模态生成模型在复杂指令和下游任务上表现不佳的问题。它包含三大核心组件：

1.  **Agent Loop（智能体循环）**：引入结构化的多智能体协作框架，通过闭环优化确保生成结果逐步对齐。
2.  **Agent Memory（智能体记忆）**：采用分层压缩策略，保留历史轨迹中的事实性要素，将冗长的思维链压缩为精炼经验，以减少 Token 开销并提升长时迭代效率。
3.  **Agent Skill（智能体技能）**：建立可扩展的专家知识库，通过按需加载详细指令来扩展系统能力边界。

### 实验结果
*   **性能提升**：基于 Z-Image-Turbo 模型，GEMS 在主流任务上平均提升 14.22%，在下游任务上超越最佳基线 +8.92。
*   **以小博大**：在 GenEval2 任务上，应用 GEMS 的 6B 小模型超越了 [[nano-banana-2]]。
*   **效率优化**：通过压缩思维链和优化迭代，GEMS 在提升性能的同时并未显著增加平均生成轮次。

### 艺术性增强
[[agent-skill]] 机制能显著提升生成内容的美感。例如在“山脉日出”任务中触发 Aesthetic Drawing 技能，或在“漂浮的书”任务中触发 Creative Drawing 技能，能显著增强画面的光影层次、创意和故事感。

## 意义
该研究证明了智能体化的管理策略可以有效弥补基础模型能力的不足。通过赋予模型“记忆”和“技能”，轻量化开源模型也能展现出媲美甚至超越闭源模型的潜力，为多模态生成的演进提供了新范式。

## 链接
*   论文：https://arxiv.org/abs/2603.28088
*   项目主页：https://gems-gen.github.io/
*   代码仓库：https://github.com/lcqysl/GEMS