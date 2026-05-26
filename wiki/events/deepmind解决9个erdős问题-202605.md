---
type: event
title: DeepMind 解决 9 个 Erdős 问题
created: 2026-05-25
updated: 2026-05-25
tags: [ai-for-science, 数学, 里程碑, deepmind]
related: [alphaproof-nexus, google-deepmind, erdős问题, 形式化证明搜索, ai-for-science, openai推翻单位距离猜想-202605]
sources: ["一个问题几百美元，deepmind智能体一次搞定了9个erdős问题.md"]
origin_date: 2026-05-18
time_span:
  start: 2026-05-18
  end: null
participants: [google-deepmind, alphaproof-nexus]
causes: [形式化证明搜索, alphaproof-nexus]
effects: [ai-for-science]
significance: high
---
# DeepMind 解决 9 个 Erdős 问题

2026年5月，[[google-deepmind]] 的 [[alphaproof-nexus]] 框架在一次测试中自主解决了353个 [[erdős问题]] 中的9个开放性问题，并证明了OEIS数据库492个猜想中的44个。

## 事件经过

- DeepMind 使用 [[形式化证明搜索]] 方法，结合大语言模型与 [[lean-形式化证明语言]] 编译器
- AI 自动作出证明并自动验证，随后通过人工审查
- 这是数学界和AI界已知的**首次针对开放式研究级数学问题进行的大规模形式化证明搜索评估**

## 成果数据

- 解决9个Erdős开放问题（提出时间跨度1970-1996年，悬而未决30-56年）
- 证明OEIS数据库44个猜想
- 每个问题成本仅数百美元，最低7.5-15美元
- 所有解法通过Lean编译器自动验证

## 架构发现

实验揭示了重要的架构洞察：极简的"基础智能体"（仅依赖 [[gemini-3-1-pro]] + Lean编译器反馈循环）同样能解出所有9个难题，暗示通用大模型的原生推理能力在客观反馈锚定下已足够强大。

## 竞争背景

同一周，[[openai]] 宣布推翻了近80年的"平面单位距离猜想"。两大AI巨头在同一周内相继在数学前沿取得突破，标志着AI数学能力的范式转变——AI已从做奥数题正式迈入解决开放性研究问题的新阶段。

## 意义

本事件标志着 [[ai-for-science]] 在数学领域的重大里程碑：AI 不再只是解决已知答案的竞赛题，而是面对人类数学家也未探索完成的"无人区"，自主创造新知识。科学发现的速度正在快速走向指数化。
