---
type: source
title: "104人重写底层，OpenClaw装上「任务大脑」，连QQ机器人都能管"
tags: [ai-agent, open-source, security, infrastructure]
related: [openclaw, ren-wu-kong-zhi-ping-mian, acp, peter-steinberger]
created: 2026-04-01
updated: 2026-04-01
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/8jIYfF5Wxgtupkn2XL-uCQ"
venue: "新智元"
---

# 104人重写底层，OpenClaw装上「任务大脑」，连QQ机器人都能管

## 摘要
本文报道了 [[openclaw]] 发布 v2026.3.31-beta.1 版本，标志着该项目从野蛮生长阶段进入基础设施化阶段。此次更新引入了 [[ren-wu-kong-zhi-ping-mian]]，统一了后台任务调度，并进行了大规模的安全加固，包括重写 [[acp]] 的审批机制和引入 fail-closed 策略。

## 核心内容

### 任务控制平面的引入
- **背景**：此前 OpenClaw 缺乏统一的调度内核和权限管控，被专家 Alexander Feick 指出存在根本性缺口。
- **更新**：将 ACP、subagent、cron、后台 CLI 四种执行体统一到一个 [[sqlite-backed-ren-wu-zhang-ben]] 上。
- **意义**：实现了任务的生命周期管理（心跳、恢复、审计）和编排（父记录、流控制），类似于 Kubernetes 的控制平面，但针对 AI 任务。

### 安全加固
- **Breaking Changes**：6 个重大变更中有 4 个涉及安全。
- **ACP 审批重写**：从基于工具名称的白名单机制转变为基于 [[yu-yi-lei-bie-shen-pi]] 的机制，封堵了权限漏洞。
- **Fail-closed 机制**：插件安装默认拒绝危险代码，除非用户显式使用 `dangerously-force-unsafe-install` 参数强制开启。
- **外部协作**：[[antaisecuritylab]] 贡献了大量安全补丁，修复了路径解析竞态、沙盒逃逸等漏洞。

### 全球化与多端支持
- **新渠道**：QQ Bot 作为捆绑插件正式加入；支持 WhatsApp 表情回应、Matrix 流式响应、LINE 多媒体外发。
- **CJK 修复**：针对中日韩语言进行了深度优化，包括字体、分词、TTS 和渲染修复，解决了“豆腐块”显示问题。

### 生态数据
- **规模**：172 家创业公司基于其构建产品，月活 200 万，Star 数达 343k。
- **社区**：104 位贡献者参与，一天曾有 3100 个 commit。

## 观点与趋势
- **治理转型**：OpenClaw 正在通过架构手段将“野蛮生长”纳入“制度化轨道”。
- **行业影响**：开源社区的速度已超越公司产品迭代，AI Agent 领域的控制平面正在成为标准配置。
- **技术平民化**：产品定义权正从大公司产品经理向全球开源贡献者转移。

## 相关条目
- [[openclaw]]：项目主体。
- [[ren-wu-kong-zhi-ping-mian]]：本次引入的核心架构概念。
- [[acp]]：被重写审批机制的协议。
- [[peter-steinberger]]：项目创始人。