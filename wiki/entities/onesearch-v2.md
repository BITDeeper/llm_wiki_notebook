---
type: entity
title: OneSearch-V2
created: 2026-05-13
updated: 2026-05-13
tags: [生成式检索, 电商搜索, 快手, 搜索引擎]
related: [快手技术团队, 生成式检索, 自蒸馏推理内化, tpma-grpo, 思维增强查询理解, khqe]
sources: ["0成本升级，快手onesearch-v2全量上线，生成式搜索进入「懂你」时代.md"]
origin_date: 2026-03-01
---
# OneSearch-V2

OneSearch-V2 是快手技术团队开发的新一代工业级生成式搜索框架，在已规模化部署的 OneSearch V1 基础上，通过[[自蒸馏推理内化|潜空间推理增强自蒸馏]]实现"0成本升级"。该系统已于2026年5月在快手电商搜索平台全量上线。

## 核心架构

OneSearch-V2 由三大创新模块组成：

1. **[[思维增强查询理解]]**（Thought-augmented Query Understanding）：利用LLM生成关键词级CoT，经意图/类目/属性一致性约束后作为训练语料，解决复杂query理解不足的问题
2. **推理内化自蒸馏**（Reasoning-internalized Self-distillation）：通过信息不对称的自蒸馏机制，将显式推理能力编码进模型权重，推理时无需额外token或参数
3. **行为反馈偏好对齐**（Behavior Feedback Preference Alignment）：抛弃独立Reward Model，采用[[tpma-grpo|TPMA-GRPO]]算法实现基于生成位置的精准信用分配

## 编码方案

沿用V1的[[khqe|KHQE]]+RQ-OPQ编码方案。实验证明单模态编码优于多模态编码——小规模bge-base甚至优于大规模Qwen3-VL，主因是跨模态表征差异与冗余属性削弱了多模态编码有效性。

## 业务收益

在线A/B测试（p<0.05）：
- 商品CTR +3.98%
- 页面CTR +1.17%
- 页面转化率 +2.90%
- 买家数 +2.07%
- 订单量 +2.11%

## 关键洞见

- 自蒸馏后的学生模型（推理时无关键词）持续优于含关键词的教师模型，证实推理能力已内化
- V2_FULL相关性低于V2_RAG，但最终转化率更高——模型应学习"推理的能力"而非"推理的结果"
- CTR提升曲线从V1的"倒U型"变为"U型"，弥补了头部和长尾query的理解不足
- 对低活用户和冷启商品提升尤为显著

## V1的三大瓶颈（V2的驱动力）

1. 复杂query理解不足：占PV约1/3但仅贡献8%转化
2. 用户上下文个性化推理不足：过度依赖历史共现模式
3. 奖励系统脆弱：独立Reward Model更新迟缓，易过拟合窄偏好

## 未来方向

- 超越日志（Beyond Logs）的长尾query训练策略
- 统一SID编码方案覆盖视频、直播等异构内容
- 向智能体搜索系统（Agentic Search Systems）演进