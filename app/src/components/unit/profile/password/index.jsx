import React from 'react';

import '../index.css';

const Password = () => {
	return (
		<div className='profile-container'>
			<div className='profile-title'>Password</div>
			<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
			<div className='profile-section'>
				<input type='password' className='profile-input' placeholder='New Password' />
				<input type='password' className='profile-input' placeholder='Confirm Password' />
				<input type='button' className='profile-submit' value='UPDATE' />
			</div>
		</div>
	);
}

export default Password;