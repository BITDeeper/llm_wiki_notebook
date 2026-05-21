---
title: "昨晚，OpenClaw大更新，亲手终结「旧插件」时代"
date: 2026-03-24
source: "机器之心"
url: "https://mp.weixin.qq.com/s/7Foccaf9J60QDvtJvYB2Ag"
rss_id: "2651023265_2"
---
编辑｜杜伟
昨晚，OpenClaw 又迎来了一次重大的版本更新，「这次发布内容多到需要单独做一个目录来梳理。」
更新重点放在了以下几大方面：
ClawHub 插件市场
MiniMax M2.7、GPT-5.4-mini/nano + 按 Agent 分配的推理能力
/btw 侧边提问（可随时插入的补充问题）
OpenShell + SSH 沙盒环境
Exa、Tavily、Firecrawl 搜索工具
此次最重要的变化是
插件生态重心转向，ClawHub 成为「默认入口」
。
优先从 ClawHub 安装，而不是 npm。只有 ClawHub 没有对应包 / 版本时，才 fallback 到 npm。
这意味着，OpenClaw 正在把插件生态从通用包管理转向自有 Agent 插件市场。
其次是插件体系大改，包括
SDK 重构和接口收敛
。
SDK 路径重构，新入口为「openclaw/plugin-sdk/*」，插件开发从宽接口转向细粒度模块化 SDK。
消息机制重写，强制使用「describeMessageTool (...)」，从声明能力到直接定义工具语义。
运行方式变化，插件必须使用 injected runtime（注入运行时），不再允许随意直接调用宿主 API。
接着是
工具能力收敛，内置能力替代第三方 Skill
。
以图像生成能力为例，统一到核心工具「image_generate」，删除 nano-banana-pro 文档和内置 skill wrapper。
这意味着从技能插件拼装转向了核心能力内建 + 可选扩展。
此外，
浏览器与执行环境去「外挂化」，强化原生能力
。
浏览器体系重构，删除 Chrome extension relay 方案，统一迁移到 existing-session、user session 或直接 CDP（Docker /headless/remote）。
执行环境安全升级，新增多项限制，包括禁止 JVM 注入（MAVEN_OPTS 等）、阻断 glibc exploit（GLIBC_TUNABLES）、限制.NET 依赖劫持以及控制 Gradle 环境覆盖。
在模型层面，
OpenAI 默认模型切换为 gpt-5.4
，Codex 独立为 openai-codex/gpt-5.4，新增对 gpt-5.4-mini 和 gpt-5.4-nano 的支持。
MiniMax 默认模型从 M2.5 变为 M2.7
，新增 MiniMax-M2.7 和 MiniMax-M2.7-highspeed，并补齐了 M2 / M2.1 / M2.1-highspeed。
引入
per-agent 模型策略
，每个 Agent 有默认 thinking（深度推理）、reasoning（标准推理）和 fast（快速模式）。
最后还有一项特别的更新，删除「.moltbot」配置体系，移除 CLAWDBOT_* / MOLTBOT_* 环境变量，全面统一为 OPENCLAW_*，与过去彻底切割。
One more thing：就在刚刚，
OpenClaw 创始人
Peter Steinberger
表示，在昨晚的版本发布过程中，遗漏了「Web 控制 UI 资源」相关的一个关键步骤，导致当前正式版本无法正常加载该部分功能。
该问题已在最新的 beta 版本中修复，用户可以选择升级体验，或等待后续正式更新发布。
更新详情：https://github.com/openclaw/openclaw/releases/tag/v2026.3.22
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com