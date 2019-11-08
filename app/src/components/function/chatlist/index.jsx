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
		<div className='chatlist' onClick={ () => _handleCurrentChat() }>
			<div className={chat.current === props.id ? 'chatlist-picture chatlist-picture-active' : 'chatlist-picture'} style={{
				backgroundImage: 'url(\'' + props.picture + '\')'
			}}></div>
		</div>
	);
}

export default Chatlist;
