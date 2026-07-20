---
type: concept
title: Ralph循环
created: 2026-06-16
updated: 2026-06-16
tags: [ai-coding, codex, autonomous-loop, self-iteration]
related: [codex, 自生成目标, 目标漂移, 1-n-agent调度]
origin_date: 2026-04-30
sources: ["rss/码农连任务都不写了？codex开始自己给自己派活.md"]
---
# Ralph循环

Ralph循环是开发者对[[codex|Codex]] /goal自治工作流的俗称，描述了AI编程从单次代码生成走向长时序、无监督任务推进的全自动闭环。

## 循环阶段

1. **规划（Plan）**：根据高层意图自动拆解任务
2. **执行（Execute）**：调度子智能体并行处理
3. **测试（Test）**：自动运行测试验证结果
4. **复查（Review）**：对照/goal审计完成度
5. **迭代（Iterate）**：未完成则回到规划，继续自转

不到目标不收手，直到任务完成、被人类叫停或Token烧到上限。

## 实证案例

- 有开发者使用/goal让Codex独立运行18小时，自主交付18个功能中的14个，全程通过测试并在CI中合并，仅花费4.20美元
- a16z合伙人[[andrew-chen|Andrew Chen]]在真实eGPU驱动项目上跑通宵（14小时），第二天早上仍在推进

## 核心特征

- goal文本同时充当起始指令和完成审计标准
- 代码自审可交给GPT子智能体
- 智能体层级自动生长（主智能体→子智能体→孙智能体）

## 局限

Ralph循环目前仍面临[[目标漂移]]风险，社区普遍认为在真实生产环境中仍需人类密切监督。