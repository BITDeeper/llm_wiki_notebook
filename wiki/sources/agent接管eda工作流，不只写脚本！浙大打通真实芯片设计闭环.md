---
type: source
title: "Agent接管EDA工作流，不只写脚本！浙大打通真实芯片设计闭环"
tags: [eda, agent, 芯片设计, 浙江大学, workflow-automation]
related: [openclaw-zju, fluxeda, zhuo-cheng-team, eda-agent]
created: 2026-04-06
updated: 2026-04-06
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/pF9sWwzrc4l-7ITgN831Pg"
venue: "新智元"
sources: ["agent接管EDA工作流，不只写脚本！浙大打通真实芯片设计闭环.md"]
---

# Agent接管EDA工作流，不只写脚本！浙大打通真实芯片设计闭环

## 摘要
本文报道了浙江大学集成电路学院卓成团队构建的 OpenClaw + FluxEDA 联合架构。该系统标志着大模型在 EDA 领域从单纯的脚本生成工具，进化为能够自主接管真实芯片设计优化流程的 Agent。文章详细介绍了该系统如何通过 MCP 协议和 Skill 机制安全地接入真实 EDA 工具链，并在 Post P&R 自动化 ECO 和标准单元库子库优化等任务中实现了闭环验证。

## 核心观点
- **范式转变**：EDA 领域的 AI 应用正从“辅助写脚本”转向“Agent 自主推进流程”。
- **系统架构**：OpenClaw 作为“大脑”负责任务编排，FluxEDA 作为“神经系统”提供统一的执行底座和安全沙箱。
- **工程落地**：该研究基于真实的 12 英寸 CMOS 产教融合平台，解决了真实工业环境下的工具接入和流程自动化问题。

## 关键技术细节
- **FluxEDA**：通过 TCL Gateway、Socket RPC 等技术将异构 EDA 工具转化为统一的原子 API。
- **MCP + Skill**：通过显式声明的接口约束模型行为，隔离了直接操作 Shell 的风险。
- **实战案例**：
    - **Post P&R ECO**：Agent 自主判断修复优先级（Setup -> Hold），将 Setup TNS 从 -37.36 提升至 -34.78，Hold 违例清零。
    - **库优化**：Agent 展现结构洞察力，将 Cell 种类减少 76%（128 -> 30），面积显著缩减。

## 相关实体
- [[zhuo-cheng-team]]：浙江大学集成电路学院卓成团队。
- [[openclaw-zju]]：大模型 Agent 编排层。
- [[fluxeda]]：统一执行底座。
- [[eda-agent]]：AI 在 EDA 领域的应用范式。

## 原文链接
[新智元原文](https://mp.weixin.qq.com/s/pF9sWwzrc4l-7ITgN831Pg)