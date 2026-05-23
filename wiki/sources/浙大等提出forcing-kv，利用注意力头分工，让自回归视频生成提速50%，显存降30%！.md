---
type: source
title: "浙大等提出Forcing-KV，利用注意力头分工，让自回归视频生成提速50%，显存降30%！"
created: 2026-05-18
updated: 2026-05-18
tags: [视频生成, kv-cache, 自回归模型, 推理优化, 浙江大学]
related: [forcing-kv, 注意力头动静分工, 自回归视频扩散模型, kv-cache压缩]
sources: ["浙大等提出forcing-kv，利用注意力头分工，让自回归视频生成提速50%，显存降30%！.md"]
authors: [浙江大学, 重生视界, 香港科技大学, 北京交通大学]
year: 2026
url: "https://mp.weixin.qq.com/s/AemiHYJigbEtswo5Gz0P6Q"
venue: 我爱计算机视觉
---
# 浙大等提出Forcing-KV，利用注意力头分工，让自回归视频生成提速50%，显存降30%！

## 摘要

本文报道了浙江大学联合重生视界、香港科技大学和北京交通大学提出的 [[forcing-kv]] 方法。该方法利用自回归视频扩散模型中注意力头的 [[注意力头动静分工|动静分工]] 特性，通过混合 [[kv-cache压缩|KV Cache 压缩]] 策略，实现推理加速50%、显存降低30%，且生成质量无损甚至更优。

## 核心内容

### 问题背景
自回归视频扩散模型（如 [[self-forcing]]、[[longlive]]）采用分块生成策略，随着视频变长，KV Cache 显存占用急剧增长（30秒视频可达60GB+），计算复杂度呈二次方增长。

### 核心发现
研究团队发现视频模型注意力头存在稳定的功能分化：
- **静态头**：负责局部过渡和块间衔接，关注当前块和转换锚帧
- **动态头**：负责全局运动捕捉，在历史帧中寻找空间对应区域
- 该分工跨样本、跨去噪步骤高度稳定

### 方法：Forcing-KV 三步策略
1. **离线头分析**：推理前通过短试跑将注意力头分类为静态/动态
2. **静态结构剪枝**：对静态头删除远距离历史缓存，仅保留转换锚帧和当前块
3. **动态相似性剪枝**：对动态头基于相邻帧片段余弦相似度进行自适应冗余删除

### 实验结果
- LongLive 上 1.30x 加速，Self Forcing 上 1.50x 加速
- KV Cache 显存减少约 30%
- 60秒长视频总分超过无压缩基线（80.43 vs 80.23）
- H200 上达到 29+ FPS
- 在 14B 参数模型 [[krea-realtime]] 上同样有效
- 与 [[量化|FP8 量化]] 兼容

### 开源生态
代码已开源，支持 Self Forcing、LongLive、Causal Forcing、Krea、Raven 等模型，集成 Forcing-KV、Dummy Forcing、Teacache、FP8 量化等加速方法，以及 [[vbench]]、Helios Bench 等评测基准。

## 关键链接
- 论文：https://arxiv.org/abs/2605.09681
- 项目主页：https://zju-jiyicheng.github.io/Forcing-KV-Page
- 代码仓库：https://github.com/zju-jiyicheng/forcing-kv