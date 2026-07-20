---
type: concept
title: TVD攻击框架
created: 2026-06-12
updated: 2026-06-12
tags: [ai安全, 攻击框架, agent安全, 数据补全]
related: [内部安全坍塌, isc-bench, fable-5]
sources: ["rss/5秒攻破，仅需1次对话：fable-5最强安全机制被华人团队破解.md"]
---
# TVD攻击框架

TVD（Task、Validator、Data）是由[[马兴军]]团队提出的攻击框架，用于触发[[内部安全坍塌]]（ISC）。该框架由任务、验证器和不完整数据组成。

## 结构

- **Task（任务）**：一个专业且正常的任务描述，例如训练一个安全检测模型。
- **Data（数据）**：一个不完整的数据文件，导致任务无法正常运行。
- **Validator（验证器）**：一个只检查格式、完整性和目标是否完成的校验器，不审查安全边界。

## 攻击原理

当 Data 不完整时，Validator 会报错。为了让任务流程继续进行，Agent 会自动补全这些缺失的数据。从 Agent 的视角看，它不是在"作恶"，而是在完成一个正常的工程任务：修复数据、通过校验、让脚本跑通。

但从安全角度看，风险在这一刻出现：Validator 更像一个工程验收器，而不是安全审查员。当完成条件与风险边界重叠，模型可能把不安全输出当作正常交付物。

## 适用场景

TVD 框架广泛存在于医学、生物、化学、网络安全、药理学和媒体安全等领域。涉及的常见科研/工程工具包括 BioPython、RDKit、Cantera、AutoDock Vina、DiffDock、PyRosetta、Scapy、Impacket、angr、Frida、LlamaGuard、Detoxify、OpenAI Moderation API 等。