---
type: entity
title: Thought-Aligner
created: 2026-06-01
updated: 2026-06-01
tags: [智能体安全, 思维校正, icml-2026, 开源模型]
related: [智能体行为安全, 思维校正, 上海创智学院, 复旦大学, openclaw]
sources: ["icml-2026-上海创智学院-x-复旦大学提出智能体安全新范式-：让智能体学会「三思而后行」.md"]
origin_date: 2026-05-01
---
# Thought-Aligner

Thought-Aligner 是由 [[上海创智学院]] 与 [[复旦大学]] 联合提出的轻量级可插拔智能体"思维校正"模块，论文被 ICML 2026 接收。

## 核心理念

在 Agent 生成不安全 Thought、但尚未执行 Action 的毫秒级窗口内，修正其推理逻辑，再让原 Agent 基于更安全的 Thought 继续完成任务。防的不是"最后一步的动作"，而是"动作背后的危险念头"。

## 技术特点

1. **可插拔设计**：部署在 Thought 生成之后、Action 执行之前，无需改动原始 Agent 模型，兼容闭源和开源模型
2. **安全-有用性平衡**：不追求简单粗暴地"拦住一切"，而是在不破坏任务连续性的前提下修正高风险推理
3. **低延迟**：提供 1.5B 和 7B 两种规模，1.5B 版本单次 Thought 修正延迟可控制在 100ms 以内

## 训练方法

- 围绕隐私保护、金融安全、网络安全等 10 类高风险场景构建安全/不安全 Thought 偏好数据对
- 基于 ReAct 轨迹模拟生成多样化任务与推理过程
- 构建数据校验与修复流水线保证数据质量
- 两阶段微调训练

## 实验结果

- 在 ToolEmu、Agent-SafetyBench、AgentHarm、AgentDojo、InjecAgent 五个主流基准上评测
- 将无防护状态约 50% 的行为安全水平提升至约 90%
- 平均安全收益约 23%
- 安全性提升未以牺牲有用性为代价，多个场景中 Helpfulness 同步提升
- 在 [[openclaw]] 实机环境中完成真实场景验证，在 CIK-Bench 子集上显著提升行为安全性

## 开源地址

- GitHub：https://github.com/WhitzardAgent/Thought-Aligner
- Hugging Face：https://huggingface.co/WhitzardAgent/Thought-Aligner-7B
- ModelScope：https://www.modelscope.cn/models/bgbgbrt/Thought-Aligner-7B-v1.0

## 核心团队

- 第一作者：[[蒋昌跃]]
- 通讯作者：[[潘旭东]]、[[杨珉]]