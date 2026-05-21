---
type: entity
title: Meta-SecAlign-70B
tags: [models, security, llm]
related: [claudini, 越狱算法, 对抗性训练]
created: 2026-03-27
updated: 2026-03-27
sources: ["claude一夜爆更自修bug，pr自己绿了！全球程序员：「摸鱼」正式合法.md"]
---

# Meta-SecAlign-70B

Meta-SecAlign-70B 是一个经过专门 [[对抗性训练]]（Adversarial Training）的 700 亿参数大语言模型。该模型旨在提高对恶意提示词和越狱攻击的防御能力。

## 安全测试

在 [[claudini]] 自动化科研系统的测试中，尽管经过了专门的对抗性训练，Meta-SecAlign-70B 仍然被 [[claudini]] 发现的新型越狱算法 `claude_v63` 以 **100% 的攻击成功率（ASR）** 攻破。这一结果引发了关于当前 AI 安全对齐方法有效性的讨论。