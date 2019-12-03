import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { auth_isLogin } from '../../../actions';

import Menu from './menu';

import Profile from '../../../resources/profile1.jpeg';
import { FaLocationArrow, FaUnlink } from "react-icons/fa";
import './index.css';

const Nav = () => {
	const auth = useSelector(state => state.auth);
	const map = useSelector(state => state.map);
	const dispatch = useDispatch();

	const [ nav, setNav ] = useState(0);
		
	useEffect(() => {
		const currentLocation = window.location.pathname;

		if(currentLocation === '/')
			setNav(0);
		else if(currentLocation === '/overview')
			setNav(1);
		else if(currentLocation === '/match')
			setNav(2);
		else if(currentLocation === '/search')
			setNav(3);

	}, []);

	return (
		<div className='nav'>
			<div className='nav-profile' style={{
				backgroundImage: 'url(\'' + Profile + '\')'
			}}></div>
			<div className='nav-fullname'>Aidan Lim</div>
			<div className='nav-location-container'>
				<FaLocationArrow className='nav-location-icon'/>
				<div className='nav-location-address'>{map.address}</div>
			</div>
			<Menu index={0} nav={nav} setNav={setNav} />
			{auth.isComplete ? <Menu index={1} nav={nav} setNav={setNav} /> : ''}
			{auth.isComplete ? <Menu index={2} nav={nav} setNav={setNav} /> : ''}
			{auth.isComplete ? <Menu index={3} nav={nav} setNav={setNav} /> : ''}
			<FaUnlink className='nav-menu-icon' onClick={ () => dispatch(auth_isLogin(false)) }/>
			<div className='nav-menu-title' onClick={ () => dispatch(auth_isLogin(false)) }>Logout</div>
		</div>
	);
}

export default Nav;
