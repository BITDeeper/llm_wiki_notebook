---
type: concept
title: 结构化数学推理
created: 2026-05-18
updated: 2026-05-18
tags: [ai方法论, 数学证明, ai-for-science, llm]
related: [bottleneck-reflection-mechanism, verification-function, gilbert-pollak-conjecture, agentic-engineering]
sources: ["llm助力突破尘封60年数学猜想！北大王立威团队大幅刷新斯坦纳比下界.md"]
---
# 结构化数学推理

## 定义

结构化数学推理（"搭积木"式证明）是[[wang-liwei-team-pku|王立威团队]]提出的一种确保LLM生成数学证明正确性的框架。核心思想是将复杂证明拆解为结构化的引理模板与规则，LLM只需选择并组合预定义的规则，由数学软件Mathematica进行逻辑验证。

## 设计原理

### 问题背景
LLM基于自然语言推理，其严谨性不可信赖。如果让人类逐一检查LLM生成的1000+个验证函数，时间开销不可估量。因此必须让LLM在**正确性可验证的框架**中运行。

### 引理模板
通过数学变换，找验证函数F可以转化为找两类引理：
- **Trapped Regular Point Lemma**（第1类）
- **4-Point Steiner Tree Lemma**（第2类）

LLM只需填入结构化参数，通过代码片段表达，系统通过翻译（嵌入代码片段）产生合法的F。

### "搭积木"规则
以第1类引理为例，提出A、B两类规则：
- **A类规则**：斯坦纳树必须满足的性质
- **B类规则**：确保点存在性的条件

LLM选择2-3个规则，调用Mathematica化简"什么条件下，若干个A能推出一个B"。

## 核心保证

**任何的创意搭建都不会产生逻辑错误**——这是该框架的关键优势。LLM在多轮工具调用中充分探索推理空间，而Mathematica确保每一步的逻辑正确性。

## 与Agentic Engineering的关系

该框架是[[agentic-engineering|智能体工程]]范式在数学证明领域的具体体现：通过精心设计的系统框架（引理模板+规则+外部验证工具）释放LLM潜力，同时约束其不可靠的自然语言推理。