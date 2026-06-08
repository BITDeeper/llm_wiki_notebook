---
type: entity
title: FusionRoute
created: 2026-06-07
updated: 2026-06-07
tags: [多LLM协作, token级路由, ICML-2026, Meta-AI, 算法]
related: [多llm协作, token级路由, 补充生成, 不可识别性, meta-ai]
sources: ["icml-2026｜fusionroute：从专家路由到自我修正，一种新的多llm协作范式.md"]
origin_date: 2026-01-09
---

# FusionRoute

FusionRoute 是一种基于 [[token级路由]] 的 [[多llm协作]] 范式，由 Meta AI 团队提出，被 ICML 2026 接收。其核心创新在于将"专家选择"与"[[补充生成]]"统一在同一个轻量级路由模块中。

## 架构设计

FusionRoute 训练一个可路由模块（Router），在每一步解码时执行两个功能：

1. **路由权重输出**：为当前 token 输出路由权重，选择权重最高的专家进行生成。
2. **补充 logits 输出**：利用路由器自身的理解能力，输出额外的 logits 与专家 logits 合并，形成最终结果。

这种设计使路由器同时承担"指挥"和"补位"两个角色。

## 训练流程

训练分为两个阶段，无需对专家模型进行额外微调：

### 阶段一：监督微调（SFT）
- Router 生成补充 logits，通过 next-token cross-entropy loss 优化
- 路由权重与多个 expert 的 token 分布加权得到聚合 logits
- 关键设计：路由损失中只保留"信息性 token"（即不同专家预测结果存在分歧的位置）

### 阶段二：互补直接偏好优化（CDPO）
- 将 router logits 和专家 logits 合并，在偏好数据集上基于 DPO 优化
- 专家提供的 log-ratio 项作为不传梯度的"偏置项"处理
- 混合训练策略：将 SFT 与 CDPO 结合在同一训练流程中

## 核心实验结论

| 维度 | 结论 |
|------|------|
| 领域基准 | GSM8K、MATH-500、HumanEval、MBPP、IfEval 五项基准上稳定提升 |
| 专家领域保持 | 在专家本身擅长的领域不牺牲性能，做到"取长补短" |
| 通用质量 | PerfectBlend 测试集上 GPT-4o 评判胜率高于微调模型 |
| 规模效应 | 8B 模型上优势显著扩大，纯选择方法反而退化 |

## 与传统方法的区别

- **vs Sequence-level 协作**：FusionRoute 粒度更细，无需多次完整生成，效率更高
- **vs 传统 MoE**：专家可以是结构各异、已训练完成的独立模型，工程灵活性更高
- **vs 纯选择 Token-level 协作**：通过 [[补充生成]] 克服了 [[不可识别性]] 的理论瓶颈

## 工程意义

- 即插即用：新专家可快速纳入协作框架，无需推倒重训
- 仅训练轻量级 router，不修改专家模型
- 多个专门化小模型的协作成为通用大模型之外的现实技术路径