import React from 'react';

import { useSelector } from 'react-redux';

import Matching from '../../function/matching';
import Searching from '../../function/searching';
import Chatting from '../../function/chatting';
import Notification from '../../function/notification';
import Cover from '../cover';

import './index.css';

const Body = () => {
	const ui = useSelector(state => state.ui);

	return (
		<div className='body'>
			{ui.nav === 1 ? <Matching /> : ''}
			{ui.nav === 2 ? <Searching /> : ''}
			{ui.nav === 3 ? <Chatting /> : ''}
			{ui.nav === 4 ? <Notification /> : ''}
			<Cover />
		</div>
	);
}

export default Body;
