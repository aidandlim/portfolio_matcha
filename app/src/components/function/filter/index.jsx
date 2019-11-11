import React from 'react';

import { useSelector } from 'react-redux';

import './index.css';

const Filter = () => {
    const ui = useSelector(state => state.ui);

    let color = '';

	if(ui.color === 0) // Red
		color = '#e74c3c';
	else if(ui.color === 1) // Orange
		color = '#e67e22';
	else if(ui.color === 2) // Yellow
		color = '#f39c12';
	else if(ui.color === 3) // Green
		color = '#27ae60';
	else if(ui.color === 4) // Blue
		color = '#2980b9';
	else if(ui.color === 5) // Navy
		color = '#34495e';
	else if(ui.color === 6) // Purple
		color = '#8e44ad';
    
	return (
        <div className='filter'>
            <div className='filter-header' style={{
                backgroundColor: color
            }}>Filter</div>
            <div className='filter-body'></div>
        </div>
	);
}

export default Filter;
