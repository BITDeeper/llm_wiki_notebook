---
type: concept
title: 自适应GOP划分
created: 2026-05-21
updated: 2026-05-21
tags: [视频编码, GOP, 码流原生, 自适应]
related: [codec-stream-tokenization, codec-native视觉建模, llava-onevision-2]
sources: ["llava-onevision-2迈向下一代感知智能的视觉语言大模型.md"]
---
# 自适应GOP划分

自适应 GOP 划分是 [[codec-stream-tokenization]] 四步流水线的第一步，用压缩流的 P/B 帧字节数作为"语义增量"代理来自适应切分时序组。

## 工作原理

1. 按时间 bin 聚合 P/B 帧字节数
2. 累积比特率达到阈值即触发组边界
3. 做局部低谷搜索锁定切分点

## 效果

- 事件密集处形成短组（更多 Token 分配）
- 平稳处形成长组（更少 Token 分配）
- 实现"事件密集处密 Token，平稳处稀 Token"的自适应分配

## 与传统固定 GOP 的区别

传统方法使用固定 GOP 大小或等距采帧，不感知视频内容的变化强度。自适应 GOP 划分直接利用码流中的比特率信息作为语义增量的代理，无需额外的学习或启发式规则。