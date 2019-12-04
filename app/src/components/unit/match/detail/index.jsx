import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { match_isDetail } from '../../../../actions';

import { FaBirthdayCake, FaLocationArrow, FaRuler, FaTimes, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaSearchMinus, FaHeart } from 'react-icons/fa';

import Profile1 from '../../../../resources/profile1.jpeg';
import Profile2 from '../../../../resources/profile2.jpeg';
import Profile3 from '../../../../resources/profile3.jpeg';
import Profile4 from '../../../../resources/profile4.jpeg';
import Profile5 from '../../../../resources/profile5.jpeg';

import '../index.css';

const Detail = () => {
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
		let images = document.getElementsByClassName('match-detail-picture');
		for(let i = 0; i < images.length; i++) {
			if(i === index) {
				images[i].style.opacity = 1;
			} else {
				images[i].style.opacity = 0;
			}
		}
	}

	return (
		<div className='match-detail'>
			<div className='match-detail-pictures'>
				<div className='match-detail-picture' style={{
					backgroundImage: 'url(\'' + Profile1 + '\')'
				}}></div>
				<div className='match-detail-picture' style={{
					backgroundImage: 'url(\'' + Profile2 + '\')'
				}}></div>
				<div className='match-detail-picture' style={{
					backgroundImage: 'url(\'' + Profile3 + '\')'
				}}></div>
				<div className='match-detail-picture' style={{
					backgroundImage: 'url(\'' + Profile4 + '\')'
				}}></div>
				<div className='match-detail-picture' style={{
					backgroundImage: 'url(\'' + Profile5 + '\')'
				}}></div>
				<FaArrowAltCircleLeft className='match-detail-arrow match-detail-arrow-left' onClick={ () => _handleIndex(false, -1) } />
				<FaArrowAltCircleRight className='match-detail-arrow match-detail-arrow-right' onClick={ () => _handleIndex(true, -1) } />
				<FaTimes className='match-detail-reaction-icon match-detail-reaction-icon-dislike' />
				<FaSearchMinus className='match-detail-reaction-icon match-detail-reaction-icon-detail' onClick={ () => dispatch(match_isDetail(false)) }/>
				<FaHeart className='match-detail-reaction-icon match-detail-reaction-icon-like' />
			</div>
			<div className='match-detail-container'>
				<div className='match-detail-name'>Aidan Lim</div>
				<FaBirthdayCake className='match-detail-icon' />
				<div className='match-detail-content'>Born in 1991 (28 years old)</div>
				<FaLocationArrow className='match-detail-icon' />
				<div className='match-detail-content'>Live in Fremont, CA, USA</div>
				<FaRuler className='match-detail-icon' />
				<div className='match-detail-content'>16.3 miles away</div>
				<div className='match-detail-bio'>Hello! I'm Aidan Lim</div>
				<div className='match-detail-tag-box'>
					<div className='match-detail-tag-box-title'>I am ... </div>
					<div className='match-detail-tag-box-content'>#hello</div>
				</div>
				<div className='match-detail-tag-box'>
					<div className='match-detail-tag-box-title'>I am looking for ... </div>
					<div className='match-detail-tag-box-content'>#hello</div>
				</div>
			</div>
		</div>
	);
}

export default Detail;