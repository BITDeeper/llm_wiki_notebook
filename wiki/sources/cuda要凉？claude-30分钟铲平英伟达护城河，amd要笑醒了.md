---
type: source
title: "CUDA要凉？Claude 30分钟铲平英伟达护城河，AMD要笑醒了"
tags: [ai-programming, cuda, rocm, amd, claude-code, anthropic, hardware-ecosystem]
related: [claude-code, anthropic, amd, rocm, cuda-护城河, boris-cherny, 智能体式编程, opus-4.5]
created: 2026-01-23
updated: 2026-01-23
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/EkUlJX9jEOaUKOgPd-eYew"
venue: "新智元"
sources: ["cuda要凉？claude-30分钟铲平英伟达护城河，amd要笑醒了.md"]
---

# CUDA要凉？Claude 30分钟铲平英伟达护城河，AMD要笑醒了

## 摘要
本文报道了 [[claude-code]] 在跨平台代码移植方面的突破性表现，展示了其如何通过 [[智能体式编程]] 在 30 分钟内将复杂的 CUDA 后端代码移植到 AMD [[rocm]] 平台，从而挑战英伟达的 [[cuda-护城河]]。同时，文章详细披露了 [[anthropic]] 内部全员使用 AI 编程的现状、Claude Code 的商业成功（ARR 超 10 亿美元）以及 [[boris-cherny]] 关于编程范式进化的观点。

## 核心事件：CUDA 转 ROCm
开发者 johnnytshi 利用 [[claude-code]] 在 30 分钟内成功将 [[leelachesszero]]（国际象棋引擎）的 CUDA 后端完整移植至 AMD ROCm 平台。
- **技术细节**：实现了针对 RDNA 3.5 架构的 FP16 优化，使用 rocBLAS 进行 GEMM 运算，MIOpen 进行卷积运算。
- **关键突破**：未使用 Hipify 等传统中间转换工具，而是通过 CLI 直接由 AI 理解逻辑并重写代码。
- **行业反响**：AMD 软件副总 Anush E. 对此表示震惊，认为 GPU 编程的未来属于 AI 智能体。

## 商业与行业影响
- **商业数据**：Claude Code 上线不到一年，ARR 突破 10 亿美元，占 [[anthropic]] 总 ARR（约 90 亿）的 12%。
- **内部实践**：[[anthropic]] 内部几乎 100% 的技术员工使用 [[claude-code]]，甚至该团队自身 95% 的代码也是由 AI 编写的。
- **竞争格局**：竞争对手 Cursor 同样达到 10 亿美元 ARR，AI 编程赛道全面爆发。

## 观点与趋势
- **工程师角色转型**：[[boris-cherny]] 提出 [[抽象化连续体]] 概念，认为从机器码到 AI 智能体是编程抽象的必然进化，工程师将转型为“智能体指挥官”。
- **技术局限**：对于针对特定硬件缓存层级做过极致优化的复杂内核，AI 目前仍难以完全取代人类专家。
- **未来展望**：[[anthropic]] 发布了面向非编程领域的智能体 Cowork，试图接管更多繁琐的日常任务。

## 相关条目
- [[claude-code]]：AI 编程代理工具，本文的主角。
- [[rocm]]：AMD 对标 CUDA 的软件平台，移植目标。
- [[boris-cherny]]：Claude Code 之父，提供了关于 AI 编程进化的一手观点。