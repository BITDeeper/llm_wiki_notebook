---
type: entity
title: ProgramBench
created: 2026-06-13
updated: 2026-06-13
tags: ["benchmark", "software-engineering", "meta", "stanford", "reverse-engineering", "llm", "evaluation", "评测基准", "编程", "斯坦福", "哈佛", "ai评测", "编程基准", "逆向工程"]
related: ["swe-bench", "claude-opus-4-7", "行为等价性测试", "黑盒逆向工程", "mini-swe-agent", "工程智能", "单体化代码", "claude-code", "gemini", "gpt-5.5", "从0重建程序范式", "noam-brown", "claude-fable-5", "过度拒绝", "能力-安全悖论"]
sources: ["刷榜ai全挂了！meta斯坦福地狱级测试，gptclaudegemini交出0分.md", "0%完成率！claude、gpt、gemini-全灭，swe-bench作者新作把ai圈干沉默了.md", "gpt-5.5全球首破！0源码盲写程序，编程ai进入新纪元.md", "rss/交白卷也排第一？fable-5二百题全部拒答，却登顶最严ai编程基准.md"]
---
# ProgramBench

ProgramBench 是 SWE-Bench 作者团队推出的 AI 编程基准测试，专注于**从编译后的二进制文件重建源代码**这一高难度任务。

## 核心特征

- **任务定义**：给定编译后的二进制文件，要求 AI 模型逆向重建原始源代码
- **难度极高**：上线时将当时所有前沿 AI 模型（Claude、GPT、Gemini）全部清零，完成率均为 0%
- **题目规模**：200 道题

## Fable 5 事件

[[claude-fable-5|Claude Fable 5]] 在 ProgramBench 上创造了 AI 评测史上的荒诞记录：

1. **200 道题全部拒绝作答**——"二进制逆向"操作触发了 Fable 5 的网络安全分类器
2. **排行榜仍将其列为第一**——综合其他基准表现，ProgramBench 将弃考模型排在榜首
3. **引发评测有效性争议**——社区质疑"交白卷怎能登顶"，认为应直接给零分

排行榜备注对 Fable 5 的特别警告：
> "除了彻底的访问限制（我们只是不断重试运行直到任务顺利完成），Anthropic 还可能默认悄无声息地提供该模型的一个降级版、低能力变体。重试无法纠正这一点，因此这里的数据可能低估了其真实能力——解读时需谨慎。"

## 意义

ProgramBench 事件暴露了当前 AI 评测体系在处理安全拒绝时的方法论缺陷：当模型因安全原因拒绝作答时，评测系统缺乏统一的处理标准——是计为零分、排除排名，还是综合其他表现？这一问题随着 AI 安全护栏的普及将日益突出。

## 外部链接

- 排行榜：https://www.vals.ai/benchmarks/programbench