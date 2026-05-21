---
type: concept
title: Tokens per Watt
tags: [metric, efficiency, ai-hardware]
related: [英伟达, vera-rubin, groq-3-lpu, token经济学]
created: 2026-03-17
updated: 2026-03-17
sources: ["龙虾gpu来了！老黄杀入openclaw战场，全新rubin算力狂飙35倍.md"]
---

# Tokens per Watt

**Tokens per Watt**（每瓦特生成 Token 数）是衡量 AI 数据中心效率的关键指标，反映了在单位能耗下生成 Token（AI 产出）的数量。

## 背景
在 [[token经济学]] 中，Token 被视为新的“大宗商品”，数据中心被视为新的“炼油厂”。由于电力是数据中心的主要产能约束（成本上限），因此如何更有效地利用电力（即提高 Tokens per Watt）直接决定了 AI 工厂的经济效益。

## 优化路径
[[英伟达]] 在 [[vera-rubin]] 架构中展示了多种提升该指标的技术手段：
1.  **架构优化**：通过 [[groq-3-lpu]] 处理特定任务（解码），利用其高能效比。
2.  **散热优化**：采用 45°C 热水液冷技术，减少冷却系统自身的能耗，将更多电力用于计算。
3.  **异构计算**：通过 Dynamo 软件将推理任务拆解，分配给最适合的硬件（GPU 或 LPU），避免资源浪费。

## 商业意义
黄仁勋在 GTC 2026 上展示了一张图表，将数据中心效率分为四个档位（免费档、中等档、高价档、超级档）。在同等功耗下，提升 Tokens per Watt 意味着：
- 更高的吞吐量（处理更多用户请求）。
- 更快的响应速度（尤其是高价值的超级档位任务）。
- 更高的收入（每度电产生的经济价值增加）。

例如，[[vera-rubin]] 相比前代 Blackwell，在同等功耗下将推理性能提升了数倍，直接转化为单位电力成本下数倍的收入潜力。