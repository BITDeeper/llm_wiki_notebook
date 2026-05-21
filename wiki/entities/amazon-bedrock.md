---
type: entity
title: Amazon Bedrock
tags: [aws, infrastructure, llm, openai]
related: [amazon-quick, openai, agentic-ai, ai-subscription-crisis]
created: 2026-04-29
updated: 2026-04-29
sources: ["刚刚，“云计算一哥”版龙虾发布，奥特曼打着官司也要云站台.md"]
---

# Amazon Bedrock

## 概述
[[Amazon Bedrock]] 是亚马逊云科技（AWS）提供的全托管基础模型服务，旨在让开发者能够通过 API 访问各种高性能基础模型。它是 AWS 在 AI 时代的核心基础设施平台。

## 核心功能

### 多模型支持
Bedrock 提供来自多家领先 AI 公司的模型选择，包括：
- **OpenAI**：GPT-5.4, GPT-5.5, Codex（最新接入）。
- **Anthropic**：Claude 系列模型。
- **Meta**：Llama 系列。
- **Mistral**：Mistral 系列模型。
- **Amazon**：自研模型（如 Titan 系列）。

### 企业级安全与治理
Bedrock 强调企业级的安全控制，这也是其吸引大型企业客户的关键：
- **IAM 访问管理**：集成 AWS Identity and Access Management。
- **网络隔离**：支持 AWS PrivateLink，数据不出 VPC（虚拟私有云）。
- **数据加密**：支持静态和传输中的数据加密。
- **审计日志**：通过 AWS CloudTrail 提供全面的日志记录。

### Bedrock Managed Agents
结合 OpenAI 等前沿模型与 AWS 基础设施，提供生产级 Agent 服务。这包括：
- 跨会话记忆。
- 技能调用。
- 身份权限管理。
- 计算环境配置。
- 审计与治理能力。

## 战略意义
通过与 [[OpenAI]] 的合作，Bedrock 进一步巩固了其作为“AI 模型超市”的地位。对于 OpenAI 而言，这是其拓展企业分发渠道、减少对单一云厂商（如 Azure）依赖的重要一步。

## 关联条目
- [[Amazon Quick]]：构建在 Bedrock 之上的应用层产品。
- [[ai-subscription-crisis]]：Bedrock 的按量计费模式代表了 AI 商业模式向 B 端基础设施的转变。