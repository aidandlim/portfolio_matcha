import React from 'react';

import { useSelector } from 'react-redux';

import Card from '../../function/card';
import Detail from '../../function/detail';

import './index.css';

const Match = () => {
	const match = useSelector(state => state.match);

	return (
		<div className='match'>
			{match.isDetail ? <Detail /> : <Card />}
		</div>
	);
}

export default Match;
