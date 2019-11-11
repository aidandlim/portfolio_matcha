import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { chat_current } from '../../../actions';

import Message from '../../function/message';

import { FaTimesCircle, FaRegTrashAlt } from "react-icons/fa";
import './index.css';

const Chat = () => {
	const ui = useSelector(state => state.ui);
	const chat = useSelector(state => state.chat);
	const dispatch = useDispatch();

	let color = '';

	if(ui.color === 0) // Red
		color = '#e74c3c';
	else if(ui.color === 1) // Orange
		color = '#e67e22';
	else if(ui.color === 2) // Yellow
		color = '#f39c12';
	else if(ui.color === 3) // Green
		color = '#27ae60';
	else if(ui.color === 4) // Blue
		color = '#2980b9';
	else if(ui.color === 5) // Navy
		color = '#34495e';
	else if(ui.color === 6) // Purple
		color = '#8e44ad';

	let containerColor = color + '12';
	let headerColor = color + 'cc';
	let bodyColor = color + '1a';
	let footerColor = color + '33';
	
	return (
		<div className={chat.current === -1 ? 'chat' : 'chat chat-active'} style={{
			backgroundColor: containerColor
		}}>
			<div className='chat-header' style={{
				backgroundColor: headerColor
			}}>
				<div className='chat-header-name'>Aidan Lim</div>
				<FaRegTrashAlt className='chat-header-remove' />
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
