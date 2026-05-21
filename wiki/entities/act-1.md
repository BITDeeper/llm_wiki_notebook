---
type: entity
title: ACT-1
tags: [model, embodied-ai, policy]
related: [sunday-robotics, memo-robot, skill-capture-glove, vla-视觉-语言-动作]
created: 2026-03-13
updated: 2026-03-13
sources: ["华人博士4个月干出具身独角兽！斯坦福家务机器人再融11亿，开建中国团队.md"]
---

# ACT-1

ACT-1 是 [[Sunday Robotics]] 开发的端到端机器人基础模型，用于驱动其 [[Memo]] 家用机器人。

## 技术特点
- **端到端控制**：ACT-1 能够直接根据视觉或传感器输入输出全身动作控制，无需传统的中间模块。
- **数据驱动**：模型训练数据主要来源于两部分：
    1.  人类佩戴 [[技能捕捉手套]] 操作产生的示范数据。
    2.  [[Memo]] 机器人在真实家庭环境中运行产生的数据（通过 [[部署时训练]] 获取）。

## 关联技术
ACT-1 建立在创始人 [[赵子豪]] 此前在学术界提出的 **ACT (Action Chunking with Transformers)** 算法基础之上，是该技术在真实家用场景下的规模化应用版本。它与 [[vla-视觉-语言-动作]] 模型范式高度相关，强调从感知到动作的直接映射。