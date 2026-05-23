---
type: concept
title: SWE-bench
tags: ["基准测试", "代码生成", "评估", "benchmark", "code-generation", "evaluation", "code-evaluation", "software-engineering", "ai评测", "软件工程"]
related: ["deepseek-v4", "claude-code", "gemini", "sera-32b", "glm-4.5-air", "claude-opus-4-5", "gpt-5-2", "gpqa-diamond", "darwin-godel-machine", "codex-goal-mode", "ai-takeoff"]
created: 2026-04-18
updated: 2026-05-22
sources: ["刚刚，梁文锋被曝史上首次融资！deepseek-v4彻底摆脱英伟达.md", "开源屠刀！400美元炼成「代码副脑」，硅谷天价模型成废铁.md", "刚刚，deepseek-v4基准测试泄露！疑似明天发布，全场惊呼新王归来.md", "博士80小时熬夜改代码，codex-2小时交卷！科研奇点来了.md"]
---

# SWE-bench

[[SWE-bench]] (Software Engineering Benchmark) 是一个用于评估大语言模型在真实软件工程环境中代码生成和问题解决能力的基准测试，也是衡量AI模型解决真实世界软件工程问题的核心标准。

## 定义与测试内容

该基准测试基于真实的 GitHub 仓库，要求模型根据 Issues 的描述修复代码库中的 Bug。这考验了模型理解长上下文、复杂代码逻辑以及生成可执行代码补丁的能力。相比单纯的代码补全测试，SWE-bench 更能反映模型在真实开发场景中的表现。

### 核心指标
- **SWE-bench Verified**：SWE-bench 的一个子集，经过人工验证，用于衡量模型在解决真实软件工程问题上的能力。
- **评分标准**：模型生成的代码是否成功解决了 GitHub 上的问题，并通过了测试用例。

## 关键数据轨迹

| 时间节点 | 模型 | 通过率 |
|---------|------|--------|
| 2023年底 | Claude 2 | 2% |
| 2026年 | 前沿模型 | 93.9% |

两年半内从2%飙升至93.9%，呈现指数级增长曲线。

## 竞争格局与模型表现

SWE-bench 已成为衡量编程大模型实际应用能力的核心标准之一。

### 顶尖模型对比
- **[[DeepSeek V4]]**：据称得分 **83.7%**。如果属实，将超越目前的编程能力标杆。其内部 benchmark 数据显示成绩超过 **80%**，表明 V4 在处理整个代码仓库级别的复杂 Bug 修复上具有竞争力。
- **[[Claude Opus 4.5]]**：得分 **80.9%**，是目前公认的编程能力标杆。
- **[[GPT-5.2]]**：得分 **80.0%**。

### 其他模型表现
- **[[SERA-32B]]**：在 SWE-bench Verified 上达到 **54.2%** 的解决率（使用 64K 上下文）。
- **[[GLM-4.5-Air]]**：拥有 1100 亿参数，作为对比基准，在特定代码库微调任务中被 SERA-32B 超越。

## 与递归自我改进的关联

[[darwin-godel-machine|Darwin Gödel Machine]] 在SWE-bench上的表现（从20.0%自主提升至50.0%）特别值得关注——这不是通过人工调参实现的提升，而是AI通过改写自身源代码自主获得的性能增益，是 [[递归式自我改进]] 的直接证据。

## 意义

SWE-bench的加速曲线是AI编程能力进化的最直观度量，也是评估 [[ai-takeoff|智能爆炸]] 斜率的核心指标之一。

## 争议

在 [[DeepSeek V4]] 泄露事件中，SWE-bench 的得分被质疑为营销手段。缺乏 pass@k 报告、工具栈配置等可复现细节，使得高分数据的可信度受到质疑。