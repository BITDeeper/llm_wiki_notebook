---
type: concept
title: SSD卸载
created: 2026-05-24
updated: 2026-05-24
tags: [ai基础设施, 存储优化, 硬件生态]
related: [kv-cache压缩, deepseek, lpdpr流式加载, engram模块]
sources: ["梁文锋与deepseek的十万亿美元的棋盘.md", "梁文锋与deepseek的十万亿美元棋盘.md"]
---
# SSD卸载

SSD卸载是将压缩后的KV Cache高效存储到SSD（固态硬盘）上、需要时再加载回HBM（高带宽内存）的技术方案，是[[deepseek|DeepSeek]]硬件生态重构战略的第一层。

## 技术原理

1. [[kv-cache压缩|KV Cache压缩]]至极小体积（5.48GB vs 竞品60GB）
2. 压缩后的缓存可高效卸载（offload）到SSD上
3. 需要时快速加载回HBM
4. DeepSeek在Dual Path论文中专门优化了从SSD加载KV Cache的速度

## 产业影响

- 直接减少对昂贵HBM的依赖
- 为NAND闪存和SSD创造AI推理场景的庞大新市场
- DeepSeek每压缩一分KV Cache，就在为NAND和SSD厂商创造新需求