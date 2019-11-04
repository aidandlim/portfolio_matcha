import React from 'react';

import { useDispatch } from 'react-redux';
import { auth_isLogin } from '../../../actions';

import CI from '../../../resources/ci.png';
import { FaTimesCircle } from 'react-icons/fa';
import './index.css';

const Header = () => {
	const dispatch = useDispatch();

	const _handleLogout = () => {
		dispatch(auth_isLogin(false));
	}

	return (
		<div className='header'>
			<img className='header-ci' src={CI} alt='ci' />
			<div className='header-title'>M@TCH@</div>
			<FaTimesCircle className='header-exit' onClick={ () => _handleLogout() } />
		</div>
	);
}

export default Header;
