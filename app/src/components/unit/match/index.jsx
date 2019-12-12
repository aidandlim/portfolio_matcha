import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import axios from 'axios';

import Card from './card';
import Detail from './detail';

import './index.css';

const Match = () => {
	const match = useSelector(state => state.match);

	const [matches, setMatches] = useState({});

	useEffect(() => {
		axios.get('/matches')
		.then((res) => {
			setMatches(res.data);
		});
	}, []);

	return (
		<div className='match'>
			{ matches.id !== undefined && !match.isDetail ? <Card matches={matches}/> : '' }
			{ matches.id !== undefined && match.isDetail ? <Detail matches={matches} /> : '' }
			{ matches.id === undefined ? <div className='match-inactive'>Sorry for uncomfortable.<br />There is no valid match card!</div> : ''}
		</div>
	);
}

export default Match;
