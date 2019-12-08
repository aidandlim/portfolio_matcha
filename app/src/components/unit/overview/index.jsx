import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Nav from './nav';
import Graph from './graph';
import Follow from './follow';

import './index.css';

const Overview = () => {
	const [nav, setNav] = useState(0);
	const [graphData, setGraphData] = useState([]);
	const [followers, setFollowers] = useState([]);
	const [following, setFollowing] = useState([]);

	const _handleNav = (index) => {
		setNav(index);
	}

	useEffect(() => {
		axios.get('/overviews')
		.then((res) => {
			if(res.data) {
				console.log(res.data);
				setGraphData(res.data);
			}
		});
		axios.get('/likes')
		.then((res) => {
			if(res.data) {
				console.log(res.data);
				setFollowers(res.data.user);
				setFollowing(res.data.other);
			}
		});
	  }, []);

	return (
		<div className='frame'>
			<div className='frame-header'>
				<div className='frame-title'>OVERVIEW</div>
			</div>
			<div className='frame-body'>
				<Nav nav={nav} setNav={_handleNav} followers={followers} following={following} />
				{ nav === 0 ? <Graph graphData={graphData} /> : '' }
				{ nav === 1 ? <Follow follows={followers} /> : '' }
				{ nav === 2 ? <Follow follows={following} /> : '' }
			</div>
		</div>
	);
}

export default Overview;

	/*
	const _handleDate = (diff) => {
		let date = new Date();

		date.setTime(date.getTime() - diff * 24 * 60 * 60 * 1000);
		const month = date.getMonth() + 1; 
		const day = date.getDate();

		return month + '/' + day;
	}
	*/
