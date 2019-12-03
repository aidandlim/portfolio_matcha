import React from 'react';

import '../index.css';

const Info = () => {
	return (
		<div className='profile-container'>
			<div className='profile-title'>User Information</div>
			<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
			<div className='profile-section'>
				<input type='text' className='profile-input profile-input-first' placeholder='First Name' />
				<input type='text' className='profile-input profile-input-first' placeholder='Last Name' />
				<input type='text' className='profile-input profile-input-first profile-input-last' placeholder='Birth Year' />
				<input type='text' className='profile-input' placeholder='Gender' />
				<input type='text' className='profile-input' placeholder='Preference' />
				<input type='button' className='profile-submit' value='UPDATE' />
			</div>
		</div>
	);
}

export default Info;