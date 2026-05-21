---
type: source
title: "硬刚黄仁勋！AMD祭出「千倍算力大杀器」，「反黄联盟」崛起"
tags: [amd, 英伟达, ai-hardware, ces, ualink, helios, mi455x]
related: [amd, 英伟达, 苏姿丰, 黄仁勋, helios, mi455x, ualink, 反英伟达联盟]
created: 2026-01-06
updated: 2026-01-06
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/QNIYTyXdmiPoYIqVgbhDLQ"
venue: "新智元"
sources: ["硬刚黄仁勋！amd祭出「千倍算力大杀器」，「反黄联盟」崛起.md"]
---

# 硬刚黄仁勋！AMD祭出「千倍算力大杀器」，「反黄联盟」崛起

## 摘要
本文详细报道了 AMD 在 CES 2026 上的重大发布，重点分析了其通过 [[Helios]] 机架系统和 [[MI455X]] 芯片对英伟达发起的正面挑战。文章指出，AMD 联合 OpenAI、微软、谷歌等巨头组建「反英伟达联盟」，通过开放标准（如 [[UALink]]）对抗英伟达的封闭生态（如 NVLink），并承诺在四年内实现 AI 算力 1000 倍的增长。

## 核心内容

### 1. 背景与对手：英伟达的 Vera Rubin 封闭帝国
- **Vera Rubin 平台**：英伟达发布的下一代 GPU 平台，集成了 Rubin GPU、Vera CPU（基于 Arm 架构）和 NVL144 机架。
- **封闭策略**：通过深度垂直整合（自研 CPU、GPU、网络），试图将数据中心变成「黑盒」，强化 [[供应商锁定]]。
- **Agentic AI**：英伟达战略转向智能体 AI，导致推理算力需求指数级增长，英伟达承诺降低 10 倍推理成本。

### 2. AMD 的反击：Yotta 级计算与 Helios
- **Yotta Scale Compute**：AMD 提出的宏大愿景，目标是在未来 5 年达到尧字节级（10^24 FLOPS）算力，应对每年 4 倍的算力增长和 100 倍的推理 Token 增长。
- **Helios AI Rack**：
  - 命名源自希腊太阳神，象征打破垄断。
  - 配备 4,600 颗 Zen 6 CPU 核心，坚守 x86 阵营。
  - 拥有 31TB HBM4 内存，采用「暴力美学」策略解决显存瓶颈。
- **MI455X 芯片**：
  - 相比前代性能提升 10 倍。
  - 采用 CDNA 新架构和 OAM 模组化设计，支持即插即用，降低客户迁移成本。
  - 路线图显示 2027 年将推出基于 2nm 工艺的 MI500 系列。

### 3. 互联战争：开放 vs 封闭
- **UALink (Ultra Accelerator Link)**：
  - 由 AMD、英特尔、博通、谷歌、Meta 等联合制定的开放标准，对标英伟达的 NVLink。
  - 支持多达 1024 个加速器互联，支持显存池化。
- **Ultra Ethernet (UEC)**：
  - 旨在替代昂贵的 InfiniBand，利用廉价通用的以太网构建 AI 网络。
  - 据称每 GFLOP 成本比 InfiniBand 低 27%。

### 4. 端侧 AI：Ryzen AI Max
- **128GB 统一内存**：首款支持 235B 参数模型本地运行的 x86 处理器，定位为「Mac Studio 杀手」。
- **性能对比**：在 AI Token 生成速度上快于苹果 M5，在每美元效率上高于英伟达 DGX Spark。
- **Halo Platform**：预装 ROCm 软件栈，优化 PyTorch 和 Hugging Face 支持，改善开发者体验。

### 5. 盟友站台与生态破局
- **OpenAI 的焦虑**：总裁 Greg Brockman 亲自站台，直言算力需求每年翻倍甚至三倍增长，引入 AMD 是为了供应链安全和议价权。
- **软件生态**：借助 PyTorch 2.0 和 Triton 语言的普及，降低对 CUDA 的依赖，弥补 ROCm 历史短板。

## 结论
这场发布会不仅是产品的展示，更是「反英伟达联盟」的誓师。AMD 试图通过开放架构、极致堆料和全行业联盟，打破英伟达在 AI 算力领域的垄断，为行业提供第二种选择。