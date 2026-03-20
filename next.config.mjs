/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Statischer Export → Ordner `out/`; danach kopieren wir nach `dist/` für Vercel (siehe npm run build).
  output: "export",
};

export default nextConfig;

