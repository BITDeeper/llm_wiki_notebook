---
type: source
title: "超越Claude Mythos和GPT-5.5！斯坦福Agent验证框架拿下SOTA，Transformer作者转发"
tags: [ai-research, agent, verification, llm, benchmarking]
related: [llm-as-a-verifier, llm-as-a-judge, terminal-bench, scaling-law, claude-code]
created: 2026-04-27
updated: 2026-04-27
authors: [量子位, Jacky Kwok]
year: 2026
url: "https://mp.weixin.qq.com/s/olxDZGz0QXuOWobf4UioOg"
venue: "量子位 (QbitAI)"
sources: ["超越claude-mythos和gpt-5.5！斯坦福agent验证框架拿下sota，transformer作者转发.md"]
---

# 源内容摘要

本文报道了由斯坦福大学、UC 伯克利和英伟达联合提出的 **[[LLM-as-a-Verifier]]** 框架。该框架旨在解决 AI 智能体在长时序任务（如编程）中的验证难题。

## 核心观点

文章指出，大多数 Agent Harness 实际上已经具备解决问题的能力（在多次尝试中能生成正确答案），但缺乏判断哪一个答案才是正确的能力。传统的 **[[LLM-as-a-Judge]]** 方法因评分粒度粗糙，导致在比较轨迹时出现大量平局（Terminal-Bench 上平局率达 27%）。

## 技术方案

LLM-as-a-Verifier 通过扩展以下三个维度的计算量来提升性能：
1.  **评分粒度**：增加评分 token 的数量（从 1 个扩展到 20 个），拉开正负样本的得分区分度。
2.  **重复验证**：对轨迹进行多次评估以获得更稳定的奖励估计。
3.  **标准分解**：将评估标准解构为规范合规性、输出格式和错误检测三个维度。

## 实验结果

该框架在 **[[Terminal-Bench]]** 2.0 和 **[[SWE-Bench Verified]]** 上取得了 SOTA 性能，超越了 Claude Mythos 和 GPT-5.5。它完全消除了传统 Judge 方法的平局现象，并将验证准确率提升了至少 7%。

## 团队背景

项目由斯坦福 CS 博士生 [[Jacky Kwok]] 负责，通讯作者包括 Ion Stoica（Databricks 创始人）、Azalia Mirhoseini（斯坦福教授，前 DeepMind/Anthropic）和 Marco Pavone（英伟达研究总监）。该工作得到了 Transformer 作者 [[Lukasz Kaiser]] 和 GAN 作者 [[Bing Xu]] 的关注与转发。