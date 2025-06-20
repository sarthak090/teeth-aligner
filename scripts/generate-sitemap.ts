import { writeFileSync } from 'fs'
import { siteConfig, routes } from '../config/sitemap.config'

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteConfig.domain}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  writeFileSync('public/sitemap.xml', sitemap)
  console.log('✅ Sitemap generated successfully!')
}

generateSitemap() 