import React from 'react';

import Message from '../message';

import './index.css';

const Dashboard = () => {
	return (
		<div className='dashboard'>
			<div className='dashboard-header'>Hello, Aidan Lim.</div>
			<div className='dashboard-body'>
				<Message />
			</div>
		</div>
	);
}

export default Dashboard;
