import fs from "node:fs";
import path from "node:path";

const outDir = "out";
const distDir = "dist";

if (!fs.existsSync(outDir)) {
  console.error(
    "[prepare-vercel-dist] Fehlt out/ — zuerst next build mit output: \"export\" ausführen.",
  );
  process.exit(1);
}

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}

fs.cpSync(outDir, distDir, { recursive: true });

// Vercel erwartet bei Output Directory "dist" diese Datei (Next Static Export Pipeline).
const manifest = {
  version: 1,
  routes: {
    "/": { html: "index.html" },
  },
};

fs.writeFileSync(
  path.join(distDir, "routes-manifest.json"),
  JSON.stringify(manifest),
  "utf-8",
);

console.log("[prepare-vercel-dist] dist/ bereit inkl. routes-manifest.json");
