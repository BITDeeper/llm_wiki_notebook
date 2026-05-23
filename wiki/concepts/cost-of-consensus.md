---
type: concept
title: Cost of Consensus（共识成本）
created: 2026-05-14
updated: 2026-05-14
tags: [多agent, 论文, 成本效益, token经济]
related: [多agent协作架构, team-engine, mavis-minimax]
sources: ["重生之我在ai时代当老板：让一群agent互相pua.md"]
---
# Cost of Consensus（共识成本）

一篇关于多Agent成本效益的论文，被 [[minimax]] 在技术博客中引用，作为其 [[team-engine]] "按需调度"设计的理论支撑。

## 核心发现

在特定模型和同质debate设置下，多Agent的token消耗可能达到单Agent自我修正的**2.1到3.4倍**，而准确率却没有提升。

## 关键启示

没有结构、没有验证、没有停止条件的"多Agent"，就是在浪费Token。那不叫团队合作，那叫"AI聊天室"。

## 对产品设计的影响

这一发现直接影响了MiniMax的设计决策：
- Team不是默认选项，简单任务单Agent绰绰有余
- [[team-engine]] 判断何时需要Agent Team、何时单Agent足够
- 有结构的多Agent（角色分工、状态机控制、对抗验证）与无结构的多Agent有本质区别

## 经济性论证

多Agent确实比单Agent贵——交接要成本、共享要成本、聚合要成本。但有些事情（如研究Agent收集几十个网页后交接给写作Agent时信息的重新组织）就是得上多Agent才能解决，不是"模型再大一点"就能搞定的。