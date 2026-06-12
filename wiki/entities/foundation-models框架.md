---
type: entity
title: Foundation Models框架
created: 2026-06-10
updated: 2026-06-10
tags: [苹果, ai框架, swift, 模型路由, 开发者工具]
related: [苹果, core-ai, afm-3, anthropic, ai路由层]
sources: ["rss/库克最后一届wwdc，把苹果ai九年的地基掀了.md"]
origin_date: 2026-06-09
---
# Foundation Models框架

苹果在WWDC 2026上推出的**统一Swift AI调用框架**，通过Language Model协议实现端侧/开源/云端模型的无缝切换，是苹果成为[[ai路由层|AI路由层]]的技术基础。

## Language Model协议

框架核心是定义了一套统一的Swift API协议——**Language Model协议**：
- 任何模型只要遵循该协议，就能被同一套代码调用
- 苹果自家的端侧模型遵循该协议
- Core AI跑的开源模型遵循该协议
- Claude和Gemini等云端大模型也遵循该协议
- **一套代码，三种模型，从本地到云端无缝切换**

## 工作机制

以日记App为例：
1. 端侧模型处理轻量任务（生成每日写作提示）
2. 复杂任务（跨时间语义归纳）自动路由给Claude
3. 响应以流式方式返回到同一个SwiftUI视图
4. 用户全程感知不到模型切换

## 第三方适配

**[[anthropic|Anthropic]]首个交卷**：
- WWDC keynote当天（6月8日）发布Swift包
- 6月9日起可用
- Claude精准卡位端侧模型与复杂推理之间的接缝
- 面向App最终用户（区别于Xcode中面向开发者的Claude Agent）

## 战略意义

Foundation Models框架让苹果成为AI路由层——不做模型公司，做平台和擂台，25亿台设备向所有AI巨头开放"默认AI引擎"位置的竞争。