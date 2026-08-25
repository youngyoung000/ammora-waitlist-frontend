import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const text = async (file) => readFile(path.join(root, file), "utf8");
const dataUrl = async (file, mime) => {
  const buffer = await readFile(path.join(root, file));
  return `data:${mime};base64,${buffer.toString("base64")}`;
};

const [htmlSource, tokensSource, stylesSource, interactionSource] = await Promise.all([
  text("index.html"),
  text("design-system.css"),
  text("styles.css"),
  text("background-interaction.js")
]);

const [genos, manrope, background, wordmark] = await Promise.all([
  dataUrl("assets/fonts/genos-latin.woff2", "font/woff2"),
  dataUrl("assets/fonts/manrope-latin.woff2", "font/woff2"),
  dataUrl("assets/background-aurora-dots.png", "image/png"),
  dataUrl("assets/logos/ammora-wordmark.png", "image/png")
]);

const tokens = tokensSource
  .replaceAll('url("./assets/fonts/genos-latin.woff2")', `url("${genos}")`)
  .replaceAll('url("./assets/fonts/manrope-latin.woff2")', `url("${manrope}")`);
const styles = stylesSource.replaceAll(
  'url("./assets/background-aurora-dots.png")',
  `url("${background}")`
);

const output = htmlSource
  .replace('    <link rel="stylesheet" href="./design-system.css" />', `    <style>\n${tokens}\n</style>`)
  .replace('    <link rel="stylesheet" href="./styles.css" />', `    <style>\n${styles}\n</style>`)
  .replace('./assets/logos/ammora-wordmark.png', wordmark)
  .replace('    <script src="./background-interaction.js"></script>', `    <script>\n${interactionSource}\n</script>`);

const target = path.join(root, "ammora-waitlist-preview.html");
await writeFile(target, output);
console.log(`Created ${target}`);
