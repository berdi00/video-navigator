const CACHE_NAME = 'video-cache-v1';
const allData = [
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F01yl8biK4k4RHNHoXh3u.mp4',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F04Sgr5lfVgjbt8NWELvm.mp4',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F0N1pEU2aGBsGKRsvarkC.mp4',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F0e7H0bqwWIiDYZtcsfpA.mp4',
	'https://cdn.kinestex.com/uploads%2F23740b73-717b-45c9-a96b-f37d53e9039d1CwGuURTn_2O5DZmhneAv?alt=media&token=bd3a131a-2fd2-478b-9c00-1463cf63f800',
	'https://cdn.kinestex.com/uploads%2F2f05fe9c-40ae-416d-aadf-9e853f585fc3_1Nj3pMgcJ9EN253YbALt?alt=media&token=fc49a16e-1c38-4487-9754-641d50dd3181',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F1OLOVmeUBuFDtbO9Xor3.mp4',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F1Wx49phlXelDAkcDNWr2.mp4',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F1dyf8ElAcWO4M1064oq6.mp4',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F1jinSgdXarU79fgz2bcT.mp4',
	'https://cdn.kinestex.com/uploads%2F6a5a8477-382e-4b5b-bd46-205d06b1ace81tnhV2ewG6_maI28NcGi9?alt=media&token=d6dacaa0-3575-4426-a298-081ebed99172',
	'https://cdn.kinestex.com/uploads%2Fe8f0941f-6782-475c-bd8a-1347f57772431xoBdASsTiZE_xa1RfPEL?alt=media&token=1fe58755-df58-44ee-a4d8-379c6a17fd25',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F21G54T2ZHdxwPnCO6QaA.mp4',
	'https://cdn.kinestex.com/uploads%2Fe2c954a9-d822-4268-9f05-bbfb164c6c3f2ARRVQoTElid_mMc1xlYq?alt=media&token=0faf3c0a-17ac-4818-84be-db5679963ecd',
	'https://cdn.kinestex.com/uploads%2F79cea338-86b2-426c-8475-137c04ac14e22DeAA7hnrt5_O106uYXbR?alt=media&token=aee825cb-9e25-42f3-b480-56299ce658a4',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F2KwG3jJyT4w4upbaTTKd.mp4',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F2L3vtZBro6GYOFXcZYwQ.mp4',
	'https://cdn.kinestex.com/uploads%2Fd1dd9107-a28b-4d39-8f3d-91fc22e21cdc2UkUhSQ397t_EgxcS8vDs?alt=media&token=c68e9c1c-1f5a-4e03-9747-0d2298d5f88f',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F2ZiUIu0mhDOO7j2PW3Kv.mp4',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F2m3roEi3ZJtmLvcOzuhk.mp4',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F2uUrl41XRObMY41jbFbD.mp4',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F32HEyfpjp9iaFDHnl3B3.mp4',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F33qTiXsUeqJWkmC2PL5j.mp4',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F3I5PC91NpcK8wZrW6EJl.mp4',
	'https://cdn.kinestex.com/uploads%2Fca0c3d86-98bc-4928-99ca-ba5ab693db9e3MbEsXOG7_ejm4XXu6E05?alt=media&token=bfc99c4a-b719-44de-be4f-13b4c43728dc',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F3ThVDpawlEXVy1l0261x.mp4',
	'https://cdn.kinestex.com/uploads%2F3ff66aec-f897-4ee3-a455-15c9eb3d6d3e3iIR4AEHuPEo_rCEfvFho?alt=media&token=2cfaf9c1-a552-401c-81c2-09fcd27b78ce',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F41hYkEQhDru65VpbLoe5.mp4',
	'https://cdn.kinestex.com/uploads%2F82eaa4ed-3f98-4a0b-a380-f3318cb3f66c_4Jfdp1fNHel1ioSaLhvi?alt=media&token=ff440fb3-c037-4857-90c2-34c101f69e4e',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F4QY67vcg7NwbyHPGqlKF.mp4',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F4RqtHKoHA8nzegZQQjKP.mp4',
	'https://cdn.kinestex.com/uploads%2F7d7c34b4-d71f-4abc-a27f-2de2ab6457d4_4ZIDykVFTmkZ706xdcdy?alt=media&token=d88a5876-44d7-4162-9e39-8b6faba207bd',
	'https://cdn.kinestex.com/uploads%2F0d25ed86-5fa9-47c6-a98a-4c2e1f4055f24zoiodk8vS4d_K1nckEci?alt=media&token=f10047bd-5fba-4582-aaa2-2e5afb938a22',
	'https://cdn.kinestex.com/uploads%2F7dabcade-6851-47db-9bf6-a3ab23e2e39b_53nUiqZopqk7R6ONnZgA?alt=media&token=66844e37-0e08-43c5-8e18-5cbfb0217769',
	'https://cdn.kinestex.com/uploads%2Fed9c1d40-a8af-4f0e-8edc-35884b211d7c53wArm2iR7U_7pmeNi0j4?alt=media&token=f297d13c-2062-4f6f-91aa-9225719c422d',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F56sgWpE962bNEwCwDfSQ.mp4',
	'https://cdn.kinestex.com/uploads%2F0122bb28-280b-4f14-ab41-79713f45eb625KtLRNt74BsI_NZvrcXIP?alt=media&token=85b3c459-ce7b-4733-b464-15c16f94f5e9',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F5SdytyMewrEXd7Bzsl7C.mp4',
	'https://cdn.kinestex.com/uploads%2F221af067-b3e5-4984-9867-998bed638253_5dPd59pECe9nfXCoMeXx?alt=media&token=f07c692f-47a5-4dec-8b60-9f25d5e407fa',
	'https://cdn.kinestex.com/uploads%2F1ab653c7-243c-44b6-84aa-814949093983_5dYim7JMqdCZIJ40kJOC?alt=media&token=f5fc9aed-17f6-44fc-b3cd-c0e70d946325',
	'https://cdn.kinestex.com/uploads%2Fb8c23ecb-a5c2-4f77-9cba-592beba20f9b_5nJcxL01gW7sRuC12dFI?alt=media&token=d8a2d4bc-4c05-4de7-80b4-623f43a46c39',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F5pdDRfeklUxLfIJ5w9t0.mp4',
	'https://cdn.kinestex.com/uploads%2F89b874a1-6e17-4c5e-86a0-2de8cb885568_68UMpNlweGY7y9u8Ev1P?alt=media&token=77d284ce-17bf-4153-a33b-fca80350c0c9',
	'https://cdn.kinestex.com/uploads%2Fec73b673-58c3-4615-919d-963fef72383369Rf1QlT8da_H3K5EFjfJ?alt=media&token=88539f78-5418-4f2a-9be5-f39bf232ed30',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F6AB6rHVSKBJb2ckbp3Sh.mp4',
	'https://cdn.kinestex.com/uploads%2F70ace495-1661-4389-a820-043681aa8729_6CgZdl5zDskqp2z0xtzt?alt=media&token=2c0e4cd2-4687-4573-8cee-1f0eb6be6076',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F6PO71p3cYk66Fcw33GRX.mp4',
	'https://cdn.kinestex.com/uploads%2Ff72026b8-c218-435a-9bf5-353d3b2214926Rw9PkhGRY_lIdazPEhft?alt=media&token=04d0c675-955f-437c-bb91-c18a4669d33c',
	'https://cdn.kinestex.com/uploads%2Fba7c030a-09d4-4903-bd49-3fafd21d07996UX49ssNEZ_33Y3RjT2dO?alt=media&token=0fc764c0-ab14-40ac-9287-14026229cfe7',
	'https://cdn.kinestex.com/uploads%2Fe66619dd-033e-4fd4-b952-ecb09b81fe8b6vhOi6xorHbE_CJBFGh4j?alt=media&token=4876a537-a47c-4088-b943-27fc41b3f9c5',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F70D8IdMfzMTNghh5xZu8.mp4',
	'https://cdn.kinestex.com/uploads%2F39d98379-f8af-4921-a8cd-23bec34a5e0f7FBIVBYKYQx_OL2QlE7hR?alt=media&token=24dc6cae-7018-4c39-9595-a553fefedf83',
	'https://cdn.kinestex.com/uploads%2F9045d44c-bf44-4eb5-936e-82fffd2986c4_7FjbOKhwCz0yr9OIziVl?alt=media&token=d86781a1-ea5b-4cd1-9e0c-e94af5f75270',
	'https://cdn.kinestex.com/uploads%2F082d345f-88d8-446f-90a4-d5766d7aa7fa7RFc9GNVQT_3lgixJ505h?alt=media&token=708cdbca-b4ce-4968-be87-99111a0d677a',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F7WNW7Ac5WMX3F9L5d5Gm.mp4',
	'https://cdn.kinestex.com/uploads%2F09c15baa-fec3-40ed-a0ac-3b7a6daddef7_7pd3mgYHSA7siVLnk013?alt=media&token=4263ee3c-ed12-4d64-83a7-14226686b725',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F88HHSoxW5f1LsL7zyxYC.mp4',
	'https://cdn.kinestex.com/uploads%2F0663521d-95ef-4cd4-848a-e782f7da6a29_8QDvvu8juc0jdvNMNAGK?alt=media&token=fe5ab72c-e9e8-4a90-b788-fc269a39cace',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F8aPfkXJsXYr3OtJPfYrq.mp4',
	'https://cdn.kinestex.com/uploads%2F9a0bc37c-879e-428d-b5c3-ef2a398b746c_8lBZWA7JvqhFtptHnLUH?alt=media&token=8c2da55d-a879-4d1a-aa7d-b7659467101f',
	'https://cdn.kinestex.com/uploads%2F85f43cc0-288e-42c8-8798-ca39c149d463_8pDx2FZuNCRM6oLECH1S?alt=media&token=54f30149-2782-45df-82ec-d83452fcbe8b',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F8vtAdc7KyY6FGlhfcL6f.mp4',
	'https://cdn.kinestex.com/uploads%2Fdb0c49ea-0a8e-4778-a302-f51311d6378794OvKQc8Mf_dJxYnBWcKR?alt=media&token=14fddda8-f4e8-4637-b627-0c0730c37f7a',
	'https://cdn.kinestex.com/uploads%2Fb48d4ed2-1676-44d7-b1d5-58766614b7dd_9AhdbpLS6B1Wclrq3pJY?alt=media&token=0ed84a65-2a7c-4cca-9e46-9266a6f19a05',
	'https://cdn.kinestex.com/uploads%2Fa8af2091-9767-4b8d-a1a3-194b9864e12e_9M1uWg4gnzzGDTQ21Da6?alt=media&token=f53eda89-9166-4463-b08f-e5e0543db2fc',
	'https://cdn.kinestex.com/uploads%2F832c025b-4d65-43b3-9d69-030d11e1d442_9PFIjjlHW3dJ9ijMXpV6?alt=media&token=9b9d027d-df05-4407-8537-87da314bca82',
	'https://cdn.kinestex.com/uploads%2F423b28c2-fc68-4410-9136-2b81401f68c8_9gpM6MluFUtV9MlAVSkA?alt=media&token=26188ed3-52e6-4f9e-9455-d9cd43be27a1',
	'https://cdn.kinestex.com/uploads%2Faceada23-0b9a-4b80-bbb6-18eb3749e0c4_9vp4YGt1i8h0hxmyepfs?alt=media&token=90390807-cee0-41d2-8abe-b19f95ae7838',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2F9wLOgOylhSsNgp6uNBPq.mp4',
	'https://cdn.kinestex.com/uploads%2Fa93820ca-cfb9-4170-a0cd-d8a809598bd8_9xcBtx6UyL6zbS75ncDz?alt=media&token=8974287c-205d-4c41-8cdb-701c4b6cec94',
	'https://cdn.kinestex.com/uploads%2F32d71b82-19cd-4045-99fe-72b31218658b_9yYVgn0ADdVfVt0Qxv3v?alt=media&token=9128dee4-5323-4a08-8757-90498d56b1c6',
	'https://cdn.kinestex.com/uploads%2F367d55d9-49fc-44c7-8dd3-581c672f9a16_A0WUjVnQ1q2R5EghmTrq?alt=media&token=3082be37-ae88-4974-9211-ca90502a67bd',
	'https://cdn.kinestex.com/uploads%2F9714687d-a193-44be-87ef-dec93ffa48e5_AC2OjAHEp713fixOBg4F?alt=media&token=055ea812-b5fd-4331-9a3f-fd20207fe70e',
	'https://cdn.kinestex.com/uploads%2Fac5e7019-cc63-4400-885a-0630ff0dc3d0_AJnXxiMtjWz5WIVfKlUO?alt=media&token=4d85331a-872e-4f98-9ff0-96e9af496590',
	'https://cdn.kinestex.com/uploads%2F3626554b-fbae-40ed-b81d-2bec6caf9d45Anv2xN2VoZ0_K69xU3B8b?alt=media&token=0062bb66-65c0-4248-99b4-38f9a29e5f8c',
	'https://cdn.kinestex.com/uploads%2Fbe5e4e54-a431-4077-a1f7-d528edc2fee7AvM03VaUU6_6QIHz75XiS?alt=media&token=42272fdd-9f3b-470a-b9e8-358eecddc2ce',
	'https://cdn.kinestex.com/uploads%2F38408d48-6f6a-4162-994a-4c5f74e25b18AzrVGcfYkGS_zfjddSa9V?alt=media&token=9aeb7272-cda4-496d-a5ce-62feeb417149',
	'https://cdn.kinestex.com/uploads%2F57b681bc-21a6-40e5-8b28-8b092133f726_B5bA9Fa1pixdUraBt5QB?alt=media&token=b7262dd1-4c91-455f-9d1a-14b72030f0d1',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2FBBug4omNpxQjlJBRyrHc.mp4',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2FBRnM888rJ6U49rDnRdNm.mp4',
	'https://cdn.kinestex.com/uploads%2F26d34ea4-b2d2-4765-a250-668db5a895d2_BRsx7ejV26v4ugrhCI7d?alt=media&token=ef600ace-a6b1-4295-a9c1-8edfe7b40d34',
	'https://cdn.kinestex.com/uploads%2F0d63d08b-af63-403a-8478-39f4d8a20cd4BVF8aaIAS6Y_C63GeQJIx?alt=media&token=d456bf6c-446f-43d2-8fed-53012b54ca7c',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2FBprPV4kWqGe1tCVnvWQJ.mp4',
	'https://cdn.kinestex.com/uploads%2Ffa198e3e-8f31-4eea-a93a-9d3363cc1f3c_BwvBR3cHEgJ4I5PvFMru?alt=media&token=85de6db2-f444-46ed-a06a-d0e5921731f4',
	'https://cdn.kinestex.com/uploads%2F8200e742-5d51-4634-bba8-be1efbc38796BxML5iHrDYr_8r9dnw3cs.mp4?alt=media&token=1521944f-be6f-45d2-a5f9-0880578762e0',
	'https://cdn.kinestex.com/uploads%2Fc00aef7f-4dd2-435f-a379-13421f67ce02C6UAEeROmO_JdhTMtOJbU?alt=media&token=6499896e-1bc6-4ca7-b539-b041dfae4c27',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2FCW3Scrq2KwOzCGtex6eY.mp4',
	'https://cdn.kinestex.com/uploads%2Fb9fef555-4408-41aa-9c20-06d3af3d8e7bCXPzSD3odfz_VZ4DR0mQx?alt=media&token=c347e032-46b6-4104-bd07-05a4d80ff9c9',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2FCqAanvKQAzlDzahc9hrM.mp4',
	'https://cdn.kinestex.com/uploads%2F217d6533-07b6-451f-a3ee-b8d81df8c116_D95ON1pqtnR95WzkTlGE?alt=media&token=a9451488-60df-4106-9b2f-ef4ceec222fd',
	'https://cdn.kinestex.com/uploads%2F8ac9af6b-49cf-444f-977a-e1872db99eba_DA7RItqWaxDWnDqSj96b?alt=media&token=8cede118-1b73-448a-a749-1cd0483d2feb',
	'https://cdn.kinestex.com/uploads%2Fa0950c66-e154-4aad-b83b-a3fdbf7e1f3c_DBqJwZ6j3evyw5AcsWX9?alt=media&token=2601a30a-e41d-43f9-b9c1-33705012e08c',
	'https://cdn.kinestex.com/uploads%2Fb0129a4b-3d1b-4a0a-8958-4b368c287f5cDCQsH4NPiD_Su0U7f0tIj?alt=media&token=68cf3b8a-926e-405b-9330-b7e0f03c4253',
	'https://cdn.kinestex.com/uploads%2F0b520ca3-a3bc-496b-afe1-8fb633c4af39DEs6CkK8DD_RL1FcDvt90?alt=media&token=d41e657e-18ec-4f98-91b4-54f1ff0f687d',
	'https://cdn.kinestex.com/uploads%2Feeef1a0d-3b6e-469d-8f3d-9089d9b55758DF7B1POo3b_k65q60RP4b?alt=media&token=4c13408d-c574-4eb4-aeb9-d96eaf078af8',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2FDLzVPQbqNPxSnMnz8yO5.mp4',
	'https://cdn.kinestex.com/uploads%2Fcompressed%2FDaGLLX87CdPwGa9RxPIr.mp4',
	'https://cdn.kinestex.com/uploads%2Ff127ac9f-cc28-418d-9e69-92c254d954a4_DaUyLwAktrRefmW7qaUd?alt=media&token=61202ea4-b3ef-4152-8121-dfc46e1e9bee',
	'https://cdn.kinestex.com/uploads%2F10918358-32c7-4f30-bbbe-c4596445e85e_DqHstilhCg4DSNEMWsuP?alt=media&token=486816bf-c6ed-419a-8fc4-dc8651d4951e',
	'https://cdn.kinestex.com/uploads%2F7cb52e25-fabd-4570-b10d-1e1d297a15cfDtmFElQ6Cn_HA1YSAKUv3?alt=media&token=cff1e487-0324-4010-a462-e584a03ede0f',
];
const ASSETS_TO_CACHE = allData.filter(item => item.endsWith('.mp4'));

