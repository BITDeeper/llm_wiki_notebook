---
type: entity
title: TriAttention
created: 2026-05-14
updated: 2026-05-14
tags: [kv-cache, 推理优化, 开源, mit, 英伟达]
related: [kv-cache压缩, 本地推理, 量化, openclaw, vllm, mlx, turboquant]
sources: ["英伟达mit出手！华人团队重磅开源，大模型推理内存暴降10倍.md"]
origin_date: 2026-04-01
---
# TriAttention

TriAttention 是由 MIT CSAIL、英伟达研究院、浙江大学联合开发的 KV cache 选择性压缩方法，可在几乎不牺牲精度的前提下大幅降低大模型推理的显存占用。

## 核心原理

TriAttention 在 pre-RoPE 空间中，利用 Q/K 的三角集中度（triangular concentration）来估计每个 KV token 的重要性，然后只保留真正重要的 token，丢弃不重要的。

类比说明：传统 [[kv-cache压缩|量化方法]] 像把所有行李都塞进压缩袋，不管里面是羽绒服还是砖头一律压扁；TriAttention 则是先翻一遍行李箱，把砖头扔掉，只给羽绒服打包。

## 性能数据

| 指标 | 数值 |
|------|------|
| KV cache 内存缩减 | 10.7倍 |
| 吞吐量提升 | 2.5倍 |
| 准确率（AIME25, [[qwen3-8b]]） | 40.8%（与Full Attention持平） |
| 生成长度测试 | 32K token |

主实验覆盖 AIME24、AIME25、MATH500 等基准测试。

## 部署案例

[[qwen3-32b]]（AWQ INT4 量化）在单张 RTX 4090（24GB）上完成 [[openclaw]] agent 任务：读取6份 markdown 文档并生成完整周报。不压缩时显存直接爆掉，开启 TriAttention 后顺利运行。

## 工程化状态

- **[[vllm]] 插件**：已就位，支持 OpenAI 兼容 API server mode、Python API 及 OpenClaw 接入
- **[[mlx]] 支持**：实验性，覆盖 M1 到 M4 全系芯片，基于 mlx-lm 运行
- **GitHub 仓库**：https://github.com/WeianMao/triattention
- **论文**：arXiv 2604.04921

## 路线定位

TriAttention 属于 [[kv-cache压缩]] 赛道中"选择性保留派"的代表，与 [[turboquant]] 代表的"量化派"形成路线对比。两者方法论不同但终点一致：让大模型跑在消费级硬件上。理论上两者可叠加使用。

## 核心贡献者

- [[weian-mao]]（MIT CSAIL）
- [[yukang-chen]]（英伟达 Research）
- [[xi-lin]]（浙江大学）
- [[wei-huang]]（香港大学 / NVIDIA Research 实习生）
- [[song-han]]（MIT / 英伟达，指导者）