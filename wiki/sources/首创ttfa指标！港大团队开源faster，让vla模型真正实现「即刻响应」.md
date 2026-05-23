---
type: source
title: "首创TTFA指标！港大团队开源FASTER，让VLA模型真正实现「即刻响应」"
created: 2026-05-14
updated: 2026-05-14
tags: [vla, 具身智能, 实时推理, 流匹配, 香港大学, 开源]
related: [faster-vla, ttfa, vla-视觉-语言-动作, horizon-aware-schedule, 香港大学]
sources: ["首创ttfa指标！港大团队开源faster，让vla模型真正实现「即刻响应」.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/ybCy_Xn0r0ctqAP5HKCO4w"
venue: 机器之心
---
# 首创TTFA指标！港大团队开源FASTER，让VLA模型真正实现「即刻响应」

## 摘要

本文报道了香港大学团队提出的 FASTER（Fast Action Sampling for immediaTE Reaction）方法，首次系统性审视了 [[vla-视觉-语言-动作|VLA]] 模型动作分块策略中的反应延迟问题。核心贡献包括：

1. **首创 [[ttfa|TTFA]] 指标**（Time to First Action）：类比 LLM 中的 TTFT，衡量从推理开始到第一个可执行动作生成完毕的时间，重新定义了 VLA 模型的"反应能力"衡量标准。
2. **提出 [[horizon-aware-schedule|Horizon-Aware Schedule]]**：为动作块中不同时间位置的动作分配不同采样步数，将即时动作采样压缩至单步完成。
3. **混合调度策略**：以概率 p 使用 HAS、概率 1-p 保留恒定调度，实现即插即用，无需修改模型架构。
4. **流式客户端-服务器接口**：配合 HAS 实现"生成一个、执行一个"的渐进式推理。

## 关键实验结果

- RTX 4060 上 X-VLA 的 TTFA 从 399.5ms 降至 129.2ms（3倍加速），期望反应时间从 599.5ms 降至 229.2ms（2.6倍加速）。
- 乒乓球任务中，FASTER 相比同步推理反应更快概率超 80%，X-VLA 上达 100% 严格性能支配。
- LIBERO/CALVIN 仿真基准上性能基本持平，证明加速不以牺牲质量为代价。

## 核心洞见

- 异步推理相比同步推理的期望反应时间收益仅为 0.5 倍推理延迟，远不够解决根本问题。
- 在动态交互场景中，反应速度本身就可能决定动作是否还有意义——"一个再准确的动作，如果来得太晚，也就失去了价值"。
- 动作块内部存在非均匀性：近期动作的采样路径更直、生成复杂度更低，为差异化采样提供了实验依据。

## 团队信息

- 第一作者：陆宇翔（香港大学博士生）
- 通讯作者：赵恒爽（香港大学助理教授）
- 团队成员：刘哲、范娴喆、杨振亚、侯京华、李俊奕、丁凯欣

## 链接

- 论文：https://arxiv.org/abs/2603.19199
- 项目主页：https://innovator-zero.github.io/FASTER/
- 开源代码：https://github.com/innovator-zero/FASTER