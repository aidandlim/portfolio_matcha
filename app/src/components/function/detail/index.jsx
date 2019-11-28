import React from 'react';

import { useDispatch } from 'react-redux';
import { match_isDetail } from '../../../actions';

import './index.css';

const Detail = () => {
	const dispatch = useDispatch();

	return (
		<div className='frame'>
			<div className='frame-header-wide'>
				<div className='detail-profile'></div>
				<div className='detail-name'>Aidan Lim (28)</div>
			</div>
			<div className='frame-body-narrow' onClick={ () => dispatch(match_isDetail(false)) }>
			</div>
		</div>
	);
}

export default Detail;
