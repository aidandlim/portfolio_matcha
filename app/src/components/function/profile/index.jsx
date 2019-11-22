import React from 'react';

import './index.css';

const Profile = () => {
	return (
		<div className='dashboard-default'>
			<div className='dashboard-header'>
				PROFILE
			</div>
			<div className='profile-container'>
				<label className='profile-label'>
					<span>Email</span>
					<input className='profile-input' type='email' name='email' />
				</label>
				<label className='profile-label'>
					<span>Password</span>
					<input className='profile-input' type='password' name='password' />
				</label>
				<label className='profile-label'>
					<span>Confirm Password</span>
					<input className='profile-input' type='password' name='confirm' />
				</label>
			</div>
			<div className='profile-container'>
				<label className='profile-label'>
					<span>First Name</span>
					<input className='profile-input' type='text' name='firstName' />
				</label>
				<label className='profile-label'>
					<span>Last Name</span>
					<input className='profile-input' type='text' name='lastName' />
				</label>
				<label className='profile-label'>
					<span>Birth Year</span>
					<input className='profile-input' type='text' name='' />
				</label>
			</div>
			<div className='profile-container'>
				<label className='profile-label'>
					<span>Gender</span>
					<input className='profile-input' type='text' name='' />
				</label>
				<label className='profile-label'>
					<span>Preference</span>
					<input className='profile-input' type='text' name='' />
				</label>
				<label className='profile-label'>
					<span>Address</span>
					<input className='profile-input' type='text' name='address' />
				</label>
			</div>
			<input className='profile-submit' type='submit' value='UPDATE' />
		</div>
	);
}

export default Profile;
