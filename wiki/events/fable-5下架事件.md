---
type: event
title: Fable 5下架事件
created: 2026-06-14
updated: 2026-06-14
tags: [ai-safety, government-regulation, anthropic, amazon, fable-5]
related: [fable-5, anthropic, 亚马逊, mythos-5, dario-amodei, 系统提示词注入, asi安全悖论]
sources: ["rss/仅一行代码，fable-5复活了！.md"]
origin_date: 2026-06-14
significance: high
participants: [anthropic, 亚马逊, fable-5, dario-amodei]
causes: [mythos-5]
effects: [系统提示词注入, asi安全悖论]
---
# Fable 5下架事件

**Fable 5下架事件**发生于2026年6月14日前后，是Wiki中首个记录「ASI级模型因安全护栏被突破而遭政府强制下架」的里程碑案例。该事件涉及企业、最大投资方与政府三方的复杂博弈。

## 事件时间线

1. **Fable 5发布**：2026年6月中旬（Build大会周末）
2. **系统提示词泄露**：发布后24小时内，[[pliny-the-liberator|Pliny the Liberator]]在GitHub发布完整系统提示词
3. **亚马逊内部测试**：亚马逊团队用精心设计的Prompt绕过Fable 5安全护栏，获取了网络攻击敏感信息
4. **亚马逊举报**：CEO Andy Jassy直接联系华盛顿高层（含财政部长Scott Bessent），未私下通知Anthropic
5. **政府最后通牒**：白宫安全专家连夜复现测试结果，向Anthropic下达90分钟窗口期的最后通牒：修漏洞或下架
6. **Dario拒绝修复**：[[dario-amodei|Dario Amodei]]最初拒绝修复漏洞
7. **强制全球下架**：Anthropic被迫全球关停Fable 5

## 关键角色

- **[[亚马逊]]**：Anthropic最大投资方和算力供应商，主动向政府举报安全漏洞，构成「金主反水」
- **[[dario-amodei|Dario Amodei]]**：Anthropic CEO，拒绝修复漏洞后被迫下架模型
- **David Sacks**：投资人，发表长文指控Fable 5本质是加了护栏的[[mythos-5|Mythos]]，批评Anthropic将商业利益置于安全之前

## 后续影响

- **开发者断粮**：无数靠Fable 5排查软件漏洞的企业瞬间失去工具
- **内部限制**：Anthropic内部大批外籍研发人员（含[[andrej-karpathy|Andrej Karpathy]]）因安全禁令无法访问自家最新模型
- **模型复活**：开发者通过[[系统提示词注入]]技术成功在Opus 4.8上复现Fable 5人格
- **安全辩论**：引发关于[[asi安全悖论|ASI安全悖论]]的深层讨论

## Anthropic的回应

Anthropic在官方博客中将事件定性为「一场误会」，并称同样的越狱手法在其他公开模型（包括[[gpt-5.5|GPT-5.5]]）上一样能复现。