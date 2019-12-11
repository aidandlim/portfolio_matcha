import React from 'react';

import { IMAGE } from '../../../../api';

import '../index.css';

const Message = ({message}) => {
	return (
        <div className={!message.checked ? 'notification-message-active' : 'notification-message'}>
            <div className='notification-message-picture' style={message.picture1 !== undefined ? {
                backgroundImage: `url('${IMAGE}${message.picture1}')`
            } : {}}></div>
            <div className='notification-message-content'>
                {message.type === 'appears' ? `${message.first_name} ${message.last_name} saw your profile card.` : '' }
                {message.type === 'visits' ? `${message.first_name} ${message.last_name} visited your profile.` : '' }
                {message.type === 'likes' ? `${message.first_name} ${message.last_name} liked you.` : '' }
                {message.type === 'unlikes' ? `${message.first_name} ${message.last_name} unliked you.` : '' }
            </div>
            <div className='notification-message-time'>{message.time}</div>
        </div>
	);
}

export default Message;