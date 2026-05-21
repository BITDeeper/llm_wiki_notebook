---
type: entity
title: Stella Laurenzo
tags: [amd, 证人, 吹哨人, ai-工程, 人物, 审计, 性能分析, person, ai-engineering, data-analysis]
related: [claude-opus-4-6, ai缩水, claude-code, anthropic, claude-opus, 模型降智, 读改比, adaptive-thinking]
created: 2026-04-09
updated: 2026-05-08
sources: ["claude-opus-4.6差评如潮！思考深度暴跌67%，amd总监6852次日志打脸.md", "claude降智实锤了！还变相涨价，opus跌下神坛.md", "“claude-code更新废了”！热议issue：思考深度下降67%，已无法胜任复杂的工程任务.md", "claude降智实锤了！还变变相涨价，opus跌下神坛.md"]
---

# Stella Laurenzo

## 身份
AMD AI 高级总监，负责开源 AI 软件开发工作。

## 核心贡献：Claude 性能审计
在 [[Claude Opus 4.6]] 与 [[claude-code]] 的“降智”争议中，Laurenzo 通过详尽的数据审计，成为证实 [[Anthropic]] 旗下模型性能显著下降（即 [[模型降智]]）的关键人物。

她通过对 GitHub 公布的日志进行深度分析，为开发者感知到的性能下降提供了关键的量化证据。

### 审计范围
- **数据来源**：基于 `~/.claude/projects/` 目录下 4 个项目（[[iree-loom]]、[[iree-amdgpu]]、[[iree-remoting]]、[[bureau]]）的 **6852** 个会话 JSONL 文件。
- **分析维度**：
  - **17871** 个思考块
  - 超过 **23 万**（234,760）次工具调用
  - **18000+** 条用户提示词
- **统计手段**：使用皮尔逊相关分析（系数高达 0.971），证明了 `signature` 字段可精准估算思考深度。

### 关键发现
通过分析上述数据，Laurenzo 发现从 2026 年 2 月份开始，Claude 模型的推理深度出现了断崖式下滑，具体表现为：

- **思考深度**：证实下降了 **67%**（从约 2200 字符降至 700 字符）。
- **行为模式退化**：
  - 模型行为从严谨的“研究-修改”模式退化为莽撞的“直接修改”模式。
  - 代码阅读次数从 6.6 次降至 2.0 次（[[读改比]]恶化）。
- **任务表现**：在处理复杂工程任务时不再可靠，频繁出现逻辑断层或无法理解复杂指令的情况，倾向于用最简单的修补方案应付差事，而非深入解决问题。
- **成本影响**：API 成本因模型浅层思考导致的错误重试而暴增 **80 倍**。

## 结论与影响
基于数据得出结论：“对复杂的工程任务而言，Claude 已经不能用了。”

这一发现为用户关于 Claude “变傻”的质疑提供了坚实的数据支持，并结合 [[BridgeBench]] 的基准测试数据，形成了对 Anthropic “降智”指控的实锤。该事件最终促使 AMD 更换了供应商，并引发了社区对 [[adaptive-thinking]] 和 `redact-thinking` 功能的广泛争议。