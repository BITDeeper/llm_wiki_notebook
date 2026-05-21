---
type: source
title: "马斯克的GPU也在摸鱼？狂囤几十万张显卡，只有11%在干活"
created: 2026-05-04
updated: 2026-05-04
tags: [ai-hardware, mfu, xai, elon-musk, infrastructure, efficiency]
related: [mfu, xai, colossus-xai, 记忆墙, deepseek-v4]
authors: ["新智元", "元宇"]
year: 2026
url: "https://mp.weixin.qq.com/s/a0OytrGAobTMheQkH1urhA"
venue: "新智元"
sources: ["马斯克的gpu也在摸鱼？狂囤几十万张显卡，只有11%在干活.md"]
---
# 马斯克的GPU也在摸鱼？狂囤几十万张显卡，只有11%在干活

## 摘要
本文报道了 [[xAI]] 旗下的 [[Colossus (xAI)|Colossus]] 超算集群虽然拥有全球最大规模的 GPU（约 20 万张），但其 [[MFU]]（模型浮点运算利用率）仅为 11%。[[xAI]] 总裁 [[Michael Nicolls]] 在内部备忘录中称这一数字“低得尴尬”，并设定了未来几个月提升至 50% 的目标。文章分析了低 MFU 的原因（如 [[记忆墙]]、通信开销、激活重计算等），并指出 AI 行业的竞争焦点正从单纯的硬件规模（CapEx）转向工程效率（MFU）。

## 核心数据
- **当前 MFU**：约 11%（远低于行业平均的 35%-45%）。
- **行业基准**：[[英伟达]] Megatron-LM 在 H100 集群上的 MFU 为 42%-47%。
- **目标**：在未来几个月内将 MFU 提升至 50%。

## 关键论点
1. **系统级瓶颈**：低 MFU 并非硬件故障，而是源于显存压力、网络拓扑瓶颈、过度重计算及并行策略不当等系统级问题。
2. **行业普遍性**：跑过 40% 对大多数竞争对手来说也是难题，行业内存在为了保住 GPU 配额而人为刷高 MFU 数据的现象。
3. **战略转型**：[[xAI]] 开始将 GPU 租给外部客户（如 [[Cursor]]），这表明其算力过剩，正在从单纯的“自训模型”转向“云厂商模式”以摊薄成本。
4. **KPI 切换**：AI 竞赛的关键绩效指标正从“硬件规模”转向“工程效率”。

## 相关实体
- [[Elon Musk]]：[[xAI]] 创始人，主导了大规模 GPU 囤货策略。
- [[Michael Nicolls]]：[[xAI]] 总裁，负责提升算力利用率。
- [[Cursor]]：编程工具开发商，计划租用 [[xAI]] 的数万张 GPU。

## 参考对比
- [[DeepSeek V4]]：与 [[xAI]] 的“资本扩张”路线不同，[[DeepSeek]] 代表了极致的“软件工程优化”路线，强调在有限硬件上压榨性能。