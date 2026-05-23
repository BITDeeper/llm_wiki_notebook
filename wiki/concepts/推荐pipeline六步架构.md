---
type: concept
title: 推荐Pipeline六步架构
created: 2026-05-16
updated: 2026-05-16
tags: [推荐系统, pipeline, 信息流, 架构设计]
related: [x-algorithm开源, phoenix排名模型, grox审查管线]
sources: ["马斯克开源𝕏最新推荐算法！全网开发者逐行拆解.md"]
---
# 推荐Pipeline六步架构

𝕏平台For You信息流的完整推荐管线，从用户画像到最终排序分为六个步骤。

## 六步流程

| 步骤 | 名称 | 5月15日新增内容 |
|------|------|----------------|
| [1] | 用户画像（Query Hydration） | 17个hydrator：关注/屏蔽/话题/互关/IP/Bloom过滤器/历史时间戳等 |
| [2] | 候选召回（Candidate Sources） | 新增Ads Source、Phoenix MoE、Phoenix Topics、Who To Follow、Prompts Source |
| [3] | 特征填充（Hydration） | 新增互动数/品牌安全/语言检测/媒体类型/视频时长/引用展开 |
| [4] | 打分前过滤（Pre-Scoring Filter） | 新增屏蔽词/已看过/付费权限/社交关系图谱过滤 |
| [5] | 打分+排序（Phoenix Scorer） | [[phoenix排名模型]]核心，[[十五概率打分]] |
| [6] | 打分后过滤+广告混排 | 新增VF可见性检查/会话去重/完整ads blending模块 |

## 演进

1月版本大部分步骤仅有骨架代码，5月版本补全后每一步都有完整的Rust或Python实现。候选源从2个扩展到7个以上，用户画像hydrator从0个增加到17个。