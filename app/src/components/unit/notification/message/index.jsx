import React from 'react';

import { useDispatch } from 'react-redux';
import { ui_notification } from '../../../../actions';

import { IMAGE } from '../../../../api';

import '../index.css';
import DetailPull from '../../../util/pull/detailPull';

const Message = ({message}) => {
    const dispatch = useDispatch();

    const _handleDetail = () => {
        dispatch(ui_notification(false));
        DetailPull(dispatch, message.from);
    }

	return (
        <div className={!message.checked ? 'notification-message-active' : 'notification-message'} onClick={ () => _handleDetail() }>
            <div className='notification-message-picture' style={{
                backgroundImage: `url('${IMAGE}${message.picture}')`
            }}></div>
            <div className='notification-message-content'>
                {message.type === 'appears' ? `${message.first_name} ${message.last_name} saw your profile card.` : '' }
                {message.type === 'visits' ? `${message.first_name} ${message.last_name} visited your profile.` : '' }
                {message.type === 'likes' ? `${message.first_name} ${message.last_name} liked you.` : '' }
                {message.type === 'unlikes' ? `${message.first_name} ${message.last_name} unliked you.` : '' }
            </div>
            <div className='notification-message-time'>{message.formattedTime}</div>
        </div>
	);
}

export default Message;