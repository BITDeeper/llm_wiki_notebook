---
type: entity
title: caveman
tags: [plugin, open-source, prompt-engineering, token-optimization, ai-tool]
related: [claude-code, ai-yap-废话连篇, 超压缩通信模式, julius-brussee, 简洁性约束, caveman-speak]
created: 2026-04-06
updated: 2026-05-08
sources: ["逼ai当山顶洞人！claude防话痨插件爆火，网友：受够了ai废话.md", "省token神器3天狂揽4.1k星！19岁小哥开发，信息无损最高省87%.md"]
---

# caveman

[[caveman]] 是一个开源的 AI 插件/技能，旨在通过强制 AI 模型使用极简语言（“穴居人”模式）来压缩输出 Token，从而解决 [[ai-yap-废话连篇]] 问题。

## 核心功能
该插件基于 [[简洁性约束]] 和 [[caveman-speak]] 概念，利用 [[Claude Code]] 的 [[skills-机制]]（或兼容环境）注入系统提示词。其核心逻辑是 [[超压缩通信模式]]：在不牺牲技术准确性的前提下，删除冠词、客套话和填充词。

主要特性包括：
- **Token 压缩**：平均可节省 65% 的输出 Token（区间 22%-87%）。
- **无损保留**：完全保留代码块、URL、文件路径、命令等结构化数据，仅压缩自然语言文本。
- **兼容性**：支持 [[Claude Code]]、Cursor、Copilot、Windsurf 等主流 AI 编程环境。

## 模式分级
插件提供三档强度设置，以适应不同的场景需求：
1.  **Lite**：去除填充词和客套话，保留完整句子和基本语法。
2.  **Full**（默认）：省略虚词（如冠词），允许碎片句，仅保留关键词。
3.  **Ultra**：极致压缩。大量使用缩写（如 `DB`, `auth`），使用箭头（`→`）表达因果，模仿原始人类语言风格。

## 安装方式
在支持 skills 的环境中，可通过以下命令安装：
```bash
npx skills add JuliusBrussee/caveman
```
针对特定 Agent（如 Cursor）：
```bash
npx skills add JuliusBrussee/caveman -a cursor
```

## 效果评估与局限
- **Token 节省**：实测数据显示输出 Token 减少 22%–87%。
- **局限性**：
    - **仅影响输出**：仅压缩可见输出，不压缩后台的 Hidden Reasoning Tokens（思考过程）或输入 Token（上下文）。
    - **上下文开销**：加载插件本身会消耗少量上下文 Token。
    - **可读性代价**：极简风格可能增加用户的解码负担。
    - **性能影响**：在数学等特定任务上，强制简洁可能导致性能下降。
    - **非万能药**：不能解决 AI 使用的总成本问题（尤其是长上下文场景）。

## 开发者与影响
- **开发者**：由 19 岁的 [[Julius Brussee]] 开发。
- **社会反响**：在 Hacker News 上迅速爆火（Star 数破 2 万，3 天狂揽 4.1k 星），被视为开发者对抗 AI 冗余输出和 [[ai-subscription-crisis]] 的标志性工具。它反映了用户对 AI “废话”导致成本增加和阅读疲劳的强烈不满。

## 外部链接
- GitHub: [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)