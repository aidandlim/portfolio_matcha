import React, { useState } from 'react';

import axios from 'axios';

import Tag from '../tag';
import Suggest from '../suggest';

import '../index.css';

const Myself = () => {
	const [tags, setTags] = useState([]);
	const [suggests, setSuggests] = useState([]);
	
	const _handleAddTag = (e) => {
		e.preventDefault();
		if(document.myself.tag.value !== '') {
			const result = [...tags, document.myself.tag.value];
			setTags(result);
			setSuggests([]);

			const data = {
				tag: document.myself.tag.value,
				type: 'myself'
			}

			axios.post('/tags', data)
			.then((res) => {
				console.log(res);
			});
			
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

export default Myself;