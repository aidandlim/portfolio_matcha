import React from 'react';

import { useDispatch } from 'react-redux';
import { auth_landingStatus } from '../../../actions';

import axios from 'axios';

import alert from '../alert';
import './index.css';

const Forgot = () => {
	const dispatch = useDispatch();
	
	const _handleForm = (e) => {
		console.log('Forgot > _handleForm');
		e.preventDefault();

		const data = {
			email: document.signup.email.value
		};

		axios.post('/user/forgot', {
			data
		})
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
			<input className='signin-input' type='email' name='email' placeholder='email' required />
			<input className='signin-submit' type='submit' value='submit' />
			<input className='signin-button' type='button' value='back' onClick={ () => dispatch(auth_landingStatus(0)) } />
		</form>
	);
}

export default Forgot;
