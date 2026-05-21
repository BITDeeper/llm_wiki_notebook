---
title: "封不住！Claude Code爆改Python版加冕最快10万星，且clone且珍惜"
date: 2026-04-02
source: "量子位"
url: "https://mp.weixin.qq.com/s/OZNc1MjdJEe2NtVarwp0AQ"
rss_id: "2247879804_1"
---
Jay 发自 凹非寺
量子位 | 公众号 QbitAI
还活着！
两天过去，Claude Code源码克隆项目不仅健在，还成了
史上
最快1
0万星
项目。
太恐怖了，揽星速度比之前的OpenClaw还要猛，火到连作者的
妈妈
都出来喊话，催他赶紧去申请
吉尼斯世界纪录
。
谁能想到呢？在Anthropic那边法律大炮无差别火力全开的攻势下，这个发布2小时就冲破5万星的项目，
居然还能坚挺到现在
。
原因嘛……全靠Sigrid Jin全网在「开源狂欢」那晚，神来之笔地祭出了一招
「金蝉脱壳」
。
两个人，十只OpenClaw，一台Macbook，用Python替换TypeScript原始代码，
硬是一夜给Claude Code换壳了
。
没想到啊，在Claude Code底裤被扒的一干二净的情况下，居然还有人能这么冷静，提前做好了备案（doge）。
不过说实话，这可能真得
归功于他的韩国女朋友
。
一夜极限换壳
周二
凌晨4点
，Sigrid Jin被手机震醒，Claude Code泄露的消息已经炸锅了。
一切的源头，都来自中国00后小伙
Chaofan Shou
的一个帖子。他发现Claude Code的51.2万行源码被意外公开，其中还包含了工具的运行机制和新功能测试内容。
数小时内，无数人克隆了Claude Code的源代码，副本数量激增。
这事儿本身就挺讽刺的。一直以来，这个行业被指控用公开内容训练模型，而Anthropic又一直把「安全承诺」当卖点。
现在好了，风水轮流转，Claude Code被社区狠狠翻了个底朝天。
对此，Anthropic解释称，这次泄露源于人为失误，并非安全漏洞。「我们正在上线新的措施，防止类似情况再次发生。」
与此同时，
一
场声势
浩大的「猫鼠游戏」正式开始
。
Anthropic拿起了法律武器，通过DMCA要求GitHub下架相关仓库
。
速度之快，强度之高，几乎像是提前做过预案，甚至很多和Claude Code源码不相关的项目都受到了波及。
AI高管
Daniel San
便是受害者之一。在收到GitHub的警告邮件后，他欲哭无泪地表示冤枉，自己明明用的是Anthropic
自己公开仓库的一个fork
。
高强度吃瓜的
龙虾之父Peter
随即赶到了案发现场，调侃Anthropic这些下架请求都是
Vibe Coding
出来的自动删除程序。
你还别说，之前确实有消息说Anthropic
连法务团队都在用Claude写代码。
可就是在这么一场无差别扫射中，一个名叫claw-code的项目却幸存下来，还形成了病毒传播，增长速度远超OpenClaw。
Anthropic不可能会没注意到这个异军突起的项目。发布后2小时突破5万星，一天内突破10万星，至今还活蹦乱跳。
但他们根本就没和这个项目的作者联系过。
「挺意外的，Anthropic和GitHub到现在都没联系过我们。」Jin在接受Business Insider采访时说。
这一切能成，全靠Sigrid Jin开局就走了条野路子。
把时间拨回周二凌晨，跟所有吃瓜开发者一样，Jin看到Claude Code源码泄露也兴奋得不行。
幸好他的
韩国女朋友多了个心眼
，劝他最好小心点，说就算只是「私藏」这代码，搞不好也会惹上Anthropic的官司。
就是这句话，逼得这位25岁的哥大在读学生，干了一件现在回头看简直神来之笔的事儿——
两个人，10个OpenClaw账号，一台MacBook Pro，直接从零开始用Python把源码给重写
了。
Codex立大功，整个过程全靠oh-my-codex(OmX)这个工作流端到端编排，说白了就是站在OpenAI Codex的肩膀上搞自动化。
最后搞出来的Python版，架构逻辑跟Claude Code一模一样，但找不出一行源代码。
从半夜惊醒到发布，仅仅花了几个小时，天都还没亮。
如今也证明，这招「金蝉脱壳」成了Claw Code的免死金牌，
纯纯卡
BU
G
，直接闪避了Anthropic法律大炮的所有伤害判定。
截止到发稿，Jin复刻的Claw Code在GitHub上已经狂揽超
11万stars和10万forks。
他说，就短短一天，Discord群里就塞进了
5000号人
。
现在，Jin正马不停蹄地推进
Rust重写版。
他说，这才是这个项目的完全体。
老马或成最大受益者
对了，在这条故事线的中段，还冒出来一个特别戏剧性的小插曲。
Jin专门
发帖感谢马斯克
，说xAI给他送了不少Grok积分，这对Claw Code的重写帮了大忙。
「超级期待看到你们搞出来的后续成果！」
xAI的Umesh Khanna
闪现评论区，这么回复道。
啧啧啧，果真是看热闹的不嫌事大。
Claude Code被泄露也就罢了，
xAI还要跟着火上浇油
，帮着开发者快速移植，生怕Anthropic一封邮件就把项目给搞下架了。
天不灭老马啊。
做梦都想不出这剧情。谁想得到，就在Grok在编程这块大幅落后、联创团队都快跑光了的节骨眼上，
突然天降51万行Claude Code源代码
。
而且要知道，xAI团队里现在还有两名Cursor的大将，前不久才挖过来的……
Grok Code这下估计是真近在咫尺了
（doge）。
GitHub连接：https://github.com/instructkr/claw-code
参考链接：
[1]https://www.businessinsider.com/claude-code-leak-what-happened-recreated-python-features-revealed-2026-4
[2]https://www.wsj.com/tech/ai/anthropic-races-to-contain-leak-of-code-behind-claude-ai-agent-4bc5acc7
[3]https://x.com/steipete/status/2039156882041123035
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