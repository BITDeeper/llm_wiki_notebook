---
type: concept
title: Engram模块
created: 2026-05-24
updated: 2026-05-24
tags: [ai架构, 内存计算, 硬件生态, 国产芯片]
related: [deepseek, kv-cache压缩, lpdpr流式加载, tilelang]
sources: ["梁文锋与deepseek的十万亿美元棋盘.md"]
---
# Engram模块

Engram模块是用LPDDR中的哈希查表替代Transformer前向传播计算的创新架构，是[[deepseek|DeepSeek]]硬件生态重构战略的第三层。

## 核心思想

**用每比特成本极低的"内存读取"替代每比特成本极高的"GPU运算"。**

传统方式：GPU执行Transformer前向传播 → 高FLOPs需求 → 依赖顶级芯片
Engram方式：LPDDR中哈希查表 → 低成本内存读取 → 降低对顶级GPU的依赖

## 对中国AI芯片的意义

- 国产GPU因EUV光刻机受限，在原始FLOPs上落后
- Engram模块将竞争维度从"算力比拼"转向"内存效率"
- 如果能用更多便宜内存替代更少昂贵算力，"换道超车"变得合理

## 技术成熟度

目前处于研究/论文阶段，尚未有大规模实际部署的公开证据。