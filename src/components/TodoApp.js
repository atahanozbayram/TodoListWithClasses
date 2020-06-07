import React from 'react';
import TodoList from '../components/TodoList';
import TodoAdd from '../components/TodoAdd';

class TodoApp extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<TodoAdd />
				<TodoList />;
			</div>
		);
	}
}

// export TodoApp as default
export { TodoApp as default };
