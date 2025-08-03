/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://brainrot-test.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://brainrot-test.com/server-sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // 为每个路径生成多语言版本
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [
        {
          href: `${config.siteUrl}/en${path}`,
          hreflang: 'en',
        },
        {
          href: `${config.siteUrl}/zh${path}`,
          hreflang: 'zh',
        },
      ],
    }
  },
}