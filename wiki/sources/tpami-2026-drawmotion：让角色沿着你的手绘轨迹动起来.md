---
type: source
title: "TPAMI 2026 | DrawMotion：让角色沿着你的手绘轨迹动起来"
created: 2026-05-22
updated: 2026-05-22
tags: [motion-generation, diffusion-model, hand-drawing, 3d-human-motion, tpami]
related: [drawmotion, 中间特征引导, 多条件模块, 手绘条件运动生成, 我爱计算机视觉]
sources: ["tpami-2026-drawmotion：让角色沿着你的手绘轨迹动起来.md"]
authors: [北京邮电大学, EVOL创新团队]
year: 2026
url: "https://mp.weixin.qq.com/s/XHyawM7kF6MXMioTM-5MDA"
venue: 我爱计算机视觉
---
# TPAMI 2026 | DrawMotion：让角色沿着你的手绘轨迹动起来

本文由 [[我爱计算机视觉]] 发布，深度拆解了 [[北京邮电大学]] 与 [[EVOL创新团队]] 联合提出的 [[drawmotion|DrawMotion]] 框架——一个面向手绘条件的3D人体运动生成系统，论文发表于 TPAMI 2026。

## 核心内容

文章指出，纯文本控制在表达精确空间轨迹和复杂时序动作方面存在固有局限。DrawMotion 允许用户通过手绘2D轨迹和火柴人姿态作为控制信号，结合文本语义，引导3D人体运动生成。

框架包含三大核心设计：

1. **手绘条件编码**：将用户手绘的轨迹和 stickman 编码为可参与扩散生成的条件特征。
2. **[[多条件模块]]（MCM）**：在扩散模型训练中统一处理文本、轨迹、姿态等多种条件组合，将不同条件映射为运动特征的偏移并融合，避免为每种组合单独设计通路。
3. **[[中间特征引导]]（IFG）**：一种训练无关的推理引导方法，在 DDIM 采样过程中通过计算空间对齐损失并使用 SGD 更新 MCM 的中间特征，配合 [[马氏距离裁剪]] 防止特征偏离训练分布。

## 关键数据

- KIT-ML 数据集上轨迹误差从 0.126 降至 0.069，FID 保持在 0.141 左右
- 用户研究表明，生成符合想象的复杂动作所需时间减少约 46.7%
- 代码已在 GitHub 开源，预印本发布于 arXiv (abs/2605.20955)

## 延伸意义

文章强调 MCM + IFG 的控制思路具有广泛迁移潜力，可应用于视频生成、图像编辑、3D内容生成、机器人轨迹生成和物理仿真控制等领域。