import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const requiredFiles = [
  "index.html",
  "design-system.css",
  "styles.css",
  "background-interaction.js",
  "assets/background-aurora-dots.png",
  "assets/fonts/genos-latin.woff2",
  "assets/fonts/manrope-latin.woff2",
  "assets/logos/ammora-wordmark.png"
];

await Promise.all(requiredFiles.map((file) => access(path.join(root, file))));

const html = await readFile(path.join(root, "index.html"), "utf8");
for (const reference of ["./design-system.css", "./styles.css", "./background-interaction.js"]) {
  if (!html.includes(reference)) throw new Error(`Missing HTML reference: ${reference}`);
}

console.log(`Ammora frontend check passed (${requiredFiles.length} required files).`);
