import React from 'react';
import PropTypes from 'prop-types';
import reset from '../styles/reset.module.css';
import styles from '../styles/style.module.css';

class TodoAdd extends React.Component {
	constructor(props) {
		super(props);

		// Create a ref, we will use it in input[type="text"] element to get it's value
		this.inputRef = React.createRef();
		this.buttonCbWrapper = this.buttonCbWrapper.bind(this);
	}

	componentDidMount() {
		// focus the input area when component mounts
		this.inputRef.current.focus();
	}

	buttonCbWrapper(event) {
		// preventDefault for preventing webpage to reload.
		event.preventDefault();
		// First check if the input's value is not null
		if (this.inputRef.current.value === '') {
			return; // terminate the function
		}
		// If the code comes here, that means we can call the callback function.
		this.props.callback(this.inputRef.current.value);
		// also clean up the inputRef.current's value for new input
		this.inputRef.current.value = '';
	}

	render() {
		return (
			<form className={styles.todoAddContainer}>
				<div>
					<label>Todo:</label>
					<input type="text" ref={this.inputRef} />
					{/* callback is bind to the TodoApp object, so first argument of the binding below should be null
				and the first argument to be supplied to callback is text value of the todo, which is obtained from inputRef.current.value*/}
					<button onClick={this.buttonCbWrapper}>Add</button>
				</div>
			</form>
		);
	}
}

// Define some propTypes
TodoAdd.propTypes = {
	callback: PropTypes.func.isRequired,
};

// export TodoAdd as default
export { TodoAdd as default };
