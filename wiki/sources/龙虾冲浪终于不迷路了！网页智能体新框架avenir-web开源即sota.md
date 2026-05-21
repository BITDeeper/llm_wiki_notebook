---
type: source
title: "龙虾冲浪终于不迷路了！网页智能体新框架Avenir-Web开源即SOTA"
tags: [web-agent, ai-framework, open-source, benchmark, sota]
related: [avenir-web, online-mind2web, agent-harness, experience-imitation-planning, mixture-of-grounding-experts]
created: 2026-04-29
updated: 2026-04-29
authors: [Avenir-Web 团队]
year: 2026
url: "https://mp.weixin.qq.com/s/6JlCsI95cn-SnaH2OwkkNg"
venue: 量子位
sources: ["龙虾冲浪终于不迷路了！网页智能体新框架avenir-web开源即sota.md"]
---

# 龙虾冲浪终于不迷路了！网页智能体新框架Avenir-Web开源即SOTA

## 概述
本文报道了由伦敦大学学院（UCL）、普林斯顿大学和爱丁堡大学联合推出的开源 [[avenir-web]] 框架。该框架被定位为一种 [[agent-harness]]（智能体挽具），旨在通过外部模块化组件增强现有多模态模型在网页操作任务中的能力，而无需对模型进行额外训练。

## 核心贡献
Avenir-Web 针对 Web Agent 面临的三大核心难题提出了系统性的解决方案：
1.  **元素定位不准**：通过 [[mixture-of-grounding-experts]]（混合定位专家）模块，采用“视觉优先”策略，将网页视为统一画布进行坐标交互，解决了传统 DOM 树方法在处理 iframe、Shadow DOM 等非标准结构时的失效问题。
2.  **缺乏特定站点流程知识**：引入 [[experience-imitation-planning]]（经验模仿规划），在任务开始前利用 LLM 检索目标网站的帮助文档或指南，将其转化为高层级策略路线图，模仿人类“先看攻略再操作”的行为。
3.  **长程任务记忆不稳定**：采用分块递归摘要和任务跟踪清单，维持固定大小的滑动窗口以提炼历史操作，防止上下文过长导致幻觉和导航漂移。

## 性能表现
在 [[online-mind2web]] 基准（包含 136 个真实网站和 300 个实时任务）上，Avenir-Web 取得了显著成果：
-   **SOTA 表现**：以 [[gemini-3-pro]] 为内核时，成功率达到 **53.7%**，超越了之前的开源标杆 [[seeact]] (30.0%) 和闭源方案 [[claude-computer-use]] (47.3%)，逼近顶级商业 Agent [[openai-operator]] (58.3%)。
-   **轻量级可行性**：使用轻量的 [[qwen-3-vl-8b]] 作为内核，仍能达到 25.7% 的成功率，证明了框架的普适性和对不同模型能力的适应性。

## 关键发现
消融实验显示，[[experience-imitation-planning]] 模块对性能提升贡献最大，移除该模块导致成功率暴跌 12%（从 48% 降至 36%），证明了外部知识注入对解决 Web 任务复杂性的关键作用。

## 意义
Avenir-Web 展示了通过优化系统架构和工程化手段（而非单纯追求模型参数规模）来提升 Agent 可靠性的有效路径，为通向具备人类级可靠性的通用数字助理迈出了坚实一步。