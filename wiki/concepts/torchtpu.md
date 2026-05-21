---
type: concept
title: TorchTPU
tags: [software-stack, google, meta, pytorch, tpu, software, compatibility]
related: [triton, cuda-护城河, google, meta, tpu, pytorch, cuda]
created: 2026-02-02
updated: 2026-05-07
sources: ["老黄大出血！openai背刺英伟达，微软自研芯连夜拆掉cuda护城河？.md", "谷歌430万颗tpu暴击cuda护城河！meta「割肉」助攻.md"]
---

# TorchTPU

由 Google 和 Meta 合作开发的项目（谷歌内部主导），旨在让深度学习框架 [[PyTorch]] 原生支持 Google 的 [[TPU]]（张量处理单元）硬件，提升 TPU 对主流框架的兼容性。

## 战略意图

- **推倒 CUDA 柏林墙**：通过消除 PyTorch 对 [[CUDA]] 的默认依赖，降低开发者转向 TPU 的门槛。
- **反 CUDA 联盟**：与 [[微软]] 和 [[OpenAI]] 推广的 [[triton]] 遥相呼应，共同构成了科技巨头对 [[英伟达]] [[cuda-护城河]] 的围剿之势。
- **软硬协同与生态吸引**：PyTorch 由 [[Meta]] 主要支持，是学术界和工业界最流行的深度学习框架之一。TorchTPU 是谷歌解决 TPU 长期以来在软件生态上短板的关键一环，也是吸引 Meta 等 PyTorch 生态大客户采购 TPU 的必要条件。

## 背景

在对抗 [[英伟达]] CUDA 护城河的战争中，单纯依靠硬件成本优势（TPU 比英伟达 GPU 便宜 20-50%）是不够的，必须配合软件易用性才能转化为市场份额。TorchTPU 的出现表明，去 CUDA 化已成为行业共识，各大巨头正在通过软硬件协同的方式，试图打破英伟达在 AI 算力生态中的垄断地位。