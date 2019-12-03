import React from 'react';

import { useSelector } from 'react-redux';

import Init from './init';
import In from './in';
import Up from './up';
import Fg from './fg';

import './index.css';

const Landing = () => {
	const auth = useSelector(state => state.auth);

	return (
		<div className='landing'>
			{ auth.landingStatus === 0 ? <Init /> : '' }
			{ auth.landingStatus !== 0 ?
				<div className='landing-container'>	
					{ auth.landingStatus === 1 ? <In /> : '' }
					{ auth.landingStatus === 2 ? <Up /> : '' }
					{ auth.landingStatus === 3 ? <Fg /> : '' }
				</div>
			: '' }
		</div>
	);
}

export default Landing;
