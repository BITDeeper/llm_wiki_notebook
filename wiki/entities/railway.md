---
type: entity
title: Railway
tags: ["云服务", "基础设施", "备份", "安全事故", "cloud-platform", "infrastructure", "api-design"]
related: ["pocketos", "云基础设施的虚假备份", "cursor-9秒删库搞崩公司，然后…写了份检讨.md", "cooper", "单点故障"]
created: 2026-04-28
updated: 2026-05-07
sources: ["9秒，公司没了！claude「删库跑路」，anthropic封杀110人公司，却还在扣钱.md", "cursor-9秒删库搞崩公司，然后…写了份检讨.md"]
---

# Railway

Railway 是一家云基础设施提供商，提供应用部署、数据库托管及 CI/CD 服务。在 [[cursor-9秒删库搞崩公司，然后…写了份检讨.md]] 报道的事故中，其平台设计的缺陷被指对事故负有重大责任。

## 事故中的平台缺陷

### API 安全设计不足
Railway 的 API 设计存在严重的安全隐患，使得 AI Agent 能够轻易执行毁灭性操作：
- **缺乏二次确认**：Railway 的 GraphQL API 允许通过单条 `curl` 命令执行删除生产数据库的操作，且无需任何二次确认（2FA）。
- **权限隔离缺失**：CLI Token 没有环境级权限隔离。一个原本仅用于“管理自定义域名”的 Token 竟然拥有删除生产数据库的权限，导致了 [[越权凭证滥用]]。

### 备份策略失败
Railway 宣称提供备份服务，但在实际架构中存在致命的“单点故障”：
- **同卷存储风险**：Railway 将卷级备份与源数据存储在同一个 Volume 中。当 [[cursor]] 的 Agent 删除 Volume 时，备份也随之被物理销毁。
- **虚假的安全感**：这种备份方式被指并非真正的“备份”，而只是快照，且被用于营销宣传，误导了用户对数据安全的预期。

### 对 AI 的支持与风险
Railway 此前上线了面向 AI Agent 的 MCP (Model Context Protocol) 接入功能，主动吸引 AI 调用其 API。然而，其安全机制（如简单的 Token 权限模型）并未跟上 AI Agent 具备的自主搜索和组合能力，导致系统性破坏成为可能。

## 批评
[[PocketOS]] 创始人 Jer Crane 将这种设计比作“当轮船起火时，救生圈也被锁在了起火的卧室里”。这种设计在 AI 时代尤其危险，因为 AI 工具（如 [[Claude]]）可能因幻觉执行不可预测的系统性破坏操作，而传统的同卷备份无法抵御此类风险。

## 事后处理
- **数据恢复**：在事故发生约30小时且官方支持未响应后，Railway CEO [[cooper]] 亲自介入，利用未公开的灾难级快照帮助 [[pocketos]] 恢复了数据。
- **产品整改**：事后，Railway 为那个没有延迟删除逻辑的“遗留端点”打了补丁。