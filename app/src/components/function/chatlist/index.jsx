import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { chat_current } from '../../../actions';

import './index.css';

const Chatlist = (props) => {
	const chat = useSelector(state => state.chat);
	const dispatch = useDispatch();

	const _handleCurrentChat = () => {
		dispatch(chat_current(props.id));
	}

	return (
		<div className={chat.current === props.id ? 'chatlist chatlist-active' : 'chatlist'} onClick={ () => _handleCurrentChat() }>
			<div className='chatlist-picture' style={{
				backgroundImage: 'url(\'' + props.picture + '\')'
			}}></div>
			<div className='chatlist-name'>{props.name}</div>
			<div className='chatlist-message'>{props.message}</div>
		</div>
	);
}

export default Chatlist;
