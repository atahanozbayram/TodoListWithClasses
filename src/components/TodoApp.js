import React from 'react';
import TodoList from '../components/TodoList';
import TodoAdd from '../components/TodoAdd';

class TodoApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			// We will, contain todoArray in this component, instead of TodoList itself.
			// This should be better and I don't remember the reason for that.
			todoArray: [],
		};
	}

	render() {
		// Destructure some state for the ease of writing code
		const { todoArray } = this.state;

		return (
			<div>
				<TodoAdd />
				<TodoList todoArray={todoArray} />
			</div>
		);
	}
}

// export TodoApp as default
export { TodoApp as default };
