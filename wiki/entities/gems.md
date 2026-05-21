---
type: entity
title: GEMS
created: 2026-04-11
updated: 2026-04-11
tags: [多模态生成, 智能体框架, 开源]
related: [openclaw, claude-code, nano-banana-2, agent-native-multimodal-generation, agent-loop, agent-memory, agent-skill]
sources: ["openclaw的风刮到了多模态生成，6b小模型超越nano-banana-2！.md"]
---

# GEMS

GEMS（Agent-Native Multimodal Generation with Memory and Skills）是一个由上海人工智能实验室、南京大学、香港中文大学及上海交通大学联合团队提出的多模态生成框架。该框架借鉴了 [[openclaw]] 和 [[claude-code]] 等 Agent 系统的设计理念，旨在通过智能体化的管理策略弥补基础模型（尤其是小模型）在复杂指令和下游任务上的能力不足。

## 核心特性

GEMS 包含三个核心组件，共同构成了一个 [[agent-native-multimodal-generation]] 系统：

### 1. Agent Loop
引入了一个结构化的多智能体协作框架。通过闭环优化机制，确保生成结果能够逐步对齐用户指令，解决了单次生成无法处理复杂需求的问题。

### 2. Agent Memory
不同于简单的历史记录堆叠，GEMS 采用了分层压缩策略：
*   **保留事实**：保留历史轨迹中的关键事实性要素。
*   **压缩思维链**：将冗长的思维链压缩为精炼的“经验”。
这种机制有效减少了 Token 开销，并提升了长时迭代的指引效率。

### 3. Agent Skill
建立了一个可扩展的专家知识库。系统能够根据当前任务按需加载详细的指令或技能（如 Aesthetic Drawing, Creative Drawing），极大地扩展了系统的能力边界，使生成结果不仅准确，更具艺术感和故事感。

## 性能表现

实验表明，GEMS 能显著提升基础模型的性能：
*   在基于 Z-Image-Turbo (6B) 的实验中，主流任务平均提升 **14.22%**。
*   在下游任务上，超越最佳基线 **8.92%**。
*   在 GenEval2 任务上，成功超越了更强的闭源模型 [[nano-banana-2]]。
*   通过优化迭代过程，GEMS 在提升性能的同时并未增加（甚至减少了）平均生成轮次。

## 影响
GEMS 证明了通过系统架构的优化（引入记忆和技能机制），小参数模型也能达到甚至超越大模型的效果。这为多模态生成领域从“模型中心”向“系统中心”转变提供了重要的实证参考。

## 资源链接
*   论文：[arXiv:2603.28088](https://arxiv.org/abs/2603.28088)
*   项目主页：[GEMS-Gen](https://gems-gen.github.io/)
*   代码：[GitHub - lcqysl/GEMS](https://github.com/lcqysl/GEMS)