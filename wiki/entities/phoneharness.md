---
type: entity
title: PhoneHarness
created: 2026-05-26
updated: 2026-05-26
tags: [手机agent, agent-harness, benchmark, 混合动作空间, 开源框架]
related: [混合动作空间, 可验证副作用, agent-centric设备范式, 腾讯混元, 操作系统agent, phoneharness-bench]
sources: ["从openai-ai-phone到gemini-on-android：ai手机时代需要怎样的agent-harness？.md"]
origin_date: 2026-05-26
---
# PhoneHarness

PhoneHarness是由[[腾讯混元]]牵头，联合香港中文大学、香港中文大学（深圳）和清华大学共同开发的手机智能体混合动作编排框架与基准测试。

## 核心定位

PhoneHarness的核心不是再造一个GUI点击器，而是把手机任务放进一个[[混合动作空间]]里——让Agent在执行过程中为不同子目标选择合适的action surface：

- **CLI（设备端命令）**：能用确定性命令读取状态，就不必反复点设置页
- **GUI delegation**：必须进入App内完成交互时，才交给GUI worker
- **MCP-style host tools**：需要外部信息、文件处理或结果复核时，调用宿主端工具

## 架构设计

采用host-side orchestration与Android device-side execution的双层架构。Agent在三类行动面之间自由切换，不必把所有任务都硬塞进GUI点击链。

## PhoneHarness Bench

基于PhoneHarness构建的手机Agent评测基准，任务覆盖四类：

1. **device/system**：设备状态查询与系统设置
2. **single-app GUI**：单App内视觉交互
3. **tool-assisted workflow**：工具辅助的工作流
4. **cross-app workflow**：跨App复合任务

Bench的核心设计理念是[[可验证副作用]]：不问"模型有没有说自己做完"，而是看"任务证据链是否支持它真的做完"。

## 实验结论

- 收益主要来自存在确定性路径、工具辅助路径或可验证副作用的任务
- 纯GUI-heavy任务仍受视觉grounding、权限弹窗、登录状态、广告、搜索结果不稳定等问题困扰
- 结论：手机智能体的未来不是"把GUI点击模型做得更大"，而是让Agent学会选择合适的行动面

## 开源资源

- 论文：https://phoneharness.github.io/assets/paper.pdf
- GitHub：https://github.com/PhoneHarness/PhoneHarness
- HuggingFace数据集：https://huggingface.co/datasets/PhoneHarness/phoneharness-bench

## 与现有系统的关联

PhoneHarness可视为[[操作系统agent]]在手机场景的具体研究实现，与腾讯[[马维斯]]产品形成互补（马维斯是产品，PhoneHarness是研究框架）。其可审计执行轨迹理念与[[场景白盒化推理]]高度一致，harness层定位与[[runtime-agent-os]]的三层架构有相似的基础设施定位。