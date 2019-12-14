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

	const _handleIndex = (toRight) => {
		let result = 0;
		if(toRight) {
			if(0 <= index && index <= 3)
				result = index + 1;
			else
				result = 0;
		} else {
			if(1 <= index && index <= 4)
				result = index - 1;
			else
				result = 4;
		}
		setIndex(result);
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
				{match.data.picture1 !== '' && match.data.picture1 !== undefined ?
					<div className='match-card-picture' style={{
						backgroundImage: `url('${IMAGE}${match.data.picture1}')`
					}}></div>
				: <div className='match-card-picture'>This slot is empty</div> }
				{match.data.picture2 !== '' && match.data.picture2 !== undefined ?
					<div className='match-card-picture' style={{
						backgroundImage: `url('${IMAGE}${match.data.picture2}')`
					}}></div>
				: <div className='match-card-picture'>This slot is empty</div> }
				{match.data.picture3 !== '' && match.data.picture3 !== undefined ?
					<div className='match-card-picture' style={{
						backgroundImage: `url('${IMAGE}${match.data.picture3}')`
					}}></div>
				: <div className='match-card-picture'>This slot is empty</div> }
				{match.data.picture4 !== '' && match.data.picture4 !== undefined ?
					<div className='match-card-picture' style={{
						backgroundImage: `url('${IMAGE}${match.data.picture4}')`
					}}></div>
				: <div className='match-card-picture'>This slot is empty</div> }
				{match.data.picture5 !== '' && match.data.picture5 !== undefined ?
					<div className='match-card-picture' style={{
						backgroundImage: `url('${IMAGE}${match.data.picture5}')`
					}}></div>
				: <div className='match-card-picture'>This slot is empty</div> }
			</div>
			<div className='match-card-title'>{match.data.first_name} {match.data.last_name} ({match.data.age})</div>
			<FaArrowAltCircleLeft className='match-card-arrow match-card-arrow-left' onClick={ () => _handleIndex(false) } />
			<FaArrowAltCircleRight className='match-card-arrow match-card-arrow-right' onClick={ () => _handleIndex(true) } />
			<FaTimes className='match-card-icon match-card-icon-dislike' onClick={ () => _handleUnlike() } />
			<FaSearchPlus className='match-card-icon match-card-icon-detail' onClick={ () => _handleDetail() }/>
			<FaHeart className='match-card-icon match-card-icon-like' onClick={ () => _handleLike() } />
		</div>
	);
}

export default Card;