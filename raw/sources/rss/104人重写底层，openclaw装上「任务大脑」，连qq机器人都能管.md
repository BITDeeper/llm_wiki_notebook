---
title: "104人重写底层，OpenClaw装上「任务大脑」，连QQ机器人都能管"
date: 2026-04-01
source: "新智元"
url: "https://mp.weixin.qq.com/s/8jIYfF5Wxgtupkn2XL-uCQ"
rss_id: "2652688965_2"
---
新智元报道
编辑：元宇
【新智元导读】
104位开发者联手，
全球最火开源AI助手OpenClaw再出重磅更新，第一次给AI Agent装上「操作系统」级的任务控制面板：让AI能够自己管理自己，
会排任务也会说不：
Agent竞赛的下半场来了。
一个月前，网络安全公司eSentire的专家Alexander Feick在The New Stack上说了一句话，让AI Agent社区担忧良久：
OpenClaw最根本的缺口不是某个复选框，而是缺少一个能表达细粒度信任边界的控制平面。
https://thenewstack.io/openclaw-github-stars-security/
Feick是看到了OpenClaw采用已远超常规水平时，才发出这样警告的。
他的潜台词很明显：
你的AI助手越能干，越危险：因为根本没人管得住它
。
当时
OpenClaw刚刚创下纪录：从零起步，仅用约60天就以250k Star超越了React十年的积累，成为GitHub上Star数最多的软件项目。
但挑战也随之而来：一个没有调度内核、没有权限管控的AI Agent平台，跑得越快，翻车越狠。
就在刚刚，
Feick提到的「控制面板」的缺位问题有解了。
OpenClaw项目创始人Peter Steinberger（@steipete）在X上正式官宣了 OpenClaw v2026.3.31-beta.1发布。
https://github.com/openclaw/openclaw/releases
这次发布，标志着
OpenClaw的后台任务调度，从零散记账走向了统一控制面。
SQLite背后的野心
后台任务控制面成形
这次更新之前，OpenClaw的「后台任务」是怎么工作的？
实际上，它几乎没有真正「工作」过。
此前，OpenClaw的后台任务只是ACP（Agent Client Protocol）层面的记账工具。
子任务跑完了，结果可能找不到父会话；cron定时任务和CLI后台执行各走各的路；一旦任务中途崩溃，恢复机制形同虚设。
这次，v2026.3.31-beta.1做了一件大事：
把ACP、subagent、cron、后台CLI四种执行体，全部统一到一个SQLite-backed的任务账本上
。
这意味着如下几个方面的升级：
第一，所有后台任务现在有统一的生命周期管理。心跳监测、丢失任务自动恢复、审计与维护，全部内建。
第二，引入了task flow注册表。开发者第一次可以用
openclaw flows list|show|cancel
来查看和控制任务流。多任务编排有了「父记录」的概念，不再是一堆散落的「孤儿进程」。
第三，被阻塞的任务可以持久化blocked状态，在同一个flow上干净重试，而不是碎片化成新任务。
子任务的结果也能回溯到父会话：你的Agent在后台跑完一个复杂任务后，知道该去哪个对话线程汇报。
更关键的是，这不只是一个功能增强。
Kubernetes把容器的调度统一到了一个控制平面上，而OpenClaw这次做的事情十分类似：把四种不同的后台执行路径统一到了一个SQLite账本上。
区别在于，Kubernetes调度的是容器，而OpenClaw调度的是AI Agent的任务。
创始人警告
最好赶快升级
这个版本有6个Breaking Change，其中4个直接与安全相关。
最重要的一条：
ACP的危险工具审批机制被重写了
。
以前的逻辑是按工具名覆盖：把工具名加进白名单就自动放行。
问题显而易见：一个叫「read_file」的工具，背后可能挂着间接执行代码的能力，名字看不出真实风险。
现在改成了按语义类别审批：只有窄范围的只读操作（搜索、读取）可以自动批准，间接具备执行能力的工具和控制平面工具，一律需要用户显式确认。
这条改动针对的是ACP审批链路，不是OpenClaw全部审批系统的统一切换，但它封堵了此前最大的一个权限漏洞。
这还不是全部。
插件安装现在默认fail-closed：如果内置安全扫描发现危险代码，安装直接失败。
想强行装？
你得手动加上
：dangerously-force-unsafe-install
这个刻意设计得很长的参数。
Gateway认证全面收紧：trusted-proxy不再接受混合共享token配置；node命令在配对审批通过前保持禁用状态；node触发的任务被限制在缩减后的受信表面上。
还有这些细节修复：
阻止Docker端点、TLS信任根、Python包索引、编译器include路径被请求级环境变量覆盖；封堵caffeinate和sandbox-exec的审批绕过；检测awk、find、xargs、make 等命令载体中的内联eval……
来自AntAISecurityLab的贡献遍布整份Changelog，包括路径解析竞态、图片炸弹早期拒绝、跨域重定向cookie泄露、沙盒符号链接逃逸——每一条都是实战中挖出来的攻击面。
Steinberger
在此前发布beta时反复强调：
这次更新主要都是安全加固方面的内容，所以你真的最好赶紧升
。
多模态、多端爆发
全球化Agent的触手在延伸
除了以上的骨架和神经系统，还有一些「肌肉」层面的修改，主要是指在渠道覆盖上的更新。
它们指向一个清晰的信号：
OpenClaw的
Agent触手正在向
全球化
延伸
。
其中一个改变，是QQ
Bot
作为捆绑渠道插件正式加入。
支持多账号配置、SecretRef凭证管理、斜杠命令、提醒功能、媒体收发。
WhatsApp的更新看起来很小，但设计意图值得玩味：Agent现在可以用emoji对消息进行表情回应：用❤️代替打一段文字回复。
这是在让和机器人的聊天更接近「自然对话」。
Matrix加入了流式响应：部分回复现在会原地更新同一条消息，而不是每个chunk发一条新消息。
LINE支持了图片、视频、音频外发。
Microsoft Teams加入了Graph-backed的成员信息查询。
还有CJK全家桶修复。
上下文裁剪终于不再低估日文和中文Extension B汉字的长度；
内存搜索加入了三元组分词和短CJK子串回退；
沙盒浏览器安装了
fonts-noto-cjk
：截屏里的中日韩文字终于不再是豆腐块；
TTS自动检测CJK主导文本并切换中文语音；
Markdown渲染修复了裸链接吞噬相邻CJK文字的问题。
这些「小修复」叠加的效果，显示了OpenClaw从一个英语开发者的极客玩具，正在向一个「全球化多语言基础设施」的目标迈进。
它想要的已不再是GitHub Trending，而是已将视角投向更广阔的全球市场。
343k Star背后
把野蛮生长装进制度化轨道
除了技术细节之外，还有一个值得玩味的数字：这个beta版本有104位贡献者参与。
steipete此前就在推特上感慨过OpenClaw面临的「幸福的烦恼」：
PR以不可能的速度增长：一天曾提交了大约600个commit，因此他需要一个AI来扫描每个PR和Issue并去重。
网友jonahships_说：「Claw能不断在自身之上构建新能力，你只需要在Discord里跟它说话就行。未来已经到了。」
网友rovensky的判断更尖锐，认为
OpenClaw才是真正可能干掉一大批SaaS公司的东西。
它才是真正会干掉一大批SaaS创业公司的东西：不是ChatGPT。因为它可以被hack，更重要的是可以self-hack，而且可以本地部署。这会碾压传统SaaS。
数据层面：截至2026年3月，已有172家创业公司基于OpenClaw生态构建产品，月生态收入达$361K。
ClawHub技能市场从2月初的5700个技能增长到13729个。月访问量2700万，月活用户200万。
但热闹之下，安全问题也日益严峻。
5000+的open issues。
一天3100个commit的审核压力。
一位Meta高管的Agent误删了整个邮箱。
一个计算机系学生发现他的Agent自作主张在交友网站上创建了资料。 安全研究者披露过零点击劫持漏洞……
毫无疑问，开源社区的速度已经超过任何一家公司的产品迭代节奏。
速度如果失去秩序，就将是灾难。
这次v2026.3.31-beta.1的任务控制平面和安全收紧，本质上是在用架构手段，把这种野蛮生长装进制度化的轨道。
技术平民化的浪潮
一个月前，Feick警告要把控制平面，嵌入OpenClaw这样的工具，而不是事后补充。
市场会把OpenClaw这样的工具推到远远领先于治理框架的位置：除非我们把控制平面嵌入进去，而不是当作事后补充。
这次v2026.3.31-beta.1升级，刚好是回应了这一点：把首个AI任务控制平面嵌入到了AI Agent的治理体系中。
后台任务控制面解决调度问题；ACP语义审批收紧权限管控；多渠道能力继续扩展，这三件事叠加在一起，显示OpenClaw的治理能力在这个版本里又有了实质性的增强。
从项目历史看，OpenClaw用60天超过了React十年的Star积累。
这次更新，意味着OpenClaw这个项目正在从「爆红」阶段进入「基础设施化」阶段。
一个开源社区，短短两个月就自发构建出了AI Agent领域的第一个任务控制平面，这件事本也在改写行业的游戏规则。
产品该如何定义，以往这个问题的答案属于大公司的产品经理。
如今，这个问题，正在被更多像GitHub这样的开源社区上的全球贡献者所接管。
一场技术平民化的趋势，正伴随着AI浪潮，更加强烈、不可逆转地到来。
参考资料：
https://x.com/steipete/status/2039076488897876462?s=20
https://github.com/openclaw/openclaw/releases
https://thenewstack.io/openclaw-github-stars-security/
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！