---
type: source
title: "开源编程语言Zig，向AI代码说「不」"
created: 2026-05-31
updated: 2026-05-31
tags: [开源, 编程语言, ai代码禁令, zig, 社区治理]
related: [zig, andrew-kelley, ai代码禁令, bun, peter-steinberger]
sources: ["开源编程语言zig，向ai代码说「不」.md"]
authors: [机器之心编辑部]
year: 2026
url: "https://mp.weixin.qq.com/s/djvUL7RyOh-EGUme6jMmBg"
venue: 机器之心
---
# 开源编程语言Zig，向AI代码说「不」

本文报道了开源编程语言 [[zig]] 全面禁止 AI 生成代码贡献的政策及其背后的社区治理哲学。

## 核心内容

- [[andrew-kelley]] 在 JetBrains 播客节目中将 AI 辅助贡献称为"垃圾"，认为其占用有限的代码审查时间，产生"负价值"
- Zig 项目当时有 200 个未处理的 pull request，[[审查瓶颈]] 是禁令的直接现实动因
- Kelley 强调 [[传帮带]] 是项目核心使命，AI 贡献与此目标相悖
- 全面禁止比逐案判断更易执行——"一律不接受"消除了审查者的主观判断负担
- [[bun]] 创建者 [[jarred-sumner]] 使用 [[claude-code]] 动态工作流将 Bun 从 Zig 移植到 Rust，形成强烈反差
- [[qemu]]、[[netbsd]]、[[obs-studio]] 等项目也采取了类似禁令
- [[peter-steinberger]] 对此表示质疑："LLM 连找 bug 都不可以吗？"

## 关键引用

> "有人给我们提交完全没有价值的贡献。它们甚至是负价值，因为会占用团队有限的代码审查时间。" —— Andrew Kelley

> "我们都在努力变成更好的程序员。那些提交 AI pull request 的人，并没有帮助实现这个目标。" —— Andrew Kelley