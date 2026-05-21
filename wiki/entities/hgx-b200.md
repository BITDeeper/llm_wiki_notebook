---
type: entity
title: HGX B200
tags: [hardware, gpu, server]
related: [英伟达, tensorrt-llm, mtp, nvfp4]
created: 2026-04-27
updated: 2026-04-27
sources: ["不换gpu，性能飙升2.8倍！英伟达用软件暴打摩尔定律.md"]
---
# HGX B200

HGX B200 是 [[英伟达]] 推出的 8 卡 Blackwell GPU 平台，主要面向风冷部署的企业和云服务商。

## 适用场景
相比 [[GB200 NVL72]] 这样的“巨无霸”机架级系统，HGX B200 更适合中小规模的部署需求。

## 核心技术
HGX B200 的性能提升得益于 [[MTP]]（多 Token 预测）与 [[NVFP4]] 的组合：
- **[[MTP]]**：允许一次计算覆盖多个生成步骤，显著提升解码任务的吞吐量。
- **[[NVFP4]]**：通过 4 比特压缩降低内存带宽压力，同时保持模型精度。

## 性能表现
实测显示，在启用 MTP 和 NVFP4 后，HGX B200 在多种输入输出序列组合下，吞吐量曲线持续右移，能够在相同延迟下服务更多用户。