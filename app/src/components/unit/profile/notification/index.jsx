import React from 'react';

import '../index.css';

const Notification = () => {
	return (
		<div className='profile-container'>
			<div className='profile-title'>Notification</div>
			<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
			<div className='profile-section'>
				<div className='profile-setting-title'>Email Notification</div>
				<div className='profile-setting-toggle'>
					<div className='profile-setting-toggle-button'></div>
				</div>
			</div>
		</div>
	);
}

export default Notification;