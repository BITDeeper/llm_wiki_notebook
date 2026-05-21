---
type: source
title: "西湖大学破解Rectified Flow反演不稳定难题，实现零成本稳定增强｜ICLR'26"
tags: [rectified-flow, 反演, 图像编辑, 西湖大学, iclr-26]
related: [pmi, rectified-flow, 反演, 西湖大学, 张驰, 王晨如, mimic-cfg, 平均流结构]
created: 2026-03-01
updated: 2026-03-01
authors: [王晨如, 张驰]
year: 2026
url: "https://mp.weixin.qq.com/s/PLtIBzdY_ehX4CptmvDOhQ"
venue: "ICLR 2026"
sources: ["西湖大学破解rectified-flow反演不稳定难题，实现零成本稳定增强｜iclr'26.md"]
---

# 西湖大学破解Rectified Flow反演不稳定难题，实现零成本稳定增强

## 摘要
西湖大学张驰研究团队提出了一种名为 **PMI (Prox-Mean-Inversion)** 的算法，成功解决了新一代生成架构 [[rectified-flow]] 在反演阶段面临的数值不稳定难题。该方法无需修改模型结构或进行额外训练，即可实现“零成本”的稳定增强，相关论文已被 ICLR 2026 接收。

## 核心背景
随着生成式 AI 的发展，应用需求已从单纯的“生成”转向“可控生成”与“智能编辑”。这要求模型必须具备稳定的 **[[反演]]** 能力，即能将输入图像准确映射回其潜在表示空间。

[[rectified-flow]] 凭借高效的 ODE 推理和光滑的生成轨迹，正成为替代扩散模型的重要方向（如 [[Flux.1]]、[[Stable Diffusion 3]]）。然而，其在反演阶段存在根本性的 **[[数值不稳定]]** 问题：
- 逆向路径对误差高度敏感，容易偏离前向轨迹。
- 噪声在逆向传播中被放大，导致重建失败。

## 解决方案：PMI 算法
团队提出的 **[[pmi]]** 是一种基于 Proximal Operator 的轻量修正机制。

### 核心原理
利用 RF 模型内部固有的 **[[平均流结构]]**，在逆向 ODE 的每一步加入修正项，将反演轨迹锚定在模型的平均流上，从而抑制偏移与发散。

### 关键特性
- **即插即用**：无需修改模型结构，可直接集成到现有 RF 模型中。
- **零成本**：不增加推理时间复杂度，不引入额外参数。
- **通用性**：适用于 Flux.1、SD3 等多种主流 RF 架构。

## 辅助策略：Mimic-CFG
在图像编辑中，常用的无分类器引导（CFG）虽然能增强指令遵循度，但往往导致图像身份（ID）丢失。PMI 团队提出了 **[[mimic-cfg]]** 策略：
- 将引导速度投影到历史平均方向。
- 在大幅修改内容（如“给猫戴帽子”）的同时，确保未编辑区域（如猫的身份、背景纹理）保持一致。

## 实验结果
在 **[[PIE-Bench]]** 评测中，PMI 表现优异：
- **重建保真度**：PSNR 指标显著高于基线方法（如 Vanilla RF-Inversion, FireFlow）。
- **感知相似度**：LPIPS 指标最低，证明在人类视觉感知上与原图高度一致。
- **效率**：在更短的推理时间内即可收敛。

## 意义
PMI 为 Flow 模型在实际编辑系统中的落地提供了关键组件，使得本地编辑、条件控制、视频一致性等任务获得了更稳定的基础。

## 元数据
- **机构**：[[西湖大学]] AGI 实验室
- **作者**：[[王晨如]]（第一作者），[[张驰]]（指导老师）
- **论文链接**：[Free Lunch for Stabilizing Rectified Flow Inversion](https://arxiv.org/pdf/2602.11850)
- **代码仓库**：[GitHub](https://github.com/WinterCCC/ICLR26--Free-Lunch-for-Stabilizing-Rectified-Flow-Inversion)