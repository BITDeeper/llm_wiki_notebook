---
title: "谷歌搜不到的80%互联网，AnySearch全打通了！开发者连夜接入"
date: 2026-05-18
source: "新智元"
url: "https://mp.weixin.qq.com/s/-pWdGGf4U4D5wCDnw9lawg"
rss_id: "2652701375_1"
---
新智元报道
【新智元导读】
传统API集成已死！在这个Agent满地跑的时代，被低估的搜索终于迎来了第四次范式转移。
AnySearch的问世，让Agent告别了单一的网页总结功能，转而通过获取可信的结构化信息，真正具备触达并连接现实世界的能力。
2026年，AI Agent的能力边界，正以月为单位向外扩张。
写代码、做研报、跑安全审计...... 半年前，还需要人类手把手带着做的任务，Agent现已能独立完成八成以上。
但一个尴尬的事实是，Agent正在被一个看似不起眼的环节卡住：搜索！
让AI帮你查一家公司的股权结构，它只能给你官网简介；
让它找一段生产级代码实现，它甩给你一篇Medium入门教程；
让它分析一个可疑IP的威胁情报，它只能搜出几篇科普文章。
不是AI搜索不够快，是搜索「看不到」。
如今，这个问题，终于有人在认真解决了！
上线一周，AnySearch引爆全网
5月11日，一款名为AnySearch的产品在海外正式上线。
它给自己的定位很明确：AI时代的「搜索基础设施」，专为AI Agent打造统一的高质量搜索入口。
传送门：http://www.anysearch.com
上线一周，AnySearch在海外开发者圈彻底炸了。
它迅速登陆GitHub、ClawHub、skills.sh、SkillHub、Glama等多个开发者生态平台，在技术社区和插件商店中获得了稳定的下载量和互动量。
今天
AnySearch
登上
skills.sh
热榜TOP1
一位AI大佬Guri Singh在X上力荐AnySearch，他是这么评价的——
如果你在2026年构建AI Agent却没有使用这个，那你就像是闭着一只眼睛在搜索。
另一位AI博主还上手试用了下，将AnySearch与Brave、Perplexity做了对比，显然AnySearch输出的结果更丰富。
Bishal Nandi惊叹道，AnySearch可以通过大模型获取Reddit论坛、代码仓库、股票市场等多种信息。
在Reddit上的好评，同样如潮。
无独有偶，一位Reddit网友做了一个不同AI搜索相同问题的小实验，AnySearch开出的「盲盒」属实太惊艳了。
有人对此回应道，如今检索信息和来源选择的重要性，和模型能力的不相上下。即便是同一款模型，更强大的搜索/上下文，可以让它更具实用性。
AnySearch就像开了「天眼」一样，可以看到许多被埋没在互联网不同地方的内容。
AnySearch究竟有多能打？
在基准测试中，AnySearch在准确性和响应延迟两个维度，均优于同类AI搜索产品Parallel和Brave。
而且，在与同类Brave Search测试对比，结果显示，AnySearch数据更完整、分析更深入、回答更全面。
但产品好不好，最终还要看实战，毕竟， 搜索是一件「用了才知道差距」的事。
接下来，我们针对不同场景，看看AnySearch在实战中战斗力如何？
Skill安装异常简单！
在官网http://www.anysearch.com，
点击Install/安装
，复制安装教程直接输入Agent，部署完成。
场景 1：产品经理 — 竞品调研
最近流行开始用Codex替换Claude Code。
作为普通用户，我们想确认一下，这件事究竟靠不靠谱。
提示词：
查OpenAI：最新估值与融资节奏、近三个月定价变动、iOS App Store用户评分与差评焦点、Reddit社区口碑。特别是旗下的Codex。
输出：
综合如下(截至 2026-05-17):
1. 最新估值与融资节奏
2026-03-31:完成史上最大私募,$1220 亿承诺资本,投后估值 $8520 亿。亚马逊($500 亿,$150 亿即付 + $350 亿待 IPO/AGI)、英伟达、软银领衔(三者合计约 $1100 亿);红杉/Thrive/贝莱德/黑石跟投,微软参与未披露。
循环信贷扩至约 $47 亿(未动用);首次向个人开放认购(募 >$30 亿),纳入 ARK ETF(ARKK 约 3% 敞口)。
IPO:市场预期最早 2026 Q4(可能纳斯达克),但 CFO Sarah Friar 私下认为 2026 条件不足;需先完成营利化法律过渡 + 首披经审计财报。
估值争议:有双押投资者称支持这轮需假设 IPO 估值 >$1.2 万亿;对比 Anthropic 估值仅 $3800 亿、年化收入 2026-03 已飙至 $300 亿(OpenAI 2026-02 为 $250 亿,口径不同),二级市场首次给 Anthropic 溢价。两家均亏损,OpenAI 资本支出更激进。
2. 近三个月定价变动(Codex 重点)
04-02:Business $25→$20/席(年付);同日 Business/新 Enterprise 改 API token 计价(credits/1M tokens),旧"按消息"费率分批迁移。
04-09:新增 $100/月 Pro 档,Codex 用量 5x Plus。
官方促销(至 2026-05-31):Pro $100 → 2x(即 10x Plus);Pro $200 → 长期 20x Plus,5 小时高限 25x Plus 延续到 5-31。
Codex rate card 实测约 $100–200/开发者/月,方差大。
Sam Altman(约 05 月):30 天内给迁移企业 两个月免费 Codex + 无缝迁移工具——直接抢 Claude Code 的企业迁移窗口。
3. iOS App Store 评分与差评焦点
累计评分约 4.72/5(52.4M 评论;iOS 4.8/5、~720 万评分;台区显示 4.9/52 万)。但近期情绪 "Frustrated" 25/100、趋势下滑(Marlvel.ai,审计 2026-05-13,版本 1.2026.125)——历史均分高,近评转负。
差评焦点(按频次):①订阅/付费墙最突出(免费档收紧引发差评潮、自动续费、"$20–40 不值")②"It used to be smarter"感觉降智/不一致 ③用量上限不透明 ④崩溃/网络错误/语音断连(近期
#1
技术抱怨)⑤隐私(训练数据、历史不可删,德法区尤甚)⑥过度拒答、VoiceOver 遮挡发送键 ⑦2026-04 iOS 登录 403、重装无法修复(疑风控收紧)。正面:语音模式、情感陪伴即便在 1 星里也常被夸。
4. Reddit / 社区口碑(Codex vs Claude Code)
QJC 分析 500+ Reddit 评论 + 36 次盲测:共识"Claude Code 质量更高但限额太快不可用;Codex 质量略低但能用一整天"。直接偏好 Codex 65%(点赞加权 80%),但 Claude Code 讨论量 4x(基数更大)。盲测 Claude Code 胜 67%;SWE-bench 59% vs
56.8%,Terminal-Bench Codex 77.3% 完胜 65.4%,Codex token 效率约 4x,68% 开发者认为 Codex 首跑成功率更高。社区主流策略=两个都用。
GPT-5.3-Codex:好评在 agentic 自主性(能自己跑数小时、边测边改);批评在"只会生成、不能像 GPT 那样讨论 R&D"、部分 Mac 不可用、怀念 4o(
#Keep4o
)。
企业侧:Ramp AI Index 2026-04 Anthropic 采用率 34.4% 首超 OpenAI 32.3%,Claude Code 成多团队默认——Codex 免费迁移正是冲这个。
就一句话查 OpenAI 和 Codex，它给你把融资扒到每家出了多少钱、App Store 差评给你按频次排好了、Reddit 上 Claude Code 和 Codex 的盲测胜率都拉出来了，连奥特曼说要「两个月免费抢 Claude Code 迁移窗口」这种一手动态都没漏。
这些东西你自己去查，至少翻四五个平台，花一两个小时。
它一个接口，几秒钟，全回来了，而且不是丢一堆链接让你自己看，是整理好的，拿到就能用。
这就是 AnySearch 最强大的地方，一个入口，把散落在各个角落的信息一次性给你聚齐了。
场景 2：开发者 — 找生产级代码实现
Claude Code如今已经取代了VS Code，成为开发者最重要的开发工具。
加上AnySearch这个Skill，能为开发者带来哪些显著的积极变化？
提示词：
帮我看看生产环境里 Rust 异步连接池的背压和健康检查是怎么做的，要真实项目代码，别给我教程示例。
输出：
下面全部是我刚从真实仓库拉下来的逐字源码(非教程),今天 2026-05-17 的 main 分支,行号会漂,vendoring 时以你锁定的 commit 为准。两个对照实现:bb8(用得最多的异步池库,djc/bb8)和 pgcat(PostgresML 线上部署的 Postgres 代理,postgresml/pgcat)。deadpool 作为第三种范式只给指针(我没逐字读就不杜撰代码)。
背压(backpressure)
bb8 —— 有界池 + Notify 阻塞 + 整体超时(无无界队列)
bb8 —— 有界池 + Notify 阻塞 + 整体超时(无无界队列)
bb8/src/inner.rs:83(get()),关键在拿不到空闲连接时:
let mut conn = match conn {
bb8 —— 有界池 + Notify 阻塞 + 整体超时(无无界队列)
bb8/src/inner.rs:83(get()),关键在拿不到空闲连接时:
let mut conn = match conn {
Some(conn) => PooledConnection::new(self, conn),
None => {
wait_time_start = Some(Instant::now());
kind = StatsGetKind::Waited;
self.inner.notify.notified().await; // 池满 -> 在这里挂起
continue;
}
};
}
};
// ...
let result = match timeout(self.inner.statics.connection_timeout, future).await {
Ok(result) => result,
_ => { kind = StatsGetKind::TimedOut; Err(RunError::TimedOut) } // 背压信号
};
归还连接时唤醒一个等待者(inner.rs:167):self.inner.notify.notify_one();(Notify 定义在 internals.rs:22)。设计:池有界,过载不排无界队列,而是"阻塞到有连接或 connection_timeout 到点就 RunError::TimedOut"——天然 load-shedding,调用方被压回到池容量。
pgcat —— 多副本故障转移 + 熔断 ban 作为背压
src/pool.rs:768,get() 轮询候选副本:
pgcat —— 多副本故障转移 + 熔断 ban 作为背压
src/pool.rs:768,get() 轮询候选副本:
while !candidates.is_empty() {
let address = match candidates.pop() { Some(a) => a, None => break };
if self.is_banned(address) {
if self.try_unban(address).await { force_healthcheck = true; }
else { continue; } // 跳过被熔断的副本
}
let mut conn = match self.databases[address.shard][address.address_index].get().await {
Ok(conn) => { address.reset_error_count(); conn }
Err(err) => {
self.ban(address, BanReason::FailedCheckout, Some(client_stats)); // 取连接失败即熔断
continue;
}
};
// ...健康检查通过则返回...
}
client_stats.checkout_error();
Err(err) => {
self.ban(address, BanReason::FailedCheckout, Some(client_stats)); // 取连接失败即熔断
continue;
}
};
// ...健康检查通过则返回...
}
client_stats.checkout_error();
Err(Error::AllServersDown) // 所有候选耗尽 = 背压/拒绝信号
每个副本底层用的就是 bb8(.databases[..].get().await),所以单副本继承 bb8 的"有界+超时"背压;pgcat 在其上叠加熔断:取不到就 ban 该副本、转下一个,全挂了才 AllServersDown。
deadpool(第三种范式,仅指针)
tokio::sync::Semaphore 持 max_size 个 permit,get()/timeout_get() 先 acquire 一个 permit——permit 即背压闸门。仓库 bikeshedder/deadpool → crates/deadpool/src/managed/(已重构成 workspace,mod.rs 仅再导出,实现分散在该目录)。
deadpool(第三种范式,仅指针)
tokio::sync::Semaphore 持 max_size 个 permit,get()/timeout_get() 先 acquire 一个 permit——permit 即背压闸门。仓库 bikeshedder/deadpool → crates/deadpool/src/managed/(已重构成 workspace,mod.rs 仅再导出,实现分散在该目录)。
deadpool(第三种范式,仅指针)
tokio::sync::Semaphore 持 max_size 个 permit,get()/timeout_get() 先 acquire 一个 permit——permit 即背压闸门。仓库 bikeshedder/deadpool → crates/deadpool/src/managed/(已重构成 workspace,mod.rs 仅再导出,实现分散在该目录)。
健康检查(health check)
bb8 —— 可选 checkout 校验 + 归还校验 + 后台 reaper
tokio::sync::Semaphore 持 max_size 个 permit,get()/timeout_get() 先 acquire 一个 permit——permit 即背压闸门。仓库 bikeshedder/deadpool → crates/deadpool/src/managed/(已重构成 workspace,mod.rs 仅再导出,实现分散在该目录)。
健康检查(health check)
bb8 —— 可选 checkout 校验 + 归还校验 + 后台 reaper
inner.rs:106:
if !self.inner.statics.test_on_check_out {
return Ok(conn);
}
match self.inner.manager.is_valid(&mut conn).await {
Ok(()) => return Ok(conn),
inner.rs:106:
if !self.inner.statics.test_on_check_out {
return Ok(conn);
}
match self.inner.manager.is_valid(&mut conn).await {
Ok(()) => return Ok(conn),
Err(e) => {
self.inner.statistics.record(StatsKind::ClosedInvalid);
self.inner.forward_error(e);
conn.state = ConnectionState::Invalid; // 丢弃,循环再取
continue;
Ok(()) => return Ok(conn),
Ok(()) => return Ok(conn),
Err(e) => {
self.inner.statistics.record(StatsKind::ClosedInvalid);
self.inner.forward_error(e);
conn.state = ConnectionState::Invalid; // 丢弃,循环再取
continue;
}
}
归还时还会查 has_broken() 与 max_lifetime 过期(inner.rs:149-166);构造时 spawn 一个按 reaper_rate 的 interval_at 后台任务做 idle_timeout/max_lifetime 回收并维持 min_idle(字段见
bb8/src/api.rs:145-188:test_on_check_out / max_lifetime / idle_timeout / reaper_rate / min_idle)。即:校验非只在 checkout,后台 reaper 也持续淘汰。
pgcat —— 限频的 checkout 健康检查 + 熔断 + "绝不留坏连接"
src/pool.rs:807:健康检查被刻意限频(注释原话 "Health checks are pretty expensive."):
let require_healthcheck = force_healthcheck
|| server.last_activity().elapsed().unwrap().as_millis()
> self.settings.healthcheck_delay as u128;
if !require_healthcheck { /* 直接返回,不查 */ return Ok((conn, address.clone())); }
run_health_check(:851)用超时包住一个"最便宜的查询":
match tokio::time::timeout(
tokio::time::Duration::from_millis(self.settings.healthcheck_timeout),
server.query(";"), // 分号:跳过 query planner 的廉价探活
).await {
Ok(Ok(_)) => { /* ...checkout_success... */ return true; }
Ok(Err(err)) => error!("Failed health check ... {:?}", err),
Err(err) => error!("Health check timeout ... {:?}", err),
}
server.mark_bad("failed health check"); // 不把坏连接放回池
self.ban(address, BanReason::FailedHealthCheck, Some(client_info)); // 熔断该副本
false
ban()(:909)对 FailedHealthCheck/FailedCheckout/MessageSend|ReceiveFailed 累加错误计数(判断整 shard 是否宕),被 ban 的副本下次要走 try_unban 且 force_healthcheck=true 强制复检才会再用。
生产可借鉴的取舍
健康检查限频:pgcat 按 last_activity > healthcheck_delay 才查,而不是每次 checkout 都查——探活有成本。bb8 给的是开关 test_on_check_out,默认关。
探活一定包超时:tokio::time::timeout(healthcheck_timeout, query(";"));探活查询要廉价(; 跳过 planner)。
坏连接绝不回池:校验失败就 mark_bad/标 Invalid 丢弃重取,不返回给调用方。
过载转成显式信号:有界池 + 超时(bb8 RunError::TimedOut)/ 熔断耗尽(pgcat AllServersDown),即 load-shedding,而非无界排队。
熔断 + 强制复检再准入:不健康后端 ban 掉,解禁前强制 health check(pgcat),避免抖动反复打死。
后台 reaper:健康/生命周期不能只靠 checkout 驱动,需独立周期任务回收 idle/超龄并补足 min_idle(bb8)。
源码出处:bb8 github.com/djc/bb8(bb8/src/inner.rs、internals.rs、api.rs);pgcat github.com/postgresml/pgcat(src/pool.rs);deadpool
github.com/bikeshedder/deadpool(crates/deadpool/src/managed/)。需要的话我可以把某一处(比如 bb8 reaper 全文、或 pgcat try_unban/is_banned 的熔断恢复逻辑)再逐行拉出来过一遍。
你让它找「Rust 异步连接池的背压和健康检查，要真实项目代码」，它直接从 bb8、pgcat、deadpool 三个生产仓库里把源码逐行拉出来了，精确到文件路径和行号。
这个才是关键，你用谷歌搜这个问题，大概率得到的是 Medium 教程和 README 里的 hello world 级入门代码。
但真正写代码的人需要的不是教程，是「线上跑着的系统到底怎么处理的」。
AnySearch 直接帮你翻到了仓库里的核心逻辑，而且不是把整个文件糊你脸上，是把背压和健康检查的关键段摘出来，三种方案横向对着看，最后还给你总结了六条生产取舍。
对开发者来说，这个输出拿到手就能指导设计决策，不用再自己去 GitHub 一个个仓库翻。
这是场景 1 那种「聚合多平台信息」之外的另一层能力，它不光能搜新闻和舆情，还能深入到代码仓库这种高度专业的信息源里，把真正有用的东西挖出来。
场景 3：投资人 — 标的公司尽调
投资人也是在日常任务中需要大量处理各种不同来源的数据和信息的「噪音受害者」，令人疲惫不堪。
AnySearch能否「拯救」投资人于水火之中呢？
提示词：
查一下Anthropic：最新估值与股权结构、主要投资方及持股比例、已知诉讼或监管风险、核心专利布局、与OpenAI的营收和估值对比。
输出：
本次自动检索的数据互相打架且覆盖不全,我先做可靠性分级,再按你的 5 个维度给结论。今天 2026-05-17。
1. 最新估值与股权结构
1. 估值时间线(按置信度标注)
2025-09 F 轮:$130 亿融资,投后 $1830 亿(36kr,已过时,约当年 3 月 3x;领投 Iconiq / Fidelity / Lightspeed,Altimeter / General Catalyst / Coatue 跟投)
2026 年初:约 $3800 亿(本对话早前检索口径,二级市场需求超 OpenAI 并首付溢价)【中,已过时】
2026-05(财经媒体 2 天前):据报已就 ~$300 亿融资达成条款,估值 ~$9000 亿,首次反超 OpenAI(~$8520 亿)【报道/条款阶段,未官宣】
tmtpost(5-08)称 $1.2 万亿 —— 与其它源冲突,单一离群值,不采信
→ 可信的是"一年内 183B→~380B→~900B 数倍跳升"的方向;9000 亿是"达成条款"的报道而非交割,1.2T 别用。
股权结构 / 持股比例:公开不可得。 已知两大战略方为 Amazon 与 Google/Alphabet(各数十亿美元、多轮,且含大额算力/云额度承诺——投资额≠股权%);财务方见上。Anthropic 未上市,cap table
未披露,搜索里也没有任何百分比,我不编。要精确比例只能等招股书或可靠泄露。【明确缺口】
2. 诉讼 / 监管风险(方向可信,细节需查 docket)
版权/数据多线诉讼:作者集体案(训练用书,Bartz v. Anthropic 一类)、音乐出版商案(Concord 等诉 Claude 输出歌词)、Reddit 起诉(未授权抓取)。具体进展/和解金额未在结果中,不臆断。
消费端数据政策争议:2025-09 起 Free/Pro/Max 与 Claude Code 会话默认用于训练(除非 opt-out),允许训练数据留存最长 5 年,弹窗默认"接受"+ 截止 2025-09-28 → 隐私争议;企业/政府/教育/API(Bedrock/Vertex)不受影响。
运营/声誉(非法律):2025-07 底 Pro/Max 周配额 + 5 小时计量收紧引社区反弹;模型"降智"主观争议;大模型"可主动结束极端辱骂对话"引讨论。
监管:前沿大模型的 AI 安全/数据合规一般性压力(行业共性);搜索无具体新执法动作 → 不展开臆测。
3. 核心专利布局
搜索零结果。 且 Anthropic 公开面以研究论文/安全披露(Constitutional AI、可解释性)为主,非以专利组合著称。我不给杜撰的专利数/号。 严谨结论需检索 USPTO / Google Patents 受让人 "Anthropic
PBC"——明确缺口,要的话我用工具去查。
4. 营收 & 估值 vs OpenAI(综合本对话数据,标日期)
注:36kr 旧文里 OpenAI "$5000亿 tender / 历史 $400亿轮"是更早时点,与 $8520亿不冲突(不同轮次)。
可靠性总结:本次=中文二级财经媒体+抓取乱码,关键数字打架、对"股权比例/专利"几乎零覆盖。方向(快速爬升、反超叙事)可信;任何精确比例/单点估值不可信。权威源应以 Anthropic 官方
newsroom、一手英文财经(Bloomberg/Reuters/FT/The Information)、法院 docket、USPTO 为准。
我可直接做:① extract 抓 Anthropic 官方公告 / 一手英文财经原文核对 "$300亿@$9000亿" ② 检索 USPTO 专利受让人 ③ 拉版权案 docket 现状。要哪个?
提醒:搜索： 是网页搜索,做这种结构化财务/法律/专利尽调先天不可靠;建议拆细 + 我用 extract 抓一手核对。
这条输出最突出的一个点，是它在帮你
判断信息本身靠不靠谱
。
查Anthropic尽调，搜回来的数据互相打架，$3800亿、$9000亿、$1.2万亿三个估值满天飞。
它没有挑一个最好看的数字糊弄你，而是按时间线排好、标上置信度，把$1.2万亿标成「单一离群值，不采信」，把 $9000亿标成「条款阶段，未官宣」，最后给你一个方向性结论。
股权比例查不到，它直接说「cap table未披露，我不编」；
专利搜索零结果，它也没拿论文凑数。
对投资人来说，这比什么都重要。
尽调最怕的不是信息不够，是信息看起来够了但里面埋着错的，你照着下了判断。
这个输出等于帮你做了第一轮信源清洗，哪些能用、哪些存疑、哪些是垃圾，分得明明白白，还告诉你下一步该去哪里补。
场景 4：安全工程师 — 威胁情报查询
OpenClaw这类Agent拥有极高权限，想要让它发挥强大能力，就不得不让它控制计算机的海量数据。
安全问题也接踵而至，让每一个想成为OPC的「超级个体」，都必须承担起每个 IT 公司都要有的安全工程师的职责。
某天，你发现你的Agent后台出现了一个陌生IP，你的直觉让你紧张起来。
提示词：
帮我查一下 103.171.86.220 这个 IP 是什么来头。
输出：
103.171.86.220 实查结论(权威源)
身份(APNIC whois)
网段:103.171.86.0/24,netname MSBSPL
持有者:Maba Safenet Broadband Services Private Limited(一家印度小型宽带服务商)
国家:印度 IN(✗ 不是搜索暗示的印尼 INTRAKOM —— 那条是邻近 /23 的无关记录)
状态:ASSIGNED PORTABLE,经 IRINN(印度国家级 NIR)
abuse 联系人:airnetservicesjhs@gmail.com(用 Gmail 做 abuse 邮箱 —— 小运营商/管理粗放的信号,非恶意证据)
BGP 路由起源(Team Cymru)
AS140129 — MSBSPL-AS-IN,同一家公司;前缀 103.171.86.0/24,APNIC 分配 2021-08-09
登记者 = 宣告者(都是 MSBSPL/AS140129),没有"挂别人名下、第三方 announce"的错配 → 这块地址确由这家印度小宽带商自宣告自用
反向 DNS
PTR = cache6607.totousb.com.
cacheNNNN 是典型缓存/代理/CDN 节点命名;totousb.com 走 GoDaddy,创建 2023-04-02(~3 年,不算新),NS 为 domaincontrol.com,2026-05-14 刚更新过 —— 域名不新,但属不知名域名
研判(基于事实的中性推断,非定性)
"印度小型宽带 ISP 的 PORTABLE /24 + PTR 是 cache*.某不知名域名" 这种画像,在威胁狩猎里最常对应:住宅代理 / proxyware 出口节点、廉价被滥用主机、或扫描来源;但也可能就是个合法的小缓存/CDN
或普通宽带客户。不能据此判恶意。
关键看方向:
出站(你的资产主动连它):需要警惕 —— 业务上为什么要连一个印度小 ISP 的"cache"节点?像可疑外连/代理回连。
入站(它连你):更像扫描或代理流量来源。
诚实边界:whois/ASN 只回答"登记和宣告者是谁",不代表当前实际使用者,更不代表善恶。我没有信誉数据(AbuseIPDB / GreyNoise / VirusTotal / URLhaus / Shodan / Talos / 被动 DNS),不编造定性。
我可直接帮你做(选一个)
1. 用 AnySearch security/extract 抓 AbuseIPDB / GreyNoise / URLhaus / Shodan 上该 IP 的公开记录(标来源、不替你下结论)。
2. 查同 /24 其它 PTR —— 若整段都是 *.totousb.com 的 cache 节点,则更像一个代理/CDN 池,定性参考价值大。
3. 给你本地取证模板:从这条连接倒查进程/方向/频率/端口、是否周期 beacon(lsof -i、Zeek/Suricata、PCAP 看 SNI/JA3)。
提醒:搜索： 触发的是网页搜索,对 IP/IOC 只会返回乱码邻段垃圾(这次就是);IP 溯源直接用 whois/dig/Cymru 或对接你们 TIP 更靠谱。要我接着查哪个?
这条输出最值得注意的一个点，前两个场景都没体现过，就是它
足够诚实
。
查一个IP，它没有硬编一个「恶意评分8.5 / 10」糊弄你。
它把 whois、BGP、反向 DNS 三层信息老老实实摆出来，告诉你这是一家印度小宽带商的地址段，PTR 指向一个不知名的 cache 节点，画像上像代理出口或扫描源，但也可能就是个正常的缓存服务。
然后明确说了一句，「我没有信誉数据，不编造定性」。
对安全工程师来说，这比瞎给结论重要一百倍。
凌晨两点你看到一个告警，最怕的不是「查不到」，而是工具信心满满给你一个错的判断，你照着执行了。
这个输出把已知事实和未知边界分得很清楚，还纠正了搜索结果里把印度 IP 误标成印尼的错误，最后给了三个可以立刻执行的下一步。
这是 AnySearch 在前两个场景之外展现的另一种能力，不是「什么都能查到」，而是「查到的东西靠谱，查不到的不瞎编」。
对专业场景来说，这个比信息量更关键。
四个场景看下来，AnySearch 展现的不是同一个优点的重复，而是四层不同的能力：
场景1是聚合广度，场景2是专业深度，场景3是对已知的甄别，
场景4是对未知的诚实。
这四个加在一起，才是「为Agent而生」真正的意思。
不是「搜索引擎」，专为Agent而生
AnySearch的核心能力，可以用一句话概括——
一个统一入口，接入海量专业数据源，让AI Agent高效连接真实世界信息。
但「统一入口」四个字的分量，只有真正做过Agent开发的人才能体会。
在AnySearch出现之前，如果想让Agent同时具备金融查询、代码搜索、安全情报、企业工商和学术文献的检索能力，就需要：
分别注册企查查、Finnhub、PubMed、VirusTotal的账号，学习几十套不同的API文档，管理几十个API Key的限流和余额，还得自己写一层路由逻辑来决定什么查询发给哪个数据源。
这套活儿干下来，「搜索模块」的开发成本可能比Agent本身还高。
AnySearch把这一切打包了。一个API Key，访问AI所需的优质数据源。
开发者不用再当「API集成工程师」，只需要把AnySearch接进去，剩下的交给它。
一个API，通吃「优质」数据源
只需要发出查询，AnySearch自动路由到最合适的数据源，返回结构化的Markdown结果。
对Agent来说，背后接了多少个数据源、每个源的认证方式是什么、结果格式有什么差异，这些复杂性全部被AnySearch吃掉了。
而且它覆盖的「场景广度」，远超大多数开发者的预期——
查企业股权穿透、获取A股分钟级行情、检索法院裁决书全文、搜索GitHub生产级代码实现，甚至提交文件到VirusTotal做恶意检测，一个API即可搞定。
可见，AnySearch覆盖的是Agent的全场景需求，而不只是某个垂直领域。
这些信息占互联网总量的80%以上，却是Google和Exa完全触及不到的。
这不是它们「还没索引到」的问题，而是架构上就不可能覆盖的盲区。
不仅如此，AnySearch的接入方式足够灵活：
REST API（通用，适配任何编程语言和Agent框架）、MCP Server（Claude Desktop、Cursor、Windsurf、OpenCode配置一行JSON即可接入）、Skill（直接作为Agent技能调用）。
三种方式，覆盖从硬核开发者到轻度极客的全部需求。
这听起来像是一个「聚合」的故事，但AnySearch做的远不止数据源打包。
它在底层构建了一套完整的智能路由和结果融合机制，让Agent从「搜到信息」直接跨越到「搜到能用的信息」。
杀手锏：智能意图路由
AnySearch的技术内核里，藏着一个关键模块：
智能意图路由（Intent Classifier）
。
当一条查询进入AnySearch，系统内置的Intent Classifier会自动识别查询意图，通过多维路由匹配，精准路由到最相关的2-3个数据源。
这意味着系统不会对所有数据源做全量扇出，只查最该查的源，速度更快，Token消耗更低。
当多个数据源同时返回结果时，AnySearch通过RRF（Reciprocal Rank Fusion）算法进行结果融合。
同一条信息被多个源交叉验证时排名自动提升，URL规范化去重避免重复。
融合后再经过多维度质量重排序，Agent可以直接用分数做决策，不用再花Token去做二次筛选。
而在输出格式上，AnySearch返回的是清洗后的结构化Markdown，通常每条结果500-2000Token。
同样的查询，Agent用Exa搜10条结果，平均消耗约15,000 Token；用AnySearch搜5条高质量结果，平均消耗约5,000 Token。
显而易见，Token消耗降低60%-70%！
用更少的Token拿到更准的信息，这对跑在生产环境中的Agent来说，意味着实实在在的成本节省和效率提升。
隐私这件事，做到了架构级
在AI搜索领域，隐私不是一个「加分项」，而是一个底线。
你的Agent通过搜索接口查询的内容，可能涉及商业机密（竞品调研）、安全敏感信息（IP威胁排查）、法律风险数据（公司尽调）。
如果这些查询内容被记录、被分析、被用于训练模型——后果不堪设想。
AnySearch的做法是：从架构层面将隐私保护作为第一优先级。
具体来说：用户的搜索查询不会被记录，不会被用于训练模型，不会被分享给第三方。
系统不收集任何遥测数据，不追踪用户行为，不做用户画像。
所有API请求通过加密通道传输，查询内容在处理完成后即时丢弃，不做持久化存储。
一句话总结：匿名使用、无追踪、零遥测——你的查询只属于你。
这在当前AI搜索赛道中是非常稀缺的。大多数AI搜索工具，或多或少都在利用用户查询数据来优化自身模型——这是一个公开的秘密。
AnySearch选择不碰这条线，对于处理敏感信息的开发者和企业用户来说，这一点尤为关键。
搜索，AI时代被低估的基础设施
回望搜索引擎的历史，每一次范式转移，都伴随着「谁在搜」的改变。
1998年Google诞生时，搜索是帮人找网页。2010年代移动互联网兴起时，搜索变成了帮人找服务。
2023年ChatGPT引爆LLM浪潮后，Perplexity们把搜索变成了帮人找答案。
而现在，2026年，搜索正在经历第四次范式转移：从帮人找信息，到帮AI理解世界。
AnySearch团队在一封写给开发者的公开信中说了这样一段话——
我们始终相信，未来的AI不只要「会思考」，更需要真正看见世界、理解世界。
互联网时代的搜索引擎帮助人类寻找网页；而在AI时代，Agent需要的不是一串链接，而是可信、结构化、可执行的信息结果。
这段话点出了一个很多人还没意识到的事实：当Agent开始执行复杂任务时，真正的瓶颈往往不再是推理能力，而是信息获取能力。
缺少可靠的信息获取层，再强大的AI模型，也难以真正理解现实世界。
这就是AnySearch的定位：一家应用型AI实验室，正在构建AI时代的全新搜索基础设施。
现在回看，AnySearch做的事情，本质上是在AI时代重新定义「搜索」这件事。
过去的搜索是给人看的：返回一堆链接，人自己去点击、阅读、筛选、总结。
但在Agent时代，搜索的消费者变了，变成了机器。
机器不需要链接，不需要HTML，不需要花花绿绿的搜索结果页，需要的是结构化的、经过验证的、可以直接用于推理和决策的数据。
这是一个全新的基础设施层。谁先把这一层做好，谁就拿到了AI Agent生态的入场券。
AnySearch跑在了前面。
它能跑多远？如今，海外开发者已经给出了第一轮答案。
彩蛋
今天起，AnySearch面向所有开发者免费使用，可接入任意Agent体验——
官网：
http://www.anysearch.com
GitHub：https://github.com/anysearch-ai
也可在ClawHub、SkillHub、Glama、skills.sh等插件商店直接获取
点击【阅读原文】，即可跳转
秒追ASI
⭐
点赞、转发、在看一键三连
⭐
点亮星标，锁定新智元极速推送！