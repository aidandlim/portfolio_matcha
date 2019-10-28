import React from 'react';

import { useSelector } from 'react-redux';

import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react';
import { API_KEY } from '../../../const';

import './index.css';

const Map = (props) => {
	let map = useSelector(state => state.map);

	const _handleOnload = () => {
		console.log('here');
	}

	return (
		<GoogleMap
			className='map-viewer'
			google={props.google}
			zoom={12}
			initialCenter={{ lat: map.latitude, lng: map.longitude }}
			onReady={_handleOnload}
		>
		</GoogleMap>
	);
}

export default GoogleApiWrapper({
	apiKey: API_KEY
  })(Map);
