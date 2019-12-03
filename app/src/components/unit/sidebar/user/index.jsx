import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ui_notification, chat_current } from '../../../../actions';

import '../index.css';

const User = (props) => {
	const ui = useSelector(state => state.ui);
	const chat = useSelector(state => state.chat);
	const dispatch = useDispatch();

	const _handleCurrentChat = () => {
		if(!ui.notification) {
			dispatch(chat_current(props.id));
		} else {
			dispatch(ui_notification(false));
			setTimeout(() => {
				dispatch(chat_current(props.id));
			}, 500);
		}
	}

	return (
		<div className='sidebar-user' onClick={ () => _handleCurrentChat() }>
			<div className={chat.current === props.id ? 'sidebar-user-picture sidebar-user-picture-active' : 'sidebar-user-picture'} style={{
				backgroundImage: 'url(\'' + props.picture + '\')'
			}}></div>
		</div>
	);
}

export default User;