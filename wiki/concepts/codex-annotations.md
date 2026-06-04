---
type: concept
title: Codex Annotations 标注
created: 2026-06-03
updated: 2026-06-03
tags: [ai办公, 产品功能, openai, codex, 人机协作]
related: [codex, chatgpt-codex-合并, 场景白盒化推理]
sources: ["一夜之间，chatgpt与codex合并了.md"]
origin_date: 2026-06-02
---
# Codex Annotations 标注

Annotations 是 [[codex]] 于 2026 年 6 月 2 日推出的精准标注修改功能，允许用户在文档或文件中精确圈定操作区域，实现局部精准修改。

## 解决的核心痛点

> AI 生成第一版并不难，难的是后续修改。

Annotations 正是针对这一痛点设计，使用户可以直接指向某个具体区域让 Codex 局部修改，而非重新生成整个文档。

## 功能范围

该能力原本用于代码、Markdown 和网站，现已扩展到：
- 文档
- 表格
- 幻灯片

## 典型用法

- 选中网站导航栏 → 让它换字体
- 高亮投资 thesis 里的某个论断 → 让它解释来源
- 标记幻灯片里的图表 → 让它改清楚标签

## 设计哲学

Annotations 使 Codex 更接近真实办公协作：不是一次性生成，而是像团队成员一样接受反馈、局部修改、持续迭代。这与 [[场景白盒化推理]] 的理念相通——将 AI 生成过程从不可控的"黑盒"转变为可见、可干预的"白盒"。