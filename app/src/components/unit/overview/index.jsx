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
	const [blocks, setBlocks] = useState([]);

	const _handleNav = (index) => {
		setNav(index);
	}

	useEffect(() => {
		axios.get('/overviews')
		.then((res) => {
			if(res.data) {
				console.log(res);
				const graph = [
					{
						id: res.data[0].type,
						data: [
							{
								'x': _handleDate(6),
								'y': res.data[0].date1
							},
							{
								'x': _handleDate(5),
								'y': res.data[0].date2
							},
							{
								'x': _handleDate(4),
								'y': res.data[0].date3
							},
							{
								'x': _handleDate(3),
								'y': res.data[0].date4
							},
							{
								'x': _handleDate(2),
								'y': res.data[0].date5
							},
							{
								'x': _handleDate(1),
								'y': res.data[0].date6
							},
							{
								'x': _handleDate(0),
								'y': res.data[0].date7
							}
						]
					},
					{
						id: res.data[1].type,
						data: [
							{
								'x': _handleDate(6),
								'y': res.data[1].date1
							},
							{
								'x': _handleDate(5),
								'y': res.data[1].date2
							},
							{
								'x': _handleDate(4),
								'y': res.data[1].date3
							},
							{
								'x': _handleDate(3),
								'y': res.data[1].date4
							},
							{
								'x': _handleDate(2),
								'y': res.data[1].date5
							},
							{
								'x': _handleDate(1),
								'y': res.data[1].date6
							},
							{
								'x': _handleDate(0),
								'y': res.data[1].date7
							}
						]
					},
					{
						id: res.data[2].type,
						data: [
							{
								'x': _handleDate(6),
								'y': res.data[2].date1
							},
							{
								'x': _handleDate(5),
								'y': res.data[2].date2
							},
							{
								'x': _handleDate(4),
								'y': res.data[2].date3
							},
							{
								'x': _handleDate(3),
								'y': res.data[2].date4
							},
							{
								'x': _handleDate(2),
								'y': res.data[2].date5
							},
							{
								'x': _handleDate(1),
								'y': res.data[2].date6
							},
							{
								'x': _handleDate(0),
								'y': res.data[2].date7
							}
						]
					},
					{
						id: res.data[3].type,
						data: [
							{
								'x': _handleDate(6),
								'y': res.data[3].date1
							},
							{
								'x': _handleDate(5),
								'y': res.data[3].date2
							},
							{
								'x': _handleDate(4),
								'y': res.data[3].date3
							},
							{
								'x': _handleDate(3),
								'y': res.data[3].date4
							},
							{
								'x': _handleDate(2),
								'y': res.data[3].date5
							},
							{
								'x': _handleDate(1),
								'y': res.data[3].date6
							},
							{
								'x': _handleDate(0),
								'y': res.data[3].date7
							}
						]
					},
				];
				setGraphData(graph);
			}
		});
		
		const data = {
			type: 'follow'
		}

		axios.get('/likes', { params : data })
		.then((res) => {
			if(res.data) {
				setFollowers(res.data.user);
				setFollowing(res.data.other);
			}
		});

		axios.get('/blocks')
		.then((res) => {
			if(res.data) {
				setBlocks(res.data);
			}
		});
	  }, []);

	const _handleDate = (diff) => {
		let date = new Date();

		date.setTime(date.getTime() - diff * 24 * 60 * 60 * 1000);
		const month = date.getMonth() + 1; 
		const day = date.getDate();

		return month + '/' + day;
	}

	return (
		<div className='frame'>
			<div className='frame-header'>
				<div className='frame-title'>OVERVIEW</div>
			</div>
			<Nav nav={nav} setNav={_handleNav} followers={followers} following={following} blocks={blocks} />
			<div className='frame-body-hasNav'>
				{ nav === 0 ? <Graph graphData={graphData} /> : '' }
				{ nav === 1 ? <Follow follows={followers} /> : '' }
				{ nav === 2 ? <Follow follows={following} /> : '' }
				{ nav === 3 ? <Follow follows={blocks} /> : '' }
			</div>
		</div>
	);
}

export default Overview;
