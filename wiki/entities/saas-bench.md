---
type: entity
title: SaaS-Bench
created: 2026-05-25
updated: 2026-05-25
tags: ["benchmark", "agent-evaluation", "saas", "computer-use", "评测基准", "agent", "办公自动化"]
related: ["unipat-ai", "computer-use-agent", "claude-opus-4-7", "claude-sonnet-4-6", "任务执行范式", "产业深水区", "vlm质检闭环"]
sources: ["claude-通过率不到-4%，saas-bench-撕碎了-computer-use-的「全自动办公」幻想.md", "claude不到4%，全军覆没！一场大考撕碎agent「全自动办公」幻想.md"]
origin_date: 2026-05-25
---
# SaaS-Bench

SaaS-Bench 是由 [[unipat-ai|UniPat AI]] 发布的面向真实办公场景的 [[computer-use-agent|Computer-Use Agent]] 实战评测基准。该基准通过将 23 个真实开源 SaaS 系统部署在 Docker 环境中，对主流 Agent 进行系统性测试，揭示了当前 Agent 在真实工作场景中的结构性缺陷。

## 设计理念

与现有 Agent 评测（仿真环境、简单任务、几十步操作）不同，SaaS-Bench 的核心思路是：**直接把真系统搬进 Docker，让 Agent 在真实的前后端逻辑、数据库状态和业务约束中干活。**

## 规模与覆盖

23 个开源 SaaS 系统，全部通过 Docker 本地部署，覆盖六大专业领域：

- **软件研发**：OpenProject、Baserow、Code-Server、Metabase
- **业务财务**：Twenty CRM、BigCapital、HRMS、Pretix
- **医疗管理**：OpenEMR、OpnForm、OnlyOffice
- **团队协作**：SiYuan、Roundcube、Mattermost、ownCloud
- **农业供应链**：FarmOS、Grocy、Recipya、E-Label
- **独立媒体**：PhotoPrism、MediaCMS、BookLore、Watcharr

## 任务特征

- **106 个任务**，93.4% 跨越至少两个应用，三应用任务占 50%（53 个）
- **任务模态**：纯文本任务 74 个，多模态理解任务 32 个
- **操作复杂度**：97.3% 的文本任务操作步数超过 100 步，最长轨迹达 300+ 步

## 任务构建方法

采用「LLM 生成 + 专家把关」四阶段流程：

1. LLM 围绕六大领域和职业角色生成任务
2. 明确任务目标、跨应用依赖和验证要求
3. 多轮修改减少歧义和漏洞
4. 专家人工筛选和真实执行检查，剔除堆砌步骤、逻辑混乱的任务

## 评估指标

| 指标 | 含义 | 严格程度 |
|------|------|----------|
| Resolved Score（完全通过分数） | 全部检查点通过才算 1，否则为 0 | 严苛 |
| Checkpoint Score（检查点分数） | 按权重计算部分检查点完成比例 | 宽松 |

两个指标之间的巨大落差，恰好暴露了 Agent 最核心的问题：能推进部分中间环节，但几乎无法将完整的长程工作流走完。

## 主要评测结果

### 全军覆没

| 模型 | Checkpoint Score | Resolved Score |
|------|-----------------|----------------|
| [[claude-opus-4-7|Claude Opus 4.7]] | 43.9% | 3.8%（106 任务仅完成 4 个） |
| [[claude-sonnet-4-6|Claude Sonnet 4.6]] | — | — |
| [[kimi-k2-5|Kimi K2.5]] | — | 0% |
| [[gemini-3-1-pro|Gemini 3.1 Pro]] | — | 0% |

### 四种结构性失败模式

1. **越往后越做不对**：通过率随任务推进呈不可逆下降曲线
2. **一步错步步错**：上游 3% 权重错误可导致下游 30% 损失
3. **做完不检查**：Agent 在意图层面认为成功，验证器在状态层面发现失败
4. **执行极不稳定**：同一任务多次运行分数差异巨大（如 Sonnet 4.6 从 0.00 到 0.68）

### 复杂度惩罚

- 跨应用数 1→4：平均分从 53% 降至 20%
- 检查点数 ≤6 vs ≥18：平均分从 65% 降至 27%

## 意义

SaaS-Bench 撕碎了 Agent Benchmark 成绩与真实工作能力之间的幻觉，揭示了当前 [[computer-use-agent|CUA]] 范式的深层局限：缺少对持久状态的有效推理能力、缺少操作后的闭环验证机制、缺少从错误中恢复的能力。这为 [[产业深水区]] 阶段的 AI 应用评估提供了关键基准。

## 关联链接

- 论文：https://arxiv.org/abs/2605.15777
- GitHub：https://github.com/UniPat-AI/SaaS-Bench
- Blog：https://unipat.ai/blog/SaaS-Bench