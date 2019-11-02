import React from 'react';

import Tester from '../../../resources/image/tester.jpg';

import './index.css';

const Card = () => {
	return (
		<div className='card'>
			<div className='card-profile-container'>
				<div className='card-picture' style={{
					backgroundImage: 'url(\'' + Tester  + '\')'
				}}></div>
				<div className='card-profile'>
					<div className='card-fullname'>Ariana Grande (21)</div>
				</div>
			</div>
			<div className='card-reflection-container'>
				<div className='card-icon'></div>
				<div className='card-icon'></div>
				<div className='card-icon'></div>
				<div className='card-icon'></div>
			</div>
		</div>
	);
}

export default Card;
