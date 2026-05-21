---
type: source
title: "腾讯纯文本LLM训视觉encoder，拿捏图表长视频，达到开源小模型SOTA！"
tags: [multimodal, llm, computer-vision, tencent, sota]
related: [penguin-vl, penguin-encoder, tra策略, 纯文本llm初始化视觉编码器, 原生理解生成统一]
created: 2026-03-19
updated: 2026-03-19
authors: ["Penguin-VL团队"]
year: 2026
url: "https://mp.weixin.qq.com/s/bRH402uumfdyeio9NLM5lA"
venue: "量子位"
sources: ["腾讯纯文本llm训视觉encoder，拿捏图表长视频，达到开源小模型sota！.md"]
---

# 源文件摘要

本文报道了腾讯开源的 [[penguin-vl]] 多模态大语言模型。该模型打破了主流“视觉 Backbone（如 CLIP）+ LLM”的拼接范式，提出直接从纯文本 LLM 初始化视觉编码器（[[penguin-encoder]]）。

## 核心观点

- **反直觉路径**：传统的对比学习视觉编码器擅长语义对齐，但容易过早丢失细粒度的局部结构、空间关系和时序细节。Penguin-VL 证明直接从纯文本 LLM 初始化视觉编码器是可行且更优的路径。
- **架构改造**：将 LLM 的因果注意力改为 [[双向注意力]]，并引入 [[2D-RoPE]] 以适应二维视觉信息。
- **性能表现**：2B 和 8B 参数规模的模型在文档理解、图表解析和长视频理解任务上达到了开源小模型 SOTA。
- **效率优化**：提出 [[TRA策略]]（时序冗余感知 Token 压缩），优先为关键帧分配 Token 预算，解决长视频上下文瓶颈。

## 关键数据

- 消融实验显示，LLM 初始化的 Encoder 平均分从随机初始化的 31.3 提升至 34.6。
- 仅用约 2.4 亿 Stage 1 样本，Penguin-Encoder 在对比实验中达到 49.3 分，超越了依赖更大规模对比学习的方案。

## 行业意义

该工作与 [[DeepSeek-OCR2]] 等研究共同指向了 [[原生理解生成统一]] 的趋势，即不再依赖简单的模块拼接，而是从架构底层统一视觉和语言的建模方式。