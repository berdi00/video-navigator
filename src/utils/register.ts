const registerServiceWorker = async () => {
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', () => {
			navigator.serviceWorker
				.register('/sw.js') // Ensure this path points to the correct location of your sw.js
				.then(registration => {
					console.log('Service Worker registered with scope:', registration.scope);
				})
				.catch(error => {
					console.error('Service Worker registration failed:', error);
				});
		});
	}
};
export default registerServiceWorker;
