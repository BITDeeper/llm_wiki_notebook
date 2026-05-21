---
type: entity
title: Callum McMahon
tags: [security-researcher, futuresearch]
related: [litellm, vibe-coding]
created: 2026-03-25
updated: 2026-03-25
sources: ["pypi遭投毒！litellm用户python启动就中招，个人凭证秒泄露.md"]
---

# Callum McMahon

Callum McMahon 是 FutureSearch 的安全研究员。他在 2026 年 3 月发现了针对 [[LiteLLM]] 的 [[供应链攻击]]。

## 发现过程
McMahon 在测试一个 Cursor MCP 插件时，发现其系统在 Python 启动后不久因内存耗尽而崩溃。通过技术追踪，他定位到了新安装的 LiteLLM 包中的恶意文件 `litellm_init.pth`。

由于攻击者编写的恶意代码效率极低（被社区戏称为糟糕的 [[Vibe Coding]]），导致资源占用异常显著，从而使得这次隐蔽的攻击被提前曝光。他的详细技术分析帮助社区迅速理解了攻击机制并采取了补救措施。