const addResourcesToCache = async resources => {
	const cache = await caches.open(CACHE_NAME);
	await cache.addAll(resources);
};

const putInCache = async (request, response) => {
	const cache = await caches.open(CACHE_NAME);
	await cache.put(request, response);
};

const cacheFirst = async ({ request, fallbackUrl }) => {
	// Ignore non-GET requests, WebSocket upgrades, etc
	if (request.method !== 'GET' || request.headers.get('upgrade') === 'websocket') {
		return;
	}
	// Ignore requests from Chrome extensions
	if (request.url.startsWith('chrome-extension://')) {
		return fetch(request);
	}
	// First try to get the resource from the cache
	const responseFromCache = await caches.match(request);
	if (responseFromCache) {
		return responseFromCache;
	}

	// Next try to use the preloaded response, if it's there
	// NOTE: Chrome throws errors regarding preloadResponse, see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=1420515
	// https://github.com/mdn/dom-examples/issues/145
	// To avoid those errors, remove or comment out this block of preloadResponse
	// code along with enableNavigationPreload() and the "activate" listener.
	// const preloadResponse = await preloadResponsePromise;
	// if (preloadResponse) {
	//   console.info('using preload response', preloadResponse);
	//   putInCache(request, preloadResponse.clone());
	//   return preloadResponse;
	// }

	// Next try to get the resource from the network
	try {
		const responseFromNetwork = await fetch(request.clone());
		// response may be used only once
		// we need to save clone to put one copy in cache
		// and serve second one
		putInCache(request, responseFromNetwork.clone());
		return responseFromNetwork;
	} catch (error) {
		const fallbackResponse = await caches.match(fallbackUrl);
		if (fallbackResponse) {
			return fallbackResponse;
		}
		// when even the fallback response is not available,
		// there is nothing we can do, but we must always
		// return a Response object
		return new Response('Network error happened', {
			status: 408,
			headers: { 'Content-Type': 'text/plain' },
		});
	}
};

self.addEventListener('install', event => {
	console.log('[Service Worker] Install');
	event.waitUntil(addResourcesToCache(ASSETS_TO_CACHE));
});

self.addEventListener('activate', event => {
	// Clean up old caches
	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames
					.map(cacheName => {
						if (cacheName !== CACHE_NAME) {
							return caches.delete(cacheName);
						}
						return null;
					})
					.filter(promise => promise !== null)
			);
		})
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		cacheFirst({
			request: event.request,
			fallbackUrl: '/video/offline.mp4',
		})
	);
});

self.addEventListener('message', event => {
	if (event.data.type === 'SKIP_WAITING') {
		self.skipWaiting().then(() => {
			self.clients.claim();
		});
	}
});
