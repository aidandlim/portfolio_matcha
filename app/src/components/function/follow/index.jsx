import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { chat_current } from '../../../actions';

import './index.css';

const Follow = (props) => {
	const chat = useSelector(state => state.chat);
	const dispatch = useDispatch();

	const _handleCurrentChat = () => {
		dispatch(chat_current(props.id));
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
