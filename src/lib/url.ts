const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an internal path with the configured base. */
export function href(path: string): string {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

/** Current path without the base and without a trailing slash ("/" for home). */
export function pagePath(pathname: string): string {
  let p = pathname;
  if (base && p.startsWith(base)) p = p.slice(base.length);
  p = p.replace(/\/index\.html$/, '').replace(/\/$/, '');
  return p === '' ? '/' : p;
}

const dateFmt = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
export const formatDate = (d: Date) => dateFmt.format(d);
