---
type: entity
title: Generative Enterprise Agent (GEA)
tags: [agent-architecture, enterprise-ai, system-design]
related: [特赞, context-system, creative-reasoning-model, geaclow, 决策操作系统]
created: 2026-03-27
updated: 2026-03-27
sources: ["企业软件底层逻辑脱胎换骨：从席位订阅到决策订阅，下一个万亿公司属于这类玩家.md"]
---

# Generative Enterprise Agent (GEA)

**Generative Enterprise Agent (GEA)**（生成式企业智能体）是由 [[特赞]] 提出的一种企业级 AI 系统架构。该架构旨在解决“企业如何形成判断”这一深层命题，代表了企业软件从“数据操作系统”向“决策操作系统”的演进。

## 四层架构

GEA 采用自上而下的四层结构设计，使智能体能够围绕业务目标持续运行：

### 1. Intent Layer (意图层)
- **功能**：理解企业希望解决的问题本身（业务目标），而非具体操作步骤。
- **特点**：起点是业务意图（如识别增长机会、制定品牌策略），而非指令。
- **意义**：使智能体能够围绕结果运行，而非仅仅围绕 prompt 运行。

### 2. Orchestration Layer (编排层)
- **核心组件**：[[Creative Reasoning Model]]（创意推理模型）。
- **功能**：进行发散推理与路径编排。
- **流程**：拆解多个可能执行路径 -> 评估路径价值与风险 -> 选择最优策略组合。
- **意义**：决定智能体是否具备真正的业务推理能力，而非仅仅是内容生成能力。

### 3. Execution Layer (执行层)
- **核心组件**：[[GEAClaw]]。
- **功能**：通过 Proactive Agent 体系调度模型能力、Agent Skills 与企业内部系统接口。
- **特点**：任务能够持续推进，而非停留在一次性响应层面；根据环境变化动态调整执行策略。

### 4. Context System (上下文系统)
- **功能**：组织历史决策路径、品牌资产结构、用户研究结果、产品演化逻辑、业务反馈循环。
- **意义**：构成企业长期判断能力的来源，为上层推理提供统一的认知基础。

## 核心差异
GEA 与传统 SaaS 工具或 Copilot 型辅助工具的本质区别在于，它不再只是模型调用接口，而是成为能够**围绕企业真实目标持续运行的智能体系统**。