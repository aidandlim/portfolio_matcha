import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ui_notification, chat_current } from '../../actions';

import { FaBell } from 'react-icons/fa';
import './index.css';

const Sidebar = () => {
	const ui = useSelector(state => state.ui);
	const chat = useSelector(state => state.chat);
	const dispatch = useDispatch();

	const _handleNotification = () => {
		if(chat.current === -1) {
			dispatch(ui_notification(ui.notification ? false : true));
		} else {
			dispatch(chat_current(-1));
			setTimeout(() => {
				dispatch(ui_notification(ui.notification ? false : true));
			}, 500);
		}
	}

	return (
		<div className='sidebar'>
			<FaBell className={ ui.notification ? 'sidebar-notification sidebar-notification-active' : 'sidebar-notification' } onClick={() => _handleNotification()} />
			<Follow id={0} name={'Aidan Lim'} picture={'https://www.stylist.co.uk/images/app/uploads/2018/05/18103647/ariana-grande-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress'} />
			<Follow id={1} name={'Luke Kim'} picture={'https://www.stylist.co.uk/images/app/uploads/2018/05/18103647/ariana-grande-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress'} />
			<Follow id={2} name={'Areum Kim'} picture={'https://www.stylist.co.uk/images/app/uploads/2018/05/18103647/ariana-grande-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress'} />
		</div>
	);
}

export default Sidebar;

const Follow = (props) => {
	const ui = useSelector(state => state.ui);
	const chat = useSelector(state => state.chat);
	const dispatch = useDispatch();

	const _handleCurrentChat = () => {
		if(!ui.notification) {
			dispatch(chat_current(props.id));
		} else {
			dispatch(ui_notification(false));
			setTimeout(() => {
				dispatch(chat_current(props.id));
			}, 500);
		}
	}

	return (
		<div className='follow' onClick={ () => _handleCurrentChat() }>
			<div className={chat.current === props.id ? 'follow-picture follow-picture-active' : 'follow-picture'} style={{
				backgroundImage: 'url(\'' + props.picture + '\')'
			}}></div>
		</div>
	);
}