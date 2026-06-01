---
type: entity
title: Managed Agent
created: 2026-05-30
updated: 2026-05-30
tags: [agent, openai, 亚马逊云科技, 企业级ai]
related: [亚马逊云科技, openai, amazon-bedrock, amazon-bedrock-agentcore, codex]
sources: ["token贵只因你喂给模型的垃圾太多了丨亚马逊王晓野aigc2026.md"]
origin_date: 2026-05-09
---
# Managed Agent

由 [[openai]] 和 [[亚马逊云科技]] 联合发布的企业级Agent方案。本质是将ChatGPT的Agent能力（前沿模型 + 最佳实践Harness）与亚马逊云科技底层安全基础设施打包整合。

## 定位

如果ChatGPT已经不只是聊天机器人，而是一个可以执行任务的Agent，那么Managed Agent就是将这种能力以企业级安全标准交付的方案。

## 架构

- **模型层**：由OpenAI提供前沿模型
- **Harness层**：由OpenAI提供构建Agent过程中积累的最佳实践
- **基础设施层**：由亚马逊云科技提供底层安全基础设施体系

## 与Bedrock AgentCore的关系

- Managed Agent面向偏好OpenAI能力的企业，提供开箱即用方案
- [[amazon-bedrock-agentcore|Bedrock AgentCore]] 提供更开放灵活的框架和模型选择
- 两者在同一平台上运行，企业可同时选择，继承统一的安全和信任管控