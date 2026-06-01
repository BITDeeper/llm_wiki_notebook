---
type: event
title: Gamma-World 发布
created: 2026-05-30
updated: 2026-05-30
tags: [世界模型, 多智能体, nvidia, 发布事件]
related: [gamma-world, 英伟达, 清华大学, 多智能体世界模型, 具身智能数据困境]
sources: ["登顶huggingface日榜！英伟达清华团队γ-world：把世界模型从单机打到联机.md"]
origin_date: 2026-05-25
time_span:
  start: 2026-05-25
  end: null
participants: [英伟达, 清华大学, gamma-world]
causes: [具身智能数据困境]
effects: [多智能体世界模型]
significance: high
---
# Gamma-World 发布

2026年5月下旬，[[英伟达]] 联合 [[清华大学]]、多伦多大学和 Vector Institute 正式发布 [[gamma-world|Gamma-World]]——首个可扩展的[[多智能体世界模型]]。发布后登顶 HuggingFace 日榜。

## 事件背景

Physical AI 领域长期面临高质量多智能体交互数据极度稀缺的瓶颈（[[具身智能数据困境]]）。此前的多智能体世界模型（Solaris、Multiverse、Agora-1）虽证明了可行性，但受限于对称性破坏和算力平方爆炸，无法扩展到更多玩家。

## 核心突破

Gamma-World 通过[[正单纯形位置编码]]和[[hub-token通信|Hub Token 通信枢纽]]两大底层创新，同时解决了对称性和复杂度问题，实现了[[零样本多人泛化]]——仅在双人数据上训练，推理时直接支持四人及以上智能体。

## 影响

- **技术层面**：标志着多智能体世界模型从"能做"到"可扩展"的关键跨越
- **数据层面**：世界模型作为交互数据生成器，可能突破 Physical AI 的数据瓶颈
- **产业层面**：从 Minecraft 到机械臂的迁移展示了跨域应用潜力，自动驾驶、无人机编队、手术机器人协作等场景均可能受益

## 开放问题

- 物理规律和因果逻辑能否经受真实世界的系统性验证仍待回答
- 从虚拟到真实的泛化边界尚未明确