import React from 'react';

import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from '../../unit/nav';
import Sidebar from '../../unit/sidebar';
import Chat from '../../unit/chat';
import Notification from '../../unit/notification';

import Profile from '../../unit/profile';
import Overview from '../../unit/overview';
import Match from '../../unit/match';
import Search from '../../unit/search';

import './index.css';

const Core = () => {
	const ui = useSelector(state => state.ui);
	const user = useSelector(state => state.user);
	const chat = useSelector(state => state.chat);

	return (
		<Router>
			<div className='core'>
				<Nav />
				<div className={chat.current === -1 && !ui.notification ? 'default' : 'default default-active'}>
					<Switch>
						<Route path='/' exact component={Profile} />
						{user.isComplete ? <Route path='/overview' exact component={Overview} /> : ''}
						{user.isComplete ? <Route path='/match' component={Match} /> : ''}
						{user.isComplete ? <Route path='/search' component={Search} /> : ''}
					</Switch>
					{!user.isComplete ? <div className='announcement'>After you have completed your profile, you will be able to access a matching service.</div> : '' }
				</div>
				<Chat />
				<Notification />
				<Sidebar />
			</div>
		</Router>
	);
}

export default Core;
