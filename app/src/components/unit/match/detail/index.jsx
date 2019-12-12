import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { match_isDetail } from '../../../../actions';

import axios from 'axios';

import { FaBirthdayCake, FaLocationArrow, FaRuler, FaTimes, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaSearchMinus, FaHeart } from 'react-icons/fa';

import '../index.css';

const Detail = () => {
	const match = useSelector(state => state.match);
	const dispatch = useDispatch();

	const [ index, setIndex ] = useState(0);

	useEffect(() => {
		const data = {
			to: match.data.id
		}

		axios.post('visits', { params : data });

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
		let images = document.getElementsByClassName('match-detail-picture');
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
		<div className='match-detail'>
			<div className='match-detail-pictures'>
				<div className='match-detail-picture' style={{
					backgroundImage: 'url(\'' + match.data.picture1 + '\')'
				}}></div>
				<div className='match-detail-picture' style={{
					backgroundImage: 'url(\'' + match.data.picture2 + '\')'
				}}></div>
				<div className='match-detail-picture' style={{
					backgroundImage: 'url(\'' + match.data.picture3 + '\')'
				}}></div>
				<div className='match-detail-picture' style={{
					backgroundImage: 'url(\'' + match.data.picture4 + '\')'
				}}></div>
				<div className='match-detail-picture' style={{
					backgroundImage: 'url(\'' + match.data.picture5 + '\')'
				}}></div>
				<FaArrowAltCircleLeft className='match-detail-arrow match-detail-arrow-left' onClick={ () => _handleIndex(false, -1) } />
				<FaArrowAltCircleRight className='match-detail-arrow match-detail-arrow-right' onClick={ () => _handleIndex(true, -1) } />
				<FaTimes className='match-detail-reaction-icon match-detail-reaction-icon-dislike' onClick={ () => _handleDislike() }  />
				<FaSearchMinus className='match-detail-reaction-icon match-detail-reaction-icon-detail' onClick={ () => dispatch(match_isDetail(false)) }/>
				<FaHeart className='match-detail-reaction-icon match-detail-reaction-icon-like' onClick={ () => _handleLike() }  />
			</div>
			<div className='match-detail-container'>
				<div className='match-detail-name'>{match.data.first_name} {match.data.last_name}</div>
				<FaBirthdayCake className='match-detail-icon' />
				<div className='match-detail-content'>Born in {match.data.birth_year} (00 years old)</div>
				<FaLocationArrow className='match-detail-icon' />
				<div className='match-detail-content'>Live in {match.data.address}</div>
				<FaRuler className='match-detail-icon' />
				<div className='match-detail-content'>00.0 miles away</div>
				<div className='match-detail-bio'>{match.data.bio}</div>
				<div className='match-detail-tag-box'>
					<div className='match-detail-tag-box-title'>I am ... </div>
					<div className='match-detail-tag-box-content'>#</div>
				</div>
				<div className='match-detail-tag-box'>
					<div className='match-detail-tag-box-title'>I am looking for ... </div>
					<div className='match-detail-tag-box-content'>#</div>
				</div>
			</div>
		</div>
	);
}

export default Detail;