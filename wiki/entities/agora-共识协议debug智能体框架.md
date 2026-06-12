---
type: entity
title: Agora 共识协议Debug智能体框架
created: 2026-06-11
updated: 2026-06-11
tags: [共识协议, 零日漏洞, 多智能体, 系统安全, ICML-2026, 开源框架]
related: [0g-labs, 假说驱动测试, 智能体化质量控制, 多agent协作架构, glasswing]
sources: ["rss/斩获15个顶级零日漏洞：0g-lab联合新国立，北大和北邮团队构建的共识协议debug智能体框架.md"]
origin_date: 2026-05-01
---
# Agora 共识协议Debug智能体框架

## 概述

Agora是首个面向生产级共识协议的多Agent自动化Deep Bug检测框架，由[[0g-labs|0G Labs]]联合[[新加坡国立大学]]、[[北京大学]]、[[北京邮电大学]]等团队开发。论文中稿ICML 2026，已开源（github.com/0gfoundation/agora）。

## 核心架构

### 三Agent分工
- **Orchestrator Agent**（协调者）：负责全局状态维护与已知漏洞举一反三的"漏洞剥削"
- **Strategy Agent**（策略家）：注入分布式领域知识，针对CFT和BFT协议生成极具攻击性的异常场景
- **TestGen Agent**（代码官）：负责代码测试与动态评估

### 核心方法论
- 首次将学术界经典的[[假说驱动测试]]（Hypothesis-Driven Testing）范式引入LLM Agent系统
- 自动化测试Harness架构支持跨语言（Go/Rust）环境自适应
- 反射循环（Reflection-Loop）机制：测试报错后捕捉调用栈和执行日志，精简回传Agent进行定向自我修正
- 极简通信与内存机制：降低Agent间冗余上下文传输开销

## 核心成果

| 指标 | 数值 |
|------|------|
| 发现零日漏洞数 | 15个 |
| 真实逻辑漏洞率 | 73.9% |
| 误报率 | 26.1% |
| 平均每Bug Token消耗 | ~5.32M tokens（~40美元） |
| Baseline模型Deep Bug发现数 | 0/15（全线挂零） |

### 测试对象
Raft、EPaxos、HotStuff、BullShark等共识协议，以及生产级etcd和新兴公链Sui的底层组件。

### 漏洞类型
执行分歧、单调性违反、拓扑缺陷、签名漏洞等高危领域。

## 行业定位

与[[anthropic|Anthropic]]内部的[[glasswing|Glasswing]]项目形成路线对比：Agora强调"平权方案"，不依赖最顶级商业大模型，通过精妙的架构设计实现高性价比的深层漏洞检测。文章将Glasswing描述为"重资产、高Token吞噬、仅限巨头闭门合作"路线。

## 可推广领域
- 数据库并发控制（分布式数据库极端隔离级别下的复杂事务冲突缺陷）
- 操作系统内核/并发系统（多线程死锁与竞态条件）
- Web3智能合约审计（跨链协议和DeFi逻辑深度安全边界探查）

## 论文信息
- 论文标题：*Agora: Toward Autonomous Bug Detection in Production-Level Consensus Protocols with LLM Agents*
- arXiv：https://arxiv.org/abs/2605.29910v1
- 会议：ICML 2026