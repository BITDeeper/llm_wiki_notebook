---
type: event
title: OneModel 1.7 FrontoStria-RL 发布
created: 2026-05-21
updated: 2026-05-21
tags: [具身智能, 世界模型, 产品发布]
related: [卧安机器人, onemodel-1.7, 世界动作模型, predictive-policy-latent, retrieve-then-steer, mcf-proto]
sources: ["libero-99%，实测第一：卧安-onemodel-1.7用一条隐式通路打通「看懂」到「做对」.md"]
origin_date: 2026-05-21
participants: [卧安机器人]
causes: []
effects: []
significance: high
---
# OneModel 1.7 FrontoStria-RL 发布

2026年5月21日，[[卧安机器人]]（OneRobotics，6600.HK）发布OneModel 1.7 FrontoStria-RL具身智能世界动作模型。

## 事件背景

2026年，[[世界动作模型|WAM]]在具身智能领域成为集中讨论方向。VLA路线和传统世界模型路线在家庭场景中均面临泛化瓶颈：VLA端到端映射在环境变化下容易出错，世界模型则存在"看懂了却做不对"的传导断层。

## 核心发布内容

OneModel 1.7提出用[[predictive-policy-latent|Predictive Policy Latent]]建立隐式传导通路，结合RL闭环和[[retrieve-then-steer|Retrieve-then-Steer]]实现部署后持续进化，以及[[mcf-proto|MCF-Proto]]动作空间设计应对几何扰动。

## 关键成绩

- [[libero|LIBERO]]标准测试99%成功率，超越π0.5、GR00T-N1.5、OpenVLA-OFT
- 真机日常操作99%，高精度97%，乒乓球接球91.2%
- LIBERO-plus几何扰动项大幅领先

## 行业意义

此次发布标志着具身智能技术从"实验室演示"走向"家庭真实部署"的一个重要节点。卧安的方案不依赖更大参数规模，而是通过架构创新（隐式传导）和工程创新（非参数持续进化）同时解决泛化、执行和持续更新三个核心问题。