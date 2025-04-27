import { createFileRoute, useRouter } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	const router = useRouter();

	const start = async () => {
		router.navigate({ href: '/pending' });
	};

	return (
		<div className='center'>
			<button onClick={start} className='start_button'>
				Start
			</button>
		</div>
	);
}
