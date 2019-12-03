import React from 'react';

import '../index.css';

const Location = () => {
	return (
		<div className='profile-container'>
			<div className='profile-title'>Location</div>
			<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
			<div className='profile-section'>
				<input type='password' className='profile-input' placeholder='Zip Code' />
				<input type='button' className='profile-submit' value='UPDATE' />
			</div>
		</div>
	);
}

export default Location;