import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';

import { Map as GoogleMap, GoogleApiWrapper, Marker } from 'google-maps-react';
import { KEY } from '../../../../api';

import '../index.css';
import DetailPull from '../../../util/pull/detailPull';

const Map = (props) => {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const [ markers, setMarkers ] = useState([]);
	
	useEffect(() => {
		const data = {
			userId: -1,
			distance: 30
		}

		axios.get('/users', { params: data} )
		.then((res) => {
			setMarkers(res.data);
		});	
	}, []);

	const _handleDetail = (id) => {
		DetailPull(dispatch, id);
	}

	return (
		<GoogleMap
			className='search-map'
			google={props.google}
			zoom={12}
			initialCenter={{ lat: user.data.latitude, lng: user.data.longitude }}
		>
			{markers.map((marker, index) => 
				<Marker
					key={index}
					position={{lat: marker.latitude, lng: marker.longitude}}
					onClick={() => _handleDetail(marker.id)} />
			)}
		</GoogleMap>
	);
}

export default GoogleApiWrapper({
	apiKey: KEY
  })(Map);
