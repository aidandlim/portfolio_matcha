import React from 'react';

import { useSelector } from 'react-redux';

import Push from '../../function/push';

import Profile3 from '../../../resources/profile3.jpeg';
import Profile4 from '../../../resources/profile4.jpeg';
import Profile5 from '../../../resources/profile5.jpeg';
import './index.css';

const Notification = () => {
	const ui = useSelector(state => state.ui);

	return (
		<div className={ui.notification ? 'notification notification-active' : 'notification'}>
			<Push picture={Profile3} content={'Luke Kim unlikes your profile.'} time={'13:07'}/>
			<Push picture={Profile4} content={'Luke Kim likes your profile.'} time={'13:03'}/>
			<Push picture={Profile5} content={'Luke Kim visits your profile.'} time={'13:01'}/>
		</div>
	);
}

export default Notification;
