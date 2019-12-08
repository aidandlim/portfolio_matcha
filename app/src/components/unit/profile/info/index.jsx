import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { user_data } from '../../../../actions';

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
			preference: document.profile_info.preference.value,
		};

		axios.put('/users', data)
		.then(res => {
			if(res.data) {
				let result = user.data;
				result.first_name = data.first_name;
				result.last_name = data.last_name;
				result.birth_year = data.birth_year;
				result.gender = data.gender;
				result.preference = data.preference;
				dispatch(user_data(result));
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
					<input type='text' className='profile-input' name='preference' defaultValue={user.data.preference} placeholder='Preference' />
					<input type='submit' className='profile-submit' value='UPDATE' />
				</form>
			</div>
		</div>
	);
}

export default Info;