import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { user_data , user_isComplete} from '../../../../actions';

import axios from 'axios';

import { FaPlusCircle } from 'react-icons/fa';

import '../index.css';

const Picture = () => {
	const user = useSelector(state => state.user);
	const [index, setIndex] = useState(0);
	const dispatch = useDispatch();

	const _handlePicture = (index) => {
		setIndex(index);
		document.getElementById('profile_picture').click();
	}

	const _handlePictureUpload = () => {
		let input = document.getElementById('profile_picture');
		let extension = input.value.split('.')[input.value.split('.').length - 1];
		if(extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
			let file = input.files[0];
			let reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				const data = {
					picture : reader.result,
					index: index
				}

				axios.put('/users/picture', data)
				.then((res) => {
					console.log(res.data);
					let result = user.data;
					if(index === 1)
						result.picture1 = res.data;
					if(index === 2)
						result.picture2 = res.data;
					if(index === 3)
						result.picture3 = res.data;
					if(index === 4)
						result.picture4 = res.data;
					if(index === 5)
						result.picture5 = res.data;
					dispatch(user_data(result));
					if(result.picture1 !== '' && result.first_name !== '' && result.last_name !== '' && result.address !== '') {
						dispatch(user_isComplete(true));
					} else {
						dispatch(user_isComplete(false));
					}
				});
				
				input.value = '';
			}
		} else {
			input.value = '';
		}
	}

	return (
		<div className='profile-container'>
			<div className='profile-title'>Picture</div>
			<div className='profile-description'>I currently have 4 windows open up… and I don’t know why.</div>
			<div className='profile-section'>
				{
					user.data.picture1 !== ''
					?
						<div className='profile-image' onClick={ () => _handlePicture(1) } style={{
							backgroundImage: `url('http://localhost:8443/images/${user.data.picture1}')`
						}}></div>
					:
						<div className='profile-image profile-image-none' onClick={ () => _handlePicture(1) }>
							<FaPlusCircle className='profile-image-none-icon' />
						</div>
				}
				{
					user.data.picture2 !== ''
					?
						<div className='profile-image' onClick={ () => _handlePicture(2) } style={{
							backgroundImage: `url('http://localhost:8443/images/${user.data.picture2}')`
						}}></div>
					:
						<div className='profile-image profile-image-none' onClick={ () => _handlePicture(2) }>
							<FaPlusCircle className='profile-image-none-icon' />
						</div>
				}
				{
					user.data.picture3 !== ''
					?
						<div className='profile-image' onClick={ () => _handlePicture(3) } style={{
							backgroundImage: `url('http://localhost:8443/images/${user.data.picture3}')`
						}}></div>
					:
						<div className='profile-image profile-image-none' onClick={ () => _handlePicture(3) }>
							<FaPlusCircle className='profile-image-none-icon' />
						</div>
				}
				{
					user.data.picture4 !== ''
					?
						<div className='profile-image' onClick={ () => _handlePicture(4) } style={{
							backgroundImage: `url('http://localhost:8443/images/${user.data.picture4}')`
						}}></div>
					:
						<div className='profile-image profile-image-none' onClick={ () => _handlePicture(4) }>
							<FaPlusCircle className='profile-image-none-icon' />
						</div>
				}
				{
					user.data.picture5 !== ''
					?
						<div className='profile-image' onClick={ () => _handlePicture(5) } style={{
							backgroundImage: `url('http://localhost:8443/images/${user.data.picture5}')`
						}}></div>
					:
						<div className='profile-image profile-image-none' onClick={ () => _handlePicture(5) }>
							<FaPlusCircle className='profile-image-none-icon' />
						</div>
				}
				<input id='profile_picture' type='file' onChange={ () => _handlePictureUpload() } style={{ display: 'none' }} />
			</div>
		</div>
	);
}

export default Picture;
