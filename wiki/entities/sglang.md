---
type: entity
title: SGLang
tags: ["inference-engine", "open-source", "llm", "system-optimization", "推理引擎", "开源", "ai框架", "推理框架", "ai基础设施", "开源项目", "大模型部署", "大模型", "大模型服务", "llm-serving", "系统优化"]
related: ["radixark", "miles", "deepseek-v4", "day-0-兼容性", "shadowradix-前缀缓存", "musa", "vllm", "摩尔线程", "qwen3-7-max", "平头哥真武m890", "musa架构", "mooncake", "tilelang", "vibe-coding", "p-d分离", "prefill-decode分离架构", "mtt-s5000", "echo-弹性投机解码", "投机解码", "oscar-kv-quantization", "together-ai", "kv-cache-量化"]
created: 2026-05-09
updated: 2026-05-29
sources: ["1亿美金！英伟达amd英特尔破天荒联手，投给了这支团队.md", "老黄喝豆汁「破防」背后，国产gpu正在填上cuda护城河.md", "阿里让qwen3.7-max模拟创业，一年“营收”1400万.md", "国产gpu组了个开源局，把sglang等核心开发者都摇来了！.md", "国产gpu首获全球顶级推理框架「原生门票」：musa合入sglang主线.md", "icml-2026-spotlight-拒绝盲目猜token，阿里x浙大将投机解码带入弹性预算时代.md", "超越turboquant，面向长上下文推理的真2-bit-kv-quantization算法问世.md"]
---

# SGLang

[[SGLang]] 是一个高性能的全球顶级开源大语言模型（LLM）和多模态模型推理引擎（推理框架 / LLM serving framework），由 [[RadixArk]] 团队核心成员开发。它是连接大模型与底层硬件的关键中间层，支持高效的模型部署和推理。自2023年诞生以来，它已迅速成长为事实上的行业标准。GitHub 27k星，面向 LLM 和多模态模型的低延迟、高吞吐部署框架，覆盖从单卡到大规模分布式集群的部署场景，是全球开发者部署大模型的首选框架之一。SGLang 提供 Triton 官方参考实现。DeepSeek V3 的 EP 与 PD 分离方案即出自该社区。

## 核心特性

- **[[Day-0 兼容性]]**：能够在新模型架构（如MoE、长上下文、多模态）发布的当天提供无缝支持与优化。
- **极致性能**：每天处理数万亿token的生产流量，性能逼近硬件物理极限。
- **大规模部署**：全球部署规模超过40万张GPU。
- **高并发推理服务**：工业级框架，支持高并发推理服务场景。

## 技术架构与优化

为了支持复杂模型的高效运行，SGLang 包含多项底层系统优化技术：

- **[[p-d分离|Prefill-Decode 分离架构]]**：结合分层缓存机制，支撑 DeepSeek-V4 等大模型的高效推理。
- **[[ShadowRadix 前缀缓存]]**：提升推理效率的关键缓存技术。
- **Zero-overhead Speculative Decoding**：零开销推测解码，提升解码效率。
- **[[echo-弹性投机解码|ECHO 弹性投机解码]]**：已集成到 SGLang 中，通过 Flatten & Pack 机制将非规则候选 token 树打包为 dense、kernel-compatible 的布局，确保动态树结构能高效进入 serving kernel。ECHO 团队计划于 2026 年 6 月向 SGLang 提交 MR，推动代码开源和社区复现。
- **Flash Compressor**
- **Lightning TopK**

## 与 OSCAR 的集成

[[oscar-kv-quantization]] 已接入 SGLang，实现开箱即用的 2-bit KV serving。在 SGLang 中的具体实现包括：

- 维护 token 池：BF16 sink（64 tokens）| INT2 history（约 2.28 BPE）| BF16 recent（256 tokens）
- 融合 Triton kernel 执行 rotate/clip/quantize/pack 操作
- 兼容 paged KV、radix prefix cache 和 fused kernel pipeline
- 支持 online softmax merge 合并 BF16 段和 INT2 段的结果

这一集成使 OSCAR 从论文方法变为可直接用于长上下文 workload 的生产级系统。

## 性能数据

通过 [[p-d分离|P/D分离]] 架构，在12个 H100 节点上实现：

| 指标 | 数值 |
|------|------|
| 输入吞吐 | 52.3k token/s/node |
| 输出吞吐 | 22.3k token/s/node |
| 成本对比 | 比 DeepSeek 官方 API 便宜5倍 |

该方案已被全球10多个团队复现。

## 2026 Q2 Roadmap

- **DeepSeek V4 全链路优化**：W4A16量化、MegaMoE加速、稀疏注意力支持
- **Jit-kernel 替代**：原有的 sgl-kernel 包已逐步迁移至基于 TVM-FFI 的全新 Jit-kernel 体系，实现按需编译，编译速度提升数倍，提升开发与发版效率
- **[[vibe-coding|Vibe Coding]] 落地**：积极引入 AI Agent 自动分析 profiler、定位性能瓶颈、提交PR，已自动完成超60个优化任务，2026年5月前完成
- **多模态升级**：支持 LTX2、Wan、混元视频等最新模型，性能比其他框架最高快5倍

## 硬件支持矩阵

2026 Q2 官方硬件支持矩阵包括：

- NVIDIA GB200/GB300
- AMD
- Google TPU
- Intel
- **摩尔线程 [[musa架构|MUSA]]**（国产 GPU 首次列入）

开发者可在官方文档中直接看到MUSA后端。SGLang 已通过 Upstream PR 模式完成与 MUSA 的全链路打通。

## 与摩尔线程的合作

自 2026 年 1 月起，摩尔线程向 SGLang 提交 issue 并提供 MUSA 支持的完整路线图。截至 2026 年 5 月 12 日，[[摩尔线程]]已提交 47 个 PR（合并 41 个），MUSA 正式成为 SGLang 官方原生支持的后端之一。开发者可直接在 [[mtt-s5000]] 智算卡上运行 SGLang，无需任何二次代码改造。这一里程碑标志着国产GPU首次进入全球顶级推理引擎的官方支持体系。

## 平头哥芯片优化

在 [[平头哥真武M890]] 芯片优化任务中，[[qwen3-7-max]] 以 SGLang 的现有实现作为参考起点，通过自主编写kernel、编译、跑性能测试、分析瓶颈、迭代修改，最终取得10倍加速。

## 生态整合

SGLang 是大模型推理的主链路框架，与 [[mooncake|Mooncake]]（KVCache解耦）形成标配组合。

## 行业应用

SGLang 被全球对推理性能要求最苛刻的团队所采用，包括但不限于：

- Google, Microsoft, xAI
- [[英伟达]], [[AMD]], Oracle
- LinkedIn, Thinking Machines Lab

## 关键人物

- **BBuf (Xiaoyu Zhang)** — 核心开发者，在「SGLang × MUSA Meetup」上分享了推理框架的最新进展与 Roadmap

## 里程碑

在 [[DeepSeek V4]] 发布当天，SGLang 与 [[Miles]] 共同成为全球首个支持该模型推理与RL训练的开源技术栈。