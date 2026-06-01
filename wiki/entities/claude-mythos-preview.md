---
type: entity
title: Claude Mythos Preview
created: 2026-05-31
updated: 2026-05-31
tags: ["ai-model", "cybersecurity", "anthropic", "offensive-security", "model", "security", "research", "evaluation", "long-horizon-task", "模型", "claude", "ai安全", "ai模型", "安全", "漏洞挖掘", "网络安全", "零日漏洞"]
related: ["anthropic", "project-glasswing", "ai-网络攻防能力", "自动化漏洞利用", "技术余晖", "gpt-5.3-codex", "claude", "metr", "patience-awakening", "nla-自然语言自编码器", "claude-opus-4-6", "claude-security", "claude-code", "scaling-law", "cloudflare", "mozilla-firefox", "openbsd", "wolfssl", "xbow", "漏洞洪水", "ai网络安全受限部署", "ai网络安全临界点-2026年4月"]
sources: ["openai也开始恐惧自己训练出的新模型了.md", "残酷真相：硅谷顶尖ai甩开世界1年！你用的不过是「技术余晖」.md", "ai突现首例自我复制！横跨4国160小时无限繁殖.md", "claude脑子里想的，被翻译成人话了！anthropic新研究看懵人类.md", "mythos首个报告出炉：全球数十亿设备裸奔！30天挖出10000致命漏洞.md", "ai引爆「漏洞洪水」！99%来不及修，openai高薪抢人.md"]
origin_date: 2026-04-07
---
# Claude Mythos Preview

[[anthropic|Anthropic]] 推出的攻击性网络安全模型，能够自主发现并利用真实代码库中的零日漏洞。2026年4月7日随 [[project-glasswing|Project Glasswing]] 一同发布。

## 核心能力

- **自主零日漏洞发现**：能在真实开源代码库中自主发现并利用尚未公开、尚未修复的零日漏洞
- **大规模漏洞扫描**：一个月内扫描1000+开源项目，标记6202个高危/严重漏洞候选
- **高真阳性率**：经六家独立安全公司复核，真阳性率达90.6%，确认1094个高危/严重级别
- **完整攻击链构建**：在 wolfSSL 中拼出完整攻击链（CVE-2026-5194，CVSS 9.1），攻击者可伪造证书创建以假乱真的银行页面

## 评估验证

- **英国AI安全研究所（UK AISI）** 确认 Mythos Preview 是首个端到端跑通其两个网络靶场的模型，包括此前从未被任何模型攻克的工控靶场
- Anthropic 红队评估确认其具备在真实代码库中发现并利用零日漏洞的能力

## 关键数据

- 一个月内在全球最关键软件中发现超1万个高危或严重级别漏洞
- 发现的漏洞中超99%尚未修复
- 估算开源代码将浮现约3900个高危漏洞

## 部署策略

Mythos Preview 未面向公众开放，通过 [[project-glasswing|Project Glasswing]] 限定交付给约50家合作伙伴，仅用于防御性安全工作。这体现了 [[ai网络安全受限部署|受限部署]] 的"窄门"策略。

## 标志性案例

- **Cloudflare**：关键路径系统被挖出2000个漏洞，400个高危/严重
- **Mozilla Firefox 150**：单版本修复271个漏洞，为此前用 Claude Opus 4.6 扫出数量的12倍以上
- **wolfSSL**：全球数十亿设备使用的根加密库，发现完整攻击链
- **合作银行**：实时识别并拦截150万美元诈骗电汇