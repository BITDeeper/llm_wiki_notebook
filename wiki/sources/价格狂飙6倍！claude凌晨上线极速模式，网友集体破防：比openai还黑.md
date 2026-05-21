---
type: source
title: "价格狂飙6倍！Claude凌晨上线极速模式，网友集体破防：比OpenAI还黑"
tags: [anthropic, claude-opus-4.6, pricing, fast-mode, llm-benchmark]
related: [anthropic, claude-opus-4.6, claude-code, 极速模式, ai-subscription-crisis]
created: 2026-02-08
updated: 2026-02-08
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/8p8NtvooD2Bn4QF1GVw33w"
venue: "新智元"
sources: ["价格狂飙6倍！claude凌晨上线极速模式，网友集体破防：比openai还黑.md"]
---

# 源文档摘要

本文报道了 [[Anthropic]] 为其旗舰模型 [[Claude Opus 4.6]] 推出的“极速模式”（Fast Mode），该模式在保持模型智力不变的前提下，将响应速度提升了 2.5 倍，但价格却上涨了 6 倍（输出价格从 25 美元/百万 token 提升至 150 美元/百万 token）。

## 核心事件

- **功能发布**：Anthropic 在凌晨上线了 Opus 4.6 的极速模式，用户可通过在 [[Claude Code]] 或 API 中输入 `/fast` 指令启用。
- **定价策略**：极速模式采用独立计费通道，**不抵扣**用户的订阅套餐额度。在长上下文场景（超过 20 万 token）下，输出价格更是高达 225 美元/百万 token。
- **市场反应**：高昂的定价引发了开发者社区的强烈反弹，被指责为“吃相难看”，但也有观点认为这是对时间敏感型场景的合理溢价。

## 技术背景与性能支撑

文章详细介绍了支撑这一高价策略的底层技术实力，指出 [[Claude Opus 4.6]] 可能是目前综合实力最强的大语言模型：

1.  **基准测试霸榜**：
    -   在 Artificial Analysis 智能指数中以 53 分位列第一，超越 GPT-5.2。
    -   在 Arena.ai 的代码、文本、专家三大竞技场全部登顶，代码能力较前代暴涨 106 分。
    -   在 Terminal-Bench 2.0 和 ARC-AGI-2 测试中表现优异，抽象推理能力接近翻倍。

2.  **工程能力突破**：
    -   **100 万 token 上下文**：作为首款支持该上下文长度的 Opus 级模型，有效解决了“上下文衰减”问题，在 MRCR v2 测试中得分 76%。
    -   **自我纠错能力**：模型能自主判断任务难度，在简单部分快速推进，在复杂部分深度思考，并主动推翻不合理的推理路径。

3.  **里程碑案例**：
    -   Anthropic 内部利用 16 个 Opus 4.6 智能体，在几乎无人工干预下，用 Rust 编写了 10 万行代码的 C 编译器，并成功编译 Linux 内核。这消耗了近 20 亿 token 和约 2 万美元成本，证明了 AI 在复杂系统工程中的独立作业能力。

## 行业意义

文章提出，[[极速模式]] 的推出标志着 AI 行业竞争焦点的转移：从过去关注“AI 能做什么”（智力），转向关注“AI 能多快做到”（效率）。Anthropic 试图通过“速度即智能”的理念，探索在 Agent 时代高成本背景下的新型商业模式。