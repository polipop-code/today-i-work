import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
	return (
		<li className="TodoItem">
			<p>{props.text}</p>
			<button className="done">O</button>
			<button className="remove">X</button>
		</li>
	);
}

export { TodoItem };
