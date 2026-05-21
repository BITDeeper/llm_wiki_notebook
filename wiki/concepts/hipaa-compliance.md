---
type: concept
title: HIPAA 合规
tags: [law, healthcare, privacy, regulation]
related: [医疗数据主权, claude-for-healthcare, anthropic]
created: 2026-01-17
updated: 2026-01-17
sources: ["硅谷ai战火烧进医院！终于可以告别「天书」化验单了.md"]
---

# HIPAA 合规

[[HIPAA 合规]] 指遵守美国《健康保险携带与责任法案》（Health Insurance Portability and Accountability Act）中关于医疗数据隐私和安全的规定。这是医疗 AI 产品进入美国市场的准入门槛和核心信任背书。

## 核心要求
HIPAA 制定了一系列标准来保护受保护健康信息（PHI），主要包括：
- **隐私规则**：限制 PHI 的使用和披露，赋予患者查看和获取其健康记录的权利。
- **安全规则**：要求对电子 PHI (ePHI) 实施行政、物理和技术保障措施。
- **交易规则**：规定电子健康交易的标准格式。

## 在 AI 中的应用
对于 [[Anthropic]] 等公司推出的医疗 AI 产品（如 [[Claude for Healthcare]]），HIPAA 合规意味着：
1.  **数据处理协议**：与客户签署 BAA（商业伙伴协议），明确数据保护责任。
2.  **数据加密与存储**：在传输和存储过程中对敏感健康数据进行加密。
3.  **访问控制**：严格限制对健康数据的访问权限，确保仅用于授权目的（如推理），而不用于模型训练。

## 重要性
在医疗领域，“安全”和“隐私”不仅是底层保障，更是产品竞争力的核心。符合 HIPAA 标准意味着产品达到了医疗数据领域的“金融级”安全要求，是赢得医院、保险公司和患者信任的前提。