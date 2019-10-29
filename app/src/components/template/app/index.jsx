import React from 'react';

import { useSelector } from 'react-redux';

import Landing from '../landing';
import Signin from '../../function/signin';
import Signup from '../../function/signup';
import Forgot from '../../function/forgot';
import Header from '../header';
import Body from '../body';
import Footer from '../footer';

import Wrapper from 'react-div-100vh';

import './index.css';

const App = () => {
	const ui = useSelector(state => state.ui);
	const user = useSelector(state => state.user);

	return (
		<Wrapper className='app no-drag'>
			{ user.user === null && !ui.isLogin && !ui.isRegister && !ui.isForgot ? <Landing /> : ''}
			{ user.user === null && ui.isLogin ? <Signin /> : '' }
			{ user.user === null && ui.isRegister ? <Signup /> : '' }
			{ user.user === null && ui.isForgot ? <Forgot /> : '' }
			{ user.user !== null ? <Header /> : ''}
			{ user.user !== null ? <Body /> : ''}
			{ user.user !== null ? <Footer /> : ''}
		</Wrapper>
	);
}

export default App;
