---
type: source
title: "四足机器人首次同时「思考+走路」，北大提出链式推理MobileVLA-R1"
tags: [robotics, embodied-ai, vla, chain-of-thought, reinforcement-learning]
related: [mobilevla-r1, peking-university, unitree-go2, chain-of-thought, grpo, vla-视觉-语言-动作]
created: 2025-12-05
updated: 2025-12-05
authors: ["新智元", "LRST"]
year: 2025
url: "https://mp.weixin.qq.com/s/d9y8Rchx7ZHqfIEIwfmy4A"
venue: "新智元"
sources: ["四足机器人首次同时「思考+走路」，北大提出链式推理mobilevla-r1.md"]
---

# 四足机器人首次同时「思考+走路」，北大提出链式推理MobileVLA-R1

## 摘要
北京大学团队提出 [[mobilevla-r1]]，这是首个将 [[链式推理]] 引入四足机器人的 [[vla-视觉-语言-动作]] 模型。该模型通过生成结构化的“内心独白”来弥合语义理解与底层控制之间的鸿沟，在 VLN 导航仿真和 [[unitree-go2]] 真机实验中，成功率和路径效率（SPL）全面超越 [[gpt-4o]] 和 [[navila]] 等强基线。

## 核心痛点
1.  **语义与控制断层**：现有模型在语言上“讲得通”，但在连续控制上表现为“晃、抖、走不直”。
2.  **决策黑盒**：直接输出动作，失败后难以定位是理解错误还是规划错误，缺乏可解释性。

## 解决方案：MobileVLA-R1
MobileVLA-R1 采用“先思考，后行动”的范式，不再直接从图像映射到动作，而是先生成可解释的链式推理（CoT），再输出控制指令。

### 架构设计
模型包含三个核心端：
1.  **Vision 端**：融合 RGB、深度图和 3D 点云/地图，通过 Projection Layer 生成时序场景表征。
2.  **Language/Reasoning 端**：读取指令并与场景特征对齐，利用 [[mobilevla-cot]] 数据集生成多粒度推理（高层目标、中层规划、低层意图）。
3.  **Action 端**：基于 CoT 输出连续的速度与转向指令。

### 训练范式：两阶段训练
1.  **监督微调 (SFT)**：利用 [[gemini-2.5]] 生成的 [[mobilevla-cot]] 数据集，教会模型拆解任务和分步思考。
2.  **强化学习 (GRPO)**：设计 Movement、Action、Format 三类奖励，直接优化轨迹与动作质量，将推理转化为物理行动。

## 实验结果
*   **仿真环境**：在 VLN-CE (R2R-CE, RxR-CE) 基准上，成功率和 SPL 显著高于现有模型。
*   **真机部署**：在搭载 [[jetson-orin]] 的 Unitree Go2 上，结合 LiDAR 和 RGB-D，成功执行“绕开障碍”、“上下台阶”等复杂长指令，表现优于 GPT-4o 和 NaVILA。

## 意义
*   **可解释性**：每个动作前都有清晰的 CoT，便于调试和安全审计。
*   **可优化性**：可在 CoT 和轨迹层面设计奖励与人类反馈。
*   **范式升级**：标志着具身智能从单纯拟合动作转向结合“慢思考”的推理型控制。