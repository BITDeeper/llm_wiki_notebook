---
type: source
title: "GPT-5.5全球首破！0源码盲写程序，编程AI进入新纪元"
created: 2026-05-13
updated: 2026-05-13
tags: [gpt-5.5, programbench, 编程基准, 推理算力, openai, anthropic]
related: [gpt-5.5, programbench, 从0重建程序范式, 推理算力scaling-law, openai, anthropic]
sources: ["gpt-5.5全球首破！0源码盲写程序，编程ai进入新纪元.md"]
authors: [新智元, 桃子]
year: 2026
url: "https://mp.weixin.qq.com/s/cpPNauxJJHcS8JCm_Uu3AA"
venue: 新智元
---
# GPT-5.5全球首破！0源码盲写程序，编程AI进入新纪元

## 摘要

新智元2026年5月13日报道。[[gpt-5.5]] 在 [[programbench]] 上实现全球首破，成为首个在该基准上解出题目的AI模型。[[programbench]] 由 Meta 联合斯坦福、哈佛推出，要求模型在无源码、无反编译、无联网条件下从零重建完整程序，200道题此前所有模型通过率均为0%。

## 核心发现

1. **首破记录**：GPT-5.5 在 cmatrix 任务上首次通关，通过率 0.5%（1/200），同时有 26 个任务通过 95% 以上单元测试。
2. **推理算力是核心变量**：同一 GPT-5.5 底座，medium 模式几乎交白卷，high 模式满分通关 cmatrix（C语言），xhigh 模式同样满分通关（Python），并在累积直方图上全程碾压所有对手。
3. **Claude Opus 4.7 表现不佳**：花费 $10.74、调用 178 次 API（GPT-5.5 为 $1.04、17 次），因两个低级 bug（大小写敏感、退出码错误）导致 19 个测试失败。
4. **传统评测饱和**：SWE-bench 通过率已达 88.7%，GPQA 上 AI 已超多数 PhD，区分度急剧下降。

## 关键数据

| 模型 | 推理级别 | 成本 | API调用次数 | cmatrix结果 |
|------|---------|------|-----------|------------|
| GPT-5.5 | medium | - | - | 未通过 |
| GPT-5.5 | high | $1.04 | 17 | 通过（C语言） |
| GPT-5.5 | xhigh | - | - | 通过（Python） |
| Claude Opus 4.7 | xhigh | $10.74 | 178 | 失败（19个测试） |

## 关联条目

- [[gpt-5.5]] — 核心模型
- [[programbench]] — 评测基准
- [[从0重建程序范式]] — 新评测范式
- [[推理算力scaling-law]] — 推理侧扩展定律
- [[noam-brown]] — OpenAI研究员，推理算力Scaling Law提出者