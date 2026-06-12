---
type: source
title: "一个8×8矩阵，让大模型「记住」长对话：Mind Lab联合NTU、复旦推出δ-mem，参数仅0.12%"
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/mvVVHXkUvu7NhQ80NLMsQg"
venue: 机器之心
tags: [长期记忆, 参数化记忆, transformer, agent, delta-mem]
related: [delta-mem, mind-lab, 参数化记忆, 体验智能, 机器之心]
created: 2026-06-08
updated: 2026-06-08
sources: ["rss/一个8×8矩阵，让大模型「记住」长对话：mind-lab联合ntu、复旦推出δ-mem，参数仅0.12%.md"]
---
# 一个8×8矩阵，让大模型「记住」长对话：Mind Lab联合NTU、复旦推出δ-mem，参数仅0.12%

## 摘要

本文报道了由南洋理工大学、复旦大学、[[mind-lab|Mind Lab]]、[[上海交通大学]]、香港中文大学、香港科技大学（广州）联合完成的研究——[[delta-mem|δ-mem]]。该方法通过一个8×8的在线关联记忆状态矩阵，为冻结的Transformer骨干赋予长期记忆能力，参数开销仅占骨干模型的0.12%。

## 核心内容

### 问题背景
大模型在长期个性化助手、长周期Agent系统等场景中面临记忆瓶颈。扩展上下文窗口路线撞墙：注意力成本呈二次方增长，且存在[[context-rot|Context Rot]]现象（上下文越长性能反而越差）。

### 方法概述
δ-mem提出「记忆状态×记忆引导」统一框架，将现有方法分为三大范式：
- **文本记忆（TMM）**：MemGPT、RAG等，受限于上下文窗口长度
- **外部通道记忆（OMM）**：Memorizing Transformers等，引入额外推理开销
- **参数化记忆（PMM）**：LoRA、Prefix-Tuning等，本质是静态的

δ-mem开辟新路径：紧凑动态状态 + 低秩注意力修正。

### 关键技术
1. **Delta-rule在线状态更新**：只将预测残差沿key方向写入，已学好的关联几乎不引起更新
2. **低秩注意力修正**：从记忆状态读出的信号生成对query侧和output侧的修正量，与LoRA的本质区别在于输入来自动态演化状态
3. **三种写入粒度**：逐token写入(TSW)、段级写入(SSW)、多状态并行写入(MSW)

### 实验结果
- MemoryAgentBench：29.54 → 38.85（1.31×）
- LoCoMo：40.79 → 49.12（1.20×）
- TTL子任务：26.14 → 50.50（翻倍）
- 跨骨干验证：3B到8B三个模型均显著提升
- 激进消融：删除原始上下文仅注入8×8状态，HotpotQA EM从0.08%升至6.48%

### 局限性
验证主要集中在数千到数万token量级，更长周期表现有待检验；8×8固定状态维度的信息容量天花板未明确。

## 关键引用
- 论文：arXiv 2605.12357
- 代码：github.com/MindLab-Research/delta-Mem