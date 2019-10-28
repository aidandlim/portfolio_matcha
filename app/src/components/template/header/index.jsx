import React from 'react';

import { useDispatch } from 'react-redux';
import { ui_nav } from '../../../actions';

import './index.css';

const Header = () => {
	const dispatch = useDispatch();

	return (
		<div className='header'>
			<div className='header-title'>M@TCH@</div>
			<div className='header-user' onClick={ () => dispatch(ui_nav(0)) }></div>
		</div>
	);
}

export default Header;
