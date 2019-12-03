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
				<div className='profile-title'>Picture</div>
				<div className='profile-description'>I currently have 4 windows open up… and I don’t know why.</div>
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
				<div className='profile-title'>Email</div>
				<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
				<div className='profile-section'>
					<input type='email' className='profile-input' />
					<input type='button' className='profile-submit' value='UPDATE' />
				</div>
			</div>
		</div>
	);
}

export default Profile;
