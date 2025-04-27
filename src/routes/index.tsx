import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	return (
		<div className='home'>
			<button className='start_button'>Start</button>
		</div>
	);
}
