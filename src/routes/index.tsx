import { createFileRoute, useRouter } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	const [swState, setSwState] = useState<'idle' | 'installing' | 'activated' | 'failed'>('idle');
	const router = useRouter();

	const registerWorker = async () => {
		if ('serviceWorker' in navigator) {
			setSwState('installing');
			try {
				const registration = await navigator.serviceWorker.register('/sw.js', {
					scope: '/',
				});

				// Listen for state changes
				registration.addEventListener('statechange', () => {
					console.log('SW State Changed:', registration.active?.state);
					if (registration.installing) {
						setSwState('installing');
					} else if (registration.active?.state === 'activated') {
						setSwState('activated');
					}
				});

				if (registration.active?.state === 'activated') {
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

	useEffect(() => {
		if (swState === 'activated') {
			router.navigate({ href: '/player' });
		}
	}, [router, swState]);

	let message = '';
	let buttonText = 'Start';
	let disabled = false;

	switch (swState) {
		case 'idle':
			message = 'Click the button to enable offline features.';
			buttonText = 'Start';
			disabled = false;
			break;
		case 'installing':
			message = 'Service worker is installing...';
			buttonText = 'Loading';
			disabled = true;
			break;
		case 'activated':
			message = 'Service worker is active and caching videos!';
			buttonText = 'Loading';
			disabled = true;
			break;
		case 'failed':
			message = 'Service worker registration failed.';
			buttonText = 'Retry';
			disabled = false;
			break;
		default:
			message = 'Click the button to enable offline features.';
			buttonText = 'Start';
			disabled = false;
	}

	return (
		<div className='home'>
			<p>{message}</p>
			<button disabled={disabled} onClick={registerWorker} className='start_button'>
				{buttonText}
			</button>
		</div>
	);
}
