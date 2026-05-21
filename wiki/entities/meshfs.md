---
type: entity
title: MeshFS
created: 2026-01-16
updated: 2026-01-16
tags: [file-system, storage, performance]
related: [aimesh, xsky星辰天合, io墙]
sources: ["minimax都在用！5500pb幕后功臣首次亮相，国产黑马祭出杀招.md"]
---

# MeshFS

MeshFS 是 [[XSKY星辰天合]] [[AIMesh]] 架构中的第一张网——**训练数据网**。其主要任务是解决 AI 训练过程中的 [[IO墙]] 问题，确保数据能够高速、稳定地供给 GPU。

## 技术构成
MeshFS 并非从零开始构建，而是融合了 XSKY 两项核心技术：
*   **XGFS**：深耕七年的企业级文件系统。
*   **XSEA**：代表极致性能的全闪存底座。

## 性能表现
通过深度融合，MeshFS 在保持对 POSIX、S3、HDFS 等全协议兼容的同时，实现了显著的性能提升：
*   **顺序读带宽**：比主流方案提升 30%。
*   **顺序写带宽**：比主流方案提升 50%。

## 价值
MeshFS 能够让数据“如电流般”极速供给 GPU，有效解决了因存储读写速度滞后导致的 GPU 空转问题，提升了昂贵的算力资源的利用率。