---
type: source
title: "具身智能迈入下半场，RoboMemArena全面评测机器人记忆系统"
created: 2026-05-27
updated: 2026-05-27
tags: [具身智能, 机器人记忆, 评测基准, VLA, 机器之心]
related: [robomemarena, predimem, 机器人记忆能力, 双系统vla, vla-视觉-语言-动作]
sources: ["具身智能迈入下半场，robomemarena全面评测机器人记忆系统.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/MQVN3XtLHh7jQMrkki1POg"
venue: 机器之心
---
# 具身智能迈入下半场，RoboMemArena全面评测机器人记忆系统

## 摘要

本文报道了由[[香港科技大学广州]]联合[[清华大学]]、[[浙江大学]]、[[西湖大学]]、[[上海交通大学]]等多所高校共同打造的具身智能领域首个聚焦[[机器人记忆能力]]的系统性评测基准 [[robomemarena|RoboMemArena]]，以及配套的最强基线模型 [[predimem|PrediMem]]。

## 核心内容

文章指出，随着具身基座模型（VLA、世界模型）的快速进步，长时程任务中的记忆瓶颈日益凸显——机器人很多时候不是"不会做"而是"记不住"。RoboMemArena 填补了 memory-dependent long-horizon manipulation 评测的系统性空白。

### RoboMemArena 核心特征
- 26项长时程任务、151个子任务、2600条专家演示轨迹
- 68.9%子任务为记忆依赖型
- 提供子任务级标注与关键帧标注等多模态监督信号
- 配套5个真实机器人记忆任务，支持真机 leaderboard

### PrediMem 实验结果
- 仿真：38.5% TSR，显著优于 MemER（27.3%）和 π0.5（21.5%）
- 真机：52% 平均成功率，在 IHMB 任务上是唯一成功的模型
- 消融实验证实 predictive coding head 和 keyframe bank 缺一不可

## 关键论点
1. 记忆不是锦上添花的模块，而是长程机器人执行的基础能力
2. 现有 benchmark 对记忆依赖型长时程操作的刻画严重不足
3. [[双系统vla|双系统VLA]]架构通过显式记忆管理可显著提升长程任务表现