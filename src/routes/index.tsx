import { createFileRoute, useRouter } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	const [swReady, setSwReady] = useState(false);
	const router = useRouter();

	const registerWorker = async () => {
		if ('serviceWorker' in navigator) {
			try {
				const registration = await navigator.serviceWorker.register('/sw.js', {
					scope: '/',
				});

				// Listen for the activate event
				registration.addEventListener('statechange', () => {
					if (registration.active?.state === 'activated') {
						console.log('Service Worker is activated!');
						setSwReady(true); // Set state when activated
					}
				});

				// If it's already active, set to ready
				if (registration.active?.state === 'activated') {
					setSwReady(true);
				}

				console.log('Service worker registered successfully:', registration);
			} catch (error) {
				console.error('Service worker registration failed:', error);
			}
		}
	};

	useEffect(() => {
		if (swReady) {
			router.navigate({ href: '/player' });
		}
	}, [router, swReady]);

	return (
		<div className='home'>
			<button disabled={swReady} onClick={registerWorker} className='start_button'>
				{swReady ? 'Loading' : 'Start'}
			</button>
		</div>
	);
}
