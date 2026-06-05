---
type: event
title: Step 3.7 Flash 发布
created: 2026-06-01
updated: 2026-06-04
tags: [模型发布, agent, 多模态, 中国ai, 产品发布, 大模型, 阶跃星辰, 效率]
related: [step-3.7-flash, 阶跃星辰, advisor-策略, flash模型范式重构, claw-eval, 模型竞赛赛点转移, token效率, aa榜]
sources: ["400-tokens秒！阶跃step-3.7-flash，把agent任务成本打到claude零头.md", "阶跃step-3.7-flash登顶aa榜：速度、性价比、端到端三项第一.md"]
origin_date: 2026-06-01
participants: [阶跃星辰]
causes: [任务执行范式, ai-subscription-crisis, 模型竞赛赛点转移]
effects: [advisor-策略, flash模型范式重构, token效率]
significance: high
---
# Step 3.7 Flash 发布

2026年6月1日，[[阶跃星辰]]正式发布 Step 3.7 Flash 多模态大模型，标志着国产模型在 Agent 效率赛道取得突破性工程指标。发布后（6月4日前后）迅速在多个平台引发广泛关注。

## 背景

前代 Step 3.5 Flash 于约2026年3月发布，登顶 OpenRouter Trending，一个月内在 [[openclaw|OpenClaw]] 调用量全球第一。Step 3.7 Flash 是三个月内的快速迭代，代表 Flash 模型从"便宜平替"到"Agent 地基"的范式跃迁。

## 发布后市场表现

Step 3.7 Flash 发布后迅速在多个平台引发关注：

- 登顶 [[aa榜|AA榜]]（Artificial Analysis）速度、性价比、端到端三项第一
- OpenRouter Trending 榜单热度暴涨，稳居全球第二
- HuggingFace 开源后下载量和讨论持续升温

## 核心突破

- **生成速度**：最高 **416 tokens/s**（标称 400 TPS），稀疏 MoE 架构仅激活 11B 参数；在支持多模态前提下远超 GPT-5.3 的 70+ tps
- **极限吞吐**：海外开发者实测达 6000 tok/s（NVFP4 设置）
- **任务成本**：[[advisor-策略|Advisor 模式]]下单任务成本 0.19 美元，约为 Claude Opus 4.6（1.76 美元）的 1/9
- **评测表现**：[[claw-eval|ClawEval-1.1]] 得分 67.1，逼近 Claude Opus 4.6（70.8）
- **工程效率**：86.1% 缓存命中率
- **开源开放**：全面开源，支持主流推理框架和 Agent 框架

## 行业意义

此事件是 [[模型竞赛赛点转移]] 的标志性时刻——证明大模型竞争已从"谁更聪明"转向"谁能在单位成本下把更多真实任务又快又稳地跑完"。Step 3.7 Flash 的工程指标（416 tps、1/9 成本、86.1% 缓存命中率）为 Agent 时代的模型竞争力建立了新的量化基准。

同时，此举标志着中国大模型公司在 Agent 经济赛道上以"性价比前沿"策略发起挑战，直接冲击 Claude 等前沿闭源模型的商业定价逻辑。[[阶跃星辰]]被认为要争第一家在"Agent 经济"时代上市的中国大模型公司。