import React from 'react';

import { useSelector } from 'react-redux';

import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react';
import { KEY } from '../../api';

import './index.css';

const Map = (props) => {
    const map = useSelector(state => state.map);

	return (
		<GoogleMap
			className='map'
			google={props.google}
			zoom={12}
			initialCenter={{ lat: map.center.latitude, lng: map.center.longitude }}
		>
		</GoogleMap>
	);
}

export default GoogleApiWrapper({
	apiKey: KEY
  })(Map);
