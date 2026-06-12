---
type: entity
title: Gemma 4
created: 2026-04-03
updated: 2026-06-12
tags: ["google", "开源模型", "多模态", "llm", "multimodal", "open-source", "注意力机制", "谷歌", "大语言模型"]
related: ["google-deepmind", "gemini-3", "逐层嵌入", "共享-kv-缓存", "参数效率", "gui-元素检测", "apache-2-0", "gemini", "端侧多模态", "qwen3.5-397b", "deepseek-v3-2-671b", "跨层kv共享", "逐层嵌入-ple", "grouped-query-attention", "sliding-window-attention", "谷歌", "diffusiongemma"]
sources: ["谷歌gemma-4深夜突降，31b爆杀20倍巨头！手机跑全血「龙虾」.md", "2b开源模型手机养虾！谷歌gemini-3技术下放：支持语音视频多模态，全免费可商用.md", "llm近期重大架构进化一览：从gemma-4到deepseek-v4.md", "rss/谷歌开源26b文本扩散moe，劈柴：生成速度像赛马一样快.md"]
origin_date: 2026-04-01
---

# Gemma 4

**Gemma 4** 是由 [[Google DeepMind]] 于 2026 年 4 月初发布的最新一代开源大语言模型系列，以业界领先的「每参数智能水平」著称。该系列基于 [[Gemini 3]] 技术打造，主打极高的参数效率和端侧部署能力，并首次全面采用 [[Apache 2.0]] 开源协议。Gemma 4 也是首批大规模应用 [[跨层 KV 共享]] 机制的主流开源架构。[[DiffusionGemma]] 即基于该家族构建。

## 模型版本

Gemma 4 包含四个主要尺寸，均提供 Base 和 Instruction-tuned 版本，针对从端侧设备到高性能服务器的不同场景进行了优化：

| 变体 | 定位 | 架构 | 层数 | KV 计算层 | KV 共享层 | 有效参数 | 总参数 |
|------|------|------|------|----------|----------|---------|--------|
| **E2B** | 超低功耗端侧 | Dense (MQA) | 35 | 15 | 20 | 2B | 5.1B |
| **E4B** | 高性能端侧 | Dense (MQA) | 42 | 24 | 18 | 4B | ~8B |
| **26B** | 工作站/服务器高效能 | MoE | — | — | — | 3.8B（激活） | 26B |
| **31B** | 旗舰级密集模型 | Dense | — | — | — | 31B（全激活） | 31B |

### 各版本详情

- **E2B (2B Effective)**：采用 MoE/Dense 混合架构（实际为 Dense + MQA），推理时仅激活 2B 参数。可在手机、树莓派等设备上离线运行，支持原生多模态（包括音频输入）处理。

- **E4B (4B Effective)**：同样采用低激活率架构，在端侧设备上提供更强的智能体工作流支持，包括函数调用和结构化输出。

- **26B (MoE)**：总参数量 26B，推理时仅激活 3.8B 参数，速度极快。在竞技场排名开源第 6，追求推理速度与性能的平衡。

- **31B (Dense)**：非 MoE 架构，全参数激活，可在单张 80GB H100 上以 bfloat16 精度运行，适合微调。在竞技场 Elo 1452 分，位列开源前三，击败了参数量是其 10-20 倍的模型（如 [[Qwen3.5-397B]] 和 [[DeepSeek v3.2-671B]]）。

## 核心性能

Gemma 4 在多项基准测试中实现了对前代及同量级模型的显著超越：

- **数学推理**：AIME 2026 得分 89.2%（前代 21.2%）。
- **编程能力**：LiveCodeBench 得分 80%，Codeforces Elo 达到 2150（紫名水平）。
- **综合智能**：Arena AI Elo 1452 分，位列开源第三。

## 核心架构创新

为了实现"小模型打大模型"的效果，Gemma 4 引入了多项架构创新：

### 跨层 KV 共享（Cross-Layer KV Sharing）

后续层不再单独计算自己的 Key 和 Value Projection，而是直接复用最近一个同类型未共享层生成的 KV Tensor。Sliding Window Attention 层复用前面某个 Sliding Window 层的 KV，Full Attention 层复用前面某个 Full Attention 层的 KV。

- E2B 在 128K 上下文、bfloat16 精度下节省约 **2.7GB** 显存
- E4B 在同样条件下节省约 **6GB** 显存
- KV Cache 整体大小大致减少 **50%**

> **设计权衡**：KV Sharing 本质上是对完整 Attention 计算的"近似"，会削弱模型容量。但根据 Cross-Layer Attention 论文的实验结果，在小规模模型上这种影响可以非常有限。

### 逐层嵌入（Per-Layer Embeddings, PLE）

为每一层提供专属的低维信号通道（额外的 embedding table），极大提升了小模型的参数利用率，而不扩大 Transformer 主干的计算规模。

- E2B 标注为 2.3B effective parameters，但包含 embedding 后总参数量达 5.1B
- E4B 为 4.5B effective parameters，总计约 8B

### 注意力配置

- **[[交替注意力机制]]**：结合局部 [[sliding-window-attention]] 和全局注意力，优化长上下文处理能力。
- E2B 采用普通 GQA（实际为 MQA）与 [[sliding-window-attention]] 按 4:1 方式组合使用。

### 其他架构特性

- **长上下文窗口**：端侧版支持 128K 上下文，大参数版最高支持 256K。
- **多语言支持**：原生支持 140 多种语言。

## 多模态与 Agent 能力

- **全模态支持**：全系支持图像和视频理解，E2B/E4B 额外支持音频输入。支持可变分辨率输入。
- **[[GUI 元素检测]]**：原生支持识别并定位屏幕截图中的 UI 元素（如按钮），返回坐标数据，无需额外提示词。
- **Agent 原生支持**：内置函数调用、结构化 JSON 输出和系统指令，符合 [[任务执行范式]]，支持复杂的 Agent 工作流。

## 开源许可

Gemma 4 首次采用 **[[Apache 2.0]]** 协议，取代了之前的自定义许可证。这一变化消除了商用限制，允许企业自由修改、分发和集成该模型，无需向谷歌支付费用或承担特殊的法律风险。

## 与 DiffusionGemma 的关系

[[DiffusionGemma]] 基于 Gemma 4 家族构建，在其基础上引入扩散式输出头，以速度换取部分质量：

| 维度 | Gemma 4（标准版） | DiffusionGemma |
|------|-------------------|----------------|
| 生成方式 | 自回归，逐 token | 扩散式，整块生成 |
| 输出质量 | 生产级，更高 | 实验性，较低 |
| 生成速度 | 标准 | 最高 4 倍提升 |
| 推荐场景 | 高质量生产部署 | 速度敏感、本地交互、非线性任务 |

## 应用案例

- **端侧部署**：通过与高通、联发科合作，在 Pixel 手机上实现了离线多模态应用（如"手机养虾"）。
- **科学研究**：耶鲁大学基于 Gemma 开发了 [[Cell2Sentence-Scale]]，用于单细胞基因表达数据分析，辅助癌症治疗靶点发现。

## 战略意义

Gemma 4 的发布标志着谷歌"闭源+开源"双线策略的成熟。Gemini 系列通过 API 获取收入，而 Gemma 系列则通过高性能和宽松协议抢占开发者生态和本地部署入口。官方将其定位为**高质量生产级输出**的首选开源方案。