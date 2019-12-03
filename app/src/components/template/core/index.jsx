import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { map_center, map_address, auth_isComplete } from '../../../actions';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import axios from 'axios';
import { KEY } from '../../../api';

import Nav from '../../unit/nav';
import Sidebar from '../../unit/sidebar';
import Chat from '../../unit/chat';
import Notification from '../../unit/notification';

import Profile from '../../unit/profile';
import Overview from '../../unit/overview';
import Match from '../../unit/match';
import Search from '../../unit/search';

import './index.css';

const Core = () => {
	const auth = useSelector(state => state.auth);
	const ui = useSelector(state => state.ui);
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
			<div className='core'>
				<Nav />
				<div className={chat.current === -1 && !ui.notification ? 'default' : 'default default-active'}>
					<Switch>
						<Route path='/' exact component={Profile} />
						{auth.isComplete ? <Route path='/overview' exact component={Overview} /> : ''}
						{auth.isComplete ? <Route path='/match' component={Match} /> : ''}
						{auth.isComplete ? <Route path='/search' component={Search} /> : ''}
					</Switch>
					{!auth.isComplete ? <div className='announcement' onClick={ () => dispatch(auth_isComplete(true)) }>After you have completed your profile, you will be able to access a matching service.</div> : '' }
				</div>
				<Chat />
				<Notification />
				<Sidebar />
			</div>
		</Router>
	);
}

export default Core;
