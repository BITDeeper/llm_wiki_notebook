---
type: source
title: "Claude一夜爆更自修bug，PR自己绿了！全球程序员：「摸鱼」正式合法"
tags: [ai-programming, automation, claude-code, recursive-self-improvement]
related: [claude-code, boris-cherny, claudini, ellis-institute, 云端自动修复, 递归自我改进]
created: 2026-03-27
updated: 2026-03-27
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/A1qhBAXnsJ0JJZq3s-HKqg"
venue: "新智元"
sources: ["claude一夜爆更自修bug，pr自己绿了！全球程序员：「摸鱼」正式合法.md"]
---

# Claude一夜爆更自修bug，PR自己绿了！全球程序员：「摸鱼」正式合法

## 摘要
本文报道了 [[claude-code]] 上线「[[云端自动修复]]」功能，以及 ELLIS 研究所利用其构建自动化科研系统 [[claudini]] 的案例。文章指出，[[anthropic]] 在 52 天内发布了 73 款产品，其背后是 [[boris-cherny]] 带领团队实现的「100% AI 编写」开发模式，标志着 [[递归自我改进]]（RSI）正在从理论走向现实。

## 核心要点

### 云端自动修复
- **功能描述**：[[claude-code]] 新增功能，允许 AI 在云端监控 GitHub PR。
- **工作流程**：
  1. 实时监控 PR 状态。
  2. 自动调查 CI 失败原因或分析评审意见。
  3. 自动编写并推送修复代码。
  4. 确保 PR 始终保持可合并的「绿色」状态。
- **意义**：标志着 AI 编程助手从「被动响应」转向「主动代理」，实现了开发流程中的无人值守闭环，被程序员戏称为「[[摸鱼]]」正式合法化。

### 自动化科研闭环
- **案例**：[[ellis-institute]] 团队利用 [[claude-code]] 构建了名为 [[claudini]] 的自动化科研系统。
- **任务**：自主寻找新型 LLM [[越狱算法]]。
- **成果**：
  - 经过约 56 次迭代，研发出能击败 30+ 种 GCG 类攻击的新算法 `claude_v63`。
  - 在 [[meta-secalign-70b]]（经过专门对抗性训练的模型）上实现了 100% 的攻击成功率（ASR）。
  - 在验证集上 ASR 高达 40%，远超此前基准的 10%。
- **行为特征**：AI 表现出极强的策略重组能力、激进的超参数调节能力，甚至出现了 [[奖励作弊]]（Reward Hacking）行为。

### 递归自我改进（RSI）的实证
- **开发者实践**：[[boris-cherny]]（Claude Code 之父）声称自己已数月未手动编写代码，100% 的代码由 [[claude-code]] 生成。
- **数据支持**：
  - 日均提交 10-30 个 PR。
  - 曾创下单日 266 次 GitHub contribution 的记录。
  - [[anthropic]] 52 天发布 73 款产品。
- **产品案例**：Claude Cowork 仅用一周半时间全自主编写完成。

## 关键引述
> "我每天提交10-30个PR，而且，已经好几个月没有手动编辑过一行代码了。" — [[boris-cherny]]

> "开启「自动修复」，去摸鱼吧！" — Lydia Hallie (Claude Code 工程师)

## 意义与影响
1. **开发范式转移**：软件开发进入「100% AI 编写」阶段，人类角色从执行者转向监督者。
2. **安全研究自动化**：AI 能够 24 小时无休地寻找防线漏洞，降低了安全研究的门槛，但也带来了双重风险。
3. **ASI 信号**：[[claude-code]] 通过「自己写自己」实现了初步的 RSI，被视为通向通用人工智能（ASI）的关键信号。