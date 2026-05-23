---
type: entity
title: OneModel 1.7 FrontoStria-RL
created: 2026-05-21
updated: 2026-05-21
tags: [具身智能, 世界模型, VLA, 强化学习, 机器人]
related: [卧安机器人, predictive-policy-latent, retrieve-then-steer, mcf-proto, 世界动作模型, vla-视觉-语言-动作, libero]
sources: ["libero-99%，实测第一：卧安-onemodel-1.7用一条隐式通路打通「看懂」到「做对」.md"]
origin_date: 2026-05-21
---
# OneModel 1.7 FrontoStria-RL

OneModel 1.7 FrontoStria-RL 是[[卧安机器人]]发布的具身智能世界动作模型，采用自研的RL-Latent World Action Model（RL-LWAM）架构。模型代号"FrontoStria"源自神经科学中的[[额纹状体通路]]。

## 核心架构

完整信息流：Instruction/Observation/Skill → World Model → [[predictive-policy-latent|Predictive Policy Latent]] → Understand Expert → Action Expert → Robot Execution → RL/Success Memory/HITL ↺

三大模块：
- **World Model**：负责跨场景泛化
- **Understand Expert**：负责任务理解与Skill调度，对任务进行结构化分解
- **Action Expert**：负责精准执行

## 四大核心技术

1. **[[predictive-policy-latent|Predictive Policy Latent]]**：隐式传导通路，将世界理解传导到动作执行
2. **Understand Expert + Skill**：长程任务的结构化规划
3. **[[mcf-proto|MCF-Proto]]**：运动中心坐标系原型，对几何扰动保持鲁棒
4. **RL闭环 + [[retrieve-then-steer|Retrieve-then-Steer]]**：部署后持续进化

## 性能数据

| 测试场景 | 成功率 |
|---------|--------|
| LIBERO 标准测试 | 99% |
| 真机日常操作 | 99% |
| 高精度操作 | 97% |
| 乒乓球接球 | 91.2% |

## 与竞品对比

在架构层面，OneModel 1.7 有两个独特之处：
1. **唯一的隐式传导通道**：不生成中间图像或视频，通过隐式表征实现低冗余连通
2. **唯一的强化学习闭环**：结合隐式WAM与RL，在不更新参数的情况下提升成功率

超越的竞品包括π0.5、GR00T-N1.5、OpenVLA-OFT、CogACT等。