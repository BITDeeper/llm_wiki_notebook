---
type: source
title: "拒绝Vibe Coding！大神揭秘8套AI编程模式"
tags: [ai-programming, engineering-patterns, simon-willison, claude-code, tdd]
related: [simon-willison, vibe-coding, cognitive-debt, agentic-engineering-patterns, claude-code]
created: 2026-03-16
updated: 2026-03-16
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/DDTFjr-SRKmn_0gkQa5GQA"
venue: "新智元"
sources: ["拒绝vibe-coding！大神揭秘8套ai编程模式.md"]
---

# 拒绝Vibe Coding！大神揭秘8套AI编程模式

## 概述
本文详细介绍了 Datasette 创始人 [[Simon Willison]] 提出的一套针对专业开发者的 AI 编程工程模式。文章指出，在代码生成成本趋近于零的时代，工程师的核心价值从“编写能力”转移到“判断力”，并提出了 8 种实战模式以应对 [[Vibe Coding]] 带来的 [[认知债务]] 风险。

## 核心观点

### 代码成本归零，判断力变贵
- **现状**：生成几百行代码的时间从一整天缩短至几分钟。
- **结论**：传统的“值不值得写”的经济学逻辑已失效。工程师的核心价值转变为：
  1. 知道该写什么。
  2. 知道好代码长什么样。
  3. 知道如何让 AI 不跑偏。

### 批判 Vibe Coding
- [[Vibe Coding]] 指仅凭直觉与 AI 对话生成代码，而不深入理解逻辑。
- 风险：导致 [[认知债务]]（代码能跑但开发者不懂原理），使核心业务变成黑盒，难以维护和扩展。

## 8 大实战模式

1.  **写代码很便宜**：利用低成本生成进行快速重构和尝试，但需警惕交付质量。
2.  **囤积已知技巧**：建立个人知识库（博客、TIL、GitHub），利用 AI 重组旧知识解决新问题。
3.  **使用红绿 TDD**：通过“先写测试（红），再写实现（绿）”的提示词策略，强制 AI 定义正确性。
4.  **先跑测试**：在新会话中首先运行测试，让 AI 理解项目规模和测试心态。
5.  **线性演练**：让 AI 生成结构化代码讲解文档，将 AI 转化为学习加速器，偿还认知债务。
6.  **交互式解释**：要求 AI 生成可视化演示（如动画）来解释复杂算法，超越文本限制。
7.  **GIF 优化案例**：利用完整提示词示例，展示如何构建 WebAssembly 工具。
8.  **常用提示词库**：积累高效的提示词模板。

## 社区讨论
- **分歧**：一派主张严格 TDD（Willison 派），另一派主张激进迭代、扔 Token 验证。
- **共识**：验证不能省。核心业务需严格，原型探索可灵活。

## 关键结论
AI 时代，代码变便宜了，但判断力变贵了。通过 [[线性演练]] 和 [[交互式解释]] 等模式，开发者可以在利用 AI 提效的同时，保持对系统的深度理解和掌控。