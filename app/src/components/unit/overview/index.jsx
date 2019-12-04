import React from 'react';

import { ResponsiveLine } from '@nivo/line';

import './index.css';

const Overview = (props) => {
	const _handleDate = (diff) => {
		let date = new Date();

		date.setTime(date.getTime() - diff * 24 * 60 * 60 * 1000);
		const month = date.getMonth() + 1; 
		const day = date.getDate();

		return month + '/' + day;
	}
	
	const data = [
		{
			'id': 'Unlike',
			'data': [
				{
					'x': _handleDate(6),
					'y': 2
				},
				{
					'x': _handleDate(5),
					'y': 0
				},
				{
					'x': _handleDate(4),
					'y': 0
				},
				{
					'x': _handleDate(3),
					'y': 1
				},
				{
					'x': _handleDate(2),
					'y': 3
				},
				{
					'x': _handleDate(1),
					'y': 1
				},
				{
					'x': _handleDate(0),
					'y': 1
				},
			]
		},
		{
			'id': 'Like',
			'color': 'hsl(321, 70%, 50%)',
			'data': [
				{
					'x': _handleDate(6),
					'y': 5
				},
				{
					'x': _handleDate(5),
					'y': 2
				},
				{
					'x': _handleDate(4),
					'y': 4
				},
				{
					'x': _handleDate(3),
					'y': 2
				},
				{
					'x': _handleDate(2),
					'y': 7
				},
				{
					'x': _handleDate(1),
					'y': 2
				},
				{
					'x': _handleDate(0),
					'y': 1
				},
			]
		},
		{
			'id': 'Visit',
			'color': 'hsl(321, 70%, 50%)',
			'data': [
				{
					'x': _handleDate(6),
					'y': 20
				},
				{
					'x': _handleDate(5),
					'y': 18
				},
				{
					'x': _handleDate(4),
					'y': 13
				},
				{
					'x': _handleDate(3),
					'y': 7
				},
				{
					'x': _handleDate(2),
					'y': 17
				},
				{
					'x': _handleDate(1),
					'y': 10
				},
				{
					'x': _handleDate(0),
					'y': 3
				},
			]
		},
		{
			'id': 'Appear',
			'color': 'hsl(321, 70%, 50%)',
			'data': [
				{
					'x': _handleDate(6),
					'y': 32
				},
				{
					'x': _handleDate(5),
					'y': 40
				},
				{
					'x': _handleDate(4),
					'y': 15
				},
				{
					'x': _handleDate(3),
					'y': 14
				},
				{
					'x': _handleDate(2),
					'y': 33
				},
				{
					'x': _handleDate(1),
					'y': 19
				},
				{
					'x': _handleDate(0),
					'y': 7
				},
			]
		},
	];

	return (
		<div className='frame'>
			<div className='frame-header'>
				<div className='frame-title'>OVERVIEW</div>
			</div>
			<div className='frame-body'>
				<ResponsiveLine
					data={data}
					margin={{ top: 50, right: 100, bottom: 50, left: 50 }}
					xScale={{ type: 'point' }}
					yScale={{ type: 'linear', stacked: false, min: 'auto', max: 'auto' }}
					colors={{ scheme: 'nivo' }}
					curve='linear'
					animate={false}
					lineWidth={5}
					pointSize={10}
					pointColor='white'
					pointBorderWidth={2}
					pointBorderColor={{ from: 'serieColor' }}
					enableArea={true}
        			areaOpacity={0.1}
					legends={[
						{
							anchor: 'bottom-right',
							direction: 'column',
							justify: false,
							translateX: 100,
							translateY: 0,
							itemsSpacing: 0,
							itemDirection: 'left-to-right',
							itemWidth: 80,
							itemHeight: 20,
							symbolSize: 12,
							symbolShape: 'circle',
							symbolBorderColor: 'rgba(0, 0, 0, .5)'
						}
					]}
				/>
			</div>
		</div>
	);
}

export default Overview;
