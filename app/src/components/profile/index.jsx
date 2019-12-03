import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ui_color } from '../../actions';

import cookie from 'react-cookies'

import { HuePicker } from 'react-color';

import Profile1 from '../../resources/profile1.jpeg';
import Profile2 from '../../resources/profile2.jpeg';
import Profile3 from '../../resources/profile3.jpeg';

import { FaPlusCircle } from 'react-icons/fa';

import './index.css';

const Profile = () => {
	return (
		<div className='frame'>
			<div className='frame-header'>
				<div className='frame-title'>PROFILE</div>
			</div>
			<div className='frame-body'>
				<Picture />
				<Email />
				<Password />
				<Info />
				<Location />
				<Myself />
				<Preference />
				<Theme />
			</div>
		</div>
	);
}

export default Profile;

const Picture = () => {
	return (
		<div className='profile-container'>
			<div className='profile-title'>Picture</div>
			<div className='profile-description'>I currently have 4 windows open up… and I don’t know why.</div>
			<div className='profile-section'>
				<div className='profile-image' style={{
					backgroundImage: 'url(\'' + Profile1 + '\')'
				}}></div>
				<div className='profile-image' style={{
					backgroundImage: 'url(\'' + Profile2 + '\')'
				}}></div>
				<div className='profile-image' style={{
					backgroundImage: 'url(\'' + Profile3 + '\')'
				}}></div>
				<div className='profile-image profile-image-none'>
					<FaPlusCircle className='profile-image-none-icon' />
				</div>
				<div className='profile-image profile-image-none'>
					<FaPlusCircle className='profile-image-none-icon' />
				</div>
			</div>
		</div>
	);
}

const Email = () => {
	return (
		<div className='profile-container'>
			<div className='profile-title'>Email</div>
			<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
			<div className='profile-section'>
				<input type='email' className='profile-input' placeholder='Email' />
				<input type='button' className='profile-submit' value='UPDATE' />
			</div>
		</div>
	);
}

const Password = () => {
	return (
		<div className='profile-container'>
			<div className='profile-title'>Password</div>
			<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
			<div className='profile-section'>
				<input type='password' className='profile-input' placeholder='New Password' />
				<input type='password' className='profile-input' placeholder='Confirm Password' />
				<input type='button' className='profile-submit' value='UPDATE' />
			</div>
		</div>
	);
}

const Info = () => {
	return (
		<div className='profile-container'>
			<div className='profile-title'>User Information</div>
			<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
			<div className='profile-section'>
				<input type='text' className='profile-input profile-input-first' placeholder='First Name' />
				<input type='text' className='profile-input profile-input-first' placeholder='Last Name' />
				<input type='text' className='profile-input profile-input-first profile-input-last' placeholder='Birth Year' />
				<input type='text' className='profile-input' placeholder='Gender' />
				<input type='text' className='profile-input' placeholder='Preference' />
				<input type='button' className='profile-submit' value='UPDATE' />
			</div>
		</div>
	);
}

const Location = () => {
	return (
		<div className='profile-container'>
			<div className='profile-title'>Location</div>
			<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
			<div className='profile-section'>
				<input type='password' className='profile-input' placeholder='Zip Code' />
				<input type='button' className='profile-submit' value='UPDATE' />
			</div>
		</div>
	);
}

