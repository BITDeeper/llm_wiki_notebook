---
type: source
title: "ICML 2026 | 清华姚权铭团队提出LMNet，让语言模型学会自己「组网」"
created: 2026-05-31
updated: 2026-05-31
tags: [lmnet, 语言模型网络, 稠密可微通信, icml-2026, 清华大学, 网络智能]
related: [lmnet, 姚权铭, 稠密可微通信, 网络智能, 机器之心]
sources: ["icml-2026-清华姚权铭团队提出lmnet，让语言模型学会自己「组网」.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/r1OAScZ7TDSRhrutW1eJ9A"
venue: 机器之心
---
# ICML 2026 | 清华姚权铭团队提出LMNet，让语言模型学会自己「组网」

## 摘要

本文报道了清华大学[[姚权铭]]团队发表于 ICML 2026 的论文 Language Model Networks，提出了[[lmnet|LMNet]]框架。该框架将预训练语言模型视为可复用计算节点，通过[[稠密可微通信]]模块连接，形成可端到端优化的"[[模型级神经网络]]"。

## 核心内容

- **问题提出**：未来 AI 系统是否必须依赖越来越大的单体模型？还是可以通过多智能单元的连接、通信与协同形成更强能力？
- **技术方案**：LMNet 保留系统最外层的自然语言输入输出，但在中间模型节点之间绕开文本生成，直接交换连续稠密向量，使梯度可跨节点传播。
- **关键洞察**：将"通信"从外部设计规则推进为系统内部可优化能力，"谁向谁传递什么信息"由任务监督信号驱动自动学习。
- **实验结果**：以 Qwen2.5-0.5B 为节点构建约 1.14B 参数的 LMNet-1B，额外训练 token < 0.1T，训练成本 < 预训练成本 0.2%，在多个通用任务上取得明显提升。
- **愿景判断**：AI 将从单体模型能力竞争走向系统组织能力、通信效率和协同学习能力的竞争——"沟通即智能"。

## 论文信息

- **标题**：Language Model Networks: Supervision-Efficient Learning through Dense Communication
- **作者**：Shiguang Wu, Yaqing Wang, [[姚权铭|Quanming Yao]]
- **会议**：ICML 2026
- **预印本**：arXiv:2505.12741（2025年5月提交）