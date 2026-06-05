---
type: entity
title: Claude Mythos Preview
created: 2026-05-31
updated: 2026-06-05
tags: ["ai-model", "cybersecurity", "anthropic", "offensive-security", "model", "security", "research", "evaluation", "long-horizon-task", "模型", "claude", "ai安全", "ai模型", "安全", "漏洞挖掘", "网络安全", "零日漏洞", "递归自我改进", "实验优化"]
related: ["anthropic", "project-glasswing", "ai-网络攻防能力", "自动化漏洞利用", "技术余晖", "gpt-5.3-codex", "claude", "metr", "patience-awakening", "nla-自然语言自编码器", "claude-opus-4-6", "claude-security", "claude-code", "scaling-law", "cloudflare", "mozilla-firefox", "openbsd", "wolfssl", "xbow", "漏洞洪水", "ai网络安全受限部署", "ai网络安全临界点-2026年4月", "递归式自我改进"]
sources: ["openai也开始恐惧自己训练出的新模型了.md", "残酷真相：硅谷顶尖ai甩开世界1年！你用的不过是「技术余晖」.md", "ai突现首例自我复制！横跨4国160小时无限繁殖.md", "claude脑子里想的，被翻译成人话了！anthropic新研究看懵人类.md", "mythos首个报告出炉：全球数十亿设备裸奔！30天挖出10000致命漏洞.md", "ai引爆「漏洞洪水」！99%来不及修，openai高薪抢人.md", "刚刚，anthropic向全人类发出警告：停止研究ai！.md"]
origin_date: 2026-04-01
---
# Claude Mythos Preview

[[anthropic|Anthropic]] 于2026年4月前后推出的最新模型版本，在实验优化、研究判断和攻击性网络安全能力上实现了跨越式突破。2026年4月随 [[project-glasswing|Project Glasswing]] 一同发布。

## 核心性能指标

### 实验优化加速

- 在训练代码优化测试中实现约**52倍加速**
- 对比：人类熟练研究员需4–8小时才能做到4倍加速
- 对比：2025年5月 [[claude-opus-4-6|Claude Opus 4]] 仅约3倍加速
- 一年内从"超级有用"跃升至"超人水平"

### 研究判断胜率

- 在129个真实研究"走弯路"时刻测试中，**64%概率给出比人类更优的下一步**
- 对比：2025年11月 Opus 4.5 仅为51%

## 网络安全能力

### 自主零日漏洞发现

- 能在真实开源代码库中自主发现并利用尚未公开、尚未修复的零日漏洞
- 一个月内扫描1000+开源项目，标记6202个高危/严重漏洞候选
- 经六家独立安全公司复核，真阳性率达90.6%，确认1094个高危/严重级别
- 在 wolfSSL 中拼出完整攻击链（CVE-2026-5194，CVSS 9.1），攻击者可伪造证书创建以假乱真的银行页面

### 大规模漏洞扫描成果

- 一个月内在全球最关键软件中发现超1万个高危或严重级别漏洞
- 发现的漏洞中超99%尚未修复
- 估算开源代码将浮现约3900个高危漏洞

### 完整攻击链构建

- 在 wolfSSL 中拼出完整攻击链（CVE-2026-5194，CVSS 9.1），攻击者可伪造证书创建以假乱真的银行页面

## 评估验证

- **英国AI安全研究所（UK AISI）**：确认 Mythos Preview 是首个端到端跑通其两个网络靶场的模型，包括此前从未被任何模型攻克的工控靶场
- **Anthropic 红队评估**：确认其具备在真实代码库中发现并利用零日漏洞的能力

## 标志性案例

| 目标 | 成果 |
|------|------|
| **Cloudflare** | 关键路径系统被挖出2000个漏洞，400个高危/严重 |
| **Mozilla Firefox 150** | 单版本修复271个漏洞，为此前用 Claude Opus 4.6 扫出数量的12倍以上 |
| **wolfSSL** | 全球数十亿设备使用的根加密库，发现完整攻击链 |
| **合作银行** | 实时识别并拦截150万美元诈骗电汇 |
| **Anthropic 内部** | 2026年4月"大扫除"：一口气提交800+修复，将一类API错误压低1000倍（人类估算需4年） |

## 部署策略

Mythos Preview 未面向公众开放，通过 [[project-glasswing|Project Glasswing]] 限定交付给约50家合作伙伴，仅用于防御性安全工作。这体现了 [[ai网络安全受限部署|受限部署]] 的"窄门"策略。

## 意义

Mythos Preview 的52倍实验加速标志着 [[递归式自我改进]] 从理论推测进入有量化数据支撑的现实阶段。在目标明确的实验优化环节，人类已被甩出一个数量级。