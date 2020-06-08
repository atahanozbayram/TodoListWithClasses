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
			// idCounter is used for creating new id numbers for todos. It will always increase
			// even though new added todo is going to be removed. This way we accomplish distinct
			// ids without worrying about adding or removing todos.
			idCounter: 0,
		};

		// bind the todoAddCb callback to this class object
		this.todoAddCb = this.todoAddCb.bind(this);
	}

	// todoAddCb is a callback for adding new todo's to the todoArray property of the state
	todoAddCb(todoText) {
		// set the state with newly provided todo
		const todo = {
			id: this.state.idCounter,
			text: todoText,
			completed: false,
		};

		// Change state with setState method which takes function reference, instead of state object
		// This way we will be safe from asynchronous state updates. It is better to do that
		// If state is being updated by using the current state.
		this.setState((currentState) => {
			// Normally, the below code should not be used. It is against React's principles and it does not help
			// render update. But we updated idCounter with suggested way of React. This way new render update will be mandatory.
			// This will help us with performance.
			this.state.todoArray.push(todo);

			return {
				idCounter: currentState.idCounter + 1, // increase the idCounter
			};
		});
	}

	render() {
		// Destructure some state for the ease of writing code
		const { todoArray } = this.state;

		return (
			<div>
				<form>
					<TodoAdd callback={this.todoAddCb} />
				</form>
				<TodoList todoArray={todoArray} />
			</div>
		);
	}
}

// export TodoApp as default
export { TodoApp as default };
