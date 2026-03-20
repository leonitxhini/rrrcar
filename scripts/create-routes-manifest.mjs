import fs from "node:fs";
import path from "node:path";

const outDir = "out";
const target = path.join(outDir, "routes-manifest.json");

if (!fs.existsSync(outDir)) {
  process.exit(0);
}

if (!fs.existsSync(target)) {
  // Minimal manifest so Vercel's static export pipeline can proceed.
  // We only render a single root page in this project.
  const manifest = {
    version: 1,
    routes: {
      "/": { html: "index.html" },
    },
  };
  fs.writeFileSync(target, JSON.stringify(manifest), "utf-8");
}

