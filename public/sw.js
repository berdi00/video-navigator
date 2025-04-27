self.addEventListener('install', event => {
	event.waitUntil(caches.open('v1').then(cache => cache.addAll(['/index.html']))); // Try caching a basic asset
});

self.addEventListener('fetch', event => {
	event.respondWith(caches.match(event.request) || fetch(event.request));
});
