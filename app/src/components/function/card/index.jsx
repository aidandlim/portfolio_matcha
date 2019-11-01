import React from 'react';

import Tester from '../../../resources/tester.jpg';

import './index.css';

const Card = () => {
	return (
		<div className='card'>
			<div className='card-picture' style={{
				backgroundImage: 'url(\'' + Tester  + '\')'
			}}></div>
			<div className='card-profile'></div>
		</div>
	);
}

export default Card;
