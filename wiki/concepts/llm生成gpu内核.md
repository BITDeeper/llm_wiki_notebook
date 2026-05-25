---
type: concept
title: LLM 生成 GPU 内核
created: 2026-05-24
updated: 2026-05-24
tags: [ai编程, gpu优化, 高性能计算, vibe-coding]
related: [coda, claude-code, vibe-coding, agentic-engineering]
sources: ["还在手写cuda内核？coda来了！llm和新手也能让transformer跑出光速.md"]
---
# LLM 生成 GPU 内核

**LLM 生成 GPU 内核**是指利用大语言模型（如 [[claude-code|Claude Code]]）自动生成 GPU 内核代码的实践，是 [[vibe-coding]] 在高性能计算这一极端专业领域的延伸。

## CODA 实验中的验证

[[coda|CODA]] 论文在实验中评估了两种实现模式：

- **CODA (LLM)：** 由 [[claude-code|Claude Code]] 生成，研究者提供原语说明、若干示例和一份持续更新的实现技巧日志，AI 完成主体代码，人工做轻度监督
- **CODA (Human)：** 由人工程序员独立编写，使用同样的高层重参数化思路

## 关键发现

- LLM 生成的内核在大多数基准上与人工手写版本不相上下，个别配置下甚至略有超越
- 在 GPU 内核优化这个历来门槛极高的领域，这是一个颇为罕见的结论
- 反向传播内核的收益尤为突出，LLM 与人工实现的差距微小

## 更深层意义

当编程抽象设计得足够好，AI 模型本身就可以参与到自身训练基础设施的优化中——形成递归式的自我改进循环。这与 [[agentic-engineering]] 的理念呼应：AI 深度参与模型研究、实验设计和训练优化的上游工作。

## 开放问题

- LLM 生成内核的"轻度监督"成本未被量化
- 实际工程可行性与全成本对比有待进一步评估