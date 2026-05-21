---
type: entity
title: Christos Tzamos
tags: [researcher, mit, llm, theory, percepta]
related: [percepta, transformer, 内部计算, transformer-内置计算机, andrej-karpathy]
created: 2026-03-21
updated: 2026-05-08
sources: ["太疯了！mit博士在transformer里造计算机，攻破llm终极缺陷.md", "卡帕西点赞transformer内置计算机！每秒3万token吞吐，拿下世界最难数独.md"]
---

# Christos Tzamos

[[Christos Tzamos]] 是一位计算机科学研究人员，现任雅典大学计算机科学副教授，同时也是 AI 实验室 [[Percepta]] 的创始研究员及研究团队负责人。他在人工智能理论、算法和机器学习领域具有深厚的学术背景。

## 学术背景
- **学位**：麻省理工学院（MIT）博士。
- **任职**：雅典大学。

## 研究方向
Tzamos 主要关注如何突破现有深度学习模型的架构限制。他的工作重点在于探索大语言模型（LLM）的内在能力边界，特别是如何赋予神经网络确定性的计算能力。

## 主要成就
- **Transformer 内置计算机**：他领衔了关于 [[Transformer 内置计算机]] 的研究，成功地在 [[Transformer]] 权重内部嵌入了一个完整的 [[WebAssembly (WASM)]] 虚拟机，实现了 [[内部计算]]。这一成果攻破了 LLM 无法进行精确算术运算的“终极缺陷”。
- **性能突破**：该研究在普通 CPU 上实现了每秒 3 万 Token 的吞吐量，并成功求解了“世界最难数独”。这一工作因其在推理效率和精确度上的显著提升，获得了 [[Andrej Karpathy]] 的公开点赞。
- **技术创新**：团队通过改进注意力机制（如 [[2维注意力头]]）和内嵌计算逻辑，开发了针对长序列计算的优化技术（快速解码路径），使得模型在执行复杂算法时速度提升了数个数量级。

## 学术观点
Tzamos 认为，不应仅仅通过给 LLM 外挂工具（如 Python 解释器）来解决计算问题，而应从根本上改变模型的架构，使其具备原生的计算能力。他的研究推动了 [[混合-LLM-架构]] 范式的形成，即结合神经网络的推理能力和符号系统的计算精度。