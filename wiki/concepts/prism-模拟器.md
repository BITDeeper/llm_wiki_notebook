---
type: concept
title: Prism 模拟器
created: 2026-06-01
updated: 2026-06-01
tags: [模拟器, 兼容层, ARM, Windows, 微软]
related: [微软, windows-on-arm, rtx-spark]
sources: ["刚刚，英伟达重新定义pc！史上最高效cpu来了.md"]
---
# Prism 模拟器

Prism 模拟器是 [[微软]] 为 [[windows-on-arm|Windows on ARM]] 开发的 x86 应用兼容层，使传统 x86 架构的应用程序和游戏能够在 Arm 处理器上运行。

## 在 RTX Spark 中的作用

[[rtx-spark|RTX Spark]] 采用 Arm 架构 CPU，传统 x86 游戏和应用需要通过 Prism 模拟器实现兼容。微软还与反作弊系统厂商（Epic Easy Anti-Cheat、BattlEye）进行了底层深度合作，确保主流多人在线游戏在模拟环境下正常加载运行。

## 已确认兼容的游戏

- 《英雄联盟》
- 《无畏契约》（VALORANT）
- 《绝地求生》（PUBG）
- 《心灵杀手 2》（Alan Wake 2）

## 待观察问题

Prism 模拟器的性能损耗问题尚未充分讨论。模拟器方案在计算密集型场景下的实际帧率表现和稳定性仍需独立测试验证。