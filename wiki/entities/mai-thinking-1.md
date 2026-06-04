---
type: entity
title: MAI Thinking 1
created: 2026-06-03
updated: 2026-06-03
tags: [微软, 推理模型, moe, 大模型]
related: [mai系列模型, 苏莱曼, anthropic, 微软build-2026]
sources: ["16亿windows用户，一夜冲进agent时代！.md"]
---
# MAI Thinking 1

微软自研的首个推理模型，属于[[mai系列模型|MAI模型家族]]。在Build 2026大会上由[[苏莱曼]]发布。

## 技术规格

- **架构**：MoE（混合专家）
- **总参数量**：约1T（万亿）
- **激活参数**：35B
- **上下文窗口**：256K

## 性能基准

- **SWE-bench Pro**：53%，追平Anthropic旗舰Opus 4.6
- **AIME 2025数学推理**：97%
- **Surge盲测**：人类评审更偏好MAI Thinking 1而非Sonnet 4.6

## 零蒸馏声明

苏莱曼强调MAI Thinking 1没有从任何第三方前沿模型中蒸馏知识，完全从零训练，使用企业级商用授权的干净数据。

## 注意事项

基准数据主要来自微软自报，虽然引用了独立评测机构Surge的盲测结果，但缺乏更广泛的第三方验证。
