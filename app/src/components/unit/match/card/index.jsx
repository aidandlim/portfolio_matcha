import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { match_isDetail } from '../../../../actions';

import axios from 'axios';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaTimes, FaSearchPlus, FaHeart } from 'react-icons/fa';

import '../index.css';

const Card = () => {
	const match = useSelector(state => state.match);
	const dispatch = useDispatch();

	const [ index, setIndex ] = useState(0);

	useEffect(() => {
		_handleImage();
	});

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

	const _handleImage = () => {
		let images = document.getElementsByClassName('match-card-picture');
		let pointer = document.getElementsByClassName('match-card-pointer');
		for(let i = 0; i < images.length; i++) {
			if(i === index) {
				images[i].style.opacity = 1;
				pointer[i].style.opacity = 1;
			} else {
				images[i].style.opacity = 0;
				pointer[i].style.opacity = 0.5;
			}
		}
	}

	const _handleLike = () => {
		const data = {
			to: match.id
		};

		axios.post('/likes', data)
		.then(res => {
			if(res.data) {
				// 
			} else {
				//
			}
		});
	}

	const _handleDislike = () => {
		const data = {
			to: match.id
		};

		axios.post('/dislikes', data)
		.then(res => {
			if(res.data) {
				// 
			} else {
				//
			}
		});
	}

	return (
		<div className='match-card'>
			<div className='match-card-pointer' onClick={ () => _handleIndex(false, 0) }></div>
			<div className='match-card-pointer' onClick={ () => _handleIndex(false, 1) }></div>
			<div className='match-card-pointer' onClick={ () => _handleIndex(false, 2) }></div>
			<div className='match-card-pointer' onClick={ () => _handleIndex(false, 3) }></div>
			<div className='match-card-pointer' onClick={ () => _handleIndex(false, 4) }></div>
			<div className='match-card-pictures'>
				<div className='match-card-picture' style={{
					backgroundImage: 'url(\'' + match.profile1 + '\')'
				}}></div>
				<div className='match-card-picture' style={{
					backgroundImage: 'url(\'' + match.profile2 + '\')'
				}}></div>
				<div className='match-card-picture' style={{
					backgroundImage: 'url(\'' + match.profile3 + '\')'
				}}></div>
				<div className='match-card-picture' style={{
					backgroundImage: 'url(\'' + match.profile4 + '\')'
				}}></div>
				<div className='match-card-picture' style={{
					backgroundImage: 'url(\'' + match.profile5 + '\')'
				}}></div>
			</div>
			<div className='match-card-title'>Aidan (28)</div>
			<div className='match-card-distance'></div>
			<FaArrowAltCircleLeft className='match-card-arrow match-card-arrow-left' onClick={ () => _handleIndex(false, -1) } />
			<FaArrowAltCircleRight className='match-card-arrow match-card-arrow-right' onClick={ () => _handleIndex(true, -1) } />
			<FaTimes className='match-card-icon match-card-icon-dislike' onClick={ () => _handleDislike() } />
			<FaSearchPlus className='match-card-icon match-card-icon-detail' onClick={ () => dispatch(match_isDetail(true)) }/>
			<FaHeart className='match-card-icon match-card-icon-like' onClick={ () => _handleLike() } />
		</div>
	);
}

export default Card;