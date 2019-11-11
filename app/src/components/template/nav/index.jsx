import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import Menu from '../../function/menu';

import Profile from '../../../resources/profile1.jpeg';
import { FaLocationArrow } from "react-icons/fa";
import './index.css';

const Nav = () => {
	const map = useSelector(state => state.map);

	const [ nav, setNav ] = useState(0);
		
	useEffect(() => {
		const currentLocation = window.location.pathname;

		if(currentLocation === '/')
			setNav(0);
		else if(currentLocation === '/match')
			setNav(1);
		else if(currentLocation === '/search')
			setNav(2);

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
			<Menu index={1} nav={nav} setNav={setNav} />
			<Menu index={2} nav={nav} setNav={setNav} />
		</div>
	);
}

export default Nav;
