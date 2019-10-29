import React from 'react';

// import { useDispatch } from 'react-redux';
// import { ui_nav, ui_isLogin, ui_isRegister, ui_isForgot, user_user } from '../../../actions';

import { FiActivity } from "react-icons/fi";
import './index.css';

const Signin = () => {
	// const dispatch = useDispatch();

	return (
		<div className='signin'>
			<div className='title'>M@TCH@</div>
			<div className='signin-chatbot'>
				<div className='signin-chatbot-header'>
					<FiActivity className='signin-chatbot-header-profile' />
					<div className='signin-chatbot-header-nickname'>M@TCH@</div>
				</div>
				<div className='signin-chatbot-body'>
				
				</div>
				<div className='signin-chatbot-footer'>
				
				</div>
			</div>
		</div>
	);
}

export default Signin;
