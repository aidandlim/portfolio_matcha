import React, { useEffect } from 'react';

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
			<p>images</p>
			<p>fullname</p>
			<p>age</p>
			<p>bio</p>
			<p>tags</p>
			<p>distance</p>
			<p>refelction</p>
			<p>- like</p>
			<p>- dislike</p>
			<p>- detail</p>
		</div>
	);
}

export default Card;
