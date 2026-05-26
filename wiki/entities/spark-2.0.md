---
type: entity
title: Spark 2.0
tags: [rendering-engine, 3d-gaussian-splatting, webgl, open-source, 开源软件, 3dgs, 渲染引擎]
related: [world-labs, 3d-gaussian-splatting, lod, rad-format, virtual-memory, 李飞飞, aholo-viewer, splat-based-lod-tree, 3d高斯泼溅, forge, marble, 空间智能, 具身智能, sim2real, 群核科技]
created: 2026-04-15
updated: 2026-05-25
sources: ["刚刚，李飞飞世界模型新成果发布.md", "性能超越李飞飞，他们把10亿高斯点的3d世界装进浏览器.md"]
origin_date: 2026-04-01
---

# Spark 2.0

[[Spark 2.0]] 是由 [[李飞飞]] 领衔的 [[World Labs]] 于 2026 年 4 月开源的一款基于 [[Three.js]] 和 [[WebGL2]] 的 3D 高斯溅射（[[3D高斯泼溅]] / 3DGS）渲染引擎。它能够在 Web 端流式渲染包含超过 1 亿个 splats 的超大规模场景，并支持桌面、移动端及 VR 设备。

## 技术背景

Spark 的前身是 World Labs 内部开发的渲染引擎 [[Forge]]。Forge 曾基于 WebGPU 开发，但因兼容性问题未普及。Spark 2.0 转向 [[WebGL2]]，以确保在几乎所有设备上的稳定运行。

## 核心特性

Spark 2.0 的核心优势在于其处理大规模 3D 数据的能力，这主要得益于以下三项技术的融合：

1. **[[细节层次技术]] (LoD) / [[splat-based-lod-tree]]**：采用连续型 LoD 算法（如 Tiny-LoD 和 Bhatt-LoD），从单个高斯点（splat）粒度自下而上做合并，构建层级化的 Gaussian splat tree。这使得引擎能根据物体与相机的距离自动调整渲染细节，避免"跳变"伪影，实现平滑过渡。
2. **[[渐进式流式加载]]**：通过定制的 [[RAD格式]]，引擎优先加载当前视角所需的细节数据。场景会以一个粗糙版本（64K splats）快速呈现，随后随着数据下载不断细化。
3. **[[虚拟内存]]**：在 GPU 中预分配固定内存池（约 1600 万个 splats），通过页表映射和 LRU 算法管理数据的加载与置换。这使得有限的显存能够渲染远超其容量的海量数据。

## 优势与局限

### 优势
- 逐层加载细节，理论上层级切换感不突兀
- 基于 WebGL2，兼容性广泛，可在几乎所有设备上稳定运行

### 劣势（与 [[Aholo Viewer]] 对比）
- 实际体验中细节切换感仍然比较明显
- 内存和显存开销较大
- 后期扩展性偏弱，难以灵活结合其他优化手段
- 容量上限约为 1 亿高斯点（Aholo Viewer 的 1/10）

## 应用场景

作为 [[World Labs]] 技术栈的展示层，Spark 2.0 与其 [[Marble]] 模型协同工作，为 [[空间智能]]、[[具身智能]] 及 [[Sim2Real]] 研究提供了高保真的可视化与交互工具。

## 行业意义

Spark 2.0 的开源引发了技术圈对 3DGS 浏览器渲染的广泛关注，直接推动了 [[群核科技]] 推出 [[Aholo Viewer]]，两者在同一窗口期形成竞争性格局。