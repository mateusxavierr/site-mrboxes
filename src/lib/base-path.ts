/**
 * Prefixa caminhos de `public/` quando o site é publicado em subcaminho
 * (ex.: GitHub Pages em `username.github.io/repo/` via `BASE_PATH=/repo` na build).
 */
export function publicAssetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
