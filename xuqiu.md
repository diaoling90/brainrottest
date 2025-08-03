好，我们就围绕 **`brainrot test`** 这个关键词，设计一个**能快速上线、具有爆款潜力、支持 SEO 与社媒传播的测试类工具网站 MVP 功能需求文档**。

---

# ✅《Brainrot Test 网站 MVP 功能需求文档》

## 🧠 项目目标

构建一个基于流行网络俚语 “brainrot” 的人格/沉迷测试工具，满足用户在搜索 `brainrot test` 时的主要意图：

* **认领标签 / 表达情绪（我沉迷疯了）**
* **参与互动 / 获得爆笑结果**
* **生成个性内容 / 可分享**
* **增强共鸣感 / 再传播**

---

## 🧱 产品定位

| 类别         | 定义                                                 |
| ---------- | -------------------------------------------------- |
| 产品类型       | 测试类互动工具网站（轻社交/轻娱乐）                                 |
| 核心用户       | Z世代 / 网络内容沉迷用户 / fandom爱好者 / meme用户                |
| 流量入口       | Google 搜索（SEO）、TikTok 视频、X/Twitter 截图分享、Reddit 讨论区 |
| 最小可用模型 MVP | 1 套题库系统 + 结果生成器 + 分享卡片 + SEO 页面                    |

---

## 🔍 用户旅程拆解

1. 搜索 `brainrot test` → 点击进入站点
2. 快速看到「你是哪种 brainrot 类型？」引导
3. 点击开始 → 进行 6-10 道问题答题
4. 系统根据答案分支匹配结果（8-12 种结果）
5. 得到配图 + 爆笑脑腐文字 + “你的脑腐等级/类型”
6. 提供「复制/保存图片」+ 「一键分享」社媒按钮
7. 可能返回参与更多工具 or 查看别人结果（引导二次使用）

---

## 🛠️ 功能模块说明

---

### 1️⃣ 核心功能：测试系统（Test Engine）

| 项目   | 描述                                                |
| ---- | ------------------------------------------------- |
| 题目数量 | 6-10 题，单选或滑动选择题（便于移动端）                            |
| 题型   | 搞笑/代入型（“你见到推的合影反应是？”）                             |
| 分支逻辑 | 每题得分 → 按 tag / 权重计算匹配结果                           |
| 结果类型 | 8-12 种脑腐类型，如「AO3脑熔型」「TikTok短片循环型」「推特破防型」「日语+哭腔型」等 |

---

### 2️⃣ 结果生成页面（Result Page）

| 内容     | 示例                            |
| ------ | ----------------------------- |
| 类型名称   | “你是【自我催眠型 brainrot】”          |
| 搞笑文字描述 | “你每天都在跟不存在的角色说早安晚安，梦里结婚白天破防。” |
| 关键词标签  | #brainrottest #脑腐等级：9.5/10    |
| 配图     | 自动匹配风格图（抽象/搞笑/AI 生成图）         |
| CTA    | 一键复制结果 / 下载图 / 分享链接           |

---

### 3️⃣ 分享功能（Social Virality）

| 类型    | 说明                                  |
| ----- | ----------------------------------- |
| 图片卡片  | 结果+文案+配图组成可保存图片（for TikTok/Twitter） |
| 链接分享  | 分享链接带参数（支持预览缩略图）                    |
| 再引导按钮 | “再测一次” / “看其他人的 brainrot”           |

---

### 4️⃣ SEO 支持页面结构

| 页面               | 功能             | SEO 关键词覆盖                                     |
| ---------------- | -------------- | --------------------------------------------- |
| `/` 首页           | 快速进入测试         | brainrot test, what is my brainrot            |
| `/result/[type]` | 结果页（静态渲染）      | brainrot type personality, brainrot type meme |
| `/about`         | 概念介绍页          | what is brainrot, brainrot meaning            |
| `/share`         | 聚合用户分享结果（后期可做） | brainrot examples, fandom brainrot            |

---

### 5️⃣ 额外推荐功能（可选）

| 功能     | 描述                       |
| ------ | ------------------------ |
| 测试记录存储 | 用 localStorage 保存测试历史    |
| 用户投稿   | 用户自定义类型 + 文案投稿（收集爆点）     |
| 联动生成器  | 引导跳转到其他工具，如脑腐语录生成器（后期扩展） |

