const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

// Define the base URL of your website
const BASE_URL = "https://linguico.com";

// List of routes to include in the sitemap
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "daily", priority: 0.8 },
  { url: "/contact", changefreq: "daily", priority: 0.8 },
  // Add more pages here
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream("./public/sitemap.xml");

  sitemap.pipe(writeStream);

  links.forEach((link) => sitemap.write(link));

  sitemap.end();
  await streamToPromise(sitemap);

  console.log("Sitemap generated successfully!");
}

generateSitemap().catch(console.error);
