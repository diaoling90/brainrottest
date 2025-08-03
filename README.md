# 🧠 Brainrot Test Website

一个基于 Next.js 14 构建的病毒式脑腐人格测试网站，支持多语言和高性能SEO优化。

## 🎯 项目特色

- **🌍 多语言支持** - 完美支持中文和英文切换
- **📱 响应式设计** - 完美适配手机、平板和桌面端
- **⚡ 高性能优化** - 图片懒加载、代码分割、CDN优化
- **🔍 SEO友好** - 完整的SEO元数据、sitemap、结构化数据
- **🎨 现代UI设计** - 赛博朋克风格、渐变动画、暗色主题
- **📊 数据分析** - Google Analytics 4 集成
- **🚀 PWA支持** - 支持离线访问和移动端安装

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **国际化**: next-intl
- **类型安全**: TypeScript
- **图标**: Lucide React
- **图片处理**: html2canvas (结果分享)
- **性能监控**: 内置 Web Vitals

## 📁 项目结构

```
brainrottest/
├── src/
│   ├── app/                    # App Router 页面
│   │   ├── [locale]/          # 多语言路由
│   │   │   ├── page.tsx       # 首页
│   │   │   ├── quiz/          # 测试页面
│   │   │   ├── result/[type]/ # 结果页面
│   │   │   └── about/         # 关于页面
│   │   ├── api/og/            # Open Graph 图片生成
│   │   ├── globals.css        # 全局样式
│   │   ├── layout.tsx         # 根布局
│   │   ├── sitemap.ts         # 自动生成 sitemap
│   │   └── manifest.ts        # PWA manifest
│   ├── components/            # React 组件
│   │   ├── Navigation.tsx     # 导航栏
│   │   ├── QuizClient.tsx     # 测试组件
│   │   ├── ResultClient.tsx   # 结果组件
│   │   ├── Loading.tsx        # 加载组件
│   │   └── LazyImage.tsx      # 懒加载图片
│   ├── data/
│   │   └── quiz.json          # 测试题库和结果数据
│   ├── hooks/
│   │   └── useLocalStorage.ts # 本地存储 hook
│   ├── types/
│   │   └── quiz.ts            # TypeScript 类型定义
│   ├── utils/
│   │   ├── quiz.ts            # 测试逻辑
│   │   └── analytics.ts       # 数据分析
│   └── i18n.ts                # 国际化配置
├── messages/                  # 多语言文件
│   ├── en.json               # 英文翻译
│   └── zh.json               # 中文翻译
├── public/                   # 静态资源
│   ├── robots.txt            # SEO robots
│   └── icon-*.png            # PWA 图标
└── middleware.ts             # 多语言中间件
```

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发环境
```bash
npm run dev
```
访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本
```bash
npm run build
npm start
```

### 生成 sitemap
```bash
npm run postbuild
```

## 🎮 测试功能

### 测试流程
1. **首页引导** - 吸引用户开始测试
2. **问卷答题** - 10道精心设计的问题
3. **结果计算** - 基于权重的智能算法
4. **结果展示** - 个性化结果卡片
5. **社交分享** - 一键分享到各大平台

### 8种脑腐类型
- 🚨 **破防型** - 情绪化的反应强烈者
- 🔁 **循环型** - 沉迷重复内容者  
- 📖 **同人型** - 创作导向的想象者
- 🧠 **学术型** - 分析型的深度用户
- 💍 **婚礼型** - 浪漫幻想型沉迷者
- 🧎‍♀️ **服从型** - 虔诚崇拜型粉丝
- 🎭 **病娇型** - 模仿行为型沉迷者
- 🐇 **混乱型** - 创新内容创造者

## 🌍 SEO 优化

### 关键词策略
- **主要关键词**: brainrot test, what is my brainrot
- **长尾关键词**: brainrot personality test, internet obsession type
- **结果页面**: 针对每种类型的专门优化

### 技术SEO
- ✅ 结构化数据 (JSON-LD)
- ✅ Open Graph 元数据
- ✅ Twitter Cards
- ✅ 自动生成 sitemap.xml
- ✅ robots.txt 优化
- ✅ 多语言 hreflang 标签
- ✅ 语义化 HTML 结构
- ✅ 图片 alt 属性
- ✅ 页面加载速度优化

## 📱 响应式设计

### 断点设计
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **高分辨率**: 2x DPI 支持

### 移动端优化
- 触摸友好的按钮尺寸 (44px+)
- 防止缩放的输入框
- 优化的滚动性能
- 移动端专用交互动画

## ⚡ 性能优化

### 自动优化
- **图片优化**: WebP/AVIF 格式
- **代码分割**: 自动路由级别分割
- **懒加载**: 图片和组件懒加载
- **缓存策略**: 静态资源长期缓存
- **压缩**: Gzip/Brotli 压缩

### Web Vitals 目标
- **LCP**: < 2.5s (最大内容绘制)
- **FID**: < 100ms (首次输入延迟)  
- **CLS**: < 0.1 (累积布局偏移)

## 🔧 环境变量

创建 `.env.local` 文件：

```env
# Google Analytics (可选)
NEXT_PUBLIC_GA_ID=your_ga_tracking_id

# 网站URL (生产环境)
SITE_URL=https://your-domain.com
```

## 📊 数据分析

### 跟踪事件
- 测试开始/完成
- 结果分享行为
- 重新测试行为
- 页面访问统计

### 关键指标
- 测试完成率 > 75%
- 分享点击率 > 25%
- 跳出率 < 50%
- 页面加载时间 < 3s

## 🚀 部署

### Vercel (推荐)
1. 连接 GitHub 仓库
2. 自动检测 Next.js 配置
3. 设置环境变量
4. 一键部署

### Cloudflare Pages
1. 连接 Git 仓库
2. 构建命令: `npm run build`
3. 输出目录: `.next`
4. 配置自定义域名

### 其他平台
- Netlify
- AWS Amplify
- 自建服务器

## 🛡️ 安全性

- XSS 防护头信息
- 内容类型检测
- 框架防护 (X-Frame-Options)
- HTTPS 强制重定向
- CSP (内容安全策略)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来完善这个项目！

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🎉 致谢

感谢所有为这个项目提供灵感和反馈的用户和开发者！

---

**🧠 Come discover your brainrot type! 发现你的脑腐类型！**