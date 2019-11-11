import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ui_color } from '../../../actions';

import { FaCheck } from 'react-icons/fa';

import './index.css';

const Theme = () => {
	const ui = useSelector(state => state.ui);
	const dispatch = useDispatch();

	return (
		<div className='dashboard-default'>
			<div className='dashboard-header'>
				<div className='dashboard-header-title'>THEME</div>
			</div>
			<div className='dashboard-body'>
				<button className='theme-color' onClick={ () => dispatch(ui_color(0)) }>{ui.color === 0 ? <FaCheck className='theme-check' /> : ''}</button>
				<button className='theme-color' onClick={ () => dispatch(ui_color(1)) }>{ui.color === 1 ? <FaCheck className='theme-check' /> : ''}</button>
				<button className='theme-color' onClick={ () => dispatch(ui_color(2)) }>{ui.color === 2 ? <FaCheck className='theme-check' /> : ''}</button>
				<button className='theme-color' onClick={ () => dispatch(ui_color(3)) }>{ui.color === 3 ? <FaCheck className='theme-check' /> : ''}</button>
				<button className='theme-color' onClick={ () => dispatch(ui_color(4)) }>{ui.color === 4 ? <FaCheck className='theme-check' /> : ''}</button>
				<button className='theme-color' onClick={ () => dispatch(ui_color(5)) }>{ui.color === 5 ? <FaCheck className='theme-check' /> : ''}</button>
				<button className='theme-color' onClick={ () => dispatch(ui_color(6)) }>{ui.color === 6 ? <FaCheck className='theme-check' /> : ''}</button>
			</div>
		</div>
	);
}

export default Theme;
