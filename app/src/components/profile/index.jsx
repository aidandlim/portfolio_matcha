import React from 'react';

import Profile1 from '../../resources/profile1.jpeg';
import Profile2 from '../../resources/profile2.jpeg';
import Profile3 from '../../resources/profile3.jpeg';

import { FaPlusCircle } from 'react-icons/fa';

import './index.css';

const Profile = () => {
	return (
		<div className='frame'>
			<div className='frame-header'>
				<div className='frame-title'>PROFILE</div>
			</div>
			<div className='frame-body'>
				<div className='profile'>
					<div className='profile-section'>
						<div className='profile-image' style={{
							backgroundImage: 'url(\'' + Profile1 + '\')'
						}}></div>
						<div className='profile-image' style={{
							backgroundImage: 'url(\'' + Profile2 + '\')'
						}}></div>
						<div className='profile-image' style={{
							backgroundImage: 'url(\'' + Profile3 + '\')'
						}}></div>
						<div className='profile-image profile-image-none'>
							<FaPlusCircle className='profile-image-none-icon' />
						</div>
						<div className='profile-image profile-image-none'>
							<FaPlusCircle className='profile-image-none-icon' />
						</div>
					</div>
					<div className='profile-section'>
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
				</div>
			</div>
		</div>
	);
}

export default Profile;
