import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Card from './card';

import './index.css';

const Match = () => {
	const [matches, setMatches] = useState({ id: -1 });

	useEffect(() => {
		axios.get('/matches')
		.then((res) => {
			console.log(res.data);
			if(res.data.length !== 0) {
				setMatches(res.data[0]);
				_handleAppears(res.data[0].id);
			} else {
				setMatches({ id: -1 });
			}
		});
	}, []);

	const _handleNewMatches = () => {
		axios.get('/matches')
		.then((res) => {
			if(res.data.length !== 0) {
				setMatches(res.data[0]);
				_handleAppears(res.data[0].id);
			} else {
				setMatches({ id: -1 });
			}
		});
	}
	
	const _handleAppears = (id) => {
		axios.post('appears', { to: id });
	}

	return (
		<div className='match'>
			{ matches.id !== -1 ? <Card matches={matches} setMatches={setMatches} newMatches={_handleNewMatches}/> : '' }
			{ matches.id === -1 ? <div className='match-inactive'>Sorry for uncomfortable.<br />There is no valid match card!</div> : ''}
		</div>
	);
}

export default Match;
