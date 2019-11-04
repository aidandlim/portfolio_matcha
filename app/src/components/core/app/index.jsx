import React from 'react';

import Landing from '../landing';
import Application from '../application';

import Wrapper from 'react-div-100vh';

import './index.css';

const App = () => {
	return (
		<Wrapper className='app no-drag'>
			<Landing />
			<Application />
		</Wrapper>
	);
}

export default App;
