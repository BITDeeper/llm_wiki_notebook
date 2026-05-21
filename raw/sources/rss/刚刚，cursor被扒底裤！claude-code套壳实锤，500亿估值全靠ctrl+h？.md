---
title: "刚刚，Cursor被扒底裤！Claude Code套壳实锤，500亿估值全靠Ctrl+H？"
date: 2026-04-14
source: "新智元"
url: "https://mp.weixin.qq.com/s/T-TXsDZsDnljSSkKC5p1Pg"
rss_id: "2652691937_2"
---
新智元报道
编辑：犀牛
【新智元导读】
当Cursor 3.0被开发者一层层拆开，大家才猛然发现：这场翻车真正刺痛行业的，不是它用了Claude，而是它试图把别人的大脑，包装成自己的灵魂。
新鲜大瓜！
Cursor 3.0实锤套壳Claude Code。
事情是这样的，知名开发者Jason Kneen在深度逆向分析Cursor 3.0后，在GitHub上发布了一份炸裂的技术报告。
这份报告一经发出，瞬间在开发者社区炸开了锅。
另一位开发者coah也在社交媒体上爆料：「我反编译了Cursor，它的『Agent模式』实际上就是Claude Code SDK跑在一个本地代理后面，用查找和替换把Claude换成Cursor——模型甚至不知道自己被装进了Cursor里。」
什么意思？
简单说就是：
Cursor引以为傲的「Cursor Agent」功能，本质上就是把Anthropic的Claude Code买回来，套了一层皮，然后告诉你这是「自主研发」。
搞笑的是，这个「套皮」的方式堪称简单粗暴——就是一套字符串查找替换引擎，像批量改Word文档一样，把所有「Claude」字眼全部替换成「Cursor」。
连Git提交的签名都给你改了：
Co-Authored-By: Claude → Made-with: Cursor
「套壳」工程的完整技术解剖
根据Jason Kneen发布的逆向报告，Cursor 3.0.16版本的架构可以概括为三个层次：
第一层：GLASS——完整的自定义
UI
外壳
这一层包含50多个服务，负责管理代理面板、文件树、终端、差异对比、主题、快捷键等等。
说白了，就是把VS Code改头换面，穿上自己的衣服。
第二层：COMPOSER——
AI
代码生成引擎
40多个服务，包括composerService、composerAgentService、composerChatService等，支持agent、chat、debug、plan等多种模式。
第三层：AGENT SYSTEM——层级化代理架构
本地代理、云端代理（跑在cursorvm.com的虚拟机上）、子代理，形成一套复杂的分布式系统。
但问题来了——这套系统的「大脑」是什么？
答案是：
Anthropic的Claude Code和Claude Agent
SDK
。
逆向分析显示，cursor-agent扩展（4.1MB + 11.5MB CLI）本质上就是Anthropic官方的Claude Code/Claude Agent SDK，只不过被架设在一个本地HTTP代理后面。
这个代理的运作方式如下：
在127.0.0.1上启动（使用随机端口）
捆绑的Claude Agent SDK CLI连接到这个代理
代理拦截所有请求
→ 路由到api2.cursor.sh
一个字符串替换引擎实时改写所有品牌信息
这套「品牌洗白」系统的替换规则简直令人瞠目结舌：
原始内容
替换为
Claude Code
Cursor Agent
CLAUDE.md
AGENTS.md
claude.com
cursor.com
Co-Authored-By: Claude
Made-with: Cursor
@anthropic-ai/claude-agent-sdk
@anysphere/cursor-agent-experimental-sdk
不仅如此，这套系统还会主动过滤掉一些「敏感」内容：
<fast_mode_info>
标签
Anthropic的计费头信息
Claude的GitHub Issues链接
/sandbox相关的文档引用
换句话说，Cursor不只是在「借用」Claude Code，
它还在系统性地抹除所有可能暴露真实身份的痕迹。
更劲爆的：用户行为画像与竞品封杀
coah在反编译过程中还发现了其他「有趣」的操作：
用户行为画像系统
Cursor会在后台偷偷调用Claude Opus，分析用户多达
100次
的历史对话记录，构建一套完整的用户行为画像——包括你的开发风格、常犯的错误、经常修改的代码区域等。
这个画像会被注入到所有未来的代理会话中，作为上下文提供给AI。
暴力封杀GitHub Copilot
在Cursor的代码中，开发者发现它显式地屏蔽了以下插件：
github.copilot
github.copilot-chat
没错，就是直接把竞争对手的产品给ban掉。
想在Cursor里用Copilot？
对不起，此路不通。
官方紧急灭火：只是A/B测试
事情发酵到这个地步，Cursor官方坐不住了。
联合创始人兼CEO Michael Truell亲自下场回应：
我们对Cursor的很多部分进行A/B测试：模型检查点、用户体验、代理框架。在这种情况下，我们只测试了不到1%的流量，用来对比Claude官方框架与我们默认框架的表现——这是我们经常通过离线评估做的事情。
我们的团队做了很多工作来提升框架的速度、体感和准确性，针对用户真正关心的查询进行优化。希望不久后能分享更多这方面的工作。
但问题在于——即便是「A/B测试」，这种把Claude Code整套打包进去、然后用字符串替换伪装成自家产品的做法，说服力实在有限。
更何况，逆向分析显示的并不是一个「测试版本」应有的样子。
安装包里直接捆绑了完整的
@anthropic-ai/claude-agent-sdk
和
@anthropic-ai/claude-code
包，甚至还有一个专门为Cursor微调的模型：
claude-3.7-sonnet-finetuned-cursor-20250514-v1
这看起来更像是一个经过精心规划的正式集成方案，而非临时拼凑的测试代码。
公平地说：Cursor也有真东西
在一片口诛笔伐中，也有开发者试图公平评价这件事。
coah本人就在后续补充道：
公平地说，Cursor在Claude Code之上确实做了真正的工程工作。双向流传输（BiDi streaming）基于ConnectRPC/protobuf、并行工具执行、推测性上下文压缩、服务端提示缓存——这些都是实打实的技术活。
但代理的「大脑」就是Claude Code加一个查找替换。
但核心的AI能力——那个真正「思考」的部分——并非自研，而是Anthropic的Claude在扛。
应用层的智能焦虑
这次「套壳」事件折射出的，是整个AI应用层的深层困境：
当核心智能掌握在少数几家基础模型公司手中，应用层企业能做什么？
Cursor的处境其实很尴尬。
作为一个AI编程工具，它的核心竞争力应该是「AI有多聪明」。
但「聪明」这件事，是由Claude、GPT这些基础模型决定的。
所以Cursor只能在「体验」和「集成」上下功夫——更流畅的交互、更快的响应、更好的上下文理解。
但归根结底，这些都是「锦上添花」，真正的「锦」还是基础模型公司织的。
有意思的是，这恰恰印证了一个越来越清晰的行业趋势：
Claude Code
成为执行层的最强选手——SemiAnalysis估计它在2026年3月已经贡献了约4%的公共GitHub提交
OpenAI Codex
主打异步长时间任务——每周活跃用户突破300万
而
Cursor
则试图成为「工作流编排层」——把这些智能引擎整合到一个统一的IDE体验中
问题是，当你的核心引擎是别人的，当竞争对手也能用同样的引擎，你的差异化优势能维持多久？
更扎心的是，Anthropic自己也在做Claude Code的官方VS Code扩展。
当「品牌方」下场做应用，「代理商」的日子还好过吗？
结语
Cursor「套壳」Claude Code这件事，与其说是一个丑闻，不如说是一面镜子——照出了AI应用层创业的残酷现实。
当OpenAI、Anthropic、Google这些巨头掌握着智能这张王牌，应用层的玩家们只能在体验、集成、工程化这些「外围战场」上厮杀。
Cursor的选择是把Claude Code包装成自家产品，或许是一种商业上的务实策略，但当这层面纱被揭开，用户的疑问必然会出现：
我付的20美元会员费，到底是在为什么买单？
这个问题，不只是Cursor需要回答的问题，也是整个AI应用行业需要思考的问题。
在AI能力越来越集中于少数几家公司的时代，应用层如何创造真正的、不可替代的价值？
答案，还在探索之中。
参考资料：
https://x.com/migtissera/status/2043556878177992908
https://x.com/jasonkneen/status/2043435856849940818
https://gist.github.com/jasonkneen/4c065df2d7a95610e4fd30c3e3398b17
https://x.com/dotey/status/2043588734952563180
https://x.com/coah80/status/2043743832920015171
https://x.com/mntruell/status/2043574966168555717
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！