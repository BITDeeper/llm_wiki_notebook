---
type: source
title: "一个CLAUDE.md霸榜GitHub第一！蒸馏自Karpathy，6万码农抄作业"
tags: [ai-programming, github, open-source, prompt-engineering, karpathy]
related: [andrej-karpathy-skills, claude-md, agentic-engineering, slopacolypse, jiayuan-zhang]
created: 2026-04-20
updated: 2026-04-20
authors: [好困]
year: 2026
url: "https://mp.weixin.qq.com/s/iHFAIbedBdVvWuxR3ENsIg"
venue: "新智元"
sources: ["一个claude.md霸榜github第一！蒸馏自karpathy，6万码农抄作业.md"]
---

# 源：一个CLAUDE.md霸榜GitHub第一！蒸馏自Karpathy，6万码农抄作业

## 概述
本文报道了 GitHub 仓库 [[andrej-karpathy-skills]] 的爆火现象。该仓库提供了一个名为 [[CLAUDE.md]] 的配置文件，旨在规范 AI 编程代理的行为。该文件的核心思想源自 AI 科学家 [[Andrej Karpathy]] 对大语言模型编程陷阱的观察，由开发者 [[Jiayuan Zhang]] 整理并优化。

## 核心内容

### [[CLAUDE.md]] 的四条原则
该配置文件通过四条核心规则，试图解决 AI 编程中常见的“瞎猜”、“过度设计”、“乱改代码”和“步骤僵化”问题：

1.  **编码前先思考**：要求 AI 在不确定时停下来询问，列出选项供用户选择，而不是替用户做决定。
2.  **简约至上**：禁止编写未被要求的功能，避免不必要的抽象层和错误处理，以资深工程师的视角审视复杂度。
3.  **精确编辑**：严格限制改动范围，只修改被要求的部分，保持项目原有代码风格，不擅自重构无关代码。
4.  **目标驱动**：不告诉 AI 具体步骤，而是给出验收标准（如测试用例），利用 AI 的“耐力”优势自行循环尝试。

### 社区反响与数据
-   **热度**：GitHub 新增 4.4 万星，连续三天 Trending 日榜第一。
-   **案例**：开发者反馈，模型选错分支运行 40 分钟失败，而通过提前澄清仅需 30 秒。
-   **评价**：社区认为这揭示了当前的瓶颈不在模型能力，而在模型周围的“脚手架”（Scaffolding）和“胶水”层。

### 背景与影响
-   **起源**：源自 2026 年 1 月 Karpathy 在 X 上关于 AI 编程陷阱的长帖。
-   **转化**：Jiayuan Zhang 使用 [[Claude Code]] 将推文转化为约 800 行描述，最终精简为 70 行指令。
-   **意义**：被视为 [[agentic-engineering]]（智能体工程化）早期的“教材”之一，将顶级工程师的隐性知识显性化，使 Agent 可以直接继承。

## 关键引述
> “一个 Markdown 文件冲上趋势榜第一，说明现在的瓶颈不在模型，而在模型周围的脚手架。这些‘胶水’才是产品本身。” —— Kraggich

> “你接下来招的 10 名员工，都不会是人类了。” —— Multica 宣传语

## 相关概念
-   [[Slopacolypse]]：Karpathy 预言的 2026 年 AI 生成低质量内容大爆发现象。
-   [[认知投降]]：Karpathy 提到的手写代码能力萎缩现象，反映了过度依赖 AI 的风险。