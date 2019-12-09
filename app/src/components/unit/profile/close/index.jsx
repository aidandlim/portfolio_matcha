import React from 'react';

import '../index.css';

const Close = () => {
	return (
		<div className='profile-container'>
			<div className='profile-title'>Close Account</div>
			<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
			<div className='profile-section'>
				<form onSubmit={_handleForm}>
					<input type='submit' className='profile-submit' value='CLOSE MY ACCOUNT' />
				</form>
			</div>
		</div>
	);
}

export default Close;