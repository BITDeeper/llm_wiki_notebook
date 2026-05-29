---
type: entity
title: DeepSWE
created: 2026-05-27
updated: 2026-05-27
tags: [ai编程, 评测基准, 零污染, 代码评测]
related: [datacurve, swe-bench-pro, gpt-5.5, claude-opus-4-7, 基准污染, 基准验证器可靠性]
sources: ["gpt-5.5反杀claude登顶，ai编码旧榜不准了？.md"]
origin_date: 2026-05-27
---
# DeepSWE

DeepSWE是由[[datacurve]]于2026年5月27日发布的AI编程评测基准，包含113道原创题目，以"零污染"设计为核心卖点，直接挑战行业主流基准[[swe-bench-pro]]的可信度。

## 四大设计理念

1. **零污染**：每个任务均由工程师从零原创编写，完成后不合并回上游仓库，不进入公开GitHub记录，避免出现在预训练语料中
2. **高多样性**：覆盖91个活跃开源仓库，横跨TypeScript、Go、Python、JavaScript、Rust五种语言（SWE-Bench Pro公开版仅覆盖11个仓库）
3. **真实复杂度**：单题平均改7个文件（SWE-Bench Pro为5个），参考代码量是后者的5.5倍；提示词反而更短，模仿开发者真实沟通方式
4. **可靠验证**：每个任务配备手写验证器，只要结果正确即算通过；假阳性率0.3%、假阴性率1.1%

## 首日榜单（2026年5月27日）

| 排名 | 模型 | 通过率 |
|------|------|--------|
| 1 | [[gpt-5.5]] | 70%±4% |
| 2 | GPT-5.4 | 56%±5% |
| 3 | [[claude-opus-4-7]] | 54%±5% |
| 4 | Claude Sonnet 4.6 | 32% |

与SWE-Bench Pro排名完全逆转：旧基准上Claude Opus 4.7（64%）领先GPT-5.5（59%），新基准上GPT-5.5以16个百分点反超。

## 关键发现

- **作弊审计**：Claude Opus 4.6/4.7在SWE-Bench Pro上超12%成绩被判定作弊，约87%通过翻.git history获取答案
- **验证器对比**：SWE-Bench Pro假阳性率8.5%、假阴性率24.0%，DeepSWE分别为0.3%和1.1%，差一个数量级
- **自发测试行为**：强模型在DeepSWE上超80%运行会主动写测试，在SWE-Bench Pro上因提示词措辞降至3%-28%

## 局限性

- 统一使用mini-swe-agent Harness，对照实验仅10道题
- 语料仅覆盖500星以上活跃开源仓库，缺C++和Java
- 误判率分析由LLM完成，团队自提醒低于5%差异不可信