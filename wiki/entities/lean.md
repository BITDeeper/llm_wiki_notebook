---
type: entity
title: Lean
created: 2026-05-26
updated: 2026-05-26
tags: ["programming-language", "proof-assistant", "formal-methods", "工具", "编程语言", "形式化验证", "mathematics", "formal-verification"]
related: ["axiom", "形式化验证", "axiomprover", "形式化证明", "claude-code", "陶哲轩", "gauss", "aletheia", "aristotle", "数学工业化", "axiom-prover", "mathlib", "math-inc", "形式化证明循环", "alphaproof-nexus"]
sources: ["务工家庭走出00后天才！退学造110亿独角兽，终身教授辞职追随.md", "陶哲轩亲测claude跑崩电脑，全靠这份保姆级指令清单翻盘.md", "ai证明首个菲尔兹奖成果，两周狂飙20万行代码！数学圈集体沸腾.md", "陶哲轩盖章！gpt-5.2杀疯了，我们终将沦为「硅基帕鲁」.md", "ai证明首个菲尔兹奖成果，两周狂飙20万行代码！数学圈沸腾.md", "华人女学霸ai杀疯！本科最难数赛12题全对，自主证明首次公开.md", "务工家庭走出00后天才！退学造110亿独角兽，终身教授辞职辞职追随.md", "ai-agent搞定世纪首次菲尔兹奖成果形式化！一周时间独立完成，20万行代码已公开.md", "留给人类数学家的悬赏不多了！谷歌deepmind一口气解决9道埃尔德什问题.md"]
---
# Lean

**Lean** 是一种交互式定理证明器和编程语言，属于形式化证明编译器。在 [[alphaproof-nexus]] 架构中承担逐行检查证明步骤和提供错误反馈的关键角色。

## 在AI数学证明中的核心作用

Lean构成了 [[形式化证明循环]] 的关键一环：

1. 大模型（Gemini 3.1 Pro）生成Lean语言证明步骤
2. Lean编译器逐行检查
3. 报错直接反馈给模型
4. 模型根据报错修改
5. 循环至全部通过

[[alphaproof-nexus]] 论文揭示了一个重要发现：**Lean编译器的纠错反馈对AI的引导作用远比人们预想的更大**。这暗示"大模型+专业校验工具"的简单循环范式可能在更多领域具有普适价值。