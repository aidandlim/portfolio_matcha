import React from 'react';

import { useDispatch } from 'react-redux';
import { ui_color } from '../../../actions';

import './index.css';

const Dashboard = () => {
	const dispatch = useDispatch();

	return (
		<div className='dashboard'>
			<p>user information</p>	
			<p>preference</p>
			<p>notification</p>
			<p>overview</p>
			<p>color theme</p>
			<button onClick={ () => dispatch(ui_color(0)) }>0</button>
			<button onClick={ () => dispatch(ui_color(1)) }>1</button>
			<button onClick={ () => dispatch(ui_color(2)) }>2</button>
			<button onClick={ () => dispatch(ui_color(3)) }>3</button>
			<button onClick={ () => dispatch(ui_color(4)) }>4</button>
			<button onClick={ () => dispatch(ui_color(5)) }>5</button>
			<button onClick={ () => dispatch(ui_color(6)) }>6</button>
		</div>
	);
}

export default Dashboard;
