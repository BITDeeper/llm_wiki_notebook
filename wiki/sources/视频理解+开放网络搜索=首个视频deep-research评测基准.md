---
type: source
title: "视频理解+开放网络搜索=首个视频Deep Research评测基准"
tags: [video-understanding, benchmark, deep-research, agent, multimodal]
related: [videodr, video-deep-research, agentic-vs-workflow, 目标漂移, gemini, gpt-5.2]
created: 2026-01-22
updated: 2026-01-22
authors: [QuantaAlpha, 兰州大学, 香港科技大学（广州）, 北京大学]
year: 2026
url: "https://mp.weixin.qq.com/s/7T9NX69poGJt_hJZvwmBTw"
venue: 新智元
sources: ["视频理解+开放网络搜索=首个视频deep-research评测基准.md"]
---

# 视频理解+开放网络搜索=首个视频Deep Research评测基准

## 概述
本文报道了由 QuantaAlpha 联合兰州大学、香港科技大学（广州）和北京大学推出的首个视频深度研究评测基准 [[videodr]]。该基准旨在解决现有多模态模型被困在“视频孤岛”中的问题，要求模型具备结合视觉线索与开放网络搜索进行多跳推理的 [[video-deep-research]] 能力。

## 核心内容

### VideoDR 基准设计
- **双重依赖性**：剔除了仅凭视频或仅凭文本搜索就能回答的样本，强制要求模型同时具备视觉感知和检索验证能力。
- **六大领域覆盖**：涵盖日常生活、经济、科技、文化、历史、地理。
- **人工标注**：为了保证评测质量，未采用自动化生成，而是进行了严格的人工标注与质检。

### 范式对比：Workflow vs. Agentic
研究对比了两种主流的任务执行范式：
1.  **Workflow（工作流模式）**：将视频转化为结构化文本线索，再进行搜索推理。优势在于显式的中间文本充当了“外部记忆”，防止模型在漫长的搜索链路中遗忘视觉细节。
2.  **Agentic（代理模式）**：模型端到端处理视频和搜索，自主决策。劣势在于容易出现 [[目标漂移]]，即模型在长链路搜索中忘记初始视觉目标或偏离任务核心。

### 评测结果
- **第一梯队**：[[Gemini-3-pro-preview]] 和 [[GPT-5.2]] 准确率达到 69%-76%，显著领先。
- **开源模型**：如 [[Qwen3-Omni-30B]]、[[InternVL3.5-14B]] 等表现显著落后。
- **长视频挑战**：长视频是检验模型 [[长期一致性]] 的“照妖镜”。强如 Gemini-3 在 Agentic 模式下能利用长上下文获益，而部分开源模型在长视频下性能反而大幅下降。

## 关键洞察
- **Agentic 的迷思**：端到端的 Agentic 模式并不绝对优于 Workflow 模式。在需要长程记忆和精确验证的场景下，显式的 Workflow 往往比黑盒式的 Agent 更可靠。
- **记忆衰退**：在面对长链路搜索时，模型往往会陷入“记忆衰退”的困境，未来的视频 Agent 需要在保持视觉线索的长程一致性上取得突破。

## 外部链接
- 论文链接：https://arxiv.org/abs/2601.06943
- 代码链接：https://github.com/QuantaAlpha/VideoDR-Benchmark