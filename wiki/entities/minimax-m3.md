---
type: entity
title: MiniMax M3
created: 2026-06-01
updated: 2026-06-01
tags: ["大模型", "编程agent", "长上下文", "多模态", "开源模型", "开源", "agentic"]
related: ["minimax", "msa-稀疏注意力", "claw-eval", "gpt-5.5", "任务执行范式", "minimax-code", "frontier-三件套", "gemini"]
sources: ["minimax新旗舰m3发布！自己干了12小时复现获奖论文，三条科技树同时点满.md", "minimax-m3来了！.md"]
origin_date: 2026-06-01
---
# MiniMax M3

MiniMax M3 是 [[minimax]] 发布的大语言模型，是首个同时具备[[frontier-三件套]]（前沿Coding/Agentic能力、1M上下文窗口、原生多模态）的开源模型和国产模型。

## 核心能力

### Coding与Agentic
- SWE-Bench Pro 59.0%，超过 [[gpt-5.5]] 和 Gemini 3.1 Pro，接近 Claude Opus 4.7
- Terminal Bench 2.1 得分 66.0%
- KernelBench Hard 28.8%
- [[claw-eval]] 排名第一

### 长上下文
- 支持100万token上下文窗口
- 基于 [[msa-稀疏注意力]] 架构，1M上下文下每token计算量仅为上代1/20
- Prefilling加速9倍+，Decoding加速15倍+

### 原生多模态
- 从Step 0开始混合训练文本、图文交织数据、图文对和视频数据
- 预训练数据规模100T token量级
- OmniDocBench得分超过 Gemini 3.1 Pro
- 支持图片和视频输入，能操作电脑桌面

## 标志性测试：CUDA算子优化

M3在内部测试中从残缺Triton骨架出发，在NVIDIA Hopper架构GPU上独立优化FP8矩阵乘法kernel。自主运行约24小时，完成147次benchmark提交和1959次工具调用，将硬件峰值利用率从7.6%推至71.3%（9.4倍加速）。最优解出现在第145次提交，展现了"坚持探索"行为——多数对比模型在前30次提交后便主动停止。

## 配套产品

- [[minimax-code]] — 专为M3设计并同步训练的Agent产品
- Token Plan — 分层定价，API支持thinking和non-thinking两种模式

## 开源状态

模型权重和技术报告预计在2026年6月上旬发布。