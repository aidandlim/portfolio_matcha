import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { map_latitude, map_longitude } from '../../../actions';

import Landing from '../landing';
import Header from '../header';
import Body from '../body';
import Footer from '../footer';

import Wrapper from 'react-div-100vh';

import './index.css';

const App = () => {
	const ui = useSelector(state => state.ui);
	const map = useSelector(state => state.map);
	const dispatch = useDispatch();

	if(map.latitude === -1 && map.longitude === -1) {
		navigator.geolocation.getCurrentPosition((position) => {
			dispatch(map_latitude(position.coords.latitude));
			dispatch(map_longitude(position.coords.longitude));
		});
	}

	return (
		<Wrapper className='app no-drag'>
			{ ui.nav === 0 ? <Landing /> : ''}
			{ ui.nav !== 0 ? <Header /> : ''}
			{ ui.nav !== 0 ? <Body /> : ''}
			{ ui.nav !== 0 ? <Footer /> : ''}
		</Wrapper>
	);
}

export default App;
