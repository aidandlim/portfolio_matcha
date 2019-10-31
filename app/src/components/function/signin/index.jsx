import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { user_user, sign_message, sign_email, sign_password } from '../../../actions';

import { FiActivity } from "react-icons/fi";
import './index.css';

const Signin = () => {
	const sign = useSelector(state => state.sign);
	const dispatch = useDispatch();

	const _initialize = () => {
		let temp = [{
			isQuestion: true, 
			content: 'Hey there! Glad to see you. What is your email?', 
			step: 0
		}];
		setTimeout(() => {
			_handleMessaging(temp, true);
		}, 1000);
	}

	const _handleChatting = (e) => {
		if(e.keyCode === 13) {
			let temp = sign.message;
			if(temp[sign.message.length - 1].step === 0) {
				const email = e.target.value;
				if(_checkEmailForm(email)) {
					dispatch(sign_email(email));
					setTimeout(() => {
						temp = temp.concat([{
							isQuestion: false, 
							content: email, 
							step: 1
						}]);
						_handleMessaging(temp, false);
					}, 0);
					setTimeout(() => {
						temp = temp.concat([{
							isQuestion: true, 
							content: 'Got it, And then, password please?', 
							step: 2
						}]);
						_handleMessaging(temp, true);
					}, 1000);
				} else {
					setTimeout(() => {
						temp = temp.concat([{
							isQuestion: false, 
							content: email, 
							step: 1
						}]);
						_handleMessaging(temp, false);
					}, 0);
					setTimeout(() => {
						temp = temp.concat([{
							isQuestion: true, 
							content: 'Oh, it seems this one is not email format! Try again.', 
							step: 0
						}]);
						_handleMessaging(temp, true);
					}, 1000);
				}
			}
			if(temp[sign.message.length - 1].step === 2) {
				let password = e.target.value;
				dispatch(sign_password(password));
				setTimeout(() => {
					temp = temp.concat([{
						isQuestion: false, 
						content: password.replace(/./g, '*'), 
						step: 3
					}]);
					_handleMessaging(temp, false);
				}, 0);
				setTimeout(() => {
					temp = temp.concat([{
						isQuestion: true, 
						content: 'Looks great. Processing!', 
						step: 4
					}]);
					_handleMessaging(temp, true);
				}, 1000);
				setTimeout(() => {
					_handleForm();
				}, 2000);
			}
		}
	}

	const _handleMessaging = (message, isSending) => {
		dispatch(sign_message(message));

		if(isSending) {
			document.getElementById('audio-send').currentTime = 0;
			document.getElementById('audio-send').play();
		} else {
			document.getElementById('audio-receive').currentTime = 0;
			document.getElementById('audio-receive').play();
		}

		document.getElementById('signin-body').scrollTop = document.getElementById('signin-body').scrollHeight;
	}

	const _checkEmailForm = (email) => {
		let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
		if (regExp.test(email)) 
			return true;
		else 
			return false;
	}

	const _handleForm = () => {
		dispatch(user_user({email: sign.email}));
		dispatch(sign_email(''));
		dispatch(sign_password(''));
	}

	if(sign.message === null) {
		_initialize();
	}

	return (
		<div className='signin'>
			<div className='title'>M@TCH@</div>
			<div className='signin-container'>
				<div className='signin-header'>
					<FiActivity className='signin-header-icon' />
					<div className='signin-header-title'>SIGN IN</div>
				</div>
				<div id='signin-body' className='signin-body'>
					{ sign.message !== null && sign.message.map((message, index) => 
						message.isQuestion ? 
							<div className='signin-message signin-question' key={index}>{message.content}</div> :
							<div className='signin-message signin-answer' key={index}>{message.content}</div>
					)}
				</div>
				<div className='signin-footer'>
					<form onSubmit={(e) => e.preventDefault()}>
						{ sign.message === null || (sign.message[sign.message.length - 1].step !== 0 && sign.message[sign.message.length - 1].step !== 2) ? <input className='signin-input' placeholder='Loading...' disabled /> : '' }
						{ sign.message !== null && sign.message[sign.message.length - 1].step === 0 ? <input className='signin-input' type='email' name='email' onKeyDown={ (e) => _handleChatting(e) } placeholder='Email' autoFocus autoComplete='off' /> : '' }
						{ sign.message !== null && sign.message[sign.message.length - 1].step === 2 ? <input className='signin-input' type='password' name='password' onKeyDown={ (e) => _handleChatting(e) } placeholder='Password' autoFocus autoComplete='off' /> : '' }
					</form>
				</div>
				
			</div>
		</div>
	);
}

export default Signin;
