import React from 'react';

import { useSelector } from 'react-redux';

import Landing from '../landing';
import Application from '../application';

import Wrapper from 'react-div-100vh';

import './index.css';

const App = () => {
	const auth = useSelector(state => state.auth);

	return (
		<Wrapper className='app no-drag'>
			{ !auth.isLogin ? <Landing /> : '' }
			{ auth.isLogin  ? <Application /> : '' }
		</Wrapper>
	);
}

export default App;
