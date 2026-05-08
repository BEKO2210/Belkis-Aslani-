/**
 * Resolve a public asset path against Vite's BASE_URL.
 *
 * Why this exists:
 * Vite rewrites asset URLs in HTML and module imports automatically, but
 * NOT inside JSX string literals like `<img src="/images/foo.jpg" />`.
 * On GitHub Pages where the site is served under `/Belkis-Aslani-/`,
 * those literal paths would 404. This helper prepends BASE_URL.
 *
 * Usage:  src={asset("/images/portrait.jpg")}
 */
export function asset(path: string): string {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  const cleaned = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleaned}`;
}
