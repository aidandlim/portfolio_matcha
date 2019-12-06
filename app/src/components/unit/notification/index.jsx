import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import axios from 'axios';

import Message from './message';

import './index.css';

const Notification = () => {
	const ui = useSelector(state => state.ui);
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		axios.get('/notification')
		.then(res => {
			if(res.data) {
				setMessages(res.data);
			}
		});	
	}, []);

	return (
		<div className={ui.notification ? 'notification notification-active' : 'notification'}>
			{messages.map((message, index) => <Message key={index} message={message} />)}
		</div>
	);
}

export default Notification;
