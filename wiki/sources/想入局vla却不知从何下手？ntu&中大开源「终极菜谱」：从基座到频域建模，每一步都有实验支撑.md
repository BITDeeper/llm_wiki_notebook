---
type: source
title: "想入局VLA却不知从何下手？NTU&中大开源「终极菜谱」：从基座到频域建模，每一步都有实验支撑"
created: 2026-03-02
updated: 2026-03-02
tags: [vla, 具身智能, 开源, 系统性设计, 量子位]
related: [vlanext, mmlabntu, 中山大学, 动作分块, 流匹配, 频域建模, 柔性连接, 本体感觉]
authors: [伍晓鸣, 廖康, 郑伟诗, 吕健勤]
year: 2026
url: "https://mp.weixin.qq.com/s/qc_clQTgYv2wHnyrOv6leQ"
venue: "量子位"
sources: ["想入局vla却不知从何下手？ntu&中大开源「终极菜谱」：从基座到频域建模，每一步都有实验支撑.md"]
---

# 想入局VLA却不知从何下手？NTU&中大开源「终极菜谱」：从基座到频域建模，每一步都有实验支撑

## 概述
本文报道了由 [[MMLab@NTU]] 与 [[中山大学]] 联合开源的 [[VLANeXt]] 模型。该研究针对当前 [[vla-视觉-语言-动作]] 领域设计碎片化、缺乏统一标准（被称为“原始汤”）的现状，提供了一份经过 12 个关键维度系统性实验验证的“终极菜谱”。

## 核心发现
研究团队从类似 [[RT-2]] 的基线模型出发，通过控制变量法，在基础组件、感知要素和动作建模三个层面进行了详尽的消融实验，最终构建了性能超越 7B 参数 SOTA 模型（如 [[OpenVLA-OFT]]）的 2B 级模型。

### 关键设计决策
1.  **基础组件**：
    *   采用独立的 Policy 模块，而非复用文本 Token。
    *   引入 [[动作分块]]（Action Chunking，Chunk size > 4），同时提升推理速度与性能。
    *   使用 [[流匹配]]（Flow Matching）替代离散分类，实现更强的连续动作建模。
    *   选用 [[Qwen3VL-2B]] 作为 VLM 基座。
    *   采用 [[柔性连接]]（Soft Connection）连接 VLM 与 Policy 模块。

2.  **感知要素**：
    *   放弃冗余的时序历史观察，仅使用当前帧图像。
    *   结合第三人称与腕部视角的多视角输入。
    *   将 [[本体感觉]]（Proprioception）通过 Linear 层注入到 VLM 端，效果优于注入 Policy 端。

3.  **动作建模**：
    *   放弃导致训练时间飙升三倍的“世界模型”路径。
    *   引入 [[频域建模]]（Frequency Domain Modeling），利用 DCT 变换在频域对齐动作序列，几乎零成本提升预测效果。

## 性能表现
在标准基准 [[LIBERO]] 及泛化性测试 LIBERO-plus 上，VLANeXt 全面超越现有方法。特别是在未见过的光照、背景、相机位姿等扰动下，成功率较此前最佳方法提升 10%。此外，模型还展现了跨形态适应能力，在未专门训练的情况下完成了双臂协作任务。

## 团队背景
*   **第一作者**：[[伍晓鸣]]（NTU MMLab 博士生）。
*   **共同作者**：[[廖康]]（NTU MMLab 博士后）、[[郑伟诗]]（中山大学教授）。
*   **通讯作者**：[[吕健勤]]（NTU 校长讲席教授，MMLab 主任，CVPR 2026 程序主席）。

## 链接
*   论文：https://arxiv.org/abs/2602.18532
*   代码：https://github.com/DravenALG/VLANeXt
*   权重：https://huggingface.co/DravenALG/VLANeXt