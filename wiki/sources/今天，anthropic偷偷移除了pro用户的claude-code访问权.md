---
type: source
title: "今天，Anthropic偷偷移除了Pro用户的Claude Code访问权"
tags: [ai-industry, pricing, claude, business-model]
related: [claude-code, ai-subscription-crisis, openclaw, 任务执行范式]
created: 2026-04-22
updated: 2026-04-22
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/m1OnnpqLn9aeCXFRmT1KpA"
venue: "新智元"
sources: ["今天，anthropic偷偷移除了pro用户的claude-code访问权.md"]
---

# 今天，Anthropic偷偷移除了Pro用户的Claude Code访问权

## 摘要
Anthropic 曾短暂将 [[claude-code]] 从 Pro 套餐页面移除，引发开发者广泛不满。虽然随后回滚并解释为“小范围测试”，但这释放了明确信号：高消耗的 AI 编程代理正逼迫平台重写订阅规则，[[ai-subscription-crisis]] 正在成为行业拐点。

## 核心事件
- **页面变动**：Claude 官网定价页一度显示，原本包含在 Pro 套餐（约 $20/月）中的 Claude Code 被移除，仅保留在 Max 5x/20x（$100-$200/月）中。
- **官方回应**：Anthropic 增长负责人 Amol Avasare 解释称，这仅是一次覆盖约 2% 新注册 prosumer 用户的小范围测试，现有用户不受影响。
- **后续动作**：几小时后，Anthropic 将定价页改回原状。

## 深层逻辑分析

### 为什么是 Claude Code？
[[claude-code]] 是最容易触碰订阅边界的功能。与普通聊天不同，它面向开发者工作流，涉及长上下文、多轮迭代、文件读写及持续数小时的代理式任务。其推理成本远超普通聊天，使得 Pro 套餐的固定月费难以支撑。

### 连贯的商业调整
此次事件并非孤立，而是 Anthropic 一系列商业调整的一环：
1.  **推出 Extra Usage**：允许付费用户在达到套餐上限后，按标准 API 费率继续使用，将订阅与按量计费拼接。
2.  **企业侧按量计费**：Enterprise 版本明确采用席位费 + 实际 API 使用费的模式。
3.  **限制第三方工具**：4 月初限制 [[openclaw]] 等工具接入，防止订阅套利和成本失控。

### 行业拐点：包月神话的破灭
AI 工具正从“聊几轮”的助手演变为“持续跑几小时”的代理系统（参见 [[任务执行范式]]）。原有的统一低价订阅模型（Pro $20）无法承受 Agent 时代的高昂推理成本。行业正从“无限包月”转向“轻度包月 + 重度按量”的组合模式。

## 影响与启示
- **对开发者**：工作流连续性和成本可预测性至关重要。规则的不确定性（如先改页面后通知）比涨价更破坏信任。
- **对行业**：高质量 AI 编程能力可能长期无法由低价订阅支撑。开发者需评估替代方案，包括本地模型或路径更稳定的 API 方案。