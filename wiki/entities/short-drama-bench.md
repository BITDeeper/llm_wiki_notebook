---
type: entity
title: Short-Drama-Bench
created: 2026-05-22
updated: 2026-05-22
tags: [评测基准, 短剧, 视频生成]
related: [one-sentence-one-drama, 分层多智能体短剧生成]
sources: ["南洋理工等提出-one-sentence,-one-drama：一句话生成完整短剧，多智能体-+-3d-一致性打通-ai-短剧生产链.md"]
origin_date: 2026-05-22
---
# Short-Drama-Bench

**Short-Drama-Bench** 是由 [[one-sentence-one-drama]] 论文提出的短剧生成专属评测基准。

## 基准构成

- **50个短剧 prompt**，覆盖7类热门短剧题材和17个细分子类
- 题材包括：重生复仇、现实议题、历史权谋、悬疑探案、穿越回归、情感关系、职场商战
- 总计约**239分钟**视频内容：
  - 2部约30分钟的长短剧
  - 5部约10分钟的中等长度短剧
  - 43部约3分钟的短剧

## 评测指标

除 VBench 和 ViStoryBench 等通用指标外，提出短剧专属指标：

- **Narrative Hook**：开头钩子、结尾钩子
- **Narrative Flow**：冲突升级、叙事连贯
- **Continuity**：人物空间连续性、环境布局连续性
- **Audio & Transition**：音乐情绪匹配、转场自然度

## 评测方法

由20名标注者基于相同短剧标准进行5分制人工评测，同时结合自动化指标。

## 意义

该基准的核心贡献在于将评价标准从"单片段视觉质量"推进到"叙事、连续性、声音和转场共同构成的完整观看体验"，更贴近短剧作为产品形态的实际需求。