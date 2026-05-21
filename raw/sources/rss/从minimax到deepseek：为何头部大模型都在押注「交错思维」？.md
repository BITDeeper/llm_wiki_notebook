---
title: "从MiniMax到DeepSeek：为何头部大模型都在押注「交错思维」？"
date: 2025-12-04
source: "机器之心"
url: "https://mp.weixin.qq.com/s/cywh_EZkLYHKTu3Sv6E6Lg"
rss_id: "2651005516_2"
---
机器之心报道
编辑：杜伟、
+0
昨日，有位推特博主晒出了国内几大开源模型在轻量级软件工程 Agent 基准测试 mini-SWE-agent 上的成绩。该基准主要测试大模型在真实软件开发任务中的多步推理、环境交互和工程化能力。
结果显示，MiniMax 新一代大模型 M2 的表现最佳，一举超越了 DeepSeek、GLM、Qwen、Kimi 等其他一众竞品厂商。
更多测试细节请查看：https://x.com/KLieret/status/1995949673551724717
作为一个发布之初以 Agent 和代码能力见长的大模型，MiniMax M2 在 mini-SWE-agent 测试中的亮眼表现并不令人意外。它不仅可以出色规划、稳定执行复杂长链条工具调用任务，还能协同调用 Shell、Browser、Python 代码执行器和其他各种 MCP 工具。
支撑这些能力的关键技术正是 MiniMax M2 所采用的「Interleaved Thinking」（交错思维）
， 通俗地讲即是一边思考、一边调用工具。这一技术的加持，使得该模型能够在「思考 - 行动 - 反思」的闭环中持续积累上下文理解，并根据反馈实时调整策略。
这种更接近真实工程师的工作方式，显著提升了 MiniMax M2 的 Agent 执行能力，在复杂任务中规划性更强、执行稳健性更高、自我纠错能力更可靠，从而组成了其最具辨识度的核心优势。
发布仅仅一个多月，MiniMax M2 在实际 Agent 使用场景中获得了开发者的广泛认可。此前，推特博主 @elvis 表示，「MiniMax-M2 比我想象的要重要得多！我用 M2 构建了一个深度研究 Agent，交错思维确实不一般，它能在工具调用之间保留完整的内容块（思考 + 文本 + 工具调用），实现持续推理。这对自我改进的 Agent 非常有帮助。」
图源：https://x.com/omarsar0/status/1993325632961593417
就在以 Agentic AI 为核心主题的 AWS re:Invent 2025 大会上，AWS CEO Matt Garman 宣布旗下模型库 Amazon Bedrock 迎来多个「新成员」，其中就包括了国产开源模型代表 MiniMax M2。
不禁好奇，Interleaved Thinking 在背后是如何驱动大模型变得「更能干活」的？带着这些疑问，我们对这项技术进行了一番深入探究。
崛起的「Interleaved Thinking」，正成为 Agent 模型标配
传统的 Chain-of-Thought（CoT）往往是「线性」的：模型先进行一次完整的思考规划，然后批量调用工具，最后根据结果生成答案。这种模式在简单的问答中有效，但在面对现实复杂任务时往往会「顾头不顾尾」，尤其是在多轮次推理、跨步骤决策和实时动态调整方面显得力不从心。
随着 Agent 任务的复杂程度越来越高，这类模式的局限更加明显，因此催生出了全新推理范式的需求。这也正是 Interleaved Thinking 得以迅速崛起的原因所在。
Interleaved Thinking 这一路径的核心思想可以追溯到 2022 年由普林斯顿大学与谷歌提出的 ReAct 框架，该框架系统性地提出将推理与行动（工具调用）交错进行。此后，Anthropic 提出的 Extended Thinking 在强调长时与长链路推理的同时进一步完善了与工具调用等 Agent 场景的协同。
基于这些工作，MiniMax M2 采用的 Interleaved Thinking 通过
将推理贯穿于工具调用的每个步骤，在 Agent 执行过程中形成了高效稳定的「同步思考、实时调整、持续修正」循环
。
具体来讲，Interleaved thinking 是在显性推理和工具使用之间交替进行，同时在各步骤之间将推理推进。它本质上是一个「思考 → 行动 → 观察 → 再思考」的动态循环。这一过程显著提升了规划、自我纠正和长期工作流程的可靠性。
早期的 ReAct 很大程度上是借助 Prompt 工程在外部框架里「硬凑」出的逻辑闭环，链路常因格式或解析问题而中断；而如今的 Interleaved Thinking（如 MiniMax M2、DeepSeek V3.2）则把这类思考 - 行动模式更深度地融入了模型及其推理流程，让它更接近一种「原生的思维直觉」，因而更加稳健。
图源：https://t.co/u5DOdvTMtx
为什么它如此重要？
在长链路任务中，Agent 面临一个「致命杀手」：
状态漂移
。在复杂的 Agent 任务（如编写一个完整的游戏模组或进行深度行业调研）中，交互往往长达数十轮。如果模型在每一轮交互中丢弃了上一轮的推理过程，只保留工具的输出结果，模型就会陷入「失忆」状态。
它会忘记「我为什么要运行这行代码」或者「刚才那个报错排查到哪一步了」。这种上下文的断裂会导致模型重复执行无效操作，或者在多轮交互后偏离最初的目标。
而 Interleaved Thinking 从根源了解决了「状态漂移」问题，使得计划、意图和中间结论可以跨轮次延续。
图源：https://t.co/u5DOdvTMtx
看到这里，可能有读者会问：这不就是让模型「记性好」一点吗？它和现在热门的 Memory、Long Context 和 RAG 有什么区别？
其实，它们解决的是不同维度的「遗忘」问题。
普通的大模型记忆像电脑的硬盘。它侧重于「存事实」，记住的是用户的偏好、过往的知识库或几天前的对话摘要。 确保模型下次见到你，还记得你是谁，之前的项目背景是什么。
Interleaved Thinking 则像电脑的 RAM (内存)。它侧重于「存逻辑」，记住的是「我刚才为什么决定这么做」、「我对当前步骤的怀疑」、「我下一步的临时假设」，它用来维持正在运行的思维链状态。
当然，在实际工程中，这两者并非二元对立，而是互为表里。 我们往往需要 Long Context 作为巨大的容器，来承载 Interleaved Thinking 产生的大量推理过程。但如果不具备 Interleaved 的「思维动态维持」能力，单纯拉长 Context 只不过是给模型塞了一堆僵死的文字，模型依然会在海量信息中迷失方向。
简而言之，大模型记忆决定了 Agent 能「懂」多少过去，而 Interleaved Thinking 决定了 Agent 能「走」多远未来。
目前，Interleaved Thinking 这一技术正加速成为「行业共识」。除了 MiniMax 之外，很多其他头部大模型厂商也开始采纳：
Kimi K2 thinking
原生支持 Thinking-in-Tools 能力，掌握了「边思考、边操作」的动态推理节奏；
Gemini 3 Pro
确立了「内部 Thinking 模式 + 思路签名（Thought Signature）」的标准，支持多轮 Context 回传与 Tool-use/Agent 的深度协同，确保持续推理不掉线；
DeepSeek V3.2
推出了首个将思考深度融入工具使用的 Thinking in Tool-Use 机制，在工具调用期间保留推理上下文，实现了思考与执行的无缝衔接。
可以说，
Interleaved Thinking 已不再是单一厂商的特色，而逐步成为高性能 Agent 模型的「标配」
。
作为最早官方支持该技术的开源模型，MiniMax M2 在提升 Interleaved Thinking 的性能与效率上已经形成了自己独到的一套打法。
既强又省，MiniMax M2 用交错思维定义 Agent 新范式
Interleaved Thinking 的核心价值在于高强度的「工作记忆」维持能力。正是这种在每一步工具交互中保留并传递推理内容的机制，确保了 MiniMax M2 在执行长链路任务时，能够实现高效的自我修正、动态规划与样本复用，有效避免了逻辑中断。
根据 MiniMax M2 的实测数据，保持前轮思维状态带来了显著的性能提升：在充满不确定性、极度依赖「观察 - 调整」循环的 BrowseComp（网页浏览任务）中，保持前轮思维状态让性能从 31.4 跃升至 44.0，涨幅高达 40.1%；在 Tau² 复杂工具调用测试中，性能提升了 35.9%；即使是在本就极高难度的 SWE-Bench Verified 软件工程基准上，也依然取得了 3.3% 的显著增长。
不仅强，而且极其「省」
为了验证这一机制在真实开发流中的威力，AI Agent 系统经理 Muratcan Koylan 构建了一个具体的演示：为设计系统团队自动生成一份简报。这项任务需要模型整理关键 Design Tokens（如颜色、排版、间距）、定义按钮组件的实现规范，以及输出可复用的开发模式。
图源：https://x.com/koylanai/status/1990692277723734153
在这个演示中，传统模型试图「一口吃成胖子」，一次性调用所有工具，容易导致结果偏差。而 M2 展现了清晰的节奏：先获取颜色 → 反思 → 再请求排版 → 再请求间距。这种「思考 → 行动 → 消化结果」的循环，让每一步决策都通过 reasoning_details 清晰可见，不再是黑盒。
对于开发者而言，技术先进性最终要通过成本和效率来落地。Muratcan 的测试数据还展示了 M2 惊人的经济性：在这个包含 8 步推理、7 次工具调用 的完整流程中，MiniMax M2 的总成本仅为 $0.001669。相比同级别的 Claude Sonnet（约 $0.020），
M2 便宜了近 12 倍
。
这意味着，在相同的预算下，开发者可以使用 M2 进行 12 倍的迭代实验。Muratcan 指出，这种「高可见性 + 低成本」的组合，让快速迭代真正变得可行，这对于构建复杂的工具编排和开发工作流来说，是游戏规则的改变者。
如何榨干 M2 的全部性能？
尽管 MiniMax M2 能力强大，但在发布初期，官方社区反馈发现了一个普遍现象：很多开发者并没有正确「打开」 Interleaved Thinking。
常见误区包括：调用 API 时丢弃上一轮推理内容、或在使用 Anthropic 格式时过滤掉了 thinking blocks。一旦上下文断裂，模型只能从零推理，性能直接腰斩。
为了确保开发者能榨干 M2 的全部性能，MiniMax 提供了两种主流 API 格式的最佳实践：
MiniMax 官方 API： 采用内容与推理分离的设计，推理过程通过独立的 reasoning_details 字段返回，清晰且易于解析。
Anthropic 兼容 API： 完美适配 Claude 生态，天然支持多类型内容块，只需保留并回传 thinking blocks 即可。
这些实践表明了，MiniMax M2 正在为困扰业界已久的 Agent 落地难题，打开了一种全新的解决思路。
写在最后
在被称为 Agent 落地元年的 2025 年，直到现在仍有很多 AI 界人士持有悲观态度，比如 Andrej Karpathy，他在上上个月的一次访谈节目中表示，当前市面上的 AI Agent「令人失望」，并预计大约还需要 10 年时间，它们才可能发展到真正可用、可靠的状态。
这里首要解决的一大挑战便是：模型思考过程与工具执行之间真正实现丝滑、高效的协作。如今随着 Interleaved Thinking 的机制不断完善，其能力逐步得到充分释放，这一问题也随之有了可行性更高的技术解决方案。
当然，Interleaved Thinking 想要赢得更多厂商和开发者的青睐，少不了其他各环节的系统性支持。MiniMax M2 发布时，社区对该技术的支持非常有限。为了改变这一现状，MiniMax 采取多种途径推动该技术成为可复用的行业标准。
过去几周，MiniMax 与 Kilo Code、RooCode、Cline、OpenRouter、Ollama 等众多合作伙伴合作，提供了多个关键 PR，实现了这些编程工具、API 平台对 Interleaved Thinking + 原生工具调用的广泛、良好支持。同时，基于内部的 Benchmark，MiniMax 与合作伙伴一起对这些实现进行了测试，确保对应实现的正确性和效果。
以 Kilo Code 平台为例，其已经支持最新版本的 MiniMax M2，并默认启用了 Interleaved Thinking 与原生工具调用的功能。用户对此高度评价，「MiniMax M2 + 工具能力 + 免费开放 = 绝对的赢家组合」。
图源：https://x.com/kilocode/status/1990419655991652649?s=20
此外，为了让开发者更快掌握 Interleaved Thinking 与 Agent 的最佳实践，MiniMax
开源了支持该技术的 Coding CLI——Mini-Agent
。通过可直接运行的工程示例，用户可以直观地看到 MiniMax M2 通过 Interleaved Thinking 构建 Agent 的效果。下图展示了 Agent 使用其网页搜索工具在线获取最新信息，并为用户进行总结。
目前，该项目已获得了 700 + 的 Star，在社区中的关注度持续提高。
GitHub 地址：https://github.com/MiniMax-AI/Mini-Agent
社区和生态建设层面的一系列举措意味着，MiniMax 正为行业构建一套更标准化、工程化的 Agent 执行范式。这些举措也将加速让 Interleaved Thinking 从模型内部的技术特性演变为开发者可直接调用与集成的能力。
随着包括 MiniMax M2 在内的大模型展现出了高效稳定的 Agentic 能力，未来可能有更多厂商采用类似技术，并将推动更多 API 平台和编程工具完善相应的支持与适配。
Agent 迈向真正生产级阶段的转折点，或许已经从 Interleaved Thinking 开始了。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com