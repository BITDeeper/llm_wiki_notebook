---
type: source
title: "懂人性更懂执行，蚂蚁这个万亿开源模型把情商和Agent战斗力都给拉满了"
tags: [蚂蚁百灵, ling-2.5-1t, 开源模型, agent, 即时模型]
related: [ling-2.5-1t, 蚂蚁百灵, 即时模型, 混合线性注意力机制, 高token效率, agent驱动校验, 人情世故, openclaw, ai-subscription-crisis]
created: 2026-02-19
updated: 2026-02-19
authors: [克雷西]
year: 2026
url: "https://mp.weixin.qq.com/s/HQV9kgPJiCFqKPCcMeqszA"
venue: "量子位"
sources: ["懂人性更懂执行，蚂蚁这个万亿开源模型把情商和agent战斗力都给拉满了.md"]
---

# 懂人性更懂执行，蚂蚁这个万亿开源模型把情商和Agent战斗力都给拉满了

## 摘要
本文详细介绍了蚂蚁百灵大模型家族推出的万亿参数旗舰模型 [[ling-2.5-1t]]。该模型定位为 [[即时模型]]，主打在保持万亿参数强大逻辑能力的同时，通过 [[混合线性注意力机制]] 实现极致的推理效率和低延迟。文章重点展示了其在 [[高token效率]]、[[agent驱动校验]] 以及 [[人情世故]]（高情商写作）方面的独特优势，并通过与 GPT-5.2 的对比及 [[openclaw]] 实测，验证了其在复杂 Agent 任务和情感化文本生成中的双重实力。

## 核心观点

### 1. 万亿参数的“身轻如燕”
[[ling-2.5-1t]] 挑战了“大模型必然慢”的刻板印象。通过引入 [[混合线性注意力机制]]（结合 Ring-flash-linear-2.0、MLA 和 Lightning Linear），该模型将 KV Cache 压至极致。虽然激活参数量达 63B，但运行速度比 32B 模型更快，且支持 1M Tokens 超长上下文，在长文本吞吐和“大海捞针”测试中表现优异。

### 2. 极致的 Token 效率与 Agent 执行力
针对 Agent 任务中常见的“废话多、成本高”痛点，该模型强调 [[高token效率]]，在处理复杂任务链路时直击要害，避免无效思维漫游。结合 [[agent驱动校验]]（基于 Rubric 和 Code 断言的硬性校验奖励），其在 IFEval 等基准测试中的指令遵循能力显著提升，并深度适配了 Cline、Claude Code 等主流编程智能体。

### 3. 保留“人味儿”的高情商写作
针对当前大模型“越来越理性但越来越不通人性”的趋势，蚂蚁团队通过人文社科专家进行 RLHF 特训，使 [[ling-2.5-1t]] 在写作上展现出细腻的情感颗粒度和分寸感（即 [[人情世故]]）。在与 GPT-5.2 的“CEO 翻车致歉”对比测试中，Ling-2.5-1T 生成的文案更具“活人感”，懂得示弱与担当，而非冷冰冰的逻辑堆砌。

### 4. 实战验证：OpenClaw 自动化办公
文章记录了一次使用 [[openclaw]] 接入 [[ling-2.5-1t]] 的实测。模型成功自主完成了从读取桌面乱码 JSON 日志（含 3000 行、50 个订单、15 种规格及隐藏参数）到生成清晰 Excel 表格的全链路任务。过程中展现了老练的 Agent 自主性，包括自动定位文件、拆解逻辑、编写 Python 代码及安装依赖，证明了其作为“桌面级 Agent”的落地能力。

## 关键技术细节
- **架构升级**：从 GQA 结构升级为 1:7 比例的 MLA + Lightning Linear 组合。
- **训练数据**：预训练语料扩充至 29T。
- **长文本能力**：支持 1M Tokens 上下文，全窗口内表现优异。
- **指令遵循**：引入 Agent-based 校验机制，提升多重约束下的执行准确率。

## 行业意义
[[ling-2.5-1t]] 的发布标志着蚂蚁 InclusionAI 开源拼图的进一步完善（Ring 专攻逻辑，Ming 擅长多模态，Ling 主打通用）。它不仅验证了混合线性架构在超大规模模型上的成熟度，也为开发者和用户提供了一套“用得起、跑得快、写得好、靠得住”的可控技术底座，有效缓解了因闭源 API 不确定性带来的 [[ai-subscription-crisis]]。

## 链接
- Hugging Face: https://huggingface.co/inclusionAI/Ling-2.5-1T
- ModelScope: https://modelscope.cn/models/inclusionAI/Ling-2.5-1T