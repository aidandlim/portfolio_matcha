import React from 'react';

import { useDispatch } from 'react-redux';
import { auth_landingStatus } from '../../../actions';

import axios from 'axios';

import alert from '../alert';

const Forgot = () => {
	const dispatch = useDispatch();
	
	const _handleForm = (e) => {
		console.log('Forgot > _handleForm');
		e.preventDefault();

		const data = {
			email: document.signup.email.value
		};

		axios.post('/user/forgot', data)
		.then(res => {
			if(res.data) {
				alert(0, 'check your email', 'Okay', null, null);
			} else {
				alert(0, 'email is invalid', 'Okay', null, null);
			}
		});
	}

	return (
		<form name='forgot' onSubmit={_handleForm}>
			<div className='signin-title'>Have you forgotten your password?</div>
			<div className='signin-description'>What was the person thinking when they discovered cow’s milk was fine for human consumption… and why did they do it in the first place!?</div>
			<label className='signin-label'>
				<span>Email</span>
				<input className='signin-input' type='email' name='email' required/>
			</label>
			<input className='signin-submit' type='submit' value='SUBMIT' />
			<input className='signin-button' type='button' value='BACK' onClick={ () => dispatch(auth_landingStatus(1)) } />
		</form>
	);
}

export default Forgot;
