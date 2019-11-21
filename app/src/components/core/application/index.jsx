import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { map_center, map_address } from '../../../actions';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import axios from 'axios';
import { KEY } from '../../../api';

import Nav from '../../template/nav';
import Dashboard from '../../template/dashboard';
import Match from '../../template/match';
import Search from '../../template/search';
import Chat from '../../template/chat';
import Sidebar from '../../template/sidebar';

import './index.css';

const Application = () => {
	const chat = useSelector(state => state.chat);
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
		<Router>
			<div className='application'>
				<Nav />
				<div className={chat.current === -1 ? 'default' : 'default default-active'}>
					<Switch>
						<Route path='/' exact component={Dashboard} />
						<Route path='/match' component={Match} />
						<Route path='/search' component={Search} />
					</Switch>
				</div>
				<Chat />
				<Sidebar />
			</div>
		</Router>
	);
}

export default Application;
