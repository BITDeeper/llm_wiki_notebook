---
title: "觉都不睡了！龙虾又上新：OpenClaw 3.8来袭"
date: 2026-03-09
source: "机器之心"
url: "https://mp.weixin.qq.com/s/raShzy4kFbYaSFoPRcbNqQ"
rss_id: "2651020678_1"
---
机器之心编辑部
是的，你没看错！OpenClaw 又更新了，几十分钟前释出了
「3.8-beta.1」版本
！
而就在昨晚，3.7 版本才出来。这更新速度简直了，开发团队是不睡觉了吗？
此次，3.8 版本新增了一些功能，同时修复了大量的（12+）安全漏洞。三项新增功能如下：
ACP 来源（ACP provenance）：agent 现在能更好地识别与其交互的用户或系统；
openclaw 备份（openclaw backup）：为 YOLO 部署提供了安全保障，确保在高风险环境下有回滚和恢复机制；
Telegram 假冒已被清除（Telegram dupes killed）： 解决了 Telegram 中的假冒问题，提升了安全性。
更新文档：https://github.com/openclaw/openclaw/releases/tag/v2026.3.8
可见，OpenClaw 2026.3.7 版本带来的庞大底层重构（比如上下文引擎插件化、复杂的网关权限和持久化绑定）之后，由于真实部署环境的复杂性，出现了一些相对严重的「退化 Bug（Regression）」。2026.3.8 的核心使命是维稳和修复。
核心重点更新解读
为了让大家快速了解本次更新的精髓，我们梳理出了以下五大重点方向：
全新的本地备份与校验机制 (CLI & Backup)
数据安全永远是第一位。新版本在 CLI 中正式引入了 openclaw backup create 和 openclaw backup verify 命令。用户现在可以更灵活地创建本地状态归档（支持仅备份配置或排除工作区），并在破坏性操作前获得更完善的验证和引导保护。此外，备份文件的按日期排序命名规范也得到了优化。
丝滑交流：Talk 语音模式体验升级
还在为语音助手不懂得「察言观色」而苦恼？新版本增加了 talk.silenceTimeoutMs 全局配置项。现在，Talk 模式可以在自动发送当前语音转录文本前，等待一段用户可自定义的静默时间，让你的思考和停顿更加自然。
模型兼容与搜索能力拓展
GPT-5.4 前向兼容：针对 openai-codex/gpt-5.4 模型，系统已更新至支持高达 1,050,000 Token 的超大上下文窗口，彻底摆脱旧版 Codex 的限制。
Brave Web 搜索强化：新增了 tools.web.search.brave.mode: "llm-context" 选项，允许系统直接调用 Brave 的 LLM Context 端点，返回带有来源元数据的高质量提取片段。
多模型搜索排序：优化了 Web 搜索提供商的排序逻辑，现在多键自动检测会优先考虑 Grok，其次是 Kimi。
macOS 与 Android 端专项瘦身与优化
macOS：Onboarding 流程中新增了远程网关 Token 字段，修复了 Launchd 重启服务卡死的问题，并针对深 / 浅色终端背景（TUI）增加了 WCAG AA 级别的自适应主题。
Android：为了更好地符合 Play 商店的分发政策，移除了自更新、后台定位、屏幕录制和后台麦克风捕获等敏感权限，将前台服务严格限制为数据同步（dataSync）。
全方位安全加固
本次更新在底层安全上下了重注。系统现在会严格绑定并验证授权的 bun 和 deno run 脚本，防止脚本在执行前被恶意篡改。同时，浏览器端加强了 SSRF（服务器端请求伪造）防护，直接拦截私有网络的中间重定向跳跃；在 MS Teams 的权限管控上也修复了路由白名单可能导致组策略意外放宽的问题。
安装了 OpenClaw 的朋友赶快更新吧：
openclaw
update
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com