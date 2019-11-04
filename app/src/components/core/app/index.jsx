import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { map_center } from '../../../actions';

import Landing from '../landing';
import Application from '../application';

import Wrapper from 'react-div-100vh';

import './index.css';

const App = () => {
	const map = useSelector(state => state.map);
	const dispatch = useDispatch();
	
	if(map.center.latitude === 0 && map.center.longitude === 0) {
        navigator.geolocation.getCurrentPosition((position) => {
			dispatch(map_center({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			}));
		});
	}

	return (
		<Wrapper className='app no-drag'>
			<Landing />
			<Application />
		</Wrapper>
	);
}

export default App;
