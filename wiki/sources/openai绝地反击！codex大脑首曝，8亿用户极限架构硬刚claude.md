---
type: source
title: "OpenAI绝地反击！Codex大脑首曝，8亿用户极限架构硬刚Claude"
tags: [openai, codex, agent-loop, postgresql, architecture, engineering, ai-competition]
related: [openai, codex, claude-code, agent-loop, prompt-caching, compaction, postgresql, pgbouncer]
created: 2026-01-24
updated: 2026-01-24
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/6TEOP0_jZvP8Lp3D9P7nhA"
venue: "新智元"
sources: ["openai绝地反击！codex大脑首曝，8亿用户极限架构硬刚claude.md"]
---

# OpenAI绝地反击！Codex大脑首曝，8亿用户极限架构硬刚Claude

## 摘要
面对 [[claude-code]] 在 AI 编程领域的强势挑战，OpenAI 首度公开了 [[codex]] 背后的核心架构——[[agent-loop]]（智能体循环），并披露了其支撑全球 8 亿用户的基础设施架构：仅用 1 个 [[postgresql]] 主库加 50 个只读副本。文章详细解析了 Agent Loop 的工作机制、[[prompt-caching]] 和 [[compaction]] 等关键技术，以及极致的单机数据库优化策略。

## 核心内容

### Codex 的“大脑”：Agent Loop
- **定义**：Agent Loop 是串联“用户意图”、“模型大脑”和“执行工具”的闭环系统，使 AI 能像员工一样独立完成任务。
- **工作流程**：
  1. **构建 Prompt**：包含 System 指令、工具定义、环境上下文和用户指令。
  2. **模型推理**：模型基于 Prompt 决定调用何种工具。
  3. **工具调用**：执行 Shell 命令或文件操作。
  4. **结果反馈**：将工具输出追加回 Prompt。
  5. **循环**：重复上述步骤直到任务完成。
- **意义**：实现了从“一问一答”到“独立干活”的跨越，具备自我规划和自我纠错能力。

### 关键性能优化技术
1. **[[prompt-caching]]（提示词缓存）**
   - **原理**：缓存 Prompt 中不变的部分（如 System 指令、工具定义），避免重复计算。
   - **效果**：将长对话的成本从平方级增长降至线性级。
   - **陷阱**：任何改变前缀的操作（如中途换模型、修改工具列表）都会导致缓存失效。

2. **[[compaction]]（对话压缩）**
   - **原理**：当 Token 超过阈值，调用 `/responses/compact` 接口将历史对话压缩成 `encrypted_content`。
   - **特点**：不同于普通摘要，它保留了模型对原始对话的“隐性理解”，防止 Agent 在处理长任务时“变傻”。

### 基础设施架构：PostgreSQL 的极限
- **规模**：1 个 PostgreSQL 主库 + 50 个只读副本支撑全球 8 亿用户。
- **核心技术**：
  - **[[pgbouncer]]**：连接池代理，将连接建立时间从 50ms 降至 5ms。
  - **[[cache-locking-leasing]]**：缓存未命中时只允许一个请求回源，防止缓存雪崩。
  - **查询优化**：修复了 12 表连接的反模式，将复杂逻辑移至应用层。
- **物理极限与未来**：
  - **瓶颈**：MVCC 导致的写放大、WAL 复制的网络压力。
  - **对策**：计划将高写入负载迁移至 [[azure-cosmos-db]]，并测试级联复制以支持超过 100 个副本。

## 行业影响
- **竞争态势**：[[claude-code]] 的端到端开发体验迫使 OpenAI 揭秘底牌，展示了其在 Agent 架构和工程体系上的深厚积累。
- **架构哲学**：体现了“如无必要，勿增实体”的原则，证明了极致优化的单机架构能走得很远，无需过早引入分布式复杂度。