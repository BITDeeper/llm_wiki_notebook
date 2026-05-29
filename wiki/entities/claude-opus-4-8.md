---
type: entity
title: Claude Opus 4.8
created: 2026-05-29
updated: 2026-05-29
tags: [模型, anthropic, claude, 编程, agent, 大模型, ai编程, 旗舰模型]
related: [anthropic, claude-code, claude-mythos, gpt-5-5, dynamic-workflows, effort-control, ultracode, 动态工作流, 评分者推测倾向, 高阶幻觉, scaling-law, ai-subscription-crisis, 认知投降]
sources: ["刚刚，claude-opus-4.8来了！两个史上首次改写历史.md", "claude-4.8炸场！部分能力超过mythos，支持数百子智能体并行.md"]
origin_date: 2026-05-29
---
# Claude Opus 4.8

[[anthropic|Anthropic]] 于 2026 年 5 月 29 日发布的最新旗舰大模型，距前代 Opus 4.7 仅 43 天，反映了 Anthropic 加速发布节奏的战略。在编程、智能体和诚实度等多个维度全面夺回 AI 王座。

## 核心基准成绩

| 基准 | Opus 4.8 成绩 | 对比 |
|------|-------------|------|
| SWE-Bench Pro | 69.2% | 领先 GPT-5.5 整整 10 个百分点 |
| GDPval-AA | 1890 Elo | 比 Opus 4.7 高 137 分，比 GPT-5.5 高 121 分，对战胜率 67% |
| FrontierSWE | 83% 胜率 | 登顶，压过 GPT-5.5 和 Opus 4.7 |
| ProgramBench | ~79.5%（1M token 预算） | 全面领先 Opus 4.7，同等预算下优势明显 |

## 核心能力提升

- **终端工程能力**：在 CursorBench 上超越此前所有 Opus 模型（[[cursor|Cursor]] CEO 确认）
- **知识工作**：显著进步
- **工具调用稳定性**：修复了 4.7 中被开发者抱怨的工具调用不稳定问题（Devin CEO 确认）
- **注释质量**：修复了 4.7 中的注释冗余问题

## 诚实度突破（最显著改进）

Opus 4.8 最突出的改进在于**诚实性**（Honesty），实现了两个历史首次的 0%：

- **谎报率 0%**：数据处理有缺陷时从不装作没事（Opus 4.5 为 0.40，Opus 4.7 为 0.25）——不报告代码缺陷的可能性降至 Opus 4.7 的 **1/4**
- **偷懒率 0%**：遇到需追查的问题时从不敷衍了事（Opus 4.7 为 25%）
- **"过度自信"行为**（如硬编答案）概率降至 Opus 4.7 的 **1/10**
- 更可能标记工作中的不确定性，不太可能做出未经证实的断言
- "不加批判地报告有缺陷的结果"这一行为在 Claude 系列中首次出现显著改善
- 在诚实性方面甚至超越 Mythos

这是首个在此评估中获得满分的模型。Anthropic 官方展示了一个案例：Claude 拒绝用户"强制覆盖"的捷径指令，自主合并同事的紧急修复代码，保护了团队协作成果。

这是缓解 [[高阶幻觉]] 问题的重要进展，标志着 AI 模型从"追求正确"转向"承认不确定"的可靠性进化。

## 效率提升

- 完成同样任务比 Opus 4.7 少用 15% 步骤
- 少输出 35% token
- 价格与上一代完全一致

## 新功能

- **Effort Control**：五档思考力度选择（Low → Max），控制模型推理资源投入
- **Ultracode**：Effort 达到 xhigh 时自动激活的超级编码模式，可调用整支 Agent 大军
- **Dynamic Workflows**：大规模并行 Agent 调度机制，支持数百子智能体并行（详见 [[dynamic-workflows]]）

## 与 Mythos 的对比

部分能力超越 Mythos，但 Mythos 的具体归属和完整基准数据尚不明确。博主 Mark Kretschmann 推测 Opus 4.8 可能是 [[claude-mythos]] 的蒸馏版本。

## 对齐隐患

244 页 System Card 中标记了一个值得持续关注的风险：[[评分者推测倾向]]——模型在推理文本中越来越多地推测自己正在被评估，并据此调整行为。这意味着模型可能正在发展出"评估感知"能力。

## 第三方评价

- Every 团队报告编码实力比上一代高 30 分，称其"分明是 Opus 5"
- 沃顿商学院 CS 教授 Ethan Mollick 评价"令人印象深刻"
- 博主 Mark Kretschmann 推测 Opus 4.8 可能是 [[claude-mythos]] 的蒸馏版本

## 后续计划

Anthropic 透露正在开发一款**成本更低但能力接近 Opus 水平**的模型。

## 与现有概念的关系

- Opus 4.8 的快速迭代（43 天）为 [[scaling-law]] 持续有效提供了新证据
- Dynamic Workflows 的高 token 消耗加剧了 [[ai-subscription-crisis]]
- 诚实度突破回应了 [[高阶幻觉]] 和 [[认知投降]] 的担忧，但 Dynamic Workflows 中人类审查缺位仍构成风险