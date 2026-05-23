---
type: source
title: "清华等开源KVPO：首个原生支持ODE的视频对齐强化学习框架，长视频质量提升28.4%"
created: 2026-05-20
updated: 2026-05-20
tags: [视频生成, 强化学习, 偏好对齐, 自回归模型, 清华大学, 开源]
related: [kvpo, 视频偏好对齐, 自回归视频生成, 清华大学, 香港科技大学]
sources: ["清华等开源kvpo：首个原生支持ode的视频对齐强化学习框架，长视频质量提升28.4%.md"]
authors: [清华大学, 香港科技大学, Video-Rebirth]
year: 2026
url: "https://mp.weixin.qq.com/s/plIt36_aQ7iRL8861ACmdw"
venue: 我爱计算机视觉
---
# 清华等开源KVPO：首个原生支持ODE的视频对齐强化学习框架，长视频质量提升28.4%

本文报道了[[清华大学]]、[[香港科技大学]]及 Video Rebirth 团队联合提出的 [[kvpo]]（Key-Value Preference Optimization）框架——首个原生支持 ODE 采样的[[视频偏好对齐|视频偏好对齐]]强化学习框架。

## 核心内容

文章指出，主流[[自回归视频生成|自回归视频生成]]模型采用确定性 ODE 采样，但传统对齐方法（如 Flow-GRPO、DanceGRPO）需将 ODE 强行转为 SDE 并注入噪声，导致[[流形偏移]]和语义匮乏两大缺陷。

KVPO 的核心创新在于：
1. **[[因果历史路由]]（CHR）**：通过随机重组局部历史 KV 缓存实现语义层面的探索，而非像素级噪声扰动。
2. **[[轨迹速度能量]]（TVE）**：在模型原生速度场空间内计算残差，将偏好优化转化为奖励加权的[[对比流匹配]]目标。

## 关键数据

- 在 LongLive 模型上：短视频视觉质量（VQ）提升 15.2%，文本对齐度（TA）提升 200%。
- 多提示词长视频生成：视觉质量提升 28.4%，语义一致性和过渡自然度显著改善。
- 在 MemFlow 模型上也验证了有效性。

## 资源链接

- 论文：arXiv:2605.14278
- 代码：github.com/Richard-Zhang-AI/KVPO（已开源）
- 项目主页：richard-zhang-ai.github.io/KVPO-Project