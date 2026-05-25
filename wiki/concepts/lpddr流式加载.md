---
type: concept
title: LPDDR流式加载
created: 2026-05-24
updated: 2026-05-24
tags: [ai基础设施, 内存优化, 硬件生态, 国产芯片]
related: [deepseek, kv-cache压缩, ssd卸载, engram模块]
sources: ["梁文锋与deepseek的十万亿美元棋盘.md"]
---
# LPDDR流式加载

LPDDR流式加载是将模型权重暂存于LPDDR内存、按需流式传输到HBM的技术方案，是[[deepseek|DeepSeek]]硬件生态重构战略的第二层。

## 技术原理

- SGLang团队研究表明，LPDDR可作为"权重暂存区"
- 模型权重先放在LPDDR中，需要时再流式传输到HBM
- 大幅缓解HBM的容量压力

## 与MoE架构的天然适配

DeepSeek的MoE（混合专家模型）架构天然适配LPDDR流式加载：

- 专家数量多，但每次推理只激活部分专家
- 权重可以4bit量化
- 流式加载效率高

## 国产芯片意义

- 国产LPDDR只落后0.5代（速度）到1代（密度）
- 追赶差距远小于GPU领域
- 为国产芯片"换道超车"提供现实路径