---
type: entity
title: InCoder-32B
created: 2026-03-28
updated: 2026-03-28
tags: [代码大模型, 工业代码, 开源模型, 北航]
related: [工业代码智能, 真实仿真环境验证, 北京航空航天大学, claude, rtlcoder, kevin]
sources: ["工业代码能力开源第一！北航团队用真实仿真环境生成250万条验证数据，专治工业编码「水土不服」.md"]
---

# InCoder-32B
[[InCoder-32B]] 是由 [[北京航空航天大学]] 团队发布的 320 亿参数代码大模型，是首个统一服务芯片设计、GPU 内核优化、嵌入式系统、编译器优化和 3D 建模五大工业领域的代码基座模型。

## 核心特性
-   **参数规模**：32B (320 亿)。
-   **架构**：Decoder-only Transformer。
-   **训练数据**：基于 15T token 的预训练，并使用 250 万条经 [[真实仿真环境验证]] 的 SFT 样本进行专精化训练。
-   **开源协议**：Apache 2.0。

## 技术亮点
### 硬件语义感知
与通用模型（如 [[claude]]）不同，InCoder-32B 针对工业代码的 [[资源约束]] 进行了优化。例如，在 CUDA 编程中，它能识别硬件限制（如 gridDim 上限为 65535）并自动调整代码结构（如将多维展平为一维调度）以规避错误。

### 多领域统一
此前的工作通常专注于单一领域（如 [[RTLCoder]] 针对 Verilog，[[Kevin]] 针对 CUDA），而 InCoder-32B 将多个工业子领域纳入统一的训练框架，同时保持了在通用代码任务（HumanEval 94.5%）上的竞争力。

## 性能表现
-   **通用代码**：HumanEval 94.5%, MBPP 91.8%, SWE-bench Verified 74.8%。
-   **工业代码**：
    -   CAD-Coder IoU 达到 **53.5%**，超越 Claude-Sonnet-4.6 (32.4%)。
    -   在 KernelBench 全部三个级别上均取得开源模型最佳成绩。

## 训练流程
模型采用三阶段渐进式训练：
1.  **预训练**：使用 4096 块 GPU，融合公开代码仓库、技术文献和领域专业网站数据。
2.  **中期训练**：将上下文从 8K 扩展至 128K，注入推理 QA 和 Agent 轨迹。
3.  **后训练**：使用 250 万条经执行验证的工业代码数据进行专精化。

## 开源信息
-   **HuggingFace**: [Multilingual-Multimodal-NLP/IndustrialCoder](https://huggingface.co/Multilingual-Multimodal-NLP/IndustrialCoder)
-   **GitHub**: [CSJianYang/Industrial-Coder](https://github.com/CSJianYang/Industrial-Coder)
-   **论文**: [arXiv:2603.16790](https://arxiv.org/abs/2603.16790)