---
type: source
title: "不改工作流，多智能体系统也能继续涨性能｜ICML 2026 Spotlight"
authors: [香港中文大学深圳, 香港科技大学广州, 华南理工大学, 立命馆大学]
year: 2026
url: "https://mp.weixin.qq.com/s/exO4OeAjbRzETyaFUykdEw"
venue: "量子位（QbitAI）"
tags: [多智能体系统, prompt优化, bandit, ICML-2026, spotlight, GNN, 坐标上升]
related: [maspob, mango-多智能体流网络优化, 多智能体错误传播, 文本梯度, 固定拓扑下的mas-prompt优化]
created: 2026-06-12
updated: 2026-06-12
sources: ["rss/不改工作流，多智能体系统也能继续涨性能｜icml-2026-spotlight.md"]
---
# 不改工作流，多智能体系统也能继续涨性能｜ICML 2026 Spotlight

## 摘要

香港中文大学（深圳）、香港科技大学（广州）、华南理工大学和立命馆大学联合团队提出 **MASPOB**（Multi-Agent System Prompt Optimization via Bandits），一个基于Bandit的样本高效Prompt优化框架，在固定工作流拓扑约束下优化多智能体系统中各Agent的Prompt配置。该工作已被 **ICML 2026** 接收为 Spotlight。

## 核心问题

在医疗诊断SOP、金融审计流程等真实部署场景中，多智能体系统的工作流拓扑经过专家设计、安全验证和合规审查后难以随意修改。在固定拓扑约束下，如何高效地对各Agent的Prompt进行联合优化？

三大技术难点：
1. **评估代价高昂**：每次评估需完整执行MAS流程，涉及多次LLM调用
2. **拓扑诱导的耦合**：上游Agent的Prompt变化影响下游Agent的输入分布
3. **组合搜索空间爆炸**：联合搜索空间随Agent数量指数增长

## 方法：MASPOB三大组件

1. **拓扑感知性能代理模型**：将MAS工作流建模为DAG，以Prompt嵌入为节点特征，用GAT进行消息传递，学习感知拓扑结构的Prompt语义表示
2. **Bandit式探索-利用权衡**：采用LinUCB构造采集函数，在有限评估预算下实现样本高效搜索
3. **坐标上升搜索**：将联合优化分解为逐一单变量优化，避免组合空间指数爆炸

## 实验结果

- **6个基准全面最优**：平均得分80.58%，较IO基线提升12.02%，较AFlow提升2.06%，较MIPRO提升1.71%
- **GNN消融**：去除GNN平均性能下降2.31%，在所有6个任务上均为正向贡献
- **坐标上升消融**：性能损失仅0.29-0.48%，运行时间减少98-99.8%
- **复杂拓扑泛化**：在7-8个Agent的复杂拓扑下仍保持最优排名
- **收敛性**：约35轮后趋于稳定，验证集与测试集走势一致

## 与Wiki中其他方法的关系

- 与 [[mango-多智能体流网络优化]] 构成互补：MANGO优化工作流拓扑+提示词，MASPOB在固定拓扑下优化提示词
- 拓扑感知代理模型本质上在建模和缓解 [[多智能体错误传播]]
- 提供了区别于 [[文本梯度]] 的基于Bandit的Prompt优化替代路线

## 参考链接

- 论文：https://arxiv.org/abs/2603.02630
- 代码：https://github.com/HZ1008/MASPOB