---
title: "谷歌Gemini杀入科学界！一日两登Nature，AlphaFold只是开胃菜"
date: 2026-05-23
source: "新智元"
url: "https://mp.weixin.qq.com/s/e1Ye6FKh591prLmi2A7pyA"
rss_id: "2652702471_2"
---
新智元报道
【新智元导读】
Google把科学研究的三个核心瓶颈：假设生成、计算发现、文献洞察拆解为三个可由AI深度辅助的模块，并同日发表两篇Nature论文，为假设生成和计算发现两大环节提供支撑。
5月19日，在Google I/O的窗口期，Nature同日上线两篇论文。
一篇介绍ERA（Empirical Research Assistance，经验性研究助手），这是一套由大模型加树搜索驱动的系统，目标是让AI自动写出用于计算实验的专家级科学软件。
另一篇介绍Co-Scientist（AI 合作科学家），这是一套多智能体架构，让AI持续生成、批判、细化科研假设，随测试时计算量扩展，假设质量持续提升。
两篇论文的发布方均是Google。发布的时间点，也选在了Google官方宣布「Gemini for Science」工具集上线的同一天。
https://blog.google/innovation-and-ai/technology/research/gemini-for-science-io-2026/
两篇论文同日登上Nature，与Gemini for Science工具集的发布同一时刻落地，释放出这样一个信号：Google是在用同行评审为整套工具链做信用背书。
这是AlphaFold之后，Google在科学领域推出的又一项重磅成果。
一日两篇Nature
Gemini接管两段科研流水线
紧跟在两篇论文后面的，是一份100多家机构的名单。
Google官方称，已与100多家机构合作验证新系统和工具，包括斯坦福大学、帝国理工学院、Crick Institute（克里克研究所）、ICML、STOC、NeurIPS、美国国家实验室等。
同时还建立了由博士生、产业研究员和诺奖得主等组成的「可信测试者」社区，并与 ICML、STOC、NeurIPS等会议试点同行评审辅助工具。
Google在推出AI工作台的同时，还发出两篇Nature论文，为整套工具链做信用背书。
先看ERA论文。
https://www.nature.com/articles/s41586-026-10658-6
ERA的定位是经验性研究助手，主要任务是替科学家写出专家水准的实验软件。它的底层是大语言模型加树搜索，目标是把一个质量指标拉到最高。
这套系统在Nature论文里交出了一份亮眼的成绩单：
生物信息学方向，ERA独立发现了40种新的单细胞数据分析方法，在公开榜单上跑赢所有人类提交的方法。
流行病学方向，ERA在传染病住院数预测任务上产出14个独立模型，全部超过CDC的集成模型。
此外还覆盖地理空间分析、斑马鱼神经活动预测、数值积分，这些都是Nature论文里可复现的实验。
ERA论文中写道，这套系统不只是会跑代码，它能把外部的研究思路吸进来，组合出专家水准的解法。
再看Co-Scientist。
https://www.nature.com/articles/s41586-026-10644-y
Co-Scientist是基于Gemini的多智能体系统，核心机制是「点子锦标赛」（idea tournament）。
多个智能体之间不断生成、辩论、批判、细化假设，再用测试时计算扩展（test-time compute scaling）持续提升假设质量。
论文重点验证了三个生物医学场景：
药物再利用、新靶点发现、抗微生物耐药机制解释
。
其中急性髓系白血病（AML）的药物再利用候选和协同组合疗法，已经在体外实验中得到验证，验证方包括斯坦福医学院的研究者。
两篇论文都瞄准了科研最耗时的两个环节，一个是写计算实验软件环节，另一个是生成可验证的科研假设环节。
三个Labs原型
把科学方法拆成三段
除了Nature论文之外，这次Google还同步开放了三个Labs实验原型，对应科学方法的三个核心环节。
第一个是Hypothesis Generation（假设生成），底层是Co-Scientist，有Nature论文支撑。
多个智能体之间通过点子锦标赛生成假设，每一条主张都附带可点击的citation（引用溯源）。
Co-Scientist多智能体系统的工作循环：生成、辩论、进化假设三个阶段，由Generation、Reflection、Ranking、Evolution、Meta-review、Proximity、Supervisor等多个专门智能体协作完成
Co-Scientist「点子锦标赛」机制运行示意。智能体之间基于Elo评分系统对假设进行迭代排序，过程中持续注入新知识，扩大假设空间的探索范围
第二个是Computational Discovery（计算发现）。
底层是AlphaEvolve加ERA，ERA论文刚登上Nature，AlphaEvolve则有Google DeepMind自家独立背书。
这套引擎并行生成数千个代码变体，每个变体自动评分，让原本要靠人工耗时数月摸索的复杂建模路径被压缩到机器搜索的范围里。太阳能预测和流行病学是Google官方点名的两个场景。
第三个是Literature Insights（文献洞察）。
底层是NotebookLM，目前没有Nature背书，定位是早期预览。功能上把文献结构化成可搜索的属性表格，能直接产出报告、幻灯片、信息图、音视频概览。
除了工作台之外，Google还发布了一套Science Skills，集成了30多个生命科学数据库和工具，包括UniProt、AlphaFold Database、AlphaGenome API、InterPro等。
这套Skills跑在类似Google Antigravity这种智能体平台上，可以把过去要在十几个数据库之间来回跳的结构生物信息学和基因组分析流程，拼成一个链路。
Google研究团队的早期测试里，Science Skills在AK2基因相关的罕见遗传病分析中产出了关于潜在机制的新洞察。一项本来要数小时的复杂分析，被压到分钟级。
Google Antigravity在Science Skills加持下分析AK2基因变体的实际操作画面，整个工作流用自然语言指令在分钟级完成
百年化工巨头多次失败的问题
这样解决了
除了两篇Nature论文背书之外，Google还甩出了另一张牌：BASF农业解决方案。
BASF面对的问题足够复杂：180个生产基地、5000多条价值链，单一产品的物料清单有时深达30层，横跨不同生产地点和区域。
人类规划员每天要做数千个本地决策，但没有人能实时看清局部决策如何影响整张全球供应链网络。
BASF高级供应链副总裁Goetz Krabbe说道，「此前我们多次尝试用确定性模型建数字孪生，均告失败。」
Google的目标并非让AI取代人类决策，而是建立一套决策支持体系。
他们给AlphaEvolve输入了一段「种子程序」，作为基础规划逻辑，再喂入三年历史数据，包括库存水平、市场需求和实际产出记录。AlphaEvolve开始生成代码变体，自动发现供应链运作的内在规律。
最终，AlphaEvolve自动提炼出了三条在传统建模中需要领域专家手工编码的规则：
生产整合（如何把小批量生产合并以优化产线时间）；动态安全库存（如何用参数处理季节性波动）；网络级协调（如何映射不同生产层级之间的依赖关系）。
相比最初的种子模型，最新一轮AlphaEvolve的运行结果在准确率上实现了超过80%的相对提升。
BASF下一步要用这套数字孪生覆盖整个全球生产网络，作为情景预测和优化的基础。
据Google官方称，Daiichi Sankyo、Bayer Crop Science和美国能源部旗下的国家实验室（Genesis Mission项目）也已接入Co-Scientist。瑞典金融科技公司Klarna则用AlphaEvolve把一个大型Transformer模型的训练速度提升了一倍，同时改善了模型质量。
争夺「可信验证」的入场券
Nature论文，只是Google在「AI for Science」整套布局里抢占信用制高点的一个重磅动作，目的是给工具链增加一层科学社区背书，让研究者面对系统时有一个「这经过同行评审」的心理锚点。
Google目前公开的合作机构已经超过100家，覆盖斯坦福大学（肝纤维化方向）、Imperial College London（抗菌素耐药性方向）、Crick Institute（多年合作项目）。
可信测试者从博士生一路覆盖到诺贝尔奖得主，每个人都在真实科研场景中给系统找漏洞。
更值得关注的是Google正在推进的一件相关事件：与ICML、STOC、NeurIPS等顶级学术会议合作，开发智能体同行评审工具PAT（Paper Assistant Tool，论文助手工具）和ScholarPeer。
这意味着科学可信度基础设施，正在成为新的竞争场地：谁的AI建议能被引用，谁的假设经得起审计，谁的系统能被顶级期刊工作流接入，谁就能在未来的科研生态里扎根。
OpenAI 4月推了GPT-Rosalind，主打生物学、药物研发和转化医学的前沿推理。
Anthropic把Claude for Life Sciences接入AWS Marketplace，对接Databricks和Snowflake做大规模生物信息学分析。
Google这次压上了Nature论文、100多家机构、ERA和Co-Scientist。
三家公司都把「科学」单独拆出来做成了产品线。接下来竞争的，将是哪个平台的工具链能成为科学家信赖并依赖的首选。
参考资料：
https://blog.google/innovation-and-ai/technology/research/gemini-for-science-io-2026/%20
https://www.nature.com/articles/s41586-026-10658-6%20
https://www.nature.com/articles/s41586-026-10644-y%20
https://cloud.google.com/blog/products/ai-machine-learning/how-basf-manages-thousands-of-supply-chain-decisions-with-alphaevolve
编辑：元宇 Moses
秒追ASI
⭐
点赞、转发、在看一键三连
⭐
点亮星标，锁定新智元极速推送！