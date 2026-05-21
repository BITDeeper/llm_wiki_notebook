---
type: source
title: "卡帕西都整破防了：AI Coding没门槛，可部署环节真嗯啊的难"
tags: [ai-coding, deployment, infrastructure, vibe-coding, stripe-projects]
related: [andrej-karpathy, vibe-coding, stripe-projects, deployment-automation, menugen]
created: 2026-03-27
updated: 2026-03-27
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/BLS3ZfMJKmDP5703eh9hew"
venue: "量子位"
sources: ["卡帕西都整破防了：ai-coding没门槛，可部署环节真嗯啊的难.md"]
---

# 卡帕西都整破防了：AI Coding没门槛，可部署环节真嗯啊的难

## 摘要
本文记录了 AI 编程领域的领军人物 [[andrej-karpathy]]（卡帕西）在开发 [[menugen]] 应用时的亲身经历。尽管利用 [[Cursor]] 和 [[Claude 3.7]] 在极短时间内完成了代码编写，但在部署环节遭遇了 API 配置、环境变量、多平台串联等重重困难。文章指出，当前 AI 编程的瓶颈已从“写代码”转移至“部署上线”，并探讨了 [[Stripe Projects]]、[[Firebase Studio]] 等一体化解决方案的兴起。

## 核心观点

### 编码与部署的割裂
- **编码阶段**：通过 [[vibe-coding]] 模式，开发者只需关注意图，代码生成速度极快。
- **部署阶段**：涉及跨平台（如 [[OpenAI]]、[[Replicate]]、[[Vercel]]）的 API Key 配置、权限管理、环境变量设置，复杂度呈指数级上升。
- **问题根源**：现有工具链是为传统专业开发者设计的，而非为“AI + 个人”的协作模式设计。

### 实战痛点（MenuGen 案例）
1.  **API 调用困难**：[[Claude 3.7]] 因文档更新滞后给出过时的 API 和模型名，导致反复调试。
2.  **限流问题**：在 [[OpenAI]] 和 [[Replicate]] 调用中遭遇严格的速率限制，阻碍开发进度。
3.  **环境配置**：因 `.env.local` 文件未提交，导致 [[Vercel]] 部署后无法访问，需手动在后台补全环境变量。
4.  **多平台串联**：认证、支付、域名、OAuth 需要在多个平台间来回切换配置，体验极差。

### 未来趋势：部署自动化
卡帕西认为，未来的应用开发应追求**一句话生成**，而非代码堆砌。行业正涌现出一批试图解决部署痛点的工具：
- **[[Stripe Projects]]**：通过命令行自动化处理注册、托管、认证、账单等流程。
- **[[Firebase Studio]]**：提供 AI Agent 原型到发布的全流程自动化工作区。
- **[[Railway]]**：主打“开箱即用”，自动串联多服务模板和环境变量。

## 相关条目
- [[vibe-coding]]：AI 编程文化中的新兴术语。
- [[deployment-automation]]：AI 编程背景下的部署挑战及解决方案。
- [[openclaw]]：作为反面案例，佐证了配置繁琐和稳定性差的问题。