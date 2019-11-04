import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../../template/header';
import Nav from '../../template/nav';
import Dashboard from '../../template/dashboard';
import Match from '../../template/match';
import Search from '../../template/search';
import Chat from '../../template/chat';

import './index.css';

const Application = () => {
	const auth = useSelector(state => state.auth);

	useEffect(() => {
		if(auth.isLogin) {
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
