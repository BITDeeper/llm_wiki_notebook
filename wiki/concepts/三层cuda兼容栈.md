---
type: concept
title: 三层CUDA兼容栈
created: 2026-05-14
updated: 2026-05-14
tags: [GPU架构, CUDA兼容, 国产GPU, 代码迁移]
related: [musa架构, 摩尔线程, 生态坐标之争]
sources: ["国产gpu组了个开源局，把sglang等核心开发者都摇来了！.md"]
---
# 三层CUDA兼容栈

[[musa架构|MUSA]] 的核心技术路线，通过三层组件解决国产GPU的CUDA生态迁移痛点。

## 三层架构

1. **torch_musa**：基础能力对接层，将 PyTorch 与 MUSA 的基础计算能力连接
2. **torchada**：CUDA-first 生态兼容层，一行 `import torchada` 即可让99%的 CUDA 代码直接运行
3. **mthreads-ml-py**：设备信息暴露层，将设备管理、拓扑、显存、MTLink、P2P等信息暴露给上层框架

## 解决的痛点

过去适配一个推理框架需要改几千行代码，现在只需在开头加一行 import。这大幅降低了上游开源项目的PR合入阻力，使得适配方案具备低侵入、可维护、可复现的特征。

## 设计哲学

底层实现可以不同，但上层体验尽可能一致。MUSA 不要求开发者重新学习一套东西，而是尽量贴近开发者已熟悉的GPU编程方式。