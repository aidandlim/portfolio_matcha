import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';

import { IMAGE } from '../../../../api';

import ChatListPull from '../../../util/pull/chatListPull';
import OverviewPull from '../../../util/pull/overviewPull';
import DetailPull from '../../../util/pull/detailPull';
import MatchPull from '../../../util/pull/matchPull';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaTimes, FaSearchPlus, FaHeart } from 'react-icons/fa';

import '../index.css';

const Card = () => {
	const [ index, setIndex ] = useState(0);
	const match = useSelector(state => state.match);
	const dispatch = useDispatch();

	useEffect(() => {
		_handleImage();
	});

	useEffect(() => {
		const data = {
			to: match.data.id
		}
		axios.post('/appears', data);
	}, [match]);
	
	const _handleImage = () => {
		let images = document.getElementsByClassName('match-card-picture');
		for(let i = 0; i < images.length; i++) {
			if(i === index) {
				images[i].style.opacity = 1;
			} else {
				images[i].style.opacity = 0;
			}
		}
	}

	const _handleIndex = (toRight, target) => {
		if(target !== -1) {
			setIndex(target);
		} else {
			if(toRight) {
				if(0 <= index && index <= 3)
				setIndex(index + 1);
				else
				setIndex(0);
			} else {
				if(1 <= index && index <= 4)
				setIndex(index - 1);
				else
				setIndex(4);
			}
		}
	}

	const _handleLike = () => {
		const data = {
			to: match.data.id
		};

		axios.post('/likes', data)
		.then(() => {
			ChatListPull(dispatch);
			OverviewPull(dispatch, 1);
			MatchPull(dispatch);
		});
	}

	const _handleDetail = () => {
		DetailPull(match.data.id);
	}

	const _handleUnlike = () => {
		const data = {
			to: match.data.id
		};

		axios.post('/unlikes', data)
		.then(() => {
			MatchPull(dispatch);
		});
	}

	return (
		<div className='match-card'>
			<div className='match-card-pictures'>
				<div className='match-card-picture' style={{
					backgroundImage: `url('${IMAGE}${match.data.picture1}')`
				}}></div>
				<div className='match-card-picture' style={{
					backgroundImage: `url('${IMAGE}${match.data.picture2}')`
				}}></div>
				<div className='match-card-picture' style={{
					backgroundImage: `url('${IMAGE}${match.data.picture3}')`
				}}></div>
				<div className='match-card-picture' style={{
					backgroundImage: `url('${IMAGE}${match.data.picture4}')`
				}}></div>
				<div className='match-card-picture' style={{
					backgroundImage: `url('${IMAGE}${match.data.picture5}')`
				}}></div>
			</div>
			<div className='match-card-title'>{match.data.first_name} {match.data.last_name} ({match.data.age})</div>
			<FaArrowAltCircleLeft className='match-card-arrow match-card-arrow-left' onClick={ () => _handleIndex(false, -1) } />
			<FaArrowAltCircleRight className='match-card-arrow match-card-arrow-right' onClick={ () => _handleIndex(true, -1) } />
			<FaTimes className='match-card-icon match-card-icon-dislike' onClick={ () => _handleUnlike() } />
			<FaSearchPlus className='match-card-icon match-card-icon-detail' onClick={ () => _handleDetail() }/>
			<FaHeart className='match-card-icon match-card-icon-like' onClick={ () => _handleLike() } />
		</div>
	);
}

export default Card;