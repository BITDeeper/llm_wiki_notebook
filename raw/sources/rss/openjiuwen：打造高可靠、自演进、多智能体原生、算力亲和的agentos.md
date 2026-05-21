---
title: "openJiuwen：打造高可靠、自演进、多智能体原生、算力亲和的AgentOS"
date: 2026-04-03
source: "机器之心"
url: "https://mp.weixin.qq.com/s/ONsIrYUCip5e4lc0ZzSPhA"
rss_id: "2651025732_2"
---
机器之心发布
近期，我们注意到 openJiuwen 社区持续获得国际关注，先后登上多家海外科技媒体。亚太头部科技媒体
Tech in Asia
专题报道了 openJiuwen 先进的架构设计理念 [1]；国际权威 AI 科技媒体
MarkTechPost (MTP)
则深度解析了基于 openJiuwen 构建的 JiuwenClaw 智能体，重点解读了其自主演进、动态任务规划等技术亮点 [2]。两大国际媒体的相继报道，体现了 openJiuwen 的技术能力已获得国际科技领域的关注与认可。
当前 AI Agent 正从演示场景走向规模化落地，但在算力效率、运行稳定性、安全可控及多智能体协同等方面仍面临诸多瓶颈。在此背景下，openJiuwen 面向智能体落地痛点，
打造企业级高可靠、自演进、多智能体原生、算力亲和的 AgentOS
，为 AI Agent 规模化应用提供关键支撑。
Agent 规模落地生产
需要操作系统级别的变革
随着大模型技术的不断发展深化，
AI Agents 这类能够理解目标、任务规划、深度思考、调用工具、反思验证的模式成为人工智能走向落地的关键应用形态，并正在加速规模化落地，也带来了巨大的机遇和挑战
。Nature 杂志报导了 “Moore’s Law for AI agents”，指出 Agent 应用的复杂度正以每 7 个月翻一番的指数级速度发展，这不仅带来了澎湃的算力需求，也预示了巨大的技术挑战。
首先，Agent 在复杂任务执行过程中常伴随大量上下文堆积与重复推理，导致
Token 消耗大、运行成本高
，制约其规模化落地。其次，
安全与可控性问题突出
，权限管控不足、工具调用风险较高、执行过程缺乏有效约束，使其在实际场景中的可信度与可控性有待提升。
同时，在多步骤、长链路、动态变化的复杂任务中，
Agent 任务成功率仍然偏低，稳定性与鲁棒性不足
。长时运行缺乏可靠保障，易出现执行中断、逻辑漂移、状态遗忘和能力失效等问题。尤其在多 Agent 协同场景下，智能体间的一致性、完整性和协作可信更缺乏系统性保障，难以满足企业级高可靠、高可控的应用要求。
最后，当前 AI 算力基础设施成本居高不下，模型推理服务、超节点集群等大规模设施部署与运行开销巨大。Agent 的负载兼具通用计算、智能计算以及网络、存储等多维需求，资源消耗模式复杂，如何让这类智能体在昂贵的算力设施上高效运行、降低整体使用成本，已成为关键挑战。
面对 AI Agents 独特的负载与算力需求，以及大规模算力基础设施的快速演进，需要有一个
‘AgentOS’作为中间衔接层，既能管理好底层的基础设施，也能有效支撑 Agent 的运行开发。openJiuwen 正是承担这个角色的 ‘AgentOS’
，聚焦 AI Agent 规模化落地的核心痛点，致力于打造安全可信、高效稳定的智能体运行与协同底座，为 Agent 提供统一任务调度、上下文管理、自主演进、权限治理、长时运行保障及多 Agent 协同能力，助力企业和开发者跨越 “可演示” 到 “可生产” 的关键门槛，加速 AI Agent 规模化落地。
openJiuwen as the AgentOS
openJiuwen 以 Agent 应用负载为核心服务对象，南向亲和模型和算力基础设施，北向使能各类智能体，其生态定位即为 AgentOS。
openJiuwen 官网：https://www.openJiuwen.com/
AtomGit：https://gitcode.com/openJiuwen
GitHub：https://github.com/openJiuwen-ai
同时，openJiuwen 提出
“CLI as New POSIX, Skill as New Library, Agent as New Service”
三大设计理念，并以此为指引构建了完整的总体架构。
AgentOS 总体架构图
Agent System Service — CLI as New POSIX
AgentOS 原子化系统服务借鉴 POSIX 对进程系统调用的标准化，定义了智能体时代全新系统原语：感知（perceive）、规划（reason）、行动（act）、记忆存储（memory store）、隔离（sandbox）。遵循该规范的 Agent 均可实现跨场景、跨设备统一运行。该层同时支持 Agentic UI 动态生成，可依据用户身份、任务上下文与设备类型实时渲染界面，提供个性化交互体验。
Agent Distributed Runtime — Agent as New Service
微服务架构让应用走向分布式协同，而 Agent Distributed Runtime 则让智能体实现分布式协同。各 Agent 职责单一、接口标准、可独立部署，通过 Intent Router 进行语义路由，并由 Orchestrator 完成动态编排。该层依托智能体注册发现、跨节点通信、分布式状态管理与多租户隔离能力，构建可治理的分布式智能体网格（Agent Mesh），支撑企业级大规模 Agent 并发运行。
Agent Framework — Skill as New Library
正如编程语言标准库助力开发者高效开发，Agent Framework 让 Agent 开发者可复用已沉淀的智能能力。Skill 作为封装完备的可复用 Agent 能力单元，支持版本管理、依赖声明、权限声明及自动化测试；该框架提供 Agent 协议、ReAct 执行引擎、上下文与记忆管理、Agent 护栏、Skill 引擎，以及基于执行反馈的 Agent 自演进等能力。
开箱即用的通用 Agents，系统性能 Turbo Skills + Skill Inventory
AgentOS 开箱即提供面向企业、个人及设备控制的通用 Agents，同时内置可提升系统性能的 Turbo Skills。Skill Inventory 作为智能体生态分发平台，支持官方、厂商、社区及私有 Skill 的统一上传、审核、发布与安装，实现开发者一键获取能力、Skill 贡献者触达全生态用户。
openJiuwen as AgentOS 的主要特征
算力亲和：降时延、提吞吐、省 Token
在 AgentOS 的设计范式中，算力亲和是实现系统级超高性能的基石。
为了最大化释放算力潜能，openJiuwen 向上承接各种 Agent 应用的高并发请求与复杂任务编排，向下与底层硬件实施深度的软硬协同。
在智能计算协同方面，openJiuwen 与 NPU 等 AI 算力搭建了主动亲和机制。
当 Agent 长时运行时，上下文会频繁压缩 / 卸载 / 切换 Skills，导致推理引擎中存在大量失效的 KV Cache，侵占有效缓存空间，降低缓存命中率，进而影响 Agent 运行时延。openJiuwen 在 Agent Framework 核心层，通过 Agent 上下文动态感知协同、NPU 亲和缓存调度，提升 KV Cache 整体利用率，保障 Agent 长时运行与高频上下文变动场景下的极致响应，降低 Agent 时延 30%。
在通用计算与系统调度层面，openJiuwen 与 CPU 构筑了稳固的底座。
传统 OS 以进程 / 线程为对象设计调度策略，面向 Agent 超长调用链路负载时这些策略易引发无序资源供给，从而导致 Agent 性能波动和时延不可控。openJiuwen 在 Agent System Service 核心层，与 CPU 感知调度能力协同，基于 Agent 业务流将进程 / 线程无序调度转变成有序全流程协同调度，提升 E2E 吞吐 20%。
系统级 Turbo Skills，赋能全生态高效开发
从 AgentOS 的角度，Skill 就是新的 Library。
当前的 Skill 还远远不够，如何把系统的底层优化能力作为 Skill 提供给 Agent 开发者使用，帮助他们开发出功能全面、性能领先的 Agent 是一个新的课题，我们把这一方式抽象为 “系统性能 Turbo Skills”。
例如，面向云与数据中心复杂运维场景，openJiuwen 能够预置各类高效运维 Skills。指标采集 Skill 实时监控主动感知问题，细粒度指标动态触发采集，分钟级检测 AI 慢节点并溯源，识别准确率 80%；故障检测 Skill 动态感知系统拓扑，多源日志协同关联故障节点，实现内存故障小时级定位，准确度 > 80%；调优 Skill 动态识别环境拓扑和业务拓扑，结合通算 + 智算芯片亲和领域模型和参数 / 策略关系知识库，实现系统自动参数 / 策略寻优，提升专家优化效率。
长时确定性运行，消融不确定性，走向低熵
在企业级复杂 Agent 任务中，核心矛盾是
LLM 推理的无状态性与长时任务对持续状态一致性的刚性需求之间存在根本冲突
—— 每一次推理调用结束后，Agent 的 "记忆" 即刻消亡，而企业级工作流却要求系统在数天乃至数周的执行跨度内保持语义连贯与行为确定性。openJiuwen 围绕这一系统性难题，构建了如下核心技术能力：
分层记忆与上下文管理。长时运行 Agent 面临的首要瓶颈是上下文窗口的 "爆炸" 问题。
即便模型支持百万级上下文窗口，系统提示、工具输出等信息的累积也会迅速填满上下文空空间，不仅如此，大量无关的信息，会带来模型注意力稀释、模型幻觉等问题，给系统注入更多的不确定性。openJiuwen 围绕企业数据、交互摘要、工具调用日志等多模态数据，构建多层知识图谱与双时间轴建模体系，实现记忆的智能提取、按需失效与动态重排序，支撑 Agent 在长时任务中高效、精准地获取领域知识，避免上下文冗余与噪声累积。另一方面，当 Agent 需要回溯或分支执行时，系统通过上下文裁剪与重置算法识别最小必要上下文集合，进一步抑制模型注意力稀释、幻觉等问题，消减系统不确定性。
使能长时确定性运行的另一个关键技术是 Agent 对自身执行过程的反思与纠偏能力。
在长时任务的漫长执行链路中，执行偏差的累积效应会逐步放大，若缺乏系统化的自检机制，Agent 的行为将不可避免地偏离预期目标。openJiuwen 在分布式引擎中构建了双通道验证架构，将 LLM 的 "快思考" 概率推理与形式化方法的 "慢验证" 确定性校验相结合，在运行时将校验结果反馈给 Agent，引导其在受限搜索空间内重新规划。这一 "执行 — 验证 — 修复" 的闭环机制，使 openJiuwen 在概率性之上构建起确定性保障。
分布式状态管理与 Agent 互联，使能可靠高效运行
大规模、高并发、高吞吐是 Agent 应用运行的重要需求，分布式状态管理是保障企业级大规模 Agent 任务可靠运行的基石。
Agent 任务天然是有状态的，比如长程任务的执行进度，各个节点 Agent 执行状态等等，一旦这些执行状态丢失或出现不一致，任务链逐级放大。openJiuwen 的分布式运行时，将 Agent 运行状态实时分布式备份，一旦节点故障自动重建实例并恢复正确的内部运行状态，实现断点续跑，确保 Agent 故障恢复前后语义一致无副作用，有效防止 Agent 因推理错误或系统崩溃而在外部系统中留下不一致状态。
在 Agent Team 场景中，多 Agent 系统需在异构单元间建立高效的发现与互联协议，实现从单点执行到群体智能的升级，支撑复杂场景高效协作与全局优化。
原生自演进框架：全链路自主演进，越用越好用
构建闭环、可自主迭代的自演进能力，是 Agent 突破能力上限、实现从被动响应到主动进化的核心支撑。
在企业级复杂场景与规模化落地过程中， openJiuwen 仅依靠静态配置、人工调优难以满足 Agent 能力持续升级与规模化适配，执行偏差、能力固化、经验无法沉淀等问题直接制约智能体的持续进化与生态扩展。
openJiuwen 基于原生自演进架构，支持提示词自动优化与上下文经验沉淀。
通过对 Agent 运行中产生的 bad case 进行轨迹分析，采用「文本梯度」机制对提示词进行自动化、非随机、具备梯度意义的持续优化；同时在任务执行后反思轨迹、提炼结构化经验，不断进化经验库，将任务执行转化过程为可复用的长期经验。
openJiuwen 依托工具与 Skills 自演进，实现 Agent 可用能力的实时迭代升级。
基于 Agent 执行异常与用户纠错两种信号，将实际使用问题实时转化为 Skills 的改进输入，驱动工具与 Skill 持续迭代更新，让技能从静态文档转变为可不断进化的活文档。openJiuwen 这套自演进体系让 Agent “每次使用都是一次有效训练”，从而实现 Agent 端到端的全链路自主演进，低成本、高效率地提升智能体执行效果。
安全可信，构建 Agent 全栈纵深防御体系
为保障 AI Agent 在企业环境中的安全落地，基于纵深防御理念构建 openJiuwen 的六层安全防护，确保 Agent 执行全链路安全可信：
身份认证
：支持对接企业内部统一认证和授权系统，将用户身份与 Agent 身份绑定，确保业务仅对合法授权主体开放。
权限管控
：支持基于用户意图 + 任务上下文的细粒度权限控制，根据任务内容动态生成权限清单，实现按需最小化授权。
行为检测
：多层安全护栏覆盖 Agent 输入输出、规划执行与外部交互全链路，保障 Agent 在用户误操作、模型输出偏离预期以及外部间接注入等异常干扰下仍能保持行为安全可控。
签名校验
：基于密码学校验，将信任链从 OS 延展到 Agent 执行中的每一个 Skill 和每一次工具调用，确保 Agent 运行环境完整可信。
隔离运行
：Agent 安全沙箱支持进程、文件、网络资源精细隔离，保障工具及 Skill 在明确安全边界内运行，实现系统安全稳定运行。
审计运营
：构建全链路运行日志记录与异常行为追踪分析能力，实现 Agent 行为可观测与可追溯，满足企业级安全合规审计与常态化安全运营要求 。
结语
未来，openJiuwen 社区将继续秉持开源精神，与全球开发者、算力供应厂商、行业伙伴携手，助力全球 Agentic AI 产业发展，共创智能体时代新生态！
openJiuwen 官网：https://www.openJiuwen.com/
AtomGit：https://gitcode.com/openJiuwen
GitHub：https://github.com/openJiuwen-ai
参考链接
[1] Tech in Asia 《openJiuwen community launches new agent: JiuwenClaw – focused on self-evolution and task management》：https://www.techinasia.com/openjiuwen-community-launches-agent-jiuwenclaw-focused-selfevolution-task-management
[2] MarkTechPost《Not Just Understanding, But Evolving: The All-New Self-Evolving JiuwenClaw Makes Its Debut》：https://www.marktechpost.com/2026/03/27/openjiuwen-community-releases-jiuwenclaw-a-self-evolving-ai-agent-for-task-management/
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com