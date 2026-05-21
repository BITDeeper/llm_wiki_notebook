---
type: entity
title: LeRobotMixtureDataLoader
tags: [tool, data-loader, robotics, training]
related: [starvla, 跨形态混合训练]
created: 2026-04-13
updated: 2026-04-13
sources: ["统一vla范式！港科大开源starvla乐高式架构，复现成本大幅降低.md"]
---

# LeRobotMixtureDataLoader

[[LeRobotMixtureDataLoader]] 是 [[starvla]] 框架中用于实现 [[跨形态混合训练]] 的关键数据加载组件。

## 功能
它允许用户在 YAML 配置文件中声明任意机器人数据集的组合与采样权重。框架会自动处理以下复杂逻辑：
- **动作空间对齐**：将不同机器人的异构动作数据映射到统一空间。
- **形态标签追踪**：保留数据来源的机器人形态信息，以便模型学习上下文。

## 价值
这一设计将“跨形态预训练”从需要编写定制脚本的任务转变为标准化的配置流程，极大地简化了通用具身智能模型的训练流程。