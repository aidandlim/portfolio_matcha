import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { chat_current } from '../../../actions';

import axios from 'axios';

import Message from './message';

import { FaTimesCircle, FaRegTrashAlt } from "react-icons/fa";
import './index.css';
import DetailPull from '../../util/pull/detailPull';

const Chat = () => {
	const [messages, setMessages] = useState([]);
	const chat = useSelector(state => state.chat);
	const dispatch = useDispatch();

	useEffect(() => {
		if(chat.current !== -1) {
			const data = {
				type: 'all',
				target: chat.list[chat.current].id
			}
			axios.get('/messages', { params: data })
			.then((res) => {
				setMessages(res.data);
			});
		}
	}, [chat]);

	const _handleDetail = () => {
		DetailPull(dispatch, chat.list[chat.current].id);
	}
	
	return (
		<div className={chat.current === -1 ? 'chat' : 'chat chat-active'}>
			<div className='chat-header'>
				<div className='chat-header-name' onClick={ () => _handleDetail() }>{chat.current !== -1 ? `${chat.list[chat.current].first_name} ${chat.list[chat.current].last_name}` : ''}</div>
				<FaRegTrashAlt className='chat-header-remove' />
				<FaTimesCircle className='chat-header-exit' onClick={ () => dispatch(chat_current(-1)) } />
			</div>
			<div className='chat-body'>
				{messages.map((message, index) => 
					<Message message={message} key={index} />	
				)}
			</div>
			<div className='chat-footer'>
				<textarea className='chat-footer-input'></textarea>
				<div className='chat-footer-submit'>SEND</div>
			</div>
		</div>
	);
}

export default Chat;
