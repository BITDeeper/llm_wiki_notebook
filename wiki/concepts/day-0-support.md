---
type: concept
title: Day-0 Support
created: 2026-05-14
updated: 2026-05-14
tags: [生态适配, 模型部署, 响应速度]
related: [摩尔线程, sglang, deepseek-v4]
sources: ["国产gpu组了个开源局，把sglang等核心开发者都摇来了！.md"]
---
# Day-0 Support

新模型发布当天即完成适配运行的能力，考验GPU生态的反应速度和工程成熟度。

## 实践案例

[[deepseek-v4|DeepSeek V4]] 发布时，智源人工智能研究院通过 FlagOS 的 Triton 算子优化和摩尔线程的 SQMMA 张量加速引擎，实现了 Day-0 适配：
- 首 token 延迟降低56.7%
- 吞吐量提升23%
- FP8 矩阵乘算子平均加速8.85倍
- 稀疏注意力算子平均加速6.01倍

## 生态意义

Day-0 Support 能力标志着国产GPU从"被动等待适配"到"主动同步跟进"的转变，是 [[生态坐标之争]] 中的关键竞争力指标。