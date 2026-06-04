---
type: concept
title: 三段式Token Pool
created: 2026-06-04
updated: 2026-06-04
tags: [kv-cache, 架构设计, 推理优化, oscar]
related: [oscar, kv-cache-量化, 长上下文serving, sglang]
sources: ["超越turboquant：together-ai把2-bit-kv-cache推向真实服务.md"]
---
# 三段式Token Pool

三段式Token Pool是 [[oscar]] 在运行时维护的混合存储策略，兼顾了历史上下文的极致压缩与近期/关键上下文的精度保障。

## 架构设计

```
| BF16 sink (64 tokens) | INT2 history | BF16 recent (256 tokens) |
```

### BF16 Sink（64 tokens）

- 保存开头的attention sink token
- 使用BF16全精度保存
- 作用：保护attention sink，防止注意力机制在序列开头出现异常

### INT2 History

- 占比最大的历史KV存储
- 使用旋转和裁剪后的INT2格式
- 每4个2-bit数值被打包进1个byte
- 是显存节省的主要来源

### BF16 Recent（256 tokens）

- 保存最近窗口的token
- 使用BF16全精度保存
- 作用：保护最近上下文的精度

## 运行时机制

1. 新token先写入recent window（BF16）
2. 随着解码推进，最老的recent token通过融合Triton kernel处理
3. 完成rotate、clip、quantize和pack操作
4. 降级进入INT2 history

## Decode阶段处理

GPU上分别处理两段：

- **INT2 kernel**：unpack、scale/zero point反量化、浮点累加
- **BF16 kernel**：处理sink/recent
- **Online softmax merge**：合并两部分结果

## 设计理念

相比"保留若干敏感层在高bit"的做法，三段式Token Pool更接近真实服务需求：

- 历史KV主体统一使用INT2，简化kernel和cache layout
- 只在sink和recent两个很小窗口保留BF16
- 更容易接进paged cache、prefix cache和批量调度

## 对长上下文Agent的意义

真实Agent往往包含很长的系统提示、工具说明、历史对话和检索内容，不同请求之间存在大量共享前缀。三段式Token Pool配合prefix cache复用共享前缀，使得长历史用INT2降容量和带宽、关键sink/recent用BF16保稳定，为长上下文Agent提供了系统的折中方案。