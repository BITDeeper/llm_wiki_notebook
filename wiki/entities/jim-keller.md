---
type: entity
title: Jim Keller
tags: [chip-architect, legend, ai-hardware, cpu-design, tenstorrent, cpu-gpu, industry-leader, engineer]
related: [ljubisa-bajic, tenstorrent, taalas, amd, 英伟达, cuda-tile, x86, ljubiša-bajić]
created: 2026-02-22
updated: 2026-05-08
sources: ["gpu要凉？前英伟达amd大神将ai刻在芯片上！17000-tokens秒屠榜.md", "英伟达亲手终结cuda「护城河」？传奇芯片架构师引发争议.md", "24人团队硬刚英维达！amd前高管梦之队出手，新芯片每秒17000个token.md"]
---

# Jim Keller

[[Jim Keller]] 是当代芯片界最具代表性的 CPU/SoC 架构师之一，被誉为“硅仙人”、“传奇架构师”、“芯片教父”和“芯片圈 GOAT 之一”。他现任 [[Tenstorrent]] CEO，是 [[Ljubisa Bajic]]（[[Ljubiša Bajić]]）的前合作伙伴（于 2020 年接替其出任 CEO）。作为改写过 CPU 发展路线图的关键人物，他在 AI 芯片领域代表了“通用计算”的技术路线，与 [[Taalas]] 的专用固化路线形成鲜明对比。

## 职业生涯与成就

Jim Keller 曾任职于 AMD、Apple 和 Tesla，拥有深厚的一线设计和架构决策经验。他在通用 CPU、移动 SoC、车载 SoC 和 AI 加速器领域均有建树，其加入通常被视为技术公司实力的重要背书。

### x86-64 时代奠基人
作为 x86-64 指令集和 HyperTransport 的共同作者，他直接影响了今天几乎所有桌面、服务器 CPU 的 ISA 与互连方式。

### AMD 扭转乾坤
- **Athlon/K8 时代**：第一次让 AMD 在 x86 性能上正面硬刚 Intel。
- **Zen 架构**：带领团队研发 Zen 架构，让 AMD 从濒临破产的状态转变为与 Intel 分庭抗礼。

### 移动与 AI 时代
- **Apple 自研芯片**：在 Apple 期间主导了 A4/A5 芯片设计，开启了 iPhone 自研 SoC 的路线，为后来的 M 系列芯片奠定了基础。
- **Tenstorrent**：在 AI 时代加入 Tenstorrent 并出任 CEO，致力于开发基于 RISC-V 的 AI 加速器，试图打破 [[英伟达]] 在 AI 芯片领域的垄断地位。

## 技术路线与行业观点

### 通用计算 vs. 固化模型
与 [[Ljubisa Bajic]] 创立的 [[Taalas]] 将模型焊死在芯片中的做法不同，[[Jim Keller]] 坚信软件定义硬件的未来。他的毕生信仰是打造一个灵活、通用的计算平台，能够适应不断变化的算法和模型需求。这种分歧反映了 AI 硬件领域在追求极致效率与保持灵活性之间的根本矛盾。

### 对 CUDA 的观点
Jim Keller 曾公开批评 [[英伟达]] 的 CUDA 生态，称其为“沼泽”。意指 CUDA 的复杂性（如针对不同硬件特性的补丁、繁琐的线程管理）让开发者深陷其中，难以脱身。

#### 对 CUDA Tile 的质疑
在英伟达发布 [[cuda-tile]] 后，Keller 提出了一个引发行业争议的观点：**转向 Tile 架构是否会终结 CUDA 的护城河？**
- **支持理由**：如果英伟达和其他硬件厂商都转向瓦片架构，AI 内核将更容易在不同硬件间移植。
- **现实反驳**：分析指出，虽然 Tile 架构提升了英伟达内部生态的移植性，但通过引入专有的 Tile IR，反而可能加深了对英伟达硬件的锁定。