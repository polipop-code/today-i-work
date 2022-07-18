import React from "react";
import "./ChillMusicPlayer.css";

function ChillMusicPlayer() {
	return (
		<section className="chill--music-player">
			<iframe
				width="100%"
				height="315"
				src="https://www.youtube.com/embed/jfKfPfyJRdk"
				title="YouTube video player"
				frameborder="1"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</section>
	);
}

export { ChillMusicPlayer };
