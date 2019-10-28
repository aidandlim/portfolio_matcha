import React from 'react';

import { useSelector } from 'react-redux';

import Landing from '../landing';
import Header from '../header';
import Body from '../body';
import Footer from '../footer';

import Wrapper from 'react-div-100vh';

import './index.css';

const App = () => {
	const ui = useSelector(state => state.ui);

	return (
		<Wrapper className='app no-drag'>
			{ ui.nav === 0 ? <Landing /> : ''}
			{ ui.nav !== 0 ? <Header /> : ''}
			{ ui.nav !== 0 ? <Body /> : ''}
			{ ui.nav !== 0 ? <Footer /> : ''}
		</Wrapper>
	);
}

export default App;
