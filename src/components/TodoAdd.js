import React from 'react';

class TodoAdd extends React.Component {
	constructor(props) {
		super(props);

		// Create a ref, we will use it in input[type="text"] element to get it's value
		this.inputRef = React.createRef();
	}

	componentDidMount() {
		// focus the input area when component mounts
		this.inputRef.current.focus();
	}

	render() {
		return (
			<div>
				<label>Todo: </label>
				<input type="text" ref={this.inputRef} />
				<button>add</button>
			</div>
		);
	}
}

// export TodoAdd as default
export { TodoAdd as default };
