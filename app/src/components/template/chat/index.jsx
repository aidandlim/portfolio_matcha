import React from 'react';

import Chatlist from '../../function/chatlist';

import { FaSearch } from "react-icons/fa";
import './index.css';

const Chat = () => {
	return (
		<div className='default chat'>
			<div className='chat-list'>
				<div className='chat-search'>
					<FaSearch className='chat-search-icon' />
					<input className='chat-search-input' type='text' placeholder='Search...' />
				</div>
				<div className='chat-container'>
					<Chatlist />
					<Chatlist />
					<Chatlist />
					<Chatlist />
					<Chatlist />
					<Chatlist />
					<Chatlist />
					<Chatlist />
					<Chatlist />
					<Chatlist />
					<Chatlist />
					<Chatlist />
				</div>
			</div>
			<p>chat list</p>
			<p>chat core</p>
			<p>- visual alert</p>
			<p>- sound alert</p>
			<p>- badge</p>
			<p>- sticker</p>
			<p>- voice message</p>
			<p>- facetime?</p>
		</div>
	);
}

export default Chat;
