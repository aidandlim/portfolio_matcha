import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { match_isDetail } from '../../../actions';

import { FaTimes, FaReply, FaHeart } from 'react-icons/fa';

import Profile1 from '../../../resources/profile1.jpeg';
// import Profile2 from '../../../resources/profile2.jpeg';
// import Profile3 from '../../../resources/profile3.jpeg';
// import Profile4 from '../../../resources/profile4.jpeg';
// import Profile5 from '../../../resources/profile5.jpeg';
import './index.css';

const Detail = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		setTimeout( () => {
			if(document.querySelector('.detail') !== null) {
				document.querySelector('.detail').className = 'detail active';
			}
		}, 250);
	});

	return (
		<div className='detail'>
			<div className='detail-picture' style={{
				backgroundImage: 'url(\'' + Profile1 + '\')'
			}}></div>
			<div className='detail-profile'>
				<div className='detail-fullname'>Aidan Lim</div>
				<div className='detail-age'>(28)</div>
			</div>
			<div className='detail-tags'>
				<div className='detail-tag'>#Funny</div>
				<div className='detail-tag'>#Funny</div>
				<div className='detail-tag'>#Funny</div>
				<div className='detail-tag'>#Funny</div>
				<div className='detail-tag'>#Funny</div>
				<div className='detail-tag'>#Funny</div>
				<div className='detail-tag'>#Funny</div>
				<div className='detail-tag'>#Funny</div>
				<div className='detail-tag'>#Funny</div>
				<div className='detail-tag'>#Funny</div>
				<div className='detail-tag'>#Funny</div>
				<div className='detail-tag'>#Funny</div>
				<div className='detail-tag'>#Funny</div>
				<div className='detail-tag'>#Funny</div>
				<div className='detail-tag'>#Funny</div>
				<div className='detail-tag'>#Funny</div>
			</div>
			<FaTimes className='detail-icon detail-icon-dislike' />
			<FaReply className='detail-icon detail-icon-detail' onClick={ () => dispatch(match_isDetail(false)) }/>
			<FaHeart className='detail-icon detail-icon-like' />
		</div>
	);
}

export default Detail;
