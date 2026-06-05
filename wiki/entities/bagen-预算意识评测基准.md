---
type: entity
title: BAGEN 预算意识评测基准
created: 2026-06-04
updated: 2026-06-04
tags: [agent, 评测基准, 预算意识, bagen]
related: [预算意识, 渐进式区间估计, rollout-replay协议, warehouse-供应链模拟环境, ragen-2]
sources: ["一个月烧掉5亿美元账单之后：这项研究在问，agent到底知不知道自己花了多少.md"]
origin_date: 2026-06-04
---

# BAGEN 预算意识评测基准

**BAGEN**（Budget-Aware Agent）是由西北大学 MLL Lab、O2 AI Lab、斯坦福大学、All Hands AI、密歇根大学、康奈尔大学等机构联合提出的智能体[[预算意识]]评测基准。

## 核心设计

### 评测环境
BAGEN 覆盖四个环境，其中三个测内部token预算，一个测外部预算：

1. **Sokoban** — 8×8推箱子规划任务，2500 token上限
2. **Search-R1** — 多跳信息检索，3500 token上限
3. **SWE-bench** — 解决真实GitHub issue，160轮上限
4. **[[warehouse-供应链模拟环境]]** — 供应链经营模拟，测外部预算（钱、时间、仓库空间）

### 评测协议
采用 [[rollout-replay协议]]，将"估算能力"和"完成能力"干净解耦。

### 评测指标
预算意识被拆分为三个子能力维度：
- **可行性预测**（Macro-F1）— 判断任务在剩余预算下能否成功
- **早期失败检测**（Fail-F1）— 对最终失败的任务能否早点拉响警报
- **区间校准**（覆盖率×紧致度）— 预测区间又准又紧的程度

### 评测规模
每个"模型-任务"组合累计2000-3000个估计样本。

## 核心发现

1. **能力分离**：任务成功率和估计质量弱相关（r≈0.35），没有模型在三项子能力上全面领先
2. **[[系统性乐观偏差]]**：20个组合中17个系统性低估剩余预算，越弱的模型越乐观
3. **[[迟到认知]]**：预算消耗60%时仍有70%以上预测可行，到最后20%才骤降
4. **信号可用但训练脆弱**：早停策略可省28%-64% token（成功率仅降1.6-4.2个百分点）

## 名称双关

> "I used to burn tokens; now I'm BAGEN (begging) the agents to stop."
> 过去我在烧token，现在我在求着智能体停下来。

## 资源
- 项目主页：https://ragen-ai.github.io/bagen
- 代码：https://github.com/mll-lab-nu/BAGEN
- 数据集：https://huggingface.co/datasets/MLL-Lab/BAGEN

## 前期工作
[[ragen-2]]（智能体强化学习框架，入选 ICML 2026 Oral）