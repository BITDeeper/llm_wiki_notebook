---
type: entity
title: "MiniMax M2"
tags: [minimax, model, llm, agent]
related: [deepseek-v3-2, 交错思维链, cline, amazon-bedrock]
created: 2025-12-04
updated: 2025-12-04
sources: ["deepseek-v3.2爆火，agentic性能暴涨40%解密.md"]
---

# MiniMax M2

MiniMax M2 是中国 AI 公司 MiniMax 发布的大语言模型，被公认为 [[交错思维链]]（Interleaved Thinking）技术路线的主要推动者和开源基建贡献者。

## 核心贡献

### 交错思维链
MiniMax M2 率先大规模应用并推广了交错思维链机制。该机制要求模型在推理和工具调用之间来回交替，并持续保留推理状态。MiniMax 团队指出，Agent 的核心挑战在于对抗环境的扰动，而显式的思考过程充当了“滤波器”，能有效防止模型被噪音带偏。

### 性能数据
MiniMax M2 的发布数据有力证明了该机制的效果：
- **BrowseComp（网页浏览）**：性能提升 **40%**（31.4 -> 44.0）。
- **Tau²（复杂推理）**：性能提升 **36%**。
- **SWE-Bench（代码）**：性能提升 **3.3%**。
这种差异表明，交错思维链在充满噪音的高扰动环境中价值最大。

## 基建狂魔
MiniMax M2 的成功不仅在于模型本身，还在于其对开源基础设施的推动。面对行业 API 标准（如 OpenAI Chat Completion）不支持思考过程的困境，MiniMax 团队主动向主流工具提交 PR（Pull Request），包括：
- **[[Cline]]**：修改底层消息处理逻辑，确保思考过程被保留。
- **OpenRouter / Ollama**：推动 API 协议升级，使 `reasoning_details` 字段成为事实标准。
- **Amazon Bedrock**：在 AWS re:Invent 2025 大会上被集成进模型库。

## 行业影响
MiniMax M2 的实践推动了行业从“工具泛化”向“轨迹泛化”的转变，即从学会用更多工具转向适应任务轨迹中的各种扰动。