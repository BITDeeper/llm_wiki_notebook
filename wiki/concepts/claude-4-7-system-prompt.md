---
type: concept
title: "Claude 4.7 系统提示词"
created: 2026-05-17
updated: 2026-05-17
tags: [system-prompt, claude, anthropic, ai行为治理, 透明度]
related: [anthropic, simon-willison, tool-search, acting-vs-clarifying, ai工作操作系统, 任务执行范式, 场景白盒化推理]
sources: ["23个隐藏工具曝光！anthropic公开claude驯化手册.md"]
origin_date: 2026-04-18
---
# Claude 4.7 系统提示词

Claude 4.7 的系统提示词（system prompt）是 [[anthropic|Anthropic]] 公开的控制模型行为、语气、拒绝策略的底层指令文本。由 [[simon-willison|Simon Willison]] 进行了逐行对比分析。

## 核心变化

### 新增机制

- **[[tool-search|工具搜索]]**：要求 Claude 在声称"做不到"之前先搜索可用工具，支持扩展到数百甚至数千工具
- **[[acting-vs-clarifying|行动优先于澄清]]**：要求 Claude 在面对模糊需求时直接执行而非反复追问，标志着从"对话助手"向"自主执行者"的转变
- **回复风格精简**：要求回复保持聚焦和简洁，避免信息过载
- **不再强行续聊**：用户表示结束对话时不再请求继续互动

### 安全升级

- 儿童安全被包裹在 `critical_child_safety_instructions` 标签中，优先级显著提升
- 饮食失调首次被单独处理，禁止提供精确的营养、饮食或运动建议
- 新增抗截图诱导防御：允许拒绝就复杂争议问题给出"是/否"简短回答

### 删除的规则（模型进化证据）

- 删除禁止星号动作表达（如"若有所思地点头"）的规则——行为问题已在训练层面修复
- 删除禁止"说真的、老实说、直截了当地说"等口头禅的规则——不再需要外部矫正
- "developer platform"更名为"Claude Platform"——平台定位不再只面向开发者

## 行业意义

Anthropic 是目前唯一持续公开聊天产品 system prompt 的头部 AI 实验室。OpenAI、Google、Meta 均不公开聊天产品的 system prompt。这一透明度实践与 [[场景白盒化推理]] 理念高度契合，让用户得以从文本层面追踪 AI 的"驯化"过程。

## 版本演进

Claude 3 → 3.5 → 3.7 → 4 → 4.1 → 4.5 → 4.6 → 4.7，system prompt 逐版累积变化构成完整的进化轨迹，近两年的公开历史构成了一部 Claude 的微型进化史。