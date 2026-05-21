---
type: concept
title: Orbital Data Center
tags: [infrastructure, space, data-center]
related: [space-based-ai, thermal-radiation-in-vacuum, single-event-upsets]
created: 2026-02-03
updated: 2026-02-03
sources: ["spacex为何官宣收购xai？8万亿太空炼丹梦，别无脑跟进！.md"]
---

# Orbital Data Center

轨道数据中心是指部署在太空中的服务器集群。

## 技术瓶颈
### 1. 真空散热
在地球表面，数据中心依靠空气对流散热。而在真空的太空中，热量只能通过热辐射散发。
- **Stefan-Boltzmann 定律**：辐射散热效率远低于对流。
- **工程代价**：需要展开比卫星本体大数倍的散热翼板，且需精确控制姿态（一面背对太阳散热，一面面向太阳取能）。

### 2. 辐射干扰
高能粒子穿透芯片导致 [[Single Event Upsets]]（SEU），即内存位翻转（0变1）。
- **对训练的影响**：AI 训练需要数万张卡连续运行数周无故障，太空环境的高辐射频率使得这种连续性几乎不可能维持。
- **缓解措施**：使用 ECC 内存和软件检查点，但这会进一步降低效率。

## 战略价值
尽管存在上述瓶颈，但在特定场景下（如军事侦察、灾害监测）的边缘推理具有不可替代的低延迟优势。