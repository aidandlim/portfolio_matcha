import React from 'react';

import { useSelector } from 'react-redux';

import Cover from '../cover';
import Landing from '../landing';
import Application from '../application';

import Wrapper from 'react-div-100vh';

import './index.css';

const App = () => {
	const auth = useSelector(state => state.auth);
	const map = useSelector(state => state.map);

	return (
		<Wrapper className='app no-drag'>
			{ !auth.isLogin ? <Landing /> : '' }
			{ auth.isLogin ? <Application /> : '' }
			{ auth.isLogin && map.address === '' ? <Cover /> : '' }
		</Wrapper>
	);
}

export default App;
