import React from 'react';

import { useDispatch } from 'react-redux';
import { ui_color } from '../../../../actions';

import cookie from 'react-cookies';

import '../index.css';

const Theme = () => {
	const dispatch = useDispatch();

	const colors = [
		'#e74c3c',
		'#e67e22',
		'#f1c40f',
		'#1abc9c',
		'#2ecc71',
		'#3498db',
		'#9b59b6',
		'#34495e',
		'#7f8c8d',
	];

	const _handleColor = (color) => {
		cookie.save('theme-color', color, { path: '/' });
		dispatch(ui_color(color));
	}

	return (
		<div className='profile-container'>
			<div className='profile-title'>Theme</div>
			<div className='profile-description'>I currently have 4 windows open up… and I don’t know why.</div>
			<div className='profile-section'>
				{colors.map((color, index) =>
					<div className='profile-theme-example' key={index} onClick={ () => _handleColor(color) }>
						<div className='profile-theme-exmaple-nav' style={{ backgroundColor: color}}></div>
						<div className='profile-theme-exmaple-body' style={{ backgroundColor: '#ecf0f1'}}>
							<div className='profile-theme-exmaple-container'>
								<div className='profile-theme-example-container-header' style={{ backgroundColor: color}}></div>
							</div>
						</div>
						<div className='profile-theme-exmaple-sidebar' style={{ backgroundColor: color}}></div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Theme;