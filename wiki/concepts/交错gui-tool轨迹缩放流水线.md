---
type: concept
title: 交错GUI-Tool轨迹缩放流水线
created: 2026-05-31
updated: 2026-05-31
tags: [数据合成, agent, gui, 工具调用, 训练方法]
related: [toolcua, 工具自举gui-rft, 混合动作空间]
sources: ["别光给agent加tool了，它根本选不明白！复旦×通义提出全新cua训练范式.md"]
---
# 交错GUI-Tool轨迹缩放流水线

交错GUI-Tool轨迹缩放流水线（Interleaved GUI-Tool Trajectory Scaling Pipeline）是[[toolcua|ToolCUA]]第一阶段的数据合成方法，用于从已有GUI-only数据生成高质量的混合轨迹训练数据。

## 动机

现实中interleaved GUI-Tool轨迹数据非常稀缺：真实工具接口维护成本高，收集混合轨迹需要复杂的环境接入和人工标注。而已有GUI数据规模虽大，但大多是GUI-only轨迹，没有告诉模型何时应该用工具替代冗长GUI操作。

## 三个步骤

### 1. 轨迹感知合成工具库构建
对每条GUI轨迹，模型分析任务目标、动作序列和截图描述，从真实操作流程中抽象出可调用的工具。这些工具不是凭空生成的API模板，而是grounded in concrete trajectory behavior——从真实GUI行为中抽象出来的工具能力。

### 2. 带下一状态锚定的工具轨迹生成
给定合成工具库和原始GUI轨迹，MLLM生成功能等价的tool-only trajectory，并通过next-state grounding将工具执行效果锚定到原始GUI轨迹中的下一帧截图，验证一致性。

### 3. 交错GUI-Tool轨迹生成
系统随机采样部分工具调用替换回对应GUI子序列，形成多种GUI与Tool交错的轨迹。这一设计让模型看到不同tool availability下的决策边界，自然产生GUI→Tool和Tool→GUI的critical switching steps。

## 产出

- 约4k个unique tools，覆盖fine-grained、mid-grained、coarse-grained多级粒度
- 约180k steps数据用于warmup SFT
- 从critical steps中采样约5k条用于single-turn RL