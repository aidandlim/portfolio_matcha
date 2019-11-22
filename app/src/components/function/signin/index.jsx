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

		axios.get('/users/signin', data)
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

		axios.post('/user/resend', {
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
			<div className='signin-title'>Hello, Welcome to M@TCH@!</div>
			<div className='signin-description'>What was the person thinking when they discovered cow’s milk was fine for human consumption… and why did they do it in the first place!?</div>
			<label className='signin-label'>
				<span>Email</span>
				<input className='signin-input' type='email' name='email' required />
			</label>
			<label className='signin-label'>
				<span>Password</span>
				<input className='signin-input' type='password' name='password' required />
			</label>
			<input className='signin-submit' type='submit' value='SUBMIT' />
			<input className='signin-button' type='button' value='SIGNUP' onClick={ () => dispatch(auth_landingStatus(2)) } />
			<input className='signin-button' type='button' value='FORGOT PASSWORD' onClick={ () => dispatch(auth_landingStatus(3)) } />
		</form>
	);
}

export default Signin;
