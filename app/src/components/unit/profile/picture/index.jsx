import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { FaPlusCircle } from 'react-icons/fa';

import '../index.css';

const Picture = () => {
	const user = useSelector(state => state.user);
	const [index, setIndex] = useState(0);

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
					picture : reader.result.replace('data:image/jpeg;base64,', '')
						.replace('data:image/jpg;base64,', '')
						.replace('data:image/png;base64,', ''),
					index: _handleIndex(index)
				}
				console.table(data);
				input.value = '';
			}
		} else {
			input.value = '';
		}
	}

	const _handleIndex = (index) => {
		let result = 1;

		if(user.data.profile1 === undefined && index > 1) {
			result = 1;
		} else if(user.data.profile2 === undefined && index > 2) {
			result = 2;
		} else if(user.data.profile3 === undefined && index > 3) {
			result = 3;
		} else if(user.data.profile4 === undefined && index > 4) {
			result = 4;
		} else if(user.data.profile5 === undefined && index > 5) {
			result = 5;
		}
		return result;
	}

	return (
		<div className='profile-container'>
			<div className='profile-title'>Picture</div>
			<div className='profile-description'>I currently have 4 windows open up… and I don’t know why.</div>
			<div className='profile-section'>
				{
					user.data.profile1 !== undefined
					?
						<div className='profile-image' onClick={ () => _handlePicture(1) } style={{
							backgroundImage: 'url(\'' + user.data.profile1 + '\')'
						}}></div>
					:
						<div className='profile-image profile-image-none' onClick={ () => _handlePicture(1) }>
							<FaPlusCircle className='profile-image-none-icon' />
						</div>
				}
				{
					user.data.profile2 !== undefined
					?
						<div className='profile-image' onClick={ () => _handlePicture(2) } style={{
							backgroundImage: 'url(\'' + user.data.profile2 + '\')'
						}}></div>
					:
						<div className='profile-image profile-image-none' onClick={ () => _handlePicture(2) }>
							<FaPlusCircle className='profile-image-none-icon' />
						</div>
				}
				{
					user.data.profile3 !== undefined
					?
						<div className='profile-image' onClick={ () => _handlePicture(3) } style={{
							backgroundImage: 'url(\'' + user.data.profile3 + '\')'
						}}></div>
					:
						<div className='profile-image profile-image-none' onClick={ () => _handlePicture(3) }>
							<FaPlusCircle className='profile-image-none-icon' />
						</div>
				}
				{
					user.data.profile4 !== undefined
					?
						<div className='profile-image' onClick={ () => _handlePicture(4) } style={{
							backgroundImage: 'url(\'' + user.data.profile4 + '\')'
						}}></div>
					:
						<div className='profile-image profile-image-none' onClick={ () => _handlePicture(4) }>
							<FaPlusCircle className='profile-image-none-icon' />
						</div>
				}
				{
					user.data.profile5 !== undefined
					?
						<div className='profile-image' onClick={ () => _handlePicture(5) } style={{
							backgroundImage: 'url(\'' + user.data.profile5 + '\')'
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
