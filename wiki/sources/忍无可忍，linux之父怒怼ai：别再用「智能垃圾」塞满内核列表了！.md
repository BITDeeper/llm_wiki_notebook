---
type: source
title: "忍无可忍，Linux之父怒怼AI：别再用「智能垃圾」塞满内核列表了！"
created: 2026-06-03
updated: 2026-06-03
tags: [ai安全, linux内核, 开源治理, 网络安全, anthropic, claude-mythos]
related: [linus-torvalds, claude-mythos, project-glasswing, 认知ddos, 过客式报告, ai安全噪音危机-2026]
sources: ["忍无可忍，linux之父怒怼ai：别再用「智能垃圾」塞满内核列表了！.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/Exfbq26B5iVHzyuxkR7T8Q"
venue: 新智元
---
# 忍无可忍，Linux之父怒怼AI：别再用「智能垃圾」塞满内核列表了！

新智元2026年6月3日发布的深度报道，聚焦2026年4-5月AI信息安全领域的多重危机。

## 核心内容

文章揭示了两条并行叙事线：

1. **开源安全治理瘫痪**：[[linus-torvalds]] 在5月17日每周内核状态更新中明确表示，Linux内核安全邮件列表因AI批量漏洞报告而"几乎完全无法管理"。大量安全赏金猎手使用相似AI工具扫描同一代码，产生大量重复、低质量报告，形成[[过客式报告]]现象，导致[[认知ddos]]。

2. **AI攻防能力质变**：[[anthropic]] 的 [[claude-mythos]] 网络安全前沿模型展现出将多个低严重性漏洞串联为高危利用的能力，Anthropic因此主动搁置发布并启动 [[project-glasswing]] 合作计划。[[cloudflare]] CISO Grant Bourzikas公布了50多个生产仓库的测试结果。

## 关键论点

- 问题不在AI工具本身，而在使用方式——Linus原话"随意使用它们，但要用得有成效"
- [[零成本发现与高成本审计的不对称]]是结构性矛盾
- 真正的解法是[[安全架构重构三层原则]]，而非压缩响应时间
- 2026年4-5月是AI信息安全的"水门事件级窗口"

## 参考来源

- The Register 对 Linus Torvalds 声明的报道
- Cloudflare 官方博客关于 Cyber Frontier Models 的文章