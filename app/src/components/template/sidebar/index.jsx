import React from 'react';

import { useSelector } from 'react-redux';

import Follow from '../../function/follow';

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
			<Follow id={0} name={'Aidan Lim'} picture={'https://www.stylist.co.uk/images/app/uploads/2018/05/18103647/ariana-grande-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress'} />
			<Follow id={1} name={'Luke Kim'} picture={'https://www.stylist.co.uk/images/app/uploads/2018/05/18103647/ariana-grande-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress'} />
			<Follow id={2} name={'Areum Kim'} picture={'https://www.stylist.co.uk/images/app/uploads/2018/05/18103647/ariana-grande-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress'} />
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
