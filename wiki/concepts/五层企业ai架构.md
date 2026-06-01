---
type: concept
title: 五层企业AI架构
created: 2026-05-30
updated: 2026-05-30
tags: [企业架构, ai基础设施, agent, 分层框架]
related: [亚马逊云科技, harness, 企业级agent落地鸿沟, 应用闭环, 产业深水区]
sources: ["token贵只因你喂给模型的垃圾太多了丨亚马逊王晓野aigc2026.md"]
---
# 五层企业AI架构

由 [[亚马逊云科技]] 提出的企业级AI落地分层框架，描述了从底层算力到上层应用的完整技术栈。是 [[王晓野]] 在 [[第四届中国aigc产业峰会]] 上系统阐述的架构理念。

## 五层结构

### 第一层：算力
Agent场景对推理算力需求突出。需要面向具体场景的最优性价比计算能力，包括自研芯片（[[trainium|Trainium]]、[[graviton|Graviton]]）。

### 第二层：模型
企业需要快速获取前沿模型或最适合自身场景的模型，同时具备高性价比。通过 [[amazon-bedrock|Amazon Bedrock]] 提供多模型选择。

### 第三层：数据和知识
Agent需要企业自己的数据和知识作为"独家配方"。数据平台必须从服务人转向服务Agent（[[ai-ready数据平台]]）。

### 第四层：Agentic平台
[[harness|Harness]] 层，即模型之外的生产级管控能力。通过 [[amazon-bedrock-agentcore|Amazon Bedrock AgentCore]] 实现。

### 第五层：Agent应用
通用能力通过垂直、专用或通用Agent应用形态直接采购使用，如 [[working-agent|Working Agent]] 和Coding Agent。

## 与应用闭环的关系

五层架构本质上是 [[应用闭环]] 的具体实施框架——描述了如何从模型到场景到商业回报打通完整链路。