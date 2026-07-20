---
type: concept
title: Agent安全双重挑战
created: 2026-06-12
updated: 2026-06-12
tags: [AI安全, 智能体, 密码学, 图灵奖]
related: [whitfield-diffie]
sources: ["rss/2026智源大会：一场技术硬核的ai年度盛会.md"]
---
# Agent安全双重挑战

2015年图灵奖得主[[whitfield-diffie|Whitfield Diffie]]在第八届智源大会上提出的Agent时代安全框架。

## 双重挑战

### Security For AI Agents（保护智能体安全）
确保智能体本身不被攻击、篡改或滥用。

### Security Against AI Agents（防范智能体威胁）
防范智能体对系统、数据和用户造成安全威胁。

## 智能体限制问题（Confinement Problem）

Diffie强调，保证智能体只能访问授权资源的"限制"能力，在现有编程实践中仍做得不足。这是Agent安全的核心技术挑战。

## 形式化方法愿景

Diffie提出，当前"控制论（反馈）"式的做法是在程序失败时进行修复，未来应开发形式化方法，大幅提升程序按预期运行的可靠性。密码系统因程序规模极小而可充分研究验证，但典型计算机程序（编译器、操作系统、应用、智能体）规模远超人类验证能力，期望未来由AI完成验证。