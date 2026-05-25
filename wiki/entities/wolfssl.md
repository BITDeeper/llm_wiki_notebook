---
type: entity
title: wolfSSL
created: 2026-05-23
updated: 2026-05-23
tags: [密码学, 开源库, 安全漏洞, 物联网]
related: [claude-mythos-preview, project-glasswing]
sources: ["mythos首个报告出炉：全球数十亿设备裸奔！30天挖出10000致命漏洞.md"]
---
# wolfSSL

**wolfSSL** 是一个极其著名的开源密码学库，全球有**数十亿台设备**（包括物联网设备、路由器、智能汽车等）在使用它进行加密通信。

## Mythos 发现的漏洞

在 [[project-glasswing]] 中，[[claude-mythos-preview]] 在 wolfSSL 中发现了一个极其隐蔽的逻辑漏洞，并自动编写了攻击代码。利用该漏洞，攻击者可以随意伪造数字证书，造出极其逼真的银行网站或邮箱登录页，没有任何破绽。

该漏洞被 Mythos 提前发现并提交修复，避免了被黑产利用后影响全球数十亿设备的灾难性后果。