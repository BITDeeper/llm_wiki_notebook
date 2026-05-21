---
type: source
title: 马斯克说漏嘴了！Claude Opus参数5T，Sonnet 1T
tags: [ai-industry, model-specs, anthropic, xai, elon-musk]
related: [anthropic, claude-opus, claude-sonnet, grok-4-2, colossus-2, claude-mythos, 参数量, moe-混合专家, 模型蒸馏]
created: 2026-04-10
updated: 2026-04-10
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/4z3RmSaXcsTtobQM6F6vyg"
venue: 量子位
sources: ["马斯克说漏嘴了！claude-opus参数5t，sonnet-1t.md"]
---

# 马斯克说漏嘴了！Claude Opus参数5T，Sonnet 1T

## 概述
本文报道了 [[马斯克]] 在社交媒体 X 上的一次互动，意外泄露了 [[Anthropic]] 旗下 [[Claude]] 系列模型的参数规模。文章同时梳理了自 Claude 3 以来各版本的参数估算历史，并引用技术逆向分析，探讨了 AI 行业从单纯追求参数规模向效率优化（如 [[模型蒸馏]]）转型的趋势。

## 核心泄露信息
马斯克在对比 xAI 的 [[Grok 4.2]] 与 Claude 模型时透露：
- **Grok 4.2**：总参数量为 0.5T（500B）。
- **Claude Sonnet**：参数量约为 1T。
- **Claude Opus**：参数量约为 5T。

这一说法与部分社区对 Claude 4.6 的估算（Sonnet ~1-2T, Opus ~1.5-2.5T/2-5T）在量级上基本吻合。

## 背景与争议
### xAI 的 Colossus 2 超算
马斯克透露 [[Colossus 2]] 超算正在训练 7 个模型，最大的一款参数量达 10T。该超算配备了约 11 万个 GB200 GPU，旨在支持超大模型的训练。

### 参数估算方法论
文章总结了目前主流的四种模型参数估算方法：
1.  **推理成本与吞吐量反推法**：通过 API 定价和 Token 处理速度反推。
2.  **性能基准对标法**：与已知参数的开源模型对比。
3.  **内部文件泄露与传闻分析法**：利用意外暴露的信息。
4.  **架构特性分析法**：基于模型行为推断架构类型（如 [[MoE (混合专家)]]）。

### 逆向工程的修正
技术博主 [[unexcitedneurons]] 通过分析吞吐量数据，对 Claude Opus 4.6 的规模提出了不同看法：
- **激活参数量**：估算在 93B-154B 之间（取决于精度配置）。
- **总参数量**：估算在 1.5T-2T 之间。
- **结论**：Opus 4.5/4.6 并非网传的 10T+ 规模，而是由 Opus 4/4.1 蒸馏而来的更小、更高效的模型。

## 行业趋势：效率优于规模
文章指出，AI 行业正在摒弃单纯追求万亿参数的路线，转而关注效率优化：
- **Claude Opus 4.5/4.6**：通过蒸馏技术，在性能提升的同时，将 API 成本降至 4.1 版本的 1/3。
- **架构演进**：从追求“大”转向追求“强”和“省”。

## 未发布的巨兽：Claude Mythos
文章还提到了 Anthropic 因权限配置失误泄露的未发布模型 [[Claude Mythos]]（代号 Capybara）：
- 被称为“质的飞跃”。
- 传言参数达 10T。
- 在编码、推理和网络安全测试中得分显著高于 Opus 4.6。

## 历史参数估算回顾
- **Claude 3 系列**：Haiku (~20B), Sonnet (~70B), Opus (~2T)。
- **Claude 3.5 Sonnet**：估算约 175B。
- **Claude 4 系列**：早期估算 Opus 4 约 300-500B，Sonnet 4 约 50-100B。