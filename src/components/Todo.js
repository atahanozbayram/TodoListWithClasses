import React from 'react';
import PropTypes from 'prop-types';
import { TodoDeleteCbContext, TodoToggleCompleteCbContext } from '../contexts/TodoAppContext';

class Todo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// destructure the props and take what is needed, so
		// writing code too long will be shortened.
		const { id, text, completed } = this.props;

		return (
			<React.Fragment>
				<p>{text}</p>
				<TodoDeleteCbContext.Consumer>
					{(deleteCallback) => <button onClick={deleteCallback.bind(null, id)}>Delete</button>}
				</TodoDeleteCbContext.Consumer>
				<TodoToggleCompleteCbContext.Consumer>
					{(toggleCallback) => (
						<button onClick={toggleCallback.bind(null, id)}>{completed ? 'Uncomplete' : 'Complete'}</button>
					)}
				</TodoToggleCompleteCbContext.Consumer>
			</React.Fragment>
		);
	}
}

// implement propTypes, so it will help debugging the component
// and the props supplied to it.
Todo.propTypes = {
	// id is necessary for distinguishing todos from each other,
	// for toggling, and deleting functions mainly.
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired, // it will represent the todo's content, what todo is meant.
	completed: PropTypes.bool.isRequired, // it will hold the status of the todo.
};

// export the class as default
export { Todo as default };
