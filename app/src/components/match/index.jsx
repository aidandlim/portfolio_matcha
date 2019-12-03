import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { match_isDetail } from '../../actions';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaTimes, FaSearchPlus, FaSearchMinus, FaHeart } from 'react-icons/fa';

import Profile1 from '../../resources/profile1.jpeg';
import Profile2 from '../../resources/profile2.jpeg';
import Profile3 from '../../resources/profile3.jpeg';
import Profile4 from '../../resources/profile4.jpeg';
import Profile5 from '../../resources/profile5.jpeg';

import './index.css';

const Match = () => {
	const match = useSelector(state => state.match);

	return (
		<div className='match'>
			{match.isDetail ? <Detail /> : <Card />}
		</div>
	);
}

export default Match;

const Card = () => {
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
		let images = document.getElementsByClassName('card-picture');
		let pointer = document.getElementsByClassName('card-pointer');
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

	return (
		<div className='card'>
			<div className='card-pointer' onClick={ () => _handleIndex(false, 0) }></div>
			<div className='card-pointer' onClick={ () => _handleIndex(false, 1) }></div>
			<div className='card-pointer' onClick={ () => _handleIndex(false, 2) }></div>
			<div className='card-pointer' onClick={ () => _handleIndex(false, 3) }></div>
			<div className='card-pointer' onClick={ () => _handleIndex(false, 4) }></div>
			<div className='card-pictures'>
				<div className='card-picture' style={{
					backgroundImage: 'url(\'' + Profile1 + '\')'
				}}></div>
				<div className='card-picture' style={{
					backgroundImage: 'url(\'' + Profile2 + '\')'
				}}></div>
				<div className='card-picture' style={{
					backgroundImage: 'url(\'' + Profile3 + '\')'
				}}></div>
				<div className='card-picture' style={{
					backgroundImage: 'url(\'' + Profile4 + '\')'
				}}></div>
				<div className='card-picture' style={{
					backgroundImage: 'url(\'' + Profile5 + '\')'
				}}></div>
			</div>
			<div className='card-title'>Aidan (28)</div>
			<div className='card-distance'></div>
			<FaArrowAltCircleLeft className='card-arrow card-arrow-left' onClick={ () => _handleIndex(false, -1) } />
			<FaArrowAltCircleRight className='card-arrow card-arrow-right' onClick={ () => _handleIndex(true, -1) } />
			<FaTimes className='card-icon card-icon-dislike' />
			<FaSearchPlus className='card-icon card-icon-detail' onClick={ () => dispatch(match_isDetail(true)) }/>
			<FaHeart className='card-icon card-icon-like' />
		</div>
	);
}

const Detail = () => {
	const dispatch = useDispatch();

	return (
		<div className='detail'>
			<div className='detail-picture' style={{
				backgroundImage: 'url(\'' + Profile1 + '\')'
			}}></div>
			<div className='detail-container'>
				<div className='detail-name'>Aidan Lim (28)</div>
				<div className='detail-location'>in Fremont, CA, USA</div>
				<div className='detail-title'>Aidan is ...</div>
				<div className='detail-list'></div>
				<div className='detail-title'>Aidan likes ...</div>
				<div className='detail-list'></div>
				<div className='detail-reaction'>
					<FaTimes className='detail-icon detail-icon-dislike' />
					<FaSearchMinus className='detail-icon detail-icon-detail' onClick={ () => dispatch(match_isDetail(false)) }/>
					<FaHeart className='detail-icon detail-icon-like' />
				</div>
			</div>
		</div>
	);
}
