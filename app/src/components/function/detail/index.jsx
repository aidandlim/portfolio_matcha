import React, { useEffect } from 'react';

import './index.css';

const Detail = () => {

	useEffect(() => {
		setTimeout( () => {
			if(document.querySelector('.detail') !== null) {
				document.querySelector('.detail').className = 'detail active';
			}
		}, 250);
	});

	return (
		<div className='default'>

		</div>
	);
}

export default Detail;
