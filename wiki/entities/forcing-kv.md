---
type: entity
title: Forcing-KV
created: 2026-05-18
updated: 2026-05-18
tags: [视频生成, kv-cache, 推理优化, 开源项目]
related: [注意力头动静分工, 自回归视频扩散模型, kv-cache压缩, 浙江大学]
sources: ["浙大等提出forcing-kv，利用注意力头分工，让自回归视频生成提速50%，显存降30%！.md"]
origin_date: 2026-05-01
---
# Forcing-KV

Forcing-KV 是一种针对 [[自回归视频扩散模型]] 的 KV Cache 混合压缩方法，由 [[浙江大学]] 联合重生视界、[[香港科技大学]] 和 [[北京交通大学]] 提出。

## 核心思想

Forcing-KV 基于一个关键发现：视频扩散模型中的注意力头存在稳定的 [[注意力头动静分工]]——静态头负责局部过渡，动态头负责全局运动。利用这一特性，Forcing-KV 对不同类型的注意力头采用差异化的压缩策略。

## 三步策略

1. **离线头分析（Offline Head Profiling）**：推理前通过短试跑将注意力头分类为静态/动态。分类结果跨样本和去噪步骤高度稳定。浅层和深层网络多为静态头，中间层密布动态头。
2. **静态结构剪枝（Static Structural Pruning）**：对静态头直接删除远距离历史缓存，仅保留转换锚帧（上一块最后一帧）和当前块，贡献主要显存节省。
3. **动态相似性剪枝（Dynamic Similarity Pruning）**：对动态头基于相邻帧片段余弦相似度进行自适应冗余删除。仅用 DiT 第一层特征作为代理计算，无需全层计算。

## 性能表现

| 指标 | 数值 |
|------|------|
| 推理加速（LongLive） | 1.30x |
| 推理加速（Self Forcing） | 1.50x |
| KV Cache 显存减少 | ~30% |
| 60秒长视频总分 | 80.43（超过无压缩基线 80.23） |
| H200 推理速度 | 29+ FPS |

## 扩展性

- 在 14B 参数模型 [[krea-realtime]] 上同样有效
- 随视频分辨率和生成长度增加，加速效果更显著
- 与 [[量化|FP8 量化]] 兼容，可叠加使用

## 开源生态

代码已开源（https://github.com/zju-jiyicheng/forcing-kv），支持多种模型（Self Forcing、LongLive、Causal Forcing、Krea、Raven）和多种加速方法（Forcing-KV、Dummy Forcing、Teacache、FP8 量化）。