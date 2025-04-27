import { createFileRoute, useRouter } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const registerWorker = async () => {
		router.navigate({ href: '/player' });
		// if ('serviceWorker' in navigator) {
		// 	setLoading(true);
		// 	navigator.serviceWorker
		// 		.register('/sw.js', { scope: '/' })
		// 		.then(registration => {
		// 			if (registration.scope) {

		// 			}
		// 		})
		// 		.catch(error => {
		// 			console.error('Service Worker registration failed:', error);
		// 		})
		// 		.finally(() => {
		// 			setLoading(false);
		// 		});
		// }
	};

	return (
		<div className='home'>
			<button disabled={loading} onClick={registerWorker} className='start_button'>
				{loading ? 'Loading' : 'Start'}
			</button>
		</div>
	);
}
