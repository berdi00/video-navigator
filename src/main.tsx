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
	window.addEventListener('load', () => {
		// Register the service worker (assuming sw.js is in the public directory)
		navigator.serviceWorker
			.register('/sw.js') // This is where your compiled service worker file should be
			.then(registration => {
				console.log('Service Worker registered with scope:', registration.scope);
			})
			.catch(error => {
				console.log('Service Worker registration failed:', error);
			});
	});
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
