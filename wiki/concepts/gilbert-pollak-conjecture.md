---
type: concept
title: Gilbert-Pollak猜想（斯坦纳比猜想）
created: 2026-05-18
updated: 2026-05-18
tags: [数学猜想, 组合数学, 计算几何, ai-for-science]
related: [verification-function, wang-liwei-team-pku, ai-for-science, terence-tao]
sources: ["llm助力突破尘封60年数学猜想！北大王立威团队大幅刷新斯坦纳比下界.md"]
origin_date: 1968-01-01
---
# Gilbert-Pollak猜想（斯坦纳比猜想）

## 定义

Gilbert-Pollak猜想（又称斯坦纳比猜想）由贝尔实验室科学家Edgar Gilbert和Henry Pollak于1968年提出，是平面几何和组合数学领域的一个著名未解难题。

猜想指出：对于欧式平面上任意有限个点构成的点集，其最小斯坦纳树（SMT）长度与最小生成树（MST）长度的比值（即斯坦纳比），存在一个下界ρ，且该下界为 $\frac{\sqrt{3}}{2} \approx 0.866$。

## 直觉解释

给定平面上n个城市：
- **最小生成树（MST）**：修建n-1条铁路将它们连起来
- **最小斯坦纳树（SMT）**：可以额外修建若干个"中转站"再连接

合适地建立中转站会让路程变短，但猜想指出：并不会短太多——SMT长度至少是MST长度的 $\frac{\sqrt{3}}{2}$ 倍。

## 历史进展

| 时间 | 里程碑 |
|------|--------|
| 1968年 | Gilbert和Pollak提出猜想 |
| 1980年代 | 一系列工作逐步证明下界ρ = 0.824 |
| 1989-1990年 | 堵丁柱和Frank Hwang的相关研究被誉为离散数学界重大成果 |
| 2026年 | [[wang-liwei-team-pku|王立威团队]]利用LLM将下界提升至**0.8559** |

## 研究难度

该猜想曾吸引多位顶尖数学家深入研究，包括美国数学学会（AMS）前主席Ronald Graham（葛立恒）和美国国家科学院院士Fan Chung（金芳蓉）。从1980年代证明0.824下界后，近40年无实质性进展，直到2026年[[wang-liwei-team-pku|王立威团队]]的突破。

## 与AI的结合

[[wang-liwei-team-pku|王立威团队]]通过提出[[verification-function|验证函数]]概念，将猜想证明转化为LLM可处理的Max-Min优化问题，配合[[bottleneck-reflection-mechanism|瓶颈反省机制]]和[[structured-mathematical-reasoning|结构化数学推理]]框架，在约10轮迭代中将下界从0.824提升至0.8559。该成果被[[陶哲轩]]收录至组合数学优化常数列表（问题编号43）。