---
type: entity
title: Evo-Depth
created: 2026-05-26
updated: 2026-05-26
tags: [vla, 具身智能, 空间感知, 机器人操作, 开源模型]
related: [上海交通大学, 上海交大mint团队, vla-视觉-语言-动作, 隐式深度表征, 渐进式对齐训练, flow-matching动作头, lingbot-vla, gm-100]
sources: ["0.9b跑出90%真机成功率！上海交大为vla补上空间感.md"]
origin_date: 2026-05-26
---
# Evo-Depth

Evo-Depth 是 [[上海交大mint团队|上海交大MINT团队]] 提出的轻量隐式深度编码模块，旨在为 [[vla-视觉-语言-动作|VLA]] 模型补充空间感知能力。总参数约0.9B，不额外增加硬件负担，通过紧凑的 [[隐式深度表征]] 将空间信息融入VLA策略。

## 技术架构

Evo-Depth 由三个核心模块组成：

1. **IDEM（Implicit Depth Encoding Module）：** 从多视角RGB图像中提取隐式深度特征，强调空间布局与相对几何关系，而非显式生成高成本的3D中间表示。骨干约0.13B参数，结合多视角深度预训练初始化。
2. **SEM（Spatial Enhancement Module）：** 将隐式深度作为调制信号增强视觉-语言表征。原有VLM继续负责语义理解，深度特征负责空间增强，同时控制延迟与显存开销。
3. **[[渐进式对齐训练]]（Progressive Alignment Training）：** 分阶段训练策略，依次完成深度表征对齐 → 多模态融合 → 动作学习，解决多模块联合训练的优化不稳定问题。

动作输出采用 [[flow-matching动作头]] 路线。

## 性能数据

### 仿真端
| 评测基准 | 成功率 |
|----------|--------|
| Meta-World | 84.4% |
| LIBERO | 95.4% |
| LIBERO-Plus | 69.6% |
| VLA-Arena | 41.1% |

### 真机端
- 平均成功率约90%

### 部署指标
- GPU显存：约3.2 GB
- 推理频率：约12.3 Hz

## 技术定位

Evo-Depth 在纯2D VLA（缺空间感）和显式3D路线（高硬件成本）之间找到折中路径，体现了 [[性能-成本-实时性折中]] 的工程哲学。与 [[lingbot-vla]]（蚂蚁灵波，强调真机数据预训练）属于同一赛道不同技术路线的方案。

## 开源资源

- 官方仓库：https://github.com/MINT-SJTU/Evo-Depth
- 模型权重：https://huggingface.co/MINT-SJTU/EVO-Depth-LIBERO