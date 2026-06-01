---
type: source
title: "LeetCode C++近满分！Autogenesis要给智能体装上「自进化操作系统」"
created: 2026-05-30
updated: 2026-05-30
tags: [智能体, 自进化, 协议架构, 多智能体系统, 代码生成, 基准测试]
related: [autogenesis-protocol-agp, autogenesis-system-ags, 自进化架构, 多agent协作架构, 闭环自进化流程]
sources: ["leetcode-c++近满分！autogenesis要给智能体装上「自进化操作系统」.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/nQXjwCTJIuaQEi6EQpVNIg"
venue: 机器之心
---
# LeetCode C++近满分！Autogenesis要给智能体装上「自进化操作系统」

本文报道了来自南洋理工大学、斯坦福大学、普林斯顿大学等机构的联合团队提出的面向智能体自我进化的双层协议架构 **Autogenesis Protocol（AGP）**，以及基于该协议构建的 **Autogenesis System（AGS）**。

## 核心内容

文章指出，当前智能体系统已具备较强的外部连接能力（MCP、A2A），但缺少面向自进化的协议。当智能体需要在运行过程中修改自身组件时，缺乏可追踪、可回滚、可审计的治理机制。

AGP 将自进化拆分为两层：
- **RSPL（资源基底协议层）**：定义"什么可以被进化"，将 Prompt、Agent、Tool/MCP/Skill、Environment、Memory 五类组件抽象为协议级资源。
- **SEPL（自进化协议层）**：定义"如何安全地进化"，将自我改进形式化为 Reflect → Select → Improve → Evaluate → Commit 的闭环流程。

## 关键性能数据

- **GAIA 基准**：Validation 达 93.33%，Test 达 89.04%，较 baseline 提升 12.61%。Level 3 难题提升 33.34%。
- **HLE（Humanity's Last Exam）**：59.6%，排名第二。
- **LeetCode Benchmark**：100 道题、五种语言测试，C++ 和 Java 接近满分，自进化显著减少编译错误和运行时错误。

## 核心论点

Autogenesis 的核心贡献不是刷分，而是提出了"自进化需要协议化治理"的理念，将智能体内部组件从"代码工程"推向"资源治理"。

## 关联

- 论文链接：https://arxiv.org/abs/2604.15034
- GitHub：https://github.com/DVampire/Autogenesis
- 第一作者：[[张文涛]]（南洋理工大学）、[[赵哲]]（斯坦福大学）、[[温海斌]]（香港城市大学）
- 通讯作者：[[王梦迪]]（普林斯顿大学）、[[安波]]（南洋理工大学）、[[尹明]]（普林斯顿大学）