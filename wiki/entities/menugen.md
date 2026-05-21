---
type: entity
title: MenuGen
tags: [application, ai-coding, case-study]
related: [andrej-karpathy, vibe-coding, openai, replicate]
created: 2026-03-27
updated: 2026-03-27
sources: ["卡帕西都整破防了：ai-coding没门槛，可部署环节真嗯啊的难.md"]
---

# MenuGen

MenuGen 是由 [[andrej-karpathy]] 开发的一个“菜单图片生成器”应用。该项目的初衷是解决在餐馆看到纯文字菜单不知道菜品长什么样的痛点。

## 技术实现
- **开发工具**：主要使用 [[Cursor]] 和 [[Claude 3.7]]。
- **核心功能**：
    - 使用 [[OpenAI]] API 进行 OCR 识别，提取菜单文字。
    - 使用 [[Replicate]] API 进行图像生成，展示菜品图片。
- **前端**：基于 React 的组件，由 AI 快速生成。

## 项目意义
MenuGen 被视为 [[vibe-coding]] 的典型案例。它证明了在 AI 辅助下，编写代码的效率极高，但在部署环节（API Key 配置、限流、环境变量、域名认证）遇到了巨大的工程挑战。这一经历成为了卡帕西反思 AI 编程工具链现状的重要契机。