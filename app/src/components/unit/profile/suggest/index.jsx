import React from 'react';

import '../index.css';

const Suggest = ({suggest, index, _handleAddTagFromSuggest}) => {
	return (
		<div className='profile-suggest' onClick={() => _handleAddTagFromSuggest(suggest.name)}>
			{suggest.name} ({suggest.count})
		</div>
	);
}

export default Suggest;