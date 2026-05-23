---
type: concept
title: HTML替代Markdown论
created: 2026-05-12
updated: 2026-05-12
tags: [html, markdown, 格式之争, ai工作流, vibe-coding]
related: [ai原生格式, vibe-coding, claude-code, thariq-trq212, andrej-karpathy, 输入输出心智融合]
sources: ["markdown要凉…卡帕西也站html了.md"]
origin_date: 2026-05-11
---
# HTML替代Markdown论

由 [[anthropic]] 工程师 [[thariq-trq212]] 于 2026 年 5 月提出的论点，主张在 AI 原生工作流中 HTML 应全面取代 Markdown 成为默认的人机交互格式。[[andrej-karpathy]] 随后附议并扩展了这一观点。

## 背景

[[vibe-coding]] 的普及使 Markdown 成为 AI 编程工作流中的默认格式。但随着 AI 生成文档的复杂度增加，MD 的信息表达能力和可读性瓶颈日益凸显——Claude Code 用 ASCII 码画流程图、用 Unicode 色块"估算颜色"等现象成为常态。

## 五项核心论据

| 维度 | Markdown | HTML |
|------|----------|------|
| 信息密度 | 标题、加粗、列表、代码块 | 表格、CSS、SVG、JS交互、Canvas、绝对定位 |
| 可读性 | 超100行几乎无人阅读 | 标签页、导航、折叠区块、响应式布局 |
| 分享成本 | 需附件+渲染工具 | 上传S3，浏览器直接打开 |
| 交互能力 | 无 | 滑块、拖拽看板、实时预览编辑器 |
| 体验 | 枯燥 | 有趣，激发更高投入 |

## 反方论据

- **Token 成本** — HTML 消耗约为 MD 的 1.7 倍（年成本从 $6600 增至 $11000）
- **生成时间** — 约为 MD 的 2-4 倍
- **版本控制** — HTML diff 噪音大，难以 review，目前无完美解决方案
- **社区质疑** — 被调侃为"Anthropic 榨干 usage 的阴招"

## 与 Karpathy 观点的差异

[[andrej-karpathy]] 的附议角度更为宏观：他将 HTML 视为输出进化路线（纯文本→MD→HTML→交互式视频）的中间站，而非最终形态。同时提出输入端也需要进化（文字→语音→指向性交互），形成 [[输入输出心智融合]] 的完整框架。

## 深层意义

这一争论的本质是 [[ai原生格式]] 问题：当 AI 成为内容的主要生产者和消费者时，文件格式应围绕 AI+人类的混合需求设计，而非纯粹的人类便利。这与 [[认知哥白尼革命]] 的哲学框架相呼应。