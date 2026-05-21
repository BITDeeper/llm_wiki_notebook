---
type: source
title: "刚刚，DeepSeek V4基准测试泄露！疑似明天发布，全场惊呼新王归来"
authors: [新智元, Aeneas kingHZ]
year: 2026
url: "https://mp.weixin.qq.com/s/F04rt_oNiW-ipauv_bf2w"
venue: "新智元"
tags: [deepseek, llm, benchmark, leak, ai-news]
related: [deepseek-v4, claude-opus-4-5, gpt-5-2, engram, swe-bench, frontiermath]
created: 2026-02-16
updated: 2026-02-16
sources: ["刚刚，deepseek-v4基准测试泄露！疑似明天发布，全场惊呼新王归来.md"]
---

# 刚刚，DeepSeek V4基准测试泄露！疑似明天发布，全场惊呼新王归来

## 概述
本文报道了关于 [[DeepSeek V4]] 模型基准测试数据泄露及其即将发布的传闻。文章指出，泄露数据显示 DeepSeek V4 在 [[SWE-bench]] 等基准测试中超越了 [[Claude Opus 4.5]] 和 [[GPT-5.2]]，引发了社区的广泛关注。同时，文章也质疑了数据的真实性，并指出 DeepSeek 已开始灰度测试 100 万 token 的超长上下文窗口。

## 核心要点

### 泄露的基准测试数据
- **SWE-bench Verified**：得分 83.7%，据称超越了 Claude Opus 4.5 (80.9%) 和 GPT-5.2 (80.0%)。
- **AIME 2026**：得分 99.4%。
- **FrontierMath Tier 4**：得分 23.5%（据称为 GPT-5.2 的 11 倍）。
- **上下文长度**：支持 100 万 token，约等于《三体》三部曲的体量。

### 技术特性
- **Engram 机制**：DeepSeek 与北大联合开发的条件记忆机制，旨在实现近乎无限的上下文检索。
- **仓库级推理**：能够理解一个文件中的变化如何影响项目中其他文件，对企业级开发具有重要意义。
- **架构收敛**：Meta 科学家 Zhuokai Zhao 指出，LLM 架构设计空间已充分探索，DeepSeek 的 MLA + MoE 配方成为标准。

### 质疑与反驳
- **数据造假嫌疑**：
  - AIME 官方评分系统下不可能出现 99.4% 的分数（最高应为 99.2% 或 100%）。
  - [[Epoch AI]] 确认 FrontierMath 数据是伪造的，因为只有他们和 OpenAI 有权评估该数据集。
- **发布时间存疑**：有传闻称发布已推迟至三月底，且 API 文档未更新。
- **缺乏细节**：缺乏 pass@k 报告、工具栈配置等可复现细节，被质疑为营销行为。

### 社区反应
- 部分网友惊呼“新王归来”，认为开源模型首次全面超越闭源。
- 也有观点认为，高分不代表能驾驭现实中混乱的代码库，特别是长上下文塞满后的崩溃问题。

## 相关条目
- [[DeepSeek V4]]：本文的主角，DeepSeek 的下一代大语言模型。
- [[Claude Opus 4.5]]：目前公认的“编程之王”，DeepSeek V4 试图超越的目标。
- [[GPT-5.2]]：OpenAI 的前沿模型，DeepSeek V4 的另一个竞争对手。
- [[Engram]]：DeepSeek V4 引入的条件记忆机制。
- [[SWE-bench]]：用于评估软件工程能力的基准测试。
- [[FrontierMath]]：高难度的前沿数学推理基准测试。
- [[仓库级推理]]：AI 能够理解整个代码库上下文的能力。