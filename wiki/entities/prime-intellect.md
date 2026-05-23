---
type: entity
title: Prime Intellect
tags: [ai-lab, open-source, infrastructure, ai实验室, 去中心化, 自主科研]
related: [intellect-3, prime-rl, verifiers, environments-hub, prime-sandboxes, opus-4-7, nanogpt速通基准, ai首次击败人类科研竞赛-20260515, 递归式自我改进]
created: 2025-12-10
updated: 2026-05-22
sources: ["只用512张h200！106b模型靠分布式rl杀出重围，全网开源.md", "ai第一次科研竞赛中击败人类！opus-4.7狂飙2930步创世界纪录.md"]
---

# Prime Intellect

去中心化 AI 研究实验室，致力于构建开放的超级智能技术栈并探索 AI 自主科研能力。其使命是将训练前沿模型的能力通过开源和云服务的形式交到每个人手中。

## 核心产品与贡献

### [[INTELLECT-3]]
- 106B 参数的 [[混合专家模型]]。
- 在数学、代码等基准上表现优异，完全开源权重和数据。

### [[PRIME-RL]]
- 自研的分布式强化学习框架。
- 采用"仅异步"策略，支持大规模 MoE 模型的训练。

### 基础设施生态
- **[[Verifiers]]**：用于构建 RL 环境与评测任务的开源工具库。
- **[[Environments Hub]]**：托管 RL 环境与评测的社区中心，包含 500+ 任务。
- **[[Prime Sandboxes]]**：基于 Rust 的高吞吐、安全代码执行系统。

## 自主科研实验

Prime Intellect 设计并执行了首个 AI 在科研竞赛中完全无人干预击败人类的实验。该实验将 [[opus-4-7]] 和 Codex（基于 [[gpt-5.5]]）放入 H200 GPU 集群，让它们自主进行 [[nanogpt速通基准]] 优化，最终两个 AI 均打破了人类世界纪录。

### 自主科研框架

为 AI 搭建了完整的自主实验架构：

- **AGENTS.md** — 定义 AI 行为规范
- **goal.md** — 锁定实验目标
- **plan.md** — 记录策略演化过程
- **scratchpad** — 存储草稿和中间结果

### 实验成果

- 实验规模：1.4 万 H200 计算时，约 1 万次迭代，239 亿 Token 思考轨迹
- Opus 4.7 以 2930 步打破人类 2990 步纪录
- 代码开源可复现（GitHub: PrimeIntellect-ai/experiments-autonomous-speedrunning）
- 项目主页：https://www.primeintellect.ai/auto-nanogpt

### 意义

该实验被视为 [[递归式自我改进]] 从理论走向实证的首个里程碑，标志着 AI 自主科研能力的重大突破。文章称其为"递归自改进的卢比孔河被跨过"。

## 技术理念

Prime Intellect 强调通过工程优化（如全分布式训练、底层设施重构）来提升算力效率，而非单纯依赖堆砌硬件。其工作证明了在相对有限的算力（如 512 张 H200）下，通过优化技术栈仍可达到顶尖模型性能。

## 商业模式

除了开源项目，Prime Intellect 还提供托管的 Lab 平台，允许用户无需处理复杂基础设施即可进行大规模 RL 训练。