---
type: entity
title: Hermes Agent
created: 2026-04-15
updated: 2026-05-05
tags: [agent, llm, controversy, nous-research, open-source, agent-framework, self-evolution, ai-agent, self-hosting, automation]
related: [nous-research, evolver, ai-洗代码, 自进化架构, openclaw, managed-agents, agentskills-io, 记忆-技能-训练闭环]
sources: ["hermes-agent抄袭中国团队代码实锤！被锤后回应：你删号.md", "换掉小龙虾！hermes全网爆火狂揽四万星，anthropic重锤暴击openclaw.md", "hermes-agent抄袭中国团队实锤！被锤后回应：你删号.md", "狂揽4万星！换掉openclaw太爽了，5美元就能养个ai打工人.md"]
---

# Hermes Agent

**Hermes Agent** 是由硅谷 AI 实验室 [[nous-research]] 开发的开源自主 AI 智能体框架。该项目在 GitHub 上迅速走红，狂揽四万 Star（峰值曾达 8.5 万）。与传统的“一次性调用”智能体不同，Hermes 被设计为一个“会跟着你成长”的系统，强调私有化部署、常驻记忆和自我进化能力。

## 核心理念
Hermes 的 Slogan 是“一个会跟着你成长的 Agent”或“运行在你服务器上的自主 Agent”。它试图解决传统智能体“做完就忘”的问题，通过构建一个完整的学习闭环，让智能体在完成任务的同时，不断积累经验、沉淀技能并反哺模型训练。

## 核心特性
- **私有部署**：可运行在低至 5 美元/月的 VPS 或本地 GPU 集群上，数据完全由用户掌控。
- **多平台接入**：通过 Gateway 进程，同时接入 Telegram、Discord、Slack、飞书、企业微信等多个平台。
- **沙盒隔离**：提供安全的执行环境。
- **全网页与浏览器控制**：支持自动化网页操作。

## 技术架构

### 记忆-技能-训练闭环
Hermes Agent 的核心差异化优势在于其三层闭环架构（详见 [[记忆-技能-训练闭环]]），实现了从任务执行到自我进化的完整链路：

#### 1. 记忆
-   **机制**：使用 `MEMORY.md` 和 `USER.md` 作为长期记忆文件。
-   **技术**：支持基于 FTS5（全文搜索）的跨会话检索，并结合大模型进行摘要。
-   **效果**：即使开启新会话，Hermes 也能从旧信息中快速检索并压缩上下文，避免“失忆”。

#### 2. 技能
-   **机制**：当完成复杂任务（通常涉及 5 次以上工具调用）后，Hermes 会自动复盘，将关键步骤、坑点和验证方法整理成结构化的“技能文件”。
-   **动态性**：这些技能不是写死的，Hermes 会根据后续的使用情况不断修改和优化这些技能包。
-   **优势**：下次遇到类似任务时，直接调用技能包，无需从头推理，实现了“沉淀上下文”而非“消耗上下文”。

#### 3. 训练数据
-   **机制**：内置批量轨迹生成能力，并接入了 Atropos 强化学习环境。
-   **闭环**：将日常执行任务的轨迹回收，转化为下一代模型的训练数据。
-   **意义**：打通了“任务 -> 记忆 -> 技能 -> 轨迹 -> 训练”的完整链路，使智能体能力能够稳定积累。

### 版本演进
Nous Research 对 Hermes Agent 的迭代遵循“安全 → 稳定 → 智能”的路径：
- **v0.5.0 (Hardening)**：重点在于安全加固和供应链审计。
- **v0.7.0 (Resilience)**：重点在于解决长期运行中的稳定性问题（如凭证轮换、网关竞态）。
- **v0.8.0 (Intelligence)**：开始引入后台任务通知、模型实时切换等增强智能的功能。

## 生态与兼容性
- **AgentSkills 标准**：支持 [[agentskills-io]] 开放技能标准，允许技能跨项目共享。
- **联邦通信**：支持与 [[openclaw]] Agent 等其他框架的 Agent 进行跨平台消息传递和任务委派。
- **模型兼容性**：支持 Nous Portal、OpenRouter、OpenAI、Anthropic、Google Gemini、本地 Ollama 等多种模型来源，不锁定特定厂商。

## 应用场景
- **自动化情报监控**：定时扫描 GitHub、Reddit 等平台，生成摘要并推送到即时通讯软件。
- **带记忆的编程**：作为不会失忆的编程搭档，记忆代码库结构和部署流程。
- **长程任务自动化**：如联合创始人 Jeffrey Quesnelle 演示的，自主完成 7.9 万字小说的写作。

## 与 OpenClaw 的对比
- **部署方式**：Hermes 强调运行在用户自己的服务器上（私有化），而 OpenClaw 早期多依赖云端或复杂的本地配置。
- **状态管理**：Hermes 是有状态的（像老员工），而 Managed Agents 倾向于无状态（像牲畜）。
- **进化能力**：Hermes 内置了自我进化机制，而 OpenClaw 主要依赖插件和模型本身的更新。

## 安装与迁移
提供一键安装脚本：
```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```
对于从 [[openclaw]] 迁移的用户，提供了 `hermes claw migrate` 命令以简化流程。

## 争议事件
尽管技术路线受到好评，Hermes Agent 也卷入了严重的抄袭争议。

### 抄袭指控
2026年4月，该项目被指控架构级抄袭中国团队 [[evomap]] 的 [[evolver]] 引擎。尽管使用不同的编程语言（Node.js vs Python），其核心的 10 步自进化循环与 [[evolver]] 高度一致，且存在系统性术语替换行为（即 [[ai-洗代码]]）。

### 回应与证据
面对指控，[[nous-research]] 回应称其仓库创建于 2025 年 7 月，并指责原告“删号”。然而证据显示，其自进化模块实际上是在 [[evolver]] 公开 36 天后才创建的。

### 评价与界定
- **正面评价**：社区反馈其响应速度快于 [[openclaw]]，且“无缝切换平台”体验极佳。
- **“自进化”的界定**：虽然宣传为“自进化”，但目前其成长主要发生在技能和记忆层，模型权重本身并未在本地实时微调。

## 相关技术
- [[自进化架构]]: 被指控抄袭的核心功能。
- [[ai-洗代码]]: 指控中涉及的抄袭手段。