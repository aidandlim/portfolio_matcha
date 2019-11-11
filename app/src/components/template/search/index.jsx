import React from 'react';

import Filter from '../../function/filter';
import Map from '../../function/map';

import './index.css';

const Search = () => {
	return (
		<div className='search'>
			<Filter />
			<Map />
		</div>
	);
}

export default Search;
