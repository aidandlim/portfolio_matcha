import React from 'react';

import Chatlist from '../../function/chatlist';

import { FaSearch } from "react-icons/fa";
import './index.css';

const Chat = () => {
	return (
		<div className='chat'>
			<div className='chat-search'>
				<FaSearch className='chat-search-icon' />
				<input className='chat-search-input' type='text' placeholder='Search...' />
			</div>
			<div className='chat-container'>
				<Chatlist id={0} name={'Aidan Lim'} picture={'something'} message={'hello there Good morning!'} />
				<Chatlist id={1} name={'Luke Kim'} picture={'something'} message={'안녕하세요! 김길순입니다.'} />
				<Chatlist id={2} name={'Areum Kim'} picture={'something'} message={'Hi'} />
			</div>
		</div>
	);
}

export default Chat;

/*
<p>chat list</p>
<p>chat core</p>
<p>- visual alert</p>
<p>- sound alert</p>
<p>- badge</p>
<p>- sticker</p>
<p>- voice message</p>
<p>- facetime?</p>
*/
