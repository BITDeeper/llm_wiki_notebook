---
type: entity
title: Trivy
tags: [security, scanner, devops, cve-scanner]
related: [litellm, 供应链攻击, ci-cd-安全]
created: 2026-03-25
updated: 2026-03-25
sources: ["pypi遭投毒！litellm用户python启动就中招，个人凭证秒泄露.md"]
---

# Trivy

Trivy 是一个开源的安全扫描工具，广泛用于查找容器、文件系统和 Git 仓库中的安全漏洞、配置错误及密钥泄露。它常被集成到 CI/CD 流水线中，以便在代码部署前自动进行安全检查。

## 在 LiteLLM 供应链攻击中的角色

在 [[LiteLLM]] 投毒事件中，Trivy 成为了攻击的“跳板”。攻击者并未直接攻破 LiteLLM 的服务器，而是篡改了 LiteLLM 项目所使用的 Trivy GitHub Action。

### 攻击路径
1.  **工具篡改**：攻击者向 Trivy 的 GitHub Action 注入了恶意代码。
2.  **凭证窃取**：当 LiteLLM 的 CI/CD 流水线运行被污染的 Trivy 扫描时，恶意代码窃取了 LiteLLM 维护者的 PyPI 上传凭证。
3.  **恶意发布**：利用窃取的凭证，攻击者自动发布了包含后门的 LiteLLM 版本。

这一事件揭示了 [[CI/CD 安全]] 中的一个核心矛盾：用于检测安全漏洞的工具往往拥有极高的系统权限，一旦这些工具本身被污染，其破坏力远超普通应用。
