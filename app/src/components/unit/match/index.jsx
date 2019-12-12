import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { match_data } from '../../../actions';

import axios from 'axios';

import Card from './card';
import Detail from './detail';

import './index.css';

const Match = () => {
	const match = useSelector(state => state.match);
	const dispatch = useDispatch();

	useEffect(() => {
		axios.get('/matches')
		.then((res) => {
			dispatch(match_data(res.data));
		});
	}, []);

	return (
		<div className='match'>
			{ match.data.id !== undefined && !match.isDetail ? <Card /> : '' }
			{ match.data.id !== undefined && match.isDetail ? <Detail /> : '' }
			{ match.data.id === undefined ? <div className='match-inactive'>Sorry for uncomfortable.<br />There is no valid match card!</div> : ''}
		</div>
	);
}

export default Match;
