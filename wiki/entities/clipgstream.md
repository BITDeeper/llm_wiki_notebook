---
type: entity
title: ClipGStream
created: 2026-05-30
updated: 2026-05-30
tags: [4d重建, 动态高斯, 开源框架, cvpr-2026, 计算机视觉]
related: [clip-stream混合训练, 动态高斯泼溅, cvpr-2026]
sources: ["cvpr26开源-clipgstream：首个同时支持大运动和长序列的4d重建框架，动态高斯重建新sota.md"]
origin_date: 2026-04-01
---
# ClipGStream

ClipGStream 是一个开源的 4D 动态场景重建框架，由北京大学深圳研究生院、鹏城实验室和咪咕视频联合研发。该工作已被 [[cvpr-2026|CVPR 2026]] 接收，代码已在 GitHub 开源。

## 核心定位

ClipGStream 是首个同时支持大运动和长序列的 4D 重建框架，通过 [[clip-stream混合训练|Clip-Stream 混合训练]] 框架打破了动态重建中"时长-质量-显存"的不可能三角。

## 技术架构

### Clip-Stream 混合训练
将输入的多视角视频帧切分为多个短片段（clip），以 clip 为单位进行流式训练。第一个 clip 作为 Reference Clip，后续 clip 作为 Source Clip。

### 动静态特征解耦
- **静态特征**：负责学习场景外观等信息
- **动态特征**：负责表征运动的可见性

通过解耦设计，Source Clip 可继承静态信息保证 clip 间时域一致性，同时独立训练动态特征保证运动建模。

### 继承与补偿策略
- **锚点继承（AI）**：Source Clip 继承 Reference Clip 的锚点、静态特征和解码器，继承组件在优化过程中保持冻结
- **锚点补偿（RAC）**：引入残差锚点捕获新出现或发生位移的结构

## 实验表现

- 成功处理 **1400 帧**长视频和高速动态场景
- 消融实验证明 AI 和 RAC 模块对抑制闪烁、维持时域一致性缺一不可
- 解码器继承策略显著提升后续 clip 渲染清晰度
- 在多组公开基准上达到 SOTA

## 应用前景

- 自由视角体育直播
- VR/MR 沉浸式内容
- 数字人
- Volumetric Video

## 作者与机构

- **第一作者**：Jie Liang（梁杰）
- **联合作者**：Jiahao Wu, Chao Wang, Jiayu Yang, Xiaoyun Zheng, Kaiqiang Xiong, Zhanke Wang, Jinbo Yan, Feng Gao, Ronggang Wang
- **机构**：北京大学深圳研究生院（广东省超高清沉浸式媒体技术重点实验室）、鹏城实验室、咪咕视频

## 关键链接

- 论文：https://arxiv.org/pdf/2604.13746
- 主页：https://liangjie1999.github.io/ClipGStreamWeb/
- 代码：https://github.com/liangjie1999/ClipGStream