import React from 'react';

import { useSelector } from 'react-redux';

import axios from 'axios';

import Message from './message';

import './index.css';

const Notification = () => {
	const ui = useSelector(state => state.ui);
	const notification = useSelector(state => state.notification);

	if(ui.notification) {
		notification.list.map((msg) => {
			if(msg.type === 'appears') {
				return axios.put('/appears', { id: msg.id });
			} else if(msg.type === 'visits') {
				return axios.put('/visits', { id: msg.id });
			} else if(msg.type === 'likes') {
				return axios.put('/likes', { id: msg.id });
			} else if(msg.type === 'unlikes') {
				return axios.put('/unlikes', { id: msg.id });
			} else {
				return null;
			}
		});
	}

	return (
		<div className='frame-narrow'>
			<div className='frame-header'>
				<div className='frame-title'>Notification</div>
			</div>
			<div className='frame-body'>
				<div className='notification'>
					{notification.list.length === 0 ? 'There is no notification message' : ''}
					{notification.list.map((message, index) => <Message key={index} message={message} />)}
				</div>
			</div>
		</div>
	);
}

export default Notification;
