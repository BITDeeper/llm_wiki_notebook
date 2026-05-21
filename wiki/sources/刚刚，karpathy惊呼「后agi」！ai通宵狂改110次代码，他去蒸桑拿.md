---
type: source
title: "刚刚，Karpathy惊呼「后AGI」！AI通宵狂改110次代码，他去蒸桑拿"
tags: [ai-research, automation, open-source, llm-training, agent]
related: [andrej-karpathy, autoresearch, nanochat, 后-agi, 元优化, 科研自动化]
created: 2026-03-08
updated: 2026-03-08
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.qq.com/s/6zvI0rFSJEf9ORT4jP-C2g"
venue: "新智元"
sources: ["刚刚，karpathy惊呼「后agi」！ai通宵狂改110次代码，他去蒸桑拿.md"]
---

# 源：Karpathy 惊呼「后 AGI」

本文报道了 [[Andrej Karpathy]] 开源 [[autoresearch]] 项目及其在 [[nanochat]] 项目上进行的自动化科研实验。文章详细描述了 AI Agent 如何在 12 小时内自主提交 110 次代码变更以优化模型性能，而 Karpathy 本人则去蒸桑拿。这一事件被视为 [[科研自动化]] 和 [[元优化]] 范式的重要里程碑。

## 核心事件

- **实验背景**：Karpathy 使用 AI Agent 对其开源的 [[nanochat]] 项目（一个约 8000 行代码的 PyTorch 训练库）进行自动优化。
- **实验结果**：在 Karpathy 睡觉的 12 小时内，AI Agent 自主提交了 110 次代码变更，将验证损失（val loss）从 0.862415 降至 0.858039，且未增加训练时间。
- **工具开源**：Karpathy 随后开源了实现这一过程的工具 [[autoresearch]]（约 630 行代码），允许任何人利用单块 GPU 运行自动化的 AI 研究实验室。

## 关键概念与论点

### [[后 AGI]]
Karpathy 用「后 AGI」一词半开玩笑地描述了这种状态：人类将研究工作完全交给 AI，自己仅负责设定目标和约束（如去蒸桑拿）。这标志着人机协作范式的根本转变——从「人做实验」到「人设计做实验的 AI」。

### [[元优化]]
Karpathy 指出，他现在花在「调优 AI Agent 工作流」上的时间超过了直接改代码的时间。人类的工作从迭代代码本身，转变为迭代「让 AI 更好地迭代代码的那套系统」。

### [[固定计算预算]]
[[autoresearch]] 的核心机制是强制每一轮训练精确控制在 5 分钟。这确保了实验结果的可比性，并迫使 AI 针对特定硬件寻找最优配置。

## 局限性与未来方向

文章指出，目前的 AI Agent 更像是一个不知疲倦的「超参数调优工程师」，擅长实现想法但不擅长提出创造性想法。然而，随着 AI 能力的提升，趋势是清晰的——AI 将在自主改进下一代自己中扮演核心角色。