---
title: "超越Claude Mythos和GPT-5.5！斯坦福Agent验证框架拿下SOTA，Transformer作者转发"
date: 2026-04-27
source: "量子位"
url: "https://mp.weixin.qq.com/s/olxDZGz0QXuOWobf4UioOg"
rss_id: "2247886631_3"
---
LLM-as-a-Verifier 团队 投稿
量子位 | 公众号 QbitAI
Transformer论文作者Lukasz Kaiser以及GAN作者Bing Xu转发关注了一项工作——
LLM-as-a-Verifier
验证框架，该方法是一种通用的验证机制，可与任意Agent Harness和模型结合。
由斯坦福、伯克利与英伟达联手打造。
研究表明通过
扩展验证阶段的计算量（scaling verification compute）
，可以显著提升Agent整体性能，
并在最有影响力的AI编程基准Terminal-Bench上
超越Claude Mythos和GPT-5.5
！
LLM-as-a-Verifier在AI Coding基准Terminal-Bench和SWE-Bench Verified上均取得了当前最优（SOTA）性能。
方法
大多数Agent Harness实际上已经“具备”解决问题的能力。
当我们多次运行同一个Agent（例如运行100次），它往往能够在某一次尝试中生成正确答案。
但问题在于，它们无法判断哪一个才是正确的。
这一问题在长时序任务（long-horizon tasks）中尤为严重。
LLM-as-a-Verifier通过scaling
评分token的细粒度
（score granularity）、
多次评估
（repeated verification）以及
评价标准的分解
（criteria decomposition），显著提升了验证能力，并进一步提高了下游任务的成功率。
此外，团队发现随着评分token细粒度的提升，正负样本之间的得分区分度会进一步拉大。
核心问题：LLM-as-a-Judge的局限性
标准的LLM-as-a-Judge通过提示模型输出一个评分结果（例如，1到8之间的分数），并选择概率最高的评分作为最终的离散分数。
然而，这种方法往往存在
评分粒度过于粗糙
的问题。
在比较长时序Agent轨迹（trajectories ）时，LLM-as-a-Judge通常会为不同的轨迹分配相同的分数（例如，两条轨迹都被评为4分），从而
导致平局
，无法有效区分它们。
这种粗粒度的评分机制在Terminal-Bench上出现了
27%
的平局情况，限制了评判的精确性和区分能力。
LLM-as-a-Verifier: 从判分到验证的范式转变
从定义上讲，judge（裁判者）是对整体情况形成总体判断并给出结论的人；而verifier（验证者）则是对具体事项进行真实及正确性核验的人，因此需要更细致、更具体的评估。
为此，团队提出了LLM-as-a-Verifier。它通过扩展以下三个维度来提供细粒度反馈：
评分token的粒度（granularity of score tokens）
重复验证的次数（repeated verifications）
评估标准的分解（decomposition of evaluation criteria）
给定任务t以及两条候选轨迹
和
, LLM-as-a-Verifier构造评分prompt, 并通过从<score_A>和<score_B>中提取toplogprobs，得到对应的条件分布:
LLM-as-a-Verifier将轨迹的奖励表示为：
其中：
C=评估标准的数量
K=重复验证的次数
G=评分token的数量（粒度等级）
是模型对评分token的概率
=每个评分token映射为标量数值的函数
=离散评分token集合
在选择最佳轨迹时，我们采用
循环赛
（round-robin tournament）：对每一对候选轨迹(i, j), 验证器都会利用上述公式计算其reward。
奖励更高的轨迹获得胜利，而在全部比较中胜场数最多的轨迹，将被选为最终结果。
实验结果
在Terminal-Bench 2.0和SWE-Bench Verified等复杂的长时序基准任务中，LLM-as-a-Verifier的表现全面超越了前沿模型并均取得了当前最优（SOTA）性能。所有实验结果均来源于官方排行榜.
LLM-as-a-Verifier能够
在不同的Agent Harness框架中实现无缝集成
，其通用性验证于以下三个基准任务：
ForgeCode：验证准确率提升至86.4%；
Terminus-Kira：准确率提升至79.4%；
Terminus 2：准确率增加至71.2%。
这表明，无论针对何种Agent Harness或模型，该验证方法皆可高效兼容并提升性能。
LLM-as-a-Verifier在验证准确率和消除平局方面全面领先于传统的LLM-as-a-Judge。
即使在增加重复验证次数的情况下（如 k=16），Verifier方法依然保持了至少7%的验证准确率优势。
此外，它
完全消除了平局现象
。
试验结果表明，增加评分token的粒度（granularity）以及提高重复验证次数（repeated verifications）均显著提高验证准确率。
此外，在评分token维度的细化分级（1→20）中，
量化误差得到了极大降低
，从而更接近真实奖励。
LLM-as-a-Verifier放弃传统的单一评分机制，采用将轨迹验证解构为三个可组合的评估标准：
规范合规性 (Specification)：轨迹是否符合所有任务要求（路径、命名等）。
输出格式 (Output Format)：验证输出的格式是否符合预期结果。
错误检测 (Error Checking)：轨迹中是否存在明显的错误信号。
相比传统的LLM-as-a-Judge方法， LLM-as-a-Verifier框架利用更细致的评分粒度、重复验证，以及评估标准分解，实现了更高的验证准确率和更精确的区分能力，消除了评分平局现象，不仅提升了Agent性能，还显著增强了模型在长时序任务中的安全性和稳定性。
团队介绍
本项目由斯坦福大学CS博士生
Jacky Kwok
负责。主要贡献者包括伯克利EECS博士生
Shulu Li
。通讯作者有Ion Stoica（UC伯克利教授、Databricks创始人）、Azalia Mirhoseini（斯坦福教授，曾任职于DeepMind与Anthropic）、以及Marco Pavone（英伟达AI与自动驾驶研究总监）。
博客：llm-as-a-verifier.notion.site
代码：llm-as-a-verifier.github.io
联系方式：jackykwok@stanford.edu
一键三连
「点赞」「转发」「小心心」
欢迎在评论区留下你的想法！
—
完
—
我们正在招聘一名眼疾手快、关注AI的
学术编辑实习生
🎓
感兴趣的小伙伴欢迎关注 👉
了解详情
🌟 点亮星标 🌟
科技前沿进展每日见