const Myself = () => {
	const [tags, setTags] = useState([]);
	const [suggests, setSuggests] = useState([]);
	
	const _handleAddTag = (e) => {
		e.preventDefault();
		if(document.myself.tag.value !== '') {
			const result = [...tags, document.myself.tag.value];
			setTags(result);
			document.myself.tag.value = '';
		}
	}

	const _handleAddTagFromSuggest = (value) => {
		const result = [...tags, value];
		setTags(result);
		setSuggests([]);
		document.myself.tag.value = '';
	}
	
	const _handleDeleteTag = (index) => {
		const result = [...tags];
		result.splice(index, 1);
		setTags(result);
	}

	const _handleSuggest = () => {
		const data = [
			{
				id: 0,
				name: 'hello',
				count: '1435'
			},
			{
				id: 1,
				name: 'world',
				count: '745'
			}
		]
		if(document.myself.tag.value !== '') {
			setSuggests(data);
		} else {
			setSuggests([]);
		}
	}

	return (
		<div className='profile-container'>
			<div className='profile-title'>Describe Myself</div>
			<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
			<div className='profile-section'>
				<div className='profile-tag-box'>
					{tags.length !== 0 ? tags.map((tag, index) => (
						<Tag key={index} tag={tag} index={index} _handleDeleteTag={_handleDeleteTag} />
					)) : 'There is no tag yet! Please add tag!'}
				</div>
				<form name='myself' onSubmit={_handleAddTag} autoComplete='off'>
					<input type='text' className='profile-input' name='tag' placeholder='Tag' onChange={_handleSuggest} />
					<input type='submit' className='profile-submit' value='ADD'/>
				</form>
				<div className='profile-suggest-box'>
					{suggests.map((suggest, index) => (
						<Suggest key={index} suggest={suggest} index={index} _handleAddTagFromSuggest={_handleAddTagFromSuggest} />
					))}
				</div>
			</div>
		</div>
	);
}

const Preference = () => {
	const [tags, setTags] = useState([]);
	const [suggests, setSuggests] = useState([]);
	
	const _handleAddTag = (e) => {
		e.preventDefault();
		if(document.prefer.tag.value !== '') {
			const result = [...tags, document.prefer.tag.value];
			setTags(result);
			document.prefer.tag.value = '';
		}
	}

	const _handleAddTagFromSuggest = (value) => {
		const result = [...tags, value];
		setTags(result);
		setSuggests([]);
		document.myself.tag.value = '';
	}
	
	const _handleDeleteTag = (index) => {
		const result = [...tags];
		result.splice(index, 1);
		setTags(result);
	}

	const _handleSuggest = () => {
		const data = [
			{
				id: 0,
				name: 'hello',
				count: '1435'
			},
			{
				id: 1,
				name: 'world',
				count: '745'
			}
		]
		if(document.prefer.tag.value !== '') {
			setSuggests(data);
		} else {
			setSuggests([]);
		}
	}

	return (
		<div className='profile-container'>
			<div className='profile-title'>Describe Preference</div>
			<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
			<div className='profile-section'>
				<div className='profile-tag-box'>
					{tags.length !== 0 ? tags.map((tag, index) => (
						<Tag key={index} tag={tag} index={index} _handleDeleteTag={_handleDeleteTag} />
					)) : 'There is no tag yet! Please add tag!'}
				</div>
				<form name='prefer' onSubmit={_handleAddTag} autoComplete='off'>
					<input type='text' className='profile-input' name='tag' placeholder='Tag' onChange={_handleSuggest} />
					<input type='submit' className='profile-submit' value='ADD'/>
				</form>
				<div className='profile-suggest-box'>
					{suggests.map((suggest, index) => (
						<Suggest key={index} suggest={suggest} index={index} _handleAddTagFromSuggest={_handleAddTagFromSuggest} />
					))}
				</div>
			</div>
		</div>
	);
}

const Tag = ({tag, index, _handleDeleteTag}) => {
	return (
		<div className='profile-tag' onDoubleClick={() => _handleDeleteTag(index)}>
			{tag}
		</div>
	);
}

const Suggest = ({suggest, index, _handleAddTagFromSuggest}) => {
	return (
		<div className='profile-suggest' onClick={() => _handleAddTagFromSuggest(suggest.name)}>
			{suggest.name} ({suggest.count})
		</div>
	);
}

const Theme = () => {
	const ui = useSelector(state => state.ui);
	const dispatch = useDispatch();

	const _handleColor = (color) => {
		cookie.save('theme-color', color.hex, { path: '/' });
		dispatch(ui_color(color.hex));
	}

	return (
		<div className='profile-container'>
			<div className='profile-title'>Theme</div>
			<div className='profile-description'>I currently have 4 windows open up… and I don’t know why.</div>
			<div className='profile-section'>
				<HuePicker 
					className='profile-theme' 
					width='calc(100% - 1rem)'
					color={ui.color} 
					onChange={_handleColor}
				/>
			</div>
		</div>
	);
}