---
type: source
title: "12小时登顶OpenAI MLE-bench！上海AI Lab开源算法进化框架MLEvolve"
created: 2026-03-10
updated: 2026-03-10
tags: [ai-for-science, algorithm-discovery, open-source, shanghai-ai-lab]
related: [mlevolve, intern-agent, mle-bench, 渐进式蒙特卡洛图搜索, 自进化机器学习系统]
authors: [MLEvolve团队]
year: 2026
url: "https://mp.weixin.qq.com/s/DoBWa3vjtPdqW4f6_0Ae4w"
venue: 量子位
sources: ["12小时登顶openai-mle-bench！上海ai-lab开源算法进化框架mlevolve.md"]
---

# 12小时登顶OpenAI MLE-bench！上海AI Lab开源算法进化框架MLEvolve

## 摘要
上海人工智能实验室（上海AI Lab）联合华东师范大学，在“书生”科学发现平台下开源了自进化机器学习框架 [[mlevolve]]。该框架通过 [[渐进式蒙特卡洛图搜索]] 和 [[经验驱动的全局记忆层]]，在包含 75 道 Kaggle 竞赛题的 [[mle-bench]] 基准测试中，以 **12小时** 的运算预算取得了 **61.33%** 的奖牌率，登顶榜单第一。这标志着 AI 从单纯的“代码生成”向“自主算法设计”的关键跨越。

## 核心成果
- **榜单第一**：在 MLE-bench 上以 61.33%±1.33% 的奖牌率超越所有基线方法。
- **效率翻倍**：仅用 12 小时达到其他顶尖方法 24 小时的水平。
- **高难度领跑**：在 High 难度任务中取得 42.22% 的最佳成绩。

## 技术架构
MLEvolve 是 [[intern-agent]] 1.5 系统中验证子系统的核心引擎，构建了“规划→构建→评估→进化”的自进化闭环。其四大核心模块包括：

1.  **渐进式蒙特卡洛图搜索 (MCGS)**：将传统树状搜索升级为图结构，支持跨分支的经验互通与融合。
2.  **经验驱动的全局记忆层**：利用 BM25 和 FAISS 混合检索，记录并复用所有历史尝试的成败经验。
3.  **多模式自适应代码生成**：支持全量生成、分步合成和增量修补三种模式。
4.  **多智能体专业化分工**：涵盖设计、优化、审查等八大专业 Agent 的协同工作。

## 意义
该成果展示了 [[ai-for-science]] 领域中“算法发现”的潜力，即 AI 具备了像顶尖科学家一样创造新工具的能力，是实现 [[递归式自我改进]] 和自主科学发现的重要一步。

## 资源链接
- 项目主页：https://internscience.github.io/MLEvolve/
- 开源仓库：https://github.com/InternScience/MLEvolve
- “书生”科学发现平台：https://discovery.intern-ai.org.cn/home