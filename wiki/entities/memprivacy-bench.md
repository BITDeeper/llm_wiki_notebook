---
type: entity
title: MemPrivacy-Bench
created: 2026-05-15
updated: 2026-05-15
tags: [评测基准, 隐私检测, 中英双语]
related: [memprivacy, privacy-filter]
sources: ["越懂你，越危险？memprivacy揭示ai记忆下一站.md"]
---
# MemPrivacy-Bench

MemPrivacy-Bench 是 [[记忆张量]] 团队为验证 [[memprivacy|MemPrivacy]] 能力而构建的评测基准。

## 数据规模

- 覆盖 **200 个用户**的对话历史
- 包含超过 **15.5 万个隐私项**
- 支持 **中英双语**隐私信息检测

## 评测维度

提取准确率以隐私文本、级别、类型的综合 F1 分数为衡量标准。

## 外部验证

为测试泛化能力，团队还在外部个性化长文本对话数据集 PersonaMem-v2 上进行了 OOD（Out-of-Distribution）交叉测试。

## 注意事项

该基准为 MemPrivacy 团队自建，MemPrivacy 在其上大幅领先，存在潜在的主场优势问题。需结合外部数据集（如 PersonaMem-v2）的结果综合评估。