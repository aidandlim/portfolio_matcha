import React from 'react';

import '../index.css';

const Message = ({message}) => {
	return (
        <div className={!message.checked ? 'notification-message-active' : 'notification-message'}>
            <div className='notification-message-picture' style={{
                backgroundImage: 'url(\'' + message.picture + '\')'
            }}></div>
            <div className='notification-message-content'>
                {message.type === 'appears' ? `${message.first_name} ${message.last_name} saw your profile card.` : '' }
                {message.type === 'visits' ? `${message.first_name} ${message.last_name} visited your profile` : '' }
                {message.type === 'likes' ? `${message.first_name} ${message.last_name} liked you` : '' }
                {message.type === 'unlikes' ? `${message.first_name} ${message.last_name} unliked you` : '' }
            </div>
            <div className='notification-message-time'>{message.time}</div>
        </div>
	);
}

export default Message;