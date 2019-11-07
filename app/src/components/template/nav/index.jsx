import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import Menu from '../../function/menu';

import Profile from '../../../resources/profile.jpeg';
import { FaLocationArrow } from "react-icons/fa";
import './index.css';

const Nav = () => {
	const ui = useSelector(state => state.ui);
	const map = useSelector(state => state.map);
	const [ nav, setNav ] = useState(0);

	let color = '';

	if(ui.color === 0) // Red
		color = '#e74c3c';
	else if(ui.color === 1) // Orange
		color = '#e67e22';
	else if(ui.color === 2) // Yellow
		color = '#f39c12';
	else if(ui.color === 3) // Green
		color = '#27ae60';
	else if(ui.color === 4) // Blue
		color = '#2980b9';
	else if(ui.color === 5) // Navy
		color = '#34495e';
	else if(ui.color === 6) // Purple
		color = '#8e44ad';
		
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
		<div className='nav' style={{
			backgroundColor: color
		}}>
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
