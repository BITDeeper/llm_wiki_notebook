---
type: source
title: "AI能改10万行代码，却让你走路去洗车！Karpathy戳破「锯齿状智能」"
tags: [ai, karpathy, vibe-coding, agent-engineering, jagged-intelligence]
related: [andrej-karpathy, vibe-coding, 智能体工程, 锯齿状智能, llm-wiki]
created: 2026-05-01
updated: 2026-05-01
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/0Uk4pkNY9_ZL83VXalDuvg"
venue: "新智元"
sources: ["ai能改10万行代码，却让你走路去洗车！karpathy戳破「锯齿状智能」.md"]
---

# 源：AI能改10万行代码，却让你走路去洗车！Karpathy戳破「锯齿状智能」

本文详细记录了 [[Andrej Karpathy]] 在 Sequoia AI Ascent 2026 炉边谈话中的核心观点。他提出了 [[锯齿状智能]] 的概念，解释了为何 AI 在处理复杂代码（如重构 10 万行代码）时表现出色，却在简单常识（如建议走路去洗车）上失败。Karpathy 将此归因于可验证性和经济激励，指出只有具备可验证奖励信号的领域（如代码、数学）才能通过强化学习快速进化。

文章还探讨了软件开发范式的转移，从 [[Vibe Coding]]（氛围编程）进化到 [[智能体工程]]。Karpathy 认为，Vibe Coding 虽然降低了编程门槛（抬高地板），但生成的代码往往臃肿且脆弱；而智能体工程要求人类扮演「导演」角色，负责需求定义、架构设计和结果验证，以确保专业水准（保住天花板）。

此外，Karpathy 介绍了 [[LLM Wiki]] 的新理念，即利用 LLM 维护 Markdown 知识库，将 Obsidian 视为 IDE，Wiki 视为代码库，实现知识的可积累和可维护。他还强调了 [[Agent-Native]] 软件的兴起，例如 [[OpenClaw]] 使用 Markdown 文件而非 Bash 脚本进行安装，标志着软件正从「给人用」转向「给 Agent 用」。

## 核心观点
- **锯齿状智能**：AI 能力分布不均，由「可验证性 + 市场规模」决定。
- **人类角色**：从代码编写者转变为智能体的「导演」，负责 Spec, Plan, Architecture, Taste, Oversight, Verification。
- **创业机会**：构建可验证的 RL 环境和奖励循环，比单纯做应用更具护城河。