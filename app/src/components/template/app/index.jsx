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

import AudioSend from '../../../resources/send.mp3';
import AudioReceive from '../../../resources/receive.mp3';

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
			<audio id='audio-send' className='audio'>
				<source src={AudioSend} type="audio/mp3" />
			</audio>
			<audio id='audio-receive' className='audio'>
				<source src={AudioReceive} type="audio/mp3" />
			</audio>
		</Wrapper>
	);
}

export default App;
