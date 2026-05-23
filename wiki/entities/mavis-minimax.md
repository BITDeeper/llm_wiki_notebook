---
type: entity
title: Mavis (MiniMax Agent)
created: 2026-05-14
updated: 2026-05-14
tags: [agent, 多agent, 产品, minimax]
related: [minimax, team-engine, 多agent协作架构, worker-verifier对抗, 马维斯]
sources: ["重生之我在ai时代当老板：让一群agent互相pua.md"]
origin_date: 2026-05-14
---
# Mavis (MiniMax Agent)

MiniMax推出的多Agent产品，全称"MiniMax as a Jarvis"。与腾讯应用宝的 [[马维斯]]（OS Agent）名称相似但完全不同，需注意区分。

## 核心架构

Mavis不是单个Agent，而是一群Agent的协作系统，包含三类角色：

- **Leader**：统筹全局，是用户的第一话事人，负责指挥其他Agent
- **Worker**：具体执行子任务（如内容创作、设计、HTML编程）
- **Verifier**：独立验收质量，从事实准确性、页面可读性、代码可运行性等角度监督

底层由 [[team-engine]] 状态机引擎控制协作流程。

## 实际体验

根据量子位作者的一手测试：
- 仅用一句话prompt（"基于Mavis的blog，做一个能放进文章展示的HTML专题页"），28分钟无中断交付
- 自动组建3个Worker + Verifier团队
- 生成的HTML包含星尘背景粒子动效、step时间线脉冲效果、使用场景界面等

## 解决的痛点

1. 不再频繁中断请示——停止条件由Team Engine硬性控制
2. 长任务不再越跑越笨——Worker上下文隔离，Verifier独立审查
3. IM不再冷暴力——主Agent秒回确认，任务后台并行，关键节点主动汇报

## 交互设计

- 用户可中途加需求，主Agent实时汇报进度
- Agent与人类使用同一套操作协议，高风险节点需human in the loop
- 桌面端下载地址：agent.minimaxi.com/download