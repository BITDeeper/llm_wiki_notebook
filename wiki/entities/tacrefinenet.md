---
type: entity
title: TacRefineNet
created: 2026-02-12
updated: 2026-02-12
tags: [robotics, tactile-sensing, fine-manipulation, xiaomi]
related: [xiaomi, xiaomi-robotics-0]
sources: ["小米的首代机器人vla大模型来了！丝滑赛德芙，推理延迟仅80ms丨全面开源.md"]
---
# TacRefineNet

**TacRefineNet** 是 [[小米]] 开源的触觉驱动精细抓取微调模型。它与 [[Xiaomi-Robotics-0]] VLA 大模型协同工作，构成了小米具身智能体系中“手”的部分，负责处理需要极高精度的操作任务。

## 技术特点

### 硬件依赖
- 依赖 11×9 压阻式触觉阵列。
- 触点间距 1.1mm。

### 核心能力
- **多模态融合**：结合触觉反馈进行感知。
- **Zero-shot 部署**：无需视觉、无需物体三维模型，可直接部署于真实产线。
- **精度**：实现毫米级位姿微调。

## 协同作用
TacRefineNet 与 [[Xiaomi-Robotics-0]] 形成了互补：
- **Xiaomi-Robotics-0** 提供宏观的场景理解、决策与连续控制（眼-脑）。
- **TacRefineNet** 提供末端的精细调整与触觉反馈（手）。

这种组合直接切中了工业场景中最难的非结构化环境作业难题，体现了小米“[[务实进厂派]]”的技术路线。