---
title: "别养龙虾了，硅谷Agent新潮流是「爱马仕」"
date: 2026-04-13
source: "量子位"
url: "https://mp.weixin.qq.com/s/YfJUaqRVfetZYj_ZGP7Lpg"
rss_id: "2247882819_2"
---
鱼羊 发自 凹非寺
量子位 | 公众号 QbitAI
免费开源的「爱马仕」，来一只不？
你可能也听说了，龙虾界的「爱马仕」，最近那叫一个风头正盛。
倒不是说价格有多么金字塔，是人家名字就叫
Hermes Agent
。
这不上线一个月，霸榜GitHub Trending不说，标星数已经来到了6.66万+，属于是6得飞起。甚至有不少人上手后评价说：如果你还没养OpenClaw，那不如直接开始养马。
要说这只听上去身价不菲的龙虾与别虾有什么不同，简单来说就是更强调
持续学习和自我进化
——
在完成复杂任务后，它能自动从中提取出可复用的Skills，保存为独立文档，并在后续使用过程中持续改进这些技能。
比如把著名数学频道3blue1brown在用的Manim引擎炼成自带技能。
另外，最新的好消息是，这只爱马仕虾在刚刚过去的这个周末已经原生支持个人微信，扫码即可连接，图片、视频、文件、语音消息都能支持。
那还有什么说的，俺先喜提人生第一个「爱马仕」，安装笔记什么的都放这里了，供你参考～
年轻人的第一个「爱马仕」
安装方面，尽管是「爱马仕」，倒也没有什么高门槛，无需门口排队，在终端里复制粘贴一行命令就能搞定。
不仅支持Linux、MacOS和Windows，也可以在安卓手机（Termux）上接入。
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
不必担心环境问题，什么Python、Node.js，缺了啥Hermes Agent都会自己帮你装好。
（当然如果缺的东西多，安装的时间就会比较长……）
p.s. 如果你同时也养了OpenClaw，Hermes会自动检测，问你要不要自动导入OpenClaw的设置、记忆、技能和API配置。
装完之后，准备好你想用的模型API，GPT、Claude、GLM、MiniMax、Kimi、Qwen、DeepSeek……都可以，然后按照Hermes的指引完成模型配置就行。
需要注意的是Hermes Agent要求模型的上下文窗口至少是64K，以维持足够的工作记忆。
如果需要切换模型，用「hermes model」这个命令就行。
Hermes也会提醒你设置好信息接口，钉钉、飞书、微信都支持。
相关的依赖项是以下Python包：
pip install aiohttp cryptography
# Optional: for terminal QR code display
pip install qrcode
如果你暂时不想设置，也可以先跳过，之后再调用「hermes setup gateway」这个命令。
最后一步，输入「Y」，启动Hermes chat。
看到这样的界面之后，我们就可以开始愉快养马啦～
之后在终端里输入「hermes」，就可以开启与智能体的对话。
浅试一下让它做个关于正弦函数的科普视频：
效果是这样的：
更多快捷命令可以看这里：
当然，以上笔记只是初始的配置安装，更多玩法，比如安全方面在沙箱里运行Hermes、安排自动化任务等，大家可以参考官方文档进一步探索，🔗链接文末附上。
和你一同成长的开源智能体
Hermes Agent由Nous Research团队发布，用他们自己的话说，这个项目的爆火是“9个月磨一剑”。
在x上最活跃的Hermes贡献者Teknium，是Nous Research的联合创始人兼后训练负责人，此前曾在StabilityAI任职。
前文提到，Hermes强调的是
持续学习和自我进化
的能力，拆开来说，相比于OpenClaw，「爱马仕」基于其多层级的记忆系统，
记性更好
，能做到对长期项目更连贯的追踪。
最特别的一点是，在Hermes中，开发团队设计了
学习闭环
：
在完成复杂任务后，从中
自动提炼可复用的Skills
，保存为独立的markdown文档。在后续使用中，这些Skills还能根据新的反馈不断自我改进。
也就是说，Hermes完全能自己在实操中不断学习，用户不必为什么skill更适合自己的任务调研到头秃。
另外，Hermes还会利用FTS5进行会话搜索，并由大模型生成摘要，来加强跨会话回忆。
加上自动化任务、多个子代理的并行运行机制等，正如开发团队所说，这些能力让Hermes Agent能够“和你一起成长”，随着时间的推移变得更加强大，同时也更加懂得你的需求。
Hermes爆火之后，来自开源社区的实测也证明，在需要深度研究的项目中，Hermes比OpenClaw更胜一筹。
不过，目前爱马仕并没有和OpenClaw一样的技能市场。有用户认为，如果大家能共享爱马仕们学到的技能，“那才是Hermes Agent的飞轮所在”。
另外，Hermes虽然名字显贵，但干的却是更便宜的活——空闲时它会给自己放假休息，几乎不消耗token，直到你再次唤醒它。
官方表示，租个5美元（约35元人民币）的服务器，你就能7x24小时跑Hermes了。
也难怪，Hermes一出场，大家伙会惊呼“OpenClaw真正的对手来了”。
One More Thing
对了，除了Hermes本身，Hermes自己写的一首歌也小小火了一把。
当初发布的时候，评论区就全是求配乐的hhh。
最后，一起来纯享一下吧～
文档链接：
https://hermes-agent.nousresearch.com/docs/getting-started/quickstart
一键三连
「点赞」「转发」「小心心」
欢迎在评论区留下你的想法！
—
完
—
🔹 谁会代表2026年的AI？
龙虾爆火，带动一波Agent与衍生产品浪潮。
但真正值得长期关注的AI公司和产品，或许不止于此。
如果你正在做，或见证着这些变化，欢迎申报。
让更多人看见你。
👉 https://wj.qq.com/s2/25829730/09xz/
一键关注 👇 点亮星标
科技前沿进展每日见