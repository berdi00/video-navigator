import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/player')({
	component: Player,
});

function Player() {
	return <div className='player'>Hello from Player!</div>;
}
