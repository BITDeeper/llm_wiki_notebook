---
type: entity
title: Phoenix 排名模型
created: 2026-05-16
updated: 2026-05-16
tags: [推荐系统, 排序模型, transformer, xai]
related: [x-algorithm开源, xai, grox审查管线, 候选隔离]
sources: ["马斯克开源𝕏最新推荐算法！全网开发者逐行拆解.md"]
---
# Phoenix 排名模型

𝕏平台推荐系统的核心打分模型，基于Grok Transformer架构，负责对候选帖子进行最终排序。

## 模型架构

### 生产版本
- 完整Phoenix模型，参数规模未公开
- 支持MoE（混合专家）变体和Topics变体

### Mini Phoenix（开源版本）
- 嵌入维度：256
- 注意力头：4
- Transformer层数：2
- 模型体积：约3GB（通过Git LFS分发）
- 推理入口：`python run_pipeline.py`

## 打分机制

Phoenix对每条候选帖子同时预测15种用户行为概率：

**正向行为（11种）**：点赞、回复、转发、引用、点击、查看主页、看视频、展开图片、分享、停留浏览、关注作者

**负向行为（4种）**：不感兴趣、拉黑、静音、举报

最终得分公式：`Final Score = Σ(weight_i × P(action_i))`

## 关键设计

- **端到端学习**：所有手工特征和启发式规则已全部移除，100%由Transformer学习
- [[候选隔离]]：通过注意力掩码切断候选帖子间的相互影响，确保分数独立、稳定、可缓存