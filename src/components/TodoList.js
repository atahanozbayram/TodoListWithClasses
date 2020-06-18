import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../components/Todo';

// Purpose of this class is to render an unordered list and
// inside of that list, it should render Todo elements inside li elements.
class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// Destructuring some props, this helps keeping the code short
		const { todoArray } = this.props;
		return (
			<ul>
				{
					// Loop through the todoArray, and render Todo elements with the given objects.
					todoArray.map((todo) => {
						return <Todo id={todo.id} text={todo.text} key={todo.id} completed={todo.completed} />;
					})
				}
			</ul>
		);
	}
}

// Define prop types, so it helps debuggin.
TodoList.propTypes = {
	todoArray: PropTypes.arrayOf(PropTypes.shape(Todo.propTypes)),
};

// export as default
export { TodoList as default };
