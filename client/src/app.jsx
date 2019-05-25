import React from 'react';
import ReactDOM from 'react-dom';
import View from './updates_view.jsx';
const db = require('../../database');
const $ = require('jquery');

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			updates: []
		}
	}

	componentDidMount() {

		$.get('http://localhost:3003/updates', (data) => {

			console.log('got data back!!', data);

			this.setState({
				updates: data
			})
		})

		console.log('mounted');
	}

	// handleClick() {
	// 	$.get('http://localhost:3003/updates', (data) => {

	// 		console.log('got data back!!', data);

	// 		this.setState({
	// 			updates: data
	// 		})
	// 	})

	// 	console.log('mounted');
	// }

	render() {

		//first check if state updates is an empty array
		if (this.state.updates.length === 0 ) {
			console.log('state updates is empty', this.state.updates); //do something useful with this

			return (

				<h1>See it here</h1>

			)
		} else { //state updates is not empty and thus can be acted on

			return (
				
				<div>
					<View updates={this.state.updates} />
				</div>
				
			)
		}
	}
}

export default App;