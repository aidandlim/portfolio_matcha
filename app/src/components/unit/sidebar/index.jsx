import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ui_notification, chat_current } from '../../../actions';

import User from './user';

import { FaBell } from 'react-icons/fa';
import './index.css';

const Sidebar = () => {
	const ui = useSelector(state => state.ui);
	const chat = useSelector(state => state.chat);
	const dispatch = useDispatch();

	const _handleNotification = () => {
		if(chat.current === -1) {
			dispatch(ui_notification(ui.notification ? false : true));
		} else {
			dispatch(chat_current(-1));
			setTimeout(() => {
				dispatch(ui_notification(ui.notification ? false : true));
			}, 500);
		}
	}

	return (
		<div className='sidebar'>
			<FaBell className={ ui.notification ? 'sidebar-notification sidebar-notification-active' : 'sidebar-notification' } onClick={() => _handleNotification()} />
			{chat.list.map((chat, index) => 
				<User id={index} data={chat} />
			)}
			</div>
	);
}

export default Sidebar;
