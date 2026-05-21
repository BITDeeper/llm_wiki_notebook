---
type: source
title: "全球爆红后，Clawdbot之父2小时深度专访：退休3年后我杀回江湖"
tags: [ai-programming, agent, interview, moltbot, peter-steinberger]
related: [peter-steinberger, moltbot, prompt-request, closed-loop, claude-code]
created: 2026-01-29
updated: 2026-01-29
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.qq.com/s/de8v5D4wI1v-vAY9_6iAkw"
venue: "新智元"
sources: ["全球爆红后，clawdbot之父2小时深度专访：退休3年后我杀回江湖.md"]
---

# 全球爆红后，Clawdbot之父2小时深度专访：退休3年后我杀回江湖

## 概述
本文是对 [[PSPDFKit]] 创始人 [[Peter Steinberger]] 的深度专访，详细记录了他如何利用 [[Claude]] 和 [[Codex]] 等 AI 工具，在退休三年后重返开发一线，并创造出 [[Moltbot]]（原 Clawdbot）的过程。文章展示了 [[超级个体]] 在 AI 编程时代的极限工作流，包括一天 600 个 Commit、并行操控 10 个 Agent 以及从 Pull Request 向 [[Prompt Request]] 的范式转移。

## 核心观点

### 1. AI 编程的核心秘诀：闭环
Peter 强调，AI 编程成功的关键在于建立**闭环**。AI 必须能够自动验证自己的工作，包括编译、Lint、执行和验证输出。只有当测试通过时，他才信任生成的代码。这使得他敢于发布自己未曾阅读的代码，前提是系统验证已通过。

### 2. 工作流变革：Prompt Request
传统的代码审查流程正在失效。Peter 提出了 **[[Prompt Request]]** 的概念，即不再审查 Pull Request 中的代码本身，而是审查生成该代码的 Prompt。他认为，对于修复小 bug 的 PR，人工审查的时间成本是直接让 AI 修复的 10 倍。

### 3. 多面棋式开发
Peter 的工作方式类似于下多面棋，同时操控 5-10 个 AI Agent。他利用 Codex 处理长任务（如 40 分钟的子系统构建）的间隙，切换到其他 Agent 处理不同任务。他偏好 Codex 而非 [[Claude Code]] 的原因是：Codex 更“安静”，适合长时间阅读代码和执行任务，而 Claude Code 频繁的交互会打断思路。

### 4. 思维模式的转变
文章指出，**[[算法狂魔困境]]**：痴迷于解决算法难题（如 LeetCode）的工程师反而难以适应 AI 驱动的开发。相反，那些学会放下完美主义、关注交付结果的管理型思维者如鱼得水。

### 5. 软件工程并未消亡
Peter 反驳了“软件工程已死”的论调。虽然代码细节不再重要，但系统架构、技术债、可扩展性和模块化等**系统思维**变得比以往任何时候都重要。

## 关键实体与工具
- **[[Moltbot]]**：拥有对 Peter 电脑完全读写权限的个人 AI 助手，最初是 WhatsApp 中继，后因语音处理能力（自动识别 OGG 格式并调用 FFmpeg 和 OpenAI API）而进化。
- **[[Codex]]**：Peter 目前偏好的代码生成模型，适合长任务静默处理。
- **[[MiniMax M2.1]]**：Peter 在采访彩蛋中提到的目前认为最优秀的开源模型。

## 背景故事
- **PSPDFKit 传奇**：Peter 曾花费 13 年打造 PSPDFKit，最终运行于超过 10 亿台设备上。
- **燃尽与回归**：因 CEO 压力过大而彻底燃尽，卖掉股份后消失三年。2025 年 4 月因想开发 Twitter 分析工具而重新接触 AI，从此失眠并沉迷于 AI 编程。

## 相关概念
- [[超级个体]]
- [[任务执行范式]]
- [[ai-subscription-crisis]]（侧面印证：高频使用带来的算力消耗）