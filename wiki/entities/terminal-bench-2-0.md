---
type: entity
title: Terminal-Bench 2.0
tags: [基准测试, 终端环境, 代码生成, benchmark, cli, agent-evaluation, coding, agent, evaluation]
related: [gpt-5-3-codex-spark, swe-bench-pro, simple-codex, codebrain-1, claude-opus-4-6, gpt-5-3-codex, composer-2, gpt-5-4, swe-bench-multilingual]
created: 2026-02-13
updated: 2026-05-08
sources: ["openai史上最快模型降临，每秒1000token！代码从此「炸出来」.md", "硬刚openai！中国团队杀入agentic-ai全球前二，一战封神.md", "cursor自研模型反超opus-4.6！价格脚踝斩，氛围编程沸腾了.md"]
---

# Terminal-Bench 2.0

[[Terminal-Bench 2.0]] 是由斯坦福大学与 Laude Institute 联合打造的开源基准测试，被公认为衡量 AI 智能体在真实命令行（CLI）环境下端到端执行能力的“金标准”。它是 [[GPT-5.3-Codex-Spark]] 发布时引用的关键评测指标之一，也是 [[OpenAI]] 和 [[Anthropic]] 等巨头用于实力背书的核心标准。

## 测试场景与特点

与标准的代码补全或问答不同，Terminal-Bench 侧重于模拟真实的命令行开发环境，要求模型具备在隔离的 Docker 容器中像人类专家一样工作的能力。

### 1. 闭环实战环境
- **真实 Linux 生态**：AI 必须在隔离的 Docker 容器中完成编译、调试、训练及部署。
- **多轮交互能力**：模型需要理解 Shell 命令、处理文件系统操作、调试错误输出，并进行多轮交互。
- **杜绝模式匹配**：彻底杜绝了简单的“模式匹配”，要求模型具备真实的生存能力。

### 2. 高压长程任务
- **深度场景覆盖**：覆盖 89 个深度场景，横跨软件工程与科学计算领域。
- **长程规划**：任务要求极高的逻辑跨度，测试模型的长程规划与执行能力。

### 3. 零容忍验证
- **0/1 判定准则**：唯有产出符合预期的交付物（如修复的代码或运行的服务）才算通关，没有任何“模糊分”或“部分分”。

## 行业地位与挑战

Terminal-Bench 2.0 已成为验证 [[Agentic AI]] 框架（如 [[Simple Codex]]、[[CodeBrain-1]]）工程化效能的核心指标。

- **“天花板”效应**：升级后的 2.0 版本大幅拉高了门槛，目前全球顶尖模型的解决率普遍难以突破 65%，这已成为大模型处理系统级复杂任务的“深水区”。
- **Spark 的意义**：[[GPT-5.3-Codex-Spark]] 在该基准上的优异表现（高准确率+低耗时）表明，极速生成能力不仅适用于简单的代码补全，同样适用于复杂的、环境依赖性强的系统级编程任务。

## 知名排名案例

在该基准测试的全球排名中，顶尖模型的表现如下：

- **OpenAI Simple Codex (GPT-5.3-Codex)**: 77.3% (第 1 名)
- **Feeling AI CodeBrain-1 (GPT-5.3-Codex)**: 72.9% (第 2 名)
- **Factory Droid (Claude Opus 4.6)**: 69.9% (第 3 名)

根据 [[Cursor]] 发布的数据，其自研的 [[Composer 2]] 模型在 Terminal-Bench 2.0 上的表现位于 [[GPT-5.4]] 和 [[Claude Opus 4.6]] 之间，标志着其在智能体工程能力上达到了顶尖水平。