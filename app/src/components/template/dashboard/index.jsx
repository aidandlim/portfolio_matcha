import React from 'react';

import Profile from '../../function/profile';
import Overview from '../../function/overview';
import Theme from '../../function/theme';

import './index.css';

const Dashboard = () => {
	return (
		<div className='dashboard'>
			<Profile />
			<Overview />
			<Theme />
		</div>
	);
}

export default Dashboard;
