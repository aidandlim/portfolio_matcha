import React, { useEffect } from 'react';

import './index.css';

const Shortcut = () => {

	useEffect(() => {
		setTimeout( () => {
			if(document.querySelector('.shortcut') !== null)
				document.querySelector('.shortcut').className = 'shortcut active'
		}, 500);
	});

	return (
		<div className='shortcut'>
			Shortcut
		</div>
	);
}

export default Shortcut;
