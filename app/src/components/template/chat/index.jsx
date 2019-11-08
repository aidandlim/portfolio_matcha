import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { chat_current } from '../../../actions';

import Message from '../../function/message';

import { FaTimesCircle } from "react-icons/fa";
import './index.css';

const Chat = () => {
	const ui = useSelector(state => state.ui);
	const chat = useSelector(state => state.chat);
	const dispatch = useDispatch();

	let headerColor = '';

	if(ui.color === 0) // Red
		headerColor = '#e74c3ccc';
	else if(ui.color === 1) // Orange
		headerColor = '#e67e22cc';
	else if(ui.color === 2) // Yellow
		headerColor = '#f39c12cc';
	else if(ui.color === 3) // Green
		headerColor = '#27ae60cc';
	else if(ui.color === 4) // Blue
		headerColor = '#2980b9cc';
	else if(ui.color === 5) // Navy
		headerColor = '#34495ecc';
	else if(ui.color === 6) // Purple
		headerColor = '#8e44adcc';

	let bodyColor = '';

	if(ui.color === 0) // Red
		bodyColor = '#e74c3c1a';
	else if(ui.color === 1) // Orange
		bodyColor = '#e67e221a';
	else if(ui.color === 2) // Yellow
		bodyColor = '#f39c121a';
	else if(ui.color === 3) // Green
		bodyColor = '#27ae601a';
	else if(ui.color === 4) // Blue
		bodyColor = '#2980b91a';
	else if(ui.color === 5) // Navy
		bodyColor = '#34495e1a';
	else if(ui.color === 6) // Purple
		bodyColor = '#8e44ad1a';

	let footerColor = '';

	if(ui.color === 0) // Red
		footerColor = '#e74c3c33';
	else if(ui.color === 1) // Orange
		footerColor = '#e67e2233';
	else if(ui.color === 2) // Yellow
		footerColor = '#f39c1233';
	else if(ui.color === 3) // Green
		footerColor = '#27ae6033';
	else if(ui.color === 4) // Blue
		footerColor = '#2980b933';
	else if(ui.color === 5) // Navy
		footerColor = '#34495e33';
	else if(ui.color === 6) // Purple
		footerColor = '#8e44ad33';

	return (
		<div className={chat.current === -1 ? 'chat' : 'chat chat-active'}>
			<div className='chat-header' style={{
				backgroundColor: headerColor
			}}>
				<div className='chat-header-name'>Aidan Lim</div>
				<FaTimesCircle className='chat-header-exit' onClick={ () => dispatch(chat_current(-1)) } />
			</div>
			<div className='chat-body' style={{
				backgroundColor: bodyColor
			}}>
				<Message direction={0} content={'This is a Japanese doll.'} />
				<Message direction={1} content={'He didn\'t want to go to the dentist, yet he went anyway.'} />
				<Message direction={0} content={'She works two jobs to make ends meet; at least, that was her reason for not having time to join us.'} />
				<Message direction={1} content={'Don\'t step on the broken glass.'} />
			</div>
			<div className='chat-footer' style={{
				backgroundColor: footerColor
			}}>
				<textarea className='chat-footer-input'></textarea>
				<div className='chat-footer-submit' style={{
					backgroundColor: headerColor
				}}>SEND</div>
			</div>
		</div>
	);
}

export default Chat;
