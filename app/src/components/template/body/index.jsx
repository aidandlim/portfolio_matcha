import React from 'react';

import { useSelector } from 'react-redux';

import Navigation from '../../frame/navigation';
import Matching from '../../frame/matching';
import Chatting from '../../frame/chatting';
import Searching from '../../frame/searching';

import './index.css';

const Body = () => {
	const ui = useSelector(state => state.ui);

	return (
		<div className='body'>
			{ui.nav === 0 ? <Navigation /> : ''}
			{ui.nav === 1 ? <Matching /> : ''}
			{ui.nav === 2 ? <Searching /> : ''}
			{ui.nav === 3 ? <Chatting /> : ''}
		</div>
	);
}

export default Body;
