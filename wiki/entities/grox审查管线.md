---
type: entity
title: Grox 审查管线
created: 2026-05-16
updated: 2026-05-16
tags: [内容审查, 推荐系统, 内容安全, x平台]
related: [x-algorithm开源, phoenix排名模型, xai]
sources: ["马斯克开源𝕏最新推荐算法！全网开发者逐行拆解.md"]
---
# Grox 审查管线

𝕏平台的内容审查流水线系统，位于帖子发出之后、进入推荐之前的关键环节。代码位于`grox/`目录，使用Python编写。

## 六大分类器

| 分类器 | 职责 |
|--------|------|
| `spam.py` | 垃圾内容检测 |
| `post_safety_screen_deluxe.py` | 安全审查（"豪华版"） |
| `safety_ptos.py` | 平台服务条款策略检查 |
| `banger_initial_screen.py` | 爆款初筛，判断帖子是否"够炸" |
| `reply_ranking.py` | 回复排序 |
| `classifier.py` | 通用内容分类 |

## 爆款初筛机制

`banger_initial_screen`是最具争议的分类器。"banger"意为爆款，该分类器专门判断帖子是否具有病毒传播潜力，炸的内容优先往前排。

## 技术架构

- Python编写，与Rust编写的推荐系统主体形成分层
- Rust负责毫秒级排序，Python负责"这条内容该不该存在"的判断
- 配套Kafka数据加载器、ASR语音识别、帖子摘要生成器及调度引擎