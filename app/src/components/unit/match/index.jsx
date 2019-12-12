import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Card from './card';

import './index.css';

const Match = () => {
	const [matches, setMatches] = useState({});

	useEffect(() => {
		axios.get('/matches')
		.then((res) => {
			setMatches(res.data);
		});
	}, []);

	return (
		<div className='match'>
			{ matches.id !== undefined ? <Card matches={matches}/> : '' }
			{ matches.id === undefined ? <div className='match-inactive'>Sorry for uncomfortable.<br />There is no valid match card!</div> : ''}
		</div>
	);
}

export default Match;
