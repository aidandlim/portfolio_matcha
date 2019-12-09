import React from 'react';

import Picture from './picture';
import Email from './email';
import Password from './password';
import Info from './info';
import Location from './location';
import Bio from './bio';
import Myself from './myself';
import Preference from './preference';
import Notification from './notification';
import Theme from './theme';
import Close from './close';

import './index.css';

const Profile = () => {
	return (
		<div className='frame'>
			<div className='frame-header'>
				<div className='frame-title'>PROFILE</div>
			</div>
			<div className='frame-body'>
				<Picture />
				<Email />
				<Password />
				<Info />
				<Location />
				<Bio />
				<Myself />
				<Preference />
				<Notification />
				<Theme />
				<Close />
			</div>
		</div>
	);
}

export default Profile;
