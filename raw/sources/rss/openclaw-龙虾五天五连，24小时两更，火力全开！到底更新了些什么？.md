---
title: "Openclaw 龙虾五天五连，24小时两更，火力全开！到底更新了些什么？"
date: 2026-04-12
source: "机器之心"
url: "https://mp.weixin.qq.com/s/sqLKOBmuGDzTg6PBwcmsPQ"
rss_id: "2651027177_1"
---
机器之心编辑部
追新版本从来没有这么累过。OpenClaw 团队似乎根本不需要休息。
很少见到有把更新日期作为版本号的 AI 框架，大名鼎鼎的龙虾已经是其中之一了。
五天，五个版本号 —— 从 v2026.4.7 到 v2026.4.11，开源个人 AI 助手 OpenClaw（龙虾）在 GitHub 上完成了一轮堪称「火力全开」的密集迭代。
记忆系统重构、安全加固、多平台通道修复、视频生成接入、本地语音推理…… 几乎每一个版本都塞满了重量级更新。
OpenClaw 的 X 主页完完全全被更新日志塞满了，给大家简单感受一下：
网友们感慨，更新速度太快了，昨天刚更新，今天又有新东西。甚至，最新的两次更新居然在 24 小时内发布！
V2026.4.7：基础设施大扩容
推理与记忆体系
重建
：新增 openclaw infer CLI 推理中心，支持多模型统一调用；记忆 Wiki 全栈恢复 —— 插件、CLI、工具链及结构化声明（claims）、摘要（digest）、语法检查（linting）一应俱全；Dreaming 系统支持从脱敏转录文本中摄取语料。
媒体与生成能力
：媒体生成工具新增跨提供商自动降级机制，视频生成支持 Seedance 2.0 的前置铺垫；Discord 新增事件封面图。
安全加固第一波
：主机执行环境净化（Java/Rust/Cargo/Git/K8s / 云凭证全部拦截）、SSRF 防护增强、浏览器配置文件变异阻断、Base64 解码字节限制、跨域重定向请求体丢弃、Teams 文件授权 URL 校验、运行时事件可信标记。
通道修复
：iOS 结构化连接错误处理、Apple Watch 审批恢复、Slack 线程提及与显式 @bot、Matrix 邀请自动加入、QQBot 受保护媒体、BlueBubbles 私有网络退出选项。
此外还引入了 webhook 入站插件、持久化压缩检查点（UI 支持分支与回退）、可插拔压缩提供者注册表、系统提示词覆盖、Gemma 4 支持、Arcee AI 提供商以及 Ollama 视觉检测能力。
龙虾说：「因为『trust me bro』不是一个知识系统。」
V2026.4.8：漏洞「清道夫」
这是一个以
修复为核心
的版本，解决了此前多个通道在 npm 构建环境下的启动崩溃问题：Telegram 及所有捆绑渠道（BlueBubbles、飞书、Google Chat、IRC、Matrix、Mattermost、Teams、Nextcloud Talk、Slack、Zalo）统一改为通过打包好的顶层 sidecar 加载 setup/secret 合约。
捆绑插件兼容性元数据也与发布版本对齐。此外修复了 Slack Socket Mode 的 HTTP (S) 代理与 NO_PROXY 支持、网络抓取守卫在受信环境代理下跳过 DNS 固定策略的问题，以及 Agent 层 update_plan 在 OpenAI 家族运行中的可用性和 /exec 默认报告行为对齐。
V2026.4.9：记忆系统升级 + 安全防线收紧
记忆与梦境架构升级
：引入 grounded REM backfill 机制 —— 历史日记笔记可回放进入梦境和持久化记忆，无需维护独立记忆栈。配合新增的结构化日记视图（Diary View），用户可在 UI 中直接浏览时间线、追踪梦境摘要。QA 实验室新增 character-vibes 评估报告，支持模型选择和并行对比。
安
全地毯式修复
：交互驱动页面导航后重新执行 SSRF 安全检查（防止批量操作绕过隔离）；封锁工作区 .env 文件中的运行时控制变量和浏览器覆盖变量；远程节点 exec 输出标记为不可信并清洗文本；强制升级 basic-ftp 至 5.2.1 修复 CRLF 注入漏洞。
多通道修复
：Android 配对流程全面优化（清理过期鉴权码、优先使用已存储设备令牌、后台暂停自动重试）；Matrix 网关启动等待、Slack 媒体附件跨域认证保留、会话路由保持等一并修复。
龙虾说：「你的代理现在开始梦见你了。是浪漫还是恐怖？Yes。」
V2026.4.10：大更新 Active Memory 插件登场
这是五个版本中变动最大的一个。
Active Memory 插件
：最引人注目的新功能 —— 可选的活跃记忆插件在主回复前插入专用记忆子代理，能在 ongoing 对话中自动拉取相关偏好、上下文和历史细节。支持三种上下文模式（message /recent/full）、/verbose 实时检查、自定义 prompt 和 thinking 参数。用户不再需要手动说「记住这个」——AI 自己就会去翻。
Codex 内置提供商 + MLX 本地
语
音
：新增 codex/gpt-* 内置提供商，走原生鉴权和模型发现路径；macOS Talk Mode 实验性接入 MLX 框架本地语音合成，语音播放完全在本地完成。
视频生成与消息操作
：正式支持 Seedance 2.0 模型（通过 fal 提供商）；Microsoft Teams 新增置顶 / 取消置顶、标记已读、表情反应等操作。
安全再
升级
：浏览器沙箱导航防御七项收紧（SSRF 默认策略、主机名白名单、子框架限制等）；exec 预检读取加固、主机环境变量拒绝列表、QQBot 媒体存储路径边界强制、ACPX 工具钩子安全化、Gmail 监听器 token 脱敏。
全平台更新
：
QA 基础设施新增三条测试通道：Matrix 一次性服务器、Telegram 私人群组 bot-to-bot 测试、multipass Linux VM 场景运行。
龙虾说：「稳定，但有态度」
V2026.4.11：体验打磨与生态完善
ChatGPT 对话导入
：Dreaming/Memory Wiki 新增导入功能，用户可将 ChatGPT 对话记录迁移至 OpenClaw 记忆体系，UI 新增「Imported Insights」和「Memory Palace」标签页 —— 在其他平台积累的 AI 交互经验可以无缝迁移。
Webchat 富文本输出
：助手回复以结构化聊天气泡渲染，新增 [embed ...] 富外部嵌入 URL 标签（可配置开关）。
视频生成增强
：支持 URL-only 资产交付（无需载入内存大文件）、类型化 providerOptions 和参考音频输入、自适应宽高比及更高图像输入上限。
插件生态
：清单（manifest）现在可声明激活和设置描述符（activation & setup descriptors），第三方插件开发者无需为核心代码编写硬编码逻辑即可描述安装流程所需的鉴权、配对和配置步骤。
其他修复
：Codex OAuth invalid_scope 错误修复、音频转写 DNS 固定策略失效修复、macOS Talk Mode 首次授权后免二次切换、WhatsApp 编辑图片路径幻觉修复、Agent 跨 provider 回退错误继承 bug 修复、Ollama 元数据缓存优化。
龙虾说：「大刀阔斧的修整」
五天，五个版本，数百项变更。这只龙虾，跑得确实很快。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com