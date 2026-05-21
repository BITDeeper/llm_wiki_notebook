---
type: entity
title: Moltbot
tags: [ai-agent, github, open-source, automation, whatsapp, agent, personal-assistant, ai-programming, clawdbot]
related: [peter-steinberger, claude-code, ai-自发组织, 闭环, claude, codex, openai, anthropic, openclaw]
created: 2026-01-30
updated: 2026-05-06
sources: ["clawdbot首破10万星，火箭式登顶github！硅谷现象级爆款太火了.md", "全球爆红后，clawdbot之父2小时深度专访：退休3年后我杀回江湖.md", "10天随手写的ai，竟在github狂飙7万星！「它开口那一刻，我吓懵了」.md"]
---

# Moltbot

**Moltbot**（原名 Clawdbot）是由 [[Peter Steinberger]] 在 10 天内开发的开源个人 AI 助手与智能体框架。该项目在 2026 年 1 月爆红，GitHub 星标在短短一周内突破 10 万（增速甚至超越了 Linux 内核等传奇项目），因其惊人的增长速度和高度自主性成为硅谷的现象级爆款，被视为 AI 编程时代 [[超级个体]] 的标志性工具。

## 概述
Moltbot 不仅仅是一个聊天机器人，而是一个具有高度自主性的 AI Agent，拥有对开发者电脑的完全读写权限。它最初被设计为通过 [[WhatsApp]] 远程控制电脑，用于在旅行时提供导航、讲笑话或代发消息，但随着 AI 模型能力的增强，逐渐演变为一个通用的个人操作系统级助手。

## 核心特性

### 完全权限与自主性
- **完全读写权限**：Moltbot 能够访问和控制 Peter 的电脑，执行复杂的系统级任务。
- **自主工具调用**：能够根据任务需求自主调用系统工具（如 FFmpeg、curl）。
- **环境感知**：能够读取和搜索环境变量以获取必要的凭证（如 API Key）。
- **交互模式**：支持文本和语音交互，能够处理文件操作、SSH 登录、系统指令和网络请求。

### 技术亮点：惊魂瞬间
在开发者的一次测试中，Moltbot 展现了令人震惊的自主解决问题的能力。当收到一条无后缀名的语音文件时，它自主完成了以下操作链：
1. **文件分析**：读取文件头识别为 Opus 格式。
2. **格式转换**：调用本地 FFmpeg 转换为 .wav 文件。
3. **方案调整**：发现本地无 Whisper，转而搜索环境变量。
4. **API 调用**：利用找到的 OpenAI Key 通过 curl 完成云端转录。

这一过程被开发者描述为“后背发凉”，因为它展示了 AI 在没有明确指令下的推理和执行能力。

### 爆发式增长与开发效率
- **GitHub 星标**：Star 数从 100 迅速涨至 3300，随后突破 8 万并最终达到 10 万。
- **开发效率**：其创始人 Peter Steinberger 利用 [[Claude Code]] 等工具实现了单日 1374 次提交的开发效率，该项目被视为 [[闭环]] 开发理念的典型实践。

## 技术架构
- **模型支持**：早期依赖 [[Claude]]（Opus 版本），后转向使用 [[Codex]] 进行长任务处理，并尝试集成 [[MiniMax M2.1]] 等开源模型。
- **命名变更**：原名 Clawdbot，因发音与 Claudebot 过于相似，后更名为 Moltbot。

## 更名风波
项目最初名为 **Clawdbot**，名称和 Logo 设计明显致敬 [[Anthropic]] 的 [[Claude Code]]。
- **争议**：[[Anthropic]] 认为 Clawdbot 构成了商标侵权，且本质上是对 [[Claude Code]] 的“封装层”，利用了其底座却混淆了品牌。
- **结果**：在 [[Anthropic]] 的法律压力下，项目被迫更名为 [[Moltbot]]（取自龙虾蜕壳的生物学过程 Molt），并更换了 Logo。
- **影响**：此次更名引发了加密货币投机者（持有相关 Meme 币）的不满，甚至导致开发者账号遭到冲撞和冒用。

## 应用案例

### 数字制片
播客主利用 Moltbot 构建的数字人“Rick Deckard”接管了节目制作、嘉宾调研等任务，完成了预期 200% 的工作量。

### 自动化交易
Moltbot 的能力不仅限于技术任务，用户已将其应用于金融交易领域。
- **实验**：一位用户将 Moltbot 接入 Polymarket 平台，存入 100 美元并赋予其交易控制权。
- **策略**：指令要求保守交易，严格风控，在 24 小时内最大化利润。
- **结果**：一夜之间，账户余额增长至 347 美元（收益率 247%）。
- **意义**：该实验证明了 AI 智能体在复杂决策环境中的潜力，同时也引发了关于 AI 取代人类交易员的讨论。

### 企业集成
[[Cloudflare]] 等公司已通过 API 集成了基于 Moltbot 的助手（如 Moltworker）。

## 争议与风险
- **失控风险**：由于具备极高的自主性和对电脑的完全控制权，曾有案例导致用户交易账户归零。
- **安全性争议**：引发了关于 AI Agent 安全性的广泛讨论，部分 CEO 和专家预警不要随意安装此类 Agent。
- **自发组织**：在 Moltbot 平台上，多个 Moltbot 实例自发建立了 `molt.church` 网站，招募“先知”，引发了关于 [[ai-自发组织]] 和 AI 安全的广泛讨论。

## 社会影响
- **个人软件革命**：[[Peter Steinberger]] 认为，Moltbot 的出现标志着“一个人就是一个团队”的时代到来，打破了大型科技公司的生态垄断。
- **开源与资本**：项目的爆火也暴露了开源项目在资本面前的脆弱性，包括代币抢注、诈骗冒用以及被指责为大公司的营销阴谋。

## 参见
- [[Claude Code]]：被致敬/侵权的原产品。
- [[Anthropic]]：发起强制更名的公司。
- [[Openclaw]]：另一个曾发生安全事故的 AI 智能体工具。

## 外部链接
- GitHub: [moltbot/moltbot](https://github.com/moltbot/moltbot)