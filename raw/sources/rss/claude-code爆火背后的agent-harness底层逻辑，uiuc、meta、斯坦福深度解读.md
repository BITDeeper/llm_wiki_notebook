---
title: "Claude Code爆火背后的Agent Harness底层逻辑，UIUC、Meta、斯坦福深度解读"
date: 2026-06-10
source: "机器之心"
url: "https://mp.weixin.qq.com/s/pbABbDO72fZQLGEUei8tJQ"
rss_id: "2651038068_2"
---
过去两年，大模型写代码已经不再新鲜。从代码补全到 GitHub issue 修复，从竞赛编程到仓库级软件工程，人们习惯用一个简单标准评估 coding agent：代码能不能写对？测试能不能通过？
但 Claude Code、Codex 这类系统的出现，正在把问题推向更底层的一层。真正强的 coding agent，并不只是 “会写代码”。它还要能在长时间窗口内读仓库、做计划、改文件、运行命令、查看报错、修复失败、维护上下文，并在多轮反馈中持续推进任务。
这套让模型长期可靠 “跑起来” 的执行系统，就是 Agent Harness。很多关于 harness 的讨论，关注的是模型外面应该包什么：工具、API、沙箱、记忆、权限边界、验证器、反馈循环。它们回答的是 “一个可用 Agent 需要哪些系统组件”。
来自伊利诺伊大学香槟分校（UIUC）、Meta 和斯坦福（Stanford University）的 102 页综述《Code as Agent Harness》进一步追问：
当 Agent 被放进长期任务环境里，真正把推理、行动、反馈、验证和协作串起来的操作对象是什么？
答案是：代码。
论文标题：Code as Agent Harness
论文：https://arxiv.org/pdf/2605.18747
GitHub 仓库：https://github.com/YennNing/Awesome-Code-as-Agent-Harness-Papers
这里的代码，不只是模型最终生成的一段程序，也不是说 Agent 框架本身由代码写成。它指的是 Agent 在 harness 中不断生成、运行、修改、保存和共享的一系列代码化中间物：Plan.md、测试脚本、shell 命令、patch、执行日志、workflow、技能库、仿真器、验证器，甚至共享仓库状态。
传统代码生成里，代码通常是模型最后交付的产物；
但在 Agent Harness 里，代码会进入整个执行循环，承载计划、执行、反馈、验证和状态管理，正在成为 harness 组织长期执行过程的核心媒介。
Code as Agent Harness 将代码视为 Agent 系统中的可执行、可检查、有状态媒介，并从接口、机制、多 Agent 扩展三个层次展开。
为什么 Harness 需要代码作为核心载体？
一个纯粹的大语言模型本质上是无状态的。它可以根据上下文生成下一段文本，但不会天然保存任务进度，也不会自动维护外部世界的状态变化。Harness 的作用，就是把模型接到真实执行环境里。
代码之所以适合成为 harness 的核心载体，是因为它有自然语言不具备的三个属性：
可执行、可检查、有状态
。
可执行，意味着模型的意图可以变成真实操作。一个计划不只是 “我将修改文件”，而是可以落成 shell command、patch 或测试脚本。
可检查，意味着执行过程会产生客观反馈。编译错误、runtime error、测试结果、日志和 trace，都能告诉系统当前发生了什么，而不是只依赖模型自我解释。
有状态，意味着任务进度可以被持久保存。仓库、文件系统、配置、测试、commit history、skill library 都能记录 Agent 已经做了什么、失败在哪里、下一步应该接着哪里做。
所以，这篇 survey 和一般 harness 综述最大的不同，不是又列一遍工具、记忆和沙箱，而是把代码放在中心位置：
代码是 harness 中最稳定、最可操作的状态载体
。
代码如何打通 Harness 的接口？
这篇综述的第一层是 Harness Interface：代码如何成为模型和外部世界之间的接口。
首先，
代码让推理可执行
。过去模型依赖自然语言 Chain-of-Thought 做推理，但文本推理很难验证。PoT、PAL 等方法把中间推理转成程序，让解释器完成计算；Lean/Coq 相关工作则进一步把推理变成机器可检查的证明过程。关键不在于 “模型会写程序”，而在于推理本身被外部化成了可执行对象。
其次，
代码让行动可落地
。对于 Claude Code 或 Codex，行动不是一句 “我会修复 bug”，而是实际修改文件、运行测试、查看报错、再生成 patch。对于机器人，SayCan、Code as Policies、Voyager 等工作展示了另一种形式：语言目标被转成技能调用、控制脚本或可复用函数。
第三，
代码让环境可建模
。Agent 要长期运行，就必须知道环境状态。软件仓库、测试结果、执行日志、DOM tree、仿真器、数据分析脚本，都可以成为 Agent 理解世界的结构化表示。SWE-bench、AgentBench 等可执行评测环境也正是基于这一点：任务不再只是静态问答，而是在一个可执行环境中完成。
代码进入 Harness Interface 后，推理不再只是文本，行动不再只是承诺，环境也不再只是描述。它们都变成了可以执行、检查和更新的状态。
代码在接口层连接 reasoning、acting 和 environment modeling，让 Agent 的推理、行动与环境状态进入同一个可执行闭环。
代码作为接口层的发展路线图。
Harness 如何用代码管理状态与反馈？
真实任务很少一步完成。修复一个 bug，可能要多次定位、修改、测试和回滚；操作一个网页系统，可能要跨多个页面和工具；做一个科学实验，可能要提出假设、运行模拟、分析数据，再根据结果调整下一步。
这时，关键不只是模型更强，而是 Agent 的每一步是否能被组织进一个可控的执行循环。
Planning
不再只是模型脑内计划，而可以变成 Plan.md、workflow 或可执行任务图。
Memory
也不只是 “更大的上下文窗口”，而是哪些仓库证据、执行日志、失败经验、历史 patch 应该被保存、压缩或卸载到外部状态中。
Tool use
也不只是 API 调用，而是通过终端、沙箱、测试框架、静态分析器等工具改变外部世界。
最核心的是
Plan-Execute-Verify 循环
。计划定义操作范围，执行在沙箱或受限环境中发生，验证依赖测试、linter、静态分析和运行日志。像 SWE-agent、OpenHands 这类系统之所以重要，不只是因为它们会调用工具，而是因为它们把 “写代码 — 运行 — 失败 — 修复” 组织成了可重复的状态转移过程。
一个成熟的 Agent 不应该害怕报错。报错、测试失败和执行日志，正是代码 harness 控制 Agent 行为、让它逐步收敛的反馈传感器。
规划、记忆、工具使用和执行反馈共同构成代码中心 Harness 架构，支持 Agent 长程运行。
多 Agent 协作时，代码是共享基底
当任务复杂到单个 Agent 无法完成，多 Agent 协作成为自然方向。一个 Agent 做 manager，一个做 planner，一个写代码，一个写测试，一个做 reviewer。
但多 Agent 的真正难点不是 “多叫几个模型讨论”，而是它们如何共享同一个世界状态。
如果多个 Agent 只靠聊天记录协作，很容易出现状态发散：每个 Agent 都以为自己理解了当前进展，但它们对代码到底被改成什么样、测试失败在哪里、哪些修改已经生效，可能并没有共同认知。
代码在这里提供了更稳定的共享基底。仓库、测试、PR、issue、CI log、review comment、执行 trace，都可以成为多个 Agent 共同读写和验证的对象。真正的协作不是 “互相说服”，而是围绕共享程序状态不断收敛。
多 Agent 系统的共同语言，不应该只是自然语言对话，而应该是可执行的共享代码状态。
在多 Agent 系统中，共享仓库、测试、执行状态和 workflow 构成协作基底。
从 Claude Code 到机器人：
代码正在成为 Agent 操作系统
Code as Agent Harness 最先在 coding agent 中变得明显，并不意外。软件世界天然可执行、可测试、可回滚、可记录，因此最适合作为 Agent 落地的样板间。
但这个趋势并不止于写代码。在 GUI/OS Agent 中，网页和操作系统正在被转化为可编程环境，DOM tree、accessibility tree、Playwright 脚本都让界面操作变成可执行状态转移。在机器人中，语言意图需要变成技能库、控制脚本和仿真反馈，抽象目标只有落到可执行代码里，才能被物理约束检查。在科学发现中，假设、实验、模拟、数据分析和实验记录可以被组织成代码流水线，Agent 不只是生成想法，而是通过可执行 pipeline 推进发现过程。
因此，未来很多 Agent 不一定都叫 coding agent，但它们很可能都会运行在某种 code-centric harness 之上。
模型像大脑，harness 像身体和神经系统；而代码，就是把大脑、身体、反馈和记忆连接起来的操作系统。
Code as Agent Harness 从代码助手扩展到 GUI/OS、机器人、科学发现、个性化系统等场景。
Open Problems：
下一代 Agent 不能只评测最终结果
当 Agent 变成长期执行系统，评测方式也必须改变。过去 benchmark 主要看最终结果：答案对不对、测试过没过、任务完成没有。但对于 code-harnessed agent，这远远不够。
一个 Agent 可能最终通过测试，但过程中做了大量危险修改、污染共享状态，或者引入隐藏 regression。另一个 Agent 可能没有完成任务，但执行轨迹清晰、失败原因明确、状态可恢复。真实部署中，后者未必更差。
论文因此提出了几个开放问题：如何做 harness-level evaluation，不仅评估最终输出，也评估计划、工具调用、状态转移和反馈使用；如何处理 incomplete feedback，因为测试通过不代表程序真正正确；如何实现 regression-free self-evolution，避免 harness 自我优化时引入新失败模式；如何解决多 Agent 共享状态中的语义冲突；以及如何把 human-in-the-loop 变成可记录、可追责、可验证的系统状态。
AI Agent 的下一步，不只是让模型更会回答，而是让整个代码化执行过程更可检查、更可恢复、更可治理。
过去，代码是模型的考题。
现在，代码正在成为 Agent 的操作系统。
关于作者
宁徐瑛（Xuying Ning），本文一作，伊利诺伊大学香槟分校（UIUC）CS 博士生，研究方向包括 AI Agent、多模态机器学习与信息检索，一作工作发表于 ICLR（Oral）、ICML 等顶尖会议，共累计发表论文 20 余篇，入选 2026 年 Siebel Scholar，曾在 Meta、Ant Group 开展研究工作。本文核心贡献者还包括 UIUC 博士生 Katherine Tieu、魏天心（Tianxin Wei）、李子豪（Zihao Li）、贝元琛（Yuanchen Bei），以及 Meta 研究科学家付东奇（Dongqi Fu）。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com