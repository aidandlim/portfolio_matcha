import React from 'react';

import { useSelector } from 'react-redux';

import Signin from '../../function/signin';
import Signup from '../../function/signup';
import Forgot from '../../function/forgot';

import './index.css';

const Landing = () => {
	const auth = useSelector(state => state.auth);

	return (
		<div className='landing'>
			{ auth.landingStatus === 0 ? <Signin /> : '' }
			{ auth.landingStatus === 1 ? <Signup /> : '' }
			{ auth.landingStatus === 2 ? <Forgot /> : '' }
		</div>
	);
}

export default Landing;
