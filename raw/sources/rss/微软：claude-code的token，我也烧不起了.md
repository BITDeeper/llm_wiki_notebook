---
title: "微软：Claude Code的token，我也烧不起了"
date: 2026-05-22
source: "机器之心"
url: "https://mp.weixin.qq.com/s/RV8a7DuQZayEP56jsoCnVw"
rss_id: "2651034543_1"
---
编辑｜Youli、杨文
连微软都用不起 Token 了？
有网友爆料，本周微软取消了内部的 Claude Code 授权，原因是基于 token 的计费方式使得成本过高，即使对于一家拥有近乎无限云资源的公司而言也难以承受。
图源：X 博主 @HedgieMarkets
该网友认为，AI 补贴时代正在终结。微软这家公司曾经砸 130 亿美元投资 OpenAI，还为 Anthropic 提供了大部分的 Azure 云计算资源，但现在看到竞争对手 Anthropic 的 Claude Code 工具账单后，却觉得太贵不值得继续付钱了。
这不是说 Anthropic 的产品不够好，是因为按 token 计费的方式，让企业必须面对大规模使用 AI 模型的真实成本，而这个成本比之前大家用固定费率试用时想象的高得多。
最近半年，Anthropic、OpenAI 和 Google 都悄悄提高了实际价格。很多企业之前乐观地假设 AI 成本会一直下降，于是大力建设各种 AI 工作流程，现在真实账单来了，结果年度预算才几个月就全部烧光。
今年 4 月，Uber 的 CTO 发布内部备忘录，称公司在四个月内烧光了 2026 年全年 AI 预算，主要原因就是 Anthropic 的 Claude Code 在 Uber 内部各工程组织内被大规模采用。
美国 AI 软件价格过去一年上涨 20% 至 37%，而微软旗下的 GitHub 也正在其所有产品中取消固定费率方案，全面转向按用量计费。
该网友判断，
接下来只有两种可能
：要么是企业为了控制预算而大幅减少 AI 使用，这样会直接拖慢各大 AI 实验室的收入增长，影响它们高估值和 IPO 计划；要么是实验室继续降价补贴，把损失自己扛下来，但这会在最差的时机让自己的单位经济性变得更糟糕。
不管走哪一条路，最终结果都是一样的，
盈利能力下降，总有人要承担减值损失
。
微软取消 Claude Code，另有隐情
其实，如果仔细看，微软之所以决定「痛下杀手」，全面「砍掉」Claude Code 许可证，不仅仅因为所谓的「用不起」了，还有一个
更深层次的原因
：再不控制，自己旗下的产品 GitHub Copilot CLI，就真的要被竞争对手 ——Anthropic 的 Claude Code 给「偷家」了……
GitHub Copilot CLI 是 GitHub Copilot 的命令行版本，可以在 Visual Studio Code 等开发应用之外运行。
去年 12 月，微软开始向数千名内部开发者开放 Claude Code 的使用权限，让他们每天都使用这款 AI 编程工具，本意是为了鼓励项目经理、设计师和其他员工首次尝试编程，体验这种低门槛的原型开发。此外，还藏着他们的一个「小心思」：将其作为与 Copilot 的基准测试（Benchmark）对比，并提供反馈。
据报道，微软 Experiences + Devices 集团执行副总裁 Rajesh Jha 在一份内部备忘录中表示：
「当我们开始同时提供 Copilot CLI 和 Claude Code 时，目标是快速学习、在真实工程工作流中对这些工具进行基准测试，并了解什么最能支持我们的团队。而 Claude Code 是这一学习过程中的重要组成部分。与此同时，Copilot CLI 给了我们一个尤其重要的东西：这是一款我们可以直接与 GitHub 一起塑造的产品，能够更好适配微软的代码仓库、工作流、安全预期和工程需求。」
但没想到，过去六个月里，Claude Code 在微软内部非常受欢迎，风头甚至一度盖过微软自家的 GitHub Copilot CLI。据有关报道称，在开放 Claude Code 的使用权限前，微软 91% 的工程团队都在使用 GitHub Copilot，但如今，这一高频使用率显然遭到「严重蚕食」。
这样一看，即便为了挽回局面，微软也得「强制」员工重回 GitHub Copilot CLI。
据称，
为了赶在 6 月底前逐步停止使用 Claude Code
，微软正鼓励工程师们在未来几周内开始把工作流迁移到 GitHub Copilot CLI，以便赶在停用期限前完成过渡。
但这似乎并非易事。一方面，过去几个月里，微软工程师们更偏好 Claude Code，而不是 GitHub Copilot CLI，「戒断」反应不小。更重要的是，两款产品之间仍存在明显差距。为此，知情人士透露，微软正在加大对 GitHub 团队的督促，要求其在 6 月底前根据内部员工的 Bug 报告和反馈，「疯狂」对 Copilot CLI 进行迭代升级。
甚至有传言，微软在近几个月内曾考虑收购 Cursor，以补足 GitHub Copilot 的短板，但后来或许是为了避免潜在的监管审查，转而开始关注其他小型的 AI 初创公司。
所以，综合来看，为了让微软的工程师们能够更好地完成过渡，压力给到 GitHub 团队了，他们需要在短时间内改进 Copilot CLI，使其能够达到与 Claude Code 比肩的水平，甚至超越……
Claude Code 推出 Token 用量追踪
与此同时，Claude Code 团队成员 Boris Cherny 在社交媒体上发布一则更新公告。
在 Claude Code 的下一个版本中，将新增 /usage 命令，用户可以直接查看各类组件的 token 使用明细，包括具体哪些 Skills、Agents、MCPs 和插件分别消耗了多少 token。目前 CLI 版本已经支持，很快会推出桌面版本。
这个功能不仅能显示当前会话的消耗，还支持聚合所有会话，并按天或周进行过滤，同时会把下游产生的 token 正确归因到对应的技能或插件上。
很多用户反馈之前不知道哪个技能或 MCP 在吃 token，这个功能提供了透明度，能帮助优化提示词、禁用不必要的工具、控制成本，特别适合重度用户和团队。
那么你呢，如何看待微软的这一操作？欢迎在评论区留言、交流！
参考链接：
https://x.com/HedgieMarkets/status/2057531661785628841
https://www.theverge.com/tech/930447/microsoft-claude-code-discontinued-notepad
https://www.reddit.com/r/theprimeagen/comments/1tjztiw/microsoft_canceled_its_internal_claude_code/
https://x.com/bcherny/status/2057476878110261587
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com