/**
 * Vercel Build: Kein next build — nur prüfen, dass dist/ aus Git da ist.
 * (Siehe vercel.json: framework null + outputDirectory dist)
 */
import fs from "node:fs";
import path from "node:path";

const index = path.join(process.cwd(), "dist", "index.html");
if (!fs.existsSync(index)) {
  console.error(
    "[vercel-build] FEHLER: dist/index.html fehlt. Bitte dist/ committen.",
  );
  process.exit(1);
}
const st = fs.statSync(index);
console.log(
  "[vercel-build] OK — deploye statisches dist/ (index.html mtime %s)",
  st.mtime.toISOString(),
);
process.exit(0);
