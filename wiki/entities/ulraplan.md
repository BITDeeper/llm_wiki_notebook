---
type: entity
title: Ultraplan
tags: [anthropic, feature, cloud-planning, claude-code]
related: [claude-code, 云端规划, token-粉碎机, ai-subscription-crisis]
created: 2026-04-07
updated: 2026-04-07
sources: ["claude灾难级大宕机，全球开发者集体炸锅！anthropic三连翻车被怒喷.md"]
---

# Ultraplan

[[Ultraplan]] 是 [[Anthropic]] 为其 [[Claude Code]] 工具推出的一项云端规划功能，于 2026 年 4 月 6 日随 v2.1.92 版本发布。

## 功能定义
Ultraplan 旨在将 AI 辅助开发的规划过程从本地终端迁移到云端服务器。其主要特性包括：
- **云端生成**：在云端生成详细的项目执行路径规划。
- **本地释放**：生成规划期间释放本地终端资源，用户无需持续等待。
- **Web 界面**：提供功能更丰富的网页界面，支持查看规划细节、内联注释及添加评论。
- **执行选择**：用户可选择在云端（需连接 GitHub 仓库）或发回本地终端执行规划。

## 争议与问题

### 史诗级宕机
Ultraplan 上线当天即遭遇大规模服务中断，导致 [[Claude Code]] 出现满屏报错。由于频繁要求用户重新登录且无法成功，该功能被社区戏称为“Ultralogin”或“OnlyPlans”。

### 成本争议
Ultraplan 被指为典型的 [[Token 粉碎机]]。其“云优先”的工作流会在云端生成极其庞大的详细计划，导致 Token 消耗呈指数级上升。虽然云端规划速度比本地快约 2 倍，但代价是极高的经济成本，加剧了 [[ai-subscription-crisis]]。

### 稳定性风险
该功能高度依赖网络稳定性和云端服务可用性。一旦出现网络抖动、Token 超限或服务器故障，整个工作流将面临瘫痪风险。

## 社区评价
尽管部分用户认可其浏览器端计划审阅体验（如侧边导航、Emoji 反馈）提升了迭代效率，但开发者普遍认为 Anthropic 过于激进地追求云端算力优势，忽视了生产环境对稳定性、成本和可控性的核心需求。