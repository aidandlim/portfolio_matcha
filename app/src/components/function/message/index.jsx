import React from 'react';

import './index.css';

const Message = (props) => {
	return (
        <div className='message-container'>
            <div className={props.direction === 0 ? 'message message-left' : 'message message-right'}>
                {props.content}
            </div>
            <div className={props.direction === 0 ? 'message-time message-time-left' : 'message-time message-time-right'}>13:01</div>
        </div>
	);
}

export default Message;
