import React from 'react';

import '../index.css';

const Message = ({ direction, content, time}) => {
	return (
        <div className='chat-message'>
            <div className={direction === 0 ? 'chat-message-content chat-message-content-left' : 'chat-message-content chat-message-content-right'}>
                {content}
            </div>
            <div className={direction === 0 ? 'chat-message-time chat-message-time-left' : 'chat-message-time chat-message-time-right'}>{time}</div>
        </div>
	);
}

export default Message;