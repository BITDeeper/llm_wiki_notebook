---
type: concept
title: ZDR（零数据留存）
tags: [数据合规, 隐私保护, 企业安全, zdr, 数据治理]
related: [claude-fable-5, mythos级数据留存政策, 微软, 企业ai成本治理, 法务关卡]
created: 2026-06-13
updated: 2026-06-13
sources: ["rss/微软不敢给员工用的ai，转头卖给你！法务卡住最强claude.md"]
---
# ZDR（零数据留存）

ZDR（Zero Data Retention，零数据留存）是一种数据隐私保护规则，要求请求处理完毕后数据即刻删除，服务器上不留副本。

## 核心逻辑

- 请求处理完，数据即刻删除
- 服务器上不留副本，就谈不上泄露、被调取或被人查看
- 对金融、医疗、政府等敏感行业客户，ZDR往往直接写入合同

## 在AI场景中的应用

ZDR是企业选择AI模型时的核心合规红线。在 [[claude-fable-5|Claude Fable 5]] 发布后，ZDR成为AI能力与合规之间的核心冲突点：

- [[微软]] 将ZDR作为给客户的承诺和自身红线
- [[anthropic|Anthropic]] 的 [[mythos级数据留存政策]] 要求30天数据留存，与ZDR正面碰撞
- 已配置ZDR的组织（Claude Console工作区、Claude Enterprise、AWS Bedrock、Google Cloud、Microsoft Foundry）面临重新选择的挑战

## 隔离方案

不同平台提供不同的ZDR隔离方案：
- **AWS/GCP**：留存数据留在客户自有云环境，不出自家云
- **Azure Foundry**：要求另建订阅以隔离ZDR配置
- **Claude Console**：在指定工作区打开留存，其他ZDR工作区照旧
- **Claude Enterprise**：管理控制台提供开关，可搭建独立沙盒组织

## 与企业AI治理的关系

ZDR冲突标志着 [[企业ai成本治理]] 从单纯的成本控制扩展到合规治理维度。企业在选择AI模型时，除跑分、价格、手感外，还需评估数据合规等 [[法务关卡]] 问题。