import React from 'react';

import { useDispatch } from 'react-redux';
import { auth_isLogin, auth_landingStatus } from '../../../actions';

import axios from 'axios';

import alert from '../alert';
import './index.css';

const Signin = () => {
	const dispatch = useDispatch();

	const _handleForm = (e) => {
		console.log('Signin > _handleForm');
		e.preventDefault();

		const data = {
			email: document.signin.email.value,
			password: document.signin.password.value,
		};

		axios.post('/user/signin', {
			data
		})
		.then(res => {
			if(res.data === 1) {
				console.log('signin success');
				dispatch(auth_landingStatus(0));
				dispatch(auth_isLogin(true));
			} else if(res.data === 2) {
				alert(0, 'email is invalid', 'Okay', null, null);
			} else if(res.data === 3) {
				alert(0, 'password is invalid', 'Okay', null, null);
			} else if(res.data === 4) {
				alert(1, 'non-verifying is invalid', 'Okay', 'Request resend email', _handleResendVerifyingEmail);
			}
		});
	}

	const _handleResendVerifyingEmail = () => {
		console.log('Signin > _handleResendVerifyingEmail');

		const data = {
			email: document.signin.email.value
		};

		axios.post('/user/verify', {
			data
		})
		.then(res => {
			if(res.data) {
				alert(0, 'email has been sent', 'Okay', null, null);
			} else {
				alert(0, 'email is invalid', 'Okay', null, null);
			}
		});
	}

	return (
		<form name='signin' onSubmit={_handleForm}>
			<input className='signin-input' type='email' name='email' placeholder='email' required />
			<input className='signin-input' type='password' name='password' placeholder='password' required />
			<input className='signin-submit' type='submit' value='submit' />
			<input className='signin-button' type='button' value='signup' onClick={ () => dispatch(auth_landingStatus(1)) } />
			<input className='signin-button' type='button' value='forgot password' onClick={ () => dispatch(auth_landingStatus(2)) } />
		</form>
	);
}

export default Signin;
