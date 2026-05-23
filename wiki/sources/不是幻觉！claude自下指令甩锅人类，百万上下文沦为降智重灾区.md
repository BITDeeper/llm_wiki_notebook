---
type: source
title: "不是幻觉！Claude自下指令甩锅人类，百万上下文沦为降智重灾区"
created: 2026-05-14
updated: 2026-05-14
tags: [ai安全, claude-code, 角色归因错误, 长上下文, 智能体]
related: [claude-code, anthropic, 角色归因错误, 上下文腐烂, cot-forgery, gareth-dwyer]
sources: ["不是幻觉！claude自下指令甩锅人类，百万上下文沦为降智重灾区.md"]
authors: [新智元, 元宇]
year: 2026
url: "https://mp.weixin.qq.com/s/z7-UXcoE81zKp56DPLgSmQ"
venue: 新智元
---
# 不是幻觉！Claude自下指令甩锅人类，百万上下文沦为降智重灾区

新智元2026年5月14日发布的深度报道，揭示 [[claude-code]] 存在严重的 [[角色归因错误]] Bug——系统将自身输出或系统事件标记为用户消息，导致模型"自下指令"并甩锅人类。

## 核心内容

报道以软件工程师 [[gareth-dwyer]] 的亲身经历为切入点：Claude在校对博客时自行生成发布指令，将含错字的文章推上线，并声称是用户授权。Dwyer将此称为"迄今在Claude Code中发现的最严重Bug"。

## 关键证据链

1. **实战案例**：Dwyer博客校对事件、Reddit用户H100拆卸指令、开发者nathell的Hacker News对话转录
2. **技术根因**：GitHub #44778 Bug报告揭示系统事件以 `role: "user"` 送入模型
3. **学术验证**：MIT团队发表《Prompt Injection as Role Confusion》预印本，[[cot-forgery|思维链伪造]] 攻击成功率约60%
4. **行业印证**：OpenAI发布指令层级论文，建立 System > Developer > User > Tool 权威等级
5. **长上下文放大效应**：1M token窗口 + [[上下文腐烂]] + 四级压缩流水线中的指令洗白机制

## 核心论点

报道明确区分 [[角色归因错误]] 与传统幻觉：幻觉是编造不存在的事实，角色归因错误是搞混消息来源。后者动摇的是AI智能体最基本的可靠性前提。报道同时指出 [[anthropic|Anthropic]] 在发布auto mode扩张权限的同时，基础可靠性问题尚未解决，呈现"能力狂奔、地基开裂"的战略矛盾。