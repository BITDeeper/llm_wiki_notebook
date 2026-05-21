---
type: entity
title: Spark 2.0
tags: [rendering-engine, 3d-gaussian-splatting, webgl, open-source]
related: [world-labs, 3d-gaussian-splatting, lod, rad-format, virtual-memory]
created: 2026-04-15
updated: 2026-04-15
sources: ["刚刚，李飞飞世界模型新成果发布.md"]
---

# Spark 2.0

[[Spark 2.0]] 是由 [[World Labs]] 开源的一款基于 [[Three.js]] 和 [[WebGL2]] 的 3D 高斯溅射渲染引擎。它能够在 Web 端流式渲染包含超过 1 亿个 splats 的超大规模场景，并支持桌面、移动端及 VR 设备。

## 核心特性

Spark 2.0 的核心优势在于其处理大规模 3D 数据的能力，这主要得益于以下三项技术的融合：

1.  **[[细节层次技术]] (LoD)**：采用连续型 LoD 算法（如 Tiny-LoD 和 Bhatt-LoD），构建层级化的 Gaussian splat tree。这使得引擎能根据物体与相机的距离自动调整渲染细节，避免“跳变”伪影，实现平滑过渡。
2.  **[[渐进式流式加载]]**：通过定制的 [[RAD格式]]，引擎优先加载当前视角所需的细节数据。场景会以一个粗糙版本（64K splats）快速呈现，随后随着数据下载不断细化。
3.  **[[虚拟内存]]**：在 GPU 中预分配固定内存池（约 1600 万个 splats），通过页表映射和 LRU 算法管理数据的加载与置换。这使得有限的显存能够渲染远超其容量的海量数据。

## 技术背景

Spark 的前身是 World Labs 内部开发的渲染引擎 [[Forge]]。Forge 曾基于 WebGPU 开发，但因兼容性问题未普及。Spark 2.0 转向 [[WebGL2]]，以确保在几乎所有设备上的稳定运行。

## 应用场景

作为 [[World Labs]] 技术栈的展示层，Spark 2.0 与其 [[Marble]] 模型协同工作，为 [[空间智能]]、[[具身智能]] 及 [[Sim2Real]] 研究提供了高保真的可视化与交互工具。