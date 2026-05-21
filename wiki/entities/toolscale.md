---
type: entity
title: ToolScale
tags: [dataset, synthetic-data, tool-learning]
related: [nvidia-research, orchestrator, 合成数据]
created: 2025-12-12
updated: 2025-12-12
sources: ["别让米其林主厨削土豆！英伟达用「小脑指挥大脑」，重构agi生产力.md"]
---

# ToolScale

ToolScale 是由 [[英伟达研究院]] 构建的首个大规模、可验证的多轮工具调用合成数据集，专门用于训练像 [[orchestrator]] 这样的工具编排模型。

## 数据规模
包含 43 万条任务轨迹，覆盖金融、医疗、航空等 10 个领域的模拟环境（含数据库和工具 API）。

## 数据质量
每条数据均经过三重验证机制：
1.  **执行正确性**：确保数据库状态变更一致。
2.  **过程保真度**：确保关键信息被正确提及。
3.  **操作完备性**：确保操作步骤完整。

## 作用
通过高质量的 [[合成数据]]，ToolScale 解决了工具调用领域数据稀缺的问题，使得 [[orchestrator]] 能够学习到通用的工具能力抽象和成本-效益权衡策略。