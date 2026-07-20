---
type: entity
title: Microsoft Foundry（Azure Foundry）
tags: [微软, ai平台, 模型托管, azure, foundry]
related: [微软, claude-fable-5, github-copilot, zdr-零数据留存, anthropic]
created: 2026-06-13
updated: 2026-06-13
sources: ["rss/微软不敢给员工用的ai，转头卖给你！法务卡住最强claude.md"]
---
# Microsoft Foundry（Azure Foundry）

Microsoft Foundry（亦称 Azure Foundry）是 [[微软]] 旗下的AI模型托管平台，为企业提供各类AI模型的部署和管理服务。

## 在Fable 5合规冲突中的角色

Microsoft Foundry 是 [[claude-fable-5|Claude Fable 5]] 上架的渠道之一。2026年6月9日，微软Azure官方博客高调宣布Fable 5上线Foundry，标题为"开启自主智能体的下一个时代"。

## ZDR隔离方案的特殊性

在所有提供 Fable 5 的平台中，Azure Foundry 的 [[zdr-零数据留存|ZDR]] 隔离方案最为特殊：

- **AWS Bedrock / Google Cloud**：留存数据留在客户自有云环境，不出自家云
- **Azure Foundry**：留存按订阅配置，已设ZDR的订阅想用Fable 5，必须**另建一个新订阅**

这意味着 Azure Foundry 用户需要主动创建新订阅才能使用 Fable 5，开新订阅这个动作本身就是客户自己的选择——微软将选择权和责任打包交给了客户。