import React from 'react';

import Profile from '../../function/profile';
import Preference from '../../function/preference';
import Notification from '../../function/notification';
import Overview from '../../function/overview';
import Theme from '../../function/theme';

import './index.css';

const Dashboard = () => {
	return (
		<div className='dashboard'>
			<Profile />
			<Preference />
			<Notification />
			<Overview />
			<Theme />
		</div>
	);
}

export default Dashboard;
