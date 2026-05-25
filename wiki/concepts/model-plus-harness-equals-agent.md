---
type: concept
title: "Model+Harness=Agent"
created: 2026-05-23
updated: 2026-05-23
tags: [agent, ai架构, deepseek, 产品化]
related: [deepseek-harness, deepseek, claude-code, 任务执行范式, agentic-engineering]
sources: ["融资700亿元的deepseek，api价格直降34.md"]
origin_date: 2026-05-23
---
# Model+Harness=Agent

[[deepseek|DeepSeek]]在招募[[deepseek-harness|Harness]]团队时提出的Agent构建公式，定义了从大语言模型到可执行智能体的技术路径。

## 公式解读

- **Model（模型）**：人工智能的"大脑"，提供推理、理解和生成能力
- **Harness（工程外壳/智能体底座）**：给大脑装上感知和执行能力的工程框架
  - 装上"眼睛"：感知和规制模型的输入
  - 装上"手脚"：在本地环境中运行并验证代码
  - "规范"：出错时自动纠错并收敛
- **Agent（智能体）**：模型与工程外壳结合后的产物，具备完整的感知-决策-执行闭环

## 与行业趋势的关联

这一公式与[[任务执行范式]]和[[agentic-engineering]]的理念一脉相承，代表了AI行业从单纯模型开发转向智能体工程化系统的共识。DeepSeek的表述更加简洁和工程化，强调Harness作为独立工程层的价值。

## 竞争对标

DeepSeek Harness内部直接对标[[claude-code]]，意味着AI编程赛道将从"模型能力竞争"升级为"Agent产品体验竞争"。