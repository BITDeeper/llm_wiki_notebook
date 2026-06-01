---
type: entity
title: Jarred Sumner
created: 2026-04-15
updated: 2026-05-31
tags: ["anthropic", "engineering", "bun", "人物", "开发者", "rust", "zig", "程序员", "开源", "ai编程"]
related: ["claude-code", "anthropic", "boris-cherny", "dynamic-workflows", "claude-opus-4-8", "bun", "zig", "andrew-kelley"]
sources: ["5分钟缓存清零，性能打1折！集体声讨claude，cc之父紧急回应.md", "刚刚，claude-opus-4.8来了！两个史上首次改写历史.md", "开源编程语言zig，向ai代码说「不」.md"]
---

# Jarred Sumner

Jarred Sumner 是 [[bun]] 的创建者，原使用 [[zig]] 语言开发 Bun。在 Bun 被 [[anthropic]] 收购后，他成为 Anthropic 的工程师。他因使用 [[claude-code]] 的 [[dynamic-workflows]] 功能完成了一次里程碑式的大规模代码迁移而受到广泛关注。

## Bun 迁移案例

2026 年 5 月，Sumner 使用 Dynamic Workflows 将 Bun 从 Zig 语言整体重写为内存更安全的 Rust：

- **规模**：约 75 万行 Rust 代码
- **时间**：从第一次提交到合并仅 11 天
- **质量**：99.8% 的原有测试通过
- **过程**：一个 workflow 先标好每个结构体字段对应的 Rust 生命周期，下一个 workflow 逐文件翻译，几百个 agent 同时开工，每份文件配两个审查员，再用修复循环驱动编译和测试直到全绿

### 行业影响

这场迁移产生了六千多次提交，几乎没有经过人类逐行审查。社区对此反应强烈，既惊叹于 AI 编程的效率飞跃，也引发了对人类审查缺位风险的讨论。这一案例标志着 AI 编程从辅助工具正式进入工程主力阶段。

### 与现有概念的张力

Bun 迁移案例与 [[认知投降]] 和 [[高阶幻觉]] 概念形成张力——六千多次提交几乎未经人类逐行审查，效率提升的同时暴露了人类监督缺位的风险。

### 与 Andrew Kelley 的路线对比

Sumner 的路径与 [[andrew-kelley]] 形成鲜明对比：前者全面拥抱 AI 工具并完成跨语言迁移，后者（Zig 语言创始人）坚持禁止任何 AI 生成代码。这一对比是 AI 时代开源社区路线分歧的典型案例。

## 在缓存争议中的角色

在 [[claude-code]] 的缓存 TTL 争议中，他试图从技术成本角度为 5 分钟 TTL 策略辩护。

### 技术观点

- **一次性调用理论**：他认为 5 分钟 TTL 对整体而言"更便宜而不是更贵"。
- **理由**：他声称相当一部分 [[claude-code]] 请求是一次性调用（如 subagent 调用），缓存上下文只用一次就不再访问。对于这类请求，使用 1 小时 TTL 反而浪费了 2 倍的写入成本（[[prompt-caching]] 的写入成本高于读取）。

### 争议点

他的解释虽然符合特定场景下的技术逻辑，但与用户提供的实际数据（2 月份 1 小时 TTL 下的低浪费率）存在出入，导致部分用户认为 Anthropic 的默认策略并未针对真实工作流进行优化。