import React from 'react';

import './index.css';

const Push = (props) => {
	return (
        <div className='push'>
            <div className='push-picture' style={{
                backgroundImage: 'url(\'' + props.picture + '\')'
            }}></div>
            <div className='push-content'>{props.content}</div>
            <div className='push-time'>{props.time}</div>
        </div>
	);
}

export default Push;
