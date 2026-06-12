---
type: source
title: "斩获15个顶级零日漏洞：0G Lab联合新国立、北大和北邮团队构建的共识协议Debug智能体框架"
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/kijHo-YFW2y_lpvV0fj78w"
venue: 机器之心
tags: [共识协议, 零日漏洞, 多智能体, 系统安全, ICML-2026, Agora]
related: [agora-共识协议debug智能体框架, 0g-labs, 假说驱动测试, 智能体化质量控制, 多agent协作架构]
created: 2026-06-11
updated: 2026-06-11
sources: ["rss/斩获15个顶级零日漏洞：0g-lab联合新国立，北大和北邮团队构建的共识协议debug智能体框架.md"]
---
# 斩获15个顶级零日漏洞：0G Lab联合新国立、北大和北邮团队构建的共识协议Debug智能体框架

## 摘要

机器之心2026年6月11日发布的深度报道，介绍[[0g-labs|0G Labs]]联合[[新加坡国立大学]]、[[北京大学]]、[[北京邮电大学]]等团队提出的首个面向生产级共识协议的多Agent自动化Deep Bug检测框架[[agora-共识协议debug智能体框架|Agora]]。该论文已中稿ICML 2026。

## 核心内容

### 研究背景
分布式共识协议（如Paxos、Raft、PBFT）是数字世界的底层地基，但其实现难度极高。传统Fuzzing受限于[[状态空间爆炸]]，单体LLM面对协议级深层逻辑漏洞几乎束手无策。

### 核心框架
Agora首次将学术界经典的[[假说驱动测试]]范式引入LLM Agent系统，采用三Agent分工架构：
- **Orchestrator Agent**（协调者）：全局状态维护与漏洞剥削
- **Strategy Agent**（策略家）：分布式领域知识注入与异常场景生成
- **TestGen Agent**（代码官）：代码测试与动态评估

### 核心成果
- 在Raft、EPaxos、HotStuff、BullShark等协议中发现**15个先前未知的协议级深层逻辑漏洞**
- 真实逻辑漏洞占比**73.9%**，误报率仅26.1%
- 平均每个顶级逻辑Bug消耗约**5.32M tokens**（约40美元）
- GPT-5.2、Claude Sonnet 4.5、Gemini 3.0 Pro Preview、Qwen3 Coder等baseline**全线挂零**（0/15）

### 行业对比
文章将Agora与[[anthropic|Anthropic]]内部在[[claude-code|Claude Code]]中推进的[[glasswing|Glasswing]]项目进行对比，指出后者为"重资产、高Token吞噬、仅限巨头闭门合作"路线，而Agora提供平权方案。

### 未来展望
Agora的"大模型+多Agent协同+假说驱动"范式可推广至数据库并发控制、操作系统内核、Web3智能合约审计等领域。

## 关键数据
- 论文arXiv链接：https://arxiv.org/abs/2605.29910v1
- 开源地址：github.com/0gfoundation/agora
- 会议：ICML 2026