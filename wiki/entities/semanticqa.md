---
type: entity
title: SemanticQA
created: 2026-06-11
updated: 2026-06-11
tags: [评测基准, 语义推理, 多词表达, acl-2026]
related: [多词表达, 操作对齐评测, acl-2026, 北京通用人工智能研究院, 北京科技大学]
sources: ["rss/acl-2026-oral｜语义推理如鲠在喉：大模型被「短语」难住了.md"]
---
# SemanticQA

## 概述
SemanticQA 是由[[北京通用人工智能研究院|BIGAI]]与[[北京科技大学]]联合提出的短语语义推理评测基准与诊断框架，发表于[[acl-2026|ACL 2026]]主会并获选Oral论文。论文标题为"Revisiting a Pain in the Neck: A Semantic Reasoning Benchmark for Language Models"。

## 核心设计思想
采用[[操作对齐评测]]设计：同一个短语实例在抽取（Extraction）、分类（Categorization）、释义（Interpretation）三种任务中统一建模，使用固定提示模板压制噪声，使跨模型比较公平可靠。

## 覆盖范围
- **四类短语现象**：习语（Idiomatic Expressions）、固定搭配（Lexical Collocations）、名词复合结构（Noun Compounds）、动词多词表达（Verbal MWEs）
- **三种原子操作**：抽取（精确跨度定位）、分类（语义类型判断）、释义（语境下生成解释）
- **评测对象**：横跨十余个模型，从BERT、T5到GPT-5、Claude Sonnet、DeepSeek-R1、Gemini 2.5 Pro

## 核心发现
1. **跨操作一致性缺失**：GPT-5习语分类85.4% → 抽取78.7% → 释义Meteor仅22.5%
2. **语义相似度欺骗**：BERTScore高分不等于真正的结构性语义理解
3. **细粒度分类崩溃**：DeepSeek-R1从81.7%暴跌至35.4%（跌幅46.3个百分点）
4. **级联错误传播**：上游抽取错误沿多步流程放大下游偏差（"多米诺效应"）
5. **历时进步确认**：GPT系列三年跨代稳步递增，但根本性问题未解决

## 项目资源
- 项目主页：https://semanticqa.github.io
- 论文：https://arxiv.org/pdf/2604.16593
- 代码：https://github.com/jacklanda/SemanticQA

## 研究局限
论文完稿于2023年、2025年修订，基于单轮静态设计。作者明确指出在2026年Agent语境下，静态评测已不够用——错误沿链路传播叠加，静态分数对此一无所知。这一自我否定恰恰增强了研究的可信度。