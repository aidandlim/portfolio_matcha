import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Tag from '../tag';
import Suggest from '../suggest';

import '../index.css';

const Myself = () => {
	const [tags, setTags] = useState([]);
	const [suggests, setSuggests] = useState([]);

	useEffect(() => {
		const data = {
			type: 'myself'
		}

		axios.get('/tags', { params : data })
		.then((res) => {
			console.log(res);
			setTags(res.data);
		});
	}, []);
	
	const _handleAddTag = (e) => {
		e.preventDefault();
		if(document.myself.tag.value !== '') {
			if(_handleCheckDuplicate(document.myself.tag.value)) {
				const result = [...tags, {tag: document.myself.tag.value}];
				setTags(result);

				const data = {
					tag: document.myself.tag.value,
					type: 0
				}

				axios.post('/tags', data);
			}
			setSuggests([]);
			document.myself.tag.value = '';
		}
	}

	const _handleAddTagFromSuggest = (value) => {
		if(_handleCheckDuplicate(value)) {
			const result = [...tags, {tag: value}];
			setTags(result);
			
			const data = {
				tag: value,
				type: 0
			}

			axios.post('/tags', data);
		}
		setSuggests([]);
		document.myself.tag.value = '';
	}

	const _handleCheckDuplicate = (value) => {
		const result = [...tags];

		for(let i = 0; i < result.length; i++) {
			if(value === result[i].tag) {
				return false;
			}
		}

		return true;
	}
	
	const _handleDeleteTag = (index) => {
		const result = [...tags];
		
		const data = {
			tag: result[index].tag,
			type: 0
		}

		axios.delete('/tags', data);

		result.splice(index, 1);
		setTags(result);
	}

	const _handleSuggest = () => {
		if(document.myself.tag.value !== '') {
			const data = {
				type: 'search',
				keyword: document.myself.tag.value,
			}

			axios.get('/tags', { params : data })
			.then((res) => {
				setSuggests(res.data);
			});
		} else {
			setSuggests([]);
		}
	}

	return (
		<div className='profile-container'>
			<div className='profile-title'>Describe Who I Am</div>
			<div className='profile-description'>Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.</div>
			<div className='profile-section'>
				<div className='profile-tag-box'>
					{tags.length !== 0 ? tags.map((tag, index) => (
						<Tag key={index} tag={tag} index={index} _handleDeleteTag={_handleDeleteTag} />
					)) : 'There is no tag yet! Please add tag!'}
				</div>
				<form name='myself' onSubmit={_handleAddTag} autoComplete='off'>
					<input type='text' className='profile-input' name='tag' placeholder='Tag' onChange={() => _handleSuggest()} />
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