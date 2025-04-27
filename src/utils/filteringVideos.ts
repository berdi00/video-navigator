export const filterVideos = (videos: string[]) => {
	const filteredVideos = videos.filter(item => item.endsWith('.mp4'));
	return filteredVideos;
};
