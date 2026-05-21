---
title: "龙虾让位！硅谷顶流AI「爱马仕」一夜闯进微信，冲上全球第一"
date: 2026-04-13
source: "新智元"
url: "https://mp.weixin.qq.com/s/uB7FJUcfUAH2ildk09hw8A"
rss_id: "2652691500_2"
---
新智元报道
编辑：桃子 好困
【新智元导读】
硅谷新宠Hermes Agent一夜爆火，不仅在GitHub狂揽6.6万星，更因原生接入微信让开发者全线沸腾。如今，Hermes署名的首篇「顶会级」论文也出世了。
Hermes Agent实火，全然盖过了「龙虾」的热度。
就在今天，Hermes在OpenRouter上的token消耗日榜位列第二，仅次于OpenClaw。
不仅如此，
它还登顶全球「编程应用」榜首
，「生产力榜」第二，直逼冠军宝座。
如今，这款历经9个月打磨，一夜成名的Agent，已在GitHub上狂揽66k星，Fork有8.8k。
由于项目太过爆火，提交Issues数量高达2.3k（最新）。
GitHub地址：https://github.com/nousresearch/hermes-agent
一时间，许多人直接弃掉了OpenClaw，纷纷转战Hermes了。
「爱马仕」接入微信，扫个码就行
凭借着「自我成长型」Agent这个关键特质，整个硅谷争相追捧的新宠，如今已经从「龙虾」换到了「爱马仕」。
YC CEO Garry Tan直言，亲自尝试后，彻底回不去了。
最让人上头的是，这几天，Nous Research官宣Hermes也可「原生」支持微信了。
公网服务器，不用webhook，扫个码就完事。
官方文档：https://hermes-agent.nousresearch.com/docs/user-guide/messaging/weixin
这个功能上线当天，Nous Research官方账号专门发了一条中文推，549.1K浏览，是这家美国实验室近期互动最高的几条之一。
一条评论挺戳人，在中国你能把微信搞定，你就起飞了。
值得拎出来说一句的是，一家硅谷实验室在中文推下面用中文跟中国用户互动，本身就不太常见。
至于中文写得为什么这么顺，Nous自己揭了底，他们请Hermes帮忙润色过。
技术底色这边Nous也交代了一句，用的是腾讯官方的iLink Bot API，不是第三方破解协议或非官方客户端。
不过，还是建议先用小号试一下，再决定要不要挂主号。
顺带提一句，国内主流IM Hermes基本都接全了。
钉钉、飞书、企业微信、企业微信自建应用回调，加上这次新加的个人微信，一个不落。
挑哪个挂全看自己的工作流落在哪。
说回到微信，具体配置流程如下。
先装依赖
两个包是硬要求，少一个都起不来。
pip
install aiohttp cryptography
想在终端里直接看到二维码的，再加一个。
pip
install qrcode
扫码登录
一行命令拉起setup向导。
hermes
gateway setup
选Weixin。接下来的事情向导会自己办，拉二维码、在终端里画出来（或者给一个链接）、等手机扫、等手机上点确认，然后把账号凭证写到~/.hermes/weixin/accounts/下面。
确认成功后，终端会蹦出一句。
微信连接成功，account_id=your-account-
id
account_id、token、base_url这三样向导会自动落盘，后面不用手动填。
写一下环境变量
打开~/.hermes/.env，最少把account_id塞进去。
WEIXIN_ACCOUNT_ID
=your-account-id
剩下的几项按需打开。想限定只有自己能给Bot发消息，加这两行。
WEIXIN_DM_POLICY
=allowlist
WEIXIN_ALLOWED_USERS
=user_id_1,user_id_2
群消息默认是也关的。要在某个群里用，需手动开allowlist。
WEIXIN_GROUP_POLICY
=allowlist
WEIXIN_GROUP_ALLOWED_USERS
=group_id_1
定时任务和通知想发到固定的某个聊天窗口，再加两行。
WEIXIN_HOME_CHANNEL
=chat_id
WEIXIN_HOME_CHANNEL_NAME
=Home
起服务
到这一步，适配器会把刚才存下来的凭证捡回来，连上iLink，开始长轮询。
手机微信里随便给Bot发一句话，几秒钟之内就能看到回信，连「正在输入」的状态都能在对话框里看到。
hermes
gateway
几个已经被踩过的坑
一个翻车现场来自JamesweiymWei。他实测发现，微信回复经常一句话被切成好几段发出去，很多时候一段回复还没说完就先被截断。
问Hermes自己是怎么回事，得到的答复是，微信单条消息上限4000 token，超过就自动chunking，暂时没有更好的处理方案。截至发稿前这个问题还挂在那里。这也是目前接微信最劝退的一点，长回复的体验不太行。
掉线最常见的原因是session过期，错误码-14。解法是，重新跑hermes gateway setup扫个新码。
报Another local Hermes gateway is already using this Weixin token的，说明有另一个gateway实例在用同一个token。一个token只能挂一个poller，把另一个先停掉。
媒体文件收发失败，先确认cryptography装了。微信的CDN走的是AES-128-ECB加密，少了这个库连图片都拉不下来。
换掉OpenClaw，3.99美元上手
如今，全网都被Hermes Agent实力深深震撼。
一位开发者同时深度评测了Hermes和OpenClaw两大Agent，整体感受是——
OpenClaw系统容易出现太多可能崩溃的环节，让人心累；
Hermes才是真正让他感受到「开箱即用」的AI Agent，而且仅需3.99美元即可用上了。
还有国内大佬体验后，一致认为Hermes Agent把真正的「自我进化」体现的淋漓尽致。
3.99美元的门槛，再加上足以撼动OpenClaw的性能表现。
AI Agent的「平权时代」，或许就从这个被戏称为「爱马仕」的Agent开始了。
Hermes署名首篇论文，曝大模型致命伤
就在今天，一篇由Hermes署名的「顶会级」水准的论文诞生！
这篇论文提出了一个全新推理方法——Autoreason，正是受到Karpathy的AutoResearch的启发。
一直以来，在大模型日常使用中，人们通常有一种执念——
让它再改一版，效果肯定会更好。
然而，Hermes直接给这一执念浇了一盆冷水，实验证明了：传统的「自我优化」（Self-Refinement）往往会让结果变得更糟。
论文地址：https://github.com/NousResearch/autoreason/blob/main/paper/autoreason.pdf
他们发现，无论提示词写得多好，传统的「批评-修改」模式普遍存在以下三大死穴：
幻觉瑕疵：
为了满足用户的批评指令，模型会凭空捏造缺点；
规模失控：
每一次迭代都会导致内容范围不受控地扩张；
拒绝无能：
即使原稿已经非常出色，模型也几乎从不拒绝修改建议，导致过度打磨。
Autoreason的核心逻辑不再是盲目的「改改改」，而是引入了严谨的竞争与收敛机制。
每一轮迭代都被设计成一场
三方锦标赛
：
选手A（维持现状）；选手B（对抗修改）；选手AB（优势合成）。
这三个版本，会交由一组「盲评智能体」（Blind Agents）进行评审，并采用
Borda 计数法
进行投票。
Autoreason 引入了一个极具启发性的停止逻辑：
如果「维持现状（选手A）」连续两次胜出，系统将立即停止迭代。
这种机制确保了输出的稳定性——
只有当修改确实带来了价值，迭代才会继续；当模型不再有建设性贡献时，它会自动「收手」。
小模型逆袭
在涵盖策略、系统设计、政策制定、竞争定位及事故响应的五项写作任务中，Autoreason展示了统治级的表现。
使用Haiku 3.5（成本仅Sonnet的十分之一）配合 Autoreason，产出质量竟与Sonnet 4单次生成持平。
在三项任务的蒙特卡洛模拟中，无论路径如何，最终都拿下了42/42的满分评价。
经过15轮优化后，模型因无法区分「优化」与「破坏」，硬生生地将345字的精华删减到了102字（内容暴减70%），内容近乎崩毁。
而Autoreason的输出却每次都在增长，因为它的裁判机制直接拦截了任何「越改越烂」的情况。
在用Sonnet 4跑了五个写作任务后，结果显示，Autoreason的Borda计分平均达到了27.8分，最差也没掉出过前两名。
在那种需要做实质性权衡取舍的任务里，Autoreason的表现最好。
此外，在150个编程难题中，Autoreason的失败恢复率达
62%
，远高于单次生成的43%。
强制性的结构化分析让模型在尝试修复前，先学会了思考「为什么会失败」。
Autoreason的诞生，标志着AI推理正从「大力出奇迹」转向「结构出效率」。
值得一提的是，这篇论文最后还是由Autoreason进行了润色优化。
与此同时，完整的Skill同步放出，想联手Hermes搓出论文的可以上手了。
参考资料：
https://github.com/NousResearch/hermes-agent/releases
https://x.com/garrytan/status/2043016576568561829
https://x.com/garrytan/status/2042497872114090069
https://x.com/NousResearch/status/2042821620281053641
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！