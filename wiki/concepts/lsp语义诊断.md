---
type: concept
title: LSP语义诊断
created: 2026-05-21
updated: 2026-05-21
tags: [lsp, code-quality, agent]
related: [hermes-agent]
sources: ["20刀月费秒变api！hermes一行命令就能用上claude、chatgpt订阅.md"]
---
# LSP语义诊断

LSP（Language Server Protocol）语义诊断是将语言服务器协议深度集成到Agent写文件流程的技术实践。[[hermes-agent]] v0.14将此功能深度缝合进代码修改流程，Agent每次修改完代码都会被强制自动运行language server检查。

## 解决的问题

- 终结Agent"嘴上说加了函数，文件却根本没保存"的低级运行幻觉
- 确保代码修改的实际落地，而非仅停留在对话层面
- 自动检测语法错误、类型错误、未定义引用等常见问题

## 技术实现

- Agent写入文件后，自动触发对应语言的LSP诊断
- 诊断结果反馈给Agent，形成"写入→检查→修复"的闭环
- 与[[场景白盒化推理]]的理念一致——将AI操作从不可见变为可见、可验证