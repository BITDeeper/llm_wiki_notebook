---
title: "Codex现在随时能截屏你的桌面！OpenAI建议：开会前记得关"
date: 2026-04-21
source: "量子位"
url: "https://mp.weixin.qq.com/s/BNQFe-wBEtQhUUzGOay1SA"
rss_id: "2247885136_2"
---
henry 发自 凹非寺
量子位 | 公众号 QbitAI
Codex，现在盯着你的屏幕
刚刚，OpenAI给Codex上了一个新功能，Chronicle。
它会在后台抓你的屏幕截图，炼成记忆，下次你打开Codex就接上。
上周Codex才刚上线memories，让agent从对话历史里学。这周Chronicle更进一步，从屏幕里学。
奥特曼称其为“心灵感应”。
这多模态上下文，也是让OpenAI最先整起来了。
利用屏幕截图来增强上下文
OpenAI自己是这么描述Chronicle的，它能让Codex听懂你说的「这个」和「那个」。
屏幕上的一个报错。开着的一份文档。或者「那个东西，两周前你在搞的」。
以前你跟Codex说这些，它不知道你指的是什么，你得重新把背景信息粘一遍、把报错截一张、翻上次的聊天。
Chronicle把这个摩擦去掉了。时间长了，它还能记住你常用什么工具、反复回去看哪些项目、依赖哪些工作流。
比如，你问GPT，为什么这个失败了。
以前它只能说，我不知道你在说什么。
现在，Chronicle能基于此前的屏幕截图推断出你那句模糊指令到底指什么。
OpenAI总裁Greg Brockman的描述更直白一点：
「一个实验性功能，让Codex能看到、能记住你最近看到的东西，自动拿到你在做什么的全部上下文。用起来惊人地有种魔法感。」
这玩意的背后原理也很简单，就是后台agent周期性地抓屏幕截图。
截图不在你本地处理。它们被传到OpenAI的服务器，走一遍OCR和视觉分析，生成一段一段的Markdown文字摘要，再回传到本地。
摘要存在本地目录下。你下次打开Codex，它们就作为上下文被拉进上下文窗口。
原始截图在本地保留六小时，之后删掉。但那些Markdown摘要是永久保存的，明文，未加密。你打开目录就能读，也能编辑，也能删掉某一条你不想让它记住的。
不过，Chronicle并不总是把截图摘要当答案用。
OpenAI在文档里说得很清楚，如果手头有更合适的源，某个具体文件、某条Slack消息、某份Google Doc、某张dashboard、某个pull request，Codex会先用Chronicle识别出这个源，然后直接去读那个源。
Chronicle是索引，不一定是答案。
用起来也很简单。
打开Codex设置，进Personalization，先打开Memories，再打开下面的Chronicle，授权macOS的屏幕录制和辅助功能权限，就能开始跑。
目前它是opt-in research preview，只向ChatGPT Pro订阅用户开放，每月100刀那档，并且只支持macOS。
AI看截图靠谱吗？
截图接入上下文虽然能让工作流变的更丝滑，但开Chronicle之前你得知道几件事。
OpenAI自己在文档里老实交代了三条风险。
第一条，rate limit消耗很快。因为后台agent一直在把截图炼成摘要，这个过程本身就在烧你的配额。
第二条，prompt injection风险上升。屏幕上显示的恶意网页、恶意邮件、恶意文档，都可能通过截图把坏指令偷偷注入到Codex的上下文里。你没看到，Codex看到了。
第三条，记忆未加密存储在你的设备上。Markdown文件就那么明晃晃躺在本地，别的应用如果有权限访问这些文件，也能读到。
OpenAI的建议是，开会之前、看敏感内容之前，暂停Chronicle。
这个建议有点微妙。它等于承认Chronicle会捕捉到不该捕捉的东西，只不过把「记得暂停」这件事的责任交给了用户自己。
而说到做桌面屏幕感知，桌面agent的，OpenAI并不是第一个。
微软
Recall
2024年就想过同样的事，结果是全网炸了一遍。
2026年初有安全研究员演示出一套攻击路径，把Recall加密的数据库攻破了。Copilot订阅用户半年掉了39%，Recall的阴影是原因之一。
Rewind AI
曾经是这个赛道上跑得最早的那个，后来改名Limitless，2025年12月被Meta收购，Mac app直接关了，屏幕捕捉功能下线。Meta显然不是买它来继续做这件事的。
开源替代Screenpipe还在，本地优先，但太硬核，不是普通用户会去装的东西。
Chronicle走的是相对保守的路。截图不上云、本地存储、六小时删除、可随时暂停、摘要可以人工审查和编辑。这是一套比Recall坦诚得多的机制。
但需求没消失，关也没变。
推文底下争议很大，一边是用户觉得这个方向是对的，终于不用反复粘报错粘截图了。
一边是网友盯着那句「未加密存储」不放，表示能随便截图的agent很吓人。
毕竟，谁也不想摸鱼的时候，被AI取证吧？
（有人截图了！）
参考链接
[1]https://x.com/OpenAIDevs/status/2046288243768082699
[2]https://developers.openai.com/codex/memories/chronicle
[3]https://9to5mac.com/2026/04/20/codex-for-mac-gains-chronicle-for-enhancing-context-using-recent-screen-content/
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