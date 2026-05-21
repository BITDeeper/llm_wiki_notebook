---
title: "首次！OpenClaw又更新，直接合并QQ官方插件"
date: 2026-04-01
source: "机器之心"
url: "https://mp.weixin.qq.com/s/U0EGL6H-El-eGUyeIAQfkw"
rss_id: "2651024976_2"
---
机器之心编辑部
「OpenClaw 的下一版本已经被泄露。」
今天早上，OpenClaw 再次更新，发布了 2026.3.31 版本。
从官方介绍来看，此次上线了一系列更新，包括内置 QQ Bot，打通中国主流即时通讯场景，支持私聊、群聊、频道（Guild）以及多媒体消息交互；进一步强化多模态消息能力，LINE 平台现已支持发送图片、视频和音频等；首次引入可视化的后台任务流管理，支持查看列表、展示详情、取消任务等；针对 CJK（中日韩语言）的优化，包括更好的上下文理解、更稳定的长期记忆、更自然的语音合成（TTS）……
具体来看，其中最受关注的一项就是
内置 QQ Bot 插件，
支持多账号、凭证管理（SecretRef）、Slash 命令、提醒以及媒体消息收发。相比传统 AI 工具需要进入应用再使用相关功能，这种形态的变化更接近一种「嵌入式」能力，直接存在于沟通场景之中。
资料显示，此前，OpenClaw 已支持 Telegram、Discord、Slack 等平台，而 QQ 的加入，或标志着其正式进入国内用户的高频沟通环境。
本次更新还
进一步强化多模态消息能力，
在 LINE 等平台中，OpenClaw 已支持发送图片、视频和音频等。
这意味着，
用户可以直接通过多种媒介触发任务，而不仅限于文本指令。
也就是说，多模态能力在这里不再只是理解输入内容，而是成为任务执行的入口。
另一个比较大的更新是，此次
首次引入的可视化的后台任务流管理，
这使得 OpenClaw 不再只是一个即时响应的对话系统，而是具备了类似「任务调度器」的能力，是一个可持续运行、可被管理、可被中断的执行系统。
此外，此次 OpenClaw 还专门强调了针对 CJK（中日韩语言）的优化，这或许意味着，OpenClaw 正在针对亚洲市场进行更深入的本地化适配。
总之，综合此次的关键更新来看，会发现一个有意思的现象，OpenClaw 或正在从 AI 工具转变为「AI 入口」，用户只需要用自然语言表达需求，其余流程由 Agent 自动完成。
而从 GitHub 的更新日志上看，除了上述这些关键更新，此次 OpenClaw 2026.3.31 的更新内容还有很多，包括
大量的可靠性与安全性方面的改进，
下面就选取部分内容来看看：
Nodes/exec：
移除了 CLI 和 Agent 节点工具中重复的 「nodes.run」shell 封装。现在所有 Node shell 执行统一通过 「exec host=node」，Node 专属能力仅保留在节点调用和专用媒体 / 定位 / 通知操作中。
Plugin SDK：
弃用旧版 provider 兼容路径和历史 bundled provider 机制，同时发出迁移警告。未来将仅保留当前文档中的「openclaw/plugin-sdk/*」入口以及本地「api.ts/runtime-api.ts」作为标准路径。
插件与技能安装：
默认启用「失败即关闭」策略，若检测到危险代码或安装扫描失败，将直接阻止安装。如需继续，必须显式使用「--dangerously-force-unsafe-install」等参数。
Android / 通知：
新增通知转发控制能力，支持按应用包过滤、静默时段、速率限制，并为转发通知事件提供更安全的选择器行为。
Matrix / 历史记录：
通过「channels.matrix.historyLimit」为 Matrix 群组触发增加可选的历史上下文支持；引入按 Agent 记录的水位标记和可安全重试的快照机制，避免失败重试时误读更新的消息。
Matrix / 网络：
新增「channels.matrix.proxy」配置，可通过 HTTP (S) 代理转发 Matrix 流量，支持账号级覆盖，并与探测 / 运行时行为保持一致。
Matrix / 流式输出：
新增草稿式流式输出，使 Matrix 的部分回复能够在同一条消息中原地更新，无需为每个分块发送新消息。
Matrix / 线程：
新增针对私聊（DM）的线程回复（threadReplies）配置覆盖，并确保线程会话隔离与触发消息所在房间或 DM 的线程策略保持一致。
Slack / 执行审批：
新增原生 Slack 审批路由与审批人权限控制，使执行审批可直接在 Slack 内完成，无需回退到 Web UI 或终端。
CLI / 初始配置：
在用户拒绝已发现的远程网关地址后，将远程网关 URL 提示重置为安全的本地回环默认值，避免初始配置过程中保留之前被拒绝的远程 URL。
WhatsApp / 消息反应：
Agent 现在可以对收到的 WhatsApp 消息添加 emoji 反应，例如用 ❤️ 表示确认，而无需发送文本回复，使交互更加自然。
Microsoft Teams / 成员信息：
新增基于 Microsoft Graph 的成员信息查询能力，使 Teams 自动化和工具可以直接获取频道成员详情。
更多信息，大家可前往项目主页查看！
参考链接：
https://x.com/openclaw/status/2039095081215672584
https://github.com/openclaw/openclaw/releases/tag/v2026.3.31
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com