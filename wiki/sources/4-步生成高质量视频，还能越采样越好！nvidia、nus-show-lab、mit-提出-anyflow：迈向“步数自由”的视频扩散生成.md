---
type: source
title: "4步生成高质量视频，还能越采样越好！NVIDIA、NUS Show Lab、MIT提出AnyFlow：迈向步数自由的视频扩散生成"
created: 2026-05-18
updated: 2026-05-18
tags: [视频生成, 扩散模型, 蒸馏, NVIDIA, NUS, MIT]
related: [anyflow, 流图蒸馏, 测试时扩展性, 视频扩散模型]
sources: ["4-步生成高质量视频，还能越采样越好！nvidia、nus-show-lab、mit-提出-anyflow：迈向“步数自由”的视频扩散生成.md"]
authors: [Yuchao-Gu, Guian-Fang, Yuxin-Jiang, Weijia-Mao, Song-Han, Han-Cai, Mike-Zheng-Shou]
year: 2026
url: "https://mp.weixin.qq.com/s/ZVa4Mm3uZ3QgBQsZBnM9tw"
venue: "我爱计算机视觉"
---
# 4步生成高质量视频，还能越采样越好！NVIDIA、NUS Show Lab、MIT提出AnyFlow

## 来源信息

- **发布日期**：2026年5月18日
- **来源媒体**：我爱计算机视觉（微信公众号）
- **论文标题**：AnyFlow: Any-Step Video Diffusion Model with On-Policy Flow Map Distillation
- **arXiv编号**：2605.13724
- **项目主页**：https://nvlabs.github.io/AnyFlow/
- **开源代码**：https://github.com/NVLabs/AnyFlow

## 核心内容

本文介绍了由 [[nvidia]]、[[nus-show-lab]]、[[mit]] 联合提出的 [[anyflow]] 视频扩散蒸馏方法。该方法通过 [[流图蒸馏]] 和 [[在策略流图蒸馏]] 实现了"步数自由"的视频生成——同一模型在4步即可生成高质量视频，且随着采样步数增加质量持续提升。

### 核心创新

1. **[[流图蒸馏]]**：将蒸馏目标从"终点一致性映射"改为"任意时间点之间的流图跃迁"，使模型学习完整采样轨迹。
2. **[[在策略流图蒸馏]]**：让模型在自己的采样轨迹上被校正，消除少步离散化误差和因果生成中的 [[暴露偏差]]。
3. **[[流图反向模拟]]**：利用流图的组合性质，将完整欧拉轨迹分解为多个捷径跃迁片段，高效模拟不同推理步数下的采样轨迹。

### 实验结果

- 在 [[vbench]] 评测基准上，AnyFlow-FAR-Wan2.1-14B 在4 NFEs下I2V达87.87，接近 Wan2.1-I2V-14B 在50×2 NFEs下的87.71。
- 在因果和双向两类视频扩散架构上均有效。
- 覆盖1.3B到14B参数规模，验证了可扩展性。
- 相比 [[一致性蒸馏]] 方法（如rCM、Self-Forcing），AnyFlow在多步采样时不会出现性能下降。

### 关联概念

- [[测试时扩展性]]：AnyFlow的核心卖点，与 [[scaling-law]] 在推理阶段的新体现相关。
- [[视频扩散模型]]：AnyFlow所在的技术领域。
- [[wan2.1]]：实验中使用的14B参数视频扩散骨干模型。
- [[far-模型]]：因果视频生成骨干模型，与AnyFlow结合形成AnyFlow-FAR。