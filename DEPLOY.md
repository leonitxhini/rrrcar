# Vercel & statisches `dist/`

## Wichtig

- **`vercel.json`** setzt **`"framework": null`** → Vercel soll **kein** Next.js-Build erzwingen (sonst wird `dist/` oft ignoriert).
- **`outputDirectory`** ist **`dist`** → es wird **genau dieser Ordner** aus dem Git-Commit ausgeliefert.
- **`buildCommand`** = `node scripts/vercel-build.mjs` → prüft nur, dass `dist/index.html` existiert.

## Wenn sich auf der Website nichts ändert

1. **Vercel Dashboard** → Projekt → **Settings** → **General**:
   - **Framework Preset** auf **Other** stellen (falls noch „Next.js“ steht).
   - **Build & Output**: „Override“ für Build Command / Output Directory **aus** oder **gleich** wie in `vercel.json`.
2. **Deployments** → **⋯** beim letzten Deploy → **Redeploy** → **Clear cache and redeploy**.
3. **Änderungen nur in `app/` / `src/`** ohne Anpassung von **`dist/`** → Live-Seite (statisch) **ändert sich nicht**.

## Lokaler Check

```bash
node scripts/vercel-build.mjs
```

Sollte `OK` ausgeben, wenn `dist/index.html` existiert.
