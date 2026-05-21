---
title: "龙虾冲浪终于不迷路了！网页智能体新框架Avenir-Web开源即SOTA"
date: 2026-04-29
source: "量子位"
url: "https://mp.weixin.qq.com/s/6JlCsI95cn-SnaH2OwkkNg"
rss_id: "2247887827_3"
---
Avenir-Web 团队 投稿
量子位 | 公众号 QbitAI
AI冲浪不丝滑？
伦敦大学学院（UCL）、普林斯顿大学和爱丁堡大学的研究团队联合推出了
Avenir-Web
，让现有多模态模型像人类一样使用网页。
现有的Web Agent在面对复杂的网页结构（如 iframe、Shadow DOM）时，往往会陷入“定位不准”“缺乏常识”或“走着走着就忘了”的窘境。
特别是在长程任务（Long-horizon tasks）中，由于缺乏对特定网站操作流程的认知，Agent往往只能盲目探索，导致任务成功率低下。
Avenir-Web是一个不需要额外训练的新模型，本质上是一套开源的Agent Harness，也就是一个training-free的框架，在ONLINE-MIND2WEB上取得53.7%的成功率，刷新最强开源纪录。
Web Agent 的三大难题
研究团队指出，目前Web Agent在实际部署中面临三个核心瓶颈：
元素定位不准（Inaccurate Grounding）：过度依赖DOM树，在处理非标准结构（如 Canvas、嵌套 iframe）时极易失效。
缺乏特定站点的流程知识（Site-specific Procedural Knowledge）：Agent不懂得参考“用户手册”或“攻略”，只能乱撞。
长程任务跟踪与记忆力不稳定（Unstable Memory）：跨页面操作时容易产生“导航漂移”，陷入重复错误的循环。
针对这些痛点，Avenir-Web提出了一套模块化的Agent Harness框架。
由于它是Harness，而不是需要重新训练的模型，因此整个方案天然具备training-free的部署优势。
Avenir-Web 的 Agent Harness 核心设计
经验模仿规划（Experience-Imitation Planning, EIP）
人类在操作复杂网站时，往往会先搜一下攻略。
EIP模块模仿了这一行为：在任务开始前，它会利用大模型的在线搜索能力，检索目标网站的帮助中心、论坛或指南，并将这些信息转化为高层级的策略路线图。
这种“先读攻略再上手”的方法，大幅减少了Agent的盲目探索时间，也规避了不可逆的导航错误。
混合定位专家（Mixture of Grounding Experts, MoGE）
MoGE采用“视觉优先”的原则。
它将整个网页视为一张统一的视觉画布，直接基于坐标进行交互。
这种方式天然地解决了让DOM派 Agent头疼的嵌套iframe问题。
当视觉信息不足时，MoGE会触发语义结构推理作为兜底方案。
这种“视觉坐标+语义兜底”的混合策略，使得Agent在处理各种UI范式时都具备极强的鲁棒性。
任务跟踪清单（Task-Tracking Checklist）
为了防止Agent “跑偏”，研究团队引入了结构化的任务清单。
它将复杂指令分解为2-6个可验证的原子里程碑（Milestones），并在每一步操作后利用轻量级模型（如 Qwen-3-VL-8B）实时更新状态（Pending、In Progress、Completed、Failed）。
自适应记忆（Adaptive Memory）
针对上下文过长导致的幻觉问题，Avenir-Web采用了分块递归摘要（Chunked Recursive Summarization）机制。
它维持一个大小为 的滑动窗口，将历史操作提炼为抽象的记忆状态，并专门设置了“失败反思缓冲区”（Failure Reflection Buffer），确保Agent能从过去的错误中吸取教训。
实验结果
研究团队在ONLINE-MIND2WEB这一包含136个真实网站、300个实时任务的严苛基准上进行了测试。
Avenir-Web（以Gemini 3 Pro为内核）取得了53.7%的成功率，相比之前的开源标杆SeeAct（30.0%）提升了整整23.7%。
而且，Avenir-Web的表现超越了闭源Claude Computer Use 3.7（47.3%）和ACT-1（52.7%），开始逼近OpenAI Operator（58.3%）等顶级商业Agent的水平。
即使使用完全开源且轻量的Qwen-3-VL-8B作为内核，Avenir-Web依然取得了25.7%的成功率，已经逼近Browser Use（26.0%）与Agent-E（27.0%）等早期基于GPT-4o的重型Agent。
这也说明，作为一套无需额外训练即可接入现有模型的开源Agent Harness，Avenir-Web在轻量模型上同样具备可观的实战价值。
消融实验：谁才是关键？
研究人员通过消融实验验证了各模块的贡献度。结果显示：
去除EIP（经验模仿）后，成功率从48.0%直接降至36.0%，暴跌12.0%，证明了外部知识对Web任务的至关重要性。
去除MoGE（混合定位）后，成功率会从48.0%降至40.0%；去除自适应记忆后，成功率则会进一步降至42.0%甚至36.0%，说明定位与记忆模块都不可或缺。
特别是对于长程任务，递归摘要机制有效避免了上下文溢出带来的决策混乱。
研究团队表示，Avenir-Web为通向具备人类级可靠性的通用数字助理迈出了坚实的一步。
目前，该项目已开源，开发者无需训练新模型，就可以把这套Agent Harness用于自动化、软件测试及智能助手等场景的进一步探索。
论文链接：https://arxiv.org/abs/2602.02468
代码链接：https://github.com/Princeton-AI2-Lab/Avenir-Web
一键三连
「点赞」「转发」「小心心」
欢迎在评论区留下你的想法！
—
完
—
我们正在招聘一名眼疾手快、关注AI的
学术编辑实习生
🎓
感兴趣的小伙伴欢迎关注 👉
了解详情
🌟 点亮星标 🌟
科技前沿进展每日见