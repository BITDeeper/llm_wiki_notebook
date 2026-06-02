---
type: entity
title: NVIDIA Agent Toolkit
created: 2026-06-01
updated: 2026-06-01
tags: [框架, 英伟达, agent, 工具链]
related: [英伟达, agent原生计算, nemotron-3-ultra, openclaw, codex, claude-code]
sources: ["刚刚，老黄重新发明pc！全球首个agent原生电脑问世.md"]
origin_date: 2026-06-01
---
# NVIDIA Agent Toolkit

[[英伟达]] 在2026年GTC大会发布的四层Agent系统架构，为 [[agent原生计算]] 提供完整软件栈。黄仁勋称"这四层叠起来，就是一个无敌的Agent系统"。

## 四层架构

1. **模型层**：[[nemotron-3-ultra]]，约5500亿总参数，每token激活550亿
2. **框架层**：支持 [[claude-code]]、[[codex]]、[[openclaw]] 等各种Agent直接运行
3. **工具和技能层**：CUDA X库全部附带skills文件，Agent自学即用
4. **运行时层**：OpenShell，英伟达开源安全运行时，Apache 2.0协议

## Agent+Harness架构

黄仁勋提出传统计算机运行逻辑（应用层+代码+操作系统）被新架构取代：

- **Agent**：负责输入与感知、推理与规划、工具调用与行动，加上短期和长期记忆
- **Harness**：类似操作系统，负责连接一切、调度信息

这一架构与 [[任务执行范式]] 和 [[操作系统agent]] 概念形成直接呼应，但将其从软件层面提升到硬件+软件全栈重构的高度。

## 应用案例

英伟达与Cadence联合打造芯片设计超级Agent：Codex负责总指挥，Cadence ChipStack启动RTL验证循环，底层跑Nemotron模型，外层套OpenShell做安全。验证周期从数周压缩至数小时，加速超40倍。