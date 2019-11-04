import React, { useEffect } from 'react';

import './index.css';

const CurrentCard = () => {

	useEffect(() => {
		setTimeout( () => {
			if(document.querySelector('.current-card') !== null)
				document.querySelector('.current-card').className = 'current-card active'
		}, 500);
	});

	return (
		<div className='current-card'>
			card
		</div>
	);
}

export default CurrentCard;
