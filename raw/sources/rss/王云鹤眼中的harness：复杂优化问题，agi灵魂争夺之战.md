---
title: "王云鹤眼中的Harness：复杂优化问题，AGI灵魂争夺之战"
date: 2026-05-18
source: "机器之心"
url: "https://mp.weixin.qq.com/s/Jxf4hqDNiVeB8C0KqJCNFA"
rss_id: "2651033812_1"
---
机器之心转载
最近一段时间，Agent 又一次成为 AI 圈最热的关键词。
OpenClaw 这类开源项目走红之后，关于 Agent 的讨论迅速升温：Agent 到底是什么？应该怎么做？长期会演进到哪里？这些问题重新被摆到台面上。
近日，王云鹤在知乎上围绕这一问题发表了一篇文章，讨论了自己对
Harness Engineering
的看法，引起了AI 社区的关注与讨论。
机器之心经授权转载，让我们看下他对
Harness 的观点
。
原文地址：
https://zhuanlan.zhihu.com/p/2038669387150927679
其实长久以来，一直有一个问题没有被定义清楚，到底什么是 Agent？LLM 和 Agent 的边界在哪里？我也经常会跟人讨论，自主规划、自己判断、执行任务……
但是其实一直也没有个公论，随着 LLM 的能力持续提升，甚至很多时候有一种 Base model as Agent 的趋势，加上各种工具调用轨迹数据的回流后。比如问模型今天的日期和天气，模型去读取了本地的信息，这种时候，是叫它 LLM 还是叫它 Agent？
回到当下，从 OpenClaw 出来，关于 Agent 到底是什么，应该怎么做，长期演进方向是什么的讨论非常多，也衍生出来很多新的机会，无论是算法研究还是工程创新。
最早我跟人讨论的是 Agent 已经进阶到需要我们讨论 AgentOS 层面（非通信、协议等）了，Agent = Base Models+AgentOS。很多人会联想到上个时代的 OS，Android、Linux，但是此 OS 非彼 OS，AgentOS 里面包含了很多组件来进一步释放大模型本身的能力和拓展其应用边界。后来逐步大家收敛到 Harness Engineering 的概念 [r1]，也就是 Agent = Model+Harness。到现在，也有了更多的关于 AgentOS 和 Harness 的讨论和推演 [r2,r3]，我觉得无论是 AgentOS 还是 Harness，都是在告诉我们，Base model 很重要，但是怎么把它使用的更好，可能，更重要。
另外一个值得深度思考的问题是，
Harness 是否会长期存在，以及，Harness 会不会被模型吃掉？
有人会说，Harness 只是一个新概念，像以前的 rag、向量数据库一样会随着模型长序列能力的提升而消亡，但实际上呢？Rag 其实在升级而不是消失，加上了 prompt、工具调用、更多的知识等变成了 skills。很多 Harness 里面的元素都是一直存在的，并且随着模型能力和业界的算法与工程算法创新不断进化。并且 Harness 真正意义上的把所有的围绕模型的所有高价值元素都联动在了一起，是 Agent 时代最重要的事情之一。
好了，那我们现在可以回答最初的问题了，就是 Agent 是 Base Model（可以是 LLM、VLM、VLA……）加上 Harness 层面的任何优化，哪怕是多加一点点 prompt 优化，多加了一点工具调用，而不是 Base Model as Agent。那回到我自己的观点，我觉得 Agent 可能要更进一步，还是要变成 Agent = Models+Harness，也就是说多模型配合可以产生更好的 Agent 能力。先讲为什么：
1.
模型 “七国八制”
：我觉得模型的终局还早，先不谈中美模型的差距，立足当下国内的模型格局，还是一个七国八制的情况，各家模型根据自己的业务属性、根据自己的数据、根据自己最早 bet 的路线，一定会出现特异化的情况（有的生活娱乐类表现好、有的注重数学、有的 coding 能力强、有的长序列做的好），而且，价格也不一样。Claude Code 内部还会调用多款模型（opus、sonnet、haiku 等）来实现综合最优解。此外，不同模型尽管评测相差不大，但是在具体任务上的表现差异可能很大，甚至执行结果会跟 benchmark 关联度很小，还记得去年很火的 AI 量化的项目，qwen、deepseek、gpt、gemini、claude、grok 六个比拼的结果，最后胜出的是 deepseek 和 qwen，让人大跌眼球的是 gpt。后来我也跟朋友们分析过，结论是 gpt 太安全了，遇到高风险场景不敢做决策，但是往往那些才是收益率最大的地方。另外，服务于模型的 benchmark 也是非常多的，当然也有主观评测的榜单，这就导致了以不同基准不同体系评价出来的最优模型也是不一样的。
2.
模型中的任务会 “打架”
：在机器学习中很多任务是没法用一个统一的 loss function 来表达的，并且是不能用一个模型来学出来的。语言模型这块有一点不一样，首先 raw data 的 representation 是一致的，然后，通过 pre-training 和 scaling law 会抵消很多，但是还是有一些迹象。比如，快慢思考合一（非 prompt 切换）我们在 25 年 4 月份就努力的放到一起过，但是后来几乎所有人都放弃了。其实关于这个很早做 IPT（Pretrained Image Processing Transformer [r4]）的时候就遇到过，图像超分和图像去模糊是最容易冲突的两个任务，放在一个基模里面学不好，本质上这两个东西一个是高通滤波，一个是低通滤波，我觉得快慢思考从信号处理的角度也是一样的，于是后面我们又做了 instruct IPT [r5]。所以，哪怕模型同质化，不同的任务最优的模型，也会有差异性，除非所有人都对所有任务给同样的权重。
3.
复杂任务更需要多模型
：语言模型本身是个确定性的事情，大家在这个方向上已经足够卷了，排名靠前的几个模型不存在显著的性能上的差距。但是，Beyond LLM，未来还有更多复杂的任务，比如多模态理解和生成，具身智能的 agent 等，需要多个模型来协同，比如短剧生成，文案转写用什么模型？视频生成用什么模型？中间过程比如转场后的稳定性用什么模型和方法保障？具身智能更是需要多模型协同来做感知、决策、运控、预测、记忆等等。如果说基模的愿景是一个最强的模型吞噬掉所有的 Harness，那这个事情相较于上面两条，给 Harness 这一层的时间窗更大，甚至要 3-5 年以上了。
回到我为什么要对 Harness 这件事极度感兴趣，首先是各种模型能力的持续提升，尤其是 coding 和 planning 能力的爆发，迎来了 OpenClaw 这么史无前例的开源项目，也涌现了非常多的生产力应用，那如果进一步思考 Agent 解决问题的能力，其实是要解决一个复杂的优化问题的。比如，我们给定了一个任务，和一些可以用的 Base Models，那对应每一个模型，Harness 当中的每一个模组需要调整的可能是不一样的，也就是模型 vs agent 有很多子特性上的匹配。这也跟上面一段讲的 “七国八制” 有关。比如，有的模型 prompt 可以增长补充提升精度、有些模型 rag 挂多了反而会影响精度、有的安全加多了模型能力会剧烈下降。
所以，我对 Harness 这一层的认知是，
这是一个非常非常非常复杂的，优化和系统工程问题
，值得投入。
以任意一个 agent 任务 T 为例，我们先选取一系模型
，例如 GPT、Gemini、GLM、DeepSeek 等。考虑到 Agent 如果想实现辅助人甚至替代人，带来更多生产力方向的提升，它的价值范式应该是，任务价值 × 成功率 × Token 性价比，也就是我们还要提升每 Token 的智能（
Intelligence/Token
），所以这个优化问题的目标函数可以大致写成如下的形式：
其中，
和 P 分别是这个 agent 任务的 loss 和消耗的 token 总价。更进一步，
代表在把这个 Agent 分成多个步骤的时候每一个步，从 M 中选择合适的模型并执行，且每一个模型可以被选择多次也可以从不被选择，
代表着适配这个被选择的模型的 agent 组件（prompt、rag、memory、safety 等）怎么调整到最优的优化方向。这个优化问题，是面向任务对诸多先进模型的整合和优化，也就是学习到当代模型的 Harness Parameters。当然，这是个非常复杂的组合优化问题，但是其实也有很多手段，有一些 handcrafted 靠经验和 human in the loop 反馈，也有 llm as optimizer [r6,r7]，也甚至可以用过往的 automl 经验和算法来进行优化。并且除了 model 之外，这些其实也都有潜力成为可学习的参数，甚至变成独立的模型。
光是求解这个复杂的优化问题来带来更好的 agent 就是一个令人觉得有趣且有价值的事情了。但是，从公式 1 的角度，M 也未尝不可以被优化，尤其是在 Harness 上积累的数据，对下一阶段的模型也至关重要。这二者一定不是互斥的，甚至 Anthropic 告诉我们的道理是，基模很重要，但是 Harness 做好了可以反哺基模的进化，于是有了 opus 4-claude code 1.0-opus4.5-claude code2.0-opus4.6…… 的迭代。上一个时代，大家瞄着 AGI 要做的事情是，给定数据集，大家优化模型参数。当前这个阶段，Agent 在干的所有事情其实，都是给定模型，大家优化 Harness parameters。那如果，我们把 model parameters 也带入进来一起优化呢？
对应的下一代 AGI 路径很有可能就是
：
即，Model Parameters 和 Harness Parameters 迭代优化，或者，联合优化。那么，Harness 最触动我的事情是什么？
AI “灵魂” 之争
：广义上，大家会觉得大模型才是真正智能的大脑，是所有应用的核心源泉，就好比是汽车里的发动机，手机里面的芯片一样，然后 Harness 是驾驭大模型，是自动驾驶系统，是整个手机的软硬协同。但，如果公式 1 成立，要控制模型，甚至选择模型，AI 的大脑，或者说灵魂到底是在 Base Model 还是 Harness 呢？如果公式 2 存在可能性，那就是我们还要基于 Harness 来进一步增训模型，实现 Agent 中的自主进化，那灵魂到底属于谁呢？
[r1] Trivedy, Vivek. "The Anatomy of an Agent Harness." LangChain Blog, 10 Mar. 2026, http://www.langchain.com/blog/the-anatomy-of-an-agent-harness.
[r2] Liu, Rui, et al. "AgentOS: From Application Silos to a Natural Language-Driven Data Ecosystem." arXiv preprint arXiv:2603.08938 (2026).
[r3] He, Chaoyue, et al. "Harness Engineering for Language Agents: The Harness Layer as Control, Agency, and Runtime." (2026).
[r4] Chen, Hanting, et al. "Pre-trained image processing transformer." CVPR 2021.
[r5] Tian, Yuchuan, et al. "Instruct-ipt: All-in-one image processing transformer via weight modulation." arXiv preprint arXiv:2407.00676 (2024).
[r6] Yang, Chengrun, et al. "Large language models as optimizers." ICLR 2024.
[r7] Trivedi, Prashant, et al. "Align-pro: A principled approach to prompt optimization for llm alignment." AAAI 2025.
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com