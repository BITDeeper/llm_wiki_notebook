---
type: source
title: "刚刚，Claude Mythos 5发布！5000万行代码1天搞定"
authors: [衡宇]
year: 2026
url: "https://mp.weixin.qq.com/s/xOm_f8iEmdHjiD9v3p3wFg"
venue: 量子位
tags: [anthropic, claude, mythos-5, fable-5, ai模型发布, 安全机制, agent]
related: [mythos-5, claude-fable-5, anthropic, claude-opus-4-8, ethan-mollick, 模型路由安全机制, 巫师到甲方范式]
created: 2026-06-10
updated: 2026-06-10
sources: ["rss/刚刚，claude-mythos-5发布！5000万行代码1天搞定.md"]
---
# 刚刚，Claude Mythos 5发布！5000万行代码1天搞定

量子位记者衡宇署名报道，记录 Anthropic 于 2026 年 6 月 10 日正式发布有史以来最强旗舰模型的双版本策略。

## 核心内容

Anthropic 将旗舰模型分为两个版本同时发布：

- **Claude Fable 5**：加了安全防护网的公开版，面向所有用户开放。背后挂载独立分类器，检测到高风险请求（网络安全、生化、模型蒸馏）时自动降级至 [[claude-opus-4-8|Claude Opus 4.8]]。
- **Claude Mythos 5**：满血版，解除网络安全等领域安全限制，仅限受信任用户使用。

## 关键基准数据

- **SWE-bench Pro**：Fable 5 得分 80.3%，GPT-5.5 为 58.6%
- **Frontier Code**（Cognition）：中等推理强度下前沿模型最高分
- **GDPpdf**：Fable 5/Mythos 5 得分 29.8%，Opus 4.8 为 22.5%，GPT-5.5 为 24.9%，Gemini 3.1 Pro 为 16.7%
- **Hex 核心分析基准**：首次突破 90% 大关，比 Opus 提升 10 个百分点
- **ViBench**（端到端前端开发）：基础开发用例接近饱和

## 企业实测案例

- [[stripe|Stripe]]：5000 万行 Ruby 代码库迁移，Fable 5 一天完成（人工需两个多月）
- IMC/Optiver 量化交易分析评估：几乎拿满全部权重，多次运行结果完全一致

## 科研突破

- Mythos 5 设计 14 个蛋白质靶向复合物，9 个进入真实药物研发管线
- 基因组学研究：Mythos 5 自主工作一周多，训练的微型模型（体积小 100 倍）击败《Science》最新成果
- 物理研究：Fable 5 用 1/3 推理 Token、36 小时逼近 GPT-5.5 四天成绩

## 安全架构创新

Fable 5 采用[[模型路由安全机制]]——分类器检测高风险请求后自动降级至 Opus 4.8，而非直接拒绝。超过 95% 会话不触发降级。Mythos 级模型所有流量强制保留 30 天用于安全监控。

## 定价

API 统一定价：输入 $10/百万 Token，输出 $50/百万 Token。较预览版砍半但仍属高价。免费使用窗口至 2026 年 6 月 22 日。

## 学者体验

[[ethan-mollick|Ethan Mollick]] 提出[[巫师到甲方范式]]转变——人类从精雕 Prompt 的"巫师"变为只需提宏观需求的"甲方/赞助人"。9 小时自主运行测试中，Fable 5 自主生成 Agent 工作流完成复杂项目交付。

## 矛盾与张力

文章以"微笑"暗讽 Anthropic 6 月 4 日呼吁暂停 AI 研发后仅 6 天即发布最强模型的内部矛盾。