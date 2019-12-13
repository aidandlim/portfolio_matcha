import React from 'react';

import { useDispatch } from 'react-redux';
import { ui_detail, detail_id } from '../../../../actions';

import { IMAGE } from '../../../../api';

import '../index.css';

const Follow = ({ follows }) => {
    const dispatch = useDispatch();

    const _handleDetail = (id) => {
        dispatch(ui_detail(true));
        dispatch(detail_id(id));
    }

    return (
        <div className='overview-follow'>
            {follows.length === 0 ? 'There is no result' : ''}
            {follows.map((follow, index) => 
                <div className='overview-follow-card' key={index} style={{
                    backgroundImage: `url('${IMAGE}${follow.picture1}')`
                }} onClick={ () => _handleDetail(follow.id) }>
                    <div className='overview-follow-name'>{follow.first_name} {follow.last_name}</div>
                </div>
            )}
		</div>
	);
}

export default Follow;
