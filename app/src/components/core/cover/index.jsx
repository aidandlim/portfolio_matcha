import React from 'react';

import Connection from '../../../resources/connection.gif';
import './index.css';

const Cover = () => {
	return (
		<div className='cover'>
			<div className='cover-icon' style={{
				backgroundImage: 'url(\'' + Connection + '\')'
			}}></div>
			<div className='cover-description'>We are trying to connect to GPS.</div>
		</div>
	);
}

export default Cover;
