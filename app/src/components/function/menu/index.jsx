import React from 'react';

import { Link } from 'react-router-dom';

import { FaStar, FaFire, FaMapMarkerAlt } from "react-icons/fa";

import './index.css';

const Menu = (props) => {
	return (
        <div className={props.nav === props.index ? 'menu-active' : 'menu'} onClick={ () => props.setNav(props.index) } >
            { props.index === 0 ? <Link to='/'><FaStar className='menu-icon' /><div className='menu-title'>Dashboard</div></Link> : '' }
            { props.index === 1 ? <Link to='/match'><FaFire className='menu-icon' /><div className='menu-title'>Match</div></Link> : '' }
            { props.index === 2 ? <Link to='/search'><FaMapMarkerAlt className='menu-icon' /><div className='menu-title'>Search</div></Link> : '' }
		</div>
	);
}

export default Menu;
