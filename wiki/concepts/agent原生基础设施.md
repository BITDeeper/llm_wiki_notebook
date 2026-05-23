---
type: concept
title: Agent原生基础设施
created: 2026-05-14
updated: 2026-05-14
tags: [agent, infrastructure, architecture, runtime]
related: [每用户独立数据库, 计算单位演进, runtime-agent-os, tidb-cloud, mem9, drive9]
sources: ["人手一个数据库，kimi背后这套ai基建到底有多能扛？.md"]
---

# Agent原生基础设施

Agent原生基础设施是以AI Agent为基本计算单位的应用范式所需的一整套运行时基础设施。其核心假设是 **"One agent, one sandbox; one storage, one database"**——每个Agent需要独立的sandbox、storage和database。

## 核心架构理念

Agent作为新一代应用的核心计算单位，运行时需要的不仅是数据库，还包括：

- **Sandbox**：独立的代码执行环境，可随时创建和销毁
- **Storage**：持久化的工作产物存储，确保sandbox销毁后成果不丢失（如[[drive9]]）
- **Database**：独立的数据层，支撑Agent交付的应用的持久化读写（如[[tidb-cloud]]）
- **Memory**：跨session的持久化记忆层，使Agent不必每次从零开始（如[[mem9]]）

## 行业验证信号

- [[tidb-cloud]]上新建集群中**超过90%由AI Agent直接创建**（非人类工程师）
- [[kimi-k2-6]]、[[dify]]、Plaud等多个团队独立评估后不约而同选择同类架构
- Dify迁移至TiDB Cloud后基础设施成本降80%、运维负担降90%

## 与现有架构的关系

Agent原生基础设施与[[runtime-agent-os]]的三层架构（实体、交互、记忆）高度互补：

- **实体层**对应Sandbox和Database
- **交互层**对应Agent间的通信和协调机制
- **记忆层**对应mem9等持久化记忆组件

## 产业意义

当Agent进入"为终端用户交付应用"的阶段，模型能力本身已不是决定胜负的唯一变量。能否选对一套数据底座，让交付出去的东西在真实用户面前稳定运行，正在变成模型厂商的核心运营能力。AI应用的上半场比模型，下半场比**地基**。