import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ui_nav, map_center } from '../../../actions';

import { FiAtSign, FiMap, FiMessageCircle, FiHeart } from "react-icons/fi";
import './index.css';

const Footer = () => {
	const ui = useSelector(state => state.ui);
	const dispatch = useDispatch();

	const _handleFind = () => {
		document.getElementById('cover').style.display = 'block';
		navigator.geolocation.getCurrentPosition((position) => {
			dispatch(map_center({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			}));
			dispatch(ui_nav(2))
		});
	}

	return (
		<div className='footer'>
			<div className='footer-container'>
				<div className='footer-icon-container' onClick={ () => dispatch(ui_nav(1)) }>
					<FiAtSign className={ui.nav === 1 ? 'footer-icon-active' : 'footer-icon'} />
					<div className={ui.nav === 1 ? 'footer-title-active' : 'footer-title'}>MATCH</div>
				</div>
				<div className='footer-icon-container' onClick={ () => _handleFind() }>
					<FiMap className={ui.nav === 2 ? 'footer-icon-active' : 'footer-icon'} />
					<div className={ui.nav === 2 ? 'footer-title-active' : 'footer-title'}>FIND</div>
				</div>
				<div className='footer-icon-container' onClick={ () => dispatch(ui_nav(3)) }>
					<FiMessageCircle className={ui.nav === 3 ? 'footer-icon-active' : 'footer-icon'} />
					<div className={ui.nav === 3 ? 'footer-title-active' : 'footer-title'}>CHAT</div>
				</div>
				<div className='footer-icon-container' onClick={ () => dispatch(ui_nav(4)) }>
					<FiHeart className={ui.nav === 4 ? 'footer-icon-active' : 'footer-icon'} />
					<div className={ui.nav === 4 ? 'footer-title-active' : 'footer-title'}>NOTIFY</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
