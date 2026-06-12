---
type: event
title: "WWDC 2026：苹果AI地基重写"
created: 2026-06-10
updated: 2026-06-10
tags: [苹果, wwdc, ai框架, 端侧推理, 里程碑]
related: [苹果, core-ai, afm-3, foundation-models框架, anthropic, tim-cook]
sources: ["rss/库克最后一届wwdc，把苹果ai九年的地基掀了.md"]
origin_date: 2026-06-09
time_span:
  start: 2026-06-09
  end: 2026-06-13
participants: [苹果, anthropic, 谷歌, 英伟达]
causes: [core-ml无法满足大模型需求]
effects: [core-ai, afm-3, foundation-models框架, ai路由层, ai擂台模式]
significance: high
---
# WWDC 2026：苹果AI地基重写

2026年6月9日，苹果在WWDC 2026上彻底重写AI基础设施，标志着苹果从传统ML全面转向大模型时代。新智元报道此为[[tim-cook|库克]]最后一届WWDC。

## 核心发布

1. **砍掉Core ML**：服役9年的传统ML框架被一刀砍掉
2. **发布[[core-ai|Core AI]]**：从第一行代码为大模型重写的端侧AI推理框架
3. **发布[[afm-3|AFM 3]]模型家族**：与谷歌联合开发，5个模型覆盖端侧和云端
4. **发布[[foundation-models框架|Foundation Models框架]]**：统一Language Model协议，苹果成为[[ai路由层]]
5. **开源工具链**：coreai-models和coreai-torch上线GitHub

## 关键技术突破

- AFM 3 Core Advanced：20B参数稀疏模型通过[[instruction-following-pruning]]直接跑在手机闪存
- Private Cloud Compute扩展至谷歌云英伟达GPU
- 200万下载量以下开发者免费使用云端推理

## 生态响应

- [[anthropic|Anthropic]]在keynote当天（6月8日）发布Swift包接入Foundation Models
- Claude Agent已于2026年2月整合进Xcode 26.3

## 战略意义

苹果明确不做AI模型公司，而是做**AI擂台**——25亿台设备向所有AI巨头开放"默认AI引擎"位置的竞争。AI巨头之间的竞争从此多了一个全新维度：从API调用量和企业合同，延伸到每个人口袋里的默认位置。

## 待验证信息

- "库克最后一届WWDC"和"John Ternus 9月1日接任CEO"需独立验证
- OpenAI是否适配Foundation Models框架尚不明确