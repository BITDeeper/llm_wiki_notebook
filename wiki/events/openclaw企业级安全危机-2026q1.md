---
type: event
title: OpenClaw企业级安全危机
created: 2026-05-22
updated: 2026-05-22
tags: [安全, openclaw, 企业级, 事故]
related: [openclaw, nemo-claw, 企业级agent工程底座, 三道安全墙]
sources: ["企业养虾时代开启？anthropic连夜更新架构，中国大厂已经跑通.md"]
time_span:
  start: 2026-02-01
  end: 2026-03-31
participants: [openclaw]
causes: []
effects: [nemo-claw, jvs-crew]
significance: high
---
# OpenClaw企业级安全危机

2026年Q1集中暴露的[[openclaw|OpenClaw]]企业级安全与稳定性事件集群，直接推动了行业对[[企业级agent工程底座]]的重视和投入。

## 关键事件

### 安全暴露（2026年2月）
- SecurityScorecard发现超过4万个暴露在公网的OpenClaw实例
- 其中三分之一存在已知漏洞
- Token Security报告22%员工在公司电脑私自安装Agent，IT部门不知情（影子IT问题）

### 不兼容更新（2026年3月底）
- OpenClaw大更新突然不向前兼容
- 企业用户之前积累的工作全部失效
- 用户一天中有数小时无法使用

### 企业自建碰壁（2026年3-4月）
- 某科技厂商发现OpenClaw要求容器7×24在线，千万级用户场景成本爆炸
- 另一科技公司使用阿里云云电脑+安全软件自建平台，一次升级导致所有智能体集体下线、大量记忆丢失

## 影响

这一系列事件直接催生了三路企业级解决方案：
- [[nemo-claw|NemoClaw]]：英伟达联合OpenClaw推出的企业版
- [[jvs-crew|JVS Crew]]：阿里云的企业级Agent构建平台
- [[claude-managed-agents|Claude Managed Agents]]：Anthropic的企业级托管方案