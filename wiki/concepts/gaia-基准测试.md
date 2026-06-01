---
type: concept
title: GAIA 基准测试
created: 2026-05-30
updated: 2026-05-30
tags: [基准测试, 智能体, 评测]
related: [autogenesis-system-ags, hle-humanitys-last-exam]
sources: ["leetcode-c++近满分！autogenesis要给智能体装上「自进化操作系统」.md"]
---
# GAIA 基准测试

GAIA 是一个通用智能体评测基准（General AI Assistant benchmark），用于评估 AI 智能体在多种真实世界任务上的综合解决能力。

## 评测结构

GAIA 按任务难度分为多个级别（Level 1、Level 2、Level 3），其中 Level 3 为最高难度。评测涵盖推理、多模态处理、网页浏览、工具使用等多种能力维度。

## AGS 在 GAIA 上的表现

[[autogenesis-system-ags|AGS]] 在 GAIA 上取得了突破性成绩：

| 分割 | 准确率 | 备注 |
|------|--------|------|
| Validation | 93.33% | Agent-Evo 版本 |
| Test | 89.04% | 较 baseline 提升 12.61% |
| Level 3（难题） | 81.63% | 从 61.22% 提升，相对提升 33.34% |

Level 3 难题的显著提升表明，自进化机制对复杂多步推理任务的增益尤为突出。