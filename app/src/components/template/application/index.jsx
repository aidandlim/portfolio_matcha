import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import Header from '../header';
import Nav from '../nav';
import Body from '../body';

import './index.css';

const Application = () => {
	const auth = useSelector(state => state.auth);

	useEffect(() => {
		if(auth.isLogin) {
			setTimeout( () => {
				document.querySelector('.application').className = 'application active'
			}, 1000);
		}
	});

	return (
		<div className='application'>
			<Header />
			<Nav />
			<Body />
		</div>
	);
}

export default Application;
