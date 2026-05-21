---
type: source
title: "OpenClaw 3.28上线！4天爆更上百项重要更新"
tags: [openclaw, agent, security, release-notes]
related: [openclaw, skill-vetter, requireapproval, grok, minimax]
created: 2026-03-29
updated: 2026-03-29
authors: ["新智元", "艾伦"]
year: 2026
url: "https://mp.weixin.qq.com/s/AgUMaDXJeP3qc9MeSQgb9w"
venue: "新智元"
sources: ["openclaw-3.28上线！4天爆更上百项重要更新.md"]
---

# OpenClaw 3.28上线！4天爆更上百项重要更新

## 摘要
OpenClaw 3.28 版本发布，此次更新在短短 4 天内进行了上百项重要修复与功能迭代。核心亮点包括引入高危操作弹窗拦截机制（`requireApproval`）、官方安全审计工具 Skill Vetter 的推广、以及对 xAI Grok 和 MiniMax 图像生成模型的原生支持。此次更新标志着 OpenClaw 从追求功能自动化转向强调安全可控性。

## 核心更新内容

### 安全机制强化
针对此前因代码疏漏导致用户数据丢失（如删除收件箱）及 ClawHub 生态中出现大量恶意插件的问题，3.28 版本重点加强了安全防护：
*   **高危操作拦截 (`requireApproval`)**：新增异步拦截钩子，允许 Agent 在执行删除、修改等高危操作前暂停，并通过 Telegram、Discord 或 CLI 弹窗请求用户确认（“老板，这活儿能干吗？”）。
*   **Skill Vetter 审计**：官方强烈推荐使用 Skill Vetter 工具。该工具如同“严苛的 HR”，在安装插件前进行静态代码分析，检查数据流向、权限请求及潜在恶意行为（如窃取私钥、上传数据），防止供应链攻击。

### 模型与生态集成
*   **xAI Grok**：提升至第一梯队支持，内置原生网页搜索和工具配置，无需手动切换插件。
*   **MiniMax**：新增 `image-01` 模型支持，用于图像生成及长宽比编辑。
*   **Qwen (通义千问)**：认证方式正式迁移至 Model Studio，废弃旧的 OAuth 集成。

### 体验优化与修复
*   **多平台适配**：针对 Discord、Telegram、Matrix、Slack 等平台进行了大量修复，包括消息分割、防抖、重连逻辑优化等。
*   **配置管理**：简化了 Podman 容器配置，改进了 CLI 的配置迁移与诊断体验。
*   **Agent 行为**：优化了模型故障转移、冷却策略及沙箱权限管理。

## 背景与影响
此次更新是对此前“草台”操作（如 3.22 版本白屏事故）的回应，也是对国家互联网应急中心关于 Agent 安全风险提示的积极响应。随着 Agent 权限的扩大，单纯的沙箱隔离已不足够，必须引入运行时拦截和安装前审计。OpenClaw 正在从单一的自动化工具演变为一个强调“人机回环”和可控性的 Agent OS。