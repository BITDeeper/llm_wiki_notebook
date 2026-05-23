---
type: entity
title: FD-bench
created: 2026-05-12
updated: 2026-05-22
tags: ["ai", "评测基准", "交互模型", "ai评测"]
related: [tml-interaction-small, 交互模型]
sources: ["北大校友lilian-weng出镜，爆出120亿估值首个交互模型！.md", "刚刚，thinking-machines出手！首款交互模型来了，翁荔出镜实测.md"]
---
# FD-bench

FD-bench 是用于评测 [[交互模型]] 综合表现的基准测试体系，专门衡量AI交互质量。该基准的出现标志着AI评测从传统的"问答准确率"维度扩展到"交互质量"维度，反映了行业对AI能力评估标准的演进。

## 版本说明

FD-bench 包含多个版本：

- **FD-bench v1**：衡量端到端响应延迟
- **FD-bench v1.5**：衡量交互质量
- **FD-bench v3**（Audio + Tools）：衡量带工具调用的综合能力，以 Pass@1 为指标

## 关键评测结果

在 [[tml-interaction-small|TML-Interaction-Small]] 的发布中，FD-bench 是核心评测基准，TML 在该基准上全面领先 GPT Realtime API 等竞争对手：

| 版本 | 指标 | TML | Gemini | GPT |
|------|------|-----|--------|-----|
| v1.5 | 交互质量 | 77.8 | 54.3 | 46.8 |
| v1 | 端到端延迟 | 0.40秒 | — | 1.18秒 |
| v3 | Pass@1 | 68.0% | — | 52.0%（minimal）/ 58.0%（xhigh） |

## 注意事项

FD-bench 的独立性存疑——可能是 Thinking Machines 自建的评测基准，其公正性有待第三方独立验证。