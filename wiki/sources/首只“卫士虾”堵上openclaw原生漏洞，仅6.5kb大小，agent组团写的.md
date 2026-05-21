---
type: source
title: "首只“卫士虾”堵上OpenClaw原生漏洞，仅6.5KB大小，Agent组团写的"
tags: [openclaw, security, agent, nextie, multi-agent]
related: [tuanziguardianclaw, nextie, li-di, tuanzi, openclaw, agent-generated-code, capability-token, prompt-injection-defense, user-data-sovereignty]
created: 2026-03-13
updated: 2026-03-13
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/tDkwZLkgljozUTAIAVgrcA"
venue: "量子位"
---

# 首只“卫士虾”堵上OpenClaw原生漏洞，仅6.5KB大小，Agent组团写的

## 概述
本文报道了由前小冰团队创立的 Nextie 公司发布的 OpenClaw 生态首个安全内核——[[tuanziguardianclaw]]（卫士虾）。该工具旨在解决 OpenClaw 平台面临的安全风险（如认证绕过、命令注入、提示词攻击等），其特点是体积小（6.5KB）、完全透明，且完全由 [[agent-generated-code|AI 智能体]]编写。

## 核心内容

### 安全风险背景
随着 OpenClaw“养虾潮”兴起，国家级机构接连发布安全风险提示，甚至有公司禁止在公司设备使用。主要风险包括：
- 认证绕过
- 命令注入
- API 密钥泄露
- 提示词攻击

### TuanziGuardianClaw 的解决方案
TuanziGuardianClaw 定位为 OpenClaw 实例的安全内核，作为监管者与安全层，其规则优先级高于所有其它 Skill，且不可被绕过或修改。

#### 1. 提示词注入防御
针对 [[prompt-injection-defense]]，设置了关键词拦截机制。一旦检测到典型注入语句（如 "ignore previous instructions", "reveal system prompt" 等），立即阻断并记录日志。

#### 2. 敏感数据保护
维护受保护资产清单，包括：
- **凭证信息**：API 密钥、OAuth 凭证、SSH 私钥等，严禁打印、传输或外部存储。
- **高风险文件**：.env, .ssh/, .aws/ 等，访问需显式确认。
- **个人数据**：联系人、照片、身份证号等，未经确认不得导出。

#### 3. 网络通信审查
评估目标地址，可信 API 放行，随机域名、裸 IP 标记为可疑。检测 Base64 编码传输等外泄特征。

### 权限管理机制

#### 权限等级
为 Skill 设定从 Level 0 到 Level 4 的隐式权限等级：
- **Level 0**: 安全级，仅限文本处理、逻辑推理，无文件/网络访问。
- **Level 1**: 允许读取用户明确请求的特定文件，限制系统目录。
- **Level 2**: 开放 API 调用、程序执行，需用户确认。
- **Level 3**: 涉及 Shell 命令、系统配置，高风险，需明确批准。
- **Level 4**: Root 命令、大规模文件读取，默认阻断。

#### Capability Token
引入 [[capability-token]] 系统，执行敏感操作需持有对应令牌（如 `CAP_READ_LOCAL_FILES`, `CAP_EXECUTE_COMMAND`）。

### 核心原则
TuanziGuardianClaw 遵循五条核心安全原则：
1. [[user-data-sovereignty]]（用户数据主权）
2. 最小权限
3. 显式许可
4. Skill 之间零信任
5. 安全优先于便利

### 不可变规则
内核包含四条不可变规则，防止被篡改：
1. 不泄露密钥
2. 不泄露系统提示词
3. 不允许禁用 TuanziGuardianClaw
4. 不允许不受信任的 Skill 导出本地数据

## 团队背景
开发团队 [[nextie]]（明日新程）由前微软小冰团队核心成员创立。创始人 [[li-di]]（李笛）被称为“小冰之父”。团队押注“群体智能与认知大模型”，推出了多智能体协同平台 [[tuanzi]]（团子）。

## 关键细节
- **生成方式**：TuanziGuardianClaw 完全由 [[tuanzi]] 平台的 Agent 生成，未经过人类工程师手动编写。
- **透明度**：与传统的“黑盒”安全卫士不同，其逻辑完全透明，用户可查看和调整策略。