---
type: entity
title: Tax AI
created: 2026-06-06
updated: 2026-06-06
tags: [产品, ai报税, 自进化, openai, thrive]
related: [openai, thrive-holdings, crete, codex, agent自进化闭环, 系统智能]
sources: ["openai曝光「自进化」ai！6周准确率翻三倍，bug全自己修.md"]
origin_date: 2025-12-01
---
# Tax AI

OpenAI与[[thrive-holdings]]联合开发的AI报税系统，是[[agent自进化闭环|eval驱动自进化闭环]]的首个生产级验证案例。服务于[[crete]]会计师联盟旗下30多家事务所。

## 核心数据

- **6周准确率**：从25%飙升至86%
- **单季处理量**：7000份税表
- **最高准确率**：97%
- **产能提升**：约50%
- **资深会计师工时**：从180小时降至15小时

## 自进化机制

Tax AI通过三招实现持续改进：

1. **结构化纠错数据**：会计师每改一个字段，系统记录"AI预测→人工修改→最终采用"三元组
2. **生产trace全链路留痕**：从源文件上传到最终报税的每个节点都有trace，出错时可精确定位根因
3. **Codex驱动修复闭环**：反复出现的错误pattern被打包为工程任务，[[codex]]拿到完整trace、源文件样本、期望输出和eval测试集，自主完成"发现→定位→修复→验证"

## 典型案例

租赁房产相关字段处理：从几乎不可用到90%精确率和召回率，耗时六周。积累的抽象能力和eval规范让后续支持Schedule C和Schedule A变得更快。

## IP归属

全部知识产权归[[thrive-holdings]]所有。OpenAI派驻工程师半年，最终未保留IP，这在硅谷大厂AI合作中极其罕见，暗示OpenAI的战略资产是可复制的自进化方法论本身。

## 扩展方向

[[thrive-holdings]]已在将同样的闭环复制到记账、审计、IT运维。