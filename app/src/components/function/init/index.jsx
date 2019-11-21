import React from 'react';

import { useDispatch } from 'react-redux';
import { auth_landingStatus } from '../../../actions';

import './index.css';

const Init = () => {
	const dispatch = useDispatch();

	return (
		<div className='init'>
			<div className='init-title'>M@TCH@</div>
			<div className='init-description'>Do you want to look for your dating partner? Just click it!</div>
			<button className='init-button' onClick={ () => dispatch(auth_landingStatus(1)) }>Get Started</button>
		</div>
	);
}

export default Init;
