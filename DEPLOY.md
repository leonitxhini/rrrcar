# Vercel & `dist/`

## Wichtig

- In **`vercel.json`** ist `outputDirectory: "dist"` und der **Build wird absichtlich übersprungen** (nur `echo`).
- **Was live geht**, ist **genau der Ordner `dist/` aus dem Git-Commit** – nicht das Ergebnis von `next build`.
- Änderungen nur in **`app/`** oder **`src/`** ohne aktualisierte Dateien unter **`dist/`** → **auf der Website sichtbar keine Änderung**.

## Was du tun musst

1. Design/Copy/HTML: **`dist/index.html`** (und ggf. **`dist/fleet/index.html`**) anpassen und **mit committen**.
2. Push → Vercel lädt **`dist/`** neu hoch.
3. Nach dem Deploy: Seite **hart neu laden** (Cache), oder privates Fenster testen.

## Optional (alles aus Next generieren)

Dann `npm run build` (erzeugt `out/` → Skript kopiert nach `dist/`). Dafür müsste die **gesamte** Seite in Next liegen – aktuell ist die große Landing Page vor allem **statisch in `dist/`**.
