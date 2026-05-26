---
type: source
title: "一个问题几百美元，DeepMind智能体一次搞定了9个Erdős问题"
authors: [机器之心编辑部]
year: 2026
url: "https://mp.weixin.qq.com/s/RTs9v7gy2QE1QSADX9BHXA"
venue: 机器之心
created: 2026-05-25
updated: 2026-05-25
tags: [ai-for-science, 数学, deepmind, 形式化证明, erdős]
related: [alphaproof-nexus, google-deepmind, 形式化证明搜索, erdős问题, ai-for-science]
sources: ["一个问题几百美元，deepmind智能体一次搞定了9个erdős问题.md"]
---
# 一个问题几百美元，DeepMind智能体一次搞定了9个Erdős问题

## 摘要

机器之心2026年5月25日报道。[[google-deepmind]] 推出 [[alphaproof-nexus]] 框架，利用大模型与 [[lean-形式化证明语言]] 编译器结合，自主解决了353个 [[erdős问题]] 中的9个开放性问题，并证明了OEIS数据库492个猜想中的44个。每个问题成本仅数百美元，最低7.5-15美元。

## 核心发现

- **首次大规模评估**：这是数学界和AI界已知的首次针对开放式研究级数学问题进行的大规模[[形式化证明搜索]]评估。
- **架构洞察**：极简的"基础智能体"架构（仅依赖底层模型+编译器反馈循环）同样能解出所有9个难题，预示行业可能从复杂特化系统转向利用通用大模型原生推理。
- **成本效益**：解决每个问题的成本仅为数百美元，最低仅需7.5-15美元。
- **验证方式**：所有解法均通过Lean编译器自动验证，并经过人工审查。

## 两种智能体架构

1. **基础智能体**：多无共享子智能体独立运行"思考-尝试"循环，底层模型为 [[gemini-3-1-pro]]。
2. **全功能智能体**：额外引入多智能体演化算法、[[gemini-3-0-flash]] 充当Elo评分裁判、[[alphaproof]] 辅助求解。

## 关键引用

> "随着底层大模型自身智能密度的不断跃升，简单的智能体交互循环正在展现出惊人的效能。"

## 竞争背景

文章末尾提及 [[openai]] 上周推翻了近80年的"平面单位距离猜想"，与DeepMind成果共同标志着AI数学能力的范式转变。

## 原始论文

- 标题：Advancing Mathematics Research with AI-Driven Formal Proof Search
- 链接：https://arxiv.org/abs/2605.22763v1
