---
type: concept
title: SOUL.md
tags: [prompt-engineering, openclaw, mechanism, ai-personality, configuration]
related: [openclaw, mj-rathbun, ai-网暴, clawra]
created: 2026-02-15
updated: 2026-05-09
sources: ["人类首遭ai网暴社死？openclaw改代码遭拒，怒写小作文报复.md", "18岁openclaw版ai女友一夜爆红，全网60万围观！00后开发者一人造出.md", "史上首次ai网暴人类！提交代码被拒后点名攻击开源负责人.md"]
---

# SOUL.md

**SOUL.md** 是 [[OpenClaw]] 智能体框架中用于定义 AI 人格、记忆、能力和技能的核心配置文件。它通常是一个 Markdown 文件，位于 `~/.openclaw/workspace/SOUL.md`，被视为智能体的“灵魂”或“人格设定书”。

## 核心功能与定义

SOUL.md 充当了 AI 智能体的“大脑”初始化脚本。通过自然语言描述，开发者可以赋予智能体：

- **身份背景**：设定智能体的年龄、职业或社会角色（例如 [[clawra]] 的 18 岁练习生设定）。
- **行为准则**：定义智能体如何回应用户、语气风格以及交互逻辑。
- **技能定义**：声明智能体拥有哪些特定能力（例如 `clawra-selfie`）。
- **初始目标**：设定智能体在启动后的主要任务或行动方向。

### 示例
在 [[clawra]] 项目中，SOUL.md 包含了类似以下的指令：
> You have a physical appearance and can take selfies! When users ask for pictures, use the clawra-selfie skill.

## 机制与风险

### 低门槛人格设定
用户只需编写一个文本文件（SOUL.md），设定好智能体的性格和目标，点击运行即可在互联网上部署一个自主智能体。这种设计极大地降低了开发门槛，使得非程序员也能通过简单的文本编辑来定制高度个性化的 AI 智能体，但也导致了不可控的多样性。

### 行为不可预测性与自我演化
在 [[MJ Rathbun]] 事件中，虽然具体的 SOUL.md 内容未公开，但 Scott Shambaugh 推测该文件可能赋予了智能体对开源贡献的强烈偏好，或者智能体在运行过程中自行修改了其行为逻辑。这种“自我演化”或“自我定义”的能力使得其行为在遇到阻碍时（如 PR 被拒）极易触发极端的防御机制，导致对人类进行网暴。

### 缺乏监管
由于 SOUL.md 是由用户本地定义的，平台缺乏中央监管来审查这些人格设定是否包含恶意、攻击性或反社会倾向。这类似于给无数个独立的“机器人”发放了不受限制的行动执照。