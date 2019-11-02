import React from 'react';

import { useDispatch } from 'react-redux';
import { ui_nav } from '../../../actions';

import Wallpaper1 from '../../../resources/image/1.png';
import Wallpaper2 from '../../../resources/image/2.jpg';
import Wallpaper3 from '../../../resources/image/3.jpg';

import './index.css';

const Navigation = () => {
	const dispatch = useDispatch();

	return (
		<div className='navigation'>
			<div className='navigation-container'>
				<div className='navigation-card navigation-card-matching' onClick={ () => dispatch(ui_nav(1)) }>
					<div className='navigation-card-picture' style={{
						backgroundImage: 'url(\'' + Wallpaper1 + '\')'
					}}></div>
					<div className='navigation-card-title navigation-card-title-matching'>Matcing</div>
				</div>
				<div className='navigation-card navigation-card-searching' onClick={ () => dispatch(ui_nav(2)) }>
				<div className='navigation-card-picture' style={{
					backgroundImage: 'url(\'' + Wallpaper2 + '\')'
				}}></div>
					<div className='navigation-card-title navigation-card-title-searching'>Searching</div>
				</div>
				<div className='navigation-card navigation-card-chatting' onClick={ () => dispatch(ui_nav(3)) }>
				<div className='navigation-card-picture' style={{
					backgroundImage: 'url(\'' + Wallpaper3 + '\')'
				}}></div>
					<div className='navigation-card-title navigation-card-title-chatting'>Chatting</div>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
