import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { AddTodoButton } from "./components/AddTodoButton";
import { ChillMusicPlayer } from "./components/ChillMusicPlayer";

const todos = [
	{
		text: "hola",
		completed: false,
	},

	{
		text: "adios",
		completed: false,
	},

	{
		text: "XD",
		completed: false,
	},
];

function App() {
	return (
		<React.Fragment>
			<TodoCounter />
			<TodoList>
				{todos.map((todo) => (
					<TodoItem />
				))}
			</TodoList>
			<AddTodoButton />
			<ChillMusicPlayer />
		</React.Fragment>
	);
}

export default App;
