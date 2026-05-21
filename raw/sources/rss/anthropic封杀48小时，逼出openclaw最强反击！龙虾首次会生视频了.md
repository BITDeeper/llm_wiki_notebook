---
title: "Anthropic封杀48小时，逼出OpenClaw最强反击！龙虾首次会生视频了"
date: 2026-04-07
source: "新智元"
url: "https://mp.weixin.qq.com/s/HWf_VU7x9y4R9hNRA0C6SA"
rss_id: "2652690169_2"
---
新智元报道
编辑：好困 桃子
【新智元导读】
太突然了！Anthropic深夜发布封杀令，切断OpenClaw免费接口。龙虾之父霸气回怼，直接上线2026.4.5王炸更新：AI原生支持视频生成，还装上了一套模拟人类的「睡眠记忆」系统。
Anthropic全面封杀，OpenClaw绝境爆发！
全新的OpenClaw 2026.4.5来了，官号在帖子中，仅用三个短句完成了最强回应——
Anthropic把我们封了。GPT-5.4变强了。我们继续前进。
这条推文发出不到24小时，浏览量突破130万。
这是头一次，「龙虾」支持原生视频+音乐生成。
现如今，OpenClaw可直接调用谷歌Lyria、Runway等顶尖模型，一次对直出视频/音乐。
最为硬核的，4.5版本还引入了「梦境」（Dreaming）记忆机制。
它将AI记忆提取为三个协作阶段：轻度、深度、REM（快速眼动）。
输入/dreaming，「龙虾」便会在后台对「短期记忆」加权汇总，提取出「持久真相」，并记录在dreams.md中。
这就相当于，让AI模仿人类一样「睡眠」，结果——
OpenClaw不仅能记住对话，更学会了在反思中进化，精准把控长期任务。
此外，新版OpenClaw优化了「提示词缓存」重用率，降低延迟节省了大量token。
Anthropic禁用了怎么办？
OpenClaw接入尽可能多的大模型，可随意切换，有人已全面切换到GPT-5.4上了。
还有人晒出了自家团队，过去七天，完全被GPT-5.4接管了。
这一次重磅更新，到底塞了多少东西？
龙虾首次，直出视频+音乐了
2026.4.5版本，是OpenClaw历史上功能最密集的版本之一，涵盖从内容生成到记忆系统的全面升级。
最显眼的变化，OpenClaw现在内置了视频、音乐和图片生成能力。
Agent可以在对话中直接调用这些工具，生成的媒体文件随回复一起返回。
视频生成接入了11家提供商，Grok、Wan、Runway、Google、MiniMax、OpenAI、Qwen、fal、Together AI、BytePlus，外加ComfyUI的本地工作流。
下面这个视频，就是「龙虾」生成的。
音乐生成支持Google Lyria、MiniMax和ComfyUI。
图片生成同样拉满，ComfyUI、fal、Google、MiniMax、OpenAI的gpt-image-1全部接入，gpt-image-1还支持上传参考图做编辑。
这次OpenClaw内置了一个ComfyUI媒体插件，同时覆盖图片、视频和音乐三条线，支持本地ComfyUI和Comfy Cloud两种部署方式。
对于已经在用ComfyUI做工作流的用户来说，这相当于把整套本地生产管线直接接进了Agent。
音乐和视频生成还加入了异步任务追踪。生成请求发出后Agent不会卡住等结果，任务完成后自动推送成品给用户。
/dreaming
给AI装了一套「睡眠记忆」系统
这个版本最有想象力的功能叫Dreaming。
OpenClaw给AI Agent做了一套模拟人类睡眠记忆巩固的机制，分三个阶段运行——
浅睡眠（Light）整理和筛选近期短期记忆；
REM阶段提取主题和反思性信号；
深度睡眠（Deep）决定哪些记忆值得永久保留，写入长期记忆文件MEMORY.md。
仅需在聊天框输入
/dreaming on
瞬间开启，
/dreaming status
查看当前状态，
/dreaming off
随时关闭。
开启后，OpenClaw默认每天凌晨3点自动执行一轮完整的「睡眠」扫描。
Gateway的Dreams标签页可以看到全部状态，短期记忆数量、长期记忆数量、当天提升了多少条、下次扫描什么时候跑。
还有一个「梦境日记」面板，每次整理后自动生成一段人类可读的叙事摘要，顶部保留了一个龙虾动画。
命令行用户有更多玩法。
openclaw memory promote --apply
手动执行一次深度记忆提升，
promote-explain
可以查看某条记忆为什么没被提升，评分系统的六个加权信号（频率、相关性、查询多样性、时效性、复现强度、概念丰富度）每一步决策都透明可查。
权重分布透露了一个设计理念，相关性（0.30）比频率（0.24）权重更高。
系统更看重「这条记忆是否在不同场景下被反复检索到」，而不是「它出现了多少次」。
记忆整理还支持多语言概念标签，中文对话产生的记忆不需要翻译成英文就能参与评分和提升。
有大佬点评称，OpenClaw最新「梦境」功能，灵感源自Claude Code上周泄露的源码。
51万行代码中，暴露了一个CC隐藏功能——KAIROS。
其中，包含了一个autoDream的系统，以Fork子进程运行，充当后台记忆整合的引擎。
它一共有「三道门」触发机制（Three-Gate Trigger）——
时间门，距上次至少24小时。会话门，期间至少5次会话。锁门，获取排他锁防止并发做梦。
恰恰，OpenClaw也在Dreaming引入了三个阶段。
GPT-5.4升级版，超丝滑
针对GPT-5.4方面，OpenClaw加了前向兼容的openai-codex和gpt-5.4-mini，还有一个可选的GPT人格化选项。
GPT-5.4龙虾升级之后，明显变得更强了。
一手体验后，有网友表示，立即回到了老版Claude的感觉。
OpenClaw之父称，这可是自己耗费很大精力，才让GPT有了情感。
考虑到和Anthropic的关系变化，OpenAI阵营的支持力度明显在加码。
龙虾工作流引擎从外部CLI调用改为进程内运行，减少了通信开销。
Claude CLI的集成也有变化，通过一个loopback MCP bridge把OpenClaw的工具暴露给后台运行的Claude CLI，同时切换到stdin流式传输。
此外，「机构化任务进程」也在这个版本落地了。
长时间运行的Agent任务，现在可以向UI推送结构化的计划更新和执行进度，用户不用再盯着一个转圈的loading猜Agent到底在干什么。
提示缓存复用做了一轮系统性优化，涉及MCP工具排序确定性、图片历史嵌入、系统提示指纹归一化等多个环节。
简单说，就是连续对话时，后续轮次能更多地命中前一轮的缓存，省钱省时间。
openclaw status --verbose
，现在可以直接看缓存命中的诊断信息。
Control UI新增了12种语言，包括简体中文和繁体中文。
ClawHub技能市场聚集了超过4.4万个技能包，技能面板现在内置搜索和一键安装。
安全修复覆盖了从Telegram到Discord到微信的几乎所有渠道，占了changelog的三分之一以上。
倒贴4800美元，Anthropic动手了
说回开头那三句话的背景。
4月4日中午12点（太平洋时间），Anthropic向所有用户发送邮件，宣布Claude Pro和Max订阅将不再覆盖OpenClaw等第三方工具的使用。
之前花20美元月费就能通过OpenClaw无限调用Claude的日子，到此结束。
想继续用，要么买API key按量付费，要么开通Extra Usage走按量计费通道。
Anthropic给了一次性补偿积分作为安抚，有效期到4月17日。
CC之父Boris Cherny对此做出了解释，第三方工具绕过了Claude Code的提示词缓存优化，一个OpenClaw重度用户消耗的算力远超同等规模的Claude Code会话。
这些工具给我们的系统造成了超额压力。
这些担忧，并非空穴来风。
此前，Cursor内部研究爆出，Anthropic正在「自杀式」请客。
他们正在为200美元的订阅用户，背负5000美元的算力成本，而「龙虾」调用token消耗量可想而知。
一个Max订阅用户通过OpenClaw跑自动化Agent，实际消耗可能是正常用户的数十倍。这笔账算不过来。
社区估算，大约60%的活跃OpenClaw会话跑在Claude订阅上。
一纸禁令，直接让大量用户的AI Agent在周五晚上集体「失声」。
还有人发现，自从封杀了OpenClaw之后，Claude明显稳定了很多。
复合了，但没完全复合
OpenClaw创始人Peter Steinberger的反应很激烈。
他说自己和OpenClaw董事会成员Dave Morin「试图跟Anthropic讲道理」，最终只争取到了推迟一周执行。
「有意思的是时间节点，先把开源项目的热门功能抄进自家封闭工具里，然后把开源锁在门外」。
4月5日，OpenClaw发布2026.4.5版本，release notes里直接把Claude CLI后端从新用户引导流程中移除。
那句「Anthropic cut us off. GPT-5.4 got better. We moved on.」就出现在版本说明的最后一行。
但故事没有按照「彻底决裂」的剧本走。
就在发布后不久，OpenClaw的官方文档悄然更新了一段话，「Anthropic工作人员告知我们，OpenClaw风格的Claude CLI使用再次被允许。」
目前的状态是，Claude订阅仍然不能直接免费跑OpenClaw，但CLI层面的技术集成保留了。Anthropic的态度从「一刀切」变成了「你可以用，但得额外付钱」。
这出分手复合的戏码，三天演完。
开源Agent的「大厂困境」
表面看是计费模式之争，底层是一个结构性问题——
当一个开源项目的核心能力依赖单一商业公司的模型和基础设施时，它的命运就不完全掌握在自己手里。
OpenClaw的应对策略是用数量换安全，接入尽可能多的模型提供商，让用户在Claude、GPT-5.4、Qwen、MiniMax、Kimi之间自由切换。这次更新把这个策略推到了极致。
但同样的问题换个角度成立，OpenAI赞助了OpenClaw的独立基金会，Steinberger本人也加入了OpenAI。
如果有一天OpenAI也改变政策呢？
OpenClaw的文档里有一句话写得很诚实，「对于需要长期运行的网关主机，Anthropic API key仍然是最清晰、最可预测的生产路径。」
开源不等于免费。模型中立不等于没有依赖。
这只龙虾跑得够快，但脚下的地面一直在动。
参考资料：
https://x.com/anishmoonka/status/2040817655113032154?s=20
https://x.com/openclaw/status/2040998570317197607
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！