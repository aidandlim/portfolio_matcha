import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ui_nav } from '../../../actions';

import wallpaper from '../../../resources/wallpaper.png';
import './index.css';

const Landing = () => {
	const ui = useSelector(state => state.ui);
	const dispatch = useDispatch();

	return (
		<div className={ui.nav === 0 ? 'landing' : 'landing landing-hide'}>
			<div className='landing-wallpaper' style={{
				backgroundImage: 'url(\'' + wallpaper + '\')'
			}}></div>
			<div className='landing-container'>
				<div className='landing-title'>M@TCH@</div>
				<div className='landing-description'>Are you looking for dating partner? Just click it.</div>
				<div className='landing-btn' onClick={ () => dispatch(ui_nav(1)) }>Getting Started</div>
			</div>
		</div>
	);
}

export default Landing;
