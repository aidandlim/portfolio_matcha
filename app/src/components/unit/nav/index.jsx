import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { user_data, ui_notification, chat_current, ui_detail } from '../../../actions';

import axios from 'axios';
import { IMAGE } from '../../../api';

import Menu from './menu';

import { FaLocationArrow, FaUnlink } from "react-icons/fa";
import './index.css';

const Nav = () => {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const [ nav, setNav ] = useState(0);
		
	useEffect(() => {
		const currentLocation = window.location.pathname;

		if(currentLocation === '/')
			setNav(0);
		else if(currentLocation === '/overview')
			setNav(1);
		else if(currentLocation === '/match')
			setNav(2);
		else if(currentLocation === '/search')
			setNav(3);

	}, []);

	const _handleNav = (index) => {
		setNav(index);
		dispatch(ui_notification(false));
		dispatch(chat_current(-1));
		dispatch(ui_detail(false));
	}

	const _handledLogout = () => {
		axios.get('/auth/out')
		.then((res) => {
			console.log(res.data);
			if(res.data) {
				dispatch(user_data({}));
			}
		});
	}

	return (
		<div className='nav'>
			<div className='nav-profile' style={{
				backgroundImage: `url('${IMAGE}${user.data.picture1}')`
			}}></div>
			<div className='nav-fullname'>{user.data.first_name === '' && user.data.last_name === '' ? 'Unknown' : '' }{user.data.first_name} {user.data.last_name}</div>
			<div className='nav-location-container'>
				<FaLocationArrow className='nav-location-icon'/>
				<div className='nav-location-address'>{user.data.address === '' ? 'Unknown' : user.data.address}</div>
			</div>
			<Menu index={0} nav={nav} setNav={setNav} />
			{user.isComplete ? <Menu index={1} nav={nav} setNav={_handleNav} /> : ''}
			{user.isComplete ? <Menu index={2} nav={nav} setNav={_handleNav} /> : ''}
			{user.isComplete ? <Menu index={3} nav={nav} setNav={_handleNav} /> : ''}
			<FaUnlink className='nav-menu-icon' onClick={ () => _handledLogout() }/>
			<div className='nav-menu-title' onClick={ () => _handledLogout() }>Logout</div>
		</div>
	);
}

export default Nav;
