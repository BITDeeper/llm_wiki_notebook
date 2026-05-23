---
type: event
title: AISI发布Cyber能力评测报告
created: 2026-05-14
updated: 2026-05-14
tags: [ai安全, 评测, 网络攻防, 里程碑]
related: [aisi-英国ai安全研究所, mythos, gpt-5.5, 自主网络攻击能力翻倍周期, token天花板效应, 评测滞后问题]
sources: ["cyber天花板被打穿！aisi实测mythos能力正以4.5月翻倍速冲向asi.md"]
origin_date: 2026-05-14
significance: high
participants: [aisi-英国ai安全研究所, anthropic, openai, mythos, gpt-5.5]
causes: [mythos, gpt-5.5]
effects: [自主网络攻击能力翻倍周期, token天花板效应, 评测滞后问题]
---
# AISI发布Cyber能力评测报告

**日期**：2026年5月14日
**发布机构**：[[aisi-英国ai安全研究所|AISI]]
**意义**：标志着AI网络攻防能力首次通过此前未破的靶场，且翻倍周期确认缩短至4.5个月

## 事件概述

英国AI安全研究所（AISI）发布前沿AI模型网络攻防能力评测报告，实测 [[anthropic|Anthropic]] 的 [[mythos|Mythos]] 和 [[openai|OpenAI]] 的 [[gpt-5.5|GPT-5.5]]。

## 核心结果

### The Last Ones 靶场（32步企业内网渗透链）
- **Mythos**：10次尝试，成功6次（最佳单次完整打穿32步）
- **GPT-5.5**：10次尝试，成功3次
- 人类专家基线：约20小时

### Cooling Tower 靶场
- 此前所有模型均未通过
- **Mythos首次攻破**：10次成功3次
- GPT-5.5未通过

### 翻倍周期
- 从2025年11月的8个月 → 2026年2月的4.7个月 → **2026年5月的4.5个月**
- [[metr|METR]] 独立交叉验证：4~4.2个月

## 关键发现

1. [[自主网络攻击能力翻倍周期|翻倍周期压缩至4.5个月]]
2. [[token天花板效应|瓶颈是Token而非智力]]
3. [[评测滞后问题|评测系统性滞后于模型迭代]]
4. AISI不确定这是孤立跳跃还是更陡的新趋势线

## 影响

- 为 [[dario-amodei|Dario Amodei]] "2026年激进加速"预测提供了实证支撑
- 直接反驳"Scaling Law撞墙论"
- 凸显AI安全治理与模型能力增长之间的缺口正在加速扩大