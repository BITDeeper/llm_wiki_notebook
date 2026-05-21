---
title: "Minion Skills: Claude Skills的开源实现"
date: 2025-12-15
source: "量子位"
url: "https://mp.weixin.qq.com/s/WbRA2PPuIiCoIe2R-GWUVA"
rss_id: "2247854027_3"
---
Minion Agent
团队 投稿
量子位 | 公众号 QbitAI
引言
Claude最近推出了一个令人兴奋的特性——
Skills系统
。它让AI Agent能够动态加载专业能力，按需”学习”处理PDF、Excel、PPT等专业文档的技能。
作为一个开源爱好者，我立刻意识到这个设计的价值，并在Minion框架中实现了完整的开源版本。本文将介绍Skills的设计理念，以及我的开源实现细节。
Skills解决了什么问题？
在开发AI Agent的过程中，有一个核心矛盾：
Context Window的有限性vs能力需求的无限性
传统做法是把所有工具、所有指令都塞进system prompt：
System
Prompt
=
基础指令 + 所有工具描述 + 所有专业知识
= 50K+ tokens
= 高延迟 + 高成本 + 低效率
更糟的是，大多数时候用户只需要其中一小部分能力。当用户问”帮我处理这个PDF”时，系统却加载了处理Excel、数据库、代码等所有能力的上下文。
Skills的核心理念
Claude Code的Skills设计灵感来自一个简单的类比：
人类专家不是把所有知识都装在脑子里，而是在需要时查阅手册、调用专业知识。
Skills系统让AI Agent也具备这种能力：
用户请求 → Agent识别需要PDF技能 → 动态加载PDF处理指令
→ 执行专业任务
→ 返回结果
Minion的开源实现
看到Claude Code的Skills设计后，我决定在Minion框架中实现一个完全兼容的开源版本，让更多开发者能够使用这一特性。
1. Skill的定义：简洁而强大
每个Skill就是一个包含SKILL.md文件的目录：
.minion/skills/
├── pdf/
│ ├── SKILL.md
# 技能定义和指令
│ ├── references/
# 参考资料
│ ├── scripts/
# 辅助脚本
│ └── assets/
# 资源文件
├── xlsx/
│ └── SKILL.md
└── docx/
└── SKILL.md
SKILL.md采用YAML frontmatter + Markdown body的格式：
---
name: pdf
description: PDF文档处理技能，支持文本提取、表格解析、表单填写等
license: MIT
---
## 当使用此技能时
你现在具备了专业的PDF处理能力...
### 文本提取
使用pypdf2库进行文本提取：
...
### 表格识别
使用tabula-py进行表格提取：
...
2. 智能发现：按需加载
Skill Loader会在多个位置搜索可用技能：
class
SkillLoader
:
SKILL_DIRS
= [
".claude/skills"
,
# 兼容Claude Code
".minion/skills"
,
# Minion原生
]
def
get_search_paths
(
self
):
paths = []
# 项目级优先
for
skill_dir
in
self
.
SKILL_DIRS
:
paths.append((
self
.project_root / skill_dir,
"project"
))
# 用户级次之
for
skill_dir
in
self
.
SKILL_DIRS
:
paths.append((
self
.home_dir / skill_dir,
"user"
))
return
paths
这种分层设计带来了灵活性：
项目级Skills
：针对特定项目的专业能力
用户级Skills
：跨项目的通用能力
优先级机制
：项目级覆盖用户级，允许定制化
兼容性
：同时支持.claude/skills和.minion/skills路径
3. 优雅的注册表：快速查找
class
SkillRegistry
:
def
register
(
self, skill: Skill
) ->
bool
:
"""注册技能，高优先级覆盖低优先级"""
existing =
self
._skills.get(skill.name)
if
existing:
priority = {
"project"
:
0
,
"user"
:
1
,
"managed"
:
2
}
if
priority[skill.location] >= priority[existing.location]:
return
False
# 已有更高优先级的同名技能
self
._skills[skill.name] = skill
return
True
def
generate_skills_prompt
(
self, char_budget=
10000
):
"""生成可用技能列表，控制context消耗"""
# 智能截断，确保不超预算
...
4. Skill Tool：执行入口
class
SkillTool
(
BaseTool
):
name =
"Skill"
description =
"动态加载并执行专业技能"
def
execute_skill
(
self, skill:
str
) ->
Dict
[
str
,
Any
]:
skill_obj =
self
.registry.get(skill)
if
skill_obj
is
None
:
return
{
"success"
:
False
,
"error"
:
f"Unknown skill:
{skill}
"
,
"available_skills"
:
self
.registry.list_all()[:
10
]
}
# 获取技能的完整指令
prompt = skill_obj.get_prompt()
return
{
"success"
:
True
,
"skill_name"
: skill_obj.name,
"prompt"
: prompt,
# 注入到对话上下文
}
实际效果
场景1：处理复杂PDF报告
用户：帮我分析这份财务报告 report.pdf，提取所有表格数据
Agent：
1.
识别需要PDF处理能力
2.
调用 Skill("pdf") 加载PDF技能
3.
获得专业的PDF处理指令
4.
使用pypdf2提取文本
5.
使用tabula-py提取表格
6.
返回结构化数据
场景2：批量处理Excel文件
用户：把这10个Excel文件合并，并生成汇总统计
Agent：
1.
调用 Skill("xlsx") 加载Excel技能
2.
获得pandas、openpyxl等库的专业用法
3.
批量读取文件
4.
合并数据、计算统计
5.
生成新的Excel报告
性能对比
指标
传统方式
Skills方式
基础Context
50K tokens
10K tokens
PDF任务Context
50K tokens
10K + 3K tokens
首次响应延迟
较长
较短
专业任务质量
一般
更精准
设计亮点
1. 声明式定义
技能通过Markdown定义，非技术人员也能创建和维护：
---
name: data-analysis
description: 数据分析技能
---
## 数据清洗步骤
1.
检查缺失值
2.
处理异常值
...
2. 资源绑定
技能可以带有参考资料、脚本等资源：
skill_obj.get_prompt()
#
返回：
#
Loading: pdf
#
Base directory: /Users/xxx/.minion/skills/pdf
#
# [技能内容，可以引用 references/api_doc.md 等]
3. 版本和来源追踪
@dataclass
class
Skill
:
name:
str
description:
str
content:
str
path: Path
location:
str
# project, user, managed
license:
Optional
[
str
]
metadata:
Dict
[
str
,
Any
]
为什么做开源实现？
Claude Code的Skills是一个出色的设计，但它是闭源的、与Claude生态绑定的。我实现开源版本的原因：
1. LLM无关性
：Minion支持多种LLM后端（Claude、GPT-4、开源模型），Skills能力不应被锁定在单一供应商
2. 可定制性
：开源实现允许深度定制，满足特殊需求
3. 社区贡献
：开源让更多人能够贡献Skills，形成技能生态
4. 学习价值
：通过实现，深入理解这一架构的设计精髓
未来方向
1. 技能市场
想象一个Skills Marketplace，开发者可以发布、分享专业技能：
minion skill install data-science-toolkit
minion skill install legal-
document
-analysis
2. 智能推荐
根据用户历史和当前任务，自动推荐相关技能：
def
recommend_skills
(
user_request, history
):
# 分析请求内容
# 匹配最相关的技能
# 预加载可能需要的技能
...
3. 技能组合
多个技能协同工作：
# 分析PDF中的数据，生成Excel报告
skills_used
= [
"pdf"
,
"xlsx"
,
"data-visualization"
]
4. 自学习技能
Agent在完成复杂任务后，自动生成新技能供未来使用：
async
def
learn_skill_from_session
(
session_log
):
# 分析成功的任务执行过程
# 提取可复用的模式和指令
# 生成新的SKILL.md
...
视频演示
PDF摘要提取
：https://youtu.be/r1nngYLI-pw
长PDF翻译
（穷人版Paper PDF Reader）
：https://youtu.be/C7p8yffBZ-Q
DOCX文档处理
：https://youtu.be/PByDtqY_17Y
PPTX演示文稿处理
（穷人版pptx 生成）
：https://youtu.be/ek00e5m4yXI
结语
Claude Code的Skills系统体现了一个核心设计哲学：
不要试图让AI什么都懂，而是让它知道在需要时去哪里找到答案。
这种”专家系统”思维，让AI Agent从”通才”进化为”能快速变身专家的通才”。
通过Minion的开源实现，这一能力现在可以被更广泛的开发者使用，不受限于特定的LLM供应商或闭源生态。
欢迎试用和贡献：
GitHub：
https://github.com/femto/minion
https://github.com/femto/minion-agent
文档：https://github.com/femto/minion/blob/main/docs/skills.md
让我们一起构建更开放、更智能的AI Agent生态。
作者介绍
郑炳南，毕业于复旦大学物理系。拥有20多年软件开发经验，具有丰富的传统软件开发以及人工智能开发经验，是开源社区的活跃贡献者，参与贡献metagpt、huggingface项目smolagents、mem0、crystal等项目，为ICLR 2025 oral paper《AFlow: Automating Agentic Workflow Generation》的作者之一。
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