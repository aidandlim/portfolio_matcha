import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ui_maximization } from '../../../actions';

import Map from '../../function/map';

import { FaExpandArrowsAlt } from 'react-icons/fa';
import './index.css';

const Search = () => {
	const ui = useSelector(state => state.ui);
	const dispatch = useDispatch();

	return (
		<div className={ui.maximization ? 'frame-wide' : 'frame'}>
			<div className='frame-header'>
				<div className='frame-title'>SEARCH</div>
				<FaExpandArrowsAlt className='frame-maximization' onClick={ () => dispatch(ui_maximization(ui.maximization ? false : true)) } />
			</div>
			<div className='frame-body'>
				<Map />
			</div>
		</div>
	);
}

export default Search;
