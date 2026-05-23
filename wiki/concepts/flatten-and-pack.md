---
type: concept
title: Flatten & Pack
created: 2026-05-13
updated: 2026-05-13
tags: [推理优化, 系统工程, GPU]
related: [echo-弹性投机解码, sglang]
sources: ["icml-2026-spotlight-拒绝盲目猜token，阿里x浙大将投机解码带入弹性预算时代.md"]
---
# Flatten & Pack

Flatten & Pack 是 [[echo-弹性投机解码]] 集成到 [[sglang]] 推理框架时使用的关键系统技术。

## 功能

将不同请求产生的非规则（ragged）候选 token 树打包成 dense、kernel-compatible 的布局，再交给目标模型进行一次性验证。

## 重要性

很多动态投机树方法在原始 transformer 实验中有效，但进入真实 serving 框架时会遇到 ragged batch 与 kernel 兼容性问题。如果算法产生的动态树结构无法高效进入 serving kernel，理论上的 token 节省很可能被系统开销抵消。

ECHO 的设计目标不是单点优化 MAT（Mean Acceptance Time），而是在真实高并发推理系统中提升 end-to-end goodput。
