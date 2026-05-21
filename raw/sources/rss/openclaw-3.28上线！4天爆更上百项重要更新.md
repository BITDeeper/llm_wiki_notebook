---
title: "OpenClaw 3.28上线！4天爆更上百项重要更新"
date: 2026-03-29
source: "新智元"
url: "https://mp.weixin.qq.com/s/AgUMaDXJeP3qc9MeSQgb9w"
rss_id: "2652687414_1"
---
新智元报道
编辑：艾伦
【新智元导读】
OpenClaw 3.28 大更新：不仅内置 Grok 搜索、支持 MiniMax 画图，更上线了最保命的「高危操作弹窗拦截」功能。
前两天，大家都见识到了 OpenClaw 之父 Peter 的极限「草台」操作。
漏打包 UI 资源文件，直接导致海量小龙虾在 3.22 版本集体白屏。
拓展阅读：
OpenClaw 3.23紧急修复！Peter忘记打包控制台文件，海量龙虾崩溃
当时很多朋友连控制台都进不去，还以为自己辛辛苦苦养的虾死透了。
虽然后来 3.23 紧急上了修补丁，还顺手给发布流程加了自动拦截的保险，但这事儿弄得大家心里一阵发毛。
因为现在的 Agent，权限实在太大了——一点点代码上的疏漏，都可能是一场灾难。
今天，OpenClaw 直接推送了最新的 3.28 版本。
这次更新的内容也是格外丰富，简直是底层能力的全面大解放。
简单挑几个跟日常体验关系最大的。
Qwen 模型正式迁移到了 Model Studio，直接走新的认证选项，干净利落。
xAI 被提到了第一梯队，原生的 Grok 网页搜索和工具配置直接内置了，不用再像以前那样手动来回折腾开关。
画图党也有福了，MiniMax 加了进来，完美支持 image-01 模型的图像生成和长宽比编辑。
最夸张的，是插件系统加入了一个叫
requireApproval
的异步拦截功能。
你的小龙虾在执行那些高危操作前，终于可以暂停下来，通过 Telegram、Discord 或者命令行直接弹个框，问你一句：「老板，这活儿能干吗？」
现在的 Agent 能画图、能搜网、能随意切模型，甚至能把当前的聊天频道直接变成专属的工作区。
但，能力越强，水越深。
要是这些逆天的能力和底层权限，交到一个来路不明的恶意 Skills 手里，画面简直不敢看。
这也是为什么前一阵国家互联网应急中心专门发文提示风险。
千万别觉得离自己很远。
官方商店 ClawHub 里，曾经出现过同一个人上传了 300 多个伪装极好的恶意 Skills。
全都是披着金融分析、自动更新的外衣，干着偷偷下载不明文件的勾当。
更别提外面那些长得跟官方一模一样的钓鱼镜像站，简直防不胜防。
无论你的小龙虾有多聪明，一定要给它装上 OpenClaw 官方的
Skill Vetter
。
https://clawhub.ai/spclaudehome/skill-vetter
不管 3.28 更新了多酷炫的插件钩子和模型代理，安全检查永远是第一位的。
这东西就像一个极其严苛的 HR。
哪怕你想装一个仅仅是用来查天气的简单 Skills，它也会把底层代码翻个底朝天。
看看它有没有偷偷往外传数据，有没有试图去读你的私钥配置，甚至有没有去偷窥你的
MEMORY.md
记忆文件。
只要碰到红线，直接毙掉。
就算意图正当但索要的权限过大，它也会给你亮起红灯，把最终的安装决定权交回到你手里。
现在，面对 3.28 版本带来的一大波新生态和新玩法，我们终于可以稍微放心地去折腾了。
大家可以去拥抱新的模型，去试新的图像编辑，去体验丝滑的异步拦截机制。
只是，千万别忘了给自家的赛博秘书穿好防弹衣。
附录：完整更新日志
重大变更
提供商/通义千问：
移除已废弃的 qwen-portal-auth OAuth 集成（用于 portal.qwen.ai），迁移至 Model Studio，可通过
openclaw onboard --auth-choice modelstudio-api-key
完成接入。
配置/Doctor：
取消两个月以前的配置自动迁移；极旧的遗留配置键现在将直接触发验证失败，而非在加载时或执行
openclaw doctor
时被自动重写。
变更
xAI/工具：
将内置 xAI 提供商迁移至 Responses API，新增一级支持的
x_search
工具，并根据已拥有的网页搜索及工具配置自动启用 xAI 插件，使内置 Grok 的授权与搜索流程无需手动切换插件即可正常运行。
xAI/引导流程：
内置 Grok 网页搜索插件现可在
openclaw onboard
及
openclaw configure --section web
期间提供可选的
x_search
配置，包含使用共享 xAI 密钥的
x_search
模型选择器。
MiniMax：
新增 image-01 模型的图像生成提供商，支持图像生成与图生图编辑，并可控制宽高比。
插件/钩子：
在
before_tool_call
钩子中新增异步
requireApproval
，允许插件暂停工具执行并通过执行审批叠加层、Telegram 按钮、Discord 交互或任意频道上的
/approve
命令向用户请求确认。
/approve
命令现已统一处理执行审批与插件审批，并支持自动降级。
ACP/频道：
为 Discord、BlueBubbles 和 iMessage 新增当前会话 ACP 绑定，使
/acp spawn codex --bind here
能将当前聊天转化为 Codex 支撑的工作区，无需另开子线程；同时在文档中明确区分聊天界面、ACP 会话与运行时工作区三者的概念。
OpenAI/apply_patch：
为 OpenAI 及 OpenAI Codex 模型默认启用
apply_patch
，并将其沙箱策略访问权限与写入权限对齐。
插件/
CLI
后端：
将内置的 Claude CLI、Codex CLI 和 Gemini CLI 推理默认配置迁移至插件层，新增内置 Gemini CLI 后端支持，并将
gateway run --claude-cli-logs
替换为通用的
--cli-backend-logs
，同时保留旧参数作为兼容别名。
插件/启动：
从显式配置引用中自动加载内置提供商与 CLI 后端插件，使内置 Claude CLI、Codex CLI 和 Gemini CLI 消息提供商的配置无需在
plugins.allow
中手动添加条目。
Podman：
简化当前无根用户的容器配置，将启动辅助工具安装至
~/.local/bin
，并在文档中以宿主机 CLI
openclaw --container <name> ...
工作流替代专用
openclaw
服务用户的方案。
Slack/工具动作：
新增显式的文件上传 Slack 动作，通过现有 Slack 上传通道路由文件上传，支持对频道和私信设置可选的文件名、标题与注释。
消息动作/文件：
开始将文件优先发送统一至标准的
upload-file
动作：新增对 Microsoft Teams 和 Google Chat 的显式支持，并通过
upload-file
暴露 BlueBubbles 文件发送能力，同时保留遗留的
sendAttachment
别名。
插件/Matrix
TTS
：
将自动 TTS 回复以原生 Matrix 语音气泡形式发送，而非通用音频附件。
CLI
：
新增
openclaw config schema
命令，用于打印
openclaw.json
的 JSON Schema。
配置/
TTS
：
在常规读取和密钥解析时自动迁移遗留语音配置，保留遗留诊断信息供 Doctor 使用，并移除旧内置
tts.<provider>
API 密钥格式在常规模式下的运行时降级逻辑。
内存/插件：
将压缩前的内存刷新计划移交至活跃内存插件合约，由 memory-core 统一负责刷新提示与目标路径策略，不再由核心逻辑硬编码处理。
MiniMax：
精简模型目录，仅保留 M2.7，移除遗留的 M2、M2.1、M2.5 和 VL-01 模型。
插件/运行时：
在插件运行时系统命名空间中暴露
runHeartbeatOnce
，允许插件以显式的投递目标覆盖参数（如
heartbeat: { target: "last" }
）触发单次心跳周期。
Agent/压缩：
在即时回复与排队后续请求中，均保留陈旧用量预检压缩后的 AGENTS 刷新操作。
Agent/压缩：
暴露安全防护专属的取消原因，并将良性的手动
/compact
空操作情况从「失败」重新标记为「已跳过」。
文档：
新增
pnpm docs:check-links:anchors
用于 Mintlify 锚点验证，同时保留
scripts/docs-link-audit.mjs
作为稳定的链接审计入口。
Tavily：
在出站 API 请求中添加
X-Client-Source: openclaw
标头，使 Tavily 可识别来自 OpenClaw 的流量来源。
修复
Agent/Anthropic：
将未处理的提供商停止原因（如
sensitive
）转换为结构化的 Assistant 错误，而非导致 Agent 运行崩溃。
Google/模型：
通过传递实际运行时提供商 ID 并增加模板提供商降级逻辑，修复所有 Google 提供商别名下 Gemini 3.1 pro、flash 和 flash-lite 的解析问题；修正 flash-lite 前缀排序。
OpenAI Codex/图像工具：
为 Codex 注册媒体理解能力，并通过 Codex instructions 路由图像提示，解决因缺少提供商注册或缺少 instructions 导致图像分析失败的问题。
Agent/图像工具：
在未注册提供商专属媒体理解提供商时，恢复通用图像运行时降级逻辑，使 openrouter、minimax-portal 等提供商的图像分析功能重新可用。
WhatsApp：
修复自聊天私信模式下的无限回声循环，该问题会将机器人自身发出的回复再次作为新的用户入站消息处理。
Telegram/消息分割：
以经过验证的 HTML 长度搜索替代按比例估算的文本长度方案，使长消息在单词边界处分割而非从单词中间截断；当标签开销超出限制时优雅降级。
Telegram/投递：
在 Bot 投递时跳过纯空白和被钩子清空的文本回复，防止因发送空文本触发 GrammyError 400 崩溃。
Telegram/发送：
在全部四个 API 端点使用共享规范化器验证
replyToMessageId
，拒绝非数字、NaN 及混合内容字符串。
Mistral：
规范化 OpenAI 兼容请求标志，解决官方 Mistral API 持续返回 422 状态码（无响应体）聊天错误的问题。
控制界面/配置：
默认隐藏敏感原始配置，将空白被屏蔽的编辑器替换为显式的「解锁以编辑」状态，并在不自动暴露密钥的前提下恢复原始 JSON 编辑功能。
CLI
/zsh：
将
compdef
注册推迟至
compinit
可用后执行，使 zsh 补全在插件管理器和手动配置场景下均可正常加载。
BlueBubbles/防抖：
通过在入队边界处清理消息文本，并增加独立的合并器防护，防止防抖刷新处理空消息文本时崩溃。
自动回复：
在频道投递前使用严格的单键检测器过滤 JSON 包装的
{"action":"NO_REPLY"}
控制信封；当文本仅为静默信封时仍保留媒体内容。
ACP/ACPX Agent 注册表：
将 OpenClaw 的 ACPX 内置 Agent 镜像与最新的
openclaw/acpx
命令默认值及内置别名对齐，将版本化的 npx 内置项固定到精确版本，并阻止未知 ACP Agent ID 在 MCP 代理路径上降级为原始
--agent
命令执行。
安全/审计：
扩展网页搜索密钥审计范围，通过边界安全的内置网页搜索注册表 shim 识别 Gemini、Grok/xAI、Kimi、Moonshot 和 OpenRouter 凭证。
文档/FAQ：
移除英文和 zh-CN FAQ 条目中已失效的 Xfinity SSL 故障排除交叉链接——这两个章节均已包含完整的解决方案内容。
Telegram：
恢复在论坛主题会话中投递详细工具摘要的功能，使有线程的主题聊天与私信的详细模式行为保持一致。
BlueBubbles/
CLI
Agent：
恢复 CLI 路由轮次的入站提示图像引用，重新应用嵌入式运行器图像大小限制，并为两条 CLI 图像传输路径添加回归测试。
BlueBubbles/群组：
在群组门控通过后，可选择性地使用本地 macOS 通讯录名称丰富未命名参与者列表，使群组成员上下文可显示姓名而非仅展示原始电话号码。
Discord/重连：
清理陈旧的网关套接字，在强制全新重连前清除缓存的恢复状态，并在旧套接字无法关闭时主动失败，防止 Discord 恢复流程因中毒的恢复状态而陷入循环。
iMessage：
通过将
reply_to
以 RPC 元数据形式发送并从出站消息中剥离多余的指令标签，阻止内联
[[reply_to:...]]
标签泄露到已投递文本中。
CLI
/插件：
使路由命令与网关启动时使用相同的自动启用内置频道快照，确保 Slack 等已配置的内置频道无需事先重写配置即可正常加载。
CLI
/消息发送：
通过始终将默认 CLI Agent 接入出站镜像，将手动执行的
openclaw message send
投递内容重新写入已解析 Agent 会话的对话记录。
CLI
/引导流程：
在 Moonshot 配置菜单中重新显示 Kimi Code API 密钥选项，使交互式选择器将所有 Kimi 配置路径集中展示。
Agent/状态：
为最新的 Anthropic 4.6 模型覆盖使用感知提供商的上下文窗口查询，使
/status
显示正确的 100 万 token 窗口，而非被低报的共享缓存最小值。
OpenAI/WebSocket：
在 WebSocket 工具轮次中保留推理回放元数据和工具调用条目 ID，并在需要完整上下文重发时启动全新的响应链。
OpenAI/WS：
为 Responses WebSocket 运行恢复推理块，并保持推理/工具调用回放元数据完整，防止恢复的会话在后续支持推理的轮次中丢失或出错。
Agent/错误：
在可用时展示提供商配额与重置详情，同时将 HTML/Cloudflare 限流页面保留在通用降级逻辑中，避免将原始错误页面直接呈现给用户。
Claude
CLI
：
将内置 Claude CLI 后端切换为流式 JSON 输出，使看门狗可在长时间运行时感知进度，并在 Claude 以空结果行结束时仍保留会话与用量元数据。
Claude
CLI
/MCP：
为后台 Claude CLI 运行（包括空服务器场景）始终传递严格生成的
--mcp-config
覆盖层，防止 Claude 继承用户或全局环境中的 MCP 服务器配置。
Agent/嵌入式回复：
在嵌入式运行无用户可见回复时暴露中途发生的 429 和过载错误，同时保留仍使用遗留
mediaUrl
的成功纯媒体回复。
聊天/界面：
将聊天发送按钮迁移至共享的幽灵按钮主题样式，同时保持停止按钮图标在危险状态下清晰可辨。
WhatsApp/allowFrom：
对有效但被拦截的目标显示专属的
allowFrom
策略错误，替代具有误导性的
<E.164|group JID>
格式提示。
Agent/冷却：
按模型划分限流冷却范围，防止单个 429 错误阻塞同一授权配置下的所有模型；将指数级 1 分钟→1 小时升级策略替换为 30 秒/1 分钟/5 分钟的阶梯式策略，并在所有模型均受限时向用户展示倒计时信息。
Agent/嵌入式传输错误：
在嵌入式运行的用户消息与生命周期诊断中，区分「连接被拒绝」「DNS 查询失败」「连接中断」等常见网络故障与真正的超时错误。
Telegram/配对：
忽略机器人自身发送的私信消息更新，防止置顶状态卡片等服务更新触发虚假配对请求或重新进入入站分发流程。
Mattermost/回复：
在所有出站回复分支中，将配对回复、斜杠命令降级回复和模型选择器消息保持在已解析的配置路径上，确保
exec: SecretRef
Bot Token 正常工作。
Microsoft Teams/配置：
在严格配置验证中接受已有的
welcomeCard
、
groupWelcomeCard
、
promptStarters
以及反馈/反思相关键，使已支持的 Teams 运行时设置不再触发 Schema 校验失败。
MCP/频道：
新增由网关支撑的频道 MCP 桥接，提供面向 Codex/Claude 的会话工具、Claude 频道通知，以及更安全的 stdio 桥接生命周期处理（含重连与路由会话发现）。
插件/
SDK
：
在插件 SDK 别名解析中传递
moduleUrl
，使安装在 OpenClaw 目录外（如
~/.openclaw/extensions/
）的用户插件能正确解析
openclaw/plugin-sdk/*
子路径导入，并在
release:check
中加入
plugin-sdk:check-exports
门控。
配置/网页抓取：
在运行时 Schema 验证中允许已有文档记载的
tools.web.fetch.maxResponseBytes
配置项，防止有效配置因「未识别的键」而报错。
消息工具/按钮：
在合并的工具定义中将共享按钮 Schema 设为可选，使纯
action=send
调用在未提供按钮时不再触发验证失败。
Agent/OpenAI 兼容工具调用：
对活跃 Assistant 消息和回放历史中重复出现的工具调用 ID 进行去重，防止 OpenAI 兼容后端因重复
tool_call_id
值返回 HTTP 400 错误。
模型/OpenAI 补全：
默认为非原生 OpenAI 兼容提供商省略工具定义的
strict
字段，除非用户显式重新启用，确保工具调用在拒绝该选项的提供商上继续正常工作。
插件/上下文引擎：
在旧引擎拒绝新
prompt
字段时，自动去除该字段后重试严格遗留的
assemble()
调用，保持对 pre-prompt 插件的兼容性。
CLI
/更新状态：
当本地版本与 npm 最新版本一致时，明确显示「已是最新版本」，同时保持可用性判断逻辑不变。
守护进程/Linux：
停止将仅因 unit 文件中提到 OpenClaw 的非网关 systemd 服务误判为重复网关，减少 Doctor 和日志中的误报噪音。
飞书
：
在监控器停止/中止时关闭 WebSocket 连接，防止幽灵连接持续存在，避免跨重启周期的重复事件处理和资源泄漏。
飞书
：
对入站消息使用原始的
message create_time
而非
Date.now()
作为时间戳，使离线重试消息携带正确的创作时间，防止对陈旧指令采取错误的 Agent 动作。
控制界面/技能：
通过浏览器模态生命周期打开技能详情对话框，使点击技能行时面板居中显示，而非渲染到页面底部屏幕外。
Matrix/回复：
在入站回复上下文中包含被引用的投票问题与选项，使 Agent 在用户回复 Matrix 投票消息时能看到原始投票内容。
Matrix/插件：
防止插件引导在构建运行时混合裸路径和深路径 matrix-js-sdk 入口时崩溃，避免不相关的频道在插件加载期间被连带中断。
Agent/沙箱：
遵守
tools.sandbox.tools.alsoAllow
配置，允许显式的沙箱再授权移除匹配的内置默认拒绝工具，并保持沙箱说明与错误引导和实际生效的沙箱工具策略一致。
Agent/沙箱：
使被拦截工具的引导信息重新支持 glob 匹配，对沙箱说明提示中的会话专属内容进行脱敏处理以便安全复制，并避免在提示中泄露控制字符会话密钥。
Agent/压缩：
在重试高上下文 LLM 超时前触发超时恢复压缩，防止嵌入式运行反复重发超大请求。
Agent/压缩：
在延迟的嵌入式自动压缩成功后同步
sessions.json.compactionCount
，使持久化的会话计数在处理器报告完成后能及时追上。
Agent/故障转移：
将 Codex
accountId
Token 提取失败分类为授权错误，确保模型降级能继续至下一个配置候选项。
插件/运行时：
跨工具、提供商、网页搜索和频道引导只复用兼容的活跃插件注册表，将
/tools/invoke
插件加载与会话工作区对齐，并在固定频道界面发生变化时重试出站频道恢复，防止插件工具和频道因运行时加载不匹配而消失或重复注册。
语音/macOS：
修复系统语音直接失败后重复触发系统语音的问题，使用 App 语言区域降级处理共享看门狗计时，并为 macOS 降级路由和语言感知超时策略添加回归测试。
Discord/网关清理：
在启动/销毁清理阶段持续抑制 Carbon 迟到的「重连耗尽」错误，防止 Discord 监控器关机时因迟到的网关关闭事件崩溃。
Discord/网关关闭：
在有意的生命周期停止过程中，将预期的「重连耗尽」事件视为正常关机，防止启动中止清理逻辑将其误报为网关故障。
Discord/网关关闭：
抑制在拆卸翻转
lifecycleStopping
之前已缓冲的「重连耗尽」事件，防止陈旧套接字 Discord 重启导致整个网关崩溃。
GitHub Copilot/认证刷新：
将较大的
expires_at
值视为秒级 epoch 时间戳并限制运行时认证刷新计时器的上限，防止 Copilot Token 刷新因
setTimeout
溢出陷入热循环。
Agent/状态：
当不存在显式覆盖时，在
session_status
中使用持久化的运行时会话模型，并在
session_status
和
/status
中均遵守每 Agent 的
thinkingDefault
设置。
心跳/运行器：
确保在心跳运行完成及意外运行器错误后重新设置间隔计时器，防止定时心跳在中断的周期后静默停止。
配置/Doctor：
将陈旧的内置插件加载路径从遗留的
extensions/*
位置重写至已打包的内置路径，包括目录名称不匹配和带尾部斜杠的配置条目。
WhatsApp/提及：
停止将被引用消息中嵌入的提及视为直接提及，防止回复带有 @机器人 的消息时误触提及门控。
Matrix：
在
m.direct
种子成功后，将独立的双人房间排除在私信路由之外，同时仍遵守显式的
is_direct
状态和启动降级恢复逻辑。
Agent/Ollama 降级：
在 Ollama 非 2xx HTTP 错误信息中加入状态码前缀，使 HTTP 503 响应重新触发模型降级。
飞书/工具：
在工具执行时，停止将
agent-spawner
等合成 Agent ID 视为飞书账户 ID，确保工具降级使用已配置的默认飞书账户，而非将合成 ID 当作真实的已启用账户。
Google/工具：
从 Gemini 工具 Schema 中剥除空的
required: []
数组，防止仅含可选参数的工具触发 Google 验证器 400 错误。
引导流程/TUI/本地网关：
在配置输出中显示已解析的网关端口，明确无守护进程时本地健康检查与控制面板的提示信息，并在重复运行和显式本地网关 URL 场景下保留回环控制界面认证，使本地快速启动流程能正常恢复。
TUI/聊天记录：
将系统消息保留为单一逻辑条目，并在完整消息边界处裁剪溢出，保持包装后的系统消息间距整洁。
TUI/激活：
在 TUI 中对
/activation
参数进行验证，拒绝无效值而非静默强制转换为
mention
。
Agent/模型切换：
在下一个安全重试边界将
/model
更改应用于活跃的嵌入式运行，确保过载或重试中的轮次切换至新选择的模型，而非继续锁定旧提供商。
Agent/Codex 降级：
将 Codex
server_error
载荷分类为可降级错误，在到达聊天界面前对 Codex 错误载荷进行清理，为带前缀的
invalid_request_error
载荷保留上下文溢出引导，并从用户界面文案中省略提供商的
request_id
值。
内存/搜索：
跨拆分插件运行时共享内存嵌入提供商注册，防止
memory-core
注册内置适配器后内存搜索因「未知提供商」错误而失败。
Discord/Carbon beta：
将
@buape/carbon
更新至最新 beta 版本，并传递新的
RateLimitError
请求参数，确保 Discord 与上游 beta 版构造函数变更保持兼容。
插件/入站声明：
通过入站声明钩子元数据传递完整的入站附件数组，同时保留遗留的单一媒体附件字段以保持向后兼容。
插件/Matrix：
在入站媒体处理中保留发送方文件名，将
originalFilename
转发至
saveMediaBuffer
。
Matrix/提及：
识别可见标签使用机器人房间显示名称的
matrix.to
提及，确保
requireMention: true
的房间在现代 Matrix 客户端中正确响应。
Ollama/关闭思考：
将
thinkingLevel=off
通过实时 Ollama 扩展请求路径路由，使支持思考的 Ollama 模型能收到顶层
think: false
参数，而非静默生成隐藏的推理 Token。
插件/差异：
在打包更新时暂存内置
@pierre/diffs
运行时依赖项，确保内置差异查看器在全局安装和更新后仍可正常加载。
插件/差异：
不使用 JSON 模块导入方式加载内置 Pierre 主题，使差异渲染在更新版本的 Node.js 构建上保持正常工作。
插件/卸载：
在卸载频道插件时移除对应的
channels.<id>
配置，并保持卸载预览与显式频道所有权一致，确保内置频道和共享密钥不受影响。
插件/Matrix：
在选择出站私信房间和路由未映射的验证摘要时，优先使用显式私信信号，防止严格的双人降级房间优先于真正的私信房间。
插件/Matrix：
在启动时将 env 支撑的
accessToken
和
password
SecretRef
解析至活跃 Matrix 配置的 env 路径，并正式接受
SecretRef
类型的
accessToken
配置值。
Microsoft Teams/主动私信：
当存储了同一用户的多个会话引用时，对
user:<aadObjectId>
发送优先使用最新的个人会话引用，防止回复被投递至陈旧的私信线程。
网关/插件：
在构建 HTTP
/tools/invoke
工具列表时复用会话工作区，并强化工具构建逻辑以默认推断会话 Agent 工作区，防止工作区插件在重复 HTTP 工具调用时重复注册。
Brave/网页搜索：
在请求和缓存键生成前将不支持的 Brave 国家过滤器规范化为
ALL
，防止
VN
等从语言区域派生的值触发上游 422 验证错误。
Discord/回复：
在剥除内联回复标签时保留前导缩进，确保带回复标签的纯文本和代码块保持原有格式。
守护进程/状态：
从轻量级探测中暴露即时的网关关闭原因，并在
openclaw daemon status
中优先显示这些具体的授权或配对失败信息，而非通用超时提示。
Agent/故障转移：
默认将 HTTP 410 错误分类为可重试的超时错误，同时仍保留载荷中的显式会话过期、计费和授权信号。
Agent/子 Agent：
恢复 BlueBubbles 等扩展频道的完成通知投递。
插件/Matrix：
通过
createRequire(...)
加载内置的
@matrix-org/matrix-sdk-crypto-nodejs
，确保 E2EE 媒体发送与接收在打包的 ESM 构建中保持本地原生绑定查找正常工作。
插件/Matrix：
对 E2EE 图像缩略图使用
thumbnail_file
加密，对非加密房间的预览保留
thumbnail_url
，确保加密 Matrix 图像事件保留缩略图元数据，同时不泄露明文预览。
Telegram/论坛主题：
通过在论坛线程命令上下文中保留主题目标，使原生的
/new
和
/reset
命令始终路由至当前活跃主题。
上下滑动查看更多
参考资料：
https://github.com/openclaw/openclaw/releases/tag/v2026.3.28
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！