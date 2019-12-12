import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { user_data } from '../../../../actions';

import axios from 'axios';

import '../index.css';

const Filter = () => {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const _handleForm = (e) => {
		e.preventDefault();

		const data = {
			preference_min_age: document.profile_filter.preference_min_age.value,
			preference_max_age: document.profile_filter.preference_max_age.value,
			preference_max_distance: document.profile_filter.preference_max_distance.value,
		};

		axios.put('/users/filters', data)
		.then(res => {
			if(res.data) {
				let result = user.data;
				result.preference_min_age = data.preference_min_age;
				result.preference_max_age = data.preference_max_age;
				result.preference_max_distance = data.preference_max_distance;
				dispatch(user_data(result));
			} else {
				//
			}
		});
	}

	return (
		<div className='profile-container'>
			<div className='profile-title'>Filter</div>
			<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
			<div className='profile-section'>
				<form name='profile_filter' onSubmit={_handleForm}>
					<input type='number' className='profile-input' name='preference_min_age' defaultValue={user.data.preference_min_age} placeholder='Mininum Age' />
					<input type='number' className='profile-input' name='preference_max_age' defaultValue={user.data.preference_max_age} placeholder='Maximum Age' />
					<input type='number' className='profile-input profile-input-last' name='preference_max_distance' defaultValue={user.data.preference_max_distance} placeholder='Maximum Distance' />
					<input type='submit' className='profile-submit' value='UPDATE' />
				</form>
			</div>
		</div>
	);
}

export default Filter;