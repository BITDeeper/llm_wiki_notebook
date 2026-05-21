---
type: entity
title: HyperAgents (DGM-H)
tags: [meta, agent, self-improvement, framework, dgm-h, ai-agents, meta-learning, self-modification, open-endedness]
related: [darwin-godel-machine, jenny-zhang, 元认知自我修改, 自进化架构, ai-takeoff, meta]
created: 2026-04-06
updated: 2026-05-08
sources: ["ai学会左脚踩右脚自进化？meta华人新研究改写agent法则.md", "meta华人实习生搞出超级智能体！自己写代码实现自我进化.md"]
---

# HyperAgents (DGM-H)

**HyperAgents** (简称 DGM-H) 是由 [[Meta]] AI、UBC 和纽约大学联合提出的一种新型 AI 智能体框架。它是 [[darwin-godel-machine]] (DGM) 的继任者，核心突破在于实现了 [[元认知自我修改]]，即 AI 能够修改自身的改进机制，而不仅仅是修改任务执行逻辑。

## 核心特性

### 元认知自我修改
与传统的自我进化系统不同，HyperAgents 将“执行任务的 agent”和“负责改进 agent 的 meta agent”合并进同一个可编辑程序中。这意味着：
- AI 不再受限于人类预设的固定“进化算法”。
- 系统可以自主优化“如何提出修改建议”这一元过程。
- 取消了“上层机制永远不变”的默认前提。

### 突破自指性限制与跨域迁移
传统的 DGM 依赖任务与自我修改之间的“自指性”（例如编程能力直接转化为修改代码的能力），因此在非编程领域效果有限。Hyperagents 通过将“任务智能体”与“元智能体”整合，使得改进方法本身可编辑，从而实现了跨领域的迁移能力。

DGM-H 不依赖任务能力与自修改能力的天然对齐（如编程任务），因此具有极强的通用性：
- **非 Coding 任务**：在 Paper Review 和 Robotics Reward Design 任务上均实现了显著的自我提升。
- **零样本迁移**：在 Paper Review 上训练的模型，能直接指导 Math Grading 任务的进化，将性能从 0 提升至 0.630。这证明它学到的是通用的“改进方法论”。
- **跨模型与跨语言**：其改进方案具有跨模型（如从 Claude 3.5 迁移至 o3-mini）和跨语言（如从 Python 迁移至 Rust/C++）的迁移性。

### 基础设施涌现
在迭代过程中，DGM-H 表现出自主构建系统基础设施的能力：
- **持久化记忆**：记录跨代策略的有效性，避免重复犯错。
- **性能追踪**：自动生成代码分析代际间的指标变化。
- **评估分析**：诊断过度修正，制定长期改进计划。

## 性能表现

在标准基准测试中，Hyperagents 展现了显著的性能提升：

| 任务/基准 | 初始性能 | 提升后性能 | 备注 |
| :--- | :--- | :--- | :--- |
| **SWE-bench** | 20.0% | 50.0% | 编程任务 |
| **Polyglot** | 14.2% | 30.7% | 编程任务 (另一来源数据: 0.140 -> 0.340) |
| **Paper Review** | 0.0 | 0.710 | 非编程任务 |
| **Robotics Reward Design** | 0.060 | 0.372 | 非编程任务 |

## 与 DGM 的对比
| 特性 | Darwin Gödel Machine (DGM) | HyperAgents (DGM-H) |
| :--- | :--- | :--- |
| **依赖条件** | 任务与自修改能力对齐 (如 Coding) | 无需对齐，通用性强 |
| **Meta 层** | 手工设计，不可修改 | 可编辑，可自我修改 |
| **适用领域** | 主要限于编程任务 | 编程、评审、奖励设计等多领域 |
| **迁移能力** | 弱 (需人工定制 DGM-custom) | 强 (跨域零样本迁移、跨模型/跨语言) |

## 意义与影响
HyperAgents 的出现标志着 AI 竞争逻辑的转变：从比拼单点能力（谁更会干活）转向比拼进化速率（谁更会变强）。它展示了 [[ai-takeoff]] 的一种具体技术路径：通过递归式自我改进，AI 系统可能迅速突破人类预设的初始算法边界。这也暗示了未来的 AI 系统可能具备自主维护和优化自身架构的能力，并引发了关于 AI 安全和控制权的重要讨论。

## 研发团队
- **第一作者**：[[Jenny Zhang]] (Meta / UBC)
- **合作机构**：Meta AI, UBC, 纽约大学