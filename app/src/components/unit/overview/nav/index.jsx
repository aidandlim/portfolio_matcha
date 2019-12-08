import React from 'react';

import '../index.css';

const Nav = ({ followers, following, nav, setNav }) => {
    return (
        <div className='overview-nav'>
            <div className={nav === 0 ? 'overview-nav-menu-active' : 'overview-nav-menu'} onClick={ () => setNav(0) }>
                Interaction Graph
            </div>
            <div className={nav === 1 ? 'overview-nav-menu-active' : 'overview-nav-menu'} onClick={ () => setNav(1) }>
                Followers ({followers.length})
            </div>
            <div className={nav === 2 ? 'overview-nav-menu-active' : 'overview-nav-menu'} onClick={ () => setNav(2) }>
                Following ({following.length})
            </div>
		</div>
	);
}

export default Nav;
