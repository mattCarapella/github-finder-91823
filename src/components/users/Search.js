import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);

	const [text, setText] = useState(''); 

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			alertContext.setAlert('Please enter some search parameters...', 'light');
		}
		else {
			githubContext.searchUsers(text); 		// passed up to App.js as props
			setText('');
		}
	}

	const onChange = e => setText (e.target.value); 

	return (
		<div>
			<form className='form' onSubmit={onSubmit}>
				<input 
					type='text' 
					name='text' 
					placeholder='Search Users...' 
					value={text} 
					onChange={onChange}
				/>
				<input 
					type='submit' 
					value='Search' 
					className='btn btn-dark btn-block' 
				/> 
			</form>
			{githubContext.users.length > 0 && (	
				<button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>
					Clear 
				</button>
			)}
		</div>
	);	
}

export default Search;


//******************************************************************************************************************************************
//
//       VERSION 2
//
//******************************************************************************************************************************************

// import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types';
// import GithubContext from '../../context/github/githubContext';

// const Search = ({ searchUsers, clearUsers, showClear, setAlert }) => {

// 	const [text, setText] = useState(''); 

// 	const onSubmit = (e) => {
// 		e.preventDefault();
// 		if (text === '') {
// 			setAlert('Please enter some search parameters...', 'light');
// 		}
// 		else {
// 			searchUsers(text); 		// passed up to App.js as props
// 			setText('');
// 		}
// 	}

// 	const onChange = e => setText (e.target.value); 

// 	return (
// 		<div>
// 			<form className='form' onSubmit={onSubmit}>
// 				<input 
// 					type='text' 
// 					name='text' 
// 					placeholder='Search Users...' 
// 					value={text} 
// 					onChange={onChange}
// 				/>
// 				<input 
// 					type='submit' 
// 					value='Search' 
// 					className='btn btn-dark btn-block' 
// 				/> 
// 			</form>
// 			{showClear && (	
// 				<button className='btn btn-light btn-block' onClick={clearUsers}>
// 					Clear 
// 				</button>
// 			)}
// 		</div>
// 	);
	
// }

// Search.propTypes = {
// 	searchUsers: PropTypes.func.isRequired,
// 	clearUsers: PropTypes.func.isRequired,
// 	showClear: PropTypes.bool.isRequired,
// 	setAlert: PropTypes.func.isRequired
// }

// export default Search;





//******************************************************************************************************************************************
//
//       VERSION 1
//
//******************************************************************************************************************************************


// export class Search extends Component {
// 	state = {
// 		text: ''
// 	};

// 	// this is static because its in a class method
// 	static propTypes = {
// 		searchUsers: PropTypes.func.isRequired,
// 		clearUsers: PropTypes.func.isRequired,
// 		showClear: PropTypes.bool.isRequired,
// 		setAlert: PropTypes.func.isRequired
// 	}

// 	onChange = (e) => {
// 		this.setState({ [e.target.name]: e.target.value })			// same as 'this.setState({ text: e.target.value })' except it will work for anything
// 	}

// 	onSubmit = (e) => {
// 		e.preventDefault();

// 		if (this.state.text === '') {
// 			this.props.setAlert('Please enter some search parameters...', 'light');
// 		}
// 		else {
// 			this.props.searchUsers(this.state.text); 		// this is passed up to App.js as props
// 			this.setState({ text: '' });
// 		}
// 	}

// 	render() {
// 		const { showClear, clearUsers } = this.props;

// 		return (
// 			<div>
// 				<form className='form' onSubmit={this.onSubmit}>
// 					<input 
// 						type='text' 
// 						name='text' 
// 						placeholder='Search Users...' 
// 						value={this.state.text} 
// 						onChange={this.onChange}
// 					/>
// 					<input 
// 						type='submit' 
// 						value='Search' 
// 						className='btn btn-dark btn-block' 
// 					/> 
// 				</form>
// 				{showClear && (	
// 					<button className='btn btn-light btn-block' onClick={clearUsers} >
// 						Clear 
// 					</button>
// 				)}
// 			</div>
// 		);
// 	}
// }