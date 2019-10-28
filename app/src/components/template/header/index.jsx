import React from 'react';

import { useDispatch } from 'react-redux';
import { ui_nav } from '../../../actions';

import './index.css';

const Header = () => {
	const dispatch = useDispatch();

	const _handleTitle = () => {
		if(document.getElementById('cover') !== null) {
			document.getElementById('cover').style.display = 'none';
			document.getElementById('cover').style.opacity = 1;
		}
		dispatch(ui_nav(1));
	}

	return (
		<div className='header'>
			<div className='header-title' onClick={ () => _handleTitle() }>M@TCH@</div>
			<div className='header-user' onClick={ () => dispatch(ui_nav(0)) }></div>
		</div>
	);
}

export default Header;
