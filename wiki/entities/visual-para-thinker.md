---
type: entity
title: Visual Para-Thinker
created: 2026-05-24
updated: 2026-05-24
tags: [视觉语言模型, 并行思考, 框架, icml-2026]
related: [并行思考范式, 注意力漂移, pa-attention, lprope, 许浩然, 小米MiLMPlus团队]
sources: ["icml-2026｜首个视觉语言模型并行思考框架，一文解析内在机制.md"]
origin_date: 2026-02-01
---

# Visual Para-Thinker

**Visual Para-Thinker** 是首个针对大规模视觉语言模型的 [[并行思考范式|并行思考]] 框架，由浙江大学硕士生 [[许浩然]] 作为第一作者、[[小米MiLMPlus团队]] 的 [[李佳泽]] 担任通讯作者完成。论文提交至 ICML 2026（arXiv: 2602.13310）。

## 动机

视觉语言模型在深度推理中存在 [[注意力漂移]] 问题：随着推理序列拉长，模型对视觉特征的注意力被不断稀释，导致严重的视觉幻觉。传统的垂直扩展（增加推理长度）容易陷入探索僵化，因此 Visual Para-Thinker 从**推理宽度**维度出发，通过以视觉为中心的路径划分重新分配注意力。

## 核心架构

### 视觉路径划分
- **块划分**：按图像子区域划分推理路径，实现显式注意力分配（全局到局部）
- **扫描划分**：按不同视觉扫描轨迹划分，实现隐式注意力分配（保留全局视角）
- 两种方式各有优劣，采用混合训练策略实现互补

### 关键机制
- [[pa-attention]]（路径感知注意力）：通过特殊 token `<think_i>` 实现不同推理路径的上下文隔离
- [[lprope]]（分段学习位置编码）：将旋转位置编码与可学习绝对位置编码结合，保证路径可区分性
- 无偏性设计：将不同路径的 position id 映射到同一区间，避免"loss in the middle"位置偏差

### 三性保证
1. **隔离性**：通过 Pa-Attention 实现
2. **无偏性**：通过统一 position id 区间实现
3. **可区分性**：通过 LPRoPE 实现

## 实验结果

| 任务 | 3B 模型提升 | 7B 模型提升 |
|------|-----------|-----------|
| V* 视觉搜索 | +12.6 | +6.3 |
| HallusionBench 幻觉 | +6.1 | +5.0 |
| Grounding (RefCOCO) | 有提升 | 有提升 |
| 计数任务 | 有提升 | 有提升 |

## 未来方向

作者预告将把并行思考 RL、多轮思考、Agentic RL 等方法陆续整合到 Visual Para-Thinker 中。

## 相关链接
- 论文：https://arxiv.org/abs/2602.13310
- 代码：https://github.com/xuhaoran1/Visual-Para-Thinker