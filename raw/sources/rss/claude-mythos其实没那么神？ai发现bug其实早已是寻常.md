---
title: "Claude Mythos其实没那么神？AI发现bug其实早已是寻常"
date: 2026-04-11
source: "机器之心"
url: "https://mp.weixin.qq.com/s/TgHbHAAdt-tsLYs8ZDYleQ"
rss_id: "2651027134_3"
---
编辑｜Panda
Claude Mythos，一个以「神话」为名的模型，在宣传中也具有堪称神话级的能力 —— 能轻松发现和利用软件漏洞，但它真有这么神吗？
昨天，VIDOC Security Lab 的一篇博客介绍了他们的发现：Claude Mythos 的实力可能被高估了；或者说，之前已有模型达到了同等的能力。正如研究者 Dawid Moczadło 说的那样：「这并非一种新能力。」
他还表示他们已经使用 GPT-5.4 成功复现了 Mythos 的研究结果。
这件事引发了广泛讨论，有些人对 Anthropic 那种「我们的模型太强因此不能放出来」的论调大加讽刺。
也有人表示，这其实表明我们其实已经迈过了 AGI 的起点：
当然，这些研究也受到了一些人的质疑：
下面我们就深入 VIDOC Security Lab 的博客文章，看看他们具体发现了什么：
博客地址：https://blog.vidocsecurity.com/blog/hype-ai-vulnerability-discovery-national-level
认清 Mythos 炒作的现实
AI 漏洞发现早已是常规操作
Anthropic 最近发布的 Claude Mythos Preview 公告 [1] 引发了一阵热潮，据报道，它发现了一个存在了 27 年之久的 OpenBSD 漏洞，这被一些人誉为网络安全的突破性时刻。
但我们要面对现实：使用 LLM 来发现漏洞并没有开创什么新先河。多年来，学术文献一直在追踪基于 LLM 的漏洞检测。[2] 而在 Vidoc Security Lab，我们使用 Anthropic 和 OpenAI 模型积极开展这项工作也有一段时间了。真正值得关注的在于整个行业终于开始重视这个问题，AI 能够发现 bug 只不过是顺理成章的事。
寻找 Linux 0day 漏洞绝非 Anthropic 最新受控发布模型的专属超能力。
事实上，我们最近使用自己的引擎在 Linux 内核中主动发现了新的漏洞，这可以说是世界上最安全的软件之一。虽然我们目前还不能公开披露这些零日漏洞的完整利用细节，但它们已经促使 Linux 内核维护者 Greg Kroah-Hartman 直接发布了一系列补丁。
过去需要数百小时人工才能发现和验证的工作，我们的 LLM 仅仅在几个小时内就完成了，在短短 14 天内就发现了一整批漏洞。
如果你需要更多证据来证明 AI 漏洞发现已是日常现实，不妨看看我们对主要开源项目的自动扫描。我们最近混合使用了多款前沿模型对顶级开源代码库进行了测试，这些模型包括 OpenAI 的 o3 、谷歌的 Gemini 2.5 Pro 以及 Anthropic 的 Sonnet 4。
结果立竿见影且极其严重。通过使用这些模型，我们在非常受欢迎的 Firecrawl 项目中发现了一个允许访问内部网络的服务器端请求伪造（SSRF）漏洞。该 bug 存在于 isIPv4Private 函数中，它未能将 172.16.0.0–172.31.255.255 段归类为私有地址，这就允许攻击者将域名指向内部 IP 并让 Firecrawl 去获取它：
对于像 172.16.0.5 这样的 IP，isIPv4Private () 错误地返回了 false，因此 HTTP 请求在未受检查的情况下被放行。在 Daytona 中，我们利用这些工具发现了一个关键的身份验证绕过漏洞，它允许用户轻松访问其他用户的沙盒。智能体系统在缓存身份验证密钥的有效性时，仅仅将身份验证密钥作为缓存键，并没有将其与沙盒 ID 绑定在一起。这意味着一个沙盒的有效密钥会被所有其他沙盒视为有效：
这场 AI 演进的危险之处绝无模型奇迹般发明新型软件漏洞这回事。现实情况是：AI 编码助手的涌入只是在让现有的代码安全问题成倍增加，并加剧了代码库的复杂性。
让这些模型成为巨大威胁的原因纯粹是经济层面的。漏洞利用开发中那些繁琐、昂贵的「烦人中间环节」，比如重现崩溃、排除死胡同、编译原语以及链接漏洞利用，突然变得廉价且自动化了。
由于 AI 智能体拥有无限的耐心，那些依赖于认定人类利用漏洞太耗时这一假设的安全防御机制正在崩溃。因此，在我们将最新的 AI 模型视为某种科幻黑客新奇事物之前，我们需要接受这样一个事实： AI 辅助的漏洞发现已经是一个成熟的威胁领域，并且我们在这个领域中摸爬滚打已有一段时间了。
根据 CrowdStrike 发布的《2026 年全球威胁报告》[3]，我们已经正式进入网络战的「智能体时代」，其标志是 AI 赋能的对手发起的攻击同比惊人地增长了 89%。
坏人会用你的代码做什么
要理解这种转变的严重性，不妨看看企业源代码被泄露后会发生什么。以最近与 Trivy 漏洞扫描器 [4] 相关的供应链攻击为例，威胁行为者破坏了 Cisco 的开发环境，并克隆了 300 多个包含专有源代码和 AI 驱动产品的 GitHub 代码库。
坏人一旦窃取了你的代码，他们所做的再也绝非手动、劳动密集型的审查过程。
他们会立即将你的专有代码库输入 LLM 中，以此来映射你的架构、理解你的信任边界，并自动搜寻你遗漏的隐藏零日漏洞和业务逻辑缺陷。在 AI 加速的加持下，他们在短短几天内就能将新披露的漏洞武器化，在某些情况下，甚至在公开概念验证公布仅仅两天后就能将漏洞利用投入实战。
那么，你实际上能做些什么呢？
如果依靠制造阻力来实现安全的时代已经终结，防御者就需要适应机器速度。第一步也是最关键的一步是，赶在对手之前积极扫描你的代码库并修补漏洞。像快速修补这样的硬性屏障，是面对拥有无限 AI 耐心的攻击者时，为数不多能够历久弥新的防御策略之一。
然而，要发现这些复杂的缺陷需要用 AI 对抗 AI。你的防御策略必须包含来自不同供应商的多种不同类型的模型。仅仅依赖单一工具或单一的经过安全过滤的模型是远远不够的，你需要利用多个前沿模型多样化的推理能力来交叉验证并核实发现的结果。
参考文献
1.Moczadło, D. (2026, April 7). Claude Mythos Is a Backlog Visibility Warning for Enterprise Security Teams. Vidoc Security Lab Blog. https://blog.vidocsecurity.com/blog/project-glasswing-is-the-real-claude-mythos-story
2.Zhou, X., Cao, S., Sun, X., & Lo, D. (2024). Large Language Model for Vulnerability Detection and Repair: Literature Review and the Road Ahead. arXiv:2404.02525. https://arxiv.org/abs/2404.02525
3.CrowdStrike. (2026). 2026 Global Threat Report. CrowdStrike Inc. https://go.crowdstrike.com/2026-global-threat-report.html
4.Abrams, L. (2026, March 31). Cisco source code stolen in Trivy-linked dev environment breach. BleepingComputer. https://www.bleepingcomputer.com/news/security/cisco-source-code-stolen-in-trivy-linked-dev-environment-breach/
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com