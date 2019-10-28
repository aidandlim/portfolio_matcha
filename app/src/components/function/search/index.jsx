import React from 'react';

import { useSelector } from 'react-redux';

import { Map as GoogleMap, GoogleApiWrapper, Marker } from 'google-maps-react';

import './index.css';

const Map = (props) => {
	let map = useSelector(state => state.map);

	return (
		<GoogleMap
			className='map-viewer'
			google={props.google}
			zoom={12}
			initialCenter={{ lat: map.latitude, lng: map.longitude }}
		>
			<Marker position={{ lat: (map.latitude - 0.05), lng: (map.longitude - 0.05) }} />
		</GoogleMap>
	);
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyCI7BWkl3-w8ZLw7fGAG-OYI4VsQngk1vk'
  })(Map);
