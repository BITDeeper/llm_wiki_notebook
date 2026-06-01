---
type: source
title: "AI权威清洗：一张肉眼难辨的图片，就能让GPT-5.4、Claude Opus 4.6集体造谣"
created: 2026-05-31
updated: 2026-05-31
tags: [对抗样本, VLM安全, AI权威清洗, 虚假信息, 内容审核]
related: [ai-权威清洗, 对抗样本, 高阶幻觉, 认知投降, florian-tramer]
sources: ["ai权威清洗：-一张肉眼难辨的图片，就能让gpt-5.4、claude-opus-4.6集体造谣.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/eswe626F1tflyfVYYthYPw"
venue: 机器之心
---

# AI权威清洗：一张肉眼难辨的图片，就能让GPT-5.4、Claude Opus 4.6集体造谣

## 摘要

本文报道了 ETH Zürich [[florian-tramer|Florian Tramèr]] 团队发表的论文"Laundering AI Authority with Adversarial Examples"（arXiv: 2605.04261），系统性地揭示了[[ai-权威清洗|AI权威清洗]]攻击的现实威胁。

## 核心发现

论文证明，攻击者只需对图片施加人眼难以察觉的微小扰动，就能让当今最强的视觉语言模型（VLM）自信、权威且错误地作答。作者使用的仅是2014年的经典PGD方法加上公开CLIP模型的[[转移攻击]]，成功率应被视为攻击者能力的**下限**。

## 关键实验案例

1. **虚假信息放大**：对登月、911、特朗普遇刺等历史事件图片施加扰动后，ChatGPT、Claude等模型自信判定真实照片为"伪造"。
2. **个人名誉攻击**：将新闻截图扰动为马斯克的图像embedding后，[[grok-4-2|Grok 4.2]]直接将贩毒新闻归因于Elon Musk；即使文章标题写明真名，多个模型仍错误识别。
3. **内容审核绕过**：将色情图片embedding拉向玩具娃娃后，ChatGPT判定其适合社交媒体发布；将女性图像扰动为男性embedding后，81%的脱衣请求绕过Grok安全过滤。
4. **感知矛盾**：同一张AI生成女性图片与其扰动版本并排展示，[[claude-opus-4-6|Claude Opus 4.6]]、Grok 4.2、ChatGPT 5.4 Thinking均判定为"两个不同的人"。
5. **反向图像搜索失效**：Google、Bing、Yandex均被扰动图误导。

## 核心论点

当VLM被广泛嵌入高信任度工作流（事实核查、内容审核、电商推荐）时，经典的[[对抗样本]]攻击从学术问题升级为低成本、可大规模实施的现实威胁。不需要任何新攻击算法，十多年前就已存在的基础技术足以构成全部威胁。

## 与现有Wiki的关联

- [[高阶幻觉]] — AI权威清洗可视为高阶幻觉的恶意利用形式
- [[认知投降]] — 攻击前提正是用户对AI输出的默认信任
- [[三系统认知框架]] — 当系统3（AI）被恶意操控，外接认知系统成为虚假信息放大器
- [[scaling-law]] — 挑战"规模即安全"假设，最新顶级模型对经典攻击仍脆弱