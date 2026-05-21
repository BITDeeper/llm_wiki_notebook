---
title: "o1之后下一个范式？隐式CoT大突破，让推理不再「碎碎念」"
date: 2026-02-01
source: "机器之心"
url: "https://mp.weixin.qq.com/s/YJzNgHjGJAsHh9D2Mfs4MQ"
rss_id: "2651014788_3"
---
魏熙林为本篇文章第一作者。魏熙林是复旦大学博士生，师从林达华教授，研究兴趣主要集中在 multi-modal LLMs 和 efficient AI。目前在上海人工智能实验室实习，指导 mentor 是臧宇航、王佳琦。
今天推荐一个 Implicit Chain-of-Thought（隐式推理） 的最新进展 ——
SIM-CoT（Supervised Implicit Chain-of-Thought）
。它直击隐式 CoT 一直「
扶不起来」的核心痛点：隐式 token 一旦 scale 上去，训练就容易塌缩到同质化的 latent 状态，推理语义直接丢失。
SIM-CoT 的
关键招式是一个 plug-and-play 的 step-level 监督模块
：训练时用辅助解码器把每个 latent token「
拉回」到可对齐的推理步骤上，既稳住优化、避免 collapse，又让隐式推理第一次真正可解释 —— 你甚至能把每个 latent token 解码成人类可读的中间推理步骤。
更爽的是：推理阶段零额外开销（辅助解码器训练完就丢），但效果却很猛：在 GPT-2 上相对 supervised CoT +2.1%、相对 Coconut +8.2%、相对 CODI +4.3%，在更大的 LLaMA（1B/3B/8B）上也能稳定带来 +1.5%～+9.0% 的提升，并且在 8–16 个隐式 token 这种 “前人容易崩” 的设置下依然稳得住。
目前这项研究刚刚中稿顶会 ICLR 2026，论文、代码、模型权重均已开源，欢迎使用！
Paper: https://arxiv.org/pdf/2509.20317
Code: https://github.com/InternLM/SIM-CoT
Huggingface: https://huggingface.co/collections/Wiselnn/sim-cot-supervised-implicit-chain-of-thought
图 1：(a) 潜变量不稳定：隐式 token 增多起初能提精度，但训练会变得不稳定，甚至塌缩。(b) 信息丢失：失败模型（5 个隐式 token）在隐式表示中丢失关键运算符信息（如 +、−），导致复杂推理无法进行。(c) 距离偏移：失败模型的 latent 间距离收缩、彼此过于相似，同时 latent 逐渐偏离词表嵌入空间中心。(d) 语义同质化：失败模型的 latent 表征趋同，解码结果分布变窄，输出多为数字；正常模型则能生成更丰富的内容。
从显式 CoT 到隐式 CoT：latent 稳定性与监督对齐的重大难点
复杂推理任务（如数学、符号推理、代码推理）长期以来都依赖显式 Chain-of-Thought（CoT）：模型把中间步骤一条条写出来，既能提升正确率，也便于人类检查与纠错。
如今，随着推理需求不断增长，显式 CoT 的两大瓶颈越来越突出：成本方面，长 CoT 会显著拉高 token 开销与时延；效果方面，显式步骤容易被数据格式牵着走，出现「
模板化推理」、冗长但无效的「
自说自话」。
这些局限性推动研究者转向一种更「
省 token」的新范式 —— 隐式 CoT（Implicit CoT）。它不再把推理步骤完整写出来，而是用少量隐式 token /latent 表征在模型内部完成多步推理：理论上既能保留推理能力，又能显著降低推理开销。
但把隐式 CoT 真正做稳、做强，远比想象中难，关键挑战在于：隐式 token 到底学到了什么？以及作者团队如何保证它学到的是「
可用的推理」，而不是「
投机的捷径」？
一个典型现象是 latent instability（潜变量不稳定）：当你尝试增加隐式 token 数量来「
scale 推理容量」时，模型往往不是变强，而是训练开始抖动，甚至直接 collapse（塌缩）。塌缩后的隐式 token 会出现明显的 信息丢失 —— 尤其是对符号推理至关重要的算子信息（+、−、×、÷ 等）被抹掉；同时 latent 之间的表示会越来越像，出现语义同质化：不同 token 学到的东西高度重合，最后解码出来的内容范围变窄，常常只剩下数字或非常单一的片段，复杂推理自然就做不下去。
现有隐式 CoT 方法在监督粒度上差异很大：Coconut 基本只做答案级监督，模型被要求「
最后答对」，但中间 latent 学什么几乎不受约束；CODI 虽然引入了蒸馏信号，把显式 CoT 的信息压到连续 latent 里，但更多是轨迹 / 整体路径级对齐。
SIM-CoT 的关键突破正是 step-level 监督：训练时用辅助解码器把每个 latent 对齐到对应推理步骤，从根上稳定并丰富 latent 推理空间，同时推理阶段不增加任何开销。
图 2: 框架对比：Coconut（左上）、CODI（右上）与 SIM-CoT（下）。Coconut/CODI 仅在答案或轨迹层面进行粗粒度监督；SIM-CoT 引入解码器将隐式 latent 与逐步推理对齐，在不增加推理开销的前提下提升性能。
监督设计新思路：好的隐式推理应当能被「
逐步解码
」回显式思维链
为了解决隐式 CoT 在 scale implicit tokens 时容易出现的不稳定与塌缩（latent 语义变得同质、算子信息丢失、复杂推理失效）这一关键难题，作者团队提出一个新的视角：
隐式推理的质量，与其「
可对齐的逐步语义」成正比
。换句话说，如果每个隐式 latent 真的在做第 k 步推理，那么它就应该能被一个轻量的解码器「
翻译」回对应的显式步骤（比如产生关键算子、关系、子目标），从而让 latent 不再是黑盒的连续向量，而是具备可控的推理结构。
基于这一动机，作者团队提出 SIM-CoT 的训练框架：在训练阶段引入一个辅助 decoder，把每个隐式 latent 与对应的 step-level 推理进行对齐监督（而不是像 Coconut 只监督答案、或像 CODI 更偏轨迹级 / 整体级的粗粒度对齐）。
这样一来，模型在学习「
如何答对」的同时，也被强约束去学习「
每一步该想什么」，从根源上抑制语义坍缩；更重要的是，推理阶段直接移除 decoder，保持零额外开销，但作者团队依然可以在分析时把隐式步骤解码出来做中间推理可视化，同时获得更强的性能与更稳定的 token scaling 效果。
SIM-CoT 实验结果
作者团队对 SIM-CoT 带来的收益做了系统评估，结论非常明确：更准、更稳、还更省 token。
（i）GPT-2 上：首次做到「
隐式 CoT 反超显式 CoT」，且 token 更省。
在 in-domain 的 GSM8k-Aug 上，SIM-CoT（以 Coconut 为骨干）把准确率从 36.6% 提升到 44.8%（+8.2），同时也超过显式 SFT-CoT 的 42.7%；并且保持隐式推理的低 token 开销（平均 token 远低于 SFT-CoT），论文总结为 2.3× token efficiency。
（ii）Out-of-domain 泛化更稳：整体平均提升显著。
在 GSM-Hard / MultiArith / SVAMP 三个外推数据集上，SIM-CoT（Coconut 骨干）的 out-of-domain 平均准确率从 42.6% 提升到 46.9%（+4.3），说明它并不是「
只会背训练域步骤」，而是确实把 latent 空间推理做扎实了。
（iii）在更强的隐式基线与更大模型上依然有增益，并显著提升稳定性。
在 GPT-2 上叠加到 CODI 之上也能继续涨（in-domain +0.6，out-of-domain 平均 +0.3）；扩展到 LLaMA 3.2 3B 时依然稳定带来 +1.5（in-domain）/+0.7（out-of-domain 平均） 的提升；论文也报告在 LLaMA-3.1 8B 上对 CODI 提升 +3.0。
（iv）效率不打折：推理阶段无额外开销，还更快。
因为辅助 decoder 只在训练期使用，推理期移除，所以 SIM-CoT 推理效率与其他隐式方法一致；同时在 GPT-2 上相对显式 CoT 仍体现出明显速度优势。
图三：作者团队在 GPT-2 以及 LLaMA 1B/3B/8B 基座上系统验证了 SIM-CoT 的性能提升，结果表明该方法在不同模型规模下均稳定有效。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com