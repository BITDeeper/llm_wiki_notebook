---
title: "Karpathy强推，大厂抢着「复古」命令行，Star数全都上千了"
date: 2026-04-06
source: "机器之心"
url: "https://mp.weixin.qq.com/s/hr_CjsCMACm-eqXL9AccGw"
rss_id: "2651025994_2"
---
编辑｜泽南
最近，飞书、钉钉、企业微信接连推出 CLI，智能体生态战役再次打响。
飞书：https://github.com/larksuite/cli
钉钉：https://github.com/DingTalk-Real-AI/dingtalk-workspace-cli
企业微信：https://github.com/WecomTeam/wecom-cli
头部三家推出相隔不到三天，GitHub 的 Star 数都已经上千，这热度是真没得说。
CLI 即命令行界面（Command Line Interface），是一种「传统」得不能再传统的人机交互方式。与我们现在每天使用的、依靠鼠标点击和视觉反馈的 GUI（图形用户界面）相比，CLI 完全依靠纯文本指令来操控计算机或软件。
它的用法自然也十分简单，举个直观的例子：在图形界面上，你需要打开浏览器，登录企微后台，点击通讯录，找到对应部门，然后导出员工名单。
用 CLI 操作的话，你只需要在终端（Terminal）输入一行纯文本代码，比如 wecom-cli contact get_userlist，系统就会直接返回你需要的数据。
剥离所有视觉包装之后，用命令行的方式可以直达系统底层逻辑，对人类来说很枯燥，但对智能体（Agent）反而友好。正如知名 AI 学者 Andrej Karpathy 所说，CLI 的「复古」正是它在 AI 时代焕发新生的原因。在智能体快速发展的当下，CLI 完美契合了大语言模型（LLM）的运作逻辑。
这其中分为几个方面：
纯文本是大模型的「母语」
，让智能体去理解复杂的图形界面、定位按钮（GUI）或者通过计算机视觉去点击屏幕，既缓慢又极易出现幻觉。相反，大模型最强大的能力就是阅读与生成文本。对于智能体来说，敲打一行准确的 CLI 命令，比让它去识别屏幕上的「导出」按钮要自然、精准好几倍。
CLI 也可以跨越 API 接入鸿沟。
如果你想让 Claude 或 Cursor 帮你操作企业办公软件，AI 需要先阅读几百页的 API 文档，还要处理复杂的身份鉴权、Token 刷新、加密解密和网络请求。而官方封装好的 CLI 把这些脏活累活全解决了。AI 不需要懂底层接口怎么写，只需直接调用现成的命令行，就能立刻调动系统能力。
CLI 具备模块化管道
：在终端环境中，各个 CLI 工具可以像积木一样无缝串联，这就是 Karpathy 强调的「作为更大管道的模块」。
与 AI 的「标准接口」MCP (Model Context Protocol) 的趋势相比，CLI 可谓殊途同归。现在利用 MCP 让 AI 能够统一读取各种数据源，CLI 执行标准动作，我们或许可以获得稳定且完整的工作闭环。
除了国内科技公司的 CLI，国外科技公司及开源项目均推出了各具独特优势的 CLI 智能体工具。
其中最知名的自然是 Claude Code，这款由 Anthropic 推出的智能体以强大的推理能力和超大的上下文窗口而闻名；谷歌推出的 Gemini CLI 则以其极高的运行速度、多模态处理能力以及供日常使用的免费层级而受到关注；OpenAI 提出的 Codex CLI 不仅能与自家的 GPT 模型实现原生集成，还提供了简洁直观的用户体验。
随着国内大厂的跟进，CLI 正在激起一场新的生态抢位战。如果企业级软件的下一代交互入口将不再是应用本身，而是无处不在的智能体，那么 AI 执行层的标准，就需要由通过开源的 CLI 来定义，这样才能把海量的 AI 自动化工作流绑定在自己的生态之内。
总之，如果你提出的 AI 工具不能被 Agent 原生、轻松地使用，你就会在未来的 AI 工作流中被淘汰。
如何为你的 Agent 打造完美的 CLI？
趋势已经明朗，但把 CLI 交给 AI 用，和交给人用是两套逻辑。正如开发者 Eric Zakariasson 所总结的，如果你正在为智能体构建 CLI，以下几条「反直觉」的设计模式能帮你省下大量调试时间：
大多数 CLI 的设计都假定键盘是由人操作的，你会发现智能体经常卡在无法回答的交互式提示上，或者解析没有示例的帮助页面。
因此，
你需要使其非交互
：如果命令行界面（CLI）在执行过程中突然弹出提示符，智能体就会卡住。它无法在正确的时间按下方向键或输入「y」。所有输入都应该可以作为标志传递。交互模式应作为标志缺失时的备用方案，而不是主要路径。
#
this blocks an agent
$
mycli deploy
? Which environment? (use arrow keys)
#
this works
$
mycli deploy --
env
staging
不要一开始就把所有文档都放上去。
智能体运行 mycli，识别子命令，选择一个，然后运行 mycli deploy --help，获取所需信息。不会浪费上下文信息在它不会使用的命令上。让它在运行过程中自行发现所需内容。
让 --help 真正发挥作用。
每个子命令都应该有 `--help` 选项，并且每个 `--help` 选项都应该包含示例。示例已经完成了大部分工作。代理程序匹配 `mycli deploy --env staging --tag v1.2.3` 的模式比读取描述信息要快得多。
$ mycli deploy
--help
Options:
--env Target environment (staging, production)
--tag Image tag (default: latest)
--force Skip confirmation
Examples:
mycli deploy
--env staging
mycli deploy
--env production --tag v1.2.3
mycli deploy
--env staging --force
接受所有参数的标志和标准输入。
智能体以管道方式思考，它们希望将命令串联起来，并在工具之间传递输出。不要要求以奇怪的顺序提供位置参数，也不要因为缺少值而回退到交互式提示。
cat config.
json
| mycli config
import
--stdin
mycli deploy --env staging --tag $(mycli build --output tag-only)
快速失败并提供可操作的错误信息。
如果缺少必需的标志，不要挂起程序。立即报错并显示正确的调用。只要提供一些信息，代理程序就能很好地进行自我纠正。
Error:
No
image tag specified.
mycli deploy
--env staging --tag <image-tag>
Available tags: mycli build list
--output tags
使命令幂等。
代理会不断重试。网络超时、任务执行过程中上下文丢失。重复执行相同的部署操作应该返回「已部署，无操作」，而不是创建重复项。
添加 --dry-run 参数以执行破坏性操作。
代理程序应该能够在提交部署或删除操作之前预览其效果。让它们验证计划，然后再实际运行。
$ mycli deploy
--env production --tag v1.2.3 --dry-run
Would deploy v1
.2.3
to
production
-
Stop
3
running
instances
-
Pull image registry.io
/
app:v1
.2.3
-
Start
3
new
instances
No
changes made.
$ mycli deploy
--env production --tag v1.2.3
✓ Deployed v1
.2.3
to
production
--yes 或 --force 参数用于跳过确认。
人类会看到「你确定吗？」的提示，而智能体可以通过传递 `--yes` 参数来绕过此提示。将安全路径设为默认路径，但允许绕过此路径。
可预测的命令结构。
如果智能体学习了 `mycli service list` 命令，它应该能够推测出 `mycli deploy list` 和 `mycli config list` 命令。选择一个模式（资源 + 动词）并到处使用它。
成功后返回数据。
显示部署 ID 和 URL。表情符号很好看，但并非必需。
deployed
v1.
2
.
3
to staging
url
: https://staging.myapp.com
deploy_id
: dep_abc123
duration
:
34
s
如果你正在构建供代理使用的命令行界面 (CLI)，这些模式可以节省大量调试时间。大部分工作只是将人类隐式推断出的东西明确地表达出来。
把人类隐式推断的逻辑，变成明确的机器指令 ——CLI 的复兴，可以帮我们把数字世界的控制权，以一种可靠的方式移交给 AI。
参考内容：
https://x.com/ericzakariasson/status/2036762680401223946
https://x.com/karpathy/status/2026360908398862478
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com