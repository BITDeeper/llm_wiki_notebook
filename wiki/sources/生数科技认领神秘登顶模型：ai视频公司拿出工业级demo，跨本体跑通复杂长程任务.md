---
type: source
title: "生数科技认领神秘登顶模型：AI视频公司拿出工业级Demo，跨本体跑通复杂长程任务"
tags: [ai, embodied-intelligence, robotics, video-generation, shengshu-technology]
related: [生数科技, motubrain, vidu, world-action-model, u-vit-架构]
created: 2026-04-29
updated: 2026-04-29
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/F9mT5ENCeICWgHLasD7_Iw"
venue: "量子位"
sources: ["生数科技认领神秘登顶模型：ai视频公司拿出工业级demo，跨本体跑通复杂长程任务.md"]
---
# 生数科技认领神秘登顶模型：AI视频公司拿出工业级Demo，跨本体跑通复杂长程任务

## 摘要
本文报道了 AI 视频生成公司 [[生数科技]] 跨界发布通用机器人大脑 [[MotuBrain]] 的消息。该模型在 [[WorldArena]] 和 [[RoboTwin2.0]] 两个国际基准测试中同时登顶，展示了其作为 [[World Action Model]] 的强大能力。文章详细分析了 MotuBrain 的技术架构（基于 [[U-ViT 架构]]）、Demo 展示（跨本体长程任务）以及生数科技“数字世界（[[Vidu]]）+ 物理世界（[[MotuBrain]]）”的双轨战略。

## 核心要点

- **双榜第一**：[[MotuBrain]] 在 WorldArena（测世界模型理解）和 RoboTwin2.0（测动作执行）两个榜单上均获得第一，是唯一在 RoboTwin2.0 随机环境下平均分超过 95 的模型。
- **跨界逻辑**：[[生数科技]] 利用视频生成模型对物理规律的深刻理解（如重力、碰撞、流体），成功将其迁移至机器人控制领域，实现了“视频生成”与“动作驱动”的统一。
- **技术范式**：提出 [[World Action Model]]（世界动作模型），融合了 World Model 的预测能力和 Action Model 的执行能力，实现“边看边动”，避免了传统“先看后动”的延迟和误差累积。
- **工业级 Demo**：在没有上层 VLM 和预设脚本的情况下，在 3 台不同机器人上完成了 5 种复杂长程任务（插花、整理沙发、火锅服务、调酒、整理洗漱台），展示了双臂协作和错误自纠能力（如空勺重捞）。
- **Scaling Law 新发现**：随着任务数量增加，模型成功率上升（而非下降），证明增加任务多样性比单纯增加数据量更能提升性能。

## 关键实体
- [[生数科技]]：AI 初创公司，本文主角。
- [[MotuBrain]]：生数科技发布的通用机器人大脑模型。
- [[Vidu]]：生数科技的视频生成大模型。
- [[U-ViT 架构]]：生数科技的技术基座，统一处理多模态信息。
- [[Motus]]：MotuBrain 的开源前身。

## 关键概念
- [[World Action Model]]：统一预测与行动的技术范式。
- [[长程任务]]：包含 10 个以上原子动作级别的复杂连续任务。
- [[跨本体泛化]]：模型适配不同形态机器人的能力。
- [[统一建模]]：利用 UniDiffuser 打通视频和动作模态。

## 数据与证据
- **WorldArena**：在 Motion Quality、Flow Score、Motion Smoothness 三个维度均获第一。
- **RoboTwin2.0**：在 Clean 场景得分 95.8，Randomized 场景得分 96.1。50 个任务中九成超过 90 分，一半满分。
- **Scaling 曲线**：任务数量 Scaling 曲线比数据量 Scaling 曲线更陡峭。

## 商业与合作
- 生数科技于 2026 年 4 月完成近 20 亿元 B 轮融资（阿里领投）。
- 与 [[无界动力]]、[[深朴智能]]、[[星尘智能]] 等机器人本体或场景方达成战略合作。