import React from 'react';

import { useDispatch } from 'react-redux';
import { ui_isLogin, ui_isRegister } from '../../../actions';

import './index.css';

const Signup = () => {
	const dispatch = useDispatch();

	const _handleForm = (e) => {
		e.preventDefault();
	}

	const _handleLogin = () => {
		dispatch(ui_isRegister(false));
		dispatch(ui_isLogin(true));
	}

	return (
		<div className='signup'>
			<div className='title'>M@TCH@</div>
			<div className='signup-container'>
				<form name='signup' onSubmit={_handleForm}>
					<input className='signup-input' type='email' name='email' placeholder='Email' />
					<input className='signup-input' type='password' name='password' placeholder='Password' />
					<input className='signup-input' type='password' name='confirm' placeholder='Confirm password' />
					<input className='signup-input' type='text' name='nickname' placeholder='Nickname' />
					<input className='signup-input' type='text' name='firstname' placeholder='First Name' />
					<input className='signup-input' type='text' name='lastname' placeholder='Last Name' />
					...
					<input className='signup-button' type='submit' value='Sign up' />
				</form>
				<p className='signup-extra' onClick={ () => _handleLogin() }>Do you have an account? Sign in!</p>
			</div>
		</div>
	);
}

export default Signup;
