---
type: source
title: "MiniMax新旗舰M3发布！自己干了12小时复现获奖论文，三条科技树同时点满"
created: 2026-06-01
updated: 2026-06-01
tags: [大模型, minimax, 编程agent, 长上下文, 多模态, 稀疏注意力]
related: [minimax, minimax-m3, msa-稀疏注意力, claw-eval, gpt-5.5]
sources: ["minimax新旗舰m3发布！自己干了12小时复现获奖论文，三条科技树同时点满.md"]
authors: [克雷西]
year: 2026
url: "https://mp.weixin.qq.com/s/J7IiONtYOSPDL5ldjqd25g"
venue: 量子位
---
# MiniMax新旗舰M3发布！自己干了12小时复现获奖论文，三条科技树同时点满

量子位报道，[[minimax]] 在启动科创板IPO辅导后发布新一代旗舰模型 [[minimax-m3]]。该模型声称是目前开源模型中唯一同时具备前沿编程、1M超长上下文、原生多模态三项能力的模型。

## 核心内容

- **三项能力合一**：前沿Coding、1M长上下文、原生多模态同时在线
- **评测表现**：在SWE-Bench Pro上超过 [[gpt-5.5]] 和Gemini 3.1 Pro，接近Claude Opus 4.7；在 [[claw-eval]] 自主Agent评测中获最高分
- **底层创新**：引入 [[msa-稀疏注意力]]（MiniMax Sparse Attention）架构，1M上下文下每token计算量降至前代1/20
- **自主Agent演示**：独立完成FP8 GEMM优化（约24小时）、ICLR 2025获奖论文复现（约12小时）、PostTrainBench模型教练任务（12小时）

## 注意事项

- 所有评测数据均为MiniMax自行发布，缺乏第三方独立验证
- 技术报告和开源权重预告10天内发布，当前实际未开源
- 发布时间与科创板IPO辅导时间重合，存在资本运作背景