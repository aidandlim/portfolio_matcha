import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import axios from 'axios';

import Message from './message';

import './index.css';

const Notification = () => {
	const ui = useSelector(state => state.ui);
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		axios.get('/notifications')
		.then(res => {
			if(res.data) {
				console.table(res.data);
				setMessages(res.data);
			}
		});	
	}, []);

	if(ui.notification) {
		messages.map((msg) => {
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
		<div className={ui.notification ? 'notification notification-active' : 'notification'}>
			{messages.length === 0 ? 'There is no notification message' : ''}
			{messages.map((message, index) => <Message key={index} message={message} />)}
		</div>
	);
}

export default Notification;
