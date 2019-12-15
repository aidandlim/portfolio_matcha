import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ui_notification, chat_current } from '../../../../actions';

import { IMAGE } from '../../../../api';

import '../index.css';

const User = ({ user, index }) => {
	const ui = useSelector(state => state.ui);
	const chat = useSelector(state => state.chat);
	const dispatch = useDispatch();

	const _handleCurrentChat = () => {
		if(!ui.notification) {
			dispatch(chat_current(index));
		} else {
			dispatch(ui_notification(false));
			setTimeout(() => {
				dispatch(chat_current(index));
			}, 500);
		}
	}

	return (
		<div className='sidebar-user' onClick={ () => _handleCurrentChat() }>
			<div className={chat.current === index ? 'sidebar-user-picture sidebar-user-picture-active' : 'sidebar-user-picture'} style={{
				backgroundImage: `url('${IMAGE}${user.picture1}')`
			}}>
				<div className='sidebar-user-online'></div>
			</div>
		</div>
	);
}

export default User;