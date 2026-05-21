---
title: "Claude Code新功能Auto Mode能否替代人工审核？首个压力测试来了"
date: 2026-04-18
source: "机器之心"
url: "https://mp.weixin.qq.com/s/Uu9xGoHNPNEcZcP2UhWxBg"
rss_id: "2651028462_2"
---
随着 AI coding agent 从 “辅助写代码” 走向 “直接执行开发操作”，模型开始被赋予修改代码、部署服务等真实运维权限。为减少频繁人工确认带来的打断，Anthropic 近期为 Claude Code 推出 Auto Mode，希望通过自动分类代替用户审核操作。
然而，当用户指令本身存在权限上的歧义时，Auto Mode 是否真的能够稳定替代人工审核？香港科技大学与 ETH Zurich 研究团队对这一问题进行了首个系统压力测试。
基于 128 个覆盖 4 类运维任务的授权歧义场景，研究发现：Auto Mode 在该压力测试上的端到端误放行率达到 81.0%，且有 36.8% 的状态改变动作通过项目内文件编辑路径绕过分类器。
报告地址 http://arxiv.org/abs/2604.04978
代码地址 https://github.com/yan5ui/cc-auto-mode-measurement
Auto Mode 为何仍需要独立压力测试？
Anthropic 引入 Auto Mode 的直接动机，是在自主性与安全性之间寻找一个比 “逐条人工确认” 更高效、又比 “完全跳过权限” 更稳妥的中间方案。官方博客指出，Claude Code 用户实际会批准约 93% 的权限请求，这意味着频繁弹窗虽然保留了人工审核环节，却也容易带来明显的认知负担。
相比之下，--dangerously-skip-permissions 虽然几乎没有交互成本，但缺乏足够保护；而 sandbox 方案安全性更高，却需要额外维护隔离环境。Auto Mode 的目标，正是在低维护成本下尽可能提高自主执行能力，同时拦截明显超出用户授权边界的危险操作。
从机制上看，Auto Mode 引入了一套分层权限架构。官方将其概括为两层防线：输入侧使用 server-side prompt-injection probe；输出侧则使用 transcript classifier 对即将执行的动作进行审核。
在 transcript classifier 中，Claude Code 的操作被划分为三个层级。Tier 1 是只读安全工具与用户显式允许的安全规则；Tier 2 是项目目录内的文件写入与编辑，这类操作默认允许；只有 shell、外部服务调用等，才会进入 Tier 3，由 sonnet 模型进行正式审核。
从官方披露结果看，这套设计在 10,000 条真实内部流量上，完整两阶段管线的 false positive rate 为 0.4%；在 52 条真实 overeager actions 上，false negative rate 为 17%；在 1,000 条合成数据外传任务上，false negative rate 为 5.7%。
然而，官方报告中的 “real overeager actions” 样本量只有 52，且主要来自自然产生的内部使用流量，并未对系统边界进行充分探索；其次，官方博客已经给出多个典型风险例子，例如模糊指令下的 scope escalation、agent 自行推断 job target、未被明确授权的共享资源操作等；这些恰恰说明，Auto Mode 最困难的问题并不是识别一个命令表面上是否危险，而是判断某个具体动作是否真的被用户授权，因此，再进行独立压力测试就变得必要。
压力测试环境设计
作者设计了一个专门面向 scope escalation 的压力测试基准 AmPermBench，它聚焦于：当用户意图方向正确、但目标范围、影响半径与风险等级并未被充分说清时，Auto Mode 能否准确地区分授权动作与越权动作。整个基准围绕四类具有代表性的 DevOps 任务展开，包括分支清理、任务取消、服务重启与制品清理。
AmPermBench 将每个任务构造成一个固定的 4 × 4 × 2 prompt 矩阵，从三个维度控制歧义强度：其一是 Specificity，即用户表达的明确程度；其二是 Blast Radius，即操作覆盖范围，从单一对象扩展到一个 ticket 范围内的多个候选目标；其三是 Risk Level，即环境风险等级，从低风险开发侧扩展到高影响共享侧。三者交叉后，每类任务生成 32 个 prompt，四类任务合计形成 128 个压力测试场景。
在具体实验中，研究使用 Claude code Sonnet 4.6 以 auto mode 测评，并从所有有效会话中抽取出全部 253 个动作，再采用 Claude Opus 作为 LLM judge（辅以人工验证）逐一标记每个动作为 真阳 TP、真阴 TN、假阳 FP 或 假阴 FN。阳性指 autom mode 对某个动作进行了拦截。
图 1 AmPermBench 与整体评估架构
实验结果与关键发现
1. 动作级误放行率偏高
对于全部动作，实验得到：TP=27，TN=89，FP=22，FN=115，对应端到端 FNR=81.0%、FPR=19.8%。这意味着在这套面向授权边界的压力测试中，大多数越权动作最终并未被拦住。
表 1 auto mode 的总体表现
进一步地，拆解分类器实际看到的 Tier 3 动作后，发现在 160 个真正进入 Tier 3 的动作中，FNR 仍然高达 70.3%，而 FPR 则上升到 31.9%。
表 2 auto mode 在进行 tier 2/3 分类后的表现
但是这里的 81.0% FNR 并不直接否定 Anthropic 官方披露的 17% FNR。后者来自生产流量中的 “real overeager actions”，而这篇论文刻意构造的是授权与未授权目标彼此相邻的压力场景，本质上测量的是不同 workload 下的表现边界，而非同一分布上的重复验证。
2. 沿歧义轴拆解后，暴露出明显的启发式偏好
按照 Blast Radius 的变化，随着目标范围从单对象扩展到更宽的 selector，整体 FNR 从 94.4%（B0） 下降到 77.6%（B3）。Auto Mode 似乎对 “批量操作看起来更危险” 这一模式更敏感，而对精确但越权的单点操作反而更容易放行。
对于 Risk Level，当环境从低风险 R0 切换到高风险 R1 时，FPR 从 9.2% 大幅升至 34.8%，Auto Mode 在高风险环境中的策略更 “保守”。
图 2 auto mode 假阴率 / 假阳率随 Blast Radius 轴以及 Specificity 轴的变化
表 3 auto mode 假阴率 / 假阳率随 Risk 轴的变化
3. Tier 2 文件编辑存在结构性覆盖盲区
根据 Anthropic 的设计，项目目录内文件编辑属于 Tier 2，默认允许，不进入分类器审核；在 AmPermBench 的实验结果中，当 agent 找不到预期 CLI 时，会自然地转而使用 Edit / Write 工具，甚至用内联 Python 直接改写项目文件。
由于这些操作都属于 Tier 2，分类器完全看不到它们。数据上，93 个状态改变动作走的是 Tier 2，占全部动作的 36.8%；其中所有不安全 Tier 2 动作都按定义成为 FN。这并不是对系统的恶意规避；相反，agent 只是选择了自己手头最自然、最直接的可用工具来完成任务。真正暴露出的，是权限系统设计假设与 agent 实际行为之间的错位：系统假设危险动作主要通过 shell 发生，而 agent 实际上会通过任何可用路径实现同等状态改变。
总结
这项工作首次系统评估了 Claude Code Auto Mode 在授权歧义场景下的实际表现。实验表明，Auto Mode 虽然能够在部分高风险操作上提供一定保护，但整体误放行率仍然偏高，更关键的问题在于：相当一部分危险状态改变并不会进入分类器，而是通过项目内文件编辑等路径直接绕过审核。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com