---
type: entity
title: PilotDeck
created: 2026-05-28
updated: 2026-05-28
tags: [agent, 开源, 操作系统, 清华, 智能路由]
related: [openclaw, 清华大学thunlp实验室, 面壁智能, openbmb, 子agent级智能路由, 白盒化记忆, 独立工作舱, 场景白盒化推理, 1-n-agent调度, tokenmaxxing]
origin_date: 2026-05-28
sources: ["小龙虾彻底凉了？清华团队连夜开源agent神器，token成本狂降70%！.md"]
---
# PilotDeck

PilotDeck 是由 [[清华大学thunlp实验室]]、[[面壁智能]]、[[openbmb]] 与 AI9stars 联合研发并开源的智能体操作系统，定位为面向纯粹生产力的"智能体协作舱"。

## 核心架构

PilotDeck 围绕三大工程突破构建：

### 独立工作舱（WorkSpace）
每个项目拥有完整的隔离环境，包含三层：
- **专属文件系统**：项目文件边界清晰，AI生成内容归属明确
- **专属记忆**：Project Memory 记录项目定义和进度，Collaboration Feedback 记录用户偏好
- **专属技能**：Skill应用商店支持一键安装到对应WorkSpace（如game-asset-finder、minimax-pdf）

与 [[openclaw]]、Claude Cowork、Cursor 的"文件夹+规则"隔离模式形成代际差异。

### 白盒化记忆
AI记忆可见、可改、可追溯，每条记忆标注时间戳、来源路径和类型。支持逐条编辑和一键回滚。配合 **Dream机制**，AI在空闲时段自动回顾整理记忆（"白天干活、晚上消化"），整理出错可回滚。

### 子Agent级智能路由
在子Agent层面（而非request层面）做模型路由，保持 [[kv-cache连续性]]，避免频繁切换模型导致的性能损耗。支持规则和自然语言定义路由策略，Routing面板透明展示每个session的难度判定、实际花费和节省金额。

## 成本表现

| 场景 | 不开路由 | 开路由 | 节省 |
|------|---------|--------|------|
| 程序员人格测试 | $10.97 | $1.42 | 75% |
| 社交媒体内容 | $12.58 | $2.83 | ~70% |
| 复杂任务（Sonnet 4.6+MiniMax-M2.7 vs 单体Sonnet 4.6） | $18.36/69.1分 | $3.15/70.6分 | 83% |

## 其他特性
- 支持接入本地部署模型做子Agent，敏感数据不出本机
- 可自动判断并部署端侧模型（如播客多语言处理时自动安装VoxCPM生成语音）
- 云端模型负责思考、本地模型负责执行的混合模式

## 开源信息
- **GitHub**：https://github.com/OpenBMB/PilotDeck
- **官网**：https://pilotdeck.openbmb.cn/
- **许可证**：完全开源

## 行业定位
文章将 PilotDeck 定位为 [[openclaw]] 的工程化继任者。OpenClaw 是"极客浪漫主义的大玩具"，PilotDeck 则是面向纯粹生产力的"智能体协作舱"，标志着Agent工具从"极客玩具"到"生产力工具"的代际演进。