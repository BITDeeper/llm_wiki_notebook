---
type: source
title: "LeCun点赞：国产开源模型占领硅谷，性价比超10倍"
tags: [ai-industry, open-source, china-ai, silicon-valley, llm, pricing]
related: [cursor, qwen, glm-5-1, kimi-k2-5, ai-subscription-crisis, yann-lecun]
created: 2026-04-10
updated: 2026-04-10
authors: ["听雨"]
year: 2026
url: "https://mp.weixin.qq.com/s/yJLni24OR_aQi0sBU17mcg"
venue: "量子位"
sources: ["lecun点赞：国产开源模型占领硅谷，性价比超10倍.md"]
---

# LeCun点赞：国产开源模型占领硅谷，性价比超10倍

## 摘要
本文报道了中国开源大模型（如 Qwen, GLM, Kimi）在硅谷的广泛应用及其对行业格局的重塑。文章指出，包括 [[cursor]]、[[cognition]]、[[shopify]] 和 [[airbnb]] 在内的多家硅谷巨头与初创公司，正在采用中国开源模型作为底座或直接用于生产环境，主要驱动力是其极高的性价比（价格仅为美国闭源模型的 1/10 到 1/20）。[[yann-lecun]] 对此现象表示了认同。

## 核心事件

### 硅谷初创公司的“套壳”策略
- **Cursor**：承认其自研的 Composer 2 模型套壳了 [[kimi-k2-5]]。该模型在基准测试中反超了 Opus 4.6，且价格大幅降低。
- **Cognition (Devin)**：其自研模型 SWE-1.6 被曝疑似在 [[glm-5-1]] 上进行后训练。这已是该公司第二次被指使用中国模型作为底座（前代 SWE-1.5 基于 GLM-4.6）。
- **行业观点**：Cognition 开发者 [[shawn-wang]] 认为，只要基础模型足够好，其具体特性不再重要，强化学习和后训练才是区分能力的关键。

### 巨头与学术界的转向
- **Meta**：曾长期主导开源生态的 Llama 系列增长乏力。有爆料称 Meta 曾使用 [[qwen]] 进行蒸馏训练。其最新模型 Muse Spark 已转为闭源。
- **Airbnb**：CEO [[brian-chesky]] 公开表示，Qwen 比 GPT 更快、更好、更便宜，是生产环境的首选。
- **Shopify**：通过切换至 Qwen，每年节省约 500 万美元成本。
- **学术界**：[[李飞飞]] 团队基于 Qwen2.5-32B 构建了推理模型 s1-32B；[[艾伦人工智能研究所]] (AI2) 也基于 Qwen 构建多模态系统，并宣布削减开源模型研发资金。

## 性价比分析
文章引用投资人 [[peter-yang]] 的数据指出，中美同等质量的模型价格相差 **10-20 倍**。

| 模型 | 输入价格 (每百万 token) | 输出价格 (每百万 token) |
| :--- | :--- | :--- |
| **Qwen3.6-Plus** | 2 元 (~$0.3) | 12 元 (~$1.7) |
| **MiniMax M2.7** | 2.1 元 | 8.4 元 |
| **Kimi K2.5** | 4 元 | 21 元 |
| **GLM-5.1** | 6 元 | 24 元 |
| **GPT-5.4** | $2.5 | $15 |
| **Opus 4.6** | $5 | $25 |

## 行业趋势
- **开源阵营转移**：随着美国机构（如 AI2）退出开源研发，以及 Meta 转向闭源，全球开源 AI 的主导权正在向中国转移。
- **工程化胜利**：竞争重心从“预训练”转向“后训练”和应用层优化，使得高质量、低成本的开源底座成为首选。

## 相关概念
- [[模型套壳]]：利用开源模型进行后训练并宣称自研的现象。
- [[ai-subscription-crisis]]：国产模型的低价策略加剧了传统闭源 API 订阅制的危机。