import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ui_notification, chat_current } from '../../../actions';

import './index.css';

const Follow = (props) => {
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
		<div className='follow' onClick={ () => _handleCurrentChat() }>
			<div className={chat.current === props.id ? 'follow-picture follow-picture-active' : 'follow-picture'} style={{
				backgroundImage: 'url(\'' + props.picture + '\')'
			}}></div>
		</div>
	);
}

export default Follow;
