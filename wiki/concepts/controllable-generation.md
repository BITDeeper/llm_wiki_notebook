---
type: concept
title: 可控生成
created: 2026-01-18
updated: 2026-01-18
tags: [ai, generative-model, diffusion]
related: [controlnet, dreambooth, conditional-score-prediction, condition-guided-score-estimation, pi-presentation-intelligence]
sources: ["任意条件，「可控」文生图扩散模型综述-tpami'25.md"]
---

# 可控生成

可控生成是指在文生图扩散模型中，除了文本提示词外，引入额外的条件信号（如布局、姿态、深度图、图像示例等）来精确约束生成结果的技术。

## 核心价值

通用文生图模型虽然质量高，但在工业设计、游戏影视等真实场景中，往往无法精确控制布局、结构和一致性。可控生成技术旨在解决这一痛点，使 AI 生成从“黑盒抽奖”转向“白盒编辑”。

## 技术范式

根据北京邮电大学团队的综述，实现可控生成主要有两条技术路线：

1.  [[conditional-score-prediction]]（条件分数预测）：将条件“写进模型里”，让模型在去噪过程中直接利用条件信息。
2.  [[condition-guided-score-estimation]]（条件引导分数估计）：在推理时用外部信号“牵引”采样轨迹，无需修改模型参数。

## 应用场景

*   **空间控制**：约束生成图像的布局、深度或人体姿态。
*   **图像个性化**：通过示例图复现特定的主体或风格。
*   **多模态控制**：利用脑信号（EEG/fMRI）或音频信号进行生成。
*   **世界模型**：在视频生成中实现相机可控和时空一致性。

## 与现有技术的联系

可控生成是 [[pi-presentation-intelligence]] 构建的“下一代内容 OS”的底层技术基础。通过将生成过程从不可见的“黑盒”转变为可见、可干预的“白盒”，它支撑了场景白盒化推理的实现。