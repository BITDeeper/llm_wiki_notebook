---
title: "OpenClaw 3.23紧急修复！Peter忘记打包控制台文件，海量龙虾崩溃"
date: 2026-03-24
source: "新智元"
url: "https://mp.weixin.qq.com/s/okjlp1WvMSDbMjhtFq2CCg"
rss_id: "2652686244_1"
---
新智元报道
编辑：艾伦
【新智元导读】
OpenClaw 之父 Peter
Steinberger 昨天发布
OpenClaw 3.22 时漏打包了一个资源包，控制台直接白屏，六个插件集体失效，报错信息还指向错误方向。不到一天紧急推出了 3.23 修复，顺手给 CI 加上了「以后再遗漏自动拦截」的保险。
OpenClaw 之父 Peter Steinberger，在昨天发布 OpenClaw 3.22 版本时，漏掉了发布流程里的一个关键步骤：把 Web 控制台的 UI 资源打包进去。
结果这个版本一出，升级的用户打开小龙虾，发现控制台页面直接加载失败——那个你平时用来管理 AI、配置频道、查看运行状态的核心入口，不见了。
我们昨天介绍 OpenClaw 3.22 的文章发布后，大量读者也在评论区反馈了同样的问题。
刚刚，OpenClaw最猛升级！底层架构大换血，全网等了9天
Peter 本人在 X 上发帖承认了这件事，顺手宣布了紧急修复计划。
今天，OpenClaw 3.23 紧急正式推送。
这个 Bug 到底有多「草台」
说起来简单到离谱。
Web 控制台（ClawControl）的 UI 资源，是独立打包后附在 npm 发布产物里的。
发布流程里有一步是把这些静态资源一起打进去，Peter 昨晚发版时跳过了。
于是 npm 包里压根就没有控制台文件，用户装上去之后，浏览器一访问控制台地址，直接空白。
正常的控制台登录界面
官方 3.23 的修复日志里，有一条写着：确保已发布的 npm 包里包含之前版本携带的 bundled 插件和 Control UI 资源，并在发布检查时，若这些产物缺失则直接让流程报错。
这最后一句是重点——以后再漏，CI
（
Continuous Integration，持续集成，
指的是开发者频繁地将代码合并到主分支，每次合并后自动触发构建和测试，从而尽早发现问题
）
会自己拦住，不等上线。
而且这次 3.22 的问题不止控制台一个。
WhatsApp、ACPX 等六个插件也因为类似原因悄悄失效了：它们被移入了「可选 Bundled 插件」列表，但 npm 发布流程没有设置对应的环境变量，导致这些插件根本就没被打进发布包里。
用户升级之后，频道直接断了，而且报错信息还是一条让人摸不着头脑的「stale config entry」——不报插件缺失，报的是「配置项过时」，完全没法定位问题。
一个发版漏打包，导致了多处连锁失效，还配上了错误的报错信息。
你就说草台不草台吧🤦
3.23 修了什么
普通用户能感受到哪些
控制台的事只是开胃菜，3.23 这次的修复清单中，很多是影响日常使用的实际问题。
飞书带附件的消息发送走错了路径，文件和图片根本发不出去。
这次把它导回了正确的出站媒体路径，附件总算能正常发出去了。
浏览器控制这块改动不少。
Chrome MCP 模式修了一个体验很差的问题：之前 OpenClaw 附加到已有 Chrome 标签页时，会把握手完成的那一刻当「可用」，但其实页面还没真正就绪，导致用户配置文件频繁超时、macOS 上反复弹出确认框。
现在会等页面真正可用再继续。
另外，Headless Linux 环境里第二次启动浏览器总是失败的问题也修掉了——原本一旦短暂连不上就直接放弃重新检测，现在会先复用已有的浏览器实例。
ClawHub 登录状态的问题也整了一轮。
之前在 macOS 上浏览 Skills、运行
openclaw skills ...
命令时，会悄悄退回未登录状态；
现在会正确读取 macOS Application Support 里的本地登录 token，也兼容 XDG 路径，登录态不会再莫名丢失了。
还有两个问题影响面挺广。
OpenRouter 的 Auto 路由，之前在启动时会陷入无限递归刷新定价数据，导致计费信息根本填不进缓存，用量统计一片空白。
Mistral 那边则是默认的最大 token 数设得太大，和 Mistral 自己的上限冲突，导致必然触发 422 报错；
新版本把默认值调低了，还教会了
openclaw doctor --fix
自动修复旧配置。
Agent 层面，网络搜索的提供商选择修了一个老问题：之前 Agent 跑任务时，不管你在设置里选了什么搜索源，它都会用默认的，配置形同虚设。
现在它会正确读取运行时的实际配置。
安全这块也没落下。
Canvas 路由现在强制需要认证，Agent Session 的重置接口也加上了管理员权限校验，匿名请求和非管理员的重置请求都会被拒绝。
Peter 在推文里也说，他正在把整个发布流程自动化，并加上端到端测试。
这种草台班子的重大 Bug，或许会大幅减少。
附录：完整更新日志
修复
浏览器 / Chrome MCP
：
附加到已有会话的浏览器标签页后，等待其真正可用再标记就绪，而非将 Chrome MCP 的初始握手视为准备完成——此举减少了 macOS Chrome 附加流程中用户配置文件超时和反复弹出授权确认的问题。
浏览器 / CDP
：
在初次可达性检测短暂失败后复用已运行的回环浏览器，而非立即回退至重启检测——修复了在较慢的无头 Linux 环境中二次启动/打开浏览器的回归问题。
ClawHub / macOS 认证
：
正确读取 macOS 认证配置及 XDG 认证路径中保存的 ClawHub 凭据，使
openclaw skills ...
及网关技能浏览持续使用已登录的认证状态，而非静默回退至未认证模式。
ClawHub / macOS
：
从 macOS Application Support 路径读取本地 ClawHub 登录信息，同时在 macOS 上继续兼容 XDG 配置，使技能浏览在默认及 XDG 风格的配置下均能使用已登录的令牌。
ClawHub / Skills
：
为网关技能浏览正确解析本地 ClawHub 认证令牌，并将「浏览全部」请求切换为搜索模式，避免 ClawControl 陷入未认证状态的 429 错误及已认证后技能列表为空的问题。
插件 / 消息工具
：
将 Discord 组件和 Slack 消息块重新设为可选字段，并将飞书
message(..., media=...)
的发送请求路由至出站媒体路径——使置顶/取消置顶/表情回应等操作不再触发 Schema 校验失败，飞书文件/图片附件亦能正常发送。
网关 / 模型定价
：
修复了
openrouter/auto
定价刷新在启动阶段无限递归的问题，使 OpenRouter 自动路由能够再次正常填充缓存定价及
usage.cost
数据。
Mistral / 模型
：
将内置 Mistral 最大 token 默认值降至安全的输出预算范围，并使
openclaw doctor --fix
能够修复仍保留上下文长度级输出限制的旧版持久化 Mistral 提供商配置，避免全新及现有配置中出现确定性的 Mistral 422 拒绝错误。
Agent / web_search
：
使用当前运行时激活的
web_search
提供商，而非陈旧或默认的配置，确保 Agent 每轮调用均命中用户实际配置的提供商。
模型 / OpenAI Codex OAuth
：
在令牌续期执行前，于存储凭据的刷新路径上提前初始化环境变量所配置的 HTTP/HTTPS 代理调度器，使过期的 Codex OAuth 配置在需要代理的环境中能够成功刷新，而非在首次令牌过期后将用户锁定。
模型 / OpenAI Codex OAuth 及插件 / MiniMax OAuth
：
确保在 OAuth 预检及令牌交换请求发出前，环境变量所配置的 HTTP/HTTPS 代理调度器已完成初始化，使需要代理的环境能够再次正常完成 MiniMax 和 OpenAI Codex 的登录流程。
插件 / memory-lancedb
：
在首次使用时，若内置 npm 安装中尚未包含 LanceDB，则将其初始化至插件运行时状态——使
plugins.slots.memory="memory-lancedb"
在全局 npm 安装后无需将 LanceDB 纳入 OpenClaw 核心依赖即可正常运行。
配置 / 插件
：
将
plugins.allow
中过期的未知插件 ID 视为警告而非致命配置错误，使插件在本地缺失时，
plugins install
、
doctor --fix
和
status
等恢复命令仍能正常执行。
Doctor / WhatsApp
：
阻止自动启用功能将
whatsapp
等内置频道 ID 追加至
plugins.allow
，使
openclaw doctor --fix
在修复内置频道时不再写入 Schema 无效的插件白名单条目。
Telegram / 自动回复
：
在不遗留过期忙碌会话后续消息的前提下，保持同一会话入站防抖的处理顺序，并在防抖键饱和时维持同键溢出轮次的有序处理。
Telegram / 消息工具
：
为图片和 GIF 发送新增
asDocument
作为
forceDocument
的用户侧别名，同时在两者同时存在时保留
forceDocument
的显式优先级。
Discord / 命令
：
对于需要特权的原生斜杠命令，在鉴权拦截发送者时返回明确的「未授权」回复，而非落入 Discord 含糊的通用完成响应。
频道 / 目录
：
允许外部频道目录覆盖内置的回退元数据，并在频道安装时遵循覆盖后的 npm 包规格，使自定义频道目录在频道 ID 匹配时不再回退至内置包。
语音通话 / Plivo
：
稳定 Plivo v2 重放键，避免 Webhook 重试与重放保护机制在有效的后续消息投递中产生冲突。
Agent / 技能
：
在嵌入式技能配置及环境变量注入时，优先使用当前已解析的运行时快照，使
skills.entries.<skill>.apiKey
中的 SecretRef 在嵌入式启动阶段能够正确解析，而非在原始源配置上失败。
Agent / 子 Agent
：
在发送完成事件前，对照最新运行时快照重新检查已超时的工作进程等待状态，避免将实际已成功完成的快速工作进程误报为超时。
Agent / Anthropic
：
在对话记录图像清洗过程中，保留最新 assistant
thinking
及
redacted-thinking
块的原始顺序，使后续对话轮次不触发 Anthropic 的「思考内容未被修改」校验。
插件 / DeepSeek
：
将内置 DeepSeek 提供商重构至共享的单提供商插件入口，将其测试覆盖迁移至扩展测试通道，并在生成的清单路径上保留内置认证的环境变量元数据。
插件 / Matrix
：
避免在 Jiti 环境下重复导出
resolveMatrixAccountStringValues
运行时 API，使内置 Matrix 安装不再在启动时因
Cannot redefine property: resolveMatrixAccountStringValues
而崩溃。
安全 / 执行审批
：
通过拒绝单引号包裹的
$0
/
$n
令牌、禁止换行分隔的 exec 写法，同时继续接受
exec --
载体形式，将 shell 包装器的位置参数白名单匹配限定在真实的直接载体上。
网关 / 探测
：
避免在连接后详情 RPC 仍在加载期间，将已成功完成的网关握手误判为不可达超时，使慢速设备报告「可达但 RPC 失败」而非错误地标记网关不可用。
网关 / 监管
：
通过让重复进程保持重试等待状态（而非在其他健康网关持有锁时以失败退出），避免 launchd 和 systemd 下的锁冲突导致崩溃循环。
网关 / 认证
：
对 canvas 路由要求身份认证，对 Agent 会话重置要求管理员权限范围，使匿名 canvas 访问及非管理员重置请求均以「拒绝」方式安全失败。
发布 / 安装
：
在已发布的 openclaw npm 安装包中保留此前发布的内置插件和控制界面资源，并在这些已交付产物缺失时使发布检查失败。
上下滑动查看更多
参考资料：
https://github.com/openclaw/openclaw/releases
https://x.com/steipete/status/2036218803001114779
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！