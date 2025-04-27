import '@/assets/styles/base.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

// Register the service worker if it's not already registered

if ('serviceWorker' in navigator) {
	console.log('Service worker support found in browser');

	const registerServiceWorker = async () => {
		try {
			console.log('Attempting to register service worker...');
			const registration = await navigator.serviceWorker.register('sw.js', {
				// Ensure leading slash
				scope: './',
			});
			console.log('Service worker registration successful:', registration);

			registration.addEventListener('updatefound', () => {
				console.log('New service worker update found!');
				const installingWorker = registration.installing;
				if (installingWorker) {
					installingWorker.addEventListener('statechange', () => {
						console.log('Service worker state:', installingWorker.state);
						if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
							console.log(
								'New content is available and will be used when all tabs for this page are closed.'
							);
						} else if (installingWorker.state === 'installed') {
							console.log('Content is cached for offline use.');
						}
					});
				}
			});
		} catch (error) {
			console.error('Service worker registration failed:', error);
		}
	};

	window.addEventListener('load', registerServiceWorker); // Ensure DOM is loaded
} else {
	console.log('Service workers are not supported in this browser.');
}

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>
	);
}
