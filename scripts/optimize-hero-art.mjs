import sharp from 'sharp';
const images = [
  ['yanineko-everyday-smile-ep03', 'hero-everyday-smile'],
  ['yanineko-outdoor-cheer-ep03', 'hero-outdoor-cheer'],
  ['yani-friends-kyoto-ep11-02', 'hero-friends-kyoto'],
];
for (const [source, name] of images) {
  await sharp(`design/hero/calm/${source}.jpg`)
    .resize({ width: 1280, withoutEnlargement: true })
    .webp({ quality: 88 })
    .toFile(`public/images/yanineko/${name}.webp`);
}
