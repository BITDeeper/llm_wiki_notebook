---
type: source
title: "苹果官方App误打包了Claude.md，这么大的公司也Vibe Coding啊？"
tags: [apple, claude-code, vibe-coding, security-incident, ai-adoption]
related: [claude-code, anthropic, vibe-coding, claude-md, apple-support]
created: 2026-05-02
updated: 2026-05-02
authors: [梦晨]
year: 2026
url: "https://mp.weixin.qq.com/s/rTJGFDXUjldpaHCWI136fg"
venue: "量子位"
sources: ["苹果官方app误打包了claude.md，这么大的公司也vibe-coding啊？.md"]
---

# 苹果官方App误打包了Claude.md，这么大的公司也Vibe Coding啊？

## 概述
本文报道了苹果公司在 2026 年 5 月发生的一起重大工程事故：在 Apple Support 应用 v5.13 版本更新中，意外将用于指导 AI 编程的 `Claude.md` 配置文件打包进了生产环境。这一事件不仅坐实了苹果内部在生产级应用开发中深度使用 [[claude-code]]，也暴露了 [[vibe-coding]] 模式下流程管控的新挑战。

## 核心发现

### 1. 事故详情
- **发现者**：MacRumors 分析师 Aaron Perris。
- **泄露内容**：`Claude.md` 文件及 `SAComponents` 模块文档。
- **苹果反应**：在 24 小时内紧急撤回了更新。

### 2. 技术架构曝光
泄露的 `Claude.md` 揭示了 Apple Support 的技术骨架：
- **双后端系统**：由 [[Juno AI]]（自动应答）和 Live Agents（真人客服）组成。
- **协议层切换**：通过一个 Protocol 协议层实现 AI 与人类的无缝切换，上层代码无需区分消息来源。
- **三角色设计**：Client（用户）、Agent（真人客服）、Assistant（AI）共用一套消息处理流程，用户无法感知对话对象。

### 3. 苹果与 Anthropic 的关系
- **内部使用**：证实了彭博社记者 Mark Gurman 三个月前的爆料，即苹果内部大量使用 Anthropic 模型。
- **隐私策略**：苹果在自家服务器上运行定制版 Claude 模型，确保代码、文档和 token 不出苹果基础设施。
- **工具选择**：尽管苹果与谷歌达成 Gemini 合作（用于新版 Siri），但在内部开发工具上首选 Claude。

## 行业讨论

### Vibe Coding 的代价
文章指出，这起事故反映了 [[vibe-coding]]（依赖 AI 智能体进行直觉化编程）的潜在风险。即便是最注重保密和流程的苹果，也未能避免因过度信任 AI 工具而导致的基础性错误。

### 流程失效
- **审查缺失**：`Claude.md` 即使被提交到代码库，理应被构建流程拦截，不应进入发布包。
- **工具缺陷**：有观点指出，[[claude-code]] 可能存在“选择性无视指示”的问题，导致即便开发者设置了规则，AI 仍可能将敏感文件打包。

## 关键引述
> "Apple runs on Anthropic at this point." — Mark Gurman

> "真正的问题不是 Apple 用了 Claude，而是 Apple 对 Claude 过于信任。所有人都在用 AI 加速开发，但这件事应该被代码审查拦住。" — HackerNet 评论

## 相关事件
此次事故与此前 [[claude-code]] 的 [[source-map-leaks]]（源码泄露）事件高度相似，均涉及因配置文件管理不当导致生产环境信息泄露，引发了对 AI 编程工具安全性的担忧。