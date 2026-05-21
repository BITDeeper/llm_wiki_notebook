---
title: "Claude深夜长出「双手」，接管电脑狂飙代码！额度光速耗尽，全网哀嚎"
date: 2026-03-31
source: "新智元"
url: "https://mp.weixin.qq.com/s/w3dvnGs_1D3MaH3uHiCOUA"
rss_id: "2652687823_1"
---
新智元报道
编辑：桃子
【新智元导读】
Claude真要起飞了！今天，Claude Code正式上线「计算机使用」，直控CLI写代码、点UI、改Bug。一键开启「自动驾驶」模式，彻底解放打工人双手。
Claude的交付速度，堪称疯狂！
凌晨，Anthropic再次扔下一枚重磅炸弹——
「计算机使用」能力正式接入Claude Code。
这意味着，Claude不再只是一个躲在对话框后的聊天AI。
它现在有了双手，可以直接驻扎在CLI中，一键接管电脑干活。
如今，Claude Code可以像「真人程序员」一样，
自主完成开发、调试和测试的闭环
。
而且，仅需一个提示，Claude就能完成从写代码、编译、启动应用到自动点选测试的全流程。
如果程序崩了，它能自己翻找 Bug、修复它并完成验证。
这下子，网友们彻底慌了，有人表示，这一刻标志着，Claude正式取代了软件工程师。
目前，这一功能以「研究预览版」向Pro和Max用户开放，
仅限macOS
。
Claude Code终于长出「手和眼」
人类只剩旁观
实际上，Claude Code已经很强了：它能读懂你的整个代码库，能写代码、改文件、跑命令。
但它的能力，终究被限制在终端和文本世界里。
一旦工作流跳出终端，进入浏览器、桌面应用或系统 UI，人类就得接手。
从此，Claude可以直接接管Mac，操控浏览器、鼠标、键盘和屏幕来完成任务。
仅需在终端输入/mcp，即可开启Claude「自动驾驶」的模式。
接入计算机使用能力之后，
Claude Code可以执行以下操作——
跨应用交互
：打开电脑安装的各类App，在UI界面上进行点击和滑动。
端到端
闭环
：通过一条指令，它可以完成全流程任务：
写代码 -> 编译 -> 启动 App -> UI 自动化点击 -> 发现 Bug -> 修复代码 -> 再次验证。
无视工具边界
：无论是本地编译的SwiftUI应用、Electron项目，还是没有CLI的图形化工具，它都能直接上手操作。
这次更新最核心的突破在于，复杂环境下的「自主调试」能力。
以往，当代码运行出问题时，人们需要手动截图反馈给AI，或者复制报错信息，耗时又耗力。
现在，Claude能直接看到构建的程序界面，通过模拟用户操作，来寻找视觉或逻辑上的漏洞。
这种「所见即所得」的调试方式，极大程度地降低了开发者在不同工具间切换的成本。
这一功能的更新，对于开发者来说，真正实现了一个完整的闭环，全程不用上手就完成了开发。
虽说Claude Code变得更强了，但没了额度，开发者也只能望「码」兴叹了。
额度「光速」用尽，全网哀嚎一片
因为就在今天，Claude摊上大事儿了....
这周才刚过一天，
全球开发者就集体撞上了Claude Code的「额度墙」
。
就连那些花了200刀的「Max尊贵用户」也变成了「大冤种」，还没怎么用就收到了限额警告。
这场突如其来的限流，直接引爆了全网吐槽，「Claude额度荒」的帖子疯狂刷屏。
最让人破防的是，周一还没过完，Claude就已经先「下班」了。
上下滑动查看
面对铺天盖地的哀嚎，CC工程师紧急回应：内部正在深入调查。
但截至目前，「起火」原因依然是个谜。
被曝严重bug，Token成本暴涨20倍
一位Reddit上的大神坐不住了。
他通过中间人攻击（MITM），对Claude的二进制文件进行了逆向工程，结果发现了一个令人震惊的真相：
系统底层存在两个严重的Bug，直接导致了缓存失效。
要知道，一旦缓存失效，Token消耗成本会瞬间飙升10-20倍，这简直是在「谋杀」用户的配额。
如果你是在API调用中使用，情况只会更糟糕。他深入研究发现，这两个Bug极其隐蔽。
第一个是，Bun运行时环境中的字符串替换Bug。由于Claude独立CLI自带了定制化的二进制文件，导致缓存频繁失效。
目前已知的临时方案是改用
npx @anthropic-ai/claude-code
来运行。
第二个Bug则更让人头大，在使用
--resume
命令恢复会话时，缓存100%会崩溃。
目前除了「回退」到牺牲大量功能的老版本外，几乎无解。
社区中，有人表示，Anthropic是故意不修复Bug以获利。
目前，GitHub上已有大量开发者确认了该漏洞，这次「Token刺客」事件恐怕还得持续一段时间。
Claude Code之父亲测，15个实战秘籍
昨天，Claude Code之父Boris Cherny在线分享了15个被严重低估的「隐藏技能」。
1. 揣在兜里的编译器
或许，很多人不知道Claude Code有移动端App。Boris经常在iOS应用上，直接写代码。
无论是在通勤路上还是排队等咖啡，直接通过手机端的Code tab审查代码更改、提交PR，甚至直接敲代码。
2.
跨设备「瞬间移动」
如果你在公司电脑上运行了一个复杂的Session，回家想在笔记本上接着干，只需输入
/teleport
。
/teleport，可以把云端会话拉到本地终端继续；/remote-control可以从手机或网页端操控一个本地运行的会话。
3. 自动化的终极形态：/loop与/schedule
这是Boris最「心头好」的功能，它可以设置Claude自动执行任务，最长可运行一周。
/loop 5m /babysit
——每5分钟自动处理代码审查、rebase、把PR推向生产环境
/loop 30m /slack-feedback
——每30分钟根据Slack反馈自动提交PR
/loop /post-merge-sweeper
——自动补上之前遗漏的代码审查意见
/loop 1h /pr-pruner
——每小时清理过期和不再需要的PR
4. 利用Hooks掌控生命周期
通过Hooks，可以让逻辑在特定时刻自动触发：
SessionStart：
启动时自动加载特定的上下文环境。
PermissionRequest：
将权限请求直接推送到WhatsApp，点击即可审批。
5. 远程「指挥官」：Cowork Dispatch
当你不在电脑前，又想处理Slack消息、管理文件或运行MCP插件时，可以使用Dispatch。
它相当于Claude Desktop的安全远程控制器，可以代劳所有非编程类的琐事。
6.
前端
开发的「眼睛」：Chrome扩展
这是Boris给出的最重要建议：给Claude一个浏览器。通过Chrome扩展，Claude可以实时看到自己的输出并不断迭代。
没有浏览器的Claude就像盲人摸象，有了它，前端代码的还原度会直线上升。
7. 自动启动并测试服务器
Claude Desktop App已经内置了自动运行Web服务器，并在内置浏览器中测试的能力。
这种集成体验比在CLI中手动操作要高效得多。
8. 随时随地「分身」：Fork会话
想尝试一个大胆的重构思路，又怕搞坏当前的进度？
输入
/branch
即可创建一个分支对话。如果在CLI中，使用
claude --resume <session-id> --fork-session
也能实现同样的效果。
9. 边干活边闲聊：/
btw
Claude正在埋头写长代码，突然想插话问个别的话题？
使用
/btw
。它允许你在不干扰主任务进程的情况下，插入一个侧边小查询。
10. 大规模并行：Git Worktrees
Boris的电脑里通常同时跑着几十个Claude，秘诀在于
claude -w
。
它支持Git工作树（Worktrees），让你在同一个仓库里并行开展多项任务而互不干扰。
11. 改变世界的「扇出」模式：/batch
当需要进行大规模代码迁移时，
/batch
会先通过访谈了解你的意图，然后自动分发出成百上千个工作树代理，同时开工。
12. 启动速度飙升10倍：--bare模式
默认情况下，Claude启动时会扫描各种配置文件。
但在非交互场景下，使用
--bare
参数可以跳过这些扫描，让SDK启动速度提升10倍。
13. 打破
仓库
边界：--add-dir
需要跨仓库协作？只需在启动时加上
--add-dir
，Claude就能获得另一个文件夹的访问与操作权限。
14. 定制化分身：--agent
你可以定义专属Agent，比如，创建一个「只读Agent」或「安全审计专用Agent」。
在
.claude/agents/
下定义后，通过
claude --agent=xxx
即可召唤。
15. 动口不动手：/voice
Boris分享了一个惊人的事实：他大部分代码是「说」出来的。
在CLI中运行
/voice
并长按空格键，或者在桌面端点一下语音按钮，剩下的交给Claude即可。
掌握这些秘籍，Claude Code将从一个助手，进化为一个24小时待命的工程团队。
参考资料：
https://x.com/claudeai/status/2038663014098899416?s=20
https://x.com/felixrieseberg/status/2038669701195378879?s=20
https://github.com/shanraisshan/claude-code-best-practice/blob/main/tips/claude-boris-15-tips-30-mar-26.md
https://www.reddit.com/r/ClaudeAI/comments/1s7mkn3/psa_claude_code_has_two_cache_bugs_that_can/
https://x.com/altryne/status/2038676458026189225?s=20
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！