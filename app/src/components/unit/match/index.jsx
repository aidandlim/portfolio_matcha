import React from 'react';

import { useSelector } from 'react-redux';

import Card from './card';
import Detail from './detail';

import './index.css';

const Match = () => {
	const match = useSelector(state => state.match);

	return (
		<div className='match'>
			{!match.isDetail ? <Card /> : <Detail />}
		</div>
	);
}

export default Match;
