---
type: concept
title: MaaS到Agent能力打包
created: 2026-06-14
updated: 2026-06-14
tags: [maas, 平台演进, agent, 范式转移]
related: [modelarts-next, 模型路由, rlaas-强化学习即服务, agent基础设施新基建]
sources: ["rss/agent时代，华为云开始重新造地基了.md"]
---
# MaaS到Agent能力打包

指平台层从单纯提供模型API（MaaS，模型即服务），演进为提供模型矩阵+智能路由+机密推理+强化学习的完整能力体系。这一范式转移反映了Agent时代对企业AI能力需求的根本变化。

## 传统MaaS的局限

传统MaaS模式下，企业仅调用模型的API接口，需要自行解决模型选择、成本优化、数据安全和持续学习等问题。

## Agent能力打包的四项能力

[[modelarts-next|ModelArts Next]]的实践代表了这一演进方向：
1. **模型矩阵**：主流模型Day 0上架
2. **[[模型路由]]**：自动选择最优模型，成本降低20%+
3. **机密推理**：硬件级TEE保障敏感数据安全
4. **[[rlaas-强化学习即服务|RLaaS]]**：支持超10天长稳训练，让Agent持续进化