---

## 🎨 UI/UX 简要建议

* 📱**移动优先设计**，界面干净、幽默、Meme 感强
* 🎨 结果图像支持 emoji / meme 图叠加（易截图转发）
* 🧠 字体建议配合「手写/中二」风格 → 视觉识别度高

---

## ⚙️ 技术实现建议

| 模块   | 建议工具 / 框架                              |
| ---- | -------------------------------------- |
| 前端   | Next.js / SvelteKit / React + Tailwind |
| 测试引擎 | JSON-based config 题库 + tag 评分逻辑        |
| 后端   | 无需复杂后端，可用 static render + client logic |
| 分享图  | 用 HTML2Canvas / Cloudinary 动态生成        |
| 数据分析 | GA + GSC + TikTok Pixel（跟踪转化）          |

---

## 📊 数据监测指标（上线后的目标）

| 指标        | 目标                                            |
| --------- | --------------------------------------------- |
| 跳出率       | < 50%                                         |
| 测试完成率     | > 75%                                         |
| 分享点击率     | > 25%                                         |
| SEO 目标词排名 | `brainrot test` / `what is my brainrot` 入前 10 |
| 社媒转化      | 50+ 日均测试截图在 X / TikTok 出现                     |

---

## 🧪 最小 MVP 路线（按顺序上线）

1. ✅ 简版测试题（静态题库 + 静态结果页面）
2. ✅ 结果页图文生成 + 图片下载功能
3. ✅ 社交分享链接 + 标准 SEO 配置
4. ✅ 后台数据统计 & A/B 测试优化
5. 🔁 二次测试引导 or 推荐其他工具

---

## 📌 小结一句话：

> **你要做的不是一份测试，而是一个疯得体面、可以截图、可以共鸣的身份认领仪式。**

---

## ✅ 需要我进一步帮你做哪些事？

* 帮你写 **脑腐测试题题库**（10 题 + 12 类型结果）
* 设计 **结果图模板**
* 生成 **JSON 测试配置 + UI 构架**
* 搭建页面代码骨架（React / Next.js / opennext 部署到 cloudFlare）


太好了，我们按你的需求来：

---

# ✅ 第一步：测试题题库 + 结果类型（完整版）

## 🎯 测试目标

让用户通过 8-10 道轻松搞笑的问题，得出属于自己的 brainrot 类型，提升共鸣与转发意愿。

---

## 🧠 测试题（共 10 题，单选 / 多选）

### 1. 你一天刷社交平台多长时间？

* A. 不停刷，直到手机发烫
* B. 三小时起步，尤其是夜里
* C. 一边吃饭一边刷，不刷不吃
* D. 我根本没退出过 app

### 2. 你最常刷到哪类内容？

* A. 动画剪辑 / 卡点视频
* B. 二创脑洞 / 带感剧情对口型
* C. 同人文推荐 / 番剧感想
* D. 崩溃长文 / 内心独白

### 3. 你脑海里循环最多的一句话是？

* A. “他怎么可以这么好看…”
* B. “如果我早一点遇见他…”
* C. “我真的疯了疯了疯了”
* D. “我现在就要嫁给他”

### 4. 你曾经为角色做过以下哪件事？

* A. 梦到他醒来痛哭
* B. 给他写信但寄不出去
* C. 看到他发糖尖叫到邻居敲门
* D. 买周边后站在门口反复盯着

### 5. 有人说你 brainrot 了，你的反应是？

* A. 我没有！我只是很喜欢他
* B. 笑着点头继续疯
* C. 是的谢谢你我以他为信仰
* D. 我连疯都不配，你知道吗？

### 6. 如果你脑子只能保留一件事，你会保留？

* A. 他对我笑的那一帧
* B. 那段剪辑的 BGM 配画面
* C. 我写给他的废文片段
* D. 他跟别人告白我哭了一宿的回忆

### 7. 你最怕别人说你什么？

* A. “你清醒一点”
* B. “他是虚拟的”
* C. “你又不是他谁”
* D. “他人设崩了”

### 8. 你和你的推之间的关系更像是：

* A. 他救了我
* B. 他毁了我
* C. 他不知道我
* D. 我没救了

### 9. 以下哪句话更像你发的？

