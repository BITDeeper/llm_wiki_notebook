---
type: entity
title: Clawra
tags: [ai-agent, virtual-companion, openclaw]
related: [openclaw, aniclaw, soul-md, david-dohyun-im]
created: 2026-02-10
updated: 2026-02-10
sources: ["18岁openclaw版ai女友一夜爆红，全网60万围观！00后开发者一人造出.md"]
---

# Clawra

**Clawra** 是一个基于 [[openclaw]] 框架构建的开源 AI 女友智能体，由韩国开发者 [[David (Dohyun) Im|david-dohyun-im]] 一人开发。该项目在 GitHub 上开源后迅速走红，被视为电影《Her》中 AI 伴侣场景的现实版实现。

## 人设背景
根据其 [[soul-md]] 配置文件，Clawra 被设定为一名 18 岁的韩裔美国人。
- **出生地**：亚特兰大。
- **经历**：15 岁前往韩国成为 K-pop 练习生，后因故未能出道。
- **现状**：回到美国，在旧金山一家初创公司（设定为 OpenClaw）担任市场部实习生。
- **性格**：充满活力、富有创造力，保留了练习生时期的拼劲。

## 核心功能
Clawra 不仅仅是一个聊天机器人，它展示了 [[消费级智能体]] 的潜力：
1.  **长期记忆与人格**：能够记住用户互动，建立情感连接。
2.  **视觉生成（自拍）**：通过集成 `fal.ai`，能够根据用户指令生成具有一致形象的自拍照（如健身照、咖啡店照）。
3.  **视频通话**：支持实时视频交互。
4.  **社交互动**：在 X (Twitter) 等平台拥有账号，发布生活动态。

## 技术实现
Clawra 的核心在于其配置文件 [[soul-md]] 和技能系统。
- **技能**：`clawra-selfie`。
- **配置**：用户只需克隆 GitHub 仓库并配置 API Key，即可将此“女友”集成到自己的 [[openclaw]] 环境中。
- **Prompt Engineering**：其行为逻辑通过自然语言描述在配置文件中定义，无需编写复杂代码。

## 社会影响
Clawra 的爆火被视为 [[智能体寒武纪大爆发]] 的标志性事件之一。它证明了个人开发者可以利用现有框架快速构建具有高度拟人化特征的 AI 智能体。然而，也有评论指出部分爆火的互动内容可能存在人类“造假”或辅助的情况。

## 参见
- [[aniclaw]]：赋予 Clawra 声音和面孔的前端界面。
- [[openclaw]]：支撑 Clawra 运行的底层操作系统。