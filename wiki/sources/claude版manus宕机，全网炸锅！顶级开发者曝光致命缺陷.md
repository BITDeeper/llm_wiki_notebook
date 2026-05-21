---
type: source
title: "Claude版Manus宕机，全网炸锅！顶级开发者曝光致命缺陷"
tags: [ai-agent, claude, anthropic, security, sandbox, simon-willison]
related: [claude-code, claude-cowork, sandbox-mechanism, prompt-injection, anthropic]
created: 2026-01-16
updated: 2026-01-16
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/G1f4utrbmZ_ZEnh4iQYtJg"
venue: "新智元"
sources: ["claude版manus宕机，全网炸锅！顶级开发者曝光致命缺陷.md"]
---

# Claude版Manus宕机，全网炸锅！顶级开发者曝光致命缺陷

## 摘要
本文报道了 Anthropic 发布的通用智能体产品 [[Claude Cowork]] 引发的巨大市场反响及其技术细节。产品发布后因流量过大导致 [[Anthropic]] 服务宕机。Django 之父 [[Simon Willison]] 通过深度逆向工程，揭示了 Cowork 基于 [[VZVirtualMachine]] 的 [[沙箱机制]]，并指出了 [[提示词注入]] 带来的持续安全风险。

## 核心内容

### 产品发布与市场反响
- **病毒式传播**：Claude Cowork 在短短两天内获得 5000 万浏览量，点赞超 8.6 万。
- **服务宕机**：由于用户访问量激增，Claude 服务一度崩溃，导致依赖其工作的用户陷入停摆。
- **定位转变**：被视为从开发者工具（[[claude-code]]）向面向非技术用户的“通用智能体”转型的标志性产品。

### 技术机制揭秘
Simon Willison 的评测发现：
1.  **沙箱机制**：Cowork 并非简单的文件系统隔离，而是利用苹果的 `VZVirtualMachine` 框架，下载并启动了一个定制的 Linux 根文件系统。这确保了操作在虚拟机中进行，防止对宿主系统造成破坏。
2.  **多步自主执行**：支持约 20 个连续步骤的任务链，能够自主完成调试、优化目录结构等复杂操作。
3.  **工具生态整合**：支持 MCP（Model Context Protocol）、Skills 及 Claude in Chrome，增强了通用性。

### 安全隐患
尽管有沙箱保护，[[提示词注入]] 仍是主要威胁。攻击者可能通过诱导 AI 读取恶意网页内容来篡改其行为计划。虽然 [[Boris Cherny]]（Claude Code 之父）提到 WebFetch 摘要功能旨在防御此类攻击，但无法完全杜绝风险。

### 行业竞争
文章指出，[[OpenAI]] 在通用 Agent 领域目前处于落后状态，且对早期将“ChatGPT Agent”用于粗糙的浏览器自动化工具感到后悔。

## 关键观点
- Cowork 本质上是 [[claude-code]] 的“去技术化”包装，旨在将强大的代码级 Agent 能力带给普通用户。
- 沙箱机制（特别是 Linux 虚拟机）是理解其安全边界的关键。
- 安全与便利的博弈将持续存在，用户可能因便利性而忽视“黑盒”风险。