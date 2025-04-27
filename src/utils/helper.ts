// Try to get data from the cache, but fall back to fetching it live.
async function getData() {
	const cacheName = 'v1';
	const url = 'https://cdn.kinestex.com/uploads%2Fcompressed%2F04Sgr5lfVgjbt8NWELvm.mp4';
	let cachedData = await getCachedData(cacheName, url);

	if (cachedData) {
		console.log('Retrieved cached data');
		return cachedData;
	}

	console.log('Fetching fresh data');

	const cacheStorage = await caches.open(cacheName);
	await cacheStorage.add(url);
	cachedData = await getCachedData(cacheName, url);
	await deleteOldCaches(cacheName);

	return cachedData;
}

// Get data from the cache.
async function getCachedData(cacheName: string, url: string) {
	const cacheStorage = await caches.open(cacheName);
	const cachedResponse = await cacheStorage.match(url);

	if (!cachedResponse || !cachedResponse.ok) {
		return false;
	}

	return await cachedResponse.json();
}

// Delete any old caches to respect user's disk space.
async function deleteOldCaches(currentCache: string) {
	const keys = await caches.keys();

	for (const key of keys) {
		const isOurCache = key.startsWith('v1');
		if (currentCache === key || !isOurCache) {
			continue;
		}
		caches.delete(key);
	}
}

export async function init() {
	try {
		const data = await getData();
		console.log({ data });
	} catch (error) {
		console.error({ error });
	}
}
