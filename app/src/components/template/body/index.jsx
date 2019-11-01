import React from 'react';

import { useSelector } from 'react-redux';

import Matching from '../../frame/matching';
import Searching from '../../frame/searching';

import './index.css';

const Body = () => {
	const ui = useSelector(state => state.ui);

	return (
		<div className='body'>
			{ui.nav === 0 ? <Matching /> : ''}
			{ui.nav === 1 ? <Searching /> : ''}
		</div>
	);
}

export default Body;
