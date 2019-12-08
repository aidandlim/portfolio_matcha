import React from 'react';

import '../index.css';

const Follow = ({ follows }) => {
    return (
        <div className='overview-follow'>
            {follows.map((follow, index) => 
                <div></div>
            )}
		</div>
	);
}

export default Follow;
