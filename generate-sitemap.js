const fs = require('fs');
const path = require('path');

const baseUrl = 'https://xingpan-zhou.github.io/xp-website';
const pages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about.html', priority: '0.8', changefreq: 'monthly' },
    { url: '/projects.html', priority: '0.7', changefreq: 'weekly' },
    { url: '/blog.html', priority: '0.7', changefreq: 'weekly' },
];

const today = new Date().toISOString().split('T')[0];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

pages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>\n`;
});

sitemap += '</urlset>';

fs.writeFileSync('sitemap.xml', sitemap);
console.log('Sitemap generated!');