import React from 'react';

import { useSelector } from 'react-redux';

import './index.css';

const Notification = () => {
	const ui = useSelector(state => state.ui);

	return (
		<div className={ui.notification ? 'notification notification-active' : 'notification'}>
			
		</div>
	);
}

export default Notification;
