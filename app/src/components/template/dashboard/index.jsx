import React from 'react';

import { useSelector } from 'react-redux';

import Profile from '../../function/profile';
import Preference from '../../function/preference';
import Notification from '../../function/notification';
import Overview from '../../function/overview';
import Theme from '../../function/theme';

import './index.css';

const Dashboard = () => {
	const ui = useSelector(state => state.ui);

	let color = '';

	if(ui.color === 0) // Red
		color = '#e74c3c';
	else if(ui.color === 1) // Orange
		color = '#e67e22';
	else if(ui.color === 2) // Yellow
		color = '#f39c12';
	else if(ui.color === 3) // Green
		color = '#27ae60';
	else if(ui.color === 4) // Blue
		color = '#2980b9';
	else if(ui.color === 5) // Navy
		color = '#34495e';
	else if(ui.color === 6) // Purple
		color = '#8e44ad';

	let dashboardTitleTextColor = color + 'e6';
	let dashboardTitleColor = color + '80';
	let dashboardHeaderColor = color + '1a';

	return (
		<div className='dashboard'>
			<style>{`
				:root {
					--dashboard-title-text-color: ${dashboardTitleTextColor};
					--dashboard-title-color: ${dashboardTitleColor};
					--dashboard-header-color: ${dashboardHeaderColor};
				}
			`}
			</style>
			<Profile />
			<Preference />
			<Notification />
			<Overview />
			<Theme />
		</div>
	);
}

export default Dashboard;
