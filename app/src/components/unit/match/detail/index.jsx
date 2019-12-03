import React from 'react';

import { useDispatch } from 'react-redux';
import { match_isDetail } from '../../../../actions';

import { FaTimes, FaSearchMinus, FaHeart } from 'react-icons/fa';

import Profile1 from '../../../../resources/profile1.jpeg';

import '../index.css';

const Detail = () => {
	const dispatch = useDispatch();

	return (
		<div className='match-detail'>
			<div className='match-detail-picture' style={{
				backgroundImage: 'url(\'' + Profile1 + '\')'
			}}></div>
			<div className='match-detail-container'>
				<div className='match-detail-name'>Aidan Lim (28)</div>
				<div className='match-detail-location'>in Fremont, CA, USA</div>
				<div className='match-detail-title'>Aidan is ...</div>
				<div className='match-detail-list'></div>
				<div className='match-detail-title'>Aidan likes ...</div>
				<div className='match-detail-list'></div>
				<div className='match-detail-reaction'>
					<FaTimes className='match-detail-icon match-detail-icon-dislike' />
					<FaSearchMinus className='match-detail-icon match-detail-icon-detail' onClick={ () => dispatch(match_isDetail(false)) }/>
					<FaHeart className='match-detail-icon match-detail-icon-like' />
				</div>
			</div>
		</div>
	);
}

export default Detail;