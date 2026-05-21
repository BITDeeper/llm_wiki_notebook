---
type: source
title: "真没招了！Claude撞碎创业梦，华人博士开源逆袭"
tags: [agent, 开源, 分布式系统, 创业, anthropic]
related: [eigent, guohao-li, claude-cowork, camel-ai, 分布式多智能体, seta-scaling-environments-for-terminal-agents]
created: 2026-01-16
updated: 2026-01-16
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/ip4gBgJQBybt9TO3_qT-MA"
venue: "新智元"
sources: ["真没招了！claude撞碎创业梦，华人博士开源逆袭.md"]
---

# 真没招了！Claude撞碎创业梦，华人博士开源逆袭

## 概述
本文报道了华人学者 [[guohao-li]] 及其团队开发的 [[eigent]] 项目在面临 [[anthropic]] 发布的 [[claude-cowork]] 功能冲击后，放弃商业化尝试并转向彻底开源（Apache 2.0）的事件。文章深入探讨了 [[分布式多智能体]] 架构的技术优势，以及开发者社区对“全栈本地 Agent”和“代码朋克”精神的强烈反响。

## 核心事件
- **商业梦碎**：[[guohao-li]] 团队基于 [[camel-ai]] 框架开发了全栈 Agent 产品 [[eigent]]，原计划进行商业化。然而 [[anthropic]] 发布的 [[claude-cowork]] 功能直接覆盖了其核心价值，导致商业模式失效。
- **开源逆袭**：面对巨头的“降维打击”，Guohao Li 决定将整个项目以 Apache 2.0 协议开源，喊出 "I don't care" 的口号，获得了 Hugging Face 联合创始人 [[thomas-wolf]] 等社区大佬的支持。

## 技术亮点
- **分布式架构**：不同于传统的“Cosplay Agent”或单体脚本，[[eigent]] 基于 [[actor-模型]] 构建了分布式消息总线，支持大规模并行、容错和自我修复。
- **终端控制**：通过 [[seta-scaling-environments-for-terminal-agents]] 项目，Agent 能够直接接管终端执行操作（如 `git clone`, `npm install`），被视为“下一代 Agent”的标志。
- **全栈本地化**：支持从底层模型推理到 UI 的全链路本地运行，允许用户使用消费级显卡运行企业级任务，摆脱对 SaaS 订阅的依赖。

## 市场反响
- 文章指出，开发者对“黑盒 SaaS”感到厌倦，渴望数据所有权。
- [[eigent]] 的开源被视为对抗 [[ai-subscription-crisis]] 的一种手段，通过提供免费的基础设施来颠覆中间商模式。

## 相关链接
- GitHub: https://github.com/eigent-ai/eigent
- Google 开发者博客关于 SETA 的报道