import React from 'react';

import { useDispatch } from 'react-redux';

import { IMAGE } from '../../../../api';

import '../index.css';
import DetailPull from '../../../util/pull/detailPull';

const Follow = ({ follows }) => {
    const dispatch = useDispatch();

    const _handleDetail = (id) => {
        DetailPull(dispatch, id);
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
