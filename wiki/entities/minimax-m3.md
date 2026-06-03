```markdown
---
type: entity
title: MiniMax M3
created: 2026-06-01
updated: 2026-06-02
tags: ["大模型", "编程agent", "长上下文", "多模态", "开源模型", "开源", "agentic", "编程"]
related: ["minimax", "msa-稀疏注意力", "msa-minimax-sparse-attention", "claw-eval", "gpt-5.5", "任务执行范式", "minimax-code", "frontier-三件套", "gemini", "交互式用户模拟器框架", "claude-code"]
sources: ["minimax新旗舰m3发布！自己干了12小时复现获奖论文，三条科技树同时点满.md", "minimax-m3来了！.md", "minimax-m3一手实测：老黄ppt上74个logo，我以为能难住它.md"]
origin_date: 2026-06-01
---
# MiniMax M3

[[minimax]] 发布的最新开源旗舰大模型，是首个同时具备[[frontier-三件套]]（前沿Coding/Agentic能力、1M上下文窗口、原生多模态）的开源模型和国产模型。此前能同时跑通这三件事的只有Claude Opus、GPT-5.5、Gemini 3.1 Pro，且全是闭源的。M3是第一个撕开这个口子的开源模型。

## 三大核心能力

### 1M长上下文
- 支持100万token上下文窗口
- 基于自研 [[msa-稀疏注意力|MSA]]（MiniMax Sparse Attention）稀疏注意力架构，1M上下文下每token计算量仅为上代1/20
- Prefilling加速9倍+，Decoding加速15倍+

### 原生多模态（Early Fusion）
- 从预训练第一步（Step 0）即进行图文混合训练，文本和视觉的语义空间从一开始融在同一套框架下，路线与Google Gemini一致
- 混合训练文本、图文交织数据、图文对和视频数据
- MiniMax发现interleaved data对模型性能的提升比通常认为的更关键
- 预训练数据规模100万亿token量级
- OmniDocBench得分超过 Gemini 3.1 Pro
- 支持图片和视频输入，能操作电脑桌面

### 强Coding与Agentic能力
- 通过 [[交互式用户模拟器框架]] 训练
- SWE-Bench Pro 59.0%，超过 [[gpt-5.5]] 和 Gemini 3.1 Pro，接近 Claude Opus 4.7
- Terminal Bench 2.1 得分 66.0%
- KernelBench Hard 28.8%
- [[claw-eval]] 排名第一

## 标志性测试与实测表现

### CUDA算子优化
M3在内部测试中从残缺Triton骨架出发，在NVIDIA Hopper架构GPU上独立优化FP8矩阵乘法kernel。自主运行约24小时，完成147次benchmark提交和1959次工具调用，将硬件峰值利用率从7.6%推至71.3%（9.4倍加速）。最优解出现在第145次提交，展现了"坚持探索"行为——多数对比模型在前30次提交后便主动停止。

### 论文复现
独立复现ICLR 2025 Outstanding Paper和ICLR 2026论文，自主运行近12小时，产出18次commit与23张图表，系数验证图与论文硬编码数字几乎完全重叠。

### Logo识别
从黄仁勋ComputeX PPT中识别74个企业Logo并全部正确匹配公司信息。

### 视频理解
理解1.3G语言学奥赛讲解视频，复现解题过程为交互式网页。

### 地图应用
根据黄仁勋北京行程制作可交互打卡地图。

## 配套产品

- [[minimax-code]] — 专为M3设计并同步训练的Agent产品
- Token Plan — 分层定价，API支持thinking和non-thinking两种模式

## 开源状态

模型权重和技术报告预计在2026年6月上旬发布。
```