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
	try {
		const registration = await navigator.serviceWorker.register('sw.js', {
			scope: './',
		});
		if (registration.installing) {
			console.log('Service worker installing');
		} else if (registration.waiting) {
			console.log('Service worker installed');
		} else if (registration.active) {
			console.log('Service worker active');
		}
	} catch (error) {
		console.error(`Registration failed with ${error}`);
	}
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
