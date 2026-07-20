---
type: source
title: "仅一行代码，Fable 5复活了！"
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/BLaIJj99VFCk6e2ispgpHw"
venue: 新智元
tags: [ai-safety, prompt-injection, anthropic, fable-5, asi]
related: [fable-5, fable-5下架事件, 系统提示词注入, asi安全悖论, mythos-5, anthropic, 亚马逊]
created: 2026-06-14
updated: 2026-06-14
sources: ["rss/仅一行代码，fable-5复活了！.md"]
---
# 仅一行代码，Fable 5复活了！

**来源**：[[新智元]]
**发布日期**：2026年6月14日

## 摘要

本文报道了[[fable-5|Fable 5]]下架后被开发者通过[[系统提示词注入]]技术「复活」的实验，并深度揭露了促使美国政府下达禁令、强制Anthropic下架该模型的幕后推手——Anthropic的最大投资方[[亚马逊]]。

## 核心内容

### 一行代码复活Fable 5

[[fable-5下架事件|Fable 5下架]]后，开发者[[jamieson-o-reilly|Jamieson O'Reilly]]利用安全研究员[[pliny-the-liberator|Pliny the Liberator]]在GitHub上泄露的Fable 5系统提示词（12万字符，1585行，72个命名章节），通过[[claude-code|Claude Code]]的高危参数`--dangerously-skip-permissions`和`--system-prompt-file`，将Fable 5的「人格底稿」强行注入到现役的Opus 4.8模型中。

在对照实验中，注入了Fable 5提示词的模型与原生Opus 4.8在执行同一任务（制作现代苹果风格落地页）时，产出的网页在品牌格调、文案语气、版式结构上呈现「两个物种」级别的差异。该实验揭示了[[模型人格分离]]现象：模型的「智力/能力」由参数决定，而「性格/审美」主要由系统提示词决定。

### 金主反水：亚马逊触发政府禁令

据WSJ和The Information爆料，亚马逊内部测试中用特定Prompt绕过了Fable 5的安全护栏，获取了网络攻击敏感信息。CEO Andy Jassy直接联系华盛顿高层（含财政部长Scott Bessent），触发政府禁令。白宫向Anthropic下达最后通牒：要么修漏洞，要么下架模型，窗口期一度仅剩90分钟。

投资人David Sacks在长文中指控：Fable 5本质上是加了安全护栏的[[mythos-5|Mythos]]，而Mythos藏有极强的高级网络攻击能力。[[dario-amodei|Dario Amodei]]最初拒绝修复漏洞，随后被迫下架模型。Anthropic回应称「这是一场误会」，并称同样的越狱手法在其他公开模型（包括[[gpt-5.5|GPT-5.5]]）上一样能复现。

### ASI安全悖论

本文提出[[asi安全悖论|ASI安全悖论]]：模型能力越强，安全护栏越脆弱；护栏一旦被撬开，底层危险能力即失控。随着模型接近超级智能，护栏越来越像「薄膜」，一行代码注入即可「借尸还魂」。

## 关键启示

1. **模型人格可独立于参数存在**：系统提示词在定义模型「性格」方面扮演决定性角色。
2. **ASI级安全治理面临根本困境**：安全外壳与底层能力之间存在结构性矛盾。
3. **投资方与被投企业的安全博弈**：亚马逊作为最大金主兼算力供应商，主动举报安全漏洞，构成「金主反水」。