---
type: concept
title: 瓶颈反省机制
created: 2026-05-18
updated: 2026-05-18
tags: [ai方法论, 迭代优化, ai-for-science]
related: [verification-function, structured-mathematical-reasoning, gilbert-pollak-conjecture, wang-liwei-team-pku, agentic-engineering]
sources: ["llm助力突破尘封60年数学猜想！北大王立威团队大幅刷新斯坦纳比下界.md"]
---
# 瓶颈反省机制

## 定义

瓶颈反省机制（Bottleneck Reflection Mechanism）是[[wang-liwei-team-pku|王立威团队]]提出的一种迭代引导信号机制，用于解决LLM在生成[[verification-function|验证函数]]时产生大量重复或平凡结果的问题。

## 核心原理

1. 在每轮成功提升斯坦纳比后，人为增加一个微小增量δ（如0.0001）
2. 让Reward Model以提升后的目标重新运行——此时必然反馈失败
3. 未被验证函数F覆盖的参数区域的bounding box，即为**瓶颈区域**
4. 瓶颈区域就是让ρ += δ必须克服的参数区域
5. 在下一轮LLM生成F时，必须确保能够覆盖瓶颈区域

## 解决的问题

单纯重复运行LLM生成1000+个验证函数，很可能其中很多是平凡的甚至重复的，对斯坦纳比没有实质提升。瓶颈反省机制为每一轮迭代提供精确的方向引导，确保每轮都能有效提升下界。

## 迭代流程

```
重复生成Reward → 确定瓶颈 → LLM Agent提出引理 → 翻译并开始下一轮
```

通过这一机制，系统在约10轮迭代中将斯坦纳比从0.824改进至0.8559。

## 泛化潜力

该机制不仅适用于[[gilbert-pollak-conjecture|Gilbert-Pollak猜想]]，文章提出可将其作为LLM辅助数学研究的通用方法论：当需要LLM在参数空间中搜索时，通过定位瓶颈区域提供精确引导，避免无效生成。