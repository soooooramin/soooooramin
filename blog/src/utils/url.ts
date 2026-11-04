// astro.config.mjs の base (例: "/blog") を付けたパスを返す
export const withBase = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
