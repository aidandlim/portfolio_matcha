import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { user_user, sign_message, sign_email, sign_password } from '../../../actions';

import SendSound from '../../../resources/send.mp3';
import RecieveSound from '../../../resources/receive.mp3';
import { FiActivity } from "react-icons/fi";
import './index.css';

const Signin = () => {
	const sign = useSelector(state => state.sign);
	const dispatch = useDispatch();

	const _handleForm = (e) => {
		if(e.keyCode === 13) {
			let temp = sign.message;
			if(temp[sign.message.length - 1].step === 0) {
				const email = e.target.value;
				if(_checkEmail(email)) {
					dispatch(sign_email(email));
					setTimeout(() => {
						temp = temp.concat([{
							dir: 1, 
							content: email, 
							step: 1
						}]);
						dispatch(sign_message(temp));
						document.getElementById('receive').currentTime = 0;
						document.getElementById('receive').play();
						document.getElementById('signin-body').scrollTop = document.getElementById('signin-body').scrollHeight;
					}, 0);
					setTimeout(() => {
						temp = temp.concat([{
							dir: 0, 
							content: 'Got it, And then, password please?', 
							step: 2
						}]);
						dispatch(sign_message(temp));
						document.getElementById('send').currentTime = 0;
						document.getElementById('send').play();
						document.getElementById('signin-body').scrollTop = document.getElementById('signin-body').scrollHeight;
					}, 1000);
				} else {
					setTimeout(() => {
						temp = temp.concat([{
							dir: 1, 
							content: email, 
							step: 1
						}]);
						dispatch(sign_message(temp));
						document.getElementById('receive').currentTime = 0;
						document.getElementById('receive').play();
						document.getElementById('signin-body').scrollTop = document.getElementById('signin-body').scrollHeight;
					}, 0);
					setTimeout(() => {
						temp = temp.concat([{
							dir: 0, 
							content: 'Oh, it seems this one is not email format! Try again.', 
							step: 0
						}]);
						dispatch(sign_message(temp));
						document.getElementById('send').currentTime = 0;
						document.getElementById('send').play();
						document.getElementById('signin-body').scrollTop = document.getElementById('signin-body').scrollHeight;
					}, 1000);
				}
			}
			if(temp[sign.message.length - 1].step === 2) {
				let password = e.target.value;
				dispatch(sign_password(password));
				setTimeout(() => {
					temp = temp.concat([{
						dir: 1, 
						content: password.replace(/./g, '*'), 
						step: 3
					}]);
					dispatch(sign_message(temp));
					document.getElementById('receive').currentTime = 0;
					document.getElementById('receive').play();
					document.getElementById('signin-body').scrollTop = document.getElementById('signin-body').scrollHeight;
				}, 0);
				setTimeout(() => {
					temp = temp.concat([{
						dir: 0, 
						content: 'Looks great. Processing!', 
						step: 4
					}]);
					dispatch(sign_message(temp));
					document.getElementById('send').currentTime = 0;
					document.getElementById('send').play();
					document.getElementById('signin-body').scrollTop = document.getElementById('signin-body').scrollHeight;
				}, 1000);
				setTimeout(() => {
					dispatch(user_user({email: sign.email}));
				}, 2000);
			}
		}
	}

	const _checkEmail = (email) => {
		let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
		if (regExp.test(email)) 
			return true;
		else 
			return false;
	}

	if(sign.message === null) {
		setTimeout(() => {
			dispatch(sign_message([{
				dir: 0, 
				content: 'Hey there! Glad to see you. What is your email?', 
				step: 0
			}]));
			document.getElementById('send').currentTime = 0;
			document.getElementById('send').play();
		}, 1000);
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
						message.dir ? 
							<div className='signin-message signin-answer' key={index}>{message.content}</div> :
							<div className='signin-message signin-question' key={index}>{message.content}</div>
					)}
				</div>
				<div className='signin-footer'>
					<form onSubmit={(e) => e.preventDefault()}>
						{ sign.message === null || (sign.message[sign.message.length - 1].step !== 0 && sign.message[sign.message.length - 1].step !== 2) ? <input className='signin-input' placeholder='Loading...' disabled /> : '' }
						{ sign.message !== null && sign.message[sign.message.length - 1].step === 0 ? <input className='signin-input' type='email' name='email' onKeyDown={ (e) => _handleForm(e) } placeholder='Email' autoFocus autoComplete='off' /> : '' }
						{ sign.message !== null && sign.message[sign.message.length - 1].step === 2 ? <input className='signin-input' type='password' name='password' onKeyDown={ (e) => _handleForm(e) } placeholder='Password' autoFocus autoComplete='off' /> : '' }
					</form>
				</div>
				<audio id='send'>
					<source src={SendSound} type="audio/mp3" />
				</audio>
				<audio id='receive'>
					<source src={RecieveSound} type="audio/mp3" />
				</audio>
			</div>
		</div>
	);
}

export default Signin;
