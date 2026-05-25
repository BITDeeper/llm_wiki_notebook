---
type: source
title: "Anthropic三张底牌全翻了！Mythos 1首次现身，Opus 4.8曝光"
created: 2026-05-24
updated: 2026-05-24
tags: [anthropic, claude, mythos, 模型泄露, ai竞赛]
related: [anthropic, claude-opus-4.8, claude-sonnet-4.8, mythos-1, claude-security, claude-code]
sources: ["anthropic三张底牌全翻了！mythos-1首次现身，opus-4.8曝光.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/77A38l8_iyaVA7u7wL6-7w"
venue: 新智元
---
# Anthropic三张底牌全翻了！Mythos 1首次现身，Opus 4.8曝光

新智元报道，2026年5月24日发布。

## 核心内容

本报道揭示了 Anthropic 三线并进的产品发布策略：[[claude-opus-4.8]] 在 Google Vertex AI 后台被发现、[[claude-sonnet-4.8]] 通过51万行泄露源码提前曝光、[[mythos-1]] 在 Claude 界面短暂现身并从受限研究工具转向商业化产品。

## 关键发现

- **Opus 4.8**：在 Google Vertex AI 模型列表中出现标识，延续此前 Opus 4.6、4.7 先在后端被发现再正式公布的规律。
- **Sonnet 4.8**：跳过 4.7 版本直接升级，预计带来视觉、编程、推理、分词器四大升级，但 Token 消耗增加约30%。
- **Mythos 1**：Anthropic 发布首份战果报告（发现10000个高危漏洞），源码新增 [[claude-code]] 和 [[claude-security]] 字符串，态度从"太危险不公开"转向"期待通用发布"。
- **Claude Security**：全新企业级安全产品，包含安全仪表盘，展示漏洞发现与修复。

## 竞争背景

OpenAI 下一代 GPP-5.6 现身，谷歌 Gemini 3.5 Pro 预计2026年6月发布，三巨头 ASI 终极竞赛加速。

## 泄露事件

2026年3月31日，Claude Code npm 更新（v2.1.88）因未在 `.npmignore` 中排除 `.map` 文件，导致59.8MB、51.2万行 TypeScript 代码被推送到 npm 公共仓库。Claude Code 之父 [[boris-chemy]] 确认为"普通开发者失误"。