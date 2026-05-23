---
type: source
title: "SIGGRAPH 26 | 视频版Vision-Banana来了？大一统框架UniVidX刷新多项视频任务SOTA"
created: 2026-05-11
updated: 2026-05-11
tags: [视频生成, 扩散模型, 多模态, 计算机图形学, siggraph]
related: [unividx, 香港科技大学-mmlab, 视频扩散先验, 多模态条件生成统一建模]
sources: ["siggraph-26-视频版vision-banana来了？大一统框架unividx刷新多项视频任务sota.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/uZxRn8-mclTuqPabFSBoLA"
venue: 机器之心
---
# SIGGRAPH 26 | 视频版Vision-Banana来了？大一统框架UniVidX刷新多项视频任务SOTA

本文由机器之心发布，报道了香港科技大学 MMLab 及合作团队的研究工作 [[unividx]]，该论文被计算机图形学顶级会议 SIGGRAPH 2026 正式接收。

## 核心内容

[[unividx]] 提出了一个面向多模态视频生成与理解的一体化统一框架，将传统上割裂的15类视频图形任务整合到单一模型中，实现"任意模态到任意模态"的统一建模能力。

### 关键技术设计
- [[随机条件掩码]]：训练时动态改变输入/输出模态划分，学习全方向生成关系
- [[解耦门控-lora]]：为不同模态分配独立参数空间，避免模态间参数干扰
- [[跨模态自注意力]]：在不同模态间共享信息，实现几何、光照与语义层面的统一约束

### 核心发现
- 不足千条视频数据即可达到或超过现有最优方法，体现极高数据效率
- 在 PSNR、SSIM、LPIPS 等定量指标上整体优于现有扩散模型方法
- 仅用合成数据训练即在真实世界 MAW 数据集上取得最佳强度误差指标
- 视频抠图任务中，作为无需辅助 mask 输入的方法优于多种依赖 mask 的方法

### 作者信息
- 第一作者：[[陈厚源]]（南京大学本科生，即将入学港科大 MMLab）
- 通讯作者：[[饶安逸]]（港科大 MMLab 教师）
- 合作作者：[[lvmin-zhang]]（斯坦福大学博士生，ControlNet、IC-Light 作者）
- 指导教师：[[赵昊]]（清华大学教师）

## 关联条目
- [[机器之心]] — 来源媒体
- [[原生理解生成统一]] — 方法论层面的呼应概念
- [[ai-for-science]] — 利用预训练先验实现高数据效率的研究范式