---
type: entity
title: "HY-World 2.0"
tags: [3d-world-model, tencent, multimodal, open-source]
related: [腾讯混元团队, 世界模型, 3dgs, 空间智能体, marble, worldmirror-2-0]
created: 2026-04-16
updated: 2026-04-16
sources: ["腾讯混元开源世界模型！2.0版本一键生成3d空间，游戏关卡随心造.md"]
---

# HY-World 2.0

[[HY-World 2.0]] 是由 [[腾讯混元团队]] 开发并开源的多模态3D世界模型。它能够理解文字、图片、视频等输入，自动生成、重建和模拟3D世界，并支持导出 Mesh/3DGS 等格式资产，可直接接入 Unity 或 Unreal Engine 游戏工作流。

## 核心特性
-   **多模态输入**：支持文本、草图、图片及视频输入。
-   **可交互资产**：生成的3D场景支持物理碰撞，用户可控制角色进行漫游。
-   **混合表征**：采用 3D Gaussian Splatting ([[3DGS]]) 与 Mesh 混合表征，兼顾渲染速度与物理交互性。
-   **高精度重建**：基于 WorldMirror 2.0 架构，支持任意尺寸输入构建数字孪生空间。

## 技术架构组件
-   **HY-Pano-2.0**：端到端全景图生成模型，无需相机元数据。
-   **空间智能体**：结合 VLM 与 NavMesh 规划漫游轨迹。
-   **HY-WorldStereo**：业界领先的新视角合成（NVS）模型，保证空间一致性。
-   **HY-WorldMirror 2.0**：整合生成片段，优化并输出最终3D场景。

## 对标与优势
与 WorldLabs 的 [[Marble]] 模型相比，HY-World 2.0 在场景完整度（如物体背面生成）和输入遵循度上表现更优，且因支持 Mesh 表征而具备物理交互能力。