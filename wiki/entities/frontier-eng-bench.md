---
type: entity
title: Frontier-Eng Bench
created: 2026-05-13
updated: 2026-05-22
tags: [benchmark, ai-agent, engineering-optimization, evaluation, 评测基准, 生成式优化, 工程闭环, auto-research]
related: [einsia-ai, auto-research, 双重幂律衰减, 递归式自我改进, agentic-engineering, 生成式优化, gpt-5-4]
sources: ["auto-research时代，47个没有标准答案的任务成了agent能力必测榜.md", "auto-research最后一块拼图，frontier-eng-bench登场，在工程闭环里死磕最优.md"]
origin_date: 2026-04-01
---
# Frontier-Eng Bench

Frontier-Eng Bench 是由 [[einsia-ai]] 旗下 Navers Lab 发布的工程优化评测基准，包含 **47 个多学科交叉的工程优化任务**，旨在填补 [[auto-research]] 领域中"从可行到最优"这一关键迭代环节的评测空白，首次系统性测试 AI 在无标准答案场景下的迭代优化能力。

## 核心设计：生成式优化

Frontier-Eng Bench 提出了一种新的评测范式——[[生成式优化]]（Generative Optimization），要求 Agent 不再只提交一次答案，而是在固定预算内持续进行工程闭环迭代：

1. 提出方案
2. 运行程序或接入仿真器
3. 获取详细反馈（含报错信息）
4. 修改参数或方案
5. 在固定预算内不断逼近更优解

### 核心特征

- **无标准答案**：区别于传统问答式评测，任务没有"满分"，只有"更逼近极限的优化"
- **工程闭环评测**：AI 必须完成完整的迭代循环
- **多学科交叉**：涵盖水下机器人稳定性、动力电池析锂边界、量子线路噪声控制等硬核工程场景
- **不可能三角**：AI 需在功耗、安全、性能的约束下寻找最优解

## 任务覆盖

Frontier-Eng v1 覆盖 **47 个任务**，横跨 5 大工程方向：

- 计算与量子信息
- 运筹与决策科学
- 机器人 / 控制 / 能源系统
- 光学与通信系统
- 物理科学与工程设计

任务类型包括 GPU kernel 优化、电池快充策略、机械臂运动时间压缩、量子线路优化、数据中心控制、结构拓扑设计、作业车间调度、光学相位设计、单细胞分析、化学反应优化等。所有任务均来自领域专家（PhD、Master student）的一手经验。

## 防作弊机制

- 评测器和参考数据为**只读**，Agent 无法修改
- 候选方案在**隔离环境**中运行，无法直接接触评分器
- 最终分数来自 verifier 自身输出的**日志**，而非 Agent 自报

## 评测发现

论文系统评测了多种前沿模型和代表性搜索框架，核心结论：

1. **双重幂律衰减**：Agent 改进频率 ∝ 1/迭代轮数，改进幅度 ∝ 1/改进次数，越往后提升越难越小（[[双重幂律衰减]]）
2. **深度优于宽度**：并行多路径探索（宽度）能避免卡壳，但真正的工程突破依赖持续深度积累，深度不可或缺
3. **模型表现**：[[gpt-5-4]] 整体表现最稳健，但所有模型距离"像资深工程师一样稳定跨领域优化"仍有巨大差距

## 论文与资源

- 论文题目：*Frontier-Eng: Benchmarking Self-Evolving Agents on Real-World Engineering Tasks with Generative Optimization*
- Arxiv：https://arxiv.org/abs/2604.12290
- 项目主页：https://lab.einsia.ai/frontier-eng/
- GitHub：https://github.com/EinsiaLab/Frontier-Engineering

## 意义

Frontier-Eng Bench 标志着 AI 评测从"知识检索"向"工程闭环优化"的范式转变，为 [[递归式自我改进]] 提供了首个系统性评测方法论，是 [[auto-research]] 时代开启的标志性事件。