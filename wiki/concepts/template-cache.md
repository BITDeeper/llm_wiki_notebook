---
type: concept
title: Template Cache
created: 2026-05-16
updated: 2026-05-16
tags: [扩散模型, 插件框架, 中间表示, KV-Cache]
related: [diffusion-templates, 扩散模型插件标准化, 模型-技能分离架构]
sources: ["扩散模型也有「skills」了！魔搭开源11个现成模板，风格、修图、超清一键搞定.md"]
---

# Template Cache

Template Cache 是 [[diffusion-templates]] 框架中最核心的概念，是 Template 模型输出与基础模型 Diffusion Pipeline 输入之间的标准化中间表示。

## 技术定义

Template Cache 包含的字段是 Diffusion Pipeline 输入参数的子集。魔搭社区团队在其中设计了 KV-Cache 等模型能力媒介格式，Template 模型通过 Template Cache 将控制信息传递给基础模型，对生成内容进行精确控制。

## 架构角色

在 [[diffusion-templates]] 框架中，Template Cache 扮演"标准化协议"的角色：

1. **Template 模型**接收 Template Input，计算并输出 Template Cache
2. **Template Pipeline** 整合多个 Template 模型的 Template Cache
3. **基础模型**接收合并后的 Template Cache，执行可控生成

## 关键意义

- **解耦**：Template 模型无需直接修改基础模型代码，通过 Cache 传递控制信号
- **可组合**：多个 Template Cache 可由 Pipeline 合并，实现多维度联合控制
- **标准化**：统一的 Cache 格式使得不同开发者训练的 Template 可以互操作

## 与现有技术的对比

传统 ControlNet 等工具通过直接注入特征层实现控制，不同工具的特征层接口不统一，叠加时容易冲突。Template Cache 通过标准化中间表示层避免了这一问题，类似于软件工程中的"接口隔离"原则。