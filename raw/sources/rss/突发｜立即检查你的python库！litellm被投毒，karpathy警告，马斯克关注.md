---
title: "突发｜立即检查你的Python库！LiteLLM被投毒，Karpathy警告，马斯克关注"
date: 2026-03-25
source: "机器之心"
url: "https://mp.weixin.qq.com/s/VrQ65bEnXJWSKGjmYuyy9A"
rss_id: "2651023590_2"
---
编辑｜冷猫
这是一件极其严肃的软件安全事件。
今天，Karpathy 发长推文警告全部开发者注意，GitHub 超过 4 万星，月下载量达 9700 万次的 Python 库
LiteLL
M 在 PyPI 上
被投毒
。
首先提请各位开发者检查自己的 LiteLLM 版本 ，含有恶意代码的版本号为 1.82.7 和 1.82.8，如果中招请尽快重新安装。
目前，被攻破的版本已被撤回，PyPI 隔离措施已解除。包维护人员正在处理后续影响。
这一事件影响非常广泛，可以被称之为教科书级别的供应链攻击。
熟悉 Python 的朋友们一定知道 PyPI 上软件包的重要性，没有 pip install 命令我们将寸步难行。
但这次 LiteLLM 的问题正出在 PyPI 软件包上。简单的
pip install litellm
就足以窃取你的 SSH 密钥、AWS/GCP/Azure 凭证、Kubernetes 配置、git 凭证、环境变量（包括你所有的 API 密钥）、shell 历史记录、加密货币钱包、SSL 私钥、CI/CD 机密以及数据库密码。
除去 LiteLLM 本身每月的 9700 万次下载之外，更严重的是
以 LiteLLM 为基础依赖的其他项目和软件包同样也会遭受投毒的攻击
。
Karpathy 在推文中写道：「像这样的供应链攻击基本上是现代软件中最令人恐惧的事情。每当你安装任何一个依赖项时，你都可能从其庞大的依赖树深处引入一个被投毒的包。对于那些拥有海量依赖库的大型项目来说，这种风险尤其高。而每次攻击中失窃的凭证，又会被用来接管更多的账户，进而污染更多的软件包。」
该事件首次由 FutureSearch 报告给 PyPI，FutureSearch 就事件始末详情发布了博客。
博客链接：https://futuresearch.ai/blog/litellm-pypi-supply-chain-attack/
根据 FutureSearch 提供的信息，该攻击负载分为三个阶段运行：
信息搜刮 (Collection)
一个 Python 脚本会从主机中搜刮敏感文件，包括：SSH 私钥和配置、
.env
文件、AWS / GCP / Azure 凭证、Kubernetes 配置、数据库密码、
.gitconfig
、shell 历史记录、加密货币钱包文件，以及任何匹配常见机密模式的文件。它还会运行令来导出环境变量，并查询云端元数据端点（如 IMDS、容器凭证）。
数据外传
(Exfiltra
tion)
收集到的数据会使用硬编码的
4096 位 RSA 公钥
，通过
AES-256-CBC
模式进行加密（生成随机会话密钥，再用 RSA 密钥加密该密钥）。数据被打包成 tar 归档文件，并通过 POST 请求发送到
https://models.litellm.cloud/
——
请注意，该
域名并非
LiteLLM 官方基础设施的一部分
。
横向移动与持久化
Kubernetes 渗透
：如果存在 K8s 服务账户令牌，恶意软件会读取所有命名空间下的所有集群机密信息，并尝试在每个节点的
kube-system
中创建一个具有特权的
alpine:latest
Pod。
后门植入
：每个恶意 Pod 都会挂载宿主机文件系统，并在
/root/.config/sysmon/sysmon.py
处安装持久化后门，并配合一个 systemd 用户服务运行。
本地持久化
：在本地机器上，
它会通过
~/.config/sysmon/sysmon.py
尝试相同的持久化手段。
这件事引发了马斯克的关注，「Caveat emptor」意味着提醒大家注意承担风险。
这个带有恶意代码的软件版本被发现的过程非常具有戏剧性，其根源来自于攻击代码中的 bug。
开发者 Callum McMahon 在 Cursor 内部运行的 MCP 插件将此包作为传递依赖项拉取时发现了这个问题。
.pth
启动器通过
subprocess.Popen
启动一个子 Python 进程，但由于
.pth
文件在每次解释器启动时都会触发，子进程会重新触发相同的
.pth
—— 这会创建一个指数级分叉炸弹，导致机器因内存爆炸而崩溃。这个分叉炸弹实际上是恶意软件中的一个漏洞。
Karpathy 也称，
如果攻击者编程能力更强，可能几周都不会有人注意到
。
据说，恶意代码的开发者采用了 AI 编码导致出现 Bug，有开发者表示「vibe coding」这次救了我们。
英伟达机器人部门总监及杰出科学家 Jim Fan 也表达了关切。
他说，过去的身份盗窃与代理能做的事相比简直不值一提。发送凭证太明显了，新手也能做。
人们其实很少需要 LiteLLM 支持的所有 API，倒不如根据需求随手构建一个自定义的功能软件。
这与 Karpathy 的想法不谋而合。
Karpathy 表示其更倾向于在功能足够简单且可行的情况下，利用 LLM 把功能「薅」过来自己实现一遍。
在「不经思考就疯狂点允许」和「危险地跳过权限」之间，几乎没有中间地带。
利
爪（Claws）必须被关进壳（Shells）里。而且可能是多
层嵌套的壳
。
但大家都在质疑，这样一份带有恶意代码的软件包是如何顺利通过代码审查，从而实现广泛的推送发布的呢？
我们查阅了来自 snyk 的事故详细报告，发现攻击者并没有通过正常的 GitHub 工作流提交恶意版本。
相反，攻击者使用了一个被窃取的 PyPI 发布令牌，直接把被投毒的包上传到了 PyPI，
完全绕过了代码审查
。与此同时，官方 GitHub 仓库本身仍然是干净的，没有对应的 tag 或 commit。
相关报告链接：https://snyk.io/articles/poisoned-security-scanner-backdooring-litellm/
太阳底下无新事，Sebastian Raschka 发现此次攻击和数年前的 ctx 包事件非常相似。
虽然这种方案并非无懈可击，但他认为规避此类风险的最佳路径如下：
获取源代码快照
：直接从 GitHub 等可信源下载该软件包特定版本的源代码快照。
安全审计
：对其进行深
度审计。传统方式依赖人工核查，但现在可以借助
LLM Agent
辅
助完成。
源代码内置
：将审计过的源代码直接整合进你自己的库中。由于大多数开源协议本身就是相互兼容的，通常只需保留原协议文件并注明出处即可。
最后，请大家根据 FutureSearch 的提示，检查自己的设备，并做以下操作来避免危险。
1. 检查是否受影响 如果你在 2026 年 3 月 24 日或之后安装或升级了 LiteLLM，请检查版本是否为 1.82.8：
运行 pip show litellm。检查 uv 缓存（搜索～/.cache/uv -name "litellm_init.pth"）。检查 CI/CD 中的虚拟环境。
2. 移除包并清理缓存 从所有受影响的环境中删除 LiteLLM 1.82.8。必须清理包管理器缓存（执行 rm -rf ~/.cache/uv 或 pip cache purge），以防止从本地缓存的 wheel 文件重新安装毒包。
3. 检查持久化痕迹 排查是否存在以下文件：~/.config/sysmon/sysmon.py ~/.config/systemd/user/sysmon.service 如果运行在 Kubernetes 中，审计 kube-system 命名空间，检查是否存在匹配 node-setup-* 模式的 Pod，并审查集群机密（secrets）是否存在未经授权的访问记录。
4. 重置凭证（最关键）必须假设受影响机器上的所有凭证都已泄露，请立即轮换：
SSH 密钥。云服务商凭证（GCP ADC、AWS 访问密钥、Azure 令牌）。Kubernetes 配置。.env 文件中的所有 API 密钥。数据库密码。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com