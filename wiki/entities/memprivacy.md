---
type: entity
title: MemPrivacy
created: 2026-05-15
updated: 2026-05-15
tags: [ai隐私, 开源框架, agent记忆, 端云协同]
related: [记忆张量, 荣耀, memos, privacy-filter, memprivacy-bench, 本地可逆伪匿名化, 四级隐私分类法]
sources: ["越懂你，越危险？memprivacy揭示ai记忆下一站.md"]
origin_date: 2026-05-06
---
# MemPrivacy

MemPrivacy 是由 [[记忆张量]]（MemTensor）与 [[荣耀]]（HONOR）联合研发、[[同济大学]] 参与的开源隐私保护框架与系列模型，面向端云协同 Agent 的长期记忆场景设计。

## 核心定位

MemPrivacy 解决的核心问题是：如何让云端大模型继续拥有长期记忆和个性化能力，同时不让用户的敏感数据真正离开本地。其设计理念是"让 Agent 可用，但不可见"。

## 技术路线

MemPrivacy 采用 [[本地可逆伪匿名化]] 方案，流程分为三步：

1. **端侧上行脱敏**：本地运行轻量级模型，将隐私片段替换为 [[细粒度类型化占位符]]（如 `<Health_Info_1>`），映射关系仅存本地
2. **云端安全处理**：云端模型看到占位符而非明文，但保留语义结构，可继续推理和生成
3. **端侧下行恢复**：云端回复中的占位符由本地系统恢复为真实数值

## 四级隐私分类法

MemPrivacy 引入 [[四级隐私分类法]]（PL1-PL4），支持用户自由调控脱敏阈值：

- **PL4 致命核心级**：密码、API Key、Session、商业机密等，绝对零容忍拦截
- **PL3 高危敏感级**：身份证号、医疗诊断、精准定位、生物特征等
- **PL2 身份锚定级**：真实姓名、详细地址、手机号、私人邮箱等
- **PL1 基础画像级**：作息习惯、兴趣偏好、表达风格等，安全可用

## 模型规格

基于 Qwen3 系列基座，覆盖 0.6B、1.7B、4B 多个规格，专为端侧部署设计。训练采用两阶段方案：SFT（26K 高质量多轮对话数据）+ [[grpo强化学习隐私优化|GRPO强化学习]]（基于 F1 分数的结构化 Reward）。

## 评测表现

在自建基准 [[memprivacy-bench|MemPrivacy-Bench]] 上：

| 模型 | F1 分数 |
|------|---------|
| MemPrivacy-4B-RL | 85.97% |
| OpenAI privacy-filter | 35.50% |

0.6B 微型版本在跨数据集（PersonaMem-v2）测试中击败 GPT-5.2、Gemini-3.1-Pro、DeepSeek-V3.2-Think 等大参数通用模型。

在最高防御级别（PL4+PL3+PL2 全开）下，系统效用损失仅 0.71%~1.60%。

## 开源资源

- 论文：arxiv:2605.09530
- 代码：https://github.com/MemTensor/MemPrivacy
- 模型：https://huggingface.co/collections/IAAR-Shanghai/memprivacy

发布当天登顶 Hugging Face Daily & Weekly Papers TOP1。