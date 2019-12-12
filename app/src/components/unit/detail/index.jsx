import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ui_detail } from '../../../actions';

import axios from 'axios';

import { IMAGE } from '../../../api';

import { FaRegTimesCircle } from 'react-icons/fa';
import './index.css';

const Detail = () => {
	const detail = useSelector(state => state.detail);
	const dispatch = useDispatch();

	const [user, setUser] = useState({});

	useEffect(() => {
		const data = {
			userId: detail.id
		}

		axios.get('/users', { params: data })
		.then((res) => {
			setUser(res.data[0]);
			axios.post('/visits', { to: res.data[0].id });
		});
	}, [detail]);

	const _handleExit = () => {
		dispatch(ui_detail(false));
	}

	return (
		<div className='detail'>
			<div className='frame'>
				<div className='frame-header'>
					<div className='frame-title'>{user.first_name}'s Profile</div>
					<FaRegTimesCircle className='frame-exit' onClick={ () => _handleExit() }/>
				</div>
				<div className='frame-body'>
					<div className='detail'>
						{
							user.picture1 !== ''
							?
								<div className='profile-image' style={{
									backgroundImage: `url('${IMAGE}${user.picture1}')`
								}}>
								
								</div>
							:
								<div className='profile-image profile-image-none'>
									
								</div>
						}
						{
							user.picture2 !== ''
							?
								<div className='profile-image' style={{
									backgroundImage: `url('${IMAGE}${user.picture2}')`
								}}>
									
								</div>
							:
								<div className='profile-image profile-image-none'>
									
								</div>
						}
						{
							user.picture3 !== ''
							?
								<div className='profile-image' style={{
									backgroundImage: `url('${IMAGE}${user.picture3}')`
								}}>
									
								</div>
							:
								<div className='profile-image profile-image-none'>
									
								</div>
						}
						{
							user.picture4 !== ''
							?
								<div className='profile-image' style={{
									backgroundImage: `url('${IMAGE}${user.picture4}')`
								}}>
									
								</div>
							:
								<div className='profile-image profile-image-none'>
									
								</div>
						}
						{
							user.picture5 !== ''
							?
								<div className='profile-image' style={{
									backgroundImage: `url('${IMAGE}${user.picture5}')`
								}}>
									
								</div>
							:
								<div className='profile-image profile-image-none'>
									
								</div>
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Detail;