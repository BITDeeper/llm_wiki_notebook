---
type: source
title: "曝GPT-5.5用上「全球最快芯片」，Claude慌了！"
created: 2026-05-18
updated: 2026-05-18
tags: [cerebras, wse-3, 推理速度, openai, anthropic, 芯片, ipo, semianalysis]
related: [cerebras, wse-3, openai, anthropic, semianalysis, 推理速度竞争, gpt-5.5]
sources: ["曝gpt-5.5用上「全球最快芯片」，claude慌了！.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/xGQ5pd1-B-2iF7Fhz_Zy_w"
venue: 新智元
---
# 曝GPT-5.5用上「全球最快芯片」，Claude慌了！

## 摘要

本文围绕晶圆级芯片公司 [[cerebras]] 的 WSE-3 芯片在 AI 推理领域的突破与局限展开深度分析。核心发现：

1. **速度碾压**：[[gpt-5.3-codex-spark]]（120B 参数）在 WSE-3 上实现 2000 token/s，比 GPU 快一个数量级。
2. **物理天花板**：44GB SRAM 容量和 150GB/s 对外带宽使大模型部署不可行，CFO 关于万亿参数模型的声称存疑。
3. **速度为王**：[[semianalysis]] 年化 1000 万美元 AI 工具费中 80% 花在 Opus 4.6 fast，工程师拒绝升级到更聪明但无 fast 模式的 Opus 4.7。
4. **排他封锁**：[[openai]] 通过 12% 股权 + 10 亿美元贷款 + 246 亿美元订单 + 排他条款将 [[cerebras]] 锁定为推理武器，封锁 [[anthropic]]。
5. **推理战争**：2026 年三分之二 AI 算力消耗在推理上，推理取代训练成为主战场。

## 关键数据

- WSE-3：46,225 mm² 晶圆级芯片，4 万亿晶体管，90 万核心，44GB SRAM，21PB/s 带宽
- Cerebras IPO：560 亿美元估值，首日暴涨 68%，2026 年至今最大科技 IPO
- Artificial Analysis 实测：Cerebras 2400 token/s vs 英伟达 Blackwell 1040 token/s
- 43.2 万条真实请求中近 50% 超过 128K 上下文