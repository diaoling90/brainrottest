# OpenNext.js + Cloudflare 部署指南

## 快速部署

### 1. 创建 KV 命名空间

首先创建必要的 KV 命名空间：

```bash
# 安装依赖
npm install

# 创建 KV 命名空间（用于缓存）
npx wrangler kv:namespace create "NEXT_INC_CACHE_KV"
npx wrangler kv:namespace create "NEXT_INC_CACHE_KV" --preview
```

### 2. 更新 wrangler.jsonc

将生成的 KV 命名空间 ID 更新到 `wrangler.jsonc` 文件中：

```jsonc
{
  "kv_namespaces": [
    {
      "binding": "NEXT_INC_CACHE_KV",
      "id": "your-actual-kv-namespace-id"
    }
  ]
}
```

### 3. 构建和部署

```bash
# 构建 Next.js 应用
npm run build

# 构建 OpenNext.js for Cloudflare
npm run pages:build

# 部署到 Cloudflare Pages
npm run pages:deploy
```

### 4. 通过 GitHub 部署（推荐）

1. 将代码推送到 GitHub 仓库
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. 进入 Pages 部分，点击 "Create a project"
4. 连接你的 GitHub 仓库
5. 配置构建设置：
   - **Build command**: `npm run build && npm run pages:build`
   - **Build output directory**: `.open-next/assets`
   - **Root directory**: `/` (默认)
   - **Node.js version**: `20`

### 2. 环境变量设置

在 Cloudflare Pages 的设置中添加以下环境变量：

```bash
NODE_ENV=production
NEXT_PUBLIC_GA_ID=your_google_analytics_id
SITE_URL=https://your-domain.pages.dev
```

### 3. 自定义域名

1. 在 Cloudflare Pages 项目设置中点击 "Custom domains"
2. 添加你的域名
3. 确保 DNS 记录指向 Cloudflare

## 使用 Wrangler CLI 部署

### 安装 Wrangler
```bash
npm install -g wrangler
```

### 登录 Cloudflare
```bash
wrangler login
```

### 创建 KV 命名空间
```bash
wrangler kv:namespace create "CACHE"
wrangler kv:namespace create "CACHE" --preview
```

### 更新 wrangler.toml
将生成的 KV 命名空间 ID 更新到 `wrangler.toml` 文件中。

### 部署
```bash
npm run build
npm run deploy
```

## 性能优化

### 1. 缓存配置
- 静态资源：1年缓存
- API 路由：1小时缓存
- HTML 页面：根据内容动态缓存

### 2. CDN 优化
- 自动启用 Cloudflare CDN
- 全球边缘节点加速
- 自动图片优化

### 3. 安全性
- 自动 DDoS 防护
- WAF 规则
- SSL/TLS 加密

## 监控和分析

### 1. Cloudflare Analytics
- 访问统计
- 性能指标
- 错误率监控

### 2. Google Analytics
- 用户行为分析
- 转化率追踪
- 测试完成率统计

## 故障排除

### 构建失败
1. 检查 Node.js 版本是否为 18+
2. 确保所有依赖都已安装
3. 查看构建日志中的错误信息

### 页面无法访问
1. 检查路由配置
2. 确认环境变量设置正确
3. 检查 Functions 是否正常运行

### 多语言问题
1. 确保中间件正确配置
2. 检查语言路由是否生效
3. 验证翻译文件是否完整

## 成本估算

Cloudflare Pages 提供：
- **免费额度**: 每月 100,000 次请求
- **付费计划**: $20/月，包含 10M 次请求
- **带宽**: 免费且无限制
- **存储**: 包含在计划内

对于中小型网站，免费额度通常足够使用。