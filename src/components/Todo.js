import React from 'react';
import PropTypes from 'prop-types';
import { TodoDeleteCbContext, TodoToggleCompleteCbContext } from '../contexts/TodoAppContext';
import styles from '../styles/style.module.css';

class Todo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// destructure the props and take what is needed, so
		// writing code too long will be shortened.
		const { id, text, completed } = this.props;

		return (
			<li className={styles.todo}>
				<p style={{ textDecoration: completed ? 'line-through' : '' }}>{text}</p>

				<TodoToggleCompleteCbContext.Consumer>
					{(toggleCallback) => (
						<button
							onClick={toggleCallback.bind(null, id)}
							className={styles.todoToggle + ' ' + (completed ? styles.todoUnCompleted : styles.todoCompleted)}
						>
							{completed ? 'Uncomplete' : 'Complete'}
						</button>
					)}
				</TodoToggleCompleteCbContext.Consumer>
				<TodoDeleteCbContext.Consumer>
					{(deleteCallback) => (
						<button onClick={deleteCallback.bind(null, id)} className={styles.todoDelete}>
							Delete
						</button>
					)}
				</TodoDeleteCbContext.Consumer>
			</li>
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
