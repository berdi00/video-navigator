import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	const [loading, setLoading] = useState(false);
	const [init, setInit] = useState(false);
	const [isRegistered, setIsRegistered] = useState(false);
	const registerWorker = async () => {
		if ('serviceWorker' in navigator) {
			setInit(true);
			setLoading(true);
			navigator.serviceWorker
				.register('/sw.js', { scope: '/' })
				.then(registration => {
					console.log('Service Worker registered with scope:', registration.scope);
					setIsRegistered(true);
				})
				.catch(error => {
					console.error('Service Worker registration failed:', error);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	};

	return (
		<div className='home'>
			{loading && <h1>Loading...</h1>}
			<button onClick={registerWorker} className='start_button'>
				Start
			</button>
			{!loading && init && (
				<h3>{isRegistered ? 'Successfully Registered worker' : 'Failure in registering worker'}</h3>
			)}
		</div>
	);
}
