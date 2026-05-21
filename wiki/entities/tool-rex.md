---
type: entity
title: TOOL-REX
created: 2026-05-03
updated: 2026-05-03
tags: [benchmark, tool-retrieval, dataset]
related: [tool-embed, tool-rank, toolret, 文档结构化扩展]
sources: ["结构化扩展拿下agent工具检索新sota，精准找到api｜iclr'26.md"]
---

# TOOL-REX

TOOL-REX 是由 [[eit-nlp]] 团队提出的扩展版工具检索基准。该基准的核心创新在于引入了结构化的 `tool_profile` 字段，旨在解决现有工具检索中因文档质量参差不齐导致的性能瓶颈。

## 核心特性

TOOL-REX 通过 [[文档结构化扩展]] 技术，将原本零散、简略的 API 描述补充为包含以下字段的标准化结构：
- **function**：工具的核心功能描述。
- **tags**：描述工具能力的关键词。
- **when_to_use**：适用场景与任务类型。
- **limitation**：使用限制或边界条件。

## 构建流程

该基准采用了一套低成本的自动化文档扩展 Pipeline：
1. **LLM 扩展**：使用 [[qwen3-32b]] 对原始文档进行结构化扩展。
2. **LLM 校验**：使用 [[llama-3-1-70b]] 验证生成内容的语义一致性。
3. **修正与抽检**：对未通过样本使用更强模型（如 GPT-4o）修正，并进行人工抽检。

## 影响

实验证明，基于 TOOL-REX 扩展文档训练的模型（如 [[tool-embed]] 和 [[tool-rank]]）在检索性能上达到了新的 SOTA，验证了“Better documentation → Better retrieval”的观点。