---
type: source
title: "MoE不够看了，腾讯推出MoT：2B具身模型22项评测16项最佳"
tags: [embodied-ai, tencent, mot-architecture, robotics, vlm]
related: [hy-embodied-0-5, 腾讯混元团队, mot-架构, 拒绝采样微调, 在线蒸馏, 具身智能数据困境]
created: 2026-04-09
updated: 2026-04-09
authors: [腾讯混元团队]
year: 2026
url: "https://mp.weixin.qq.com/s/i_yvYKe-vdCXWb2qOGMuKg"
venue: "量子位"
sources: ["moe不够看了，腾讯推出mot：2b具身模型22项评测16项最佳.md"]
---

# MoE不够看了，腾讯推出MoT：2B具身模型22项评测16项最佳

## 摘要
腾讯混元团队联合腾讯 Robotics X 实验室推出了专为具身智能设计的 HY-Embodied-0.5 系列模型。该系列包含主打端侧部署的 MoT-2B（总参数 4B，激活 2B）和追求极致性能的 MoE-32B。通过创新的 [[MoT-架构]]（混合 Transformer）和大规模高质量具身数据训练，MoT-2B 在 22 项评测中获得 16 项最佳，超越了参数量更大的通用模型和专用具身模型。

## 核心观点
- **通用模型的局限**：通用视觉语言模型（VLM）在物理环境中表现笨拙，缺乏精细的三维空间感知和物理交互预测能力。
- **架构创新**：提出 [[MoT-架构]]（Mixture-of-Transformers），通过为视觉分支赋予非共享参数和双向注意力机制，解决了小模型在多模态训练中的“灾难性遗忘”问题。
- **数据策略**：构建了包含视觉感知、空间感知和具身感知三个层级的“大规模高质量具身+空间数据”。
- **训练范式**：采用多阶段长链推理后训练，引入 [[拒绝采样微调]] 和 [[在线蒸馏]]，将大模型能力高保真转移给端侧小模型。

## 关键数据
- **评测成绩**：MoT-2B 在 22 项评测中获 16 项最佳，超越 Qwen3-VL-4B 和 RoboBrain2.5。
- **实机表现**：在打包、堆叠、悬挂等实机任务中，HY-Embodied 基座优于 pi0 和 pi0.5 初始化的模型。
- **旗舰性能**：MoE-32B（总参数 407B，激活 32B）综合成绩与 Gemini 3.0 Pro 抗衡。

## 技术细节
- **HY-ViT 2.0**：原生分辨率视觉编码器，针对端侧打造了 400M 参数的高效版本。
- **Visual Latent Tokens**：在视觉输入序列末尾追加专属 Token，接受超大 ViT 全局特征监督，作为连接视觉与文本的桥梁。
- **VLA 应用**：将 VLM 底座应用在 VLA（视觉-语言-动作）模型上，直接接管机器人控制。

## 相关链接
- GitHub: https://github.com/Tencent-Hunyuan/HY-Embodied
- Huggingface: https://huggingface.co/tencent/HY-Embodied-0.5