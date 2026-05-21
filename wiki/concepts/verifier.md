---
type: concept
title: 验证器
tags: [agent, safety, validation]
related: [skillcraft, skill-library]
created: 2026-04-01
updated: 2026-04-01
sources: ["让agent把成功经验固化成skills，跨模型复用成功率100%.md"]
---

# 验证器

**验证器**（Verifier）是 [[skillcraft]] 框架中用于检查生成的技能是否正确、可用的机制。

## 作用

验证器是确保 [[skill-library]] 质量的关键防线。在 Agent 将成功轨迹抽象为技能并存入库中之前，必须先通过验证器的检查。这一机制旨在防止错误的技能被入库，避免“技能污染”（即错误的技能被反复复用）。

## 重要性

在追求 [[skill-reuse]] 带来的效率提升的同时，验证器保证了系统的鲁棒性。没有验证器，错误的技能可能会像病毒一样扩散，导致后续任务失败。