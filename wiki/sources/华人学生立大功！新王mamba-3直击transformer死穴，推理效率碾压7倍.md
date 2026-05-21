---
type: source
title: "华人学生立大功！新王Mamba-3直击Transformer死穴，推理效率碾压7倍"
tags: [mamba, ssms, transformer, 推理优化, 架构创新]
related: [mamba-3, albert-gu, tri-dao, kevin-li, 状态空间模型, 推理优先, mimo]
created: 2026-03-19
updated: 2026-03-19
authors: [好困, 桃子]
year: 2026
url: "https://mp.weixin.qq.com/s/ydBmqGZ6OBvuIV2Xi6zJcQ"
venue: "新智元"
sources: ["华人学生立大功！新王mamba-3直击transformer死穴，推理效率碾压7倍.md"]
---

# 华人学生立大功！新王Mamba-3直击Transformer死穴，推理效率碾压7倍

## 概述
本文报道了由 CMU 和普林斯顿大学团队发布的最新一代开源架构 [[mamba-3]]。该架构由学生研究员 [[kevin-li]]、[[berlin-chen]] 和 [[caitlin-wang]] 主力开发，[[albert-gu]] 和 [[tri-dao]] 指导。Mamba-3 提出了“[[推理优先]]”的设计哲学，通过 [[指数梯形离散化]]、[[复数值 ssm]] 和 [[mimo]] 三大核心技术，在保持高性能的同时大幅降低了推理成本和延迟。

## 核心发现

### 性能突破
- **准确率**：在 15 亿参数规模下，Mamba-3 MIMO 版本平均准确率达 57.6%，比 [[transformer]] 高出 4%。
- **推理效率**：在长序列任务上，端到端延迟仅为 Transformer 的 1/7。
- **逻辑能力**：在奇偶校验任务上达到 100% 准确率（Mamba-2 仅 0.9%）。

### 技术细节
1.  **指数梯形离散化**：从一阶精度跃升至二阶精度，隐式引入数据依赖卷积，简化了架构。
2.  **复数值 SSM**：将状态转移引入复数域，解决了线性模型在逻辑推理和状态追踪任务上的短板。
3.  **MIMO 机制**：通过增加每步计算量填满 GPU 闲置算力，在不增加延迟的情况下提升模型表现。

### 行业趋势
文章指出，纯 SSM 模型在检索任务上仍不如 Transformer，未来的趋势是 [[混合架构]]（将 SSM 层与注意力层交替堆叠）。这与行业内的 Nemotron-H、Kimi Linear 等模型的发展方向一致。

## 关键人物
- [[albert-gu]]：CMU 助理教授，Cartesia 联合创始人，Mamba 架构奠基人。
- [[tri-dao]]：普林斯顿助理教授，Together AI 联合创始人，FlashAttention 发明者。
- [[kevin-li]]：CMU 机器学习系博士生，主导 Mamba-3 开发。
- [[berlin-chen]]：普林斯顿大学计算机科学博士生，Together AI 实习生。
- [[caitlin-wang]]：普林斯顿大学计算机专业本科生。