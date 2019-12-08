import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { user_data } from '../../../../actions';

import axios from 'axios';

import Alert from '../../../util/alert';

import '../index.css';

const Email = () => {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const _handleForm = (e) => {
		e.preventDefault();

		const data = {
			email: document.profile_email.email.value
		};

		axios.put('/users/email', data)
		.then(res => {
			if(res.data) {
				dispatch(user_data({}));
				Alert(0, 'Email has updated. Sign in Again!', 'Okay', null, null);
			} else {
				Alert(0, 'Email is invalid', 'Okay', null, null);
			}
		});
	}

	return (
		<div className='profile-container'>
			<div className='profile-title'>Email</div>
			<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
			<div className='profile-section'>
				<form name='profile_email' onSubmit={_handleForm}>
					<input type='email' className='profile-input' name='email' defaultValue={user.data.email} placeholder='Email' />
					<input type='submit' className='profile-submit' value='UPDATE' />
				</form>
			</div>
		</div>
	);
}

export default Email;