import React from "react";
import "./ChillMusicPlayer.css";

function ChillMusicPlayer() {
	return (
		<section className="ChillMusicPlayer">
			<iframe
				width="100%"
				height="315"
				src="https://www.youtube.com/embed/jfKfPfyJRdk"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</section>
	);
}

export { ChillMusicPlayer };
