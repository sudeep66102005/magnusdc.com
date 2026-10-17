/** Intentionally discard query strings and fragments, including campaign/user tokens. */
export function safePagePath(href: string): string {
  try { return new URL(href).pathname; } catch { return '/'; }
}
