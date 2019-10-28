import React from 'react';

import Landing from '../landing';
import Header from '../header';
import Body from '../body';
import Footer from '../footer';

import Wrapper from 'react-div-100vh';

import './index.css';

const App = () => {
	return (
		<Wrapper className='app no-drag'>
			<Landing />
			<Header />
			<Body />
			<Footer />
		</Wrapper>
	);
}

export default App;
