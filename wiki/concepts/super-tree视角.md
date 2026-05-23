---
type: concept
title: Super-Tree 视角
created: 2026-05-13
updated: 2026-05-13
tags: [投机解码, 大模型推理, 批次调度]
related: [echo-弹性投机解码, 验证预算调度, 投机解码]
sources: ["icml-2026-spotlight-拒绝盲目猜token，阿里x浙大将投机解码带入弹性预算时代.md"]
---
# Super-Tree 视角

Super-Tree 视角是 [[echo-弹性投机解码]] 提出的核心建模方式，将 batch 内所有请求的候选 token 树看作统一的 Super-Tree。

## 核心思想

在每个投机解码 step 中，batch 内有 B 个并发请求。对于第 i 个请求，其候选树包含 K_i 个待验证 token。目标模型实际要验证的是整个 batch 中所有候选节点的并集。

ECHO 对其施加全局约束：ΣK_i ≤ K_max，其中 K_max 代表当前硬件和 serving 系统在 compute-bound 区间附近能够承受的验证上限。

## 范式转变

这一视角使投机解码从"每个请求独立扩树"转变为"多个请求共享一个全局预算池"，带来了关键变化：给某个请求多分配一个候选 token，就意味着其他请求可用预算减少。
