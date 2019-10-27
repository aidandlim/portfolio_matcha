import React from 'react';

import { FiAtSign, FiMap, FiMessageCircle, FiHeart } from "react-icons/fi";
import './index.css';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-container'>
				<div className='footer-icon-container'>
					<FiAtSign className='footer-icon' />
					<div className='footer-title'>MATCH</div>
				</div>
				<div className='footer-icon-container'>
					<FiMap className='footer-icon' />
					<div className='footer-title'>FIND</div>
				</div>
				<div className='footer-icon-container'>
					<FiMessageCircle className='footer-icon' />
					<div className='footer-title'>CHAT</div>
				</div>
				<div className='footer-icon-container'>
					<FiHeart className='footer-icon' />
					<div className='footer-title'>NOTIFY</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
