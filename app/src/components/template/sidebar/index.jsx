import React from 'react';

import Follow from '../../function/follow';

import './index.css';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<Follow id={0} name={'Aidan Lim'} picture={'https://www.stylist.co.uk/images/app/uploads/2018/05/18103647/ariana-grande-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress'} />
			<Follow id={1} name={'Luke Kim'} picture={'https://www.stylist.co.uk/images/app/uploads/2018/05/18103647/ariana-grande-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress'} />
			<Follow id={2} name={'Areum Kim'} picture={'https://www.stylist.co.uk/images/app/uploads/2018/05/18103647/ariana-grande-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress'} />
		</div>
	);
}

export default Sidebar;
