---
type: concept
title: Code as Agent Harness（代码作为智能体执行系统）
created: 2026-06-10
updated: 2026-06-10
tags: [agent-harness, 代码, 智能体架构, 理论框架]
related: [agent-harness, claude-code, codex, 任务执行范式, agent-harness-后训练, mango-多智能体流网络优化, 断点续跑, vlm质检闭环]
sources: ["rss/claude-code爆火背后的agent-harness底层逻辑，uiuc、meta、斯坦福深度解读.md"]
---
# Code as Agent Harness（代码作为智能体执行系统）

## 定义

将代码视为Agent系统中的**可执行、可检查、有状态媒介**，代码不仅是模型最终生成的程序，更是Agent在harness中不断生成、运行、修改、保存和共享的一系列代码化中间物——Plan.md、测试脚本、shell命令、patch、执行日志、workflow、技能库、仿真器、验证器，甚至共享仓库状态。

## 核心论点

传统代码生成中，代码是模型最后交付的产物；但在Agent Harness中，代码进入整个执行循环，承载计划、执行、反馈、验证和状态管理，正在成为harness组织长期执行过程的核心媒介。

## 代码三属性

代码之所以适合成为harness的核心载体，是因为它有自然语言不具备的三个属性：

1. **可执行**：模型的意图可以变成真实操作。一个计划不只是"我将修改文件"，而是可以落成shell command、patch或测试脚本
2. **可检查**：执行过程会产生客观反馈。编译错误、runtime error、测试结果、日志和trace，都能告诉系统当前发生了什么，而不是只依赖模型自我解释
3. **有状态**：任务进度可以被持久保存。仓库、文件系统、配置、测试、commit history、skill library都能记录Agent已经做了什么、失败在哪里、下一步应该接着哪里做

## Harness Interface（接口层）

代码作为模型与外部世界接口的三个维度：

- **推理可执行**：PoT、PAL等方法把中间推理转成程序；Lean/Coq把推理变成机器可检查的证明过程。推理本身被外部化成可执行对象
- **行动可落地**：对[[claude-code|Claude Code]]或[[codex|Codex]]，行动是实际修改文件、运行测试、查看报错、再生成patch；对机器人，语言目标被转成技能调用、控制脚本或可复用函数
- **环境可建模**：软件仓库、测试结果、执行日志、DOM tree、仿真器等成为Agent理解世界的结构化表示

## Plan-Execute-Verify循环

代码中心harness的核心执行机制：

- **Planning**：不再只是模型脑内计划，而变成Plan.md、workflow或可执行任务图
- **Execute**：在沙箱或受限环境中发生
- **Verify**：依赖测试、linter、静态分析和运行日志

关键洞察：**成熟Agent不应该害怕报错**。报错、测试失败和执行日志，正是代码harness控制Agent行为、让它逐步收敛的反馈传感器。这与[[vlm质检闭环]]和[[断点续跑]]的理念一致。

## 多Agent共享代码状态

多Agent协作时，仅靠聊天记录协作容易导致状态发散。仓库、测试、PR、issue、CI log、review comment、执行trace等可执行共享状态才是协作基底。真正的协作不是"互相说服"，而是围绕共享程序状态不断收敛。这与[[mango-多智能体流网络优化]]的协作优化视角互补。

## 扩展路径

Code as Agent Harness最先在coding agent中变得明显（软件世界天然可执行、可测试、可回滚），但趋势不止于写代码：

- **GUI/OS Agent**：DOM tree、accessibility tree、Playwright脚本让界面操作变成可执行状态转移
- **机器人**：语言意图变成技能库、控制脚本和仿真反馈
- **科学发现**：假设、实验、模拟、数据分析被组织成代码流水线

核心判断：**未来很多Agent不一定都叫coding agent，但它们很可能都会运行在某种code-centric harness之上。**

## 开放问题

- **Harness-Level Evaluation**：不仅评估最终输出，也评估计划、工具调用、状态转移和反馈使用
- **Incomplete Feedback**：测试通过不代表程序真正正确
- **Regression-Free Self-Evolution**：避免harness自我优化时引入新失败模式
- **多Agent共享状态的语义冲突**
- **Human-in-the-loop的系统化**：可记录、可追责、可验证

## 来源

- UIUC/Meta/Stanford 102页综述论文《Code as Agent Harness》（arXiv: 2605.18747，2026年5月）
- 一作：[[宁徐瑛]]（UIUC CS博士生）