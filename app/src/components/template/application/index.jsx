import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../header';
import Nav from '../nav';

import Dashboard from '../../function/dashboard';
import Match from '../../function/match';
import Search from '../../function/search';
import Chat from '../../function/chat';

import './index.css';

const Application = () => {
	const auth = useSelector(state => state.auth);

	useEffect(() => {
		if(auth.isLogin) {
			setTimeout( () => {
				document.querySelector('.application').className = 'application active'
			}, 1000);
		}
	});

	return (
		<Router>
			<div className='application'>
				<Header />
				<Nav />
				<Switch>
					<Route path='/' exact component={Dashboard} />
					<Route path='/match' component={Match} />
					<Route path='/search' component={Search} />
					<Route path='/chat' component={Chat} />
				</Switch>
			</div>
		</Router>
	);
}

export default Application;
