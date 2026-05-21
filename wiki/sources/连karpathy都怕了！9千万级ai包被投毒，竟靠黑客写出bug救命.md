---
type: source
title: "连Karpathy都怕了！9千万级AI包被投毒，竟靠黑客写出bug救命"
tags: [security, supply-chain-attack, litellm, ai-infrastructure, karpathy]
related: [litellm, andrej-karpathy, 供应链投毒, 反依赖宣言, pypi, cursor]
created: 2026-03-26
updated: 2026-03-26
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.qq.com/s/QZJUlzeqnODtn8I5AeTF4w"
venue: "新智元"
sources: ["连karpathy都怕了！9千万级ai包被投毒，竟靠黑客写出bug救命.md"]
---

# 连Karpathy都怕了！9千万级AI包被投毒，竟靠黑客写出bug救命

## 概述

本文详细记录了 2026 年 3 月发生的一起针对 AI 基础设施核心组件 [[LiteLLM]] 的重大 [[供应链投毒]] 事件。攻击者在 PyPI 上传了包含恶意代码的版本（1.82.7 和 1.82.8），旨在窃取开发者敏感凭证并控制 Kubernetes 集群。该事件之所以被发现，并非源于安全机制，而是因为攻击者编写的恶意代码存在 Bug，导致了 [[Fork Bomb]] 效应使机器崩溃。这一事件引发了 [[Andrej Karpathy]] 等行业领袖对软件依赖信任链的深刻反思，提出了 [[反依赖宣言]]。

## 核心事件

- **受害者**：[[LiteLLM]]（月下载量 9700 万的 AI 中间件）。
- **攻击载体**：PyPI 官方仓库被上传恶意版本。
- **发现者**：Callum McMahon 团队（在使用 [[Cursor]] 的 MCP 插件时触发崩溃）。
- **根本原因**：攻击者利用 `.pth` 文件在 Python 启动时执行恶意代码，但因代码逻辑错误导致无限递归创建进程，意外暴露了攻击。

## 攻击手法

此次攻击展现了典型的 APT（高级持续性威胁）特征，载荷分为三个阶段：
1.  **信息收集**：窃取 SSH 密钥、云服务商凭证（AWS/GCP/Azure）、Kubernetes 配置、数据库密码、加密货币钱包等。
2.  **加密外传**：使用内置的 4096 位 RSA 公钥配合 AES-256-CBC 加密数据，发送至伪装域名 `models.litellm.cloud`。
3.  **横向移动**：若检测到 Kubernetes 环境，利用凭证读取集群所有命名空间的 Secret，并在所有节点创建特权 Pod 以植入后门。

## 行业影响

- **信任危机**：暴露了 AI 开发生态对开源供应链的过度信任。维护者账户可能被盗，导致恶意代码进入依赖树。
- **范式转移**：[[Andrej Karpathy]] 提出应减少外部依赖，倾向于利用 [[LLM]] 实时生成简单功能的代码，以规避不可信的第三方库风险。
- **工具链风险**：AI 编程工具（如 Cursor）通过自动引入依赖（如 MCP 插件），无意中放大了攻击面。

## 关键细节

- **传递依赖**：即使开发者未直接安装 LiteLLM，也可能因安装 `dspy` 等依赖它的库而中招。
- **掩盖痕迹**：攻击者控制了 GitHub 仓库，关闭了相关的安全讨论 Issue，并利用机器人账号刷屏淹没讨论。
- **官方响应**：LiteLLM 官方已下架恶意版本，并邀请 [[Google Mandiant]] 进行取证。

## 结论

此次事件被视为“软件界的恐怖故事”，它揭示了现代软件供应链的脆弱性。如果不是攻击者的代码失误，这可能演变成一场波及全球的静默灾难。它迫使行业重新审视“默认信任”的开源文化，并考虑在 AI 时代重构软件工程的安全策略。