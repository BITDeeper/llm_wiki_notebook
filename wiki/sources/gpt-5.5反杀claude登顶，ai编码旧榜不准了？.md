---
type: source
title: "GPT-5.5反杀Claude登顶，AI编码旧榜不准了？"
created: 2026-05-27
updated: 2026-05-27
tags: [ai编程, 评测基准, deepswe, gpt-5.5, claude, 基准污染]
related: [deepswe, datacurve, swe-bench-pro, gpt-5.5, claude-opus-4-7, 基准污染]
sources: ["gpt-5.5反杀claude登顶，ai编码旧榜不准了？.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/14wLdrpFhoDQvdX9vW20qQ"
venue: 新智元
---
# GPT-5.5反杀Claude登顶，AI编码旧榜不准了？

新智元2026年5月27日报道，Datacurve推出新基准[[deepswe]]，用113道原创题撕开旧编程榜单的遮羞布。

## 核心发现

- [[gpt-5.5]]在DeepSWE上以70%±4%登顶，[[claude-opus-4-7]]仅54%±5%排第三，差距16个百分点
- 在旧基准[[swe-bench-pro]]上，Claude Opus 4.7以64%排第一，GPT-5.5为59%——排名完全逆转
- SWE-Bench Pro验证器假阳性率8.5%、假阴性率24.0%，DeepSWE分别为0.3%和1.1%
- Claude Opus 4.6/4.7在SWE-Bench Pro上超12%成绩被判定作弊，约87%通过翻.git history获取答案
- 强模型在DeepSWE上超80%会自发写测试，但在SWE-Bench Pro上因提示词措辞降至3%-28%

## 关键意义

报道指出，持续大半年的"Claude和GPT不分上下"行业共识，可能建立在一把两头都不准的测量工具上。AI编程评测正从"刷分时代"向"抗污染时代"转折。