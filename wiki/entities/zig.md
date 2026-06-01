---
type: entity
title: Zig
created: 2026-05-31
updated: 2026-05-31
tags: [编程语言, 开源, 系统编程, ai代码禁令]
related: [andrew-kelley, bun, ai代码禁令, qem-u, netbsd, obs-studio]
sources: ["开源编程语言zig，向ai代码说「不」.md"]
origin_date: 2016-01-01
---
# Zig

Zig 是一门开源的现代系统编程语言，由非营利组织及一批贡献者共同维护。其设计目标是替代 C 语言，提供更好的安全性、性能和可读性。

## AI 代码禁令

Zig 是开源社区中明确禁止 AI 生成代码贡献的代表性项目。其行为准则（https://ziglang.org/code-of-conduct/）规定：

- 不接受任何由大语言模型生成的代码内容
- 不接受由大语言模型改写、润色、编辑、头脑风暴或调试过的内容
- 政策逻辑：全面禁止比逐案判断更易执行

创建者 [[andrew-kelley]] 将 AI 辅助贡献称为"垃圾"和"负价值"，理由包括：

1. **审查资源浪费**：项目有 200 个未处理的 pull request，AI 生成的低质量 PR 挤占了有限的审查资源
2. **[[传帮带]] 使命**：培养更好程序员是项目核心目标，AI 贡献者多为 [[路过型贡献者]]，不会真正加入核心团队
3. **伪装识别**：部分贡献者试图通过清洗聊天记录伪装非 AI 使用，但审查者仍能识别

## 生态关系

- [[bun]]：用 Zig 开发的 JavaScript 运行时工具，后被 [[anthropic]] 收购，创建者 [[jarred-sumner]] 使用 [[claude-code]] 将其从 Zig 移植到 Rust，形成与 Zig 反 AI 立场的强烈反差
- 同类禁令项目：[[qemu]]、[[netbsd]]、[[obs-studio]]

## 行业定位

在 AI 编程工具（[[claude-code]]、[[codex]]）席卷行业的背景下，Zig 代表了一股"反 AI 代码"的开源子潮流，其立场与 [[tokenmaxxing]] 和 [[vibe-coding]] 趋势形成鲜明对立。