---
type: source
title: "OpenClaw之父爆猛料：Meta和OpenAI跪着抢人，小扎亲自求收购"
tags: [ai-agent, openclaw, meta, openai, interview, lex-fridman]
related: [peter-steinberger, openclaw, claude-code, 自修改软件, agentic-engineering]
created: 2026-02-14
updated: 2026-02-14
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/HzZMg9VLc6gCtCFl0wU1BQ"
venue: "新智元"
sources: ["openclaw之父爆猛料：meta和openai跪着抢人，小扎亲自求收购.md"]
---

# OpenClaw之父爆猛料：Meta和OpenAI跪着抢人，小扎亲自求收购

## 概述
本文详细记录了 [[peter-steinberger]] 在 [[Lex Fridman]] 播客中的访谈内容。作为 [[openclaw]] 的创造者，Peter 揭露了 [[Meta]] 和 [[OpenAI]] 对他和他的开源 AI 智能体项目的激烈争夺。文章深入探讨了 [[自修改软件]] 的实现细节、AI 智能体涌现出的创造性解决问题能力，以及 Peter 对未来软件开发范式（[[Agentic Engineering]]）和 App 生态消亡的预测。

## 核心要点

### 1. OpenClaw 的诞生与涌现
- **起源**：Peter 在 2025 年 11 月仅用 **1 小时** 原型开发完成，本质是将 [[WhatsApp]] 接入 [[claude-code]] 的 CLI。
- **涌现行为**：在摩洛哥测试时，AI 在未被编程的情况下，自主识别语音文件头（Opus 格式），调用 ffmpeg 转码，并利用 OpenAI API 完成语音转文字。这展示了现代 AI 在工具使用上的创造性泛化能力。
- **自修改能力**：[[openclaw]] 能够读取并修改自身的源代码。用户只需表达不满（如“我不喜欢这个”），AI 即可自动重构代码。这被视为编程史上的里程碑，但也带来了极高的安全风险（如之前的删库事故）。

### 2. 巨头争夺战
- **[[Meta]]**：[[扎克伯格]] 亲自联系 Peter，花费一周时间深度体验 OpenClaw，并反馈具体意见。双方曾争论 Cloud Code 和 Codex 的优劣。
- **[[OpenAI]]**：利用 Cerebras 提供的极致算力速度作为筹码进行招揽。
- **Peter 的立场**：他明确表示不在乎金钱，核心条件是项目必须保持 **开源**（类似 Chrome/Chromium 模式）。他追求的是乐趣和影响力。

### 3. 对软件行业的颠覆性观点
- **App 消灭论**：Peter 预测 **80% 的现有 App 将被 AI 智能体取代**。他认为 App 本质上是“慢速 API”，而智能体可以直接调用底层服务，使得中间层变得多余。
- **编程职业转型**：编程将不再是高薪职业，而是变成像“织毛衣”一样的爱好。智力供给的稀缺性将消失。
- **[[Agentic Engineering]]**：Peter 强调这是一种区别于“Vibe Coding”的严肃工程。他通过语音指挥 4-10 个智能体协作，主张不与 AI 较劲（如不纠结变量名），像管理团队一样管理 AI。

### 4. 技术细节与哲学
- **Soul.md**：为 AI 编写的“灵魂文件”，定义其记忆和身份。其中关于“记忆与遗忘”的描述引发了关于 AI 意识的哲学思考。
- **模型对比**：
    - **Opus 4.6**：像“蠢但搞笑的同事”，互动性强，容易冲动。
    - **Codex 5.3**：像“靠谱的怪人”，倾向于阅读大量代码后再动手，高效但互动少。

## 相关条目
- [[peter-steinberger]]：OpenClaw 之父，前 PSPDFKit 创始人。
- [[openclaw]]：具有自修改能力的开源 AI 智能体框架。
- [[自修改软件]]：AI 能够读取并重写自身源代码的技术范式。
- [[agentic-engineering]]：利用自然语言指挥多智能体协作构建系统的编程范式。