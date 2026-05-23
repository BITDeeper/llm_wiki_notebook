---
type: source
title: "谷歌首度证实：黑客已开始用AI发动真实网络攻击！"
created: 2026-05-13
updated: 2026-05-13
tags: [网络安全, AI攻击, 零日漏洞, 谷歌, Anthropic, Mythos]
related: [ai辅助零日攻击首次实锤-20260512, mythos, project-glasswing, promptspy, ai网络安全攻防竞赛]
sources: ["谷歌首度证实：黑客已开始用ai发动真实网络攻击！.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/D5Cy5c1m6RR5agFQan7nfw"
venue: 新智元
---
# 谷歌首度证实：黑客已开始用AI发动真实网络攻击！

新智元2026年5月13日发布的报道，核心内容为谷歌威胁情报组（GTIG）发布报告，首次确认犯罪黑客使用AI大模型独立发现零日漏洞并编写攻击脚本。

## 核心内容

- **GTIG报告**：犯罪黑客利用AI大模型发现了一个广泛使用的开源Web系统管理工具中的零日漏洞，可绕过双因素认证（2FA）。谷歌在攻击造成实际损害前拦截并通知厂商修补。
- **AI代码指纹**：攻击代码包含教学性docstring、幻觉CVSS评分、教科书式Python风格等AI生成特征。前NSA网络安全主管 [[rob-joyce]] 评价为"迄今最接近犯罪现场指纹的东西"。
- **漏洞类型**：属于[[高层语义逻辑缺陷]]，源于开发者硬编码信任假设，传统扫描工具难以发现，但大模型擅长捕捉。
- **[[promptspy]]**：谷歌发现的Android恶意软件，调用Gemini API自主分析屏幕并决策，具备生物识别数据捕获、阻止卸载等能力。
- **[[mythos]]**：Anthropic发布的网络安全模型，已在主流操作系统中发现数千个零日漏洞，不公开发布。
- **[[project-glasswing]]**：Anthropic牵头联合亚马逊、苹果、谷歌、微软、摩根大通修补关键软件漏洞的联盟。
- **[[gpt-5.5-cyber]]**：OpenAI推出的专用网络安全模型，仅向防御者开放。
- **[[过渡期风险]]**：AI强化攻击能力快于防御能力提升，世界在此期间可能变得更危险。

## 关键引用

- [[john-hultquist]]（GTIG首席分析师）："这是冰山一角。"
- [[rob-bair]]（Anthropic网络政策负责人）：[[防御者优势窗口]]"以月计，不是以年计"。
- [[dean-ball]]（前白宫科技政策顾问）："我不喜欢监管，但在这个问题上，我认为我们需要监管。"

## 关联实体

- [[anthropic]] — Mythos和Project Glasswing的开发者
- [[openai]] — GPT-5.5-Cyber的推出者
- [[gemini]] — 被PromptSpy调用API