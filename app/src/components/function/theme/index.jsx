import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ui_color } from '../../../actions';

import cookie from 'react-cookies'

import { HuePicker } from 'react-color';

import './index.css';

const Theme = () => {
	const ui = useSelector(state => state.ui);
	const dispatch = useDispatch();

	const _handleColor = (color) => {
		cookie.save('theme-color', color.hex, { path: '/' });
		dispatch(ui_color(color.hex));
	}

	return (
		<div className='dashboard-default'>
			<div className='dashboard-header'>
				<div className='dashboard-header-title'>THEME</div>
			</div>
			<div className='dashboard-body'>
				<HuePicker 
					className='theme-picker' 
					width='calc(100% - 1rem)'
					color={ui.color} 
					onChangeComplete={_handleColor}
				/>
			</div>
		</div>
	);
}

export default Theme;
