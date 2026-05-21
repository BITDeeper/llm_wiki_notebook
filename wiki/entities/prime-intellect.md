---
type: entity
title: Prime Intellect
tags: [ai-lab, open-source, infrastructure]
related: [intellect-3, prime-rl, verifiers, environments-hub, prime-sandboxes]
created: 2025-12-10
updated: 2025-12-10
sources: ["只用512张h200！106b模型靠分布式rl杀出重围，全网开源.md"]
---

# Prime Intellect

Prime Intellect 是致力于构建开放的超级智能技术栈的 AI 实验室/公司。其使命是将训练前沿模型的能力通过开源和云服务的形式交到每个人手中。

## 核心产品与贡献

### [[INTELLECT-3]]
- 106B 参数的 [[混合专家模型]]。
- 在数学、代码等基准上表现优异，完全开源权重和数据。

### [[PRIME-RL]]
- 自研的分布式强化学习框架。
- 采用“仅异步”策略，支持大规模 MoE 模型的训练。

### 基础设施生态
- **[[Verifiers]]**：用于构建 RL 环境与评测任务的开源工具库。
- **[[Environments Hub]]**：托管 RL 环境与评测的社区中心，包含 500+ 任务。
- **[[Prime Sandboxes]]**：基于 Rust 的高吞吐、安全代码执行系统。

## 技术理念
Prime Intellect 强调通过工程优化（如全分布式训练、底层设施重构）来提升算力效率，而非单纯依赖堆砌硬件。其工作证明了在相对有限的算力（如 512 张 H200）下，通过优化技术栈仍可达到顶尖模型性能。

## 商业模式
除了开源项目，Prime Intellect 还提供托管的 Lab 平台，允许用户无需处理复杂基础设施即可进行大规模 RL 训练。