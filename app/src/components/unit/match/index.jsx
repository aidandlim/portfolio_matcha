import React from 'react';

import { useSelector } from 'react-redux';

import Card from './card';
import Detail from './detail';

import './index.css';

const Match = () => {
	const match = useSelector(state => state.match);

	return (
		<div className='match'>
			{ match.data.id !== undefined && !match.isDetail ? <Card /> : '' }
			{ match.data.id !== undefined && match.isDetail ? <Detail /> : '' }
			{ match.data.id === undefined ? <div className='match-inactive'>Sorry for uncomfortable.<br />There is no valid match card!</div> : ''}
		</div>
	);
}

export default Match;
