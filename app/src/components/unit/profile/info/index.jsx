import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { user_data, user_isComplete } from '../../../../actions';

import axios from 'axios';

// import Alert from '../../../util/alert';

import '../index.css';

const Info = () => {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const _handleForm = (e) => {
		e.preventDefault();

		const data = {
			first_name: document.profile_info.first_name.value,
			last_name: document.profile_info.last_name.value,
			birth_year: document.profile_info.birth_year.value,
			gender: document.profile_info.gender.value,
			preference_gender: document.profile_info.preference_gender.value,
		};

		axios.put('/users', data)
		.then(res => {
			if(res.data) {
				let result = user.data;
				result.first_name = data.first_name;
				result.last_name = data.last_name;
				result.birth_year = data.birth_year;
				result.gender = data.gender;
				result.preference_gender = data.preference_gender;
				dispatch(user_data(result));
				if(result.picture1 !== '' && result.first_name !== '' && result.last_name !== '' && result.address !== '') {
					dispatch(user_isComplete(true));
				} else {
					dispatch(user_isComplete(false));
				}
			} else {
				//
			}
		});
	}

	return (
		<div className='profile-container'>
			<div className='profile-title'>User Information</div>
			<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
			<div className='profile-section'>
				<form name='profile_info' onSubmit={_handleForm}>
					<input type='text' className='profile-input profile-input-first' name='first_name' defaultValue={user.data.first_name} placeholder='First Name' />
					<input type='text' className='profile-input profile-input-first' name='last_name' defaultValue={user.data.last_name} placeholder='Last Name' />
					<input type='text' className='profile-input profile-input-first profile-input-last' name='birth_year' defaultValue={user.data.birth_year} placeholder='Birth Year' />
					<input type='text' className='profile-input' name='gender' defaultValue={user.data.gender} placeholder='Gender' />
					<input type='text' className='profile-input' name='preference_gender' defaultValue={user.data.preference_gender} placeholder='Preference Gender' />
					<input type='submit' className='profile-submit' value='UPDATE' />
				</form>
			</div>
		</div>
	);
}

export default Info;