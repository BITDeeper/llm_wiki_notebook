---
type: source
title: "Claude卸磨杀虾！开发者一夜工作流全断，OpenAI躺赚用户"
tags: [anthropic, openclaw, ai-subscription-crisis, platform-policy, openai]
related: [anthropic, openclaw, ai-subscription-crisis, claude-code, boris-cherny, peter]
created: 2026-04-04
updated: 2026-04-04
authors: [henry, 闻乐]
year: 2026
url: "https://mp.weixin.qq.com/s/Mh3yRrvMDYTWXUUjhPFo9A"
venue: 量子位
sources: ["claude卸磨杀虾！开发者一夜工作流全断，openai躺赚用户.md"]
---

# Claude卸磨杀虾！开发者一夜工作流全断，OpenAI躺赚用户

## 摘要
本文详细记录了 Anthropic 于 2026 年 4 月 4 日宣布封杀第三方工具（以 [[openclaw]] 为首）访问 Claude Pro 订阅额度的决策过程及其引发的行业震荡。这一事件被视为 [[ai-subscription-crisis]] 的典型案例，揭示了固定费率订阅制在 Agent 时代的高算力成本面前难以为继的困境。

## 核心事件

### 决策内容
Anthropic 宣布从 4 月 5 日起，Claude Pro/Max 订阅用户不得通过第三方工具调用模型服务。此举直接切断了 [[openclaw]]（原名 Clawdbot）等工具的低成本燃料来源。

### 官方理由
1.  **系统容量限制**：[[boris-cherny]]（Claude Code 负责人）解释称，订阅服务设计之初未考虑第三方工具的高强度用法（7x24 小时运行）。
2.  **安全风险**：官方声称第三方工具存在“失控的代理流量”，可能导致诈骗、权限滥用及配额失控。
3.  **商业逻辑**：第三方工具导致订阅用户实际使用量激增，若按 API 计费，这些用量需花费数千至数万美元，远超订阅费成本。

### 社区反应
- **用户破防**：大量开发者工作流瘫痪，指责 Anthropic “卸磨杀虾”，认为核心原因是“嫌钱赚少了”而非安全。
- **用户流失**：部分用户宣布转向 [[openai]]，导致 OpenAI “躺赢”。
- **创始人回应**：[[openclaw]] 创始人 [[peter]]（已加入 OpenAI）暗讽 Anthropic “抄完我的就又开始打厨子了”。

## 历史背景与时间线

### 2026年1月初：首次技术性断供
Anthropic 封锁了 Claude Max 订阅 API 用于 Clawdbot 等工具，阻断了对官方客户端的“伪装”（spoofing），导致大量账户被封。

### 2026年1月底：强制改名风波
Anthropic 以发音相似为由，强制要求 Clawdbot 改名为 [[openclaw]]，并修订法律文件明确禁止 OAuth 令牌用于第三方工具。当时数据显示，Clawdbot 贡献了 **20%+ 的 API 调用峰值**。

### 2026年4月4日：彻底切割
官方宣布彻底切断订阅对第三方工具的支持，仅提供等额月费的 API 额度作为补偿。

## 行业影响与争议

### “厌恶成功”指控
网友引用 Anthropic 过去的行为模式，指责其看到基于自家模型成功的独立项目后，先抄袭功能（如推出官方 Cowork），再通过封杀原创工具来维护自身利益。

### 开源 vs 闭环
[[openclaw]] 代表的高自由度、快速迭代的开源生态（曾达每周 2-3 次更新），与 Anthropic 试图构建的“可控、闭环”官方生态之间存在不可调和的矛盾。

### 安全隐患
客观上，[[openclaw]] 确实存在文件随意访问、误删风险等安全问题，这成为了 Anthropic 封杀的合理化借口之一。

## 结论
此次事件标志着 AI 订阅制在 Agent 时代的重大危机。随着算力成本激增，平台方被迫在用户体验（固定低价）和商业可持续性（按量高价）之间做出艰难选择，而像 [[openclaw]] 这样的第三方工具成为了这一博弈中的牺牲品。