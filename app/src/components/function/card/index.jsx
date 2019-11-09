import React, { useEffect } from 'react';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaTimes, FaSearch, FaHeart } from 'react-icons/fa';

import Profile from '../../../resources/profile.jpeg';
import './index.css';

const Card = () => {

	useEffect(() => {
		setTimeout( () => {
			if(document.querySelector('.card') !== null)
				document.querySelector('.card').className = 'card active'
		}, 500);
	});

	return (
		<div className='card'>
			<div className='card-picture' style={{
				backgroundImage: 'url(\'' + Profile + '\')'
			}}></div>
			<div className='card-fullname'></div>
			<div className='card-age'></div>
			<div className='card-distance'></div>
			<div className='card-bio'></div>
			<div className='card-tags'></div>
			<FaArrowAltCircleLeft className='card-arrow card-arrow-left' />
			<FaArrowAltCircleRight className='card-arrow card-arrow-right' />
			<FaTimes className='card-icon card-icon-dislike' />
			<FaSearch className='card-icon card-icon-detail' />
			<FaHeart className='card-icon card-icon-like' />
		</div>
	);
}

export default Card;
