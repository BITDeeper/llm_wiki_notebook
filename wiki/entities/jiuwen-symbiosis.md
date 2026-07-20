---
type: entity
title: Jiuwen Symbiosis
created: 2026-06-13
updated: 2026-06-13
tags: [开源架构, 具身智能, physical-ai, openjiuwen, 端云协同]
related: [openjiuwen, 态势感知环, 端云协同架构, 昇腾, 鲲鹏, 华为云-agentarts]
sources: ["rss/agent终于长出了身体：jiuwen-symbiosis背后的思考与实践.md"]
origin_date: 2026-06-13
---
# Jiuwen Symbiosis

**Jiuwen Symbiosis** 是由 [[openjiuwen]] 社区开源的一个专为高阶 Physical AI 打造的“共生”架构。该架构旨在让 AI 从虚拟数字世界走向真实物理世界，为智能体装上感知和行动的“骨骼与肌肉”。

## 设计理念

该架构的核心主张是“Agent的思考过程应该是可观察、可调试、可协作的”。它通过将内部状态显式暴露，解决传统端到端[[vla-视觉-语言-动作|VLA]]模型固有的黑盒问题。

其核心骨架被称为[[态势感知环]]（Situation Awareness Loop），在此基础上集成了多模态感知、安全规划、物理执行、状态观察、观测反馈和空间记忆等功能模块。

## 算力生态亲和

与许多沿用“大模型+GPU”的物理AI系统不同，Jiuwen Symbiosis 采用了[[端云协同架构]]：
- **云侧**：负责大规模推理和复杂规划（LLM/VLM）。
- **端侧**：专注于实时感知与执行，深度适配华为[[昇腾]]（提供AI推理TOPS）与[[鲲鹏]]（负责工具调度与逻辑控制）异构计算生态。

## 商业化落地

该架构已被[[华为云-agentarts|华为云 AgentArts]]商业化平台引入，提供开箱即用的体验。