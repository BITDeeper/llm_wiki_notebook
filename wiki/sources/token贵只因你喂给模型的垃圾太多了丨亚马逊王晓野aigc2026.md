---
type: source
title: "Token贵只因你喂给模型的垃圾太多了丨亚马逊王晓野AIGC2026"
created: 2026-05-30
updated: 2026-05-30
tags: [aigc2026, 亚马逊云科技, agent, 企业级ai, token效率, harness]
related: [第四届中国aigc产业峰会, 量子位, 亚马逊云科技, 王晓野, harness, 企业级agent落地鸿沟, token使用效率]
sources: ["token贵只因你喂给模型的垃圾太多了丨亚马逊王晓野aigc2026.md"]
authors: [量子位编辑部]
year: 2026
url: "https://mp.weixin.qq.com/s/EIUTqhYJ2SudK5bO0dzdJQ"
venue: 第四届中国AIGC产业峰会
---
# Token贵只因你喂给模型的垃圾太多了丨亚马逊王晓野AIGC2026

本文是亚马逊云科技产品技术部技术总监 [[王晓野]] 在 [[第四届中国aigc产业峰会]] 上的演讲实录整理，由 [[量子位]] 编辑发布。

## 核心观点

1. **87%部署率 vs 10%价值实现率** — 麦肯锡数据显示87%企业宣称大规模部署AI，但真正获得生产价值的仅约10%。
2. **AI不只是模型，[[harness|Harness]]才是关键** — 模型是CPU，Harness是操作系统和软件层，是让Agent在企业环境跑起来的生产级管控能力。
3. **数据平台必须从服务人转向服务Agent** — Agent对数据的调用方式（高并发、记忆管理、全链路可观测）与传统人类交互完全不同。
4. **Token贵的根源是信息垃圾** — 不是单价问题，而是喂给模型的信息未经过滤优化，导致 [[token使用效率]] 低下。
5. **过去30年个人生产力未被颠覆，直到[[working-agent|Working Agent]]出现** — Agent正在真正改变个人工作方式。

## 关键数据

- Gartner：2028-2030年超15%企业日常决策由Agent自主完成
- 劳动力研究：82%企业领导者计划增加"数字员工"雇用
- 麦肯锡：Agent和生成式AI市场规模从2.6万亿增至4.4万亿美元
- 麦肯锡：87%企业大规模部署AI（一年前78%），但仅10%获得真正价值

## 五层企业AI架构

演讲提出 [[五层企业ai架构]]：算力 → 模型 → 数据和知识 → Agentic平台 → Agent应用。

## 产品发布

- [[amazon-bedrock-agentcore|Amazon Bedrock AgentCore]]：九大功能模块的Harness平台
- [[managed-agent|Managed Agent]]：与 [[openai]] 联合发布的企业级Agent方案
- [[quick-agent|Quick]]：深度个性化Working Agent产品
- [[s3-vectors|S3 Vectors]]：支持大规模向量检索的对象存储
- [[s3-tables|S3 Tables]]：基于开放数据架构的数据表管理