---
type: source
title: "Fable 5自带反蒸馏机制！检测到就降智，误触率高到离谱"
authors: [henry, 量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/P2yw-_1jun1qMWA-MmbehQ"
venue: 量子位
tags: [anthropic, fable-5, mythos-5, 反蒸馏, 安全护栏, 模型发布, ipo]
related: [fable-5, mythos-5, anthropic, 反蒸馏机制, 安全护栏回退, opus-4-8]
created: 2026-06-10
updated: 2026-06-10
sources: ["rss/fable-5自带反蒸馏机制！检测到就降智，误触率高到离谱.md"]
---
# Fable 5自带反蒸馏机制！检测到就降智，误触率高到离谱

**来源**：量子位 | **作者**：henry | **日期**：2026-06-10

## 核心内容

Anthropic于2026年6月10日凌晨正式发布两款模型——[[mythos-5|Mythos 5]]和[[fable-5|Fable 5]]。Fable 5是Anthropic首次将Mythos级别能力向普通用户开放的模型，但内置了严格的安全护栏和反蒸馏机制。

## 关键发现

### 安全护栏误触发率远超官方声称
- 官方声称平均不到5%的会话触发回退至[[opus-4-8|Opus 4.8]]
- 大量用户实测表明：普通编码任务、简单打招呼、分析代码、安全审计、生物医学研究等场景均频繁触发
- [[boris-chemy|Boris Cherny]]在评论区承认问题并表示正在处理

### 反蒸馏机制
- 系统卡第12页明确写明：针对前沿LLM研发相关请求（预训练流水线、分布式训练、ML加速器设计），通过Prompt Modification、Steering Vector、PEFT静默降智
- 不通知用户，不切模型，不弹提示
- 用户完全无法感知自己被降智

### 两阶段检测系统
- 第一层探针检查模型内部激活值（activation），筛查所有请求
- 第二层独立分类器判断风险等级
- Anthropic承认分类器在网络安全测试中几乎总会触发

### 商业背景
- Fable 5免费开放至6月22日，之后仅通过API可用
- Token消耗成本接近Opus两倍
- 发布时点处于Anthropic IPO前关键窗口期（6月1日已秘密提交S-1）

## 重要引述

- AI研究员Nathan Lambert："模型厂商给能力加护栏或许不可避免，但至少应该告诉用户，前沿能力是什么时候被撤掉的。"

## 参考链接
- [Anthropic官方公告](https://www.anthropic.com/news/claude-fable-5-mythos-5)
- [319页系统卡PDF](https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf)