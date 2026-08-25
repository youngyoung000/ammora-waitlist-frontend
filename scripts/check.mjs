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
  "assets/fonts/nunito-sans-latin.woff2",
  "assets/fonts/manrope-latin.woff2",
  "assets/logos/ammora-wordmark.png"
];

await Promise.all(requiredFiles.map((file) => access(path.join(root, file))));

const [html, designSystem, styles] = await Promise.all([
  readFile(path.join(root, "index.html"), "utf8"),
  readFile(path.join(root, "design-system.css"), "utf8"),
  readFile(path.join(root, "styles.css"), "utf8")
]);

for (const reference of ["./design-system.css", "./styles.css", "./background-interaction.js"]) {
  if (!html.includes(reference)) throw new Error(`Missing HTML reference: ${reference}`);
}

for (const copy of ["Token launch", "One contract stack."]) {
  if (!html.includes(copy)) throw new Error(`Missing Figma hero copy: ${copy}`);
}

for (const declaration of [
  '--am-font-display: "Nunito Sans"',
  "--am-type-display: 4.5rem",
  "--am-type-title: 1.75rem",
  "--am-gradient-brand: linear-gradient(\n    90deg"
]) {
  if (!designSystem.includes(declaration)) throw new Error(`Missing design token: ${declaration}`);
}

for (const declaration of ["font-weight: 800", "line-height: 1.1", "font-weight: 700"]) {
  if (!styles.includes(declaration)) throw new Error(`Missing typography rule: ${declaration}`);
}

console.log(`Ammora frontend check passed (${requiredFiles.length} required files).`);
