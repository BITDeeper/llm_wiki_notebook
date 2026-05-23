---
type: entity
title: Native Parallel Reasoner（NPR）
created: 2026-05-19
updated: 2026-05-19
tags: [ai模型, 并行推理, 强化学习, icml-2026, bigai]
related: [北京通用人工智能研究院, 原生并行推理, 自蒸馏并行强化学习, papo, multiverse]
sources: ["icml-2026｜告别「单线程」思维，智能体进化出了原生的并行推理大脑.md"]
origin_date: 2026-05-19
---
# Native Parallel Reasoner（NPR）

Native Parallel Reasoner（NPR，原生并行推理器）是 [[北京通用人工智能研究院]] 语言交互实验室（NLCo）开发的并行推理框架，发表于 ICML 2026 主会。

## 核心理念

NPR 的关键词在「原生」二字：在零外部监督（不依赖强教师并行轨迹）的条件下，让模型自我进化出 [[原生并行推理]] 能力。模型在一次思考中同时衍生并维护多条候选推理路径，在关键节点进行「分支 + 聚合」，最终合成最优解。

## 三阶段训练范式

详见 [[自蒸馏并行强化学习]]：

1. **Stage 1 — NPR-ZERO**：格式跟随强化学习，无外部并行示例，以格式合规与答案正确为奖励信号
2. **Stage 2 — NPR-BETA**：拒绝采样 + 并行预热，严格筛选自蒸馏轨迹，引入并行注意力掩码与并行位置编码
3. **Stage 3 — Native-Parallel RL**：使用 [[papo|PAPO]] 算法在并行执行引擎上直接优化分支策略

## 关键技术组件

- **[[papo|PAPO（Parallel-Aware Policy Optimization）]]**：并行感知策略优化算法
- **NPR-Engine**：配套并行推理引擎，包含预算感知 KV 回收、分支感知 Token 累积、格式预检等工程改进
- **并行注意力掩码与并行位置编码**：保证不同分支互相隔离但共享上下文 KV Cache

## 实验表现

| 指标 | 数值 |
|------|------|
| 8 基准平均得分 | 65.0（vs 顺序 RL 62.0） |
| 生成加速比 | 约 4.6 倍（AIME25） |
| 并行触发率 | 100%（全部 8 个数据集） |
| 训练后准确率 | 从约 17% 提升至 50.4% |

## 与 Multiverse 的对比

[[multiverse|Multiverse]]（NeurIPS 2025）高度依赖强教师模型蒸馏，学生模型继承教师局限，并行触发率不稳定且依赖数据集。NPR 通过自蒸馏 + 并行 RL 的零外部监督路线，在泛化性和触发稳定性上均具显著优势。

## 开源资源

- 论文链接：https://arxiv.org/abs/2512.07461
- 代码实现：https://github.com/bigai-nlco/Native-Parallel-Reasoner
- 项目主页：https://bigai-nlco.github.io/Native-Parallel-Reasoner
