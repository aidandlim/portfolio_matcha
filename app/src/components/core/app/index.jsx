import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { map_center, map_address } from '../../../actions';

import axios from 'axios';
import { KEY } from '../../../api';

import Cover from '../cover';
import Landing from '../landing';
import Application from '../application';

import Wrapper from 'react-div-100vh';

import './index.css';

const App = () => {
	const map = useSelector(state => state.map);
	const dispatch = useDispatch();
	
	if(map.center.latitude === 0 && map.center.longitude === 0) {
		console.log('GPS Connection is processing...');
        navigator.geolocation.getCurrentPosition((position) => {
			dispatch(map_center({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			}));
			axios.get('https://maps.googleapis.com/maps/api/geocode/json?language=en&latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&key=' + KEY)
			.then((res) => {
				let data = res.data.plus_code.compound_code.split(' ');
				let address = '';
				for(let i = 1; i < data.length; i++) {
					address += i + 1 === data.length ? data[i] : data[i] + ' ';
				}
				setTimeout(() => {
					dispatch(map_address(address));
				}, 1500);
			});
		});
	}

	return (
		<Wrapper className='app no-drag'>
			<Landing />
			<Application />
			{ map.address === '' ? <Cover /> : '' }
		</Wrapper>
	);
}

export default App;
