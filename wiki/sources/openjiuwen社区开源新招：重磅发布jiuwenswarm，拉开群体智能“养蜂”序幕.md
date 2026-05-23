---
type: source
title: "Source: openjiuwen社区开源新招：重磅发布jiuwenswarm，拉开群体智能“养蜂”序幕.md"
created: 2026-05-22
updated: 2026-05-22
sources: ["openjiuwen社区开源新招：重磅发布jiuwenswarm，拉开群体智能“养蜂”序幕.md"]
tags: []
related: []
---

# Source: openjiuwen社区开源新招：重磅发布jiuwenswarm，拉开群体智能“养蜂”序幕.md

## 关键实体

- **openJiuwen** — 组织（开源AI Agent平台社区）
  - 角色：核心主体，由华为支持，发布JiuwenSwarm
  - 维基状态：不存在，需新建

- **华为 / 华为2012实验室 / 华为云AgentArts团队** — 组织
  - 角色：openJiuwen的支持方和联合构建者
  - 维基状态：不存在

- **JiuwenSwarm** — 产品（蜂群智能体/多Agent协同框架）
  - 角色：本文核心发布物，全套开源
  - 维基状态：不存在，需新建

- **Kilo.ai团队** — 组织
  - 角色：PinchBench评测基准的发布者（外围提及）
  - 维基状态：不存在

- **PinchBench** — 数据集/评测基准
  - 角色：Agent综合能力评测基准，JiuwenSwarm在此取得SOTA
  - 维基状态：不存在

- **LOCOMO** — 数据集/评测基准
  - 角色：长期对话领域权威评测集，用于验证记忆机制
  - 维基状态：不存在

- **量子位** — 媒体
  - 角色：来源发布方
  - 维基状态：已存在

## 关键概念

- **Coordination Engineering（协同工程）** — 围绕"多Agent协同"的工程化范式，解决多智能体如何分工、协商、协作的问题。是继Prompt Engineering、Context Engineering、Harness Engineering之后的下一跳范式。本文核心理论主张。
  - 维基状态：不存在，需新建

- **Harness Engineering** — 围绕单Agent的工程化范式，涵盖轨迹管理、错误恢复、长程执行。本文将其定位为协同工程的前置阶段。
  - 维基状态：不存在，需新建

- **Agent Swarm（智能体蜂群）** — 多智能体团队的协同机制，支持自主分工、动态协商、多模型路由。
  - 维基状态：不存在

- **Swarm Skills** — 将团队协作最佳实践标准化封装为可复用的"团队级技能"。
  - 维基状态：不存在，与已存在的`办公技能框架`概念相关但不同

- **Swarm Skills Hub** — 团队技能的共享市场/开放生态。
  - 维基状态：不存在

- **Swarm Skills自演进** — 演进引擎从任务轨迹中自动反推可复用技能，在团队层和成员层同时进行自优化。
  - 维基状态：不存在，与已存在的`自进化架构`概念高度相关

- **HOTS（Human on the Swarm）** — 人作为Agent团队的指挥官，全局调度、实时观察、按需介入。
  - 维基状态：不存在

- **HITS（Human in the Swarm）** — 人作为团队中的一名成员，与Agent同队协作、沉浸式参与。
  - 维基状态：不存在

- **群体智能** — 多个各有所长的智能体通过协同不断进化的集体智能形态，本文的核心愿景。
  - 维基状态：不存在

- **多模型路由** — 针对不同Agent角色分配不同能力模型，减少负载、提升整体效果。
  - 维基状态：不存在

## 主要论点与发现

**核心主张：**
AI Agent领域的工程范式正从单Agent的Harness Engineering演进到多Agent协同的Coordination Engineering。openJiuwen通过JiuwenSwarm完成了这一范式主张的完整工程落地。

**关键论据：**
1. **评测数据**：JiuwenSwarm在PinchBench上以94.2%综合得分取得SOTA，超过OpenClaw（91.6%）近3个百分点，平均token消耗降低34.8%。
2. **记忆能力**：在LOCOMO评测集上记忆准确率达85%（使用8B模型），优于主流记忆系统。
3. **实战案例**：昇腾算子开发（多专家协同提升质量）、短视频创作（自演进沉淀经验）、狼人杀游戏（多模型路由+HOTS/HITS）、多学科课程辅导（人机沉浸协作）。

**证据强度：**
- 评测数据具有可量化性，但PinchBench和LOCOMO的权威性需独立验证（PinchBench由Kilo.ai发布，非广泛认知的行业标准）。
- 实战案例为定性展示，缺乏系统性对比实验。
- 文章为产品发布宣传性质，存在明显的营销语气。

## 与现有维基的联系

**直接关联：**
- `多agent协作架构` — JiuwenSwarm是该概念的具体工程实现，直接强化并扩展了此页面
- `自进化架构` — Swarm Skills自演进是此概念在多Agent团队层面的新实例
- `openclaw` — JiuwenSwarm在PinchBench上直接对标OpenClaw，是竞争关系
- `任务执行范式` — 从Harness到Coordination的演进是此概念的阶段性延伸
- `办公技能框架` / `模型-技能分离架构` — Swarm Skills是技能框架理念在多Agent团队级的新应用

**间接关联：**
- `agent-pack`（商汤）— 同为Agent工具包，但定位不同
- `1-n-agent调度` — JiuwenSwarm的HOTS模式是该概念的具体化
- `系统智能` — 群体智能是系统智能的子集/实现路径

## 矛盾与张力

- **与OpenClaw的竞争定位**：文章明确在PinchBench上对标OpenClaw并声称超越，但OpenClaw在维基中已有安全事故记录（删除用户收件箱），JiuwenSwarm是否解决了类似安全问题未提及。
- **营销vs实质**：文章使用大量修辞（"养蜂"、"蜂群"、"星辰大海"），但技术细节（如协同机制的具体算法、协商协议）披露有限。
- **"华为支持"的模糊性**：openJiuwen被描述为"华为支持的开源社区"，由华为2012实验室和华为云团队联合构建，但其独立性和治理结构不明确。

## 建议

**应创建的页面：**
1. `openjiuwen` — 实体页，记录开源社区背景、华为关系、核心产品线
2. `jiuwenswarm` — 实体/产品页，记录蜂群智能体的架构、组件、评测成绩
3. `coordination-engineering` — 概念页，记录从Prompt→Context→Harness→Coordination的范式演进链
4. `swarm-skills` — 概念页，记录团队级技能的封装、共享与自演进机制
5. `hots-hits` — 概念页，记录人机协同的两种核心模式

**应更新的页面：**
- `多agent协作架构` — 增加JiuwenSwarm作为具体实现案例
- `自进化架构` — 增加Swarm Skills自演进的双层演进机制（团队层+成员层）
- `任务执行范式` — 补充Harness Engineering→Coordination Enginee
