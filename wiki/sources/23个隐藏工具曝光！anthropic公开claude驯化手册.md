---
type: source
title: "23个隐藏工具曝光！Anthropic公开Claude驯化手册"
created: 2026-05-17
updated: 2026-05-17
tags: [anthropic, claude, system-prompt, ai透明度, 工具生态]
related: [anthropic, claude-4-7-system-prompt, simon-willison, tool-search, claude-design, ai工作操作系统]
sources: ["23个隐藏工具曝光！anthropic公开claude驯化手册.md"]
authors: [新智元, 元宇]
year: 2026
url: "https://mp.weixin.qq.com/s/25VojYRWgTJfFfV58JX3Hw"
venue: 新智元
---
# 23个隐藏工具曝光！Anthropic公开Claude驯化手册

本文对新发布的 [[claude-4-7-system-prompt|Claude 4.7 系统提示词]] 进行了深度分析，核心发现包括：

## 核心内容

- **[[simon-willison|Simon Willison]]** 对 Claude 4.7 的 system prompt 进行了逐行对比分析，挖掘出 23 个隐藏工具。
- Anthropic 是目前唯一持续公开聊天模型 system prompt 的头部 AI 实验室，自 2024 年 7 月 [[anthropic|Claude 3]] 发布起建立了近两年的公开历史。
- Claude 4.7 新增 [[tool-search|工具搜索]] 机制，要求模型在声称"做不到"之前先搜索可用工具，支持扩展到数百甚至数千工具。
- 新增 `acting_vs_clarifying` 行为范式，标志着 Claude 从"对话助手"向"自主执行者"的战略转向。
- 安全细节同步升级：儿童安全被包裹在 `critical_child_safety_instructions` 标签中；饮食失调首次被单独处理；新增抗截图诱导防御。
- 被删除的规则（如禁止星号动作表达、禁止"说真的"等口头禅）是模型在训练层面已修复特定行为问题的证据。
- [[claude-design|Claude Design]] 于 4.7 发布次日上线，导致 Figma 股价下跌约 6%。

## 关键论点

1. Anthropic 正在将 Claude 从"对话助手"调教为"自主执行者"
2. Claude 4.7 暗藏 23 个工具，覆盖八大场景
3. 删除的规则是模型进化的微观证据
4. Anthropic 的 prompt 公开实践是行业稀缺的透明度
5. 安全细节在能力扩张的同时同步升级