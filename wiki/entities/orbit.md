---
type: entity
title: Orbit
tags: [anthropic, mobile, agent, leak, 主动式助手, claude-cowork, 产品功能, rl框架, 开源, 后训练, adapter, moe]
related: [claude-code, anthropic, 手机使用, claude-cowork, chatgpt-pulse, google-gemini-proactive-assistance, 主动式简报, sphere-ai-lab, deepseek-v4, kimi-k2-6, adapter-first-rl, rl-post-training, deepgemm]
sources: ["claude深夜彻底「虾化」！一句话接管电脑打工，手机指挥7×24小时不停.md", "claude最新功能泄露！主动助手orbit接管一切工作.md", "全球首次单机降服万亿巨模deepseek-v4！rl后训练框架orbit开源！.md"]
created: 2026-03-24
updated: 2026-05-28
---

# Orbit

"Orbit" 这一名称目前对应两个不同的项目：

1. **Anthropic 的主动式 AI 助手功能**（产品功能，预计 2026 年 5 月发布）
2. **Sphere AI Lab 的开源 RL 后训练框架**（基础设施，2026 年 5 月开源）

---

## Anthropic Orbit — 主动式 AI 助手

**Orbit** 是 [[Anthropic]] 正在研发的下一代 AI 功能体系，包含**移动端控制**与**主动式助手**两大核心方向。该功能预计于 2026 年 5 月 6 日在 Code with Claude 开发者大会上正式发布，标志着 Claude 从"被动响应工具"向"主动服务助手"的关键演进。

### 移动端控制能力

尽管尚未正式发布，但开发者已在 Claude 移动端设置页面中发现了一个标注为"Beta"的 **Orbit** 开关。泄露的代码变更记录中新增了 `phone_use` 和 `phone_call_completed` 两个工具字段，预示着 Claude 将具备直接操作智能手机的能力。

#### 潜在能力
- **读屏**：识别并理解手机屏幕上的内容。
- **APP 操作**：在复杂的移动应用界面间丝滑切换。
- **系统级操作**：拨打电话、预约餐厅等。

#### 意义
Orbit 的出现标志着 [[claude-code]] 的能力边界从桌面端扩展到了移动端，实现了真正的全场景覆盖。结合 [[电脑使用]] 功能，Claude 正在成为一个能够控制用户所有屏幕的通用 Agent。

### 主动式助手系统

Orbit 同时也是一个跨平台的主动式简报与洞察系统，运行于 Web、Mobile 和 [[Claude Code]] 三个平台。

#### 核心功能
- **主动式简报**：无需用户指令，自动整合多源信息生成每日摘要和行动建议。
- **多源数据集成**：通过连接器访问 Gmail, Slack, GitHub, Calendar, Drive, Figma 等工作工具。
- **个性化洞察**：基于用户工作流和时区，提供可操作的任务优先级建议。
- **Orbit Apps**：支持可部署、可收藏的应用形态。

#### 技术实现
- **触发机制**：Opt-in（用户主动开启）+ 时区识别。
- **后台运行**：需要 7×24 小时持续推理，对基础设施成本要求极高。
- **代码证据**：功能标志位为 `tibro_enabled`（Orbit 的反向拼写），表明已准备好灰度部署。

### 差异化竞争

与 [[ChatGPT Pulse]] 和 [[Google Gemini Proactive Assistance]] 不同，Orbit 显式集成了 **GitHub** 和 **Figma**。这一设计使其目标用户从传统的邮件/日历办公人群（高管），扩展至产品研发团队（开发者、设计师、产品经理）。

### 商业策略

Orbit 预计将仅限 **Max 订阅用户**使用，这与 [[Claude Code]] 和 [[Claude Cowork]] 的高端功能策略一致。这种分层定价反映了主动助手的高昂算力成本。

### 行业意义

Orbit 的发布标志着 AI 行业从"工具"向"助手"进化的明确信号。它不再等待用户提问，而是主动替用户"看完今天该看的东西"，直接给出结论和建议。这要求 AI 具备极高的产品判断力（推什么、何时推），而不仅仅是模型能力。

---

## Sphere AI Lab Orbit — 开源 RL 后训练框架

Orbit 是由 [[sphere-ai-lab|Sphere AI Lab]] 开发的开源 RL 后训练框架，核心目标是让万亿参数级 MoE 模型的 RL 后训练可以在单节点（8×B200）上完成。

### 核心设计理念

Orbit 采用 [[adapter-first-rl|Adapter-first]] 系统设计：

1. **冻结低精度 base：** 将 base model 固定在部署时使用的低精度表示（INT4/FP4），不参与训练更新。
2. **仅训练 adapter：** 每次训练更新后，只需将 MB 级 adapter（而非 GB 级 base）从训练引擎推送到推理引擎。
3. [[训推精度对齐]]：训练和推理使用相同的低精度 base + BF16 adapter 路径，从系统层面消除精度不一致。

### 关键技术组件

- [[active-expert-chunked-dequantization]]：针对 MoE 模型的动态专家反量化，将激活专家分组反量化后执行 grouped GEMM，控制显存峰值。
- [[double-buffered-rollout]]：Adapter 版本管理的异步流式写入，减少 rollout bubble。
- 集成 [[DeepGEMM]]、[[deepep-v2|DeepEP V2]] 等算子。
- 支持 Full-CUDA graph decoding。
- 使用 tilelang / Triton / CUDA 实现高效 attention backward 和 fusion kernels。
- 设计 bypass-base-weight-grad 高效 GEMM backward 算子，避免为冻结 base 计算不必要梯度。

### 实验结果

| 模型 | 参数量 | 精度 | 步数 | 结果 |
|------|--------|------|------|------|
| [[kimi-k2-6|Kimi-K2.6]] | ~1T | INT4 base + BF16 adapter | ~200 step | reward/eval/pass@k 上升，log-prob diff 稳定 |
| [[deepseek-v4-flash|DeepSeek V4 Flash]] | 1T | FP4 base + BF16 adapter | 100+ step | 同样稳定上升趋势 |
| [[deepseek-v4-pro|DeepSeek V4 Pro]] | 1.6T | — | 初步验证 | 系统上限验证，log-prob diff 稳定，显存可控 |

异步 rollout 基准（Qwen3-4B + OFT, 8×B200, TP=2）：1.42 倍单步时间优化，44% rollout 吞吐提升，eval accuracy 不变。

### 资源

- 官方博客：https://spherelab.ai/orbit/
- GitHub：https://github.com/Sphere-AI-Lab/orbit