---
type: concept
title: 流形约束超连接（mHC）
created: 2026-05-19
updated: 2026-05-19
tags: [残差连接, 超连接, 架构优化, 流形约束]
related: [deepseek-v4, 压缩稀疏注意力-csa-hca, 长上下文效率优化]
sources: ["llm近期重大架构进化一览：从gemma-4到deepseek-v4.md"]
origin_date: 2025-12-31
---
# 流形约束超连接（mHC）

Manifold-Constrained Hyper-Connections（mHC）是DeepSeek团队提出的一种重新设计Transformer Block内部Residual Connection的机制，将单一Residual Stream替换为多条并行Residual Stream，并通过双随机矩阵约束确保稳定性。

## 从Hyper-Connections到mHC

### Hyper-Connections（HC）
- 将单一Residual Stream扩展为多条并行Residual Stream
- 通过可学习映射（Res Mapping）在不同Stream之间交换信息
- 增加Pre Mapping（合并为单一Hidden Vector）和Post Mapping（分发回多个Stream）
- 在7B OLMo MoE模型上，FLOPs per token仅从13.36G增至13.38G
- 使用约一半训练token即可达到Baseline性能

### mHC的改进
在HC基础上加入流形约束——将Residual Mapping约束到**双随机矩阵**流形上：
- 所有元素非负
- 每一行之和为1
- 每一列之和为1

这使得Residual Mixing变成稳定的信息重新分配，而非不可控的信号放大或衰减。Pre Mapping与Post Mapping同样被约束为非负且有界。

## 性能开销

在DeepSeek V4的27B实验模型上，使用融合优化、重计算与pipeline scheduling后，即使使用4条Residual Stream（n=4），训练时间额外开销仅增加约 **6.7%**。

## 应用

[[deepseek-v4|DeepSeek V4]] 是首个在旗舰模型中采用mHC的案例，标志着该机制已在真实生产环境中被验证有效。mHC与[[压缩稀疏注意力-csa-hca|CSA/HCA]]形成了良好的配合。

## 技术来源

- Hyper-Connections：Zhu等人2024年论文
- mHC：DeepSeek团队2025年12月31日论文《mHC: Manifold-Constrained Hyper-Connections》