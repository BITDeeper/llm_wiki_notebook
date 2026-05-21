---
type: source
title: "刚刚，Anthropic内部考题开源！年薪百万工程师，被AI秒了"
tags: [anthropic, 招聘, 性能优化, claude-opus-4.5, ai-vs-human]
related: [anthropic, claude-code, ai-resistant-technical-evaluations, 性能工程, 测试时计算]
created: 2026-01-23
updated: 2026-01-23
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/d-Qhr-FKX43uBqx2yFlKfA"
venue: "新智元"
sources: ["刚刚，anthropic内部考题开源！年薪百万工程师，被ai秒了.md"]
---

# 刚刚，Anthropic内部考题开源！年薪百万工程师，被AI秒了

## 概述
本文报道了 [[Anthropic]] 因 [[Claude Opus 4.5]] 模型能力过强，导致其内部技术招聘笔试失效，并被迫开源考题的事件。这标志着传统编程面试在 AI 时代的终结，以及招聘策略向“抗 AI”方向的艰难转型。

## 核心事件
Anthropic 性能优化团队负责人 [[Tristan Hume]] 宣布，由于 [[Claude Opus 4.5]] 在内部性能优化测试中追平甚至超越顶尖人类工程师，原有的考题已无法有效筛选人才。因此，Anthropic 决定将原版考题 [[original-performance-takehome]] 开源，并向全球发起挑战：寻找能击败 AI 的人类极限。

## 考题背景与技术细节
该考题旨在考察候选人的底层性能优化能力，要求在一个模拟的类 TPU 加速器上优化代码。核心技术挑战包括：
- **多核并行**：合理分配工作负载。
- **SIMD 向量化**：单指令多数据流操作。
- **VLIW 指令打包**：超长指令字架构下的指令调度。
- **内存管理**：手动管理 scratchpad 内存。

这套题目曾成功帮助 Anthropic 筛选出负责 [[Trainium]] 集群优化的核心工程师，但在 Claude Opus 4.5 面前彻底失效。

## AI 的表现与人类困境
- **Claude Opus 4**：已优于大多数人类申请者。
- **Claude Opus 4.5**：
    - 在 2 小时内追平人类历史最高纪录（1363 周期）。
    - 在 [[测试时计算]]（Test-time Compute）框架下，随着思考时间增加，分数持续下降（性能提升）。
    - 甚至在提示“理论极限”后，自主发现了只有极少数人类能发现的内存带宽优化技巧。

## 招聘策略的转型
面对“秒杀”级的 AI 能力，Anthropic 尝试了多种应对方案：
1.  **增加难度**：增加机器特性复杂度，但很快被 AI 攻破。
2.  **更换题型**：尝试 2D TPU 寄存器数据转置，结果 AI 发现了人类未设想的绕过路径。
3.  **追求“怪异”**：转向 [[分布外泛化]]（OOD）策略，设计类似 Zachtronics 游戏的极度受限指令集题目，迫使 AI 脱离其海量训练数据的优势。

## 核心矛盾
文章揭示了 AI 时代招聘的核心矛盾：**“真实感”与“防 AI”的互斥**。
- **高生态效度**：模拟真实工作的题目（如原版考题）最有效，但 AI 拥有最多的相关训练数据，最容易攻破。
- **低生态效度**：怪异的谜题（如 Zachtronics 风格）能防住 AI，但可能无法真实反映候选人的实际工作能力。

## 结论
Anthropic 最终承认，在有限时间的面试中，人类已无法在纯代码优化上战胜 AI。未来的招聘将不得不依赖更“怪异”的题目，或者接受人类在 AI 辅助下扮演“审美法官”或“架构决策者”的新角色。