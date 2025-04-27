const registerServiceWorker = async () => {
	if ('serviceWorker' in navigator) {
		console.log('This code runs');
		try {
			const registration = await navigator.serviceWorker.register('sw.js', {
				scope: './',
			});
			
			// Track service worker state changes
			registration.addEventListener('updatefound', () => {
				const installingWorker = registration.installing;
				if (installingWorker) {
					installingWorker.addEventListener('statechange', () => {
						console.log(`Service worker state changed to: ${installingWorker.state}`);
					});
				}
			});

			if (registration.active) {
				console.log('Service worker is already active');
			}
		} catch (error) {
			console.error(`Registration failed with ${error}`);
		}
	}
};
export default registerServiceWorker;
