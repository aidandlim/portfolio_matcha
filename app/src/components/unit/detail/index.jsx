import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';

import ChatListPull from '../../util/pull/chatListPull';
import OverviewPull from '../../util/pull/overviewPull';
import DetailPull from '../../util/pull/detailPull';
import MatchPull from '../../util/pull/matchPull';

import { IMAGE } from '../../../api';

import { FaRegTimesCircle, FaUserAlt, FaLocationArrow, FaHeart } from 'react-icons/fa';
import './index.css';

const Detail = () => {
	const detail = useSelector(state => state.detail);
	const dispatch = useDispatch();

	useEffect(() => {
		axios.post('/visits', { to: detail.data.id });
	}, [detail]);

	const _handleFollow = (type) => {
		if(type) {
			const data = {
				to: detail.data.id
			}

			axios.post('/likes', data)
			.then(() => {
				ChatListPull(dispatch);
				OverviewPull(dispatch, 1);
				DetailPull(dispatch, detail.data.id);
				MatchPull(dispatch);
			});
		} else {
			const data = {
				id: detail.data.isLike
			}

			axios.delete('/likes', { params : data })
			.then(() => {
				ChatListPull(dispatch);
				OverviewPull(dispatch, 1);
				DetailPull(dispatch, detail.data.id);
				MatchPull(dispatch);
			});
		}
	}

	const _handleExit = () => {
		DetailPull(dispatch, -1);
	}

	return (
		<div className='detail'>
			<div className='frame'>
				<div className='frame-header'>
					<div className='frame-title'>
						<div className='detail-title'>
							{detail.data.first_name} {detail.data.last_name}'s Profile
						</div>
						{detail.data.isLike === null 
							?
							<div className='detail-islike' onClick={ () => _handleFollow(1) }>Follow Now</div>
							:
							<div className='detail-islike-active' onClick={ () => _handleFollow(0) }>Followed</div>
						}
					</div>
					<FaRegTimesCircle className='frame-exit' onClick={ () => _handleExit() }/>
				</div>
				<div className='frame-body'>
					<div className='detail-picture-container'>
						{
							detail.data.picture1 !== undefined && detail.data.picture1 !== ''
							?
								<div className='profile-image' style={{
									backgroundImage: `url('${IMAGE}${detail.data.picture1}')`
								}}>
								
								</div>
							:
								<div className='profile-image profile-image-none'>
									
								</div>
						}
						{
							detail.data.picture2 !== undefined && detail.data.picture2 !== ''
							?
								<div className='profile-image' style={{
									backgroundImage: `url('${IMAGE}${detail.data.picture2}')`
								}}>
									
								</div>
							:
								<div className='profile-image profile-image-none'>
									
								</div>
						}
						{
							detail.data.picture3 !== undefined && detail.data.picture3 !== ''
							?
								<div className='profile-image' style={{
									backgroundImage: `url('${IMAGE}${detail.data.picture3}')`
								}}>
									
								</div>
							:
								<div className='profile-image profile-image-none'>
									
								</div>
						}
						{
							detail.data.picture4 !== undefined && detail.data.picture4 !== ''
							?
								<div className='profile-image' style={{
									backgroundImage: `url('${IMAGE}${detail.data.picture4}')`
								}}>
									
								</div>
							:
								<div className='profile-image profile-image-none'>
									
								</div>
						}
						{
							detail.data.picture5 !== undefined && detail.data.picture5 !== ''
							?
								<div className='profile-image' style={{
									backgroundImage: `url('${IMAGE}${detail.data.picture5}')`
								}}>
									
								</div>
							:
								<div className='profile-image profile-image-none'>
									
								</div>
						}
					</div>
					<div className='detail-info-container'>
						<FaUserAlt className='detail-info-icon' />
						<div className='detail-info-content'>Born in {detail.data.birth_year}, 28 years old.</div>
					</div>
					<div className='detail-info-container'>
						<FaLocationArrow className='detail-info-icon' />
						<div className='detail-info-content'>In {detail.data.address}. 10.0 miles away.</div>
					</div>
					<div className='detail-info-container'>
						<FaHeart className='detail-info-icon' />
						<div className='detail-info-content'>76%</div>
					</div>
					<div className='detail-tag-title'>I am ...</div>
					<div className='detail-tag-container'>
						{detail.tag1.length !== 0 ? detail.tag1.map((tag, index) => 
							<div className='detail-tag' key={index}>{tag.tag}</div>
						) : 'There is no tag yet!'}
					</div>
					<div className='detail-tag-title'>I am looking for ...</div>
					<div className='detail-tag-container'>
						{detail.tag2.length !== 0 ? detail.tag2.map((tag, index) => 
							<div className='detail-tag' key={index}>{tag.tag}</div>
						) : 'There is no tag yet!'}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Detail;