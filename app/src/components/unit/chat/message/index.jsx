import React from 'react';

import '../index.css';

const Message = (props) => {
	return (
        <div className='chat-message'>
            <div className={props.direction === 0 ? 'chat-message-content chat-message-content-left' : 'chat-message-content chat-message-content-right'}>
                {props.content}
            </div>
            <div className={props.direction === 0 ? 'chat-message-time chat-message-time-left' : 'chat-message-time chat-message-time-right'}>13:01</div>
        </div>
	);
}

export default Message;