import React from 'react';

import { useSelector } from 'react-redux';

import Init from '../../function/init';
import Signin from '../../function/signin';
import Signup from '../../function/signup';
import Forgot from '../../function/forgot';

import './index.css';

const Landing = () => {
	const auth = useSelector(state => state.auth);

	return (
		<div className='landing'>
			{ auth.landingStatus === 0 ? <Init /> : '' }
			{ auth.landingStatus !== 0 ?
				<div className='landing-container'>	
					{ auth.landingStatus === 1 ? <Signin /> : '' }
					{ auth.landingStatus === 2 ? <Signup /> : '' }
					{ auth.landingStatus === 3 ? <Forgot /> : '' }
				</div>
			: '' }
		</div>
	);
}

export default Landing;
