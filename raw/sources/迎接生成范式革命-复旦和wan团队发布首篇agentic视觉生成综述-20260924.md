---
type: clip
title: "迎接生成范式革命！复旦和Wan团队发布首篇Agentic视觉生成综述"
url: "https://mp.weixin.qq.com/s/3DU7XR3h59UQWdoFiqnKnw?mpshare=1&scene=1&srcid=0922rbUPbgtvpLDeBQK3bYgk&sharer_shareinfo=65b44b6c52a2ec248cb25ea76e14ddb5&sharer_shareinfo_first=65b44b6c52a2ec248cb25ea76e14ddb5&color_scheme=light#rd"
clipped: 2026-09-24
origin: web-clip
sources: []
tags: [web-clip]
---

# 迎接生成范式革命！复旦和Wan团队发布首篇Agentic视觉生成综述

Source: https://mp.weixin.qq.com/s/3DU7XR3h59UQWdoFiqnKnw?mpshare=1&scene=1&srcid=0922rbUPbgtvpLDeBQK3bYgk&sharer_shareinfo=65b44b6c52a2ec248cb25ea76e14ddb5&sharer_shareinfo_first=65b44b6c52a2ec248cb25ea76e14ddb5&color_scheme=light#rd

迎接生成范式革命！复旦和Wan团队发布首篇Agentic视觉生成综述

机器之心

Sep 22, 2026, 8:00 AM

北京

在小说阅读器读本章

去阅读

在公众号小说中沉浸阅读

让 AI 生成一张海报已经不难。更难的是，让它围绕同一个设计目标持续工作：理解品牌与产品要求，生成初稿；发现标题、产品位置或整体风格存在问题后，知道应该修改哪里、怎样修改；同时保留已经确认的内容。等到下一次活动，它还能延续此前确定的设计偏好和有效经验。这里需要做的决定，从曾经的“输入什么提示词”，扩展到了选什么工具、检查结果、局部修改，以及积累经验。这些决定由谁来做，做到哪一步，正是 Agentic Visual Generation（智能体式视觉生成）要研究的问题。来自复旦、Wan、港中文mmlab的研究团队在综述《Agentic Visual Generation: From Generative Models to Agentic Control》中，为这个快速发展的方向建立了一套围绕控制器决策范围的分类框架。论文梳理了覆盖图像生成、编辑、视频、幻灯片、用户界面、3D 与世界模型的系统，并将不同技术路线放到同一组问题下考察：系统在生成前能决定什么？执行时能选择什么？看到结果后能改变什么？任务结束后又能留下什么？这其中一个非常值得关注的地方是：目前的工作中，根据结果修正当前任务的系统已经占据多数，能够把已完成任务的经验用于后续独立任务的系统，仍然相对少见。论文标题：Agentic Visual Generation: From Generative Models to Agentic Control论文地址：https://arxiv.org/abs/2609.06758项目仓库：https://github.com/YinmingHuang/Awesome-agentic-visual-generation-model一套分类，先把“自主到哪一步”讲清楚在现有系统中，控制器通常由 LLM 或 VLM 担任，负责理解需求和选择行动；图像、视频生成模型以及编辑器、渲染器，则负责执行具体的视觉操作。在此基础上，综述按照控制器能够影响的最远决策，将相关系统划分为 L0 至 L4。L0 表示固定的支撑组件与流程，界定综述讨论的起点；L1 至 L4 则对应逐步扩展的四级控制能力。L0：固定支撑（Fixed Support），提供生成所需的基础能力在 L0 中，生成器、编辑器、检索器、评估器和固定流水线按预设路径运行，提供生成、编辑与评估能力，但没有控制器决定下一步采用哪种生成操作。L0 描述的是决策方式，与画质高低无关。L1：条件控制（Conditioning Control），把需求整理成生成器能够使用的条件L1 的控制器负责准备输入条件，例如改写提示词、规划物体位置、选择参考图、检索知识，或设计分镜与相机运动。LLM-grounded Diffusion 将复杂要求拆成对象描述和边界框，LayoutGPT 生成二维或三维布局，World-To-Image 则检索定义和参考图。这些条件最终交给预先确定的生成器执行。L2：执行控制（Execution Control），选择并组织实际的视觉操作L2 的控制器开始选择并编排实际操作，包括图像生成、局部编辑、模型切换、节点编排和视频渲染。Visual ChatGPT 将视觉模型封装成工具，ComfyUI-Copilot 生成可执行节点图，ViMax 则组织剧本、镜头、角色风格和片段生成。控制器由此决定使用哪些能力完成任务。L3：结果自适应控制（Outcome-Adaptive Control），根据生成结果调整后续行动L3 将视觉生成变成反馈闭环。系统查看已经生成的图像、视频、页面或场景，再根据物体缺失、空间关系错误或动作不连贯等问题，选择局部编辑、重新生成、调整条件或停止。SLD、GenPilot 和 PPTAgent 分别展示了生成结果驱动的图像修正、视觉细化与幻灯片编辑。代码报错、物理仿真和用户意见也可以成为反馈。L4：经验自适应控制（Experience-Adaptive Control），把完成任务的经验用于未来任务L4 将适应能力延伸到新的任务。系统会把已经完成的生成过程保存为长期记忆、能力档案、工作流或技能。OctoT2I 根据历史表现更新生成器能力档案，GenEvolve 从成功与失败轨迹中提炼可复用过程，COMFYCLAW 将验证过的工作流构建方法沉淀到技能库。沿着 L1 至 L4，控制范围依次从输入条件扩展到执行操作、当前任务中的结果反馈，以及跨任务复用的长期经验。300+ 份工作背后，下一个突破在哪里？以论文截至 2026 年 8 月 24 日的样本为准，L1 至 L4 分别收录 49、33、202、25 条工作。2025 年后的增长主要集中在 L3，说明根据结果修正当前任务已成为近期研究的主要路线；相比之下，能够跨任务复用经验的 L4 仍然较少。经验并非存得越多越好。它是否与新任务相关、是否已经过时，会不会把旧错误带入新任务，都需要进一步验证。怎样测出 Agent 的贡献？先把比较条件对齐生成效果变好，可能来自更强的生成器、更多次采样，也可能是控制器确实做出了更有效的决定。论文据此提出按控制级别设计评估：固定生成器、可用工具、预算和评估器，再逐次增加一类决策能力。其中，评测 L1 要看更好的条件能否改善同一个生成器；评测 L2 要在同一组工具中比较控制器能否选到更合适的执行路线，并将路线选择带来的收益与工具本身的能力区分开。验证 L3 时，可让两个版本使用相同的初始计划、工具和总预算，一个读取中间结果并修改，另一个按既定路线执行。验证 L4 时，则在新的独立任务上比较保留、移除或打乱经验后的表现，并检查负迁移与遗忘。评估还要记录每次修正的代价，包括是否破坏已确认内容、是否满足用户硬性要求，以及系统何时应该停止。结语这篇综述以控制器能够影响的最远生成决策为主线，将相关系统组织为 L0 至 L4。L0 界定固定支撑组件与流程，L1 至 L4 则依次覆盖生成条件、执行操作、当前任务中的结果反馈，以及能够影响未来任务的长期经验。对 300 多份工作的梳理显示，视觉生成 Agent 已经明显走向根据结果修正当前任务，但跨任务沉淀和复用经验仍处于较早阶段。如何获得可靠反馈、保护已经确认的内容、控制修正成本，并让长期经验保持有效，是这一方向继续发展的关键问题。论文还讨论了 generator-as-controller：如果生成器能够直接依据视觉状态决策，反馈链路可能更短，局部调整也会更精确；但它仍需用同一套标准证明中间结果确实改变了后续行动。对于研究者，这篇综述提供了一张按决策能力组织的文献地图和一套对齐条件后的评估方法；对于开发者，它提供了检查系统能力的具体视角：控制器能选择哪些操作，结果能否改变下一步，任务结束后又有哪些经验会继续影响未来行动。Agentic视觉生成的进展，最终需要落实到这些可以观察和验证的决定上。© THE END 转载请联系本公众号获得授权投稿或寻求报道：liyazhou@jiqizhixin.com

