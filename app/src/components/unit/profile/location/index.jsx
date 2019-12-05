import React from 'react';

import axios from 'axios';

import { KEY } from '../../../../api';

import Alert from '../../../util/alert';

import '../index.css';

const Location = () => {
	
	const _handleForm = (e) => {
		e.preventDefault();

		const zipcode = document.profile_location.zipcode.value;

		if(zipcode.length === 5) {
			axios.get('https://maps.googleapis.com/maps/api/geocode/json?language=en&address=' + zipcode + '&key=' + KEY)
			.then((res) => {
				if(res.data.status === 'ZERO_RESULTS') {
					Alert(0, 'zipcode is invalid', 'Okay', null, null);
					document.profile_location.zipcode.value = '';
				} else {
					let result = res.data.results[0].formatted_address.split(' ');
					let address = '';
					for(let i = 0; i < result.length; i++) {
						if(i !== result.length - 2)
							address += i + 1 === result.length ? result[i] : (i === result.length - 3 ? result[i] + ', ' : result[i] + ' ');
					}

					const data = {
						address: address,
						latitude: res.data.results[0].geometry.location.lat,
						longitude: res.data.results[0].geometry.location.lng,
					};

					axios.put('/users/address', data)
					.then(res => {
						if(res.data) {
							// 
						} else {
							//
						}
					});
				}
			});
		}

		
	}

	return (
		<div className='profile-container'>
			<div className='profile-title'>Location</div>
			<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
			<div className='profile-section'>
				<input className='profile-input' value='Fremont, CA, USA' disabled />
				<form name='profile_location' onSubmit={_handleForm}>
					<input type='text' className='profile-input' name='zipcode' placeholder='Zip Code' />
					<input type='submit' className='profile-submit' value='UPDATE' />
				</form>
			</div>
		</div>
	);
}

export default Location;