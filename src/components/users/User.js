import React, { Fragment, useEffect, useContext } from 'react'; 
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos'; 
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
	
	const githubContext = useContext(GithubContext);
	const { getUser, user, loading, repos, getUserRepos } = githubContext;

	useEffect(() => {
		getUser(match.params.login);
		getUserRepos(match.params.login);
		// eslint-disable-next-line
	}, []);
 
	const { name, avatar_url, location, bio, blog, login, html_url, company, followers, following, public_repos, public_gists, hireable } = user;

	if (loading) {
		return <Spinner />
	}
	else {
		return (
			<Fragment>
				<Link to='/' className='btn btn-light'>Back</Link>
				Hireable: {' '}
				{hireable ?  <i className='fas fa-check text-success'/> :  <i className='fas fa-times-circle text-danger'/> }
				<div className='card grid-2'>
					<div className='all-center'>
						<img src={avatar_url} className='round-img' style={{width: '150px'}} alt='' />
						<h1>{name}</h1>
						<p>Location: {location}</p>
					</div>
					<div>
						{bio && (
							<Fragment>
								<h3>Bio:</h3>
								<p>{bio}</p>
							</Fragment>
						)}
						<a href={html_url} className='btn btn-dark my-1'>Github Profile</a>
						<ul>
							<li>
								{login && <Fragment>
									<strong>Username: </strong> {login}
								</Fragment>}
							</li>
							<li>
								{company && <Fragment>
									<strong>Company: </strong> {company}
								</Fragment>}
							</li>
							<li>
								{blog && <Fragment>
									<strong>Website: </strong> <a href={blog}>{blog}</a>
								</Fragment>}
							</li>
						</ul>
					</div>
				</div> 
				<div className='card text-center'>
					<div className='badge badge-primary'>Followers: {followers}</div>
					<div className='badge badge-success'>Following: {following}</div>
					<div className='badge badge-light'>Public Repos: {public_repos}</div>
					<div className='badge badge-dark'>Public Gists: {public_gists}</div>
				</div>
				<Repos repos={repos} />
			</Fragment>
		)
	}
}  

export default User;


//******************************************************************************************************************************************
//
//       VERSION 2
//
//******************************************************************************************************************************************

// const User = ({ user, loading, repos, getUser, getUserRepos, match }) => {
	
// 	useEffect(() => {
// 		getUser(match.params.login);
// 		getUserRepos(match.params.login);
// 		// eslint-disable-next-line
// 	}, []);

// 	const { name, avatar_url, location, bio, blog, login, html_url, company, followers, following, public_repos, public_gists, hireable } = user;

// 	if (loading) {
// 		return <Spinner />
// 	}
// 	else {
// 		return (
// 			<Fragment>
// 				<Link to='/' className='btn btn-light'>Back</Link>
// 				Hireable: {' '}
// 				{hireable ?  <i className='fas fa-check text-success'/> :  <i className='fas fa-times-circle text-danger'/> }
// 				<div className='card grid-2'>
// 					<div className='all-center'>
// 						<img src={avatar_url} className='round-img' style={{width: '150px'}} alt='' />
// 						<h1>{name}</h1>
// 						<p>Location: {location}</p>
// 					</div>
// 					<div>
// 						{bio && (
// 							<Fragment>
// 								<h3>Bio:</h3>
// 								<p>{bio}</p>
// 							</Fragment>
// 						)}
// 						<a href={html_url} className='btn btn-dark my-1'>Github Profile</a>
// 						<ul>
// 							<li>
// 								{login && <Fragment>
// 									<strong>Username: </strong> {login}
// 								</Fragment>}
// 							</li>
// 							<li>
// 								{company && <Fragment>
// 									<strong>Company: </strong> {company}
// 								</Fragment>}
// 							</li>
// 							<li>
// 								{blog && <Fragment>
// 									<strong>Website: </strong> <a href={blog}>{blog}</a>
// 								</Fragment>}
// 							</li>
// 						</ul>
// 					</div>
// 				</div> 
// 				<div className='card text-center'>
// 					<div className='badge badge-primary'>Followers: {followers}</div>
// 					<div className='badge badge-success'>Following: {following}</div>
// 					<div className='badge badge-light'>Public Repos: {public_repos}</div>
// 					<div className='badge badge-dark'>Public Gists: {public_gists}</div>
// 				</div>
// 				<Repos repos={repos} />
// 			</Fragment>
// 		)
// 	}
// }

// User.propTypes = {
// 	loading: PropTypes.bool,
// 	user: PropTypes.object.isRequired,
// 	repos: PropTypes.array.isRequired,
// 	getUser: PropTypes.func.isRequired,
// 	getUserRepos: PropTypes.func.isRequired
// }

// export default User;




//******************************************************************************************************************************************
//
//       VERSION 1
//
//******************************************************************************************************************************************


// class User extends Component {
// 	componentDidMount() {
// 		this.props.getUser(this.props.match.params.login);
// 		this.props.getUserRepos(this.props.match.params.login);
// 	}

// 	static propTypes = {
// 		loading: PropTypes.bool,
// 		user: PropTypes.object.isRequired,
// 		repos: PropTypes.array.isRequired,
// 		getUser: PropTypes.func.isRequired,
// 		getUserRepos: PropTypes.func.isRequired
// 	}

// 	render() {
// 		const { name, avatar_url, location, bio, blog, login, html_url, company, followers, following, public_repos, public_gists, hireable } = this.props.user;
// 		const { loading, repos } = this.props; 	

// 		if (loading) {
// 			return <Spinner />
// 		}
// 		else {
// 			return (
// 				<Fragment>
// 					<Link to='/' className='btn btn-light'>Back</Link>
// 					Hireable: {' '}
// 					{hireable ?  <i className='fas fa-check text-success'/> :  <i className='fas fa-times-circle text-danger'/> }
// 					<div className='card grid-2'>
// 						<div className='all-center'>
// 							<img src={avatar_url} className='round-img' style={{width: '150px'}} alt='' />
// 							<h1>{name}</h1>
// 							<p>Location: {location}</p>
// 						</div>
// 						<div>
// 							{bio && (
// 								<Fragment>
// 									<h3>Bio:</h3>
// 									<p>{bio}</p>
// 								</Fragment>
// 							)}
// 							<a href={html_url} className='btn btn-dark my-1'>Github Profile</a>
// 							<ul>
// 								<li>
// 									{login && <Fragment>
// 										<strong>Username: </strong> {login}
// 									</Fragment>}
// 								</li>
// 								<li>
// 									{company && <Fragment>
// 										<strong>Company: </strong> {company}
// 									</Fragment>}
// 								</li>
// 								<li>
// 									{blog && <Fragment>
// 										<strong>Website: </strong> <a href={blog}>{blog}</a>
// 									</Fragment>}
// 								</li>
// 							</ul>
// 						</div>
// 					</div> 
// 					<div className='card text-center'>
// 						<div className='badge badge-primary'>Followers: {followers}</div>
// 						<div className='badge badge-success'>Following: {following}</div>
// 						<div className='badge badge-light'>Public Repos: {public_repos}</div>
// 						<div className='badge badge-dark'>Public Gists: {public_gists}</div>
// 					</div>
// 					<Repos repos={repos} />
// 				</Fragment>
// 			)
// 		}
// 	}
// }