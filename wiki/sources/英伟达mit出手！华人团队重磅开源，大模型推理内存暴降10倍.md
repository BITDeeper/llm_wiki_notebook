---
type: source
title: "英伟达MIT出手！华人团队重磅开源，大模型推理内存暴降10倍"
created: 2026-05-14
updated: 2026-05-14
tags: [kv-cache, 推理优化, triattention, 本地部署, 开源]
related: [triattention, kv-cache压缩, 本地推理, 量化, openclaw]
sources: ["英伟达mit出手！华人团队重磅开源，大模型推理内存暴降10倍.md"]
authors: [新智元, 元宇]
year: 2026
url: "https://mp.weixin.qq.com/s/iUQyNUnphYiJAacVKwViAg"
venue: 新智元
---
# 英伟达MIT出手！华人团队重磅开源，大模型推理内存暴降10倍

新智元2026年5月14日报道，介绍MIT、英伟达、浙大华人研究者联合开发的 [[triattention]] 方法，实现KV cache内存缩减10.7倍、吞吐量提升2.5倍。

## 核心内容

报道聚焦 [[kv-cache压缩]] 赛道的"选择性保留"路线，以 [[triattention]] 为代表。核心思路是在pre-RoPE空间中利用Q/K三角集中度评估每个KV token的重要性，只保留真正重要的token。

## 关键数据

- AIME25数学推理任务（[[qwen3-8b]]）：匹配Full Attention准确率（40.8%）下，吞吐量提升2.5倍，KV cache内存缩减10.7倍
- 真实部署案例：[[qwen3-32b]]（AWQ INT4量化）在单张RTX 4090上完成 [[openclaw]] agent任务（读6份文档生成周报）
- 主实验覆盖AIME24、AIME25、MATH500，32K token生成长度

## 工程化进展

- [[vllm]] 插件已就位，支持OpenAI兼容API server mode
- [[mlx]] 实验性支持，覆盖M1到M4全系芯片

## 路线对比

报道将 [[kv-cache压缩]] 赛道分为两条路线：[[turboquant]] 代表的量化派与 [[triattention]] 代表的选择性保留派，并指出两者理论上可叠加使用。

## 核心研究者

- [[weian-mao]]（MIT CSAIL博士后）
- [[yukang-chen]]（英伟达Research）
- [[xi-lin]]（浙江大学本科生）
- [[wei-huang]]（香港大学博士生，NVIDIA Research实习生）
- [[song-han]]（MIT/英伟达，指导者）