---
title: "更多非共识，Test-time Scaling 能否一直大力出奇迹？"
date: 2025-12-07
source: "机器之心"
url: "https://mp.weixin.qq.com/s/nxlKWG-2w6_c5lg-qkAl3w"
rss_id: "2651005827_1"
---
机器之心PRO · 会员通讯 Week 49
--- 本周为您解读 ③
个值得细品的 AI & Robotics 业内要事 ---
1.
多非共识，Test-time Scaling 能否一直大力出奇迹？
Test-time Scaling 有哪些非共识？流行的 Sequential 和 Parallel 路线有何局限？Test-time Scaling 为何需要「Better Search」？「温度」如何影响 Scaling 效果？Test-time Scaling 有哪些「Where」需要改进？...
2.
Skills vs MCP，谁才是
「大模型的 HTTP 时刻」？
一年过去，社区对于 MCP 的定位仍有争议？平均 25 个用户对应 1 个开发者，MCP 目前更多是开发者自娱自乐的产物？「人如其名」，Skills 真是来 kill MCP 的？MCP 能做但 Skills 不能做的，现在也没什么用？MCP 大规模落地还得看下一个「微信小程序」入口的出现？...
3.
从否定单模 AGI 到回应开源冲击，OpenAI 如何打造「最强平台」？
曾被视为真理的「单模 AGI」为何在商业现实面前彻底梦碎？曾被预言即将消亡的「提示词工程」，为何演变成了更复杂的「上下文工程」？要想真正掌控模型的大脑，为何必须遵从「强化微调」？在开源模型日益强大的今天，为何「拥有权重」依然无法等同于「拥有服务能力」？「按量计费」会成为 AI 商业化的最终形态？
...
本期完整版通讯含 3 项专题解读 + 34 项本周 AI & Robotics 赛道要事速递，其中技术方面 11
项，国内方面 12 项，国外方面 11 项。
本期通讯总计
24592
字，可免费试读至 7%
消耗 288 微信豆可兑换完整本期解读（约合人民币 28.8 元）
要事解读①
更多非共识，Test-time Scaling 能否一直大力出奇迹？
引言
：在数据枯竭和算力瓶颈的制约下，Test-time Scaling 成为预训练后另一种 LLM 「大力出奇迹」的改善手段。然而，在发展一年后，对于选择思维「深度」的 Sequential 路线或思考「广度」的 Parallel 路线，或是应当「重计算」还是「重思考」，业界对 Test-time Scaling 的改善思路仍充满非共识。
发展一年后，Test-time Scaling 仍然充满非共识？
1、自 2024 年 Q3 开始，Test-time Scaling 受到的关注持续攀升。这种通过在推理阶段动态地投入更多的计算资源，从而换取模型推理能力提升的做法已成为当前 LLM 性能提升的重要范式。
① 谷歌和 UC 伯克利在 2024 年 8 月的「Scaling LLM Test-Time Compute」中探究了如何通过增加测试时的计算量来提高 LLM 的性能，在当时引起了许多关注。
② 后续的 OpenAI o1 系列和 DeepSeek-R1 等前沿模型通过生成极长的 CoT，展示了解决传统单次前向传播无法处理的复杂数理逻辑与代码任务的能力，进一步将业界的视角聚焦至推理阶段。
2、基于大量围绕 Test-time Scaling 的探索方向，香港城市大学和麦吉尔大学等高校的研究者在 2025 年 5 月的综述中通过「What，How，Where，How well」四个维度较为系统地梳理了 TTS 方法。[1-1]
① 「What to scale」关注扩展对象，如 CoT 长度、样本数、路径深度或内在状态等。
② 「How to scale」关注扩展方法，如采用 Prompt、Search、RL，或是 Mixture-of-Models 等。
③ 「Where to scale」关注任务或场景，数学、代码、开放问答、多模态等。
④ 「How well to scale」关注对扩展效果的评估，涵盖准确率、效率、控制性、可扩展性等。
3、迄今为止，Test-time Scaling 范式已发展一年多。业界对 Test-time Sclaing 的机制和实现方法上有了更深入的了解，而衍生的改进思路则不时出现分歧与反思。
4、以「What to scale」为例，复旦大学邱锡鹏团队在 2025 年 2 月的「Revisiting」工作对类 o1 模型的机制进行了重新思考，发现当时流行的加长 CoT 的「Sequential」做法并不能持续提高准确率，并提出了 Parallel 的方式作为改进方案。[1-2] [1-3]
① 彼时，Deepseek-R1 和许多「o1-like」模型，试图从思考深度提升模型的思考 Token 数量，通过拉长思维链来实现内部的 Test-time Scaling 取得明显成效，也被总结为「Sequential」Test-time scailng。
② 「Revisiting」工作发现更长的 CoT（计算周期）并不能持续提高准确率。因为对于相同的问题，正确答案的计算周期通常比错误答案更短，而长 CoT 通常包含更多的自我修正，这通常会导致性能下降。
③ 该工作进而提出了「Parallel 」的方法，让模型在回答问题时进行并行推理得到多个推理路径，然后通过聚合这些不同的推理路径来得到最终的答案，从思考广度的角度提升模型的思考 Token 数量。
5、伴随业界对 Test-time Scaling 的持续探索，不断证实某一阶段的成果此前未发现的局限。除了「What to Scale」，业界对「How」和「Where」的仍存在许多非共识
① 从「What」的角度出发，随着各种改进推理思维链方案的提出，Internal（Sequential）路线的方法逐渐接近瓶颈，因此 External（parallel，hybrid 等）TTS 的方法现在非常流行。[1-4] [1-5]
② 从「how」的角度出发，有工作认为 TTS 的未来或许不在更多计算，而在更聪明的搜索。[1-6]
③ 从「where」的层面看，除了关注 TTS 对在推理密集任务的表现，也开始有工作 Test-time Scaling 对模型能力的提升是否能在更多场景适配。
挑战「More Compute」，如何理解「Better Search」对 Test-time Scaling 的独特价值?