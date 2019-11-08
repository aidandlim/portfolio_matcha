import React from 'react';

import { useSelector } from 'react-redux';

import Chatlist from '../../function/chatlist';

import './index.css';

const Sidebar = () => {
	const ui = useSelector(state => state.ui);

	let color = '';

	if(ui.color === 0) // Red
		color = '#e74c3c';
	else if(ui.color === 1) // Orange
		color = '#e67e22';
	else if(ui.color === 2) // Yellow
		color = '#f39c12';
	else if(ui.color === 3) // Green
		color = '#27ae60';
	else if(ui.color === 4) // Blue
		color = '#2980b9';
	else if(ui.color === 5) // Navy
		color = '#34495e';
	else if(ui.color === 6) // Purple
		color = '#8e44ad';

	return (
		<div className='sidebar' style={{
			backgroundColor: color
		}}>
			<Chatlist id={0} name={'Aidan Lim'} picture={'something'} />
			<Chatlist id={1} name={'Luke Kim'} picture={'something'} />
			<Chatlist id={2} name={'Areum Kim'} picture={'something'} />
		</div>
	);
}

export default Sidebar;

/*
<p>chat list</p>
<p>chat core</p>
<p>- visual alert</p>
<p>- sound alert</p>
<p>- badge</p>
<p>- sticker</p>
<p>- voice message</p>
<p>- facetime?</p>
*/
