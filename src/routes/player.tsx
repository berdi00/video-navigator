import { videoLinks } from '@/data';
import { filterVideos } from '@/utils/filteringVideos';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { MouseEvent as ReactMouseEvent } from 'react';
export const Route = createFileRoute('/player')({
	component: Player,
});

function Player() {
	const [videos, setVideos] = useState<string[]>([]);
	const [currentVideo, setCurrentVideo] = useState(0);
	const [videoLoading, setVideoLoading] = useState(false);
	useEffect(() => {
		setVideos(filterVideos(videoLinks));
	}, []);

	const handlePrevNext = (index: number, e: ReactMouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if ((currentVideo === 0 && index < 0) || (currentVideo === videos.length - 1 && index > 0)) {
			return;
		}
		setCurrentVideo(prev => prev + index);
	};

	return (
		<div className='player'>
			<div className='video-container'>
				<video
					loop
					onLoadStart={() => setVideoLoading(true)}
					onLoadedData={() => setVideoLoading(false)}
					autoPlay
					src={videos[currentVideo]}
				></video>
			</div>
			{videoLoading && <div className='loader'>Loading</div>}
			<div className='control_buttons'>
				<button onClick={e => handlePrevNext(-1, e)}>Prev</button>
				<span className='tracking'>
					{currentVideo + 1}/{videos.length - 1}
				</span>
				<button onClick={e => handlePrevNext(1, e)}>Next</button>
			</div>
		</div>
	);
}
