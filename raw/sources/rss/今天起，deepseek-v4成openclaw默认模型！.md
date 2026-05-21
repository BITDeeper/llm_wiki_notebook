---
title: "今天起，DeepSeek V4成OpenClaw默认模型！"
date: 2026-04-26
source: "新智元"
url: "https://mp.weixin.qq.com/s/0FaIoY1HBqKO0R_vGTxbcA"
rss_id: "2652695272_1"
---
新智元报道
编辑：艾伦 桃子
【新智元导读】
OpenClaw最新版本官宣，DeepSeek V4 Flash正式成为默认大模型，250k+星标的全球最火开源Agent框架，把中国最强开源AI推上了C位。
今天，OpenClaw重磅接入DeepSeek V4！
新版本OpenClaw 2026.4.24一发布，随即接入了最新的DeepSeek V4双版本——
V4 Flash成为默认大模型，V4 Pro也已上线模型库。
从今天起，全球每一个更新OpenClaw的人，打开的第一秒钟，跟自己对话的大脑就是DeepSeek V4 Flash。
可以说，DeepSeek V4的接入，成为了OpenClaw更新的最大亮点。
一时间，全网激动地都开始跃跃欲试。
这一次，OpenClaw还打通了Google Meet，实时语音通话让全网震撼。
DeepSeek V4
成为OpenClaw默认模型
两天前，DeepSeek V4一声惊雷炸出，全球AI圈的人期待已久的开源新王，终于靴子落地。
OpenClaw第一时间接入DeepSeek V4「双版本」，还把V4 Flash设为默认模型。
「龙虾」亲手把中国AI推向了最C位。
对普通用户来说，最直接的变化是，上手OpenClaw时默认进入DeepSeek V4 Flash路线。
感受一下V4的含金量。
DeepSeek V4 Pro：1.6万亿总参数，49B激活参数，MoE架构，全球最大的开源模型。
DeepSeek V4 Flash：284B总参数，13B激活参数，同样MoE架构。更小、更快、更便宜，但推理能力在Max模式下几乎追平Pro版本。
两个模型都支持100万token上下文，都采用MIT协议完全开源
这次更新，还修复了DeepSeek在多轮工具调用中的thinking和replay行为。
此前，Agent在连续调用工具、切换会话模型时，容易因为reasoning_content缺失触发provider replay检查错误。
新版本补齐了相关占位逻辑，让DeepSeek V4 Flash和DeepSeek V4 Pro在长链路任务里更稳定。
这类修复看起来偏工程细节，但对Agent产品很关键。
OpenClaw的核心场景已经不只是聊天，更多时候是让模型连续调用浏览器、会议、语音、文件和插件。
模型接入如果停在文本回复层，价值有限。真正影响体验的，是它能否撑住复杂任务链路。
龙虾打电话
Google Meet成内置插件
这次更新中，Google Meet被加入OpenClaw，成为bundled participant plugin。
新版本支持个人谷歌账号授权、显式会议URL加入、Chrome和Twilio实时传输，也支持paired-node Chrome，用于 Parallels、BlackHole、SoX这类本地音频与浏览器组合环境。
更重要的变化在会议结束后。
OpenClaw可以处理会议记录、录音、转写、智能笔记和参会人会话，并导出为Markdown或其他类型文件。
系统还支持查找最新会议记录，以及扫描历史conference records。
这让OpenClaw在会议场景中的位置更靠前。
它承担的不只是转写，而是会议进入、实时参与、内容沉淀和结果回查。
AI会议助手过去多围绕「记录」展开。
OpenClaw这次把会议变成一个可被 Agent 调用和管理的工作节点。
实时语音接入完整Agent
Talk、Voice Call和Google Meet现在都可以使用实时语音循环。
这部分更新的重点，是实时语音可以调用完整 OpenClaw Agent。
通过 openclaw_agent_consult，电话或会议里的问题可以交给后台 Agent 处理，Agent 再调用工具、查询上下文、组织答案，并用语音返回。
Voice Call 插件新增 setup 和默认 dry-run 的 smoke command，用来在真实拨号前检查 Twilio 或其他 provider 是否准备好。
Google provider侧新增Gemini Live实时语音能力，支持双向音频和函数调用。
Gateway/VoiceClaw也加入基于Gemini Live的realtime brain WebSocket endpoint，并通过owner-auth做权限限制。
这说明 OpenClaw 正在把语音做成一级入口。
文本框之外，电话和会议正在成为 Agent 的运行环境。
浏览器自动化
继续补工程短板
浏览器自动化是另一个重点。
新版本加入 viewport coordinate clicks，支持 managed automation 和 existing-session automation，CLI侧也新增 openclaw browser click-coords。
网页控件无法稳定识别时，坐标点击提供了兜底方案。
默认action budget被延长到60秒，减少长等待被误判失败的情况。
浏览器 profile 也支持单独设置 headless，一个profile可以无头运行，其他profile不受影响。
Google Meet相关修复也集中在浏览器稳定性上。
新版本可以复用已经打开的 Meet 标签页，浏览器超时后尝试恢复，还能识别登录、权限、麦克风选择等人工阻塞点。
这些改动不容易成为传播点，但会影响 Agent 是否能持续工作。
浏览器 Agent 的问题经常出在标签页、权限、等待时间和恢复机制上。
插件和模型架构变轻
OpenClaw 同时在降低启动负担。
模型列表改用静态目录，减少默认 models list 时的 registry 枚举。
模型目录加入 manifest-sourced model rows，让 provider index、cache、onboarding 和 listing 可以在不加载 provider runtime 的情况下工作。
插件侧也在做类似调整：modelCatalog、channelConfigs、setup.providers 等信息更多从 manifest 暴露，descriptor-only setup contract 也变得更明确。
随着 Google Meet、Voice Call、PDF、Anthropic Vertex、Bonjour 等能力插件化，启动时加载全部 runtime 会拖慢系统。
新版本把描述信息前置，把运行时依赖后置。
这是一种典型的工程取舍，牺牲一点早期兼容便利，换取更轻的启动路径和更清晰的插件边界。
SDK发生破坏性变化
此次更新还有一项破坏性变动：
OpenClaw 移除了 Pi-only 的 api.registerEmbeddedExtensionFactory(...) 兼容路径。
之后 bundled tool-result rewrites 需要使用 api.registerAgentToolResultMiddleware(...)，并在 contracts.agentToolResultMiddleware 中声明目标 harness。
这会影响插件开发者。
官方希望工具结果转换在 Pi 和 Codex app-server dynamic tools 中保持一致，旧接口需要迁移。
相应地，OpenClaw 增加了插件兼容性 registry 和迁移记录，用来管理 SDK、配置、setup 和 runtime 的弃用路径。
这背后是 OpenClaw 在整理早期快速扩张留下的接口债务。
OpenClaw的方向更清楚了
这次更新覆盖模型、会议、语音、浏览器、插件、诊断、TTS、Slack、Telegram和MCP等模块。
DeepSeek V4进入默认模型路径，解决的是模型能力；
Google Meet和Voice Call强化的是协作入口；
浏览器自动化、插件懒加载和SDK迁移，补的是复杂任务运行时的工程底座。
OpenClaw正在从聊天产品走向工作流系统。
参考资料：
https://github.com/openclaw/openclaw/releases/tag/v2026.4.24
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！