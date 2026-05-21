---
title: "太狠了！OpenClaw之父一夜屠光5000 Issue，GitHub服务器先跪了"
date: 2026-04-26
source: "新智元"
url: "https://mp.weixin.qq.com/s/HXtk5YrCJHp3LQkCcGVM5A"
rss_id: "2652695272_2"
---
新智元报道
编辑：犀牛 所罗门
【新智元导读】
2天搭建、不到1000美元、50个Codex并行扫描——OpenClaw创始人祭出ClawSweeper，一天关闭5000+无效Issue，GitHub API限流成唯一瓶颈，开源维护正式进入AI「自愈」时代。
AI
产生的垃圾，就该AI自己来扫。
刚刚，OpenClaw创始人、OpenAI工程师Peter Steinberger干了一件疯狂的事——
他花2天时间搭了一个叫ClawSweeper的工具，启动
50个Codex实例7×24小时并行扫描。
一天之内把openclaw/openclaw仓库里
超过5000个无效Issue直接关闭
，数千个还在管道里排队等着被「处决」。
这个36万Star的开源巨兽，积压了上万个Issue和PRs。
重复的、过时的、早就在main分支修好了没人关的、AI灌水产生的slop——它们像数字坟场一样堆在那里。
任何人类维护者看一眼都会头皮发麻。
按人工处理速度，清完这些积压大概需要整整一年。
Steinberger用AI，一天就清了一半。
有人问他这一轮扫描花了多少钱。他的回答轻描淡写：
不到1000美元
。
5000多个Issue的深度审查加关闭，平均一个不到两毛钱。
而唯一让整套系统慢下来的，不是模型不够聪明，
是GitHub的
API
速率限制——
服务器追不上
AI
的速度。
「冷面判官」的处决逻辑
别以为ClawSweeper是个无脑杀手。
恰恰相反，Steinberger对它的设计哲学可以用四个字概括——
极致保守
。
这套系统的核心运行在
gpt-5.5
上，采用
high reasoning effort
和
fast service tier
配置；每个待审条目的 Codex 审查超时为
10 分钟
。
它只在以下7种情况下才会关闭一个Issue：：已经在
main
实现、当前
main
无法复现、应归属 ClawHub 的 skill/plugin 而非 core、重复或已被更权威条目取代、在该仓库内具体但不可执行、内容过于混乱不可执行、以及超过 60 天且缺少足够数据验证 bug。
除此之外，一律保持open。
还有一层保险，ClawSweeper不会去碰维护者自己发的条目。
它会先看 GitHub 里的身份标记，只要是项目主人、成员或协作者发的 issue，就直接跳过，不会自动关闭。
更谨慎的是，Codex 在审查时根本没有写权限。
它只能在只读环境里看代码、看上下文、做判断，然后把结果整理成一份结构化的 markdown 报告，存进
items/<编号>.md
。
真正的评论和关闭动作，并不会在审查那一步直接发生。
系统要等到进入
apply_existing=true
模式后，重新抓一遍最新上下文，再把快照哈希重算一次，确认这条 issue 在提案生成之后没有发生变化，才会真正动手。
Steinberger自己人工抽检了数百条关闭记录，结果：
准确率几乎无误
。
README就是仪表盘
ClawSweeper最让人拍案叫绝的设计，可能不是它的关闭逻辑，而是它的「监控系统」。
传统做法是什么？
搭个Grafana，配个Prometheus，弄一套精美的后台Dashboard。
Steinberger说：不需要。
README就是我的
仪表盘
。
ClawSweeper在运行过程中，会实时更新仓库的README.md文件。
当前有多少open issue、本轮审查了多少条、提议关闭多少条、已执行关闭多少条、GitHub限流到了哪一步——全部以表格形式明明白白地写在README里。
任何人打开GitHub仓库主页，就能看到这个AI判官此刻正在干什么。
它让整个清理过程变得完全透明、完全公开、完全可审计。
任何对「AI擅自关我Issue」有疑虑的贡献者，都可以直接点进对应的
items/71514.md
查看Codex给出的完整审查理由。
当AI开始「自愈」
你可能会想，这不就是个自动化脚本吗？
格局放大一点。
GitHub上有超过4亿个仓库，其中活跃的大型开源项目几乎都面临着同一个噩梦——
Issue坟场
。
Kubernetes有4万多个已关闭Issue，Linux内核的邮件列表积压更是天文数字。
维护者的时间是世界上最稀缺的资源之一，而大量时间被浪费在「判断这个Issue到底还需不需要存在」这种机械劳动上。
ClawSweeper的意义在于，它第一次在一个
真实的、百万Star级别的
仓库
里证明了：
用AI agent进行大规模的、保守的、可审计的Issue分诊，是完全可行的。
5000多个Issue的深度审查+关闭，总花费不到1000美元。按单个Issue算，成本大约0.2美元。
而且它7×24小时不休息、不抱怨、不带情绪。
唯一让它慢下来的，只有GitHub API的速率限制。
从某种意义上说，这标志着开源项目从「人工维护」迈向「自愈」的起点。
未来，每一个大型开源仓库可能都会跑着一个类似ClawSweeper的bot，持续监控Issue质量，自动过滤噪音，让人类维护者只需要关注那些真正需要人类判断的、高价值的问题。
Rate Limit是最后的防线
有个细节特别有意思。
ClawSweeper的Dashboard上赫然写着：
「State: Apply throttled」
——
GitHub的API限流把它卡住了。
50个Codex并行扫描的速度太快，快到GitHub的服务器开始说「你慢点，我跟不上了」。
在传统软件开发中，速率限制是为了防止攻击。
但现在，它成了AI工作效率的唯一瓶颈。
不是模型不够聪明，不是判断不够准确，纯粹是基础设施跟不上AI的速度。
这大概就是2026年最真实的写照：
管道追不上AI
。
参考资料：
https://x.com/steipete/status/2047982647264059734
https://github.com/openclaw/clawsweeper
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！