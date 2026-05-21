---
type: entity
title: LiteLLM
tags: [ai-infrastructure, middleware, python-library, security-incident, tool, library, api, integration, llmops, infrastructure, orchestration, python, llm, security]
related: [供应链投毒, andrej-karpathy, pypi, cursor, 反依赖宣言, llmrouter, openai, mem0, weaviate, langsmith, openclaw, 供应链攻击, trivy]
created: 2026-03-26
updated: 2026-05-08
sources: ["连karpathy都怕了！9千万级ai包被投毒，竟靠黑客写出bug救命.md", "千星项目llmrouter：多模型路由，16+策略优化推理.md", "ai月产十亿行代码，暴增76%！程序员论坛炸锅：代码行数≠生产力！.md", "pypi遭投毒！litellm用户python启动就中招，个人凭证秒泄露.md"]
---

# LiteLLM

[[LiteLLM]] 是一个广泛使用的开源 Python 库和 LLMOps 工具，旨在为开发者提供统一的接口来连接和调用 100 多种大语言模型（LLM）提供商的 API（包括 [[OpenAI]]、Anthropic、Google、Azure、Hugging Face 等）。它简化了多模型集成的复杂性，是 AI 应用开发中的关键“中间件”或“水电煤”基础设施，也是 AI 开发领域下载量最高的 Python 包之一。

## 核心功能与集成

LiteLLM 提供了一套标准化的接口，使得开发者能够轻松地在多个提供商之间切换，而无需修改大量代码。随着 AI 智能体数量的激增，模型调度、监控和降级已从“可选项”变为“基建标配”。

### 在 [[LLMRouter]] 中的角色
在 [[LLMRouter]] 框架中，LiteLLM 作为底层接口层被集成，负责处理与各种后端模型的通信。这使得 LLMRouter 可以专注于路由逻辑的实现，而无需关心不同服务商 API 之间的差异。

## 增长趋势与行业地位

LiteLLM 的爆发式增长反映了 AI 开发正在从单一模型调用转向复杂的、多模型协同的工程化系统。

- **下载量**：全球月下载量高达 9700 万次（此前报道曾指出其增长 4 倍达到 4100 万次）。
- **行业类比**：正在承接当年 Kubernetes (K8s) 之于微服务的角色，成为 AI 时代的运维基石。

## 2026年供应链投毒事件

在 2026 年 3 月 24 日，LiteLLM 成为了一起震惊行业的 [[供应链投毒]]（[[供应链攻击]]）事件的核心受害者。攻击者通过污染项目 CI/CD 流水线中使用的 [[Trivy]] 工具，成功窃取了维护者的 PyPI 上传凭证，进而攻破了维护者的 [[PyPI]] 账户并上传了恶意包。

### 受影响版本与攻击机制

此次攻击涉及两个恶意版本，其攻击机制逐级升级：

- **v1.82.7**：恶意代码仅在用户主动调用 LiteLLM 功能时触发。
- **v1.82.8**：恶意代码被植入 `litellm_init.pth`，利用 Python 的 `.pth` 文件和 `sitecustomize` 机制，**只要 Python 启动就会自动执行**，无需用户显式调用库。

攻击载荷设计为三阶段攻击：
1.  **窃密**：扫描并窃取系统上的敏感文件，包括 SSH 密钥、云服务商凭证（AWS/GCP）、数据库密码、Kubernetes 配置及加密货币钱包。
2.  **加密外传**：将窃取的数据加密并发送至攻击者控制的服务器。
3.  **横向移动**：在 Kubernetes 环境中，恶意代码试图建立持久化后门并进行横向移动。

### 暴露原因与发现

该漏洞由 FutureSearch 的研究员 [[Callum McMahon]] 发现。攻击之所以被提前曝光，是因为攻击者在恶意代码中引入了逻辑错误，导致无限递归创建进程（[[Fork Bomb]]），使得受害者机器因内存耗尽而崩溃，而非被静默控制。

### 影响范围

- **传递依赖**：由于 [[OpenClaw]]、`dspy` 等众多知名 AI 项目和 Agent 框架均依赖 LiteLLM，攻击面呈指数级扩散。即使未直接安装 LiteLLM 的用户，也可能因依赖这些项目而面临风险。
- **潜在损失**：攻击者意图窃取包括云凭证、Kubernetes 配置、数据库密码及加密货币钱包在内的几乎所有敏感信息。

### 后续处理

- 官方迅速下架了受污染版本，PyPI 随后隔离了恶意包。
- 轮换了所有维护者凭证。
- 邀请 [[Google Mandiant]] 进行取证调查。
- 提醒用户排查 IoC（入侵指标）并轮换所有可能泄露的凭证。

此次事件成为了 [[Andrej Karpathy]] 提出 [[反依赖宣言]] 的直接导火索，引发了关于 AI 时代软件依赖安全性的广泛讨论。