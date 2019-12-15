import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { chat_current } from '../../../actions';

import axios from 'axios';
import { socket } from '../../template/core';

import Message from './message';

import ScrollToBottom from 'react-scroll-to-bottom';

import { FaTimesCircle } from "react-icons/fa";
import './index.css';
import DetailPull from '../../util/pull/detailPull';
import ChatMessagesPull from '../../util/pull/chatMessagesPull';

const Chat = () => {
	const [message, setMessage] = useState('');
	const user = useSelector(state => state.user);
	const chat = useSelector(state => state.chat);
	const dispatch = useDispatch();

	useEffect(() => {
		if(chat.current !== -1) {
			axios.put('/messages', { from: chat.list[chat.current].id, to : user.data.id });
		}
	}, [chat, user.data.id]);

	const _handleForm = (e) => {
		e.preventDefault();

		socket.emit('message', user.data.id, chat.list[chat.current].id, message, (result) => {
			if(result === -1) {
				// session is invalid
			} else {
				// console.log(`Message call is success!`);
				ChatMessagesPull(dispatch, chat.list[chat.current].id);
			}
		});
		setMessage('');
	}

	const _handleDetail = () => {
		DetailPull(dispatch, chat.list[chat.current].id);
		dispatch(chat_current(-1));
	}

	return (
		<div className={chat.current === -1 ? 'chat' : 'chat chat-active'}>
			<div className='chat-header'>
				<div className='chat-header-name' onClick={ () => _handleDetail() }>{chat.current !== -1 ? `${chat.list[chat.current].first_name} ${chat.list[chat.current].last_name}` : ''}</div>
				<FaTimesCircle className='chat-header-exit' onClick={ () => dispatch(chat_current(-1)) } />
			</div>
			<ScrollToBottom className='chat-body'>
				{chat.messages.map((message, index) => 
					<Message message={message} key={index} />	
				)}
			</ScrollToBottom>
			<div className='chat-footer'>
				<form onSubmit={_handleForm}>
					<input className='chat-footer-input' type='text' value={message} onChange={(event) => setMessage(event.target.value)} />
					<input className='chat-footer-submit' type='submit' value='SEND' />
				</form>
			</div>
		</div>
	);
}

export default Chat;
