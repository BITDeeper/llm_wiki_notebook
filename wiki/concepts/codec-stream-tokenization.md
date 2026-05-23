---
type: concept
title: Codec-Stream Tokenization
created: 2026-05-21
updated: 2026-05-21
tags: [视频理解, 码流原生, tokenization, 视觉表征]
related: [codec-native视觉建模, ov-encoder, llava-onevision-2, 预测式编码先验]
sources: ["llava-onevision-2迈向下一代感知智能的视觉语言大模型.md"]
---
# Codec-Stream Tokenization

Codec-Stream Tokenization 是 [[llava-onevision-2]] 提出的流级、bit-cost-aware 的视觉 Token 分配机制。它将 [[ov-encoder]] 的单帧 Codec Patchification 升级为跨时序的连续证据流组织方式。

## 核心直觉

"Token 跟着比特率走，而不是跟着秒表走。"用压缩流的 P/B 帧字节数当作"语义增量"代理，比特率峰值自适应地切分时序组，组内再用运动残差挑出真正发生变化的区块。

## 四步流水线

### ① GOP Partition（自适应 GOP 划分）
按时间 bin 聚合 P/B 帧字节数，累积比特率达到阈值即触发组边界，再做局部低谷搜索锁定切分。事件密集处形成短组，平稳处形成长组。

### ② Scoring（运动残差打分）
结合稠密运动场 M(x) 与归一化残差 R(x)，并融入 Patch 级比特率先验，对 2×2 Patch 区块进行评分，确保选出的视觉证据既空间相干又编码可靠。

### ③ Block Selection（区块选择）
以 2×2 Patch 区块为最小选择单元（与编码器内部的 2×2 Merge 操作对齐），避免下游合并来自不同区域的不相干 Token。

### ④ Canvas Packing（画布打包）
每个 GOP 输出一张锚定 I-canvas 和若干 P-canvas，构成 (I + P₁ … Pₙ₋₁) 的紧凑画布序列。

## 性能优势

- 固定 Token 预算下，时间定位 +9.7 分增益（相对均匀采帧）
- 支持高达 87.5% 的长视频压缩比（128k → 16k Patch）而不丢关键瞬间
- 在 7 类视频基准上，不同 Token 预算下均优于均匀采帧