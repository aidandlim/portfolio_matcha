import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { chat_current } from '../../../actions';

import Message from './message';

import { FaTimesCircle, FaRegTrashAlt } from "react-icons/fa";
import './index.css';
import DetailPull from '../../util/pull/detailPull';

const Chat = () => {
	const chat = useSelector(state => state.chat);
	const dispatch = useDispatch();

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
				<Message direction={0} content={'This is a Japanese doll.'} />
				<Message direction={1} content={'He didn\'t want to go to the dentist, yet he went anyway.'} />
				<Message direction={0} content={'She works two jobs to make ends meet; at least, that was her reason for not having time to join us.'} />
				<Message direction={1} content={'Don\'t step on the broken glass.'} />
			</div>
			<div className='chat-footer'>
				<textarea className='chat-footer-input'></textarea>
				<div className='chat-footer-submit'>SEND</div>
			</div>
		</div>
	);
}

export default Chat;
