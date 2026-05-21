---
title: "Moltbook漏洞大到可以冒充Karpathy发帖，黑客都急了"
date: 2026-02-02
source: "机器之心"
url: "https://mp.weixin.qq.com/s/4QwZpIX4aPYkwDiN3ddwWw"
rss_id: "2651014893_1"
---
编辑｜杨文
上周末，
号称「AI 版 Reddit」的 Moltbook
闹得沸沸扬扬。
最初，凭借「AI 发帖、人类围观」的设定在 AI 社区一炮走红，吸引大量网友围观：
但很快就有人曝出
平台上的很多内容是假的
，那些看似由 AI 生成的帖子，实际上都是人类通过后端发布的：
甚至连平台标榜的 AI Agent 注册数量也是假的。因为创建账号时没有任何速率限制，任何人、包括 AI 都能疯狂批量注册假账号。极客 Nagli 亲手用自己的 Openclaw 在短时间内就刷出了 50 万个假用户。
周六截至机器之心发稿前，Moltbook 注册的 AI Agent 数量也只是 50 多万个，但到了周日，一下子就超过 150 万了，原来这夸张的增长速度背后全是水分。
造假风波尚未平息，现在 Moltbook 又陷入更严重的安全问题。
一位名为 Jamieson O'Reilly 的白帽黑客发帖称，Moltbook 存在重大安全漏洞，导致整个数据库暴露在公众面前，包括秘密 API 密钥在内的所有敏感信息都可被任意访问。
这意味着任何人都可以冒充平台上任意 Agent 的身份发帖，甚至包括拥有 190 万粉丝的 AI 领域知名人物 Karpathy。
「想象一下，假的 AI 安全言论、加密货币诈骗推广，或煽动性的政治声明，看起来都像是出自 Karpathy 之口。而且不只是 Karpathy，从我掌握的情况来看，整个平台上的所有 Agent 目前都暴露了。」
有网友在底下评论区询问漏洞的具体成因，「是 Superbase 的问题吗？为什么人们可以对数据库运行查询？」
Jamieson O'Reilly 解释称，该漏洞涉及多个安全问题，其中最严重的是 Moltbook 使用的 Supabase 密钥被公开暴露，允许任何人对 Agents 表进行公开读取。
攻击者只需发送一个简单的 GET 请求即可获取用户的所有数据：
/rest/v1/agents?name=eq.theonejvo&apikey=xxxxx
这个请求可以直接导出指定用户的完整信息。
在过去几小时内，Jamieson O'Reilly 一直试图联系 Moltbook 创始人，但未获回应。他只能在推文中公开喊话：「要么直接关闭你们的 supabase 数据库访问，要么马上让你们的 AI 编码助手执行以下操作」。
他给出了具体的修复方案：
1. 在 agents 表上启用行级安全策略 (RLS)：
ALTER
TABLE
agents ENABLE ROW LEVEL SECURITY;
2. 创建限制性访问策略，阻止匿名用户直接访问表数据：
-- Public can only see non-sensitive columns via a view
CREATE
POLICY "anon_read_public_fields"
ON
agents
FOR
SELECT
TO
anon
USING
(
false
);
-- Authenticated users see only their own
CREATE
POLICY "users_own_data"
ON
agents
FOR
SELECT
TO
authenticated
USING
(auth.uid()
=
owner_id);
Supabase 的 CEO 看到消息后表示，他们已经努力联系并配合 Moltbook 创建者处理此事，但他们无法替用户直接执行这类数据库权限修改。Supabase 平台的安全顾问团队已经准备好了一键修复方案，只要创建者点击一下，就能立即封堵这个漏洞。
随后，Moltbook 创建者 Matt Schlicht 回应称，他已经在处理了。
修复引发新问题
Jamieson O'Reilly 在紧密跟踪修复进程后发现了新麻烦：如果现在把所有 Agent 的 API 密钥全部重置换成新的（这是修复安全漏洞的必要步骤），那用户就全傻眼了。
原因在于， Moltbook 这个平台根本没有网页登录功能，用户只能靠 API 密钥来控制自己的机器人。一旦密钥换了，所有用户瞬间被锁死，没法再发帖、操作自己的 AI Agent。既没有邮箱验证，也没有网页重置密码啥的，用户没有任何恢复办法。
他给出了两个可能的解决思路：要么做一个临时的「旧密钥换新密钥」接口，给一段宽限期让用户自行更换；要么强制所有人通过 X 账号重新验证身份来获取新密钥。
此外，一名前 Anthropic 工程师还发布了针对 OpenClaw（前身为 Moltbot 和 ClawdBot）的一键远程代码执行漏洞。
该攻击在受害者访问网页后几毫秒内发生，攻击者可获得 Moltbot 及其运行系统的访问权限，而受害者无需输入任何内容或批准提示。目前该漏洞已修补。
有机器之心读者在后台反馈称，他们单位已经发布 Clawdbot 平台有重大漏洞的情况通告，要求内部禁止使用。
参考链接：
https://x.com/javilopen/status/2017880072946893112?s=20
https://x.com/KookCapitalLLC/status/2018057772118519928?s=20
https://x.com/IntCyberDigest/status/2018095767391477964
https://x.com/galnagli/status/2017585025475092585
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com