* A. “啊啊啊啊啊啊啊！！！！”
* B. “他说那句台词的时候我死了”
* C. “脑子被他住满了，我疯了”
* D. “我可以跪下来给编剧磕头”

### 10. 你目前的状态是：

* A. 意识到自己疯了
* B. 接受了这种疯
* C. 喜欢自己疯的样子
* D. 病得不轻但活得真

---

## 💥 结果类型设定（可选其中 6-8 种）

| 类型名称                 | 简述          | 标语 / 结果描述片段        |
| -------------------- | ----------- | ------------------ |
| 🚨 破防型 Brainrot      | 一哭二喊三失控     | “你是全站最会大哭的疯子”      |
| 🔁 卡点循环型 Brainrot    | 死在一帧剪辑      | “那个眼神你看了一千遍还嫌少”    |
| 📖 同人脑补型 Brainrot    | 自编自导自演      | “你连他们吵架后的夜晚都写好了”   |
| 🧠 学术考据型 Brainrot    | PUA自己考证角色行为 | “你知道他用左手是因为儿时阴影”   |
| 💍 催眠婚礼型 Brainrot    | 幻想结婚N次      | “你在梦里和他已经吵完7次架”    |
| 🧎‍♀️ 奴役服从型 Brainrot | 自甘堕落        | “你连他说的废话都当福音抄下来”   |
| 🎭 病娇模仿型 Brainrot    | 模仿角色行为      | “你开始在日常说他的话了”      |
| 🐇 暴走二设型 Brainrot    | 发明全新设定      | “你是神不是粉，创造一切脑腐新宇宙” |

---

# ✅ 第二步：页面模板（测试引导页 + 题目页 + 结果页）

---

## 📄 页面结构

1. `/` 首页（引导页）
2. `/quiz` 测试过程页（逐题 or 全题展示）
3. `/result/:type` 结果页（静态路径生成，支持 SEO）

---

## ✅ 1. 引导页模板 (`/`)

```html
<section class="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-6">
  <h1 class="text-4xl font-bold mb-4">🧠 What's Your Brainrot Type?</h1>
  <p class="text-lg mb-6">Take the chaotic test and find out what kind of fan-crazed lunatic you are.</p>
  <a href="/quiz" class="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-xl shadow-lg">
    Start the Test →
  </a>
</section>
```

---

## ✅ 2. 题目页模板 (`/quiz`)

> 可采用单题翻页 or 一页展示全部题

```jsx
<div className="max-w-xl mx-auto mt-10 space-y-10 text-white">
  {questions.map((q, idx) => (
    <div key={idx}>
      <h2 className="text-xl font-semibold mb-2">{q.question}</h2>
      <ul className="space-y-2">
        {q.options.map((opt, i) => (
          <li key={i}>
            <button
              onClick={() => handleAnswer(idx, i)}
              className="w-full px-4 py-2 bg-gray-800 hover:bg-pink-600 rounded text-left"
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
    </div>
  ))}
  <button onClick={submitQuiz} className="mt-6 bg-pink-500 px-6 py-3 rounded-full">See Result</button>
</div>
```

---

## ✅ 3. 结果页模板 (`/result/:type`)

```jsx
<div className="flex flex-col items-center justify-center text-center p-6 text-white">
  <h1 className="text-3xl font-bold mb-4">💥 You are the <span className="text-pink-400">{result.type}</span> Brainrot</h1>
  <img src={result.image} alt="brainrot type" className="w-64 h-64 mb-6 rounded-xl shadow-lg" />
  <p className="text-lg max-w-md mb-4">{result.description}</p>
  <div className="flex gap-4 mt-6">
    <button className="bg-white text-black px-4 py-2 rounded" onClick={downloadImage}>📸 Save Result</button>
    <button className="bg-pink-500 px-4 py-2 rounded text-white" onClick={share}>🔗 Share</button>
  </div>
</div>
```

---

### 🎨 配色建议：

* 背景：黑灰渐变 or 幽暗背景图
* 按钮：粉、紫、蓝 neon 色调
* 字体：使用带中二/潮流感的衬线或手写风字体（Google Fonts 推荐：Kanit、Shrikhand、Anton）

---

需要我接下来帮你：

* 将这些题目和结果写成 JSON 文件供你接入？
* 或者提供完整可部署的 React 模板 / Next.js 项目骨架？

可以选你目前用的技术栈我直接给你生成。

