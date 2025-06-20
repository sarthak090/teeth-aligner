export const siteConfig = {
  domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  // Add any other site configuration here
}

export const routes = [
  {
    path: '/',
    priority: 1.0,
    changefreq: 'daily',
  },
  {
    path: '/about-us',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/services',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/blog',
    priority: 0.7,
    changefreq: 'weekly',
  },
  {
    path: '/contact',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/cart',
    priority: 0.6,
    changefreq: 'daily',
  },
  {
    path: '/product',
    priority: 0.7,
    changefreq: 'daily',
  },
  {
    path: '/team',
    priority: 0.6,
    changefreq: 'monthly',
  },
  {
    path: '/pricing',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/faq',
    priority: 0.6,
    changefreq: 'monthly',
  },
  {
    path: '/terms',
    priority: 0.4,
    changefreq: 'yearly',
  },
  {
    path: '/policy',
    priority: 0.4,
    changefreq: 'yearly',
  },
] 