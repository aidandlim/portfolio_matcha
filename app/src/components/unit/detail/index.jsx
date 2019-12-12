import React from 'react';

import { useDispatch } from 'react-redux';
import { ui_detail } from '../../../actions';

import { FaRegTimesCircle } from 'react-icons/fa';
import './index.css';

const Detail = () => {
	const dispatch = useDispatch();

	const _handleExit = () => {
		dispatch(ui_detail(false));
	}

	return (
		<div className='detail'>
			<div className='frame'>
				<div className='frame-header'>
					<div className='frame-title'>DETAIL</div>
					<FaRegTimesCircle className='frame-exit' onClick={ () => _handleExit() }/>
				</div>
				<div className='frame-body'>

				</div>
			</div>
		</div>
	);
}

export default Detail;