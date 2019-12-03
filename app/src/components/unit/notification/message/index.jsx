import React from 'react';

import '../index.css';

const Message = (props) => {
	return (
        <div className='notification-message'>
            <div className='notification-message-picture' style={{
                backgroundImage: 'url(\'' + props.picture + '\')'
            }}></div>
            <div className='notification-message-content'>{props.content}</div>
            <div className='notification-message-time'>{props.time}</div>
        </div>
	);
}

export default Message;