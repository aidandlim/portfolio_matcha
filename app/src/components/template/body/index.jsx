import React from 'react';

import { useSelector } from 'react-redux';

import Match from '../../function/match';
import Search from '../../function/search';
import Chat from '../../function/chat';
import Notification from '../../function/notification';

import './index.css';

const Body = () => {
	const ui = useSelector(state => state.ui);

	return (
		<div className='body'>
			{ui.nav === 1 ? <Match /> : ''}
			{ui.nav === 2 ? <Search /> : ''}
			{ui.nav === 3 ? <Chat /> : ''}
			{ui.nav === 4 ? <Notification /> : ''}
		</div>
	);
}

export default Body;
