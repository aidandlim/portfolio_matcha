import React, { useState, useEffect } from 'react';

import Menu from '../../function/menu';

import './index.css';

const Nav = () => {
	const [ nav, setNav ] = useState(0);

	useEffect(() => {
		const currentLocation = window.location.pathname;

		if(currentLocation === '/')
			setNav(0);
		else if(currentLocation === '/match')
			setNav(1);
		else if(currentLocation === '/search')
			setNav(2);
		else if(currentLocation === '/chat')
			setNav(3);
	}, []);

	return (
		<div className='nav'>
			<Menu index={0} nav={nav} setNav={setNav} />
			<Menu index={1} nav={nav} setNav={setNav} />
			<Menu index={2} nav={nav} setNav={setNav} />
			<Menu index={3} nav={nav} setNav={setNav} />
		</div>
	);
}

export default Nav;
