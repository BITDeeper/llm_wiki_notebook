---
type: entity
title: ms-swift
tags: [tool, training-framework, ai]
related: [twinkle, modelscope]
created: 2026-03-11
updated: 2026-03-11
sources: ["训练即服务！让模型训练回归算法语义，150行代码跑通rl.md"]
---

# ms-swift

[[ms-swift]] 是 [[ModelScope (魔搭社区)]] 团队开发的通用型训练框架。

## 特点
- **易用性**：基于 Transformers 和 TRL 的 Trainer 进行深度封装，用户通常通过命令行配置即可快速启动训练。
- **生态适配**：深度适配 safetensors 模型生态。

## 局限性与演进
虽然 ms-swift 极大地降低了模型训练的门槛，但其较深的封装使得在训练算法层面进行调整或定制变得困难。为了解决具备算法背景的开发者对“灵活性”的需求，ModelScope 团队在此基础上推出了新一代框架 [[Twinkle]]，旨在平衡易用性与对底层训练逻辑的细粒度控制。