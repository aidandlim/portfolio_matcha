import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import './index.css';

const Landing = () => {
	const auth = useSelector(state => state.auth);

	useEffect(() => {
		if(!auth.isLogin) {
			setTimeout( () => {
				document.querySelector('.landing').className = 'landing active'
			}, 1000);
		}
	});

	return (
		<div className='landing'>
			Landing
		</div>
	);
}

export default Landing;
