---
type: entity
title: PyPI
tags: [package-repository, python, security-target, repository, package-manager, security]
related: [litellm, 供应链投毒, google-mandiant, 供应链攻击, 依赖混淆]
created: 2026-03-26
updated: 2026-05-08
sources: ["连karpathy都怕了！9千万级ai包被投毒，竟靠黑客写出bug救命.md", "pypi遭投毒！litellm用户python启动就中招，个人凭证秒泄露.md"]
---

# PyPI (Python Package Index)

PyPI 是 Python 编程语言的官方软件仓库。它允许开发者发布和分发 Python 包，同时也让用户能够通过 `pip` 等工具轻松安装第三方库。作为 Python 生态系统的核心节点，它是连接开发者与用户的关键枢纽。

## 安全挑战

PyPI 长期以来是 [[供应链投毒]] 和 [[供应链攻击]] 的主要目标。由于缺乏对上传代码的强制严格审查（如自动化静态分析或人工审计），一旦维护者账户凭证泄露或构建流程被渗透，攻击者即可上传恶意包。

### 典型攻击手段

- **依赖投毒**：上传与流行库名称相似的恶意包，利用用户的拼写错误诱导安装。
- **账户劫持**：窃取合法维护者的凭证，直接在官方包名下发布恶意版本。
- **CI/CD 渗透**：攻击项目的构建流水线，自动将恶意版本发布至 PyPI。

### LiteLLM 事件中的表现

在 [[LiteLLM]] 投毒事件中，攻击者通过某种手段获取了 LiteLLM 维护者的 PyPI 账户权限，并绕过了官方的 CI/CD 发布流程，直接将包含恶意代码的 v1.82.7 和 v1.82.8 上传到了 PyPI。这暴露了当前包管理机制中“信任即安全”假设的脆弱性。

### 社区反应与防御思考

针对频繁发生的安全事故，社区专家如 [[Sebastian Raschka]] 建议开发者应减少对外部不可信依赖的依赖，或将关键源代码自行维护，以降低风险。

此类事件也促使行业思考是否需要引入更严格的防御机制，例如：
- 包签名验证
- 构建流程重现性检查
- 运行时沙箱隔离机制