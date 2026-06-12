---
type: entity
title: Gemini 3.5 Live Translate
created: 2026-06-11
updated: 2026-06-11
tags: [实时翻译, 语音对语音, gemini, 谷歌产品]
related: [谷歌, gemini, gemini-3-pro, google-deepmind, jeff-dean, grab, google-meet, google-translate]
sources: ["rss/谷歌干掉了「等你说完才翻译」！70+语言边听边译.md"]
origin_date: 2026-06-11
---
# Gemini 3.5 Live Translate

Google 于2026年6月11日发布的实时语音对语音翻译模型，核心突破是将翻译从"等你说完再翻"的级联式模式推进到[[实时同声传译|边听边译]]模式。

## 技术规格

- **基座模型**：[[gemini-3-pro|Gemini 3 Pro]]
- **音频上下文**：128K token
- **语言支持**：70+语言，全自动识别（含中途切换）
- **延迟**：几秒级（具体数值未公开）
- **声音保留**：保留说话人语速、音高、语调
- **抗噪能力**：菜市场、机场、马路边等嘈杂环境可用

## 评测体系

Google内部定义三指标评测标准：
1. **翻译质量** — 准确性
2. **延迟** — 与说话人的时间差
3. **语音自然度** — 输出语音的流畅度和韵律

核心KPI从"翻得对"转向"聊得顺"。

## 落地路径

三线并行发布：
- **开发者**：Gemini Live API 和 Google AI Studio 公测，当日可用
- **企业**：[[google-meet|Google Meet]] 私测（2026年6月启动），从5种语言扩展至70+，单场会议支持2000+语言组合
- **消费者**：[[google-translate|Google Translate]] 安卓/iOS全球上线，左下角"实时翻译"入口

安卓独有"聆听模式"：手机贴耳即可从听筒接收译音。

## 真实场景验证

- [[grab|Grab]]：东南亚出行平台，月超1000万通语音电话，司机说本地话、乘客听母语
- CJ ENM、LiveKit 等企业已提前试用
- Agora、Fishjam、LiveKit 等平台已接入 Gemini Live API

## 已知局限

- 仅支持音频输入（不支持视频）
- 重口音场景下声音复刻可能不稳定
- 快速来回切换语言时可能出错
- 多人抢话场景处理有限
- 长时间停顿后声音复刻可能不稳

## 战略意义

谷歌选择"嵌入现有产品矩阵"（Translate/Meet/API）而非打造独立超级应用的路线，与 [[openai|OpenAI]] 的 [[超级应用战略]] 形成鲜明对比。Google翻译项目跨度20年（约2006-2026），从文本翻译→拍照翻译→实时语音同传的三阶段演进，体现了 [[ai全球公用事业叙事]] 的基础设施定位——每月为数十亿用户翻译超一万亿单词。