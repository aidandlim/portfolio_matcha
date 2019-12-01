import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { map_center, map_address } from '../../actions';

import axios from 'axios';
import { KEY } from '../../api';

import alert from '../alert';
import Connection from '../../resources/connection.gif';
import './index.css';

const Cover = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		setTimeout(() => {
			if(document.getElementById('cover-input') !== null)
				document.getElementById('cover-input').style.display = 'block';
		}, 10000);
	}, []);

	const _handleZipCode = () => {
		const zipcode = document.getElementById('cover-input').value;

		if(zipcode.length === 5) {
			axios.get('https://maps.googleapis.com/maps/api/geocode/json?language=en&address=' + zipcode + '&key=' + KEY)
			.then((res) => {
				console.log(res.data);
				if(res.data.status === 'ZERO_RESULTS') {
					alert(0, 'zipcode is invalid', 'Okay', null, null);
					document.getElementById('cover-input').value = '';
				} else {
					let data = res.data.results[0].formatted_address.split(' ');
					let address = '';
					for(let i = 0; i < data.length; i++) {
						if(i !== data.length - 2)
							address += i + 1 === data.length ? data[i] : (i === data.length - 3 ? data[i] + ', ' : data[i] + ' ');
					}
					dispatch(map_center({
						latitude: res.data.results[0].geometry.location.lat,
						longitude: res.data.results[0].geometry.location.lng,
					}));
					dispatch(map_address(address));
				}
			});
		}
	}

	return (
		<div className='cover'>
			<div  className='cover-container'>
				<div className='cover-icon' style={{
					backgroundImage: 'url(\'' + Connection + '\')'
				}}></div>
				<div className='cover-description'>We are trying to connect to GPS.</div>
				<input id='cover-input' type='number' placeholder='Please enter your Zip Code.'  onChange={() => _handleZipCode()} />
			</div>
		</div>
	);
}

export default Cover;
