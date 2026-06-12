---
type: event
title: Fable 5与Mythos 5正式发布
created: 2026-06-10
updated: 2026-06-10
tags: [anthropic, 模型发布, ipo, 安全护栏, 反蒸馏]
related: [fable-5, mythos-5, anthropic, opus-4-8, 反蒸馏机制, 安全护栏回退, 有条件释放]
sources: ["rss/fable-5自带反蒸馏机制！检测到就降智，误触率高到离谱.md"]
origin_date: 2026-06-10
participants: [anthropic, boris-chemy, andrej-karpathy, nathan-lambert]
causes: [anthropic-s1秘密提交-20260601]
effects: [fable-5, 反蒸馏机制, 安全护栏回退]
significance: high
---
# Fable 5与Mythos 5正式发布

2026年6月10日凌晨，[[anthropic|Anthropic]]正式发布预热许久的两款模型——[[mythos-5|Mythos 5]]（"神话"）和[[fable-5|Fable 5]]（"寓言"）。

## 发布背景

- **IPO窗口期**：Anthropic于6月1日秘密提交S-1文件，计划10月上市，此次发布处于IPO前关键展示期
- **竞争压力**：[[openai|OpenAI]]已于6月9日秘密递交S-1冲刺万亿IPO，两家进入[[双万亿ipo赛跑-2026q3|双万亿IPO赛跑]]

## 模型定位

### Fable 5（寓言）
- Mythos 5的安全护栏版本，首次将Mythos级别能力向普通用户开放
- 内置[[安全护栏回退|两阶段分类器]]和[[反蒸馏机制]]
- 免费开放至6月22日，之后仅通过API可用
- Token消耗成本接近[[opus-4-8|Opus 4.8]]两倍

### Mythos 5（神话）
- Anthropic有史以来最强大的旗舰模型
- 仅开放给Claude部分合作伙伴
- 不对普通用户开放

## 关键反应

- [[andrej-karpathy|Andrej Karpathy]]（刚入职Anthropic）：第一时间表示赞赏
- [[boris-chemy|Boris Cherny]]（Claude Code之父）：对新模型赞不绝口，后在评论区承认安全护栏误触发问题
- [[nathan-lambert|Nathan Lambert]]（AI研究员）：批评静默降智缺乏透明度

## 核心争议

1. **安全护栏误触发率远超官方声称**：官方称不到5%，用户实测远高于此
2. **反蒸馏机制的静默降智**：用户完全无法感知自己被降智
3. **性能宣传与实际可用性的鸿沟**：Fable 5在网络安全任务上实际等同于Opus 4.8
4. **IPO前商业动机质疑**：有条件释放被视为保护商业护城河而非纯粹的安全考量

## 战略意义

此次发布标志着Anthropic从"开放最强能力"转向[[有条件释放]]的战略转折，护城河首次被直接嵌入推理链而非外层API限制。这可能是AI行业模型保护策略从外层限制深入推理链内部的起点。