预览时标签不可点

Close更多Name cleared微信扫一扫赞赏作者Give AuthorOther Amount赞赏后展示我的头像作品暂无作品Give AuthorOther Amount¥最低赞赏 ¥0OKBackOther Amount更多赞赏金额¥最低赞赏 ¥01234567890. AIxiv专栏2026 · Table of Contents#AIxiv专栏2026PreviousACM Multimedia 2026 Oral｜从「转述痕迹」到「看见证据」：ForgeryVCR用视觉中心推理重塑图像取证范式Next假如有一万张卡，RL训练该怎么扩大规模？十万张呢？ Close更多搜索「」网络结果

Close调整当前正文文字大小更多100%此设置仅对当前内容生效，如需全局调整，请前往微信系统设置

​Comment暂无留言1 CommentNo more dataSend MessageComment as

Scan to Follow

当前内容可能存在未经审核的第三方商业营销信息，请确认是否继续访问。继续访问Cancel微信公众平台广告规范指引

Got It

Scan with Weixin to use this Mini Program

Cancel

Allow

Cancel

Allow

Cancel

Allow

×

分析

微信扫一扫可打开此内容，使用完整服务

机器之心已关注LikeShareBoost Comment

:

，

，

，

，

，

，

，

，

，

，

，

，

.

Video

Mini Program

Like

，轻点两下取消赞

Wow

，轻点两下取消在看

Share

Comment

Favorite

听过

可在「公众号 > 右上角  > 划线」找到划线过的内容OK,,选择留言身份CloseComment更多暂无留言1 CommentNo more dataSend MessageComment as Close更多Back的内容会推荐给朋友和关注你的人 更多对关注你的人展示公众号身份OKCloseAIxiv专栏2026Details更多Loading...关闭确认提交投诉你可以补充投诉原因（选填）确定
