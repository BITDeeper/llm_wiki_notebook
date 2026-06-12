---
type: entity
title: gget virus
created: 2026-06-09
updated: 2026-06-10
tags: [工具, 病毒学, 数据检索, 确定性工具, ncbi, 确定性检索, 生物信息学, anthropic]
related: [virbench, ncbi-virus, 生物学agent数据瓶颈, 确定性执行层, anthropic, ncbi, 生物数据库机器不可访问性, ai-for-science]
sources: ["rss/anthropic最新博客：生物学agent的瓶颈不在模型，而在数据基础设施.md", "rss/claude把病毒起源算错90年，都是网页惹的祸？.md"]
---
# gget virus

Anthropic与NCBI合作开发的[[确定性执行层]]工具，目标是把NCBI Virus网页界面中的过滤行为翻译为可复现的程序化系统，使病毒数据检索变成Agent和人类都可以直接调用的稳定工具。

## 技术特点

- 统筹NCBI的REST、Datasets、E-utilities等多个底层API系统，复现NCBI Virus网页界面的完整行为
- 自动判断哪些筛选条件可通过现有API完成、哪些必须在本地校验
- 处理批量检索，确保大规模数据集（如SARS-CoV-2、甲型流感）被完整取回，不会因分页或中途截断遗漏记录
- 从INSDC体系（NCBI、ENA、DDBJ）下载病毒核苷酸序列和链接元数据；如筛选条件依赖其他数据库的补充信息，会取回相关记录完成过滤并保存GenBank信息
- 输出FASTA、CSV、JSONL等人和机器均可读的标准化格式，附带详细日志说明结果产生过程
- 高频查询数据传输量压缩超过98%

## 实测效果

在[[virbench|VirBench]]基准测试中，接入gget virus后：

- 所有被测Agent准确率提升至90%以上
- [[gpt-5-5|GPT-5.5]]最高达99.7%
- 运行间稳定性从散乱状态升至0.92–1.00，多次运行之间的波动基本消失
- 不同模型之间的性能差距被大幅抹平

## 设计哲学与核心意义

gget virus不是"AI插件"，而是确定性检索层——它使Agent给出的答案不再只是"看起来合理"，而是可以检查、复现和审计的。它体现了"便宜模型+好工具 > 贵模型+无工具"的实用主义路线：可靠的数据获取不应依赖最贵最新的模型，便宜模型配对工具层同样可靠。

值得注意的是，GPT-5.5在360次运行中曾未被提示就自主找到并使用gget virus，且那是该题唯一答对的一次。