---
type: entity
title: SWE-bench
tags: [benchmark, llm, code-agent, evaluation, code-generation, 基准, 数据集, 编程, 评测, software-engineering, github, bug-fixing, coding, dataset]
related: [contextbench, 过程可解释性, ssr-self-play-swe-rl, meta, talkie-1930-13b, claude-code, gemini, xarray, programbench, john-yang, mini-swe-agent, claude-mythos, 自动化-ai-研发, jack-clark, cursorbench, cursor, claude-sonnet-4.5, claude-haiku-4.5]
created: 2026-03-07
updated: 2026-05-08
sources: ["代码agent的苦涩教训！首次拆解上下文检索，直指自动化软件瓶颈.md", "华人一作！meta等复刻alphazero神话，ai甩开人类自修成神.md", "不好！1930年的ai都来抢程序员饭碗了.md", "刷榜ai全挂了！meta斯坦福地狱级测试，gptclaudegemini交出0分.md", "anthropic联创定下deadline：2028年ai实现自我进化，没有人类了.md", "拜拜了swe-bench！cursor刚发了个ai-coding评测基准，难哭claude.md"]
---

# SWE-bench

**SWE-bench** 是一个基于真实 GitHub 仓库的代码库级评测基准，主要用于评估大语言模型和代码智能体解决软件工程问题的能力。它由 [[斯坦福]] 研究员 [[John Yang]] 等人创建，是 [[ProgramBench]] 的前身和对比参照。

该基准涵盖了从 Python 仓库中提取的真实问题及其对应的测试用例。与传统的代码生成补全不同，SWE-bench 要求模型不仅要理解代码逻辑，还要遵循项目的工程规范和测试标准。

## 测试方法与任务定义

SWE-bench 的核心测试流程如下：
- **输入**：一个现有的代码库，以及描述 Bug 或新功能的 Issue。
- **任务**：模型需要阅读文档、理解报错、定位 Bug 并提交符合规范的补丁。这被形象地称为“阅读理解+局部手术”。
- **评估**：使用单元测试检查代码内部实现对不对，函数签名、变量名需与预期一致。

## 版本与变体

SWE-bench 包含多个针对不同难度和场景的变体：
- **SWE-bench Verified**：经过人工验证的真实 GitHub Issue 集合。
- **SWE-bench Pro**：更复杂、更接近企业级问题场景的集合。
- **Multi-SWE-bench**：支持多语言或多仓库的扩展版本。

## 性能演进与重要性

SWE-bench 的数据被广泛引用来证明 AI 编程能力的爆发式增长，被视为衡量通用编程能力及 AI 对软件工程影响的可靠指标：

- **2023 年底 (Claude 2)**：成功率约 **2%**
- **2026 年 (Claude Mythos Preview)**：成功率约 **93.9%**
- **Claude Sonnet 4.5**：得分约 **77.2%**

[[jack-clark]] 指出，这一分数的飞跃意味着 AI 已经能够自动化 AI 研发中大量依赖代码的工程任务，显著加速了人类研究员的工作效率。这也标志着 AI 正从“辅助工具”转变为能够独立承担复杂工程任务的“智能体”。

## 应用案例与表现

SWE-bench 已成为评估各类编程模型能力的重要参考：

- **SSR (Self-Play for Reasoning)**：[[ssr-self-play-swe-rl]] 在 SWE-bench Verified 和 SWE-bench Pro 这两个基准上均显著超越了使用人类数据训练的基准模型（分别提升 10.4% 和 7.8%），证明了合成数据在代码训练中的有效性。
- **复古模型评测**：在 [[talkie-1930-13b]] 的实验中，SWE-bench 被用作核心评测标准。该复古模型在基准上的表现（4.5% pass@1），成为了衡量其推理能力是否超越时代限制的关键标尺。
- **现代模型对比**：该基准也被广泛用于评估 [[claude-code]]、[[gemini]] 等现代编程模型的能力。

## 局限性

尽管 SWE-bench 及其变体已成为衡量代码能力的事实标准，且顶级模型（如 Claude 3.5 Sonnet）能达到 72% 的分数，但学术界和工业界（如 [[cursor]]）指出该基准存在明显的评价盲区：

### 1. 侧重局部修改，缺乏架构能力
SWE-bench 主要反映 AI 的**代码补全和局部修改能力**。在 [[ProgramBench]]（从零构建软件）的测试中，在 SWE-bench 上表现优异的模型全军覆没（0% 通过率），证明了 SWE-bench 无法衡量真正的软件架构设计能力。

### 2. 黑盒评价与僵化机制
- **端到端成功率**：SWE-bench 主要关注**端到端成功率**（End-to-End Success Rate），即模型生成的补丁是否能通过测试用例。这种评价方式无法判断 Agent 是真正理解了代码库，还是通过试探或运气修好了 Bug。
- **唯一答案假设**：评分机制假设只有唯一正确答案，忽略了代码实现的多样性，容易导致误判。

### 3. 缺乏过程可解释性
难以量化 Agent 在修复过程中是否检索到了必要的上下文，以及如何使用这些上下文。

### 4. 任务类型单一与数据污染
- **任务单一**：仅关注 Bug 修复，忽略了多文件修改、日志分析、实验运行等日常开发任务。
- **数据污染**：由于发布时间较长，后续模型可能在训练过程中“见过”测试数据，导致分数虚高。

## 与其他基准的对比

针对 SWE-bench 的局限性，业界提出了新的评测基准以更全面地评估 AI 编程能力：

- **与 [[ContextBench]] 的对比**：
  [[contextbench]] 的提出正是为了弥补 SWE-bench 的上述缺陷。ContextBench 不再只问“修好了吗”，而是通过引入 [[黄金上下文]] 来评估“是否精准定位并使用了关键代码”，从而打开了 Agent 推理过程的“黑盒”。

- **与 [[CursorBench]] 的对比**：
  在 SWE-bench 上得分较高的模型（如 [[claude-sonnet-4.5]] 得分 77.2），在更贴近真实场景的 [[cursorbench]] 上往往表现不佳（跌至 37.9）。这表明 SWE-bench 主要衡量的是“能否解决问题”，而非“能否高效解决问题”。