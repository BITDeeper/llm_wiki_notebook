---
type: concept
title: TPMA-GRPO
created: 2026-05-13
updated: 2026-05-13
tags: [强化学习, GRPO, 信用分配, 生成式检索]
related: [onesearch-v2, 生成式检索]
sources: ["0成本升级，快手onesearch-v2全量上线，生成式搜索进入「懂你」时代.md"]
---
# TPMA-GRPO

TPMA-GRPO（Token-Position Marginal Advantage GRPO）是针对SID层次因果结构设计的强化学习算法，用于[[onesearch-v2|OneSearch-V2]]的行为反馈偏好对齐阶段。该算法按生成位置分配信用，通过前缀门控实现层次化课程学习。

## 解决的核心问题

标准GRPO对rollout中每个token位置赋予相同的advantage，但SID生成具有严格的层次因果结构：第一个token编码最粗粒度类目，后续token逐步细化到更细粒度属性。均匀的信用分配混淆了不同位置的贡献，削弱学习信号。

## 三大核心机制

### 1. 前缀奖励（Prefix Reward）

对每个SID token位置定义前缀奖励为与ground-truth目标SID的最大累积匹配。边际贡献设计中，前部共享的层次特征编码获得更多关注（因子2），相比后部的唯一特征量化。

### 2. 位置级Advantage

在rollout组内对每个位置独立归一化边际贡献，确保某位置的advantage仅与其他rollout的相同位置比较，实现精确的跨层次信用分配。

### 3. 前缀门控（Prefix Gate）

后续位置的梯度信号仅在前缀正确时才有意义。前缀完全匹配时门控打开，完全错误时门控关闭，有效抑制下游token的梯度。该机制自然实现了层次化课程学习：模型先学粗粒度token，再学细粒度token。

## 复合奖励设计

替代独立Reward Model，聚合三个互补信号：
- **相关性奖励**：四档分级（3/2/1/0）
- **后验转化奖励**：校准后的后验CTR，裁剪至(0,1)
- **点击与下单奖励**：直接奖励用户实际行为，购买信号权重大于点击

## 灵活业务干预

在快手3.18全球购物节期间，通过调整新兴商家商品的相关性奖励权重，实现商品排名的实时干预，展示了工业部署中的灵活目标调节能力。

## 与MedGRPO的关联

TPMA-GRPO与[[MedGRPO]]均针对特定序列结构改进信用分配——前者针对SID的层次因果结构，后者针对异构医疗视频的多任务结构，体现了GRPO变体在工业场景中的广泛适用性。