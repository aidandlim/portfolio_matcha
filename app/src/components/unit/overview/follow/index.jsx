import React from 'react';

import { IMAGE } from '../../../../api';

import '../index.css';

const Follow = ({ follows }) => {
    return (
        <div className='overview-follow'>
            {follows.length === 0 ? 'There is no result' : ''}
            {follows.map((follow, index) => 
                <div className='overview-follow-card' key={index} style={{
                    backgroundImage: `url('${IMAGE}${follow.picture1}')`
                }}>
                    <div className='overview-follow-name'>{follow.first_name} {follow.last_name}</div>
                </div>
            )}
		</div>
	);
}

export default Follow;
