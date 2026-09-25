const fs = require("fs");
const path = require("path");

const root = path.join(process.cwd(), "src", "assets", "hero");
const parts = fs
  .readdirSync(root)
  .filter((name) => /^part-\d+\.b64$/.test(name))
  .sort()
  .map((name) => fs.readFileSync(path.join(root, name), "utf8").trim())
  .join("");

if (!parts) {
  throw new Error("Hero image source chunks are missing.");
}

const output = path.join(process.cwd(), "public", "home", "hero-businesswoman.webp");
fs.mkdirSync(path.dirname(output), { recursive: true });
const image = Buffer.from(parts, "base64");
fs.writeFileSync(output, image);
console.log(`Restored hero image: ${image.length} bytes`);
