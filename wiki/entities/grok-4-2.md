---
type: entity
title: Grok 4.2
tags: ["models", "llm", "xai", "模型", "VLM", "安全"]
related: [xai, elon-musk, claude-opus, claude-sonnet, ai-权威清洗, 对抗样本, 转移攻击]
created: 2026-04-10
updated: 2026-05-31
sources: ["马斯克说漏嘴了！claude-opus参数5t，sonnet-1t.md", "ai权威清洗：-一张肉眼难辨的图片，就能让gpt-5.4、claude-opus-4.6集体造谣.md"]
---

# Grok 4.2

## 概述

Grok 4.2 是 [[xAI]] 公司开发的视觉语言模型（VLM），集成于推特（X）平台，用户可直接 @Grok 进行图片真伪鉴定和信息查询。根据 [[马斯克]] 的披露，该模型的总参数量为 **0.5T（500B）**。

## 规模对比

马斯克在社交媒体上使用 Grok 4.2 作为参照物，推算出了竞争对手模型的参数规模：

- Grok 4.2 (0.5T) 约为 [[Claude Sonnet]] (1T) 规模的一半。
- Grok 4.2 (0.5T) 约为 [[Claude Opus]] (5T) 规模的十分之一。

这一对比间接确认了业界对 Claude 系列模型参数量级的长期猜测。

## 安全漏洞记录

在 [[ai-权威清洗论文发布-202605|AI权威清洗论文]] 的测试中，Grok 4.2 被证实存在严重的[[对抗样本]]脆弱性：

- 将新闻截图扰动为马斯克图像 embedding 后，Grok 4.2 直接将贩毒新闻归因于 Elon Musk
- 即使文章标题写明真名，仍将死者错误识别为 Elon Musk
- 将女性图像扰动为男性 embedding 后，81% 的脱衣请求绕过其安全过滤
- 在并排对比测试中，将同一人的扰动版本判定为"不同的人"