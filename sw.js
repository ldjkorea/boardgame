const CACHE_NAME = 'boardgye-v1';
const ASSETS = [
  '/boardgame/',
  '/boardgame/index.html',
  '/boardgame/index.css',
  '/boardgame/app.js',
  '/boardgame/manifest.json',
  '/boardgame/icon-192.png',
  '/boardgame/icon-512.png'
];

// 서비스 워커 설치 및 리소스 캐싱
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// 기존 캐시 청소 및 활성화
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 네트워크 리퀘스트 인터셉트 및 캐시 응답
self.addEventListener('fetch', (e) => {
  // 웹 앱 API 요청 등 구글 스크립트 도메인은 캐시에서 제외
  if (e.request.url.includes('script.google.com')) {
    return;
  }
  
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(e.request);
    })
  );
});
