---
type: source
title: "Markdown要凉…卡帕西也站HTML了"
created: 2026-05-12
updated: 2026-05-12
tags: [html, markdown, vibe-coding, ai工作流, 格式之争]
related: [html替代markdown论, andrej-karpathy, vibe-coding, anthropic, ai原生格式]
sources: ["markdown要凉…卡帕西也站html了.md"]
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/ng4kmZE9T4pRdMZHR9iBJA"
venue: 量子位微信公众号
---
# Markdown要凉…卡帕西也站HTML了

## 摘要

Anthropic 工程师 Thariq (trq212) 发表长文，主张在 AI 原生工作流中 HTML 应全面取代 Markdown 成为默认的人机交互格式。文章提出五项核心论据：信息密度碾压、可读性优势、分享成本为零、双向交互能力和快乐因素。[[andrej-karpathy]] 随后附议并扩展了这一观点，提出从纯文本→Markdown→HTML→交互式视频的输出进化路线，以及输入端从文字→语音→指向性交互的进化方向。

## 核心论点

Thariq 认为 HTML 在五个维度全面优于 Markdown：

1. **信息密度碾压** — HTML 支持表格、CSS、SVG、JS 交互、Canvas 等，而 MD 仅支持标题/加粗/列表/代码块
2. **可读性优势** — HTML 可做标签页、导航、折叠区块、响应式布局；超过 100 行的 MD 文件几乎无人认真阅读
3. **分享成本为零** — HTML 上传 S3 即可通过浏览器直接访问，MD 需附件+渲染工具
4. **双向交互** — HTML 可嵌入滑块、拖拽看板、实时预览编辑器等交互组件
5. **快乐因素** — 更有趣的工具激发更高投入和更高质量产出

## 反方论据

- HTML token 消耗约为 MD 的 1.7 倍（年成本从 $6600 增至 $11000）
- 生成时间为 MD 的 2-4 倍
- 版本控制困难，diff 噪音大（作者承认无完美解决方案）
- 被调侃为"Anthropic 榨干 usage 的阴招"

## 关键引用

> "我现在不管做规划、需求设计、方案探索，还是代码审查和整理报告，全都在用 HTML。" — Thariq

> "当下最值得尝试的热门建议：试试要求输出 HTML。" — [[andrej-karpathy]]

## 哲学升华

文章结尾引用 [[陶哲轩]] 的"认知哥白尼革命"观点，提出当创作者和消费者都不再是纯粹人类时，文件格式应围绕 AI+人类的混合需求设计，呼吁从 [[第一性原理]] 出发质疑一切。

## 时间线

- 2026年5月11日前后：Thariq 在 X/Twitter 发布原文
- 同期：[[andrej-karpathy]] 在 X/Twitter 附议
- 2026年5月12日：[[量子位]] 发布中文报道