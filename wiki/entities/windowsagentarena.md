---
type: entity
title: WindowsAgentArena
created: 2026-05-31
updated: 2026-05-31
tags: [评测基准, cua, windows, 跨平台]
related: [osworld-mcp, toolcua]
sources: ["别光给agent加tool了，它根本选不明白！复旦×通义提出全新cua训练范式.md"]
---
# WindowsAgentArena

WindowsAgentArena是用于跨平台泛化验证的Windows桌面评测环境。在[[toolcua|ToolCUA]]的研究中，该基准被用于验证模型在Linux环境训练后能否将学到的能力迁移到unseen Windows桌面应用上。

## 关键结果

ToolCUA在unseen Windows桌面应用上达到33.8%准确率，超过Qwen3-VL-235B的32.1%，表明学到的hybrid action orchestration能力具有跨平台可迁移性。