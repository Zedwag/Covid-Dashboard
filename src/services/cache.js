export const setCache = (cacheName, cacheValue) => {
  sessionStorage.setItem(cacheName, JSON.stringify(cacheValue));
};

export const getCache = (cacheName) => {
  const cache = sessionStorage.getItem(cacheName);
  return JSON.parse(cache);
};
