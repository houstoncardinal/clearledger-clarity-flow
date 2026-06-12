#!/usr/bin/env node
/**
 * Post-build prerender for blog posts.
 *
 * Generates dist/blog/<slug>/index.html for every blog post with route-specific
 * <title>, meta description, canonical, OG/Twitter tags, and Article JSON-LD
 * so that social crawlers (which don't execute JS) get the right preview.
 */
import { build } from 'esbuild';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');
const blogDataSrc = path.join(root, 'src/data/blogPosts.ts');
const SITE_URL = 'https://www.yourclearledger.com';

async function loadBlogPosts() {
  const tmpFile = path.join(distDir, '.blog-posts.mjs');
  await build({
    entryPoints: [blogDataSrc],
    bundle: true,
    format: 'esm',
    platform: 'node',
    outfile: tmpFile,
    logLevel: 'silent',
    external: [],
  });
  const mod = await import(pathToFileURL(tmpFile).href + `?t=${Date.now()}`);
  await fs.unlink(tmpFile).catch(() => {});
  return mod.blogPosts;
}

function escapeHtml(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildMetaBlock(post) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const title = `${post.title} | ClearLedger Solutions Blog`;
  const description = post.excerpt;
  const image = `${SITE_URL}${post.image}`;
  const keywords = (post.tags || []).join(', ');
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description,
    image: [image],
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'JJ Eldredge',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ClearLedger Solutions',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  return `
    <title>${escapeHtml(title)}</title>
    <meta name="title" content="${escapeHtml(title)}" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="keywords" content="${escapeHtml(keywords)}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeHtml(post.title)}" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${url}" />
    <meta property="twitter:title" content="${escapeHtml(title)}" />
    <meta property="twitter:description" content="${escapeHtml(description)}" />
    <meta property="twitter:image" content="${image}" />
    <meta property="article:published_time" content="${post.datePublished}" />
    <meta property="article:modified_time" content="${post.dateModified || post.datePublished}" />
    <meta property="article:author" content="${escapeHtml(post.author?.name || 'JJ Eldredge')}" />
    <script type="application/ld+json">${JSON.stringify(articleSchema)}</script>
  `.trim();
}

function rewriteHtml(html, post) {
  let out = html;
  // Remove existing title, description, canonical, og:*, twitter:*, article:* tags so ours win
  out = out.replace(/<title>[\s\S]*?<\/title>/i, '');
  out = out.replace(/<meta\s+name=["'](?:title|description|keywords)["'][^>]*>\s*/gi, '');
  out = out.replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, '');
  out = out.replace(/<meta\s+property=["'](?:og:[^"']+|twitter:[^"']+|article:[^"']+)["'][^>]*>\s*/gi, '');
  // Inject our meta block right before </head>
  out = out.replace(/<\/head>/i, `${buildMetaBlock(post)}\n  </head>`);
  return out;
}

async function main() {
  let indexHtml;
  try {
    indexHtml = await fs.readFile(indexHtmlPath, 'utf8');
  } catch {
    console.warn('[prerender-blogs] dist/index.html not found, skipping.');
    return;
  }
  const posts = await loadBlogPosts();
  let count = 0;
  for (const post of posts) {
    if (!post?.slug) continue;
    const outDir = path.join(distDir, 'blog', post.slug);
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(path.join(outDir, 'index.html'), rewriteHtml(indexHtml, post), 'utf8');
    count++;
  }
  console.log(`[prerender-blogs] Generated ${count} blog HTML files.`);
}

main().catch((err) => {
  console.error('[prerender-blogs] failed:', err);
  process.exit(0); // don't fail the build
});
