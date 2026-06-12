---
type: entity
title: AFM 3
created: 2026-06-10
updated: 2026-06-10
tags: [苹果, 大模型, 端侧模型, 云端模型, 稀疏模型]
related: [苹果, core-ai, foundation-models框架, 谷歌, instruction-following-pruning]
sources: ["rss/库克最后一届wwdc，把苹果ai九年的地基掀了.md"]
origin_date: 2026-06-09
---
# AFM 3

苹果与[[谷歌]]联合开发的**第三代自研模型家族**（Apple Foundation Model 3），2026年6月WWDC发布，一口气推出5个模型，覆盖端侧和云端全场景。

## 模型家族

### 端侧模型

| 模型 | 参数量 | 类型 | 定位 |
|------|--------|------|------|
| AFM 3 Core | 3B | 密集模型 | 日常轻量任务 |
| AFM 3 Core Advanced | 20B | 稀疏模型 | 苹果端侧天花板 |

### 云端模型

| 模型 | 定位 |
|------|------|
| AFM 3 Cloud | 服务器主力 |
| ADM 3 Cloud | 图像生成和编辑（Image Playground背后模型） |
| AFM 3 Cloud Pro | 全家族最强 |

## 核心技术突破：AFM 3 Core Advanced

200亿参数稀疏模型直接跑在手机上，通过[[instruction-following-pruning|Instruction-Following Pruning]]技术实现：
- 完整模型存在闪存（NAND）
- 轻量路由模块按需激活专家
- 每次实际调动参数量1B-4B（5%-20%）
- 突破手机DRAM装不下200亿参数的瓶颈

## 性能数据

- AFM 3 Core：45.6%测试prompt优于上一代（上代仅23.3%）
- AFM 3 Cloud：64.7%对8.7%，几乎是单方面碾压

## 云端基础设施

Private Cloud Compute扩展至[[谷歌]]云[[英伟达]]GPU，隐私规则照旧——数据不出域。