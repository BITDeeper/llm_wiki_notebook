---
type: source
title: "告别云端依赖！字节开源新作DreamLite让手机秒变AI画板"
created: 2026-05-12
updated: 2026-05-12
tags: [端侧ai, 扩散模型, 图像生成, 图像编辑, 字节跳动, 开源模型]
related: [dreamlite, 字节跳动智能创作部门, 端侧统一扩散模型, 本地推理, 量化]
sources: ["告别云端依赖！字节开源新作dreamlite让手机秒变-ai-画板.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/QbATASScSyD6AX7nF2dsWw"
venue: 机器之心
---
# 告别云端依赖！字节开源新作DreamLite让手机秒变AI画板

## 摘要

机器之心报道了字节跳动智能创作部门开源的轻量级统一扩散模型 DreamLite。该模型仅 0.39B 参数，在单一网络内同时支持文生图和图像编辑，是目前已知首个实现该能力的端侧模型。在 iPhone 17 Pro 上约 3 秒生成/编辑 1024×1024 图像，全程离线运行。

## 核心内容

- **统一架构**：通过 In-Context 空间拼接机制，将文生图和图像编辑统一到单一模型中，避免端侧双模型部署。
- **渐进式联合预训练**：分三阶段（T2I预训练→编辑预训练→统一联合预训练）解决小模型多任务训练不稳定问题。
- **RLHF对齐 + DMD2步数蒸馏**：通过偏好对齐提升美学质量，通过步数蒸馏将采样压缩至4步，实现端侧秒级生成。
- **基准表现**：GenEval 0.72、DPG 85.8（文生图）；ImgEdit 4.11、GEdit 6.88（编辑），全面超越 SnapGen、SANA 等轻量级单任务模型。
- **端侧部署**：通过量化和部署优化，在 iPhone 17 Pro 上实现完全离线的生成/编辑工作流。

## 关键引用

> "DreamLite 的意义，不只是'在手机上又能跑一个扩散模型'。它更像是在回答一个更根本的问题：当扩散模型进入生产级的移动端时代，'生成'和'编辑'能否作为同一个能力、由同一个小模型来承担？"

## 相关链接

- 论文：https://arxiv.org/abs/2603.28713
- 项目主页：https://carlofkl.github.io/dreamlite/
- GitHub：https://github.com/ByteVisionLab/DreamLite
- 在线 Demo：https://huggingface.co/spaces/carlofkl/DreamLite