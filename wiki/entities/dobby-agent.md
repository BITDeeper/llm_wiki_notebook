---
type: entity
title: Dobby Agent
tags: [smart-home, claude, api, agent]
related: [andrej-karpathy, claude-code, 智能胶水]
created: 2026-03-21
updated: 2026-03-21
sources: ["刚刚，karpathy确诊「ai精神病」！不吃不睡每天16小时养龙虾.md"]
---

# Dobby Agent

Dobby 是 [[andrej-karpathy]] 开发的一个基于 [[claude-code]] 的智能家居管家智能体，名字来源于《哈利·波特》中的家养小精灵。

## 功能与实现

Dobby 被设计为通过自然语言指令统一管理家庭环境，其核心能力包括：

- **自动发现与接入**：通过局域网 IP 扫描发现未保护的设备（如 Sonos 音响），逆向工程 API 端点并接入。
- **跨系统联动**：整合了灯光、空调、遮阳帘、游泳池、水疗池等原本孤立的系统。
- **视觉监控**：结合 Qwen 视觉模型进行变化检测，当有车辆（如 FedEx 货车）停在门口时，通过 WhatsApp 发送通知。
- **自然语言交互**：用户只需说「多比，睡觉时间到了」，即可触发全屋设备的关闭操作。

## 意义：App 的终结

Karpathy 认为，Dobby 的实验证明了传统 App 模式的过时。过去管理这些设备需要 6 个不同的 App，而现在 Dobby 充当了 [[智能胶水]] 的角色。

这预示着未来的软件架构将发生根本性变化：
- **API 优先**：设备和服务应直接暴露 API 端点给智能体，而非封装在封闭的 App 中。
- **智能体作为用户**：行业的客户将不再是人类，而是代表人类行事的智能体。
- **服务重组**：智能体能实现任何单个 App 都无法做到的跨系统联动和自动化流程。