---
type: entity
title: RoboMemArena
created: 2026-05-27
updated: 2026-05-27
tags: [具身智能, 评测基准, 机器人记忆, 数据集, 开源]
related: [predimem, 机器人记忆能力, 具身智能数据困境, gm-100, vla-视觉-语言-动作, 香港科技大学广州]
sources: ["具身智能迈入下半场，robomemarena全面评测机器人记忆系统.md"]
origin_date: 2026-05-27
---
# RoboMemArena

RoboMemArena 是具身智能领域首个聚焦[[机器人记忆能力]]的系统性评测基准，由[[香港科技大学广州]]牵头，联合[[清华大学]]、[[浙江大学]]、[[西湖大学]]、[[上海交通大学]]等多所高校共同打造。

## 核心设计

RoboMemArena 突破传统机器人 benchmark 仅关注短期感知与即时控制的局限，围绕 reactive policy 的典型失败模式，系统化地组织"机器人到底什么时候必须依赖历史信息"这一问题。

### 三大核心特点

1. **多模态标注**：提供子任务级标注（subtask-level annotations）和原生关键帧标注（native keyframe annotations），不仅告诉模型"这个任务要完成"，还告诉它"历史里哪些瞬间值得记住"
2. **长程且多样化**：26个任务覆盖四类记忆场景——物体转移（Transferring）、目标遮挡（Occlusion）、动作计数（Counting）、顺序执行（Sequence）
3. **仿真+真机配套**：除仿真 benchmark 外，还配套5个真实机器人记忆任务，支持外部单位手动上传模型进行真机评测

## 规模与统计

| 指标 | 数值 |
|------|------|
| 任务数 | 26 |
| 子任务数 | 151 |
| 记忆依赖型子任务占比 | 68.9% |
| 专家演示轨迹 | 2600 条 |
| 关键帧对齐短段 | 15100 个 |
| 平均每任务步数 | 超过 1000 steps |

## 真机任务

5个真实机器人记忆任务：
- Pour Bottle ×2（动作计数任务）
- Brush Plates with Swap（状态不可见任务）
- Transfer Objects（顺序执行任务）
- Shell Game（隐藏状态追踪任务）
- IHMB — Imitate Human to Make Breakfast（长程模仿任务，最长超过3分钟）

## 开放资源

- 论文地址：https://arxiv.org/abs/2605.10921
- 项目地址：https://robomemarena.github.io/
- 代码地址：https://github.com/OpenHelix-Team/RoboMemArena
- Leaderboard：https://robomemarena.github.io/leaderboard.html
- 数据集：https://huggingface.co/datasets/RoboMemArenaBenchmark/RoboMemArena

## 与其他评测基准的关系

RoboMemArena 与[[gm-100]]同属具身操作评测基准，但聚焦维度不同：GM-100 关注操作能力的广度，RoboMemArena 则专注于记忆依赖型长时程操作的深度评测。两者共同推动具身智能评测体系的完善。

## 意义

RoboMemArena 的出现标志着具身智能评测从"操作能力"向"记忆与长时程规划能力"的焦点转移，为解决[[具身智能数据困境]]提供了重要的评测基础设施。