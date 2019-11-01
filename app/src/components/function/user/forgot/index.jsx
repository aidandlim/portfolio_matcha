import React from 'react';

import { useDispatch } from 'react-redux';
import { ui_isLogin, ui_isForgot } from '../../../actions';

import './index.css';

const Forgot = () => {
	const dispatch = useDispatch();

	const _handleForm = (e) => {
		e.preventDefault();
	}

	const _handleLogin = () => {
		dispatch(ui_isForgot(false));
		dispatch(ui_isLogin(true));
	}

	return (
		<div className='forgot'>
			<div className='title'>M@TCH@</div>
			<div className='forgot-container'>
				<form name='forgot' onSubmit={_handleForm}>
					<input className='forgot-input' type='email' name='email' placeholder='Email' />
					<input className='forgot-button' type='submit' value='Find your password' />
				</form>
				<p className='forgot-extra' onClick={ () => _handleLogin() }>Do you remember your password? Sign in!</p>
			</div>
		</div>
	);
}

export default Forgot;
