---
type: entity
title: JiuwenSwarm
created: 2026-05-18
updated: 2026-05-18
tags: [agent, 多智能体, 蜂群, 开源框架, 华为]
related: [openjiuwen, coordination-engineering, swarm-skills, hots-hits, pinchbench, openclaw]
sources: ["「虾马」之后，openjiuwen社区发布jiuwenswarm，引领蜂群智能体新架构，开启「养蜂」时代.md"]
origin_date: 2026-05-18
---

# JiuwenSwarm

JiuwenSwarm 是 [[openjiuwen]] 社区发布并开源的蜂群智能体框架，是 [[coordination-engineering]]（协同工程）范式的首个完整开源工程交付。

## 核心架构

JiuwenSwarm 由四大环环相扣的组件构成：

### 🐝 Agent Swarm — 多智能体协同内核
- 提供多智能体团队的协同机制，支持自主分工、动态协商、高效协作
- 支持成员对不同模型的路由，针对不同角色提供合适能力的模型
- 实现从"单兵作战"到"精锐团队"的跨越

### 📦 Swarm Skills — 团队级技能封装
- 将团队协作中跑通的最佳实践、SOP、角色搭配、调度策略标准化封装
- 使"一支优秀的 Agent 团队"变成"一套即插即用的作战能力"
- 详见 [[swarm-skills]]

### 🌐 Swarm Skills Hub — 技能共享市场
- 开放的共享生态，让团队级协作经验在开发者社区中流通、复用、二次创作
- 地址：https://swarmskills.openjiuwen.com/

### ♻️ Swarm Skills 自演进 — 越用越强的飞轮
- 演进引擎持续观察任务轨迹，自动反推可复用的 Swarm Skill
- **团队层**：自动增减角色、补充约束规则、优化协作流程
- **成员层**：沉淀工具报错、接口超时、调用技巧等经验

## 人机协作模式

JiuwenSwarm 提供 [[hots-hits]] 双模式：
- **HOTS（Human on the Swarm）**：人作为指挥官，全局调度
- **HITS（Human in the Swarm）**：人作为团队成员，沉浸式参与

## 评测表现

| 评测基准 | 得分 | 对比 |
|---------|------|------|
| [[pinchbench]] | 94.2%（SOTA） | 超 [[openclaw]]（91.6%）近 3 个百分点 |
| Token 消耗 | 降低 34.8% | 相比 OpenClaw |
| LOCOMO 记忆 | 85% 准确率 | 使用 8B 模型判别 |

## 实战案例

- **多学科医疗会诊**：23 位 AI 医学专家联合会诊，动态创建不同专家成员
- **昇腾算子开发**：算法设计、Kernel 实现与性能优化多角色协同
- **短视频创作**：Swarm Skill 从首次执行到自动识别模式、审批入库、持续优化
- **狼人杀游戏**：多模型路由 + HOTS/HITS 模式切换

## 开源地址

- GitHub：https://github.com/openJiuwen-ai/jiuwenswarm
- AtomGit：https://atomgit.com/openJiuwen/jiuwenswarm
