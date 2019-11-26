import React from 'react';

import { Link } from 'react-router-dom';

import { FaStar, FaHeartbeat, FaFire, FaMapMarkerAlt } from "react-icons/fa";

import './index.css';

const Menu = (props) => {
	return (
        <div className={props.nav === props.index ? 'menu menu-active' : 'menu'} onClick={ () => props.setNav(props.index) } >
            { props.index === 0 ? <Link to='/'><FaStar className='menu-icon' /><div className='menu-title'>Profile</div></Link> : '' }
            { props.index === 1 ? <Link to='/overview'><FaHeartbeat className='menu-icon' /><div className='menu-title'>Overview</div></Link> : '' }
            { props.index === 2 ? <Link to='/match'><FaFire className='menu-icon' /><div className='menu-title'>Match</div></Link> : '' }
            { props.index === 3 ? <Link to='/search'><FaMapMarkerAlt className='menu-icon' /><div className='menu-title'>Search</div></Link> : '' }
		</div>
	);
}

export default Menu;
