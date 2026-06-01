---
type: entity
title: SkillOpt
created: 2026-05-31
updated: 2026-05-31
tags: [微软, 开源框架, 技能优化, agent, 文本空间优化]
related: [微软, 技能文档自我进化, 文本学习率, 验证门控, 办公技能框架, 自进化架构, 模型-技能分离架构]
sources: ["一周3.3k-star，微软开启skills自我进化！像训练神经网络一样训练技能.md"]
origin_date: 2026-05-25
---
# SkillOpt

SkillOpt 是微软开源的 Agent 技能文档自动优化框架，核心思路是将指导 AI 智能体行为的自然语言文档视为「外部权重」，通过类似训练神经网络的系统化循环机制进行自动化迭代优化，无需修改模型内部权重。

## 核心设计

### 训练循环（Rollout-Reflect-Edit-Gate）

1. **Rollout（前向传播）**：冻结的目标模型使用当前技能文档执行一批任务，记录完整执行轨迹（消息、工具调用、验证反馈、最终得分）。
2. **Reflect（反向传播）**：独立优化器模型分析执行轨迹，失败案例和成功案例分开反思，计算「文本空间的梯度」。
3. **Edit（参数更新）**：优化器基于反思结果提出结构化编辑操作（add/delete/replace）。
4. **Gate（验证门控）**：候选技能文档必须在独立验证集上证明性能严格提升才会被接受。

### 关键机制

- **[[文本学习率]]**：每步最多 4 个编辑操作，防止灾难性遗忘。消融实验证明去掉后 SearchQA 从 87.1% 降至 84.6%。
- **[[被拒绝编辑缓冲区]]**：记录被验证门控拒绝的编辑提案，提供负梯度信息。去掉后 SpreadsheetBench 从 77.5% 骤降至 72.9%。
- **Slow Update**：每个 epoch 结束时对所有被接受编辑做纵向对比分析，产出更大范围更新。
- **[[元技能]]**：优化器自身维护的经验文档，记录跨任务优化经验，使优化器本身也在进化。

## 评测结果

在 7 个目标模型（GPT-5.5、GPT-5.4、GPT-5.4-mini、GPT-5.4-nano、GPT-5.2、Qwen3.5-4B、Qwen3.6-35B-A3B）× 6 个基准测试（SearchQA、SpreadsheetBench、OfficeQA、DocVQA、LiveMathematicianBench、ALFWorld）× 3 种执行环境（直接对话、Codex、Claude Code）的全部 52 个评测组合中，全部达到最优或并列最优。

### 亮点数据

- GPT-5.5 直接对话：平均提升 +23.5 分（SpreadsheetBench +38.9，OfficeQA +39.0）
- GPT-5.4-nano：平均提升 +24.9 分（DocVQA +49.4，ALFWorld +35.1）
- GPT-5.5 + Codex 环境：SpreadsheetBench 提升 57.5 分
- GPT-5.5 + Claude Code 环境：SpreadsheetBench 提升 58.3 分

### 迁移能力

- **跨模型**：GPT-5.4 上训练的 LiveMath 技能迁移到 GPT-5.4-nano，提升 15.2 分
- **跨环境**：Codex 环境训练的 SpreadsheetBench 技能迁移到 Claude Code，提升 31.8 分
- **自优化**：GPT-5.4-nano 同时作为目标模型和优化器，SpreadsheetBench 仍提升 10.4 分

## 部署特性

最终部署仅需一个 `best_skill.md` 文件，不需要优化器模型、记忆模块或任何额外推理开销。

## 链接

- 官网：https://microsoft.github.io/SkillOpt/
- GitHub：https://github.com/microsoft/SkillOpt
- 论文：https://arxiv.org/abs/2605.23904