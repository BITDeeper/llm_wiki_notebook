---
title: "谷歌悄悄加了个按钮，Gemini长出手脚变打工人！三巨头抢着教AI干活"
date: 2026-04-16
source: "新智元"
url: "https://mp.weixin.qq.com/s/1Z2H_SA0Hkv2yv8kxyiG2Q"
rss_id: "2652692554_2"
---
新智元报道
编辑：元宇
【新智元导读】
谷歌悄悄加了一个Agent新入口：Gemini
开始长出「手脚」，不再只负责回答问题，还准备下场替你干活了。
一张截图，提前透露了今年谷歌I/O大会的一点重要信息：
Gemini不只想聊天了，它还想当Agent工作台。
近日，长期追踪谷歌产品变动的TestingCatalog抓到了Gemini上一个新的「Agents」入口。
它和Gems、Files并列，直接摆在一级入口，而不是只有开发者才能看到的隐藏选项。
这个改变释放出一个清晰的信号：
Gemini的下一阶段，不再只是一个「你问我答」的聊天框，而是一个「你下任务、它来执行」的工作台。
把谷歌过去半年的产品动作串起来看，这条线已经很清楚了：
Agent Designer在Gemini Enterprise全面上线，NotebookLM补上音频生成和视频摘要，Agentspace整体并入Gemini Enterprise成为其核心引擎，Chrome嵌入Gemini侧边栏并上线Auto Browse让AI代你操作浏览器。
而现在，Gemini的聊天界面里出现了一个与Chat并列的「Agents」标签页，用户可以直接在里面新建任务、指定目标、挂载工具和文件，整个界面更像一个任务执行工作台，而不是聊天窗口。
每一步都在做同一件事：把Agent能力从开发者后台搬到普通用户面前。
I/O还没开场，谷歌的牌其实已经亮出了一半。
Chat不再是唯一中心
翻一下谷歌官方的产品描述，你会发现画风已经变了。
2024年2月
Gemini for Google Workspace
刚上线的时候，那时的卖点是什么？Chat。
跟AI聊天，帮你写邮件，帮你做会议纪要，本质上是一个塞进Workspace里的聊天助手。
现在再看谷歌官网对Gemini Enterprise的描述：「Gemini Enterprise让团队在一个安全平台上发现、创建、分享和运行AI Agent。」
聊天能力依然是Gemini Enterprise的核心之一，但它现在已被清晰地纳入到一个更大的Agent平台框架之中。
TestingCatalog曝光的Gemini Enterprise测试界面
根据TestingCatalog曝光的Gemini Enterprise测试界面显示，Agent已进入主交互区：左侧可在Chat 与Agent间切换，右侧则整合目标、Agent、应用连接与文件面板。
在新增的「智能体」标签页面中，首先映入眼帘的是「新建任务」和「收件箱」这两个明确的入口。
当启动一项新任务时，界面会展开为一个功能强大的任务工作区。
虽然核心的聊天视图依然保留，但它的右侧出现了一个结构化的任务面板。
该面板清晰地定义了任务的各个要素，包括明确的「目标」、执行任务的「智能体」、可访问的「已连接的应用」以及所需的「文件」。
此外，右侧边栏还出现了一个「Require human review」（需要人工审核）开关，用户可以对任务执行过程加入人工审核节点，整个界面也因此更像一个任务执行工作区，而不只是普通聊天窗口。
这表明你打开Gemini，将不再仅仅是为了聊天，而是要「跑一个任务」。
这也印证了谷歌对Gemini Enterprise的定义，已经从一个「聊天助手」转变为一个强大的「Agent运行平台」。
不用写代码
也能造Agent
落到产品层面，最硬的一块拼图是Agent Designer，它已于2025年底正式上线了。
谷歌官方对它的定义是：
一个交互式的无代码/低代码平台，用于在Gemini Enterprise中创建、管理和发布单步及多步Agent。
拆开来看三个关键能力：
第一，
多步骤Agent
。
不是「帮我写封邮件」这种单次指令，是支持多步任务编排，Agent下面还能挂子Agent，串成工作流。
第二，
连接真实工具
。
Gmail、谷歌Drive、Jira、GitHub、Notion、SharePoint，这些都是官方更新日志里列出来的已上线连接器，Shopify等更多连接器也已进入公开预览。
第三，
定时执行
。
Agent不需要你盯着，设好时间自己跑。
而在此之前，谷歌已经通过Agentspace（现已并入Gemini Enterprise）验证了这条路线：把知识搜索和Agent执行捏到同一个平台里。
员工不用关心后面跑的是哪个Agent、调的是哪个数据源，在一个界面里搜、问、跑，全搞定。
而泄露界面里出现的C端Agent标签页，意味着这套能力不会只留在企业版。
谷歌大概率要把它推给所有用户。
光有大脑不够
还得有手脚
这里有个容易混淆的概念需要拆清楚。
Agent不等于大模型。
大模型更像是 Agent 的「大脑」，负责理解任务、推理路径和生成决策。
但要真正把事情做完，还需要一层「手脚」，也就是编排层，负责拆解步骤、调用工具、衔接上下文，并处理执行过程中的异常。
谷歌这次补上的，正是这层能力。
从公开资料看，Gemini Enterprise里的Agent Designer，可以理解成一个面向普通企业用户的可视化Agent工作台：不用写代码，也能把单步、多步任务编排出来。
相比之下，Vertex AI Agent Builder里的Agent Designer更偏底层和开发者场景。
两者能力框架高度相似，只是前者被做成了更易用、门槛更低的产品界面。
换句话说，谷歌做的不是单纯把模型变得更会聊天，而是把原本更偏开发者的 Agent 构建能力，包装成了普通用户也能上手的可视化工作台。
对C端用户来说，这意味着一件事：你不需要懂API，不需要写Python，拖拖拽拽就能让AI帮你跑完一个工作流。
从「能聊天的AI」到「能干活的AI」，中间隔的就是这个编排层。
编排层三国杀
把视野拉远一步：谷歌不是唯一在抢编排层的人。
Anthropic和OpenAI各自押了完全不同的路线，三家的分歧大到像在做三个不同的产品。
先看理念。
谷歌走的是
平台化
。
把Agent能力嵌入已有产品矩阵：Workspace、Search、NotebookLM、谷歌 Cloud，靠分发优势碾压。
逻辑很清楚：20亿+用户的触达能力是护城河，Agent做出来直接塞进用户已经在用的工具里。
Anthropic走的是
工具化
。
Claude Cowork运行在桌面端，直接操作本地文件、文件夹和应用程序。
Anthropic的
官方产品页写道：
它能在不同应用之间自由切换，整合多个来源的信息，不需要用户协调每一步就能完成任务。
https://www.anthropic.com/product/claude-cowork?utm_source=chatgpt.com
不建平台，不搞生态，让模型本身成为Agent。
OpenAI更像是在走平台与生态并举的路线：
一边通过GPTs和GPT Store扩大第三方供给与分发，一边在API侧从Assistants API迁移到Responses API，并以Agents SDK承接更完整的agent开发。
再看架构差异。
谷歌重编排层。
Vertex AI Agent Builder提供完整框架，Agent Designer做前端，企业级多Agent协作是核心卖点。
Anthropic轻编排重能力。
模型原生支持工具调用和环境交互，编排的事交给开发者自己搞定。Claude的思路是：与其我帮你搭框架，不如我直接足够强，你爱怎么编排怎么编排。
OpenAI在中间。
Assistants API提供了一层编排抽象，但没有谷歌那么重，GPT Store负责分发，但生态活跃度一直是个问号。
目标用户也完全不同。
谷歌瞄准企业IT部门和C端普通用户，门槛最低。Anthropic瞄准开发者和高级用户，上限最高。OpenAI试图广覆盖，开发者和C端都要。
有意思的是，三家现在竞争的已经不是「谁的模型更聪明」。编排层的易用性和生态丰富度，才是决定开发者选谁的胜负手。
谁先让十亿人用上Agent
这一次的战场，不在模型层。
谷歌CEO Sundar Pichai曾在官方博客中说过：谷歌的竞争力，从来不只是某一个模型版本，而在于它背后那套完整的全栈能力：
从研究、模型与工具，到触达数十亿用户的产品入口，再到覆盖全球的云网络和数据中心体系。
当Agent从API走向GUI，「人人可用」的临界点正在逼近。
而在这个临界点上，分发能力的重要性，正在迅速超过模型跑分。
Anthropic的优势，在于它更早把「computer use」这类原生 Agent能力推到台前。
Claude已经可以通过截图、鼠标和键盘与桌面环境交互，Cowork也明确强调它不是聊天助手，而是一个能在本地文件、文件夹和应用之间切换、代替用户执行多步知识工作的系统。
但Anthropic的短板也很明显：它没有谷歌那样的消费级产品矩阵，Cowork目前官方口径仍是research preview，虽然扩张很快，但离真正的大规模默认分发仍有一大段距离。
距离谷歌I/O大会不到一个月，谷歌很有可能会进一步公开自己的Agent方向。
这更像是一场「分发对执行」的对赌。
谷歌的赌注是：当Agent能力被接进Gemini、Workspace和更广泛的产品入口，现成的分发网络会迅速完成用户教育。
而Anthropic赌的则是：当开发者和高级用户真正体验过能跨应用、会动桌面的Agent之后，他们会优先为执行力买单。
这场Agent竞争的焦点，正在从「谁更会聊天」转向「谁更能把任务做完」。
比拼的不只是 Agent 的执行力本身，还有谁能把这种能力最快、最大规模地送到用户手里。
谷歌和Anthropic都在押注Agent，但它们押的不是同一种胜利方式。
参考资料：
https://www.testingcatalog.com/google-develops-its-own-desktop-agent-to-compete-with-cowork/
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！