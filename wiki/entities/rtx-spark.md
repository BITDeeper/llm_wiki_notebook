---
type: entity
title: RTX Spark
created: 2026-06-01
updated: 2026-06-01
tags: [芯片, GPU, ARM, 英伟达, 消费级硬件, 产品, agent原生计算, PC]
related: [英伟达, 微软, 联发科, agent-pc, nvidia-open-shell, 本地推理, 黄仁勋, vera-cpu, agent原生计算, ai-subscription-crisis]
origin_date: 2026-06-01
sources: ["刚刚，英伟达重新定义pc！史上最高效cpu来了.md", "刚刚，老黄重新发明pc！全球首个agent原生电脑问世.md"]
---
# RTX Spark (N1X)

NVIDIA RTX Spark（代号 N1X）是全球首款 [[agent原生计算|Agent 原生]] PC 超级芯片，由 [[英伟达]] 与 [[联发科]] 联手打造、[[微软]] 联合推出，于 2026年6月1日在 [[gtc-taipei-2026|GTC Taipei 2026]] 上由 [[黄仁勋]] 正式发布。这是英伟达首款面向消费级 Windows PC 的 Arm 架构主处理器，标志着公司正式进入 x86 替代赛道。黄仁勋称其为"英伟达把 33 年的全部积累蒸馏进了一颗芯片"。

## 核心规格

| 参数 | 规格 |
|------|------|
| 架构 | Arm（基于 NVIDIA Grace） |
| CPU | 20 核 NVIDIA Grace CPU（[[联发科]]参与定制设计） |
| GPU | NVIDIA Blackwell RTX GPU |
| CUDA 核心 | 6144 个 |
| Tensor Core | 第五代，支持 FP4 精度 |
| 互联 | NVLink-C2C 芯片间互联，全程融合 |
| AI 算力 | 最高 1 Petaflop |
| 统一内存 | 最高 128GB |
| 制程 | 台积电 3nm |
| 晶体管 | 700 亿 |
| 软件栈 | 英伟达 100% 软件栈支持 |
| 芯片基础 | 与 DGX Spark / GB10 相同 |

## 产品形态

- **轻薄笔记本**：最薄 14mm，轻至 3 磅，14–16 英寸多种尺寸，精密加工铝合金机身，双层 OLED 显示屏，支持 NVIDIA G-SYNC；数据中心级算力随身携带
- **小型台式机**：面向 Agent、创意工作负载、游戏和日常生产力场景；支持 Agent 7×24 小时本地运行，不计费，无额度焦虑——下载本地模型后 Agent 完全属于用户
- **DGX Station for Windows**：768GB 内存、20 PFLOPS 算力、8TB/s 内存带宽，可在个人桌面运行万亿参数模型

## 技术特点

- **统一内存架构**：CPU 与 GPU 共享同一内存池，GPU 可直接调用系统内存，解决传统独立显存容量受限问题
- **FP4 精度支持**：第五代 Tensor Core 支持 FP4 精度，与 [[量化]] 技术路线一致，大幅提升 [[本地推理]] 效率
- **全天续航**：Arm 架构能效优势，支持轻薄笔记本全天使用

## 生态适配

- **专业创作软件**：Adobe Premiere、DaVinci Resolve、Blender、Maxon Cinema4D、Photoshop 已原生适配 Arm 架构
- **游戏兼容**：通过微软 Prism 模拟器，确认兼容《英雄联盟》《无畏契约》《绝地求生》《心灵杀手2》等主流游戏
- **Agent 框架**：[[openclaw]]、[[hermes-agent]] 已适配新 Windows 安全平台
- **全面兼容承诺**：所有产品 100% Windows 兼容、100% CUDA、100% Tensor Core

## 战略意义

RTX Spark 是 [[agent-pc|Agent PC]] 概念的硬件载体，代表 PC 从传统办公工具向具备本地 AI 推理能力的"AI 队友"的范式转变。黄仁勋将其定位为"个人 AI 计算机"，认为用户未来只需提出需求，PC 就会完成工作。

- 将数据中心级算力带入个人设备，是 [[本地推理]] 的硬件里程碑
- 桌面版的本地免计费 Agent 运行模式直接回应 [[ai-subscription-crisis]]
- 延伸 [[token作为生产资料]] 叙事——本地运行意味着 Token 生产资料的去中心化