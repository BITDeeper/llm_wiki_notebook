---
title: "ParaVT：走向并行 Agentic 视频推理的多智能体强化学习训练框架"
date: 2026-05-26
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/oRBjfnFJuVBs3jeihsjLlg"
rss_id: "2247660265_1"
---
首个面向『并行视频工具调用』的多智能体端到端 RL 训练框架 — 让长视频推理从一次一窗的串行回看，走向同轮并行的多窗印证。8B 模型在 7 项长视频理解基准上拿下 6 项开源 7-8B 规模 SOTA，平均比 Qwen3-VL-8B base
提升 +7.9%
；同时揭示并解决一对深层耦合失败 —— Tool Prior Paradox，把训练时 format compliance 从
0.13 抬到 0.64
。
ParaVT 论文：
https://arxiv.org/abs/2605.20342
Daily Paper：
https://huggingface.co/papers/2605.20342
代码：
https://github.com/EvolvingLMMs-Lab/ParaVT
模型：
https://huggingface.co/ParaVT/ParaVT-8B
数据：
https://huggingface.co/datasets/ParaVT/ParaVT-Parquet
主页：
https://evolvinglmms-lab.github.io/ParaVT
Part I ｜ Foundation
00 Agentic Video Reasoning 的现实困境：串行回看不够用了
当你想从一段两小时的足球比赛里同时确认 『决定胜负的进球』、『裁判出示红牌的瞬间』 和 『本场最佳扑救』 这三件事，你会怎么做？
普通人不会从头看到尾，更不会三件事排队来 —— 你会同时打开三个时间窗，左边拉到第 38 分钟，中间拉到第 72 分钟，右边拉到第 89 分钟，三个片段并行核对、彼此印证，然后给出回答。
过去一年，多模态大模型在长视频理解上从被动接收一切帧，走到了通过原生工具调用主动 zoom-in 回看的 Agentic 范式。但仔细看会发现，主流的 Agentic Video RL 方法都把这个『回看』动作沿 turn 维展开 —— 一次只看一个窗，错了等下一轮再修正。这套串行回看带来三个绕不开的痛点：
① 单次定位错了没有同行纠偏
一次只能 crop 一个时间窗，定位错了就只能等下一轮回头修正，过程中没有任何 peer signal 提示模型 "你这一次看错了"。
② 多轮上下文逐步污染
每一轮 tool-call 的输出都会留在 context 里，当推理走到第 5、6 轮时早期的错误已无法剔除，模型背着累积幻觉继续往下推。
③ 推理成本随 turn 数线性增长
每多一次回看就多一次完整 forward。部署侧延迟与显存全部被串行拉爆，强工具能力的模型反而越用越贵。
💡 核心信念
人类回看长视频从来不是串行的。当『需要多看几个片段才能下结论』成为视频推理的常态，工具调用本身就应该是 并行可印证 的，而不是把一个智能体拆成 N 轮去重复同一件事。
Part II ｜ 前情提要：从串行回看到并行印证
01 为什么是『并行』：把 N 次串行调用压进 1 个 turn
我们对这套老问题的回答简单粗暴：把 N 次串行工具调用，压缩到 1 个 turn 内并行 dispatch。
在 ParaVT 里，模型不再每轮挤牙膏般生成一个 crop_video 指令，而是在第一轮思考完成后就 一次性 给出多个时间窗调用 —— 系统并发执行这些 crop，把所有片段的精采样视觉证据一并送回，模型在第二轮统一做跨片段推理并给出答案。
图 1 ｜ Sequential vs. Parallel video tool calling。左：传统范式把工具调用沿 turn 维展开，每轮只看一个窗；右：ParaVT 在同一个 turn 内并发多个时间窗 crop，sub-agent 共享权重并行处理后再 gather & reason。
02 架构 & 多智能体设计：一个权重，两种角色
ParaVT 的核心是一个 weight-sharing 的多智能体体系 —— 同一份模型权重同时扮演两种角色：
Main Agent · 总指挥
接收原始长视频与问题，在第一个 turn 内同时生成多个并行的 crop_video(start_time, end_time) 指令。在最终 turn 负责把所有 sub-agent 的输出聚合成最终答案。
Sub-Agents · 并行观察者
与 Main Agent 共享同一份权重，每个 sub-agent 独立处理一个被 crop 出的高密采样片段，互不干扰地给出局部结论。
Gather & Reason · 跨片段印证
Main Agent 把所有 sub-agent 的输出合并，做跨片段对照推理 —— 三个窗看到的证据互相印证，替代了串行范式中『一次一窗、错了重来』的纠错循环。
📝 ParaVT 一句话总结
同一份权重既当指挥也当观察者，把『需要多看几个片段』的认知模式塞进单一 policy，让端到端 RL 训练能直接优化这种并行回看的能力 —— 部署侧不增加模型数量，训练侧不依赖外挂模块。
Part III ｜ ParaVT：核心方法、Tool Prior Paradox 与全面战绩
03 Tool Prior Paradox：RL 撞上 SFT 学到的工具先验
在 ParaVT 上直接套用 vanilla GRPO，我们观察到两个看似无关、其实由同一根因驱动的失败模式：
图 2 ｜ vanilla GRPO 上 ParaVT 出现的两个失败现象。左：Format Fragility —— 温度采样下结构性闭合 token 大面积 collapse。右：Tool Necessity Gap —— 『调 vs 不调』的 GRPO advantage 趋近于零，模型几步内退化到 0 工具调用。
Format Fragility ｜ 结构格式脆性
SFT 阶段模型学会了用
<think> / <tool_call> / <answer>
三组标签组织输出。但在 RL 阶段温度采样下，这些 closing tag 大面积丢失 —— 模型还在按结构思考，但 rollouts 已经不可 parse。
Tool Necessity Gap ｜ 工具必要性塌缩
64 帧 overview 已足以让相当一部分 prompt 『不调工具也能蒙对』，GRPO 对 『调用 vs 跳过』 的 advantage 趋近于 0；于是策略在几个 step 内就发现 『省事的捷径』，工具调用率从训练开始就一路向 0 滑落。
共因诊断：跨模型对照把 prior 摆出来了
我们做了一个跨模型对照实验：把同一套 RL 流程换到 tool prior 更弱 的 Qwen2.5-VL-7B 上 —— 格式不崩了，但 RL 完全调不出任何工具；反过来，tool prior 更强 的 Qwen3-VL-8B 探索得动工具，却付出格式 collapse 的代价。
图 3 ｜ 跨模型对照：弱 prior 与强 prior 的 LMM 在同一 RL 流程下，恰好交换了两种失败 —— prior 强度本身就是共因。
🏁 Tool Prior Paradox · 一句话定义
当工具能力被预训练越来越深地内化进 LMM，能让 RL 探索工具的，正是会让 RL 摧毁 SFT 结构格式的同一个 prior —— 想让模型探索工具，就必然要付出格式代价。
04 PARA-GRPO：用两个轻量组件拆掉这对耦合
我们提出 PARA-GRPO（Parseability-Anchored and Ratio-gAted GRPO），把上面两个失败一一对应到两个组件：
Exploration Anchoring · 只在易塌位置兜底
与其在整段 rollout 上做格式约束，不如把 format reward 只施加在最容易 collapse 的结构性 token 位置 —— 具体来说就是
<think> / <tool_call> / <answer>
的 closing tags。配合 Think Prefix + Answer Suffix 作为双侧锚点，把结构性 token 锁住的同时，让 tool-call 的 content token 完全自由探索。
nFrames Gating · 让『调工具』在 group 内挣得到 advantage
针对 Tool Necessity Gap，我们对每条 prompt 的 overview frame budget K 做 Uniform{4, 8, 16, 32, 64} 的随机化。这样 GRPO group 内会自然出现一部分『光看 overview 答不对、必须调工具才能拿到 reward』的样本，让 『调用 vs 跳过』 的 advantage 恢复非零，为探索工具提供持续的训练信号。
图 4 ｜ vanilla GRPO vs. PARA-GRPO 的训练曲线。左侧 format compliance 从 vanilla 的塌缩轨迹被拉回到 0.64 峰值（vs. vanilla 0.13）；右侧 tool-call rate 与 task reward 同步抬升。
05 实验结果：7 项长视频基准，开源 7-8B 拿下 6 项 SOTA
在 Qwen3-VL-8B 起步、4.4K PARA-GRPO RL 样本的设定下，ParaVT-8B 在 7 个长视频理解基准中拿下 6 个开源 7–8B 规模 SOTA：
① VideoMME w/sub：69.4　·　w/o sub：62.1
② LongVideoBench：60.4
③ LVBench：39.8
④ MMVU：68.6
⑤ Charades-STA mIoU：50.1
⑥ 对 Qwen3-VL-8B base 的平均相对提升：+7.9%
表 1 ｜ ParaVT-8B 与现有 Video-LMMs 在 7 项长视频理解基准上的对比。粗体为该列最佳，下划线为 ParaVT 在非整列最佳时的成绩。ParaVT-8B 在开源 7-8B 体量上 6/7 列取得 SOTA，并大幅缩小与 GPT-4o / Gemini-1.5-Pro 等闭源模型的差距。
消融实验进一步把每个组件的贡献拆开 —— Block A 沿训练阶段对比 base / SFT / vanilla GRPO / PARA-GRPO；Block B 逐一关闭 Exploration Anchoring、nFrames Gating、Tool Reward、Penalty 项；Block C 在同一 checkpoint 上对比串行 vs 并行 dispatch。完整 PARA-GRPO 配方（灰色行）在 5 列上是 block-wise 最佳。
表 2 ｜ Ablation Studies。f_τ 为 τ=0.7 采样下的训练时 format reward 均值，κ 为每条 rollout 的平均工具调用数。完整 PARA-GRPO 把 f_τ 从 vanilla 的 0.13 推到 0.41 mean / 0.64 peak。
Closing ｜ Vision
06 把工具调用变成 RL 与预训练 prior 协作的产物
过去一段时间，多模态 RL 后训练社区有一种隐含假设：prior 就是底座，RL 在上面自由优化；prior 越强，RL 收益越大。
Tool Prior Paradox 告诉我们：这个假设在工具能力被预训练越来越深地内化之后已经不再成立 —— 同一个 tool prior 既是 RL 能探索工具的前提，也是 RL 撕碎 SFT 结构格式的源头。PARA-GRPO 是一种 把 prior 当朋友 的尝试：只在 prior 最脆的位置兜底（Exploration Anchoring），同时让 prior 主导不了的地方持续产生学习信号（nFrames Gating）。
我们把整套范式、训练管线、4.4K RL 数据、ParaVT-8B 权重全部开源 —— 希望它能成为下一代 视频 agentic RL 工作的可复现起点。
入群加好友(v:xiao-ma-baoli)，请备注你感兴趣的技术方向