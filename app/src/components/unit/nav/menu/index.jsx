import React from 'react';

import { Link } from 'react-router-dom';

import { FaStar, FaHeartbeat, FaFire, FaMapMarkerAlt } from "react-icons/fa";
import '../index.css';

const Menu = ({nav, index, setNav}) => {
	return (
        <div className={nav === index ? 'nav-menu nav-menu-active' : 'nav-menu'} onClick={ () => setNav(index) } >
            { index === 0 ? <Link to='/'><FaStar className='nav-menu-icon' /><div className='nav-menu-title'>Profile</div></Link> : '' }
            { index === 1 ? <Link to='/overview'><FaHeartbeat className='nav-menu-icon' /><div className='nav-menu-title'>Overview</div></Link> : '' }
            { index === 2 ? <Link to='/match'><FaFire className='nav-menu-icon' /><div className='nav-menu-title'>Match</div></Link> : '' }
            { index === 3 ? <Link to='/search'><FaMapMarkerAlt className='nav-menu-icon' /><div className='nav-menu-title'>Search</div></Link> : '' }
		</div>
	);
}

export default Menu;