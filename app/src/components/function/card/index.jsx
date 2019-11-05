import React, { useEffect } from 'react';

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
			<div className='card-like'></div>
			<div className='card-dislike'></div>
		</div>
	);
}

export default Card;
