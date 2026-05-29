---
type: entity
title: Sphere AI Lab
created: 2026-05-28
updated: 2026-05-28
tags: [ai实验室, 开源, rl框架]
related: [orbit, rl-post-training]
sources: ["全球首次单机降服万亿巨模deepseek-v4！rl后训练框架orbit开源！.md"]
origin_date: 2026-05-28
---
# Sphere AI Lab

Sphere AI Lab 是 [[orbit]] RL 后训练框架的开发团队。该团队于 2026 年 5 月 28 日开源了 Orbit 框架，首次实现单台 8×B200 服务器对万亿参数级 MoE 模型进行 RL 后训练。

## 主要贡献

- 开发并开源 [[orbit]] 框架，提出 [[adapter-first-rl|Adapter-first]] 系统设计范式。
- 首次在单节点完成 [[kimi-k2-6|Kimi-K2.6]]（~1T）和 [[deepseek-v4-flash|DeepSeek V4 Flash]]（1T）的 RL 后训练。
- 将系统上限验证至 [[deepseek-v4-pro|DeepSeek V4 Pro]]（1.6T）级别。

## 资源

- 官方网站：https://spherelab.ai/
- GitHub：https://github.com/Sphere-AI-Lab