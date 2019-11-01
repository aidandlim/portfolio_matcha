import React from 'react';

import Dashboard from '../../function/dashboard';
import Feed from '../../function/feed';

import './index.css';

const Matching = () => {
	return (
		<div className='matching'>
			<Dashboard />	
			<Feed />	
		</div>
	);
}

export default Matching;
