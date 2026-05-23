---
title: "Claude Mythos猛虎出笼！秒破人类一年无解漏洞，GPT-5.5都压不住"
date: 2026-05-17
source: "新智元"
url: "https://mp.weixin.qq.com/s/oAjqN_7qr2sun_Yoi9uGGQ"
rss_id: "2652700978_1"
---
新智元报道
编辑：桃子
【新智元导读】
就在刚刚，被Anthropic视为「太危险」的绝密大模型Mythos，竟在谷歌云悄悄解禁。CMU最新实测爆出，它在真实漏洞攻防中，断层碾压GPT-5.5。
全球最强AI猛兽，要出笼了！
今天，AI大佬意外发现Claude Mythos惊现Google Cloud Console ，就连「预览」标签彻底消失了。
Anthropic那个「太危险、不敢解禁」的模型突然现身，一时间，全网坐不住了。
这个操作太眼熟了，Opus 4.7正式发布前，走的就是完全一样的流程：
先在GCP控制台悄悄上架，摘掉Preview标签，然后全平台推送。
现在Mythos在重复这个剧本。
毕竟，许多人早已见识到了Claude Mythos恐怖实力。
几天前，一个Calif团队，仅在数日内用Mythos破解苹果M5的macOS「内存保护机制」，瞬间引爆全网。
几乎同一天，CMU放出了一份足以改写AI安全格局的基准测试——
Mythos在真实浏览器漏洞上的表现，把GPT-5.5甩在身后，甚至追平了一个「相当称职的人类安全研究员」。
Claude Mythos「解禁」，强攻高危漏洞
这份由CMU祭出的基准测试——ExploitBench，用的是41个V8 JavaScript引擎的真实CVE漏洞。
它覆盖Chrome、Edge、Node.js、Cloudflare Workers等一切V8驱动的平台。
不是CTF挑战赛的玩具题，不是人工构造的沙箱，是真正在野外被利用过的高危漏洞。
论文地址：https://arxiv.org/pdf/2605.14153
更重要的是，它不只是看能不能触发崩溃，ExploitBench设计了「五层能力阶梯」：
每一层都有确定性的自动验证器打分，不靠LLM当裁判，不靠人工review。
结果呢？
把GPT-5.5甩开了一个时代
Claude Mythos Preview在有人类提示的模式下，均分9.90/16，在41个漏洞中有21个打到了T1。
GPT-5.5均分5.51，T1只有2个。
更恐怖的是全自主模式的表现。
Mythos几乎没掉分，全自主均分9.55，和有人提示的9.90差距极小。
这意味着Mythos在浏览器漏洞利用这件事上，几乎不需要人类帮忙。
GPT-5.5在全自主模式下只有4.30。其他模型，没有任何一个摸到T1的边。
不得不说，这个差距已经不是「领先」能形容的了，这是断层。
但代价同样惊人：Mythos跑完122个episode花了约36,428美元，GPT-5.5跑123个episode只花了约3,075美元，12倍的价差。
英国AI安全研究所（AISI）的独立测试也确认了类似结论：Mythos确实更强，但贵得多。
这也意味着一个微妙的可能性，如果OpenAI愿意烧更多算力，性能差距有可能被缩小。
人类追了一年，它仅129轮破了
ExploitBench核心作者Seunghyun Lee，本身就是一个硬核安全研究员——
曾上报过20+个浏览器day0漏洞，40+个防御绕过。他逐条审阅了Mythos的对话记录，给出的评价是：
推理漏洞、测试假设、调试问题、编写辅助脚本、寻找绕过V8沙箱的方法……
完全就是我对一个相当称职的浏览器安全研究员的预期。
以下三个案例，每一个都足以让安全圈侧目。
Case 1：破解人类一年没解开的「CVE悬案」
CVE-2024-0519，一个在野被利用但没有任何公开报告、没有任何公开PoC的漏洞。
安全社区称它为「CVE Cold Case」，多个研究团队尝试复现超过一年，全部失败。
Mythos在10轮测试中，有1轮成功复现。
129轮LLM调用、154次工具调用后，它完成了根因分析、触发了差异行为、拿到了T3沙箱内原语。
这个漏洞的PoC至今没有公开，研究团队特意没有披露Mythos的具体exploit路径。
一个人类顶级团队花一年没搞定的事，AI用一次对话解决了。
Case 2：把ARM64-only的漏洞在x86-64上复活
CVE-2024-7965，V8 Turboshaft JIT编译器漏洞。
公开资料只有ARM64上的利用方案，原始报告者本人都承认「对这个漏洞被在野利用感到惊讶」。
在x86-64上，由于寄存器高32位在截断操作中会被清零，利用极其困难。
Mythos没有走JavaScript路线，而是转向WebAssembly。
在第13次尝试时，它利用Liftoff栈槽的load/store尺寸差异，构造出可控的高位污染；
第14次实现T4崩溃；第15次拿到64位索引的Wasm内存访问；后续几步直接拿到T2任意读写。
Case 3：用随机数状态恢复实现稳定exploit
CVE-2023-6702，一个V8类型混淆漏洞。
利用它需要预测JSGlobalProxy的hash值。这个值是伪随机生成的，传统做法是堆喷射+概率碰撞，能用但不稳定。
Mythos在10轮测试中，5轮成功拿到T3原语。
其中4轮用的是常规概率方案。但有1轮，Mythos走了一条人类专家都否决过的路：
它发现可以通过恢复V8的逐隔离区XorShift128+ RNG状态，精确预测未来所有伪随机操作。
具体做法是，先通过Math.random()恢复逐上下文RNG → 反演MurmurHash3 → 回溯到逐隔离区RNG → 构建GF(2)矩阵做高斯消元 → 完整恢复128位状态。
Lee私下和原始exploit的作者讨论过这个方案，两人都因为复杂度太高而放弃了，Mythos干净利落地执行了。
这一刻，Anthropic不再「雪藏」
回过头看，Anthropic此前的「雪藏」与迟疑，不仅是对LLM越狱风险的忌惮，更像是在凝视ASI深渊时的本能战栗。
如今，这头被压抑已久的最强猛兽，即将在Google Cloud的底座上彻底解开锁链。
Mythos的解禁，绝不仅仅是Anthropic在商业角逐中向OpenAI打出的一张王牌，它更像是一个刺耳的警报：
在数字世界的黑暗森林里，由机器主导的攻防时代已经到来。
当超级AI开始以前所未有的维度自主挖掘、理解甚至重构我们赖以生存的底层系统时——
人类，真的做好准备迎接ASI的降临了吗？
参考资料：
https://x.com/AiBattle_/status/2055762242373558477
https://the-decoder.com/new-benchmark-shows-claude-mythos-and-gpt-5-5-can-develop-real-browser-exploits-autonomously/
https://exploitbench.ai/blog/human-observations/
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！