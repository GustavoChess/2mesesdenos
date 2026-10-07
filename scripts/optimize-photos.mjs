import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';
const input = path.resolve('public/fotos');
const output = path.join(input, 'otimizadas');
await mkdir(output, { recursive: true });
const files = (await readdir(input)).filter((name) =>
  /\.(jpe?g|png|webp|avif)$/i.test(name),
);
for (const file of files) {
  const target = path.join(output, path.parse(file).name + '.webp');
  await sharp(path.join(input, file))
    .rotate()
    .resize({
      width: 1600,
      height: 1600,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({ quality: 82 })
    .toFile(target);
  console.log('/fotos/otimizadas/' + path.basename(target));
}
console.log(
  files.length + ' fotografia(s) otimizada(s). Os originais foram preservados.',
);
