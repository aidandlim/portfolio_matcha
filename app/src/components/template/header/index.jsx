import React from 'react';

import { FiMenu } from "react-icons/fi";

import './index.css';

const Header = () => {
	return (
		<div className='header'>
			M@TCH@
			<FiMenu className='header-menu' />
		</div>
	);
}

export default Header;
