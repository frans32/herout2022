const fs = require("fs");
const path = require("path");

async function generateSitemap() {
  const files = fs.readdirSync(path.join("content/artikels"));
  const trimSlug = (slug) => slug.slice(0, slug.length - 3);

  let static = ["", "/redaksie"];
  let articles = files.map((i) => "/artikel/" + trimSlug(i));
  let pages = static.concat(articles);

  let urls = pages.map((i) => "https://herout.co.za" + i);

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (i) => `<url>
    <loc>${i}</loc>
    <changefreq>weekly</changefreq>
  </url>`
      )
      .join("\n")}
  </urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
