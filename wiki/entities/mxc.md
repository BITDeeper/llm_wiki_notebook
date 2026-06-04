---
type: entity
title: MXC（Microsoft执行容器）
created: 2026-06-03
updated: 2026-06-03
tags: [微软, 安全, 沙盒, agent, 操作系统]
related: [微软, openclaw, agent操作系统, 微软build-2026]
sources: ["16亿windows用户，一夜冲进agent时代！.md"]
---
# MXC（Microsoft执行容器）

微软在Build 2026大会上推出的操作系统级Agent沙盒策略层。Agent能访问哪些文件、能不能碰剪贴板、能不能联网，全部由策略定义，Windows内核强制执行。

## 四档隔离机制

1. **进程级隔离**：处理轻量任务
2. **会话级隔离**：做用户分离
3. **虚拟机（含WSL）**：提供更强边界
4. **Windows 365**：完全隔离的云端环境

## 安全演示

Build 2026现场演示了惊悚一幕：工程师让[[openclaw]]删光桌面上所有文件，结果被MXC的只读沙箱死死摁住，94张图片纹丝不动。

[[peter-steinberger]]对此评价："看着一个Claw想删光你的桌面文件却失败了，我真的太开心了。因为六个月前，这绝对能成功。"

## 战略意义

MXC解决了Agent安全的核心难题——如何在让Agent拥有强大执行力的同时，防止其造成不可逆损害。这是Windows从操作系统转型为Agent运行时的安全基石。
