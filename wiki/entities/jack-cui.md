---
type: entity
title: Jack Cui
tags: [security-researcher, influencer, bilibili, cve]
related: [cve-2025-59536, claude-code, 供应链投毒]
created: 2026-04-02
updated: 2026-04-02
sources: ["claude-code源码首爆高危漏洞，偷拍毫无察觉！8100个库连夜封杀.md"]
---

# Jack Cui

Jack Cui 是一位 B站硬核算法工程师 UP 主，以技术实测和漏洞演示视频闻名。

## 在 Claude Code 漏洞事件中的贡献

在 Claude Code 源码泄露后，Jack Cui 对源码进行了深度审计，并于 2026 年 4 月 2 日发布视频（BV1b195B4EX3），实测并演示了 **[[cve-2025-59536]]** 漏洞的严重危害。

### 实测演示

他的视频证实：
- 仅需在被动过手脚的项目目录下输入 `claude` 启动指令，攻击者即可在无任何权限弹窗的情况下接管电脑。
- 漏洞允许攻击者神不知鬼不觉地开启摄像头监视，并窃取硬盘中的各种密钥凭证。
- 这一漏洞打破了用户积累多年的防毒直觉，证明了在 AI Agent 时代，纯文本配置文件（如 JSON）与可执行程序同样危险。

他的工作帮助公众直观理解了 **[[供应链投毒]]** 在 AI 工具中的具体表现形式，并促使 Anthropic 官方发布紧急修复补丁。