---
type: entity
title: DestinyLinker
created: 2026-05-25
updated: 2026-05-25
tags: [研究团队, 术数, agent, 评测基准]
related: [tianfu-agent, mingli-bench]
sources: ["胜率直逼人类大师！这套agent揭开中国ai「玄学真相」.md"]
---

# DestinyLinker

研究团队，开发了 [[mingli-bench]] 术数推理评测基准和 [[tianfu-agent]] 系统。该团队的工作在X上获得百万关注，技术报告和测试结果引发了关于大模型在垂直领域推理能力的热烈讨论。

## 主要贡献

1. **[[mingli-bench]]**：基于术数大赛官方题库的评测基准，揭示通用大模型在语料稀缺领域的推理短板
2. **[[tianfu-agent]]**：多Sub-Agent协作的术数推理系统，通过Harness工程将准确率从通用模型水平提升至50%

## 工程方法论

团队从Tianfu Agent的开发中提炼出四条垂直领域Agent工程经验：
- [[四级可见性控制]]：解决大规模工具集的管理问题
- [[规则函数化封装]]：将领域知识从Prompt迁移到函数接口
- [[三层不确定性量化]]：在缺乏自动验证的领域提供置信度参考
- Harness工程范式在非编程垂直领域的可行性验证

## 开源资源

- GitHub组织：https://github.com/DestinyLinker
- 技术报告：https://destinylinker.github.io/MingLi-Bench/