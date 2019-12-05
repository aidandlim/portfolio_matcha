import React from 'react';

import axios from 'axios';

import Alert from '../../../util/alert';

import '../index.css';

const Password = () => {

	const _handleForm = (e) => {
		e.preventDefault();

		const data = {
			password: document.profile_password.password.value
		};

		if(_handlePasswordCheck() === 0) {
			axios.put('/users/password', data)
			.then(res => {
				if(res.data) {
					// 
				} else {
					//
				}
			});
		} else {
			Alert(0, 'Password is not valid', 'Okay', null, null);
		}
	}

	const _handlePasswordCheck = () => {
		const password = document.profile_password.password.value;
		const confirm = document.profile_password.confirm.value;

		const pattern1 = /[0-9]/;
        const pattern2 = /[a-zA-Z]/;
		const pattern3 = /[~!@#$%<>^&*]/;

		let error = 0;
		
		if(!(8 <= password.length && password.length <= 20)) {
			error++;
		}

		if(!pattern1.test(password) || !pattern2.test(password) || !pattern3.test(password)) {
			error++;
		}

		if(password === '' || password !== confirm) {
			error++;
		}

		return error;
	}

	return (
		<div className='profile-container'>
			<div className='profile-title'>Password</div>
			<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
			<div className='profile-section'>
				<form name='profile_password' onSubmit={_handleForm}>
					<input type='password' className='profile-input' name='password' placeholder='New Password' />
					<input type='password' className='profile-input' name='confirm' placeholder='Confirm Password' />
					<input type='submit' className='profile-submit' value='UPDATE' />
				</form>
			</div>
		</div>
	);
}

export default Password;