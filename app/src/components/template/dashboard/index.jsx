import React from 'react';

import Profile from '../../function/profile';
import Picture from '../../function/picture';
import Notification from '../../function/notification';
import Overview from '../../function/overview';
import Theme from '../../function/theme';

import './index.css';

const Dashboard = () => {
	return (
		<div className='dashboard'>
			<Profile />
			<Picture />
			<Notification />
			<Overview />
			<Theme />
		</div>
	);
}

export default Dashboard;
