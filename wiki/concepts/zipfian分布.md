---
type: concept
title: Zipfian分布
tags: [linguistics, statistics, metrics]
related: [moltbook, clawdbot, 幂律分布]
created: 2026-02-02
updated: 2026-02-02
sources: ["爆红moltbook一夜塌房！极客自曝狂刷50万假clawdbot，全网都被骗了.md"]
---

# Zipfian分布

[[Zipfian分布]]（Zipf's Law）是自然语言统计学中的一个规律，指在语料库中，第 $N$ 常见词的出现频率是第 1 常见词的 $1/N$。人类语言的词频分布指数通常约为 1.0。

## 在 AI 分析中的应用
在 [[Moltbook]] 的案例中，[[David Holtz]] 发现 [[Clawdbot]] 的语言模式虽然也符合 Zipfian 分布，但其指数高达 **1.70**。这显著偏离了人类语言的特征，表明：
- **词汇贫乏**：AI 智能体过度重复使用少数高频词汇。
- **非人本质**：这种异常的分布指数是识别“僵尸网络”或低质量生成文本的重要指标。

## 数据支持
数据显示，Moltbook 上 34.1% 的消息是完全重复的复制粘贴，进一步佐证了高 Zipf 指数所反映的语言生成质量问题。