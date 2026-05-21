---
title: "Claude Code开源第一人，竟是华人辍学博士！CC之父回应：纯手误"
date: 2026-04-02
source: "新智元"
url: "https://mp.weixin.qq.com/s/Btt9gLDu5QkEYQVXmWBRTQ"
rss_id: "2652688974_2"
---
新智元报道
编辑：好困 桃子
【新智元导读】
51万行Claude Code代码全网裸奔，背后泄密第一人竟是他。就在刚刚，CC之父回应来了：是人，不是Bun。
爆出Claude Code源码第一人，竟被全网扒出来了！
3月31日凌晨4点23分，
安全研究员Chaofan Shou
在X上甩出一句话——
Claude Code源代码通过npm注册表中的map文件泄露，并附上了下载链接。
至今，帖子发出不到24小时，
引来
2
8
00万人围观
，
帖子下方的评论区彻底炸锅。
Sigrid Jin上传到GitHub上的镜像
仓库
被fork超7.7万次
，速度之快，连OpenClaw都要让位。
51.2万行TypeScript代码、1900个源文件，Anthropic最赚钱的产品Claude Code，就这么在全网裸奔了。
而撕开这道口子的人，不是什么竞争对手的商业间谍，是一个简历上写着「退学」的华人安全研究员。
就在刚刚，针对这次重大泄露事故，Claude Code之父回应了——
与Bun漏洞无瓜，纯人为导致的泄露。
从他的「击杀清单」说起
扒光Anthropic的这个人，来头不小。
Chaofan Shou，现任Solayer软件工程师，此前是区块链安全公司FuzzLand的联合创始人兼CTO。
他的个人主页上有一个叫「Things I Broke」的栏目，密密麻麻排了三十多条记录，读起来像一份硅谷安全圈的「通缉名单」，只不过角色反过来了，被通缉的是那些漏洞。
Bug Bounty总收入，190万美元。
这份击杀清单里，最惊人的几笔是这样的。
2021年，CVS Pharmacy被他找到SSRF加TLS投毒，整个内部系统门户大开。
2023年，他发现Twitter存在XSS加CSRF加CSP绕过的组合漏洞，理论上可以接管全平台所有账户。
2024年，他的目标清单开始向AI圈蔓延。
先是AI编程工具Devin.ai，被他发现SSRF导致用户信息泄露和完整系统接管。然后是Etherscan，区块链世界最常用的浏览器，被他找到XSS加Cloudflare绕过，理论上能接管所有用户账号。
还有FTX、Polygon、DogeChain、Google Nest、三星智能家居……清单还在往下延伸。
伯克利博士辍学，自创业
他的学术履历同样扎实。
本科毕业于UC Santa Barbara计算机科学专业，之后在Salesforce做安全工程师，负责静态分析工具和内网扫描服务。再之后去了区块链安全初创公司Veridise做创始工程师。
然后是UC Berkeley的博士，Sky Computing Lab，导师是程序分析领域的大牛Koushik Sen。
读了一阵，退学了。他自己在主页上写得很轻松，「but I dropped out :p」。
退学之后，他和Jeff Liu一起创办了FuzzLand，专注Web3安全和高频交易。
公司的核心产品是基于模糊测试和AI的智能合约安全分析平台，帮助追回过超3000万美元被黑资金，目前保护和管理的链上资产超过50亿美元。
2024年2月拿到300万美元种子轮融资，投资方包括1kx和HashKey Capital。
2025年1月，FuzzLand被Solana生态的Solayer收购，Chaofan Shou也随之加入Solayer做软件工程师。
他的学术产出也没断。
ItyFuzz（链上智能合约模糊测试工具）发表在ISSTA 2023，另有CCS 2024、CoNEXT 2024等多篇顶会论文。
一个有意思的细节，他在个人主页上承认自己用强化学习和微调LLM做过量化交易，战绩是「PnL -92%」。
安全领域无敌，投资领域反向天才，反差感拉满。
同样的错误，第二次了
回到这次泄露本身。
技术原因其实很低级。Anthropic在发布Claude Code v2.1.88的npm包时，没有从发行包中剔除一个59.8MB的source map文件cli.js.map。
Source map是开发者用来调试的工具，能把压缩混淆后的代码还原成可读的原始源码。
正常情况下，发布到生产环境时必须删，但Anthropic没删。
更讽刺的是，这个map文件里还指向了一个Anthropic自家Cloudflare R2存储桶上的zip压缩包。
任何人都可以下载、解压，拿到完整的TypeScript源码树。
最要命的一点，这已经是第二次了。
2025年2月，Claude Code早期版本就因为同样的source map问题泄露过一次。Anthropic当时的处理方式是从npm删包、移除map文件。一年后，同样的事又发生了。
有开发者挖出了可能的根源，一个Bun运行时的已知bug。
这个bug在3月11日就被人在GitHub上报了，编号#28001，反映的问题是Bun在生产模式下依然会输出source map。三周过去了，issue仍然是open状态。
CC之父回应来了
但就在刚刚，Claude Code之父Boris Cherny现身回应，这和Bun无关，仅是开发者的一个错误。
面对这场泄露重大事故，Anthropic终于做出了正面回应。
Anthropic发言人对The Register的回应是——
今天的一次Claude Code发布包含了部分内部源代码，强调没有客户数据或凭证泄露。
这是一个由人为失误导致的发布打包问题，不是安全漏洞。
有人从源码中，意外发现了一个叫
SPINNER_VERBS
的常量，列表中塞进了整整187个等待加载的动词。
从正经的「正在计算」（Calculating）到离谱的「正做白日梦」（Daydreaming），甚至还有「正在蒸发」（Evaporating）、「正在跳迪斯科」（Boogieing）......
有网友提议：希望将gooning加入列表。
Boris幽默地拒绝了，并调侃道「虽然我觉得这很奇怪，但如果你真想要，可以去设置里让Claude自己想」。
源码还揭露了一个严密的过滤机制：系统会自动生成随机ID，并剔除潜在的违禁词汇。
更有趣的是，Anthropic的内部监控非常「记仇」——
如果你在Claude Code的日志里对它爆粗口，提示词（prompt）会直接被系统标记为负面样本。
具体来说，Claude Code中设置了一套「正则表达式」。
它是专门用来检测用户输入的：「垃圾」、「垃圾代码」、「去你的」等负面词汇。
当检测到这些词汇时，AI系统会默默在后台分析数据中标记
is_negative: true
。Anthropic内部甚至将这些数据可视化。
对此，Boris透露，他们内部有一个专门的看板，被戏称为「fucks」图表，用来直观监测用户的挫败感。
讽刺的是，泄露的代码中有一个叫「Undercover Mode」的子系统。专门用来防止Anthropic员工在公开仓库操作时泄露内部信息。
它会自动抹除提交记录中的AI痕迹和内部代号。
一个专门为了防泄露而设计的系统，连同它自己一起泄露了。
这场由一个Source Map引发的「51万行代码大逃杀」，最终以一种荒诞的幽默感收场。
参考资料：
https://x.com/Fried_rice/status/2038894956459290963
https://scf.so/
https://x.com/bcherny/status/2039168928145109343?s=20
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！