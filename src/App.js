import "./App.css";

function App() {
	return (
		<main className="App">
			<section className="TODO section">
				<h3> here is the todo section</h3>
			</section>
			<section className="music-section">
				<label>Change music</label>
				<input type="text"></input>
				<iframe
					width="100%"
					src="https://www.youtube.com/embed/oXLulNhMgxQ"
					title="YouTube video player"
					frameborder="0"
					allowfullscreen
				></iframe>
			</section>
		</main>
	);
}

export default App;
