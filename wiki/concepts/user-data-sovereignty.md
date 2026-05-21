---
type: concept
title: 用户数据主权
tags: [privacy, security, ethics]
related: [tuanziguardianclaw, openclaw]
created: 2026-03-13
updated: 2026-03-13
sources: ["首只“卫士虾”堵上openclaw原生漏洞，仅6.5kb大小，agent组团写的.md"]
---

# 用户数据主权

用户数据主权是指用户对存储在本地设备上的个人数据拥有完全的控制权和所有权。在 AI 智能体和自动化系统中，这一原则强调系统默认应禁止数据外泄，任何敏感操作必须经过用户的显式确认。

## 核心体现
在 [[TuanziGuardianClaw]] 的设计中，用户数据主权是其五条核心安全原则之首，具体体现为：
- **默认禁止**：API 密钥、私钥、个人文件等默认禁止被任何 Skill 读取或传输。
- **显式许可**：访问高风险目录或导出数据必须经过用户明确批准。
- **透明告知**：系统必须向用户解释 Skill 试图进行的操作及其风险。