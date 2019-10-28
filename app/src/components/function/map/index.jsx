import React from 'react';

import { useSelector } from 'react-redux';

import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react';
import { API_KEY } from '../../../const';

import './index.css';

const Map = (props) => {
	let map = useSelector(state => state.map);

	const _handleOnload = () => {
		setTimeout(() => {
			if(document.getElementById('cover') !== null)
				document.getElementById('cover').style.opacity = 0;
		}, 1000);
		setTimeout(() => {
			if(document.getElementById('cover') !== null) {
				document.getElementById('cover').style.display = 'none';
				document.getElementById('cover').style.opacity = 1;
			}
		}, 2000);
	}

	return (
		<GoogleMap
			className='map'
			google={props.google}
			zoom={12}
			initialCenter={{ lat: map.center.latitude, lng: map.center.longitude }}
			onReady={_handleOnload}
		>
		</GoogleMap>
	);
}

export default GoogleApiWrapper({
	apiKey: API_KEY
  })(Map);