---
type: entity
title: PhoneWorld
created: 2026-06-06
updated: 2026-06-06
tags: [mobile-agent, 模拟环境, 训练基础设施, 腾讯混元]
related: [腾讯混元, mobile-agent, 环境-scaling, mock-android-app, 页面级-prd]
sources: ["ai手机时代，mobile-agent最缺是更真实的世界.md"]
origin_date: 2026-05-01
---
# PhoneWorld

PhoneWorld 是由 [[腾讯混元]] 牵头联合港中深、人大高瓴、武汉大学等机构推出的手机智能体环境基础设施项目。该项目旨在解决 [[mobile-agent|Mobile Agent]] 缺乏可规模化、可验证训练环境的问题。

## 核心架构与构建流程

PhoneWorld 的核心在于将真实 App 转化为 [[mock-android-app|Mock Android App]]，其构建流程包括：
1. **结构恢复**：从真实用户截图和操作轨迹中提取页面结构、导航路径和状态变化。
2. **生成 PRD**：为关键页面生成结构化的 [[页面级-prd|页面级 PRD]]，作为构建 Mock App 的“施工图”。
3. **构建数据层**：建立包含只读内容（商品、帖子等）和可变状态（收藏、购物车等）的可控数据层。
4. **自动生成与审计**：由 Coding Agent 生成 Kotlin/Jetpack Compose 项目，编译为 APK，并经过自动测试和人工审计。

## 数据集规模

PhoneWorld 构建了一套完整的手机环境基础设施：
- 34 个 Mock Android App
- 覆盖 16 个消费级移动应用领域
- 120 个经过人工审计的评测任务
- 3,354 条成功轨迹
- 36,193 个交互步骤

## 实验结果与 Scaling 潜力

实验表明，PhoneWorld 环境能有效提升模型在外部真实基准测试上的表现。随着交互步数（0 到 36K）和 App 多样性（5 到 34 个）的增加，模型任务成功率呈现持续上升的趋势，证明了 [[环境-scaling|环境规模化]] 路径的有效性。

PhoneWorld 证明了模拟环境不能完全脱离真实数据，而是通过与真实 App 数据互补，共同推动 Mobile Agent 的能力边界。