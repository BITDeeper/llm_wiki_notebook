---
type: entity
title: Claude Sonnet 4.8
created: 2026-05-24
updated: 2026-05-24
tags: [anthropic, claude, 大模型, 中端模型]
related: [anthropic, claude-opus-4.8, claude-code, source-map-leaks]
origin_date: 2026-03-31
sources: ["anthropic三张底牌全翻了！mythos-1首次现身，opus-4.8曝光.md"]
---
# Claude Sonnet 4.8

Claude Sonnet 4.8 是 [[anthropic]] 中端模型的新版本，通过2026年3月31日的 [[claude-code-源码泄露事件-20260331|51万行源码泄露]] 提前曝光。该版本跳过 Sonnet 4.7 直接升级，预计2026年6月中旬发布。

## 跳级发布策略

泄露源码中的关键词过滤器出现了 Sonnet 4.8 和 Opus 4.7 的引用，但没有任何 Sonnet 4.7 的痕迹，直接确认 Anthropic 跳过中端版本的 4.7 迭代。这一策略将旗舰模型 Opus 4.7 的能力下放到更便宜的中端层级。

## 四大升级

根据泄露信息和社区分析，Sonnet 4.8 预计带来以下升级：

1. **视觉能力飙升**：继承 Opus 4.7 的视觉升级，对 UI Mockup 和复杂架构图的识别准确率有望突破98%（Opus 4.7 已达98.5%）
2. **编程能力大幅提升**：更干净的一次性代码生成，更精确的指令遵循
3. **新增"X high"推理层级**：新的推理强度设定，在不显著增加生成时间的前提下增强逻辑推理能力
4. **更新的分词器**：但 Token 消耗量将增加约30%

## 成本影响

新分词器导致 Token 消耗增加约30%，在 [[ai-subscription-crisis]] 和 [[tokenmaxxing]] 的行业背景下，可能加剧用户成本焦虑。同样的 prompt，新版分词器会用掉更多 Token。