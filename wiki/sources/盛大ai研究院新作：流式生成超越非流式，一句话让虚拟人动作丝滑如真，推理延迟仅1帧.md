---
type: source
title: "盛大AI研究院新作：流式生成超越非流式，一句话让虚拟人动作丝滑如真，推理延迟仅1帧"
tags: [ai-research, motion-generation, streaming, cvpr-2026, diffusion-model]
related: [flooddiffusion, 流式生成, 扩散强制, 盛大ai研究院, 东京大学]
created: 2026-04-14
updated: 2026-04-14
authors: [Yiyi Cai, Yuhan Wu, Kunhang Li, You Zhou, Bo Zheng, Haiyang Liu]
year: 2026
url: "https://mp.weixin.qq.com/s/lcPuM6MJnWWpdTi_RP5IOw"
venue: "CVPR 2026 Highlight (量子位报道)"
sources: ["盛大ai研究院新作：流式生成超越非流式，一句话让虚拟人动作丝滑如真，推理延迟仅1帧.md"]
---

# 盛大AI研究院新作：流式生成超越非流式，一句话让虚拟人动作丝滑如真，推理延迟仅1帧

**摘要**：本文报道了盛大AI研究院（东京）与东京大学联合提出的 [[FloodDiffusion]] 框架。这是首个基于定制化 [[扩散强制]]（Diffusion Forcing）的流式人体动作生成框架，解决了传统非流式模型无法实时交互、以及现有流式模型首帧延迟高和动作僵硬的问题。该成果入选 **CVPR 2026 Highlight**。

## 核心成果

FloodDiffusion 实现了：
- **零延迟**：推理延迟仅1帧。
- **无限长生成**：支持随时间变化的文本流输入，生成无限长的动作序列。
- **丝滑过渡**：动作质量超越现有流式模型，甚至接近非流式 SOTA 模型。

## 技术创新

针对原始扩散强制框架在动作生成上的分布坍塌和训练-推理不一致问题，FloodDiffusion 提出了三项定制化改进：

1.  **下三角时间调度**：
    - 采用确定性的噪声调度策略，确保序列中存在一个“活动窗口”。
    - 窗口前为已去噪帧，窗口后为纯噪声。
    - 从数学上保证了流式推理时的生成质量与完整模型一致，并实现了恒定的计算开销。

2.  **窗口内双向注意力**：
    - 在滑动窗口内使用双向注意力机制，而非因果注意力。
    - 解决了不同去噪阶段帧的信息利用问题，防止性能断崖式下降。

3.  **连续时变文本调节**：
    - 摒弃了传统的“显式刷新”机制（即检测到新提示词后清空缓存重算）。
    - 采用逐帧文本条件注入，利用 [[T5]] 编码器和旋转位置编码，实现从“走路”到“跑步”的自然无缝切换。

## 架构细节

- **隐空间扩散**：使用 [[因果VAE]] 将263维原始动作编码为4维隐空间序列，降低流式延迟。
- **DiT 骨干**：去噪器基于 [[DiT]] (Diffusion Transformer) 架构，使用共享时间嵌入路径。

## 性能表现

- **HumanML3D 基准**：FID 达到 **0.057**，显著优于流式竞品 PRIMAL (0.511) 和 MotionStreamer (0.092)，接近非流式 SOTA MoMask (0.045)。
- **BABEL 数据集**：在过渡平滑度指标（Peak Jerk, Area Under Jerk）上全面领先。
- **用户研究**：100人参与的盲测显示，FloodDiffusion 在动作质量、过渡自然度和指令一致性上均显著优于竞品。

## 应用场景

该技术为实时交互游戏 NPC、虚拟主播及机器人控制等场景提供了高质量的流式动作生成解决方案。未来工作将扩展至音频、力反馈、环境信息等更多时变条件的融合。

## 链接

- 论文地址：https://arxiv.org/abs/2512.03520
- 项目主页：https://shandaai.github.io/FloodDiffusion/
- 代码：https://github.com/ShandaAI/FloodDiffusion