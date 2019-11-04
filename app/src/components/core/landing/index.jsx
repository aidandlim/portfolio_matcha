import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { auth_isLogin } from '../../../actions';

import './index.css';

const Landing = () => {
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if(!auth.isLogin) {
			setTimeout( () => {
				document.querySelector('.landing').className = 'landing active'
			}, 500);
		} else {
			document.querySelector('.landing').className = 'landing'
		}
	});

	return (
		<div className='landing'>
			<button onClick={ () => dispatch(auth_isLogin(true)) }>Getting Started</button>
		</div>
	);
}

export default Landing;
