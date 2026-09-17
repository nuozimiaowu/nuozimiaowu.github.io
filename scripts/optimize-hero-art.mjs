import sharp from 'sharp';
for (const name of ['hero-closeup', 'hero-workday']) {
  await sharp(`design/hero/${name}.jpg`)
    .resize({ width: 1280, withoutEnlargement: true })
    .webp({ quality: 88 })
    .toFile(`public/images/yanineko/${name}.webp`);
}
