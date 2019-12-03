import React from 'react';

import { useDispatch } from 'react-redux';
import { auth_landingStatus } from '../../../../actions';

import '../index.css';

const Init = () => {
	const dispatch = useDispatch();

	return (
		<div className='landing-init'>
			<div className='landing-init-title'>M@TCH@</div>
			<div className='landing-init-description'>Do you want to look for your dating partner? Just click it!</div>
			<button className='landing-init-button' onClick={ () => dispatch(auth_landingStatus(1)) }>Get Started</button>
		</div>
	);
}

export default Init;