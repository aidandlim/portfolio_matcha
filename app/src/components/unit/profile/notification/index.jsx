import React from 'react';

import { useSelector } from 'react-redux';

import Alert from '../../../util/alert';

import '../index.css';

const Notification = () => {
	const user = useSelector(state => state.user);

	const _handleConstruction = () => {
		Alert(0, 'Sorry. This feature is under construction', 'Okay', null, null);
	}

	return (
		<div className='profile-container'>
			<div className='profile-title'>Notification</div>
			<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
			<div className='profile-section'>
				<div className='profile-notification-title'>Email</div>
				<div className={user.data.notification ? 'profile-notification-toggle-active' : 'profile-notification-toggle'}>
					<div className={user.data.notification ? 'profile-notification-toggle-button-active' : 'profile-notification-toggle-button'}></div>
				</div>
				<div className='profile-notification-title'>Push</div>
				<div className={user.data.notification ? 'profile-notification-toggle-active' : 'profile-notification-toggle'} onClick={ () => _handleConstruction() }>
					<div className={user.data.notification ? 'profile-notification-toggle-button-active' : 'profile-notification-toggle-button'}></div>
				</div>
				<div className='profile-notification-title'>SMS</div>
				<div className={user.data.notification ? 'profile-notification-toggle-active' : 'profile-notification-toggle'} onClick={ () => _handleConstruction() }>
					<div className={user.data.notification ? 'profile-notification-toggle-button-active' : 'profile-notification-toggle-button'}></div>
				</div>
			</div>
		</div>
	);
}

export default Notification;