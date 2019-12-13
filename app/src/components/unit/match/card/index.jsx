import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { match_isDetail } from '../../../../actions';

import axios from 'axios';

import { IMAGE } from '../../../../api';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaTimes, FaSearchPlus, FaHeart } from 'react-icons/fa';

import '../index.css';

const Card = ({ matches, setMatches, newMatches }) => {
	const [ index, setIndex ] = useState(0);
	const dispatch = useDispatch();

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
		for(let i = 0; i < images.length; i++) {
			if(i === index) {
				images[i].style.opacity = 1;
			} else {
				images[i].style.opacity = 0;
			}
		}
	}

	const _handleLike = () => {
		const data = {
			to: matches.id
		};

		axios.post('/likes', data);

		newMatches();
	}

	const _handleUnlike = () => {
		const data = {
			to: matches.id
		};

		axios.post('/unlikes', data);

		newMatches();
	}

	return (
		<div className='match-card'>
			<div className='match-card-pictures'>
				<div className='match-card-picture' style={{
					backgroundImage: `url('${IMAGE}${matches.picture1}')`
				}}></div>
				<div className='match-card-picture' style={{
					backgroundImage: `url('${IMAGE}${matches.picture2}')`
				}}></div>
				<div className='match-card-picture' style={{
					backgroundImage: `url('${IMAGE}${matches.picture3}')`
				}}></div>
				<div className='match-card-picture' style={{
					backgroundImage: `url('${IMAGE}${matches.picture4}')`
				}}></div>
				<div className='match-card-picture' style={{
					backgroundImage: `url('${IMAGE}${matches.picture5}')`
				}}></div>
			</div>
			<div className='match-card-title'>{matches.first_name} {matches.last_name} ({matches.age})</div>
			<FaArrowAltCircleLeft className='match-card-arrow match-card-arrow-left' onClick={ () => _handleIndex(false, -1) } />
			<FaArrowAltCircleRight className='match-card-arrow match-card-arrow-right' onClick={ () => _handleIndex(true, -1) } />
			<FaTimes className='match-card-icon match-card-icon-dislike' onClick={ () => _handleUnlike() } />
			<FaSearchPlus className='match-card-icon match-card-icon-detail' onClick={ () => dispatch(match_isDetail(true)) }/>
			<FaHeart className='match-card-icon match-card-icon-like' onClick={ () => _handleLike() } />
		</div>
	);
}

export default Card;