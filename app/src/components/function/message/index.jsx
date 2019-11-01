import React from 'react';

import './index.css';

const Message = () => {
	return (
		<div className='message'>
			<div className='message-profile'></div>
			<div className='message-body'>
				<div className='message-nickname'>Luke Kim</div>
				<div className='message-content'>hey there! Do you have time? I really want to talk with you.</div>
			</div>
		</div>
	);
}

export default Message;
