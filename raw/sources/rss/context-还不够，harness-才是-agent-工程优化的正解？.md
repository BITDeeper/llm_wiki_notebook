---
title: "Context 还不够，Harness 才是 Agent 工程优化的正解？"
date: 2026-03-22
source: "机器之心"
url: "https://mp.weixin.qq.com/s/ArVprJd0KD9ESlIEmmgQAQ"
rss_id: "2651022950_1"
---
本文来自PRO会员通讯内容，文末关注「机器之心PRO会员」，查看更多专题解读。
AI Agent 进入生产环境后，业界关注的重点正从生成转向执行。随着长程任务中的上下文挤压、工具开销和业务语境缺口持续暴露，单一的 Context Engineering 已难以支撑 Agent 的稳定运行，围绕执行环境、约束机制和反馈回路展开设计的 Harness Engineering 因而受到更多关注。
目录
01.
Agent 的稳定性问题还是得靠 Harness 来补？
Harness Engineering 将是 Context Engineering 之后的新范式？...
02
.
为什么 Context Engineering 还远远不够？
Andrej Karpathy 力挺的 Context Engineering 现在也不够用了？LLM 性能提升的关键不在于输入更多的 token？...
03
.
Harness Engineering 如何让 Agent 更稳定？
不同厂商正在给 Agent 加上哪些新的约束和回路？...
Agent 的稳定性问题还是得靠 Harness 来补？
1、为了让智能体在真实任务中更可用、更稳定，业内始终在持续推进相关的工程优化工作。随着 AI 应用从单轮生成走向多步执行，Context Engineering 受到了更多关注，主要解决模型在推理过程中「应当看到什么」的问题。
2、而随着真实任务复杂度的上升，近期有思潮认为，要进一步提升 Agent 的稳定性，工程优化的重点不能仅停留在上下文管理中，而需进一步拓展为执行过程本身的设计，因此更关注 Agent 「应当如何运行」的 Harness Engineering 进入研究视野。
① 今年 2 月，云基础 infra 公司 HashiCorp 联创 Mitchell Hashimoto 强调当 Agent 反复犯同类错误时，关键点在于让系统更快暴露错误、定位错误并推动修正，他将这类实践概括为「harness engineering」。[1-1]
3、自 2025 年 12 月开始，AI 社区的 Harness Engineering 的讨论开始逐步升温，并将其视为 Prompt Engineering、Context Engineering 之后，Agent 工程进一步走向执行框架设计的一种信号。[1-2][1-3]
① 相关讨论的核心判断是，决定 Agent 落地效果的关键，已不只是模型能力本身，而在于系统能否提供清晰边界、自动校验和可复用的纠错流程。
② 也有观点认为，这意味着新的工程分工正在形成，即模型负责生成与执行，人类则更多负责设定约束、补充反馈并持续优化运行框架。
4、目前业内有观点认为，Harness Engineering 的价值并不依赖于更换底层模型，而可以直接体现在系统层优化上，例如 LangChain 团队就在固定模型不变的前提下实现了 Agent 表现的明显提升。[1-4]
① 在今年 2 月，其 Deep Agents 团队在保持模型固定为 GPT-5.2-Codex 的前提下，仅通过调整 harness，就将 coding agent 在 Terminal Bench 2.0 上的得分从 52.8% 提升至 66.5%，排名从 Top 30 附近跃升至 Top 5。
② 其改进方法则是借助 trace 在大规模运行中识别失败模式，再针对性回写到 harness 中。 这意味着 Harness Engineering 将「调试模型」转化为了「调整系统」，并通过可观测性与闭环迭代持续放大了模型已有的能力。
③ 而近期 OpenAI 的内部实验则说明，Harness Engineering 的作用并不止于在固定模型下提升 Agent 表现，更在于通过重构环境、上下文组织和反馈机制，使 Agent 得以进入真实的软件交付、部署、修复和迭代流程。[1-5]
为什么 Context Engineering 还远远不够？
1、在围绕 Agent 可用性展开的工程优化中，业内一直在探索更好的解决方案。在较早阶段，业界一度将优化重心放在 Prompt Engineering 上，但随着 AI 应用从单轮问答走向多步执行与长链路任务，单靠提示词已越来越难覆盖真实任务中的上下文缺失、信息噪声与工具协同问题。[1-6]
2、在这一背景下，Context Engineering 逐步受到更多关注，其核心是围绕模型推理所需的信息供给，对检索、记忆、工具反馈与上下文组织方式进行系统化设计，以减少执行偏移、结果失真和后续返工。
① 在 2025 年中，Andrej Karpathy 也表示，相比 prompt engineering，他更认同 context engineering，因为在工业级 LLM 应用中，真正关键的并不是润色单条提示词，而是为模型下一步推理提供恰当的上下文。[1-7]
3、但随着 Agent 进入更长链路、更高复杂度的真实任务，Context Engineering 的局限性也开始集中暴露，它既受到上下文注意力预算的约束，也会因为工具接入和协议开销持续挤压有效认知空间，同时还难以自动补齐企业场景中真正关键的业务定义、数据口径和组织隐性知识...
关注👇🏻
「机器之心PRO会员」，前往「收件箱」查看完整解读
更多往期专题解读内容，关注「机器之心PRO会员」服务号，点击菜单栏「收件箱」查看。