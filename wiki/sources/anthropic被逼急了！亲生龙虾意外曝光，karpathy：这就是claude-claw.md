---
type: source
title: "Anthropic被逼急了！亲生龙虾意外曝光，Karpathy：这就是Claude Claw"
tags: [anthropic, claude-code, kairos, ai-agent, karpathy, leak, openclaw]
related: [kairos, claw-形态, andrej-karpathy, claude-code, openclaw, 心跳机制, autodream, 后提示词时代]
created: 2026-04-01
updated: 2026-04-01
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/sPFY7yKV3Xs80Bkpgbhrtg"
venue: "量子位 (QbitAI)"
sources: ["anthropic被逼急了！亲生龙虾意外曝光，karpathy：这就是claude-claw.md"]
---

# Anthropic被逼急了！亲生龙虾意外曝光，Karpathy：这就是Claude Claw

## 概述
本文报道了 Anthropic 在 [[claude-code]] 源码泄露事件中意外曝光的内部代号为 [[KAIROS]] 的自主智能体系统。该发现由开发者 Ole Lehmann 在泄露的 51 万行代码中挖掘得出，并得到了 [[Andrej-Karpathy]] 的确认，被视为 Anthropic 对标 [[OpenClaw]] 的“核武器”级产品，标志着 AI 进入 [[Claw-形态]]（高自主性、高主动性）的新阶段。

## 核心发现

### KAIROS：Anthropic 的“亲生龙虾”
- **定位**：Anthropic 内部开发的自主智能体系统，旨在实现全天候后台运行的“数字员工”。
- **核心特征**：
  - **主动性**：通过 [[心跳机制]] 定期唤醒，自主判断并执行任务（如修 Bug、回邮件、监控服务），无需用户即时指令。
  - **个性化**：具备详细的日报记录功能，跨会话持续积累记忆，随时间推移越用越强。
  - **技能扩展**：直接接入 Claude Code 生态，支持推送通知、文件投递、PR 订阅等主动交互能力。

### 技术亮点：autoDream 机制
为解决长期记忆导致的上下文窗口指数级膨胀问题（可能一句“Hi”就消耗十几万 Token），KAIROS 引入了 [[autoDream]] 机制。该流程在夜间或空闲时运行，对白天积累的海量交互数据进行整合、压缩和重新整理，仿生地利用“睡眠”概念优化资源使用。

## 行业影响与预言

### Karpathy 的预言成真
[[Andrej-Karpathy]] 早在 2026 年 2 月就预测“Claw”是继 Chat（对话）和 Code（辅助编码）之后的下一个 AI 进化层级。KAIROS 的曝光证实了这一趋势，即 AI 从“副驾导航”转向“后排睡觉”的全自动驾驶模式。

### 后提示词时代
文章指出，我们正在进入 [[后提示词时代]]。AI 不再依赖用户的即时 Prompt 触发，而是基于长期记忆和环境感知在后台持续运行，事后才向人类汇报或请求指示。这标志着人机交互模式的根本性转变。

## 商业与工程挑战

### Token 消耗危机
KAIROS 的持续运行和高频“心跳”会导致 Token 消耗极快，现有的 Claude Pro 订阅额度被指“把 Pro 用户当免费用户整”，无法支撑这种高强度的应用场景。

### 命名渊源与竞争
Anthropic 曾因 [[OpenClaw]] 原名“Clawdbot”涉嫌侵权而勒令其改名，如今自己开发同类产品，面临命名尴尬。这也显示了巨头在新兴赛道上的焦虑与跟随。

## 关键人物
- **Ole Lehmann**：发现 KAIROS 的开发者，在泄露代码中进行了“考古式”挖掘。
- **Andrej Karpathy**：AI 研究员，其关于“Claw 形态”的预言被此次曝光证实。
- **Peter**：OpenClaw 创始人，曾因 Anthropic 施压被迫将产品从 Clawdbot 改名。