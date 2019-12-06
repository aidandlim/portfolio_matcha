import React from 'react';

import { useSelector } from 'react-redux';

import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react';
import { KEY } from '../../../../api';

import '../index.css';

const Map = (props) => {
    const user = useSelector(state => state.user);

	return (
		<GoogleMap
			className='search-map'
			google={props.google}
			zoom={12}
			initialCenter={{ lat: user.data.latitude, lng: user.data.longitude }}
		>
		</GoogleMap>
	);
}

export default GoogleApiWrapper({
	apiKey: KEY
  })(Map);
