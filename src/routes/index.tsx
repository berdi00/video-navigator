import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	useEffect(() => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker
				.register('/sw.js', { scope: '/' })
				.then(registration => {
					console.log('Service Worker registered with scope:', registration.scope);
				})
				.catch(error => {
					console.error('Service Worker registration failed:', error);
				});
		}
	}, []);
	return (
		<div className='home'>
			<button className='start_button'>Start</button>
		</div>
	);
}
