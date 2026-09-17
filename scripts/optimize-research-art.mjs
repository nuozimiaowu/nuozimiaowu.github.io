import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

await mkdir('public/images/research', { recursive: true });
for (const topic of ['aigc', 'agentic', 'navigation']) {
  const source = `design/research/research-${topic}.png`;
  const metadata = await sharp(source).metadata();
  await Promise.all([
    sharp(source).resize({ width: 1280, withoutEnlargement: true }).webp({ quality: 88, alphaQuality: 100 }).toFile(`public/images/research/research-${topic}.webp`),
    sharp(source).resize({ width: 640, withoutEnlargement: true }).webp({ quality: 85, alphaQuality: 100 }).toFile(`public/images/research/research-${topic}-small.webp`),
  ]);
  console.log(JSON.stringify({ topic, width: metadata.width, height: metadata.height, hasAlpha: metadata.hasAlpha }));
}
