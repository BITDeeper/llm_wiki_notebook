---
type: source
title: "1个月干完15个月！Claude Mythos猎杀271个漏洞，有的藏了20年"
created: 2026-05-20
updated: 2026-05-20
tags: [ai-security, vulnerability-discovery, anthropic, firefox, mythos]
related: [claude-mythos, project-glasswing, agentic-harness, ai安全漏洞挖掘, anthropic, openai]
sources: ["1个月干完15个月！claude-mythos猎杀271个漏洞，有的藏了20年.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/E2Pi9ranPhrxvBGAAjdZbg"
venue: 新智元
---
# 1个月干完15个月！Claude Mythos猎杀271个漏洞，有的藏了20年

新智元关于 [[claude-mythos]] 与 Mozilla Firefox 合作进行大规模安全漏洞挖掘的深度报道。

## 核心内容

报道记录了 Firefox 团队利用 [[claude-mythos|Claude Mythos Preview]] 在 2026 年 4 月单月修复 423 个安全漏洞的里程碑事件，超过此前 15 个月的总和。其中 Mythos 直接发现 271 个漏洞（180 高危、80 中危、11 低危），包含多个 [[沙箱逃逸]] 漏洞。最老的漏洞已在代码中潜伏 20 年。

## 关键信息

- **合作时间线：** 2026 年 2 月开始合作，最初使用 Claude Opus 4.6；4 月切换至 Mythos Preview
- **工程方法：** Firefox 团队构建了 [[agentic-harness]] 流水线，核心流程为发现→动态验证→去重分诊→跟踪修复
- **行业对峙：** [[anthropic]] 推出 [[project-glasswing|Project Glasswing]] 走封闭路线，[[openai]] 发布 GPT-5.4/5.5-Cyber 走开放路线
- **人力投入：** 超过 100 名工程师参与修复，AI 补丁仅作参考不能直接部署

## 关键引用

- Firefox 安全工程师 [[brian-grinstead|Brian Grinstead]]："Mythos 找到的沙箱逃逸漏洞数量，已经超过了人类安全研究员的总和"
- "模型在飞速变强，工程师在飞速学会怎么用它。两条曲线一相乘，结果就是 Firefox 这一个月 423 这个夸张的数字"