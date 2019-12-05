import React from 'react';

import axios from 'axios';

// import Alert from '../../../util/alert';

import '../index.css';

const Bio = () => {

	const _handleForm = (e) => {
		e.preventDefault();

		const data = {
			bio: document.profile_bio.bio.value
		};

		axios.put('/users/bio', data)
		.then(res => {
			if(res.data) {
				// 
			} else {
				//
			}
		});
	}

	return (
		<div className='profile-container'>
			<div className='profile-title'>Bio</div>
			<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
			<div className='profile-section'>
				<form name='profile_bio' onSubmit={_handleForm}>
					<textarea type='text' className='profile-textarea' name='bio' />
					<input type='submit' className='profile-submit' value='UPDATE' />
				</form>
			</div>
		</div>
	);
}

export default Bio;