```markdown
---
type: entity
title: MiniMax M3
created: 2026-06-01
updated: 2026-06-04
tags: ["大模型", "编程agent", "长上下文", "多模态", "开源模型", "开源", "agentic", "编程", "大语言模型", "国产模型"]
related: ["minimax", "msa-稀疏注意力", "msa-minimax-sparse-attention", "claw-eval", "gpt-5.5", "任务执行范式", "minimax-code", "frontier-三件套", "gemini", "交互式用户模拟器框架", "claude-code", "openclaw", "agent-team", "deepseek-v4", "原生理解生成统一"]
sources: ["minimax新旗舰m3发布！自己干了12小时复现获奖论文，三条科技树同时点满.md", "minimax-m3来了！.md", "minimax-m3一手实测：老黄ppt上74个logo，我以为能难住它.md", "openclaw终于拿下windows！全球龙虾党狂欢.md", "硅谷ceo深夜站台！minimax-m3冲上开源第一，中文社区却吵翻了？.md"]
origin_date: 2026-06-01
---
# MiniMax M3

[[minimax]] 于2026年6月初发布的最新开源旗舰大模型，是首个同时具备[[frontier-三件套]]（前沿Coding/Agentic能力、1M上下文窗口、原生多模态）的开源模型和国产模型。此前能同时跑通这三件事的只有Claude Opus、GPT-5.5、Gemini 3.1 Pro，且全是闭源的。M3是第一个撕开这个口子的开源模型。M3被视为继 [[deepseek-v4]] 之后又一个引发硅谷震动的中国开源模型，延续了"中国开源模型冲击全球"的叙事线。

## 核心架构

### 1M长上下文
- 支持100万token上下文窗口
- 基于自研 [[msa-稀疏注意力|MSA]]（MiniMax Sparse Attention）稀疏注意力架构，通过块级稀疏方式处理百万级上下文，1M上下文下每token计算量仅为上代1/20
- Prefilling加速9倍+，Decoding加速15倍+

### 原生多模态（Early Fusion）
- 采用 [[原生理解生成统一|原生多模态训练]] 方案，从预训练第一步（Step 0）即进行图文混合训练，文本和视觉的语义空间从一开始融在同一套框架下，路线与Google Gemini一致
- 混合训练文本、图文交织数据、图文对和视频数据
- MiniMax发现interleaved data对模型性能的提升比通常认为的更关键
- 预训练数据规模100万亿token量级
- OmniDocBench得分超过 Gemini 3.1 Pro
- 支持图片和视频输入，能操作电脑桌面

## Benchmark 排名

### 编程与Agentic能力
- 通过 [[交互式用户模拟器框架]] 训练
- SWE-Bench Pro 59.0%，超过 [[gpt-5.5]] 和 Gemini 3.1 Pro，接近 Claude Opus 4.7
- Terminal Bench 2.1 得分 66.0%
- KernelBench Hard 28.8%
- [[claw-eval]] 排名第一

### 综合榜单

| 榜单 | 成绩 | 排名 |
|------|------|------|
| Artificial Analysis 综合智能指数 | — | 全球第七（开源最高） |
| GPQA Diamond 科学推理 | 93.2% | 全球前四 |
| 长上下文推理 | 74.0% | 前六 |
| GDPval-AA 真实任务Agent | 1670分 | 全球第五 |
| Vals Index 多模态 | — | 全球第六（开源最高） |

综合能力已跨过Claude Sonnet 4.6门槛，进入闭源第一梯队，但距离Opus 4.7和GPT-5.5仍有差距。

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

### 盲测表现
- **鹈鹕骑自行车动画测试**（Victoria Wu）：M3被盲测者误认为Opus
- **《我的世界》克隆版测试**（JAZII）：M3与Opus 4.8表现"Super close"
- **Token效率**：完成同等任务Token消耗仅为Claude Sonnet的20%

## 工具生态

### MiniMax Code
- [[minimax-code]] — 专为M3设计并同步训练的Agent产品，系统级工具箱
- 支持 [[agent-team]] 多智能体协作架构（Leader-Worker-Verifier三角色对抗循环）

### OpenClaw
在 [[openclaw]] 2026.6.1版本更新中全面接入OpenClaw生态，作为"国产顶尖模型正式进群"的标志。MiniMax M3的接入暗示OpenClaw正在从单一模型生态向多模型中立平台演进。这与GitHub Copilot Claude 1M长上下文能力的打通共同构成了OpenClaw模型层的扩军。

### 定价
- Token Plan — 分层定价，API支持thinking和non-thinking两种模式

## 开源状态

模型权重和技术报告预计在2026年6月上旬发布。截至2026年6月4日，权重与完整技术报告尚未公开，官方承诺十天内开源。社区对其"开源第一"的宣称尚在等待最终验证。
```