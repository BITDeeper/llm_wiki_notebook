---
type: concept
title: Long-horizon Tasks
tags: [agent-challenge, planning, memory, agent, complexity, embodied-ai, robotics]
related: [avenir-web, experience-imitation-planning, chunked-recursive-summarization, llm-as-a-verifier, criteria-decomposition, sunday-robotics, memo-robot, act-1]
created: 2026-04-29
updated: 2026-05-08
sources: ["龙虾冲浪终于不迷路了！网页智能体新框架avenir-web开源即sota.md", "超越claude-mythos和gpt-5.5！斯坦福agent验证框架拿下sota，transformer作者转发.md", "龙虾冲浪终于不迷路了！网页智能体avenir-web开源即sota.md", "华人博士4个月干出具身独角兽！斯坦福家务机器人再融11亿，开建中国团队.md"]
---

# Long-horizon Tasks

**Long-horizon Tasks**（长程任务/长时序任务）是指那些需要跨越多个页面、经过多个交互步骤、涉及多步推理和长时间执行的复杂任务。这类任务常见于复杂的编程项目修复、自动化运维、Web Agent 的复杂操作流程中，也是具身智能领域衡量机器人智能水平的重要指标。

## 核心特征与能力要求

长程任务通常要求系统具备以下核心能力：

-   **任务分解**：将高层目标（如“收拾桌子”或“修复多文件 Bug”）拆解为一系列原子动作或可验证的里程碑。
-   **状态保持**：在执行过程中记住已完成和未完成的步骤，维持稳定的记忆状态。
-   **适应性**：应对环境变化（如网站结构改变或物体位置移动）。
-   **多步推理**：在长时间跨度内保持逻辑连贯性。

## 主要挑战

在执行长程任务时，Agent 或机器人通常面临以下核心难题：

-   **导航漂移**：Agent 在执行过程中容易迷失方向，忘记初始目标或当前所处的步骤。
-   **记忆不稳定**：随着上下文长度和交互轮次的增加，模型容易出现幻觉或遗忘关键信息。
-   **盲目探索**：缺乏对特定环境（如网站流程或物理空间）的了解，导致效率低下。
-   **验证困难**：由于执行轨迹很长且复杂，传统的 **[[LLM-as-a-Judge]]** 方法很难对整个长轨迹进行准确的总体评分，容易导致评分粗糙和平局。

## 解决方案与应对策略

针对上述挑战，不同的框架提出了相应的解决方案：

### 执行与规划优化
[[avenir-web]] 框架通过以下技术应对长程任务中的导航与记忆问题：
-   **[[experience-imitation-planning]]**：提供全局策略，减少无效探索。
-   **[[chunked-recursive-summarization]]**：通过滑动窗口和递归摘要维持稳定的记忆状态。
-   **任务跟踪清单**：将长任务分解为可验证的里程碑，防止执行偏差。

### 验证与评估优化
针对长轨迹难以验证的问题，**[[LLM-as-a-Verifier]]** 框架提供了新的思路：
-   **[[criteria-decomposition]]**：将长轨迹的验证拆解为具体的、可操作的检查点，从而实现更精细的评估。

### 具身智能应用
在机器人领域，长程任务是衡量智能水平的关键指标。例如，[[Sunday Robotics]] 的 [[Memo]] 机器人能够完成收拾餐桌、叠衣服等长程任务，展示了其 [[ACT-1]] 模型在处理复杂序列和精细操作方面的能力。