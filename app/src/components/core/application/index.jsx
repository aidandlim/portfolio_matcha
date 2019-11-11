import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from '../../template/nav';
import Dashboard from '../../template/dashboard';
import Match from '../../template/match';
import Search from '../../template/search';
import Chat from '../../template/chat';
import Sidebar from '../../template/sidebar';

import './index.css';

const Application = () => {
	const auth = useSelector(state => state.auth);
	const ui = useSelector(state => state.ui);
	const map = useSelector(state => state.map);
	const chat = useSelector(state => state.chat);

	useEffect(() => {
		if(auth.isLogin && map.address !== '') {
			setTimeout( () => {
				document.querySelector('.application').className = 'application active'
			}, 500);
		} else {
			document.querySelector('.application').className = 'application'
		}
	});

	return (
		<Router>
			<div className='application'>
				<style>{`
					:root {
						--color-100: ${ui.color + 'ff'};
						--color-90: ${ui.color + 'e6'};
						--color-80: ${ui.color + 'cc'};
						--color-70: ${ui.color + 'b3'};
						--color-60: ${ui.color + '99'};
						--color-50: ${ui.color + '80'};
						--color-40: ${ui.color + '66'};
						--color-30: ${ui.color + '4d'};
						--color-20: ${ui.color + '33'};
						--color-10: ${ui.color + '1a'};
					}
				`}</style>
				<Nav />
				<div className={chat.current === -1 ? 'default' : 'default default-active'}>
					<Switch>
						<Route path='/' exact component={Dashboard} />
						<Route path='/match' component={Match} />
						<Route path='/search' component={Search} />
					</Switch>
				</div>
				<Chat />
				<Sidebar />
			</div>
		</Router>
	);
}

export default Application;
