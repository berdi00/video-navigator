import { createFileRoute, useRouter } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/pending')({
	component: Pending,
});

function Pending() {
	const router = useRouter();
	const [swState, setSwState] = useState<'idle' | 'installing' | 'activated' | 'failed'>('idle');
	useEffect(() => {
		const registerWorker = async () => {
			if ('serviceWorker' in navigator) {
				setSwState('installing');
				try {
					const registration = await navigator.serviceWorker.register('/sw.js', {
						scope: '/',
					});

					if (registration.installing) {
						registration.installing.addEventListener('statechange', () => {
							console.log('Installing worker state:', registration.installing?.state);
							if (registration.installing?.state === 'activated') {
								setSwState('activated');
							}
						});
					} else if (registration.waiting) {
						setSwState('activated');
					} else if (registration.active) {
						setSwState('activated');
					}

					console.log('Service worker registered successfully:', registration);
				} catch (error) {
					console.error('Service worker registration failed:', error);
					setSwState('failed');
				}
			} else {
				setSwState('failed');
			}
		};

		registerWorker();
	}, []);

	useEffect(() => {
		if (swState === 'activated') {
			router.navigate({ href: '/player' });
		}
	}, [router, swState]);

	let message = '';

	switch (swState) {
		case 'idle':
			message = 'Click the button to enable offline features.';
			break;
		case 'installing':
			message = 'Service worker is installing...';
			break;
		case 'activated':
			message = 'Service worker is active and caching videos!';
			break;
		case 'failed':
			message = 'Service worker registration failed.';
			break;
		default:
			message = 'Click the button to enable offline features.';
	}

	return (
		<div className='center'>
			<p className='message-worker'>{message}</p>
		</div>
	);
}
