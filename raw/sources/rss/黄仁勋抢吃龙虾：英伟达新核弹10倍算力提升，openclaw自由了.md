---
title: "黄仁勋抢吃龙虾：英伟达新核弹10倍算力提升，OpenClaw自由了"
date: 2026-03-17
source: "机器之心"
url: "https://mp.weixin.qq.com/s/5jZZm4c6aovjkz3bBNGUIA"
rss_id: "2651021984_1"
---
机器之心编辑部
老黄：科技公司的算力焦虑，有 1 万亿刀那么大。
北京时间今天凌晨两点，英伟达 GTC 大会在加州圣何塞正式召开，这回的 Keynote 注定要被各大公司 CEO 不断引用了。
「我们重新定义了计算，就像个人电脑革命和互联网革命一样。我们现在正处于一个全新平台变革的开端。」英伟达联合创始人、CEO 黄仁勋说道。
去年 10 月黄仁勋还在表示，他预计到 2026 年底的五个财季内，全球公司在 Blackwell 和 Rubin 系统上的支出将达到 5000 亿美元。现在他表示，
这一市场将在 2025 年至 2027 年间达到 1 万亿美元
，60% 的业务将来自超大规模云计算。
数量直接翻倍，原因在于 AI 到了「推理拐点」（The inference inflection）。如果说之前 AI 还是在实验室里「疯狂训练」，那么现在已经全面进入了「推理和生成」阶段。算力的需求不是见顶了，而是刚刚爆发。
「那么，这合理吗？」Keynote 剩下的大部分时间，黄仁勋都在讨论这个问题。
新一代 Vera Rubin 量产，世界从未见过的芯片
今年的新产品不再是一块芯片，而是一个庞大复杂的 AI 算力系统。
黄仁勋表示，基于全新 Vera Rubin 架构的英伟达 NVL72 是一场「豪赌」。在 AI 的推理任务上，要想把效率做到极致面临着最大的挑战。在合作伙伴的帮助下，英伟达的努力得到了回报。
NVL72 架构的每瓦 token 性能提升了 50 倍，速度提升远超摩尔定律。
这就是「token king」。
基于算力的提升与 AI 技术的发展，数据中心过去是存储文件的地方，现在则变成了生成 token 的工厂。老黄指出，推理是工作负载，而 token 则是新的商品。
在 AI 的推理上，更复杂的推理，以及更低的延迟将是算力需要解决的挑战。更高的效率也意味着企业更多的利润。
Vera Rubin NVL72 是「为智能体 AI 时代注入强大动力的引擎」。老黄在台上展示了 Vera Rubin 的全套系统，这是一个庞大而复杂的系统，包含七款全新芯片，旨在打造全球最大规模的 AI 工厂，针对 AI 各个阶段进行了优化，涵盖从预训练、后训练和测试时扩展到智能体推理的各个环节。
英伟达展示了 Vera Rubin 平台的细节，包括 Vera CPU、Rubin GPU、NVLink 6 交换机、NVIDIA ConnectX 9 超级网卡、BlueField4 DPU 和 Spectrum-6 以太网交换机，以及新集成的 Groq 3 LPU。
具体来说，在 Vera Rubin NVL72 机架上集成了 72 个 Rubin GPU 和 36 个 Vera CPU，它们通过 NVLink 6 连接，并配备 ConnectX-9 SuperNIC 和 BlueField-4 DPU。Vera Rubin NVL72 实现了突破性的效率 —— 与 NVIDIA Blackwell 平台相比，前者使用四分之一数量的 GPU 即可训练大型混合专家模型，
每瓦推理吞吐量提高了 10 倍，每 token 成本仅为十分之一
。
NVL72 专为超大规模 AI 工厂而设计，可与 Quantum-X800 InfiniBand 和 Spectrum-X 以太网无缝扩展，从而在大规模 GPU 集群中保持高利用率，同时缩短训练时间和降低总体拥有成本。
还有更大的核弹吗？有的兄弟，有的。它就是「NVIDIA Vera Rubin Ultra NVL576」，通过引入一种全新的双层全互连 NVLink 拓扑结构，使开发者能够将系统纵向扩展至最多 576 块 GPU。
Vera Rubin Ultra NVL576 将把 8 个独立的 MGX NVL 机架连接在一起，每个机架配备 72 块 Rubin Ultra GPU。所有机架通过铜缆互连和直连光互连共同组成一个统一的 576 GPU NVLink 域。
该系统将基于同一套 MGX 机架级生态构建而成，可以实现最快的量产落地周期。
为了验证这一跨机架的大规模 NVLink 拓扑架构， 英伟达内部构建一套功能完备、基于 GB200 的原型系统 ——Polyphe，如下图所示：
当然，最新的 Vera Rubin 算力也会部署到太空。
黄仁勋宣布，英伟达正在研发名为 Nvidia Vera Rubin Space-1 的用于轨道数据中心的新型芯片 / 计算机，「太空中没有传导，没有对流，只有辐射，我们必须想办法在太空中冷却这些系统，但我们有很多优秀的工程师正在研究这个问题。」
英伟达表示，相比上代架构，Vera Rubin 的落地速度显著加快，目前其已在微软 Azure 上开始部署。随着 Vera Rubin 的推出，AI 智能体的转折点已经到来，史上规模最大的 AI 基建即将展开。
全新 AI 推理芯片 LPU
Vera Rubin 强大的能力，离不开 LPU（Language Processing Unit，语言处理单元）。
去年 12 月，英伟达斥资约 200 亿美元与 AI 推理芯片公司 Groq 达成了一项战略交易，获得了 Groq 推理技术授权，收购其部分芯片资产，同时吸纳核心团队成员，包括创始人 Jonathan Ross、总裁 Sunny Madra 等。
Groq 的价值在于，通过 LPU 专门优化的推理流水线与 GPU 协同计算，突破纯 GPU AI 服务器在低延迟推理、token 解码效率和能耗上的瓶颈。
本次 GTC 大会上，NVIDIA Groq 3 LPX 的发布标志着加速计算领域迎来了一项重要里程碑。
大模型推理长期面临一个核心矛盾：低延迟与高吞吐量往往难以兼得。而 Groq LPX 架构与 Vera Rubin GPU 协同工作，专门针对智能体系统所需的低延迟与超长上下文推理进行优化。
在这一架构下，
每兆瓦推理吞吐量最高可提升 35 倍，并为万亿参数模型带来最高 10 倍的营收潜力
。
更高的每瓦吞吐量和 token 级性能，将开启一个新的推理层级，使得万亿参数、百万上下文的超高端模型推理成为可能，并为所有 AI 服务提供商带来更大的商业空间。
在设计上，LPX 机架采用全液冷设计，基于 MGX 基础设施构建，可无缝集成到下一代 Vera Rubin AI 工厂中。
同时，LPX 机架包含了 256 个 LPU 处理器，提供 128GB 片上 SRAM 和 640 TB/s 的纵向互联带宽。
在大规模部署时，大量 LPU 可以协同工作，像一个巨型单一处理器一样运行，实现高速、确定性的推理加速。
当与 Vera Rubin NVL72 系统一同部署时，Rubin GPU 与 LPU 会协同计算 AI 模型每一层的每个输出 token，显著提升解码性能。
LPX 架构针对万亿参数模型与百万 token 上下文进行了优化，通过与 Vera Rubin 的协同设计，在功耗、内存与计算效率之间实现最佳平衡。
目前，LPU 是由三星代工生产，未来的新一代可能会由台积电代工。另外在未来的 GPU（Feynman 架构）上，也可能整合 Groq 处理器，这有望在提升性能的同时降低成本。
Nvidia Groq 3 LPX 预计将在今年下半年正式推出。
NemoClaw：英伟达版 OpenClaw 上线
最近科技圈最火的概念是 OpenClaw，老黄在 GTC 上把它比作「操作系统」，简单来说，OpenClaw 是一个可以连接到云系统的智能体平台。它可以生成其他智能体、进行调度、分解问题等等。
然而，当前基于 OpenClaw 的 AI 智能体在与外部通信时存在安全隐患。而英伟达推出的 NemoClaw 具有企业级安全保障，有助于保护敏感信息。
英伟达通过在 OpenClaw 创始人 Peter Steinberger 构建的基础架构之上添加多层安全防护，成功地将 OpenClaw 定位为企业级安全解决方案。老黄称，英伟达召集了「全球顶尖的安全研究人员，对 OpenClaw 进行了修改，使其能够安全地部署在企业内部。」
他同时强调，如今每一家企业都需要制定自己的 OpenClaw 战略。在黄仁勋看来，OpenClaw 以及更广义的 Claw 系统，未来的重要性将与 Linux、Kubernetes、HTML 等基础软件设施相提并论。
在具体技术层面，NemoClaw 就是一套让 OpenClaw 更容易部署、也更安全运行的基础软件工具。通过 NVIDIA Agent Toolkit，用户只需一条命令就能完成 OpenClaw 的安装和优化，同时自动部署 OpenShell 运行时。
这个运行时提供开源模型支持和隔离的沙箱环境，让 AI 智能体在执行任务、调用工具或访问外部网络时，依然能够受到安全、网络和隐私策略的约束。
NemoClaw 同时支持多种 coding agent。在开放智能体模式下，它可以调用运行在用户本地专用系统上的开源模型，包括 NVIDIA Nemotron；同时通过隐私路由（privacy router），智能体也可以访问运行在云端的前沿模型。
本地模型与云端模型的结合，为智能体持续学习与能力扩展提供了基础，使其能够在既定的隐私与安全规则下完成更复杂的任务。
黄仁勋还提到，与 OpenClaw 搭配部署的最佳模型之一，是英伟达最近发布的 Nemotron 3 Super。这是一款面向智能体（agentic）场景的开源大语言模型。
Nemotron 3 Super 专门针对长上下文任务进行了优化，同时模型规模控制在 1200 亿参数。结合 NemoClaw 提供的安全层以及 Nemotron 3 Super 本身具备的隐私优势，英伟达基本解决了边缘部署智能体时最关键的隐私限制问题。
除此之外，NemoClaw 还可以调用英伟达生态中的多种开源工具和框架，例如 cuDF、Nemotron Dynamo、cuOPT 等库。这些组件为智能体提供了更多能力，使其在处理数据、优化决策和执行复杂任务时更加高效和强大。
从今天起，开发者可以通过以下链接访问英伟达的 Agent Toolkit 和 OpenShell，也可以将 OpenShell 与 LangChain 结合使用，或者直接从 GitHub 下载并在本地运行。
链接地址：https://build.nvidia.com/
企业用户则可以通过 AWS、Google Cloud、Microsoft Azure 等云服务平台创建并部署 AI 智能体。
AI 进入物理世界
数字世界的智能体之外，AI 也正在物理世界大规模落地。
英伟达在 GTC 大会上展示了 110 台机器人，比亚迪、现代、日产和吉利成为了英伟达最新合作伙伴，这些车企宣布将采用 NVIDIA DRIVE Hyperion 技术打造 L4 级自动驾驶汽车。
在越来越多的汽车制造商平台的支持下，英伟达和 Uber 计划在 2028 年在四大洲的 28 个城市推出完全由 NVIDIA DRIVE AV 全栈软件驱动的自动驾驶车队。预计到 2027 年上半年，Uber 的自动驾驶将会在洛杉矶和旧金山湾区率先推出。这支由 DRIVE Hyperion 提供支持的车队将利用 NVIDIA Alpamayo 开放模型和 NVIDIA Halos 操作系统。
在 GTC 大会上， 英伟达宣布与大量机器人厂商合作，共同推动生产规模的物理 AI 发展。英伟达发布了全新的 NVIDIA Isaac 仿真框架以及面向业界的全新 Cosmos、Isaac GR00T 开放模型，用于开发、训练和部署下一代智能机器人。
开放式物理 AI 数据工厂 Blueprint 则旨在对视觉 AI 智能体、机器人和自动驾驶车辆的物理 AI 模型进行大规模数据处理和管理、合成数据生成、强化学习和评估。
Keynote 最后上场的角色，是在虚拟世界中训练，获得物理躯体的「雪宝」机器人，它是完全由英伟达物理 AI 全家桶构建出来的。或许不久之后我们会在迪士尼乐园里看到他。
AI 的下半场才刚刚开始，你准备好上车了吗？
参考链接：
https://www.youtube.com/watch?v=jw_o0xr8MWU
https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform?ncid=no-ncid
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com