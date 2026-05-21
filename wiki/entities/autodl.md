---
type: entity
title: AutoDL
tags: [云平台, 算力租赁, 深度学习]
related: [摩尔线程, mtt-aibook, 端云一体]
created: 2026-01-21
updated: 2026-01-21
sources: ["摩尔线程aibook一周实测：开箱即训的「ai-native」体验.md"]
---

# AutoDL

AutoDL 是一个云算力租赁平台，与 [[摩尔线程]] 有深度合作。

## 在 MTT 生态中的角色
在 [[mtt-aibook]] 的 [[端云一体]] 工作流中，AutoDL 扮演了云端算力提供者的角色。用户可以在 AIBOOK 上通过 SSH 直接连接到 AutoDL 的云端实例，这些实例配备了全功能的摩尔线程 GPU（如 MTT S4000）。

## 体验优势
- **无缝衔接**：本地编写的 PyTorch 代码可以直接在云端实例上运行，无需修改。
- **低成本验证**：开发者可以在本地进行小规模调试，确认无误后利用云端算力进行大规模训练，优化了资源使